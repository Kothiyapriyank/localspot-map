import { Business } from '@/data/businesses';
import { BusinessCard } from './BusinessCard';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Search } from 'lucide-react';

interface BusinessListProps {
  businesses: Business[];
  selectedBusiness?: Business | null;
  onBusinessSelect?: (business: Business) => void;
  onViewOnMap?: (coordinates: [number, number]) => void;
  onSupport?: (businessId: string) => void;
  isLoading?: boolean;
}

export const BusinessList = ({ 
  businesses, 
  selectedBusiness,
  onBusinessSelect,
  onViewOnMap, 
  onSupport,
  isLoading = false 
}: BusinessListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-3 bg-muted rounded w-1/2 mb-4" />
              <div className="h-3 bg-muted rounded w-full mb-2" />
              <div className="h-3 bg-muted rounded w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (businesses.length === 0) {
    return (
      <Card className="bg-gradient-card">
        <CardContent className="p-8 text-center">
          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-card-foreground">No businesses found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or filters to find more local businesses.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          {businesses.length} Local {businesses.length === 1 ? 'Business' : 'Businesses'}
        </h2>
        <div className="text-sm text-muted-foreground">
          {businesses.filter(b => b.isSupported).length} supported
        </div>
      </div>
      
      <div className="grid gap-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className={`transition-all duration-200 ${
              selectedBusiness?.id === business.id 
                ? 'ring-2 ring-community shadow-glow scale-[1.02]' 
                : ''
            }`}
          >
            <BusinessCard
              business={business}
              onViewOnMap={(coords) => {
                onBusinessSelect?.(business);
                onViewOnMap?.(coords);
              }}
              onSupport={onSupport}
            />
          </div>
        ))}
      </div>
    </div>
  );
};