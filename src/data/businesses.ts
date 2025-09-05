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
  { id: 'fitness', name: 'Fitness', icon: '💪' }
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
  }
];