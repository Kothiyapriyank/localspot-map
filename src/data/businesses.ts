export interface Business {
  id: string;
  name: string;
  category: string;
  address: string;
  phone: string;
  description: string;
  coordinates: [number, number]; // [longitude, latitude]
  tags: string[];
  rating: number;
  isSupported: boolean;
}

export const categories = [
  { id: 'food', name: 'Food & Dining', icon: '🍽️' },
  { id: 'coffee', name: 'Coffee & Cafes', icon: '☕' },
  { id: 'retail', name: 'Retail & Shopping', icon: '🛍️' },
  { id: 'services', name: 'Services', icon: '🔧' },
  { id: 'health', name: 'Health & Beauty', icon: '💄' },
  { id: 'fitness', name: 'Fitness', icon: '💪' },
  { id: 'arts', name: 'Arts & Culture', icon: '🎨' },
  { id: 'automotive', name: 'Automotive', icon: '🚗' },
  { id: 'education', name: 'Education & Learning', icon: '📚' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎭' }
];

export const sampleBusinesses: Business[] = [
  {
    id: '1',
    name: 'The Corner Cafe',
    category: 'coffee',
    address: '123 Main Street, Downtown',
    phone: '(555) 123-4567',
    description: 'Cozy neighborhood cafe serving artisanal coffee and fresh pastries.',
    coordinates: [-73.9857, 40.7484],
    tags: ['organic', 'wifi', 'pet-friendly'],
    rating: 4.8,
    isSupported: true
  },
  {
    id: '2',
    name: "Maria's Authentic Tacos",
    category: 'food',
    address: '456 Elm Avenue, Midtown',
    phone: '(555) 234-5678',
    description: 'Family-owned taqueria with authentic Mexican flavors passed down through generations.',
    coordinates: [-73.9897, 40.7505],
    tags: ['family-owned', 'authentic', 'cash-only'],
    rating: 4.9,
    isSupported: true
  },
  {
    id: '3',
    name: 'Green Leaf Florist',
    category: 'retail',
    address: '789 Oak Street, Uptown',
    phone: '(555) 345-6789',
    description: 'Beautiful fresh flowers and plants for every occasion.',
    coordinates: [-73.9827, 40.7526],
    tags: ['fresh-flowers', 'wedding-specialist', 'delivery'],
    rating: 4.7,
    isSupported: false
  },
  {
    id: '4',
    name: 'Fix-It Frank Repairs',
    category: 'services',
    address: '321 Pine Road, Eastside',
    phone: '(555) 456-7890',
    description: 'Honest, reliable repair services for all your household needs.',
    coordinates: [-73.9767, 40.7463],
    tags: ['same-day', 'warranty', 'emergency'],
    rating: 4.6,
    isSupported: true
  },
  {
    id: '5',
    name: 'Serenity Spa & Wellness',
    category: 'health',
    address: '654 Maple Lane, Westside',
    phone: '(555) 567-8901',
    description: 'Relaxing spa treatments and wellness services in a peaceful environment.',
    coordinates: [-73.9937, 40.7445],
    tags: ['massage', 'facial', 'yoga'],
    rating: 4.5,
    isSupported: true
  },
  {
    id: '6',
    name: 'PowerFit Gym',
    category: 'fitness',
    address: '987 Cedar Boulevard, Southside',
    phone: '(555) 678-9012',
    description: 'Community-focused fitness center with personal training and group classes.',
    coordinates: [-73.9877, 40.7424],
    tags: ['personal-training', 'group-classes', '24/7'],
    rating: 4.4,
    isSupported: false
  },
  {
    id: '7',
    name: 'Vintage Vinyl Records',
    category: 'retail',
    address: '142 Music Row, Arts District',
    phone: '(555) 789-0123',
    description: 'Rare vinyl records, vintage music equipment, and local band merchandise.',
    coordinates: [-73.9807, 40.7567],
    tags: ['vinyl', 'vintage', 'local-artists'],
    rating: 4.9,
    isSupported: true
  },
  {
    id: '8',
    name: 'Grandma Betty\'s Bakery',
    category: 'food',
    address: '88 Sweet Street, Old Town',
    phone: '(555) 890-1234',
    description: 'Home-style baked goods made from secret family recipes since 1952.',
    coordinates: [-73.9917, 40.7388],
    tags: ['homemade', 'family-recipes', 'custom-cakes'],
    rating: 4.8,
    isSupported: false
  },
  {
    id: '9',
    name: 'Artisan Pottery Studio',
    category: 'arts',
    address: '256 Clay Avenue, Creative Quarter',
    phone: '(555) 901-2345',
    description: 'Handcrafted ceramics and pottery classes for all skill levels.',
    coordinates: [-73.9697, 40.7548],
    tags: ['handmade', 'classes', 'workshops'],
    rating: 4.6,
    isSupported: true
  },
  {
    id: '10',
    name: 'Quick Fix Auto Shop',
    category: 'automotive',
    address: '445 Garage Street, Industrial',
    phone: '(555) 012-3456',
    description: 'Honest car repairs and maintenance with transparent pricing.',
    coordinates: [-73.9947, 40.7365],
    tags: ['honest-pricing', 'quick-service', 'all-makes'],
    rating: 4.5,
    isSupported: true
  },
  {
    id: '11',
    name: 'Kids Learning Hub',
    category: 'education',
    address: '678 Knowledge Lane, Family District',
    phone: '(555) 123-4567',
    description: 'After-school tutoring and educational programs for children ages 5-16.',
    coordinates: [-73.9777, 40.7602],
    tags: ['tutoring', 'small-groups', 'certified-teachers'],
    rating: 4.7,
    isSupported: false
  },
  {
    id: '12',
    name: 'Moonlight Comedy Club',
    category: 'entertainment',
    address: '321 Laugh Lane, Entertainment District',
    phone: '(555) 234-5678',
    description: 'Intimate comedy shows featuring local and touring comedians every weekend.',
    coordinates: [-73.9867, 40.7325],
    tags: ['live-comedy', 'local-talent', 'intimate-venue'],
    rating: 4.3,
    isSupported: true
  },
  {
    id: '13',
    name: 'Sunny Side Barber Shop',
    category: 'health',
    address: '159 Trim Street, Neighborhood Center',
    phone: '(555) 345-6789',
    description: 'Traditional barbering with modern styles, serving the community for 30+ years.',
    coordinates: [-73.9657, 40.7485],
    tags: ['traditional', 'experienced', 'appointments-walk-ins'],
    rating: 4.8,
    isSupported: false
  },
  {
    id: '14',
    name: 'Bean There Coffee Roasters',
    category: 'coffee',
    address: '222 Roast Road, Coffee District',
    phone: '(555) 456-7890',
    description: 'Fresh-roasted coffee beans and artisanal brewing equipment.',
    coordinates: [-73.9837, 40.7385],
    tags: ['fresh-roasted', 'single-origin', 'brewing-classes'],
    rating: 4.9,
    isSupported: true
  },
  {
    id: '15',
    name: 'Neighborhood Hardware',
    category: 'retail',
    address: '777 Tool Street, Residential Area',
    phone: '(555) 567-8901',
    description: 'Your local hardware store with expert advice and hard-to-find parts.',
    coordinates: [-73.9757, 40.7445],
    tags: ['expert-advice', 'hard-to-find', 'local-knowledge'],
    rating: 4.4,
    isSupported: true
  },
  {
    id: '16',
    name: 'Zen Yoga Studio',
    category: 'fitness',
    address: '333 Peace Plaza, Wellness District',
    phone: '(555) 678-9012',
    description: 'Mindful yoga practice in a serene environment with certified instructors.',
    coordinates: [-73.9887, 40.7565],
    tags: ['mindful', 'certified', 'all-levels'],
    rating: 4.7,
    isSupported: false
  },
  {
    id: '17',
    name: 'Neighborhood Pizza Kitchen',
    category: 'food',
    address: '888 Slice Street, Family Area',
    phone: '(555) 789-0123',
    description: 'Wood-fired pizza made with locally-sourced ingredients and family recipes.',
    coordinates: [-73.9727, 40.7505],
    tags: ['wood-fired', 'local-ingredients', 'family-recipes'],
    rating: 4.6,
    isSupported: true
  },
  {
    id: '18',
    name: 'Melody Music Lessons',
    category: 'education',
    address: '444 Harmony Street, Arts Quarter',
    phone: '(555) 890-1234',
    description: 'Private music lessons for piano, guitar, violin, and voice training.',
    coordinates: [-73.9987, 40.7425],
    tags: ['private-lessons', 'all-instruments', 'experienced'],
    rating: 4.8,
    isSupported: true
  },
  {
    id: '19',
    name: 'Stitch & Style Tailoring',
    category: 'services',
    address: '555 Needle Avenue, Fashion District',
    phone: '(555) 901-2345',
    description: 'Expert alterations and custom tailoring for all occasions.',
    coordinates: [-73.9817, 40.7345],
    tags: ['alterations', 'custom-fit', 'quick-turnaround'],
    rating: 4.5,
    isSupported: false
  },
  {
    id: '20',
    name: 'Petite Paws Pet Grooming',
    category: 'services',
    address: '666 Furry Lane, Pet-Friendly Area',
    phone: '(555) 012-3456',
    description: 'Gentle pet grooming services with a focus on comfort and care.',
    coordinates: [-73.9907, 40.7505],
    tags: ['gentle', 'all-breeds', 'nail-trimming'],
    rating: 4.9,
    isSupported: true
  }
];