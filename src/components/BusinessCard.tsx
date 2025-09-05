import { Business } from '@/data/businesses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Star, Heart } from 'lucide-react';

interface BusinessCardProps {
  business: Business;
  onViewOnMap?: (coordinates: [number, number]) => void;
  onSupport?: (businessId: string) => void;
}

export const BusinessCard = ({ business, onViewOnMap, onSupport }: BusinessCardProps) => {
  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      food: '🍽️',
      coffee: '☕',
      retail: '🛍️',
      services: '🔧',
      health: '💄',
      fitness: '💪'
    };
    return emojiMap[category] || '🏪';
  };

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getCategoryEmoji(business.category)}</span>
            <div>
              <CardTitle className="text-lg text-card-foreground">{business.name}</CardTitle>
              <div className="flex items-center gap-1 mt-1">
                <Star className="w-4 h-4 fill-support text-support" />
                <span className="text-sm font-medium text-muted-foreground">{business.rating}</span>
              </div>
            </div>
          </div>
          {business.isSupported && (
            <Badge variant="secondary" className="bg-support-light text-support border-none">
              <Heart className="w-3 h-3 mr-1" />
              Supported
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {business.description}
        </CardDescription>
        
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mt-0.5 text-community flex-shrink-0" />
          <span className="line-clamp-1">{business.address}</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Phone className="w-4 h-4 text-community" />
          <span>{business.phone}</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {business.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-community/30 text-community">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewOnMap?.(business.coordinates)}
            className="flex-1 border-community text-community hover:bg-community hover:text-primary-foreground"
          >
            <MapPin className="w-4 h-4 mr-1" />
            View on Map
          </Button>
          
          {!business.isSupported && (
            <Button
              variant="default"
              size="sm"
              onClick={() => onSupport?.(business.id)}
              className="flex-1 bg-gradient-secondary hover:opacity-90"
            >
              <Heart className="w-4 h-4 mr-1" />
              Support Local
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};