import { useState, useMemo, useRef } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from '@/hooks/use-toast';
import { HeroSection } from '@/components/HeroSection';
import { SearchFilters } from '@/components/SearchFilters';
import { BusinessList } from '@/components/BusinessList';
import { MapView } from '@/components/MapView';
import { sampleBusinesses, Business, categories } from '@/data/businesses';

const Index = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showSupportedOnly, setShowSupportedOnly] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [businesses, setBusinesses] = useState(sampleBusinesses);
  const mapSectionRef = useRef<HTMLDivElement>(null);

  // Filter businesses based on search and filters
  const filteredBusinesses = useMemo(() => {
    return businesses.filter((business) => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(business.category);

      // Support filter
      const matchesSupported = !showSupportedOnly || business.isSupported;

      return matchesSearch && matchesCategory && matchesSupported;
    });
  }, [businesses, searchTerm, selectedCategories, showSupportedOnly]);

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setShowSupportedOnly(false);
  };

  const handleSupport = (businessId: string) => {
    setBusinesses(prev => 
      prev.map(business => 
        business.id === businessId 
          ? { ...business, isSupported: true }
          : business
      )
    );
    
    const business = businesses.find(b => b.id === businessId);
    toast({
      title: "Thanks for supporting local! 🎉",
      description: `You're now supporting ${business?.name}. Every visit helps our community thrive.`,
    });
  };

  const handleExploreClick = () => {
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      
      {/* Hero Section */}
      <HeroSection onExploreClick={handleExploreClick} />
      
      {/* Main Content */}
      <div ref={mapSectionRef} className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[600px]">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <SearchFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
              onClearFilters={handleClearFilters}
              showSupportedOnly={showSupportedOnly}
              onSupportedToggle={() => setShowSupportedOnly(!showSupportedOnly)}
            />
            
            <BusinessList
              businesses={filteredBusinesses}
              selectedBusiness={selectedBusiness}
              onBusinessSelect={setSelectedBusiness}
              onViewOnMap={(coordinates) => setSelectedBusiness(
                businesses.find(b => 
                  b.coordinates[0] === coordinates[0] && 
                  b.coordinates[1] === coordinates[1]
                ) || null
              )}
              onSupport={handleSupport}
            />
          </div>
          
          {/* Map */}
          <div className="lg:col-span-2">
            <MapView
              businesses={filteredBusinesses}
              selectedBusiness={selectedBusiness}
              onBusinessSelect={setSelectedBusiness}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
