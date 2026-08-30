export interface Destination {
  id: string;
  title: string;
  location: string;
  image: string;
  rating: number;
  description: string;
  category: 'Beach' | 'Mountain' | 'City' | 'Adventure';
  price: string;
}

export const destinations: Destination[] = [
  {
    id: '1',
    title: 'Santorini Sunsets',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    description: 'Experience the magic of whitewashed houses and breathtaking sunsets over the Aegean Sea.',
    category: 'Beach',
    price: '$120/day',
  },
  {
    id: '2',
    title: 'Kyoto Temples',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    description: 'Immerse yourself in the tranquility of ancient temples and beautiful zen gardens.',
    category: 'City',
    price: '$90/day',
  },
  {
    id: '3',
    title: 'Swiss Alps',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    description: 'Discover the majestic peaks, pristine lakes, and charming mountain villages of Switzerland.',
    category: 'Mountain',
    price: '$150/day',
  },
  {
    id: '4',
    title: 'Bali Beaches',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    description: 'Relax on golden sands, explore lush rice terraces, and experience vibrant local culture.',
    category: 'Beach',
    price: '$60/day',
  },
  {
    id: '5',
    title: 'Machu Picchu',
    location: 'Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    description: 'Trek through the Andes to uncover the mysteries of this ancient Incan citadel.',
    category: 'Adventure',
    price: '$85/day',
  },
  {
    id: '6',
    title: 'Amalfi Coast',
    location: 'Italy',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    description: 'Drive along dramatic coastlines with colorful cliffside towns overlooking the Mediterranean.',
    category: 'Beach',
    price: '$140/day',
  },
  {
    id: '7',
    title: 'Maldives Paradise',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    rating: 5.0,
    description: 'Stay in overwater bungalows and swim in crystal-clear turquoise lagoons.',
    category: 'Beach',
    price: '$250/day',
  },
  {
    id: '8',
    title: 'Banff National Park',
    location: 'Canada',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
    description: 'Explore glacial lakes, rugged mountains, and abundant wildlife in the Canadian Rockies.',
    category: 'Mountain',
    price: '$110/day',
  },
  {
    id: '9',
    title: 'Marrakech Medina',
    location: 'Morocco',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    description: 'Get lost in the vibrant souks, stunning palaces, and bustling squares of Marrakech.',
    category: 'City',
    price: '$50/day',
  }
];
