// src/components/GoogleMap.jsx
import { useEffect, useRef } from 'react';

const GoogleMap = ({ locations, height = '400px', zoom = 7, center = { lat: 52.7, lng: 20.9 } }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    // Load Google Maps API
    const loadGoogleMapsAPI = () => {
      // Check if Google Maps API is already loaded
      if (window.google && window.google.maps) {
        initializeMap();
        return;
      }

      // Create script element
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      googleMapsScript.onload = initializeMap;
      document.head.appendChild(googleMapsScript);
    };

    // Initialize map
    const initializeMap = () => {
      if (!mapRef.current) return;

      // Create the map
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      // Bounds to fit all markers
      const bounds = new window.google.maps.LatLngBounds();

      // Add markers
      if (locations && locations.length) {
        // Clear previous markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Create new markers
        locations.forEach((location, index) => {
          if (!location.lat || !location.lng) return;

          const position = { lat: location.lat, lng: location.lng };
          const marker = new window.google.maps.Marker({
            position,
            map: mapInstanceRef.current,
            title: location.name || `Location ${index + 1}`,
            animation: window.google.maps.Animation.DROP,
            icon: {
              url: '/images/map-marker.png', // Custom marker icon (change as needed)
              scaledSize: new window.google.maps.Size(32, 32)
            }
          });

          // Add info window if location has details
          if (location.name || location.address) {
            const infoContent = `
              <div style="padding: 8px; max-width: 200px;">
                <h3 style="margin: 0 0 8px; font-weight: bold;">${location.name || 'Kebab Super King'}</h3>
                ${location.address ? `<p style="margin: 0 0 4px;">${location.address}</p>` : ''}
                ${location.phone ? `<p style="margin: 0 0 4px;"><a href="tel:${location.phone}" style="color: #1f6737;">${location.phone}</a></p>` : ''}
                ${location.hours ? `<p style="margin: 0; font-size: 12px;">${location.hours}</p>` : ''}
              </div>
            `;

            const infoWindow = new window.google.maps.InfoWindow({
              content: infoContent
            });

            marker.addListener('click', () => {
              infoWindow.open(mapInstanceRef.current, marker);
            });
          }

          // Add to markers collection
          markersRef.current.push(marker);
          
          // Extend bounds
          bounds.extend(position);
        });

        // Fit map to bounds if we have multiple markers
        if (locations.length > 1) {
          mapInstanceRef.current.fitBounds(bounds);
          
          // Set minimum zoom level
          const listener = mapInstanceRef.current.addListener('idle', () => {
            if (mapInstanceRef.current.getZoom() > 15) {
              mapInstanceRef.current.setZoom(15);
            }
            window.google.maps.event.removeListener(listener);
          });
        }
      }
    };

    loadGoogleMapsAPI();

    // Cleanup
    return () => {
      if (markersRef.current) {
        markersRef.current.forEach(marker => marker.setMap(null));
      }
    };
  }, [locations, zoom, center]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        height, 
        width: '100%', 
        borderRadius: '0.5rem',
        overflow: 'hidden'
      }}
      className="shadow-md"
    />
  );
};

export default GoogleMap;