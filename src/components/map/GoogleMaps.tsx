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
      // const { Geocoder } = (await loader.importLibrary('geocoding')) as google.maps.GeocodingLibrary;

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
          new Marker({
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

          // Add second marker at lat: 33.6, lng: -117.738
          const secondMarkerLocation = {
            lat: 33.6,
            lng: -117.738,
          };

          const secondMarker = new Marker({
            map: map,
            position: secondMarkerLocation,
          });

          // Add click event listener to second marker
          secondMarker.addListener('click', async () => {
            // const geocoder = new Geocoder();
            const location = {
              lat: secondMarkerLocation.lat,
              lng: secondMarkerLocation.lng,
            };
            // Reverse geocode the clicked coordinates to get the address
            // geocoder.geocode({ location }, (results, status) => {
            //   if (status === 'OK' && results[0]) {
            //     const address = results[0].formatted_address;
            //     // Display the address in an alert
            //     alert('Address: ' + address);
            //   } else {
            //     alert('Address not found');
            //   }
            // });
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