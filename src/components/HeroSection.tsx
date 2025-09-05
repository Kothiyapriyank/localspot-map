import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Store, Users } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-hero py-16 lg:py-24">
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <Badge 
          variant="secondary" 
          className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
        >
          <Heart className="w-4 h-4 mr-2" />
          Supporting Local Communities
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
          Discover & Support
          <br />
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Local Businesses
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          A map-based directory that helps you discover and support small businesses 
          in your neighborhood. Every visit makes a difference.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            onClick={onExploreClick}
            className="bg-white text-community hover:bg-white/90 text-lg px-8 py-4 shadow-glow"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Explore Local Map
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
          >
            <Store className="w-5 h-5 mr-2" />
            Add Your Business
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">150+</div>
            <div className="text-white/80">Local Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">12K+</div>
            <div className="text-white/80">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$2.5M</div>
            <div className="text-white/80">Local Revenue Supported</div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-white/20 hidden lg:block">
        <Store className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 right-10 text-white/20 hidden lg:block">
        <Users className="w-8 h-8" />
      </div>
    </div>
  );
};