import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Business } from '@/data/businesses';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MapViewProps {
  businesses: Business[];
  selectedBusiness?: Business | null;
  onBusinessSelect?: (business: Business | null) => void;
  center?: [number, number];
  mapboxToken?: string;
}

export const MapView = ({ 
  businesses, 
  selectedBusiness, 
  onBusinessSelect,
  center = [-73.9857, 40.7484],
  mapboxToken 
}: MapViewProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const [userToken, setUserToken] = useState(mapboxToken || '');
  const [isMapInitialized, setIsMapInitialized] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !userToken) return;

    // Initialize map
    mapboxgl.accessToken = userToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: center,
        zoom: 13,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.current.on('load', () => {
        setIsMapInitialized(true);
      });

      return () => {
        map.current?.remove();
      };
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }, [userToken, center]);

  // Add markers for businesses
  useEffect(() => {
    if (!map.current || !isMapInitialized) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Add new markers
    businesses.forEach((business) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = business.isSupported ? '#f97316' : '#22c55e';
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
      el.style.cursor = 'pointer';

      const marker = new mapboxgl.Marker(el)
        .setLngLat(business.coordinates)
        .addTo(map.current!);

      // Add click event
      el.addEventListener('click', () => {
        onBusinessSelect?.(business);
      });

      markersRef.current.push(marker);
    });
  }, [businesses, isMapInitialized, onBusinessSelect]);

  // Fly to selected business
  useEffect(() => {
    if (!map.current || !selectedBusiness) return;
    
    map.current.flyTo({
      center: selectedBusiness.coordinates,
      zoom: 15,
      duration: 1000
    });
  }, [selectedBusiness]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userToken.trim()) {
      // Re-initialize map with new token
      setIsMapInitialized(false);
    }
  };

  if (!userToken) {
    return (
      <Card className="h-full flex items-center justify-center bg-gradient-card">
        <CardContent className="p-8 text-center max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-card-foreground">Map Configuration Required</h3>
          <p className="text-muted-foreground mb-6">
            To display the interactive map, please enter your Mapbox public token. 
            You can get one at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-community underline">mapbox.com</a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your Mapbox public token"
              value={userToken}
              onChange={(e) => setUserToken(e.target.value)}
              className="w-full"
            />
            <Button type="submit" className="w-full bg-gradient-primary">
              Initialize Map
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
    </div>
  );
};