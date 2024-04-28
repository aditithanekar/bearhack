'use client';

import React, { useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMaps = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
        version: 'quarterly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = (await loader.importLibrary('marker')) as google.maps.MarkerLibrary;

      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          const locationInMap = {
            lat: latitude,
            lng: longitude,
          };

          const options: google.maps.MapOptions = {
            center: locationInMap,
            zoom: 15,
            mapId: 'NEXT_MAP',
          };

          const map = new Map(mapRef.current as HTMLDivElement, options);

          // Add user's marker with a custom icon (blue color)
          const currentUserMarker = new Marker({
            map: map,
            position: locationInMap,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: 'blue',
              fillOpacity: 1,
              strokeColor: 'white',
              strokeWeight: 1,
              scale: 10, // Adjust the size of the marker
            },
          });

          // Add click event listener to current location marker
          currentUserMarker.addListener('click', async () => {
            // Prompt user to select a CSV file
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = '.csv';
            fileInput.addEventListener('change', (event) => {
              const file = (event.target as HTMLInputElement).files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  const csvData = reader.result as string;
                  // Parse CSV data into rows
                  const rows = csvData.split('\n');
                  rows.forEach((row) => {
                    // Split row into columns
                    const columns = row.split(',');
                    // Output values from columns 3 and 4
                    const column3 = columns[4]; // Index 4 is latitude
                    const column4 = columns[5]; // Index 5 is longitude
                    console.log('Column 3:', column3);
                    console.log('Column 4:', column4);
                  });
                };
                reader.readAsText(file);
              }
            });
            fileInput.click();
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
          // Handle error gracefully
        }
      );
    };
    initializeMap();
  }, []);

  return (
    <div className="h-[950px]" ref={mapRef}>
      Google Maps
    </div>
  );
};

export default GoogleMaps;
