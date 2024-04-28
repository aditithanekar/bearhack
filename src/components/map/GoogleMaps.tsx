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
        (position) => {
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

          // Add user's marker
          new Marker({
            map: map,
            position: locationInMap,
          });

          // Add second marker at lat: 39.6, lng: -9.7
          const secondMarkerLocation = {
            lat: 33.6,
            lng: -117.738,
          };

          new Marker({
            map: map,
            position: secondMarkerLocation,
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
