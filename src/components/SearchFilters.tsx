import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Filter, X } from 'lucide-react';
import { categories } from '@/data/businesses';

interface SearchFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategories: string[];
  onCategoryToggle: (categoryId: string) => void;
  onClearFilters: () => void;
  showSupportedOnly: boolean;
  onSupportedToggle: () => void;
}

export const SearchFilters = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
  showSupportedOnly,
  onSupportedToggle
}: SearchFiltersProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const hasActiveFilters = selectedCategories.length > 0 || showSupportedOnly || searchTerm.length > 0;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search businesses, services, or locations..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-12 h-12 text-base border-border focus:border-community"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-community"
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      {/* Filters Panel */}
      {isFilterOpen && (
        <Card className="bg-gradient-card shadow-card border-border">
          <CardContent className="p-4 space-y-4">
            {/* Category Filters */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-card-foreground">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                    className={`cursor-pointer transition-all duration-200 ${
                      selectedCategories.includes(category.id)
                        ? 'bg-community text-primary-foreground hover:bg-community-hover'
                        : 'border-community/30 text-community hover:bg-community/10'
                    }`}
                    onClick={() => onCategoryToggle(category.id)}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Support Filter */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div>
                <p className="text-sm font-medium text-card-foreground">Show Supported Only</p>
                <p className="text-xs text-muted-foreground">Businesses you're already supporting</p>
              </div>
              <Button
                variant={showSupportedOnly ? "default" : "outline"}
                size="sm"
                onClick={onSupportedToggle}
                className={showSupportedOnly 
                  ? "bg-support text-secondary-foreground hover:bg-support-hover" 
                  : "border-support text-support hover:bg-support/10"
                }
              >
                {showSupportedOnly ? "Supported" : "All"}
              </Button>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <div className="pt-2 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && !isFilterOpen && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-muted-foreground">Filters:</span>
          
          {selectedCategories.map((categoryId) => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <Badge
                key={categoryId}
                variant="secondary"
                className="bg-community-light text-community cursor-pointer hover:bg-community/20"
                onClick={() => onCategoryToggle(categoryId)}
              >
                {category.icon} {category.name}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ) : null;
          })}
          
          {showSupportedOnly && (
            <Badge
              variant="secondary"
              className="bg-support-light text-support cursor-pointer hover:bg-support/20"
              onClick={onSupportedToggle}
            >
              Supported Only
              <X className="w-3 h-3 ml-1" />
            </Badge>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
};