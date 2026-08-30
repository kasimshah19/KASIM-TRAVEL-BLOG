export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  readTime: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: '10 Hidden Gems in Europe You Must Visit',
    excerpt: 'Discover off-the-beaten-path destinations across Europe that will take your breath away.',
    content: `
      <p>Europe is filled with incredible destinations, but beyond the popular spots like Paris and Rome lie countless hidden gems waiting to be explored.</p>
      <p>From the fairy-tale towns of Eastern Europe to secluded beaches in the Mediterranean, these lesser-known locations offer authentic experiences without the overwhelming crowds.</p>
      <h3>1. Giethoorn, Netherlands</h3>
      <p>Known as the "Venice of the North," this picturesque village has no roads, only canals. Rent a whisper boat and navigate through charming thatched-roof farmhouses.</p>
      <h3>2. Sintra, Portugal</h3>
      <p>A short train ride from Lisbon, Sintra feels like stepping into a storybook. Explore the colorful Pena Palace and the mystical initiation well at Quinta da Regaleira.</p>
      <p>Traveling to these hidden gems not only provides a more relaxed experience but also helps support local communities away from the main tourist hubs.</p>
    `,
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Oct 12, 2023',
    category: 'Travel Guides',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Backpacking Southeast Asia',
    excerpt: 'Everything you need to know about budget travel, itineraries, and culture in SEA.',
    content: `
      <p>Backpacking through Southeast Asia is a rite of passage for many travelers. With its affordable prices, incredible food, and rich cultures, it's the perfect region for long-term travel.</p>
      <h3>Planning Your Route</h3>
      <p>A classic route often called the "Banana Pancake Trail" takes you through Thailand, Laos, Vietnam, and Cambodia. Each country offers a distinct flavor, from the bustling streets of Bangkok to the serene landscapes of Ha Long Bay.</p>
      <h3>Budgeting</h3>
      <p>You can comfortably travel through Southeast Asia on $30-50 a day. Street food is not only cheap but often the best meal you'll have. Accommodation ranges from $5 hostel beds to $30 boutique guesthouses.</p>
      <p>Remember to pack light, stay hydrated, and always respect the local customs and traditions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Nov 05, 2023',
    category: 'Backpacking',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'How to Capture Perfect Travel Photos',
    excerpt: 'Photography tips and tricks to document your adventures beautifully.',
    content: `
      <p>You don't need a professional camera to take amazing travel photos. The secret lies in understanding light, composition, and patience.</p>
      <h3>Chase the Golden Hour</h3>
      <p>The hour just after sunrise and just before sunset offers the most magical light. The soft, warm glow adds a beautiful atmosphere to any landscape or street portrait.</p>
      <h3>Look for Unique Perspectives</h3>
      <p>Instead of taking the same photo as everyone else, get low to the ground, find a high vantage point, or shoot through an object to frame your subject.</p>
      <p>Most importantly, don't forget to put the camera down occasionally and soak in the moment with your own eyes.</p>
    `,
    image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Dec 20, 2023',
    category: 'Photography',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'A Culinary Journey Through Italy',
    excerpt: 'Exploring the diverse and mouth-watering regional cuisines of Italy.',
    content: `
      <p>Italian food is much more than just pizza and pasta. Each of its 20 regions boasts its own unique culinary traditions, shaped by geography and history.</p>
      <h3>Northern Delights</h3>
      <p>In the north, you'll find rich, butter-based dishes like Risotto alla Milanese and hearty polenta. Truffles and aged cheeses dominate the flavor profile in regions like Piedmont.</p>
      <h3>Southern Staples</h3>
      <p>The south relies heavily on olive oil, fresh tomatoes, and seafood. Naples is the undisputed birthplace of pizza, while Sicily offers sweet treats like cannoli and fresh citrus.</p>
      <p>To truly experience Italy, you must eat like a local—slowly, passionately, and always with a good glass of wine.</p>
    `,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Jan 15, 2024',
    category: 'Food & Culture',
    readTime: '6 min read',
  },
  {
    id: '5',
    title: 'Navigating the Streets of Tokyo',
    excerpt: 'A comprehensive guide to understanding Tokyo\'s districts, transit, and etiquette.',
    content: `
      <p>Tokyo can be overwhelming, but understanding its distinct neighborhoods makes navigating this massive metropolis an exciting adventure.</p>
      <h3>Neighborhoods to Explore</h3>
      <p>From the neon lights of Akihabara to the traditional charm of Asakusa, Tokyo is a city of contrasts. Shinjuku offers bustling nightlife, while Harajuku is the center of youth culture and fashion.</p>
      <p>Take your time, grab a matcha latte from a vending machine, and enjoy the beautiful chaos.</p>
    `,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Feb 10, 2024',
    category: 'City Guides',
    readTime: '7 min read',
  },
  {
    id: '6',
    title: 'The Best Hiking Trails in Patagonia',
    excerpt: 'Trek through some of the most dramatic and pristine landscapes on earth.',
    content: `
      <p>Patagonia, shared by Argentina and Chile, is a hiker's paradise. The dramatic peaks, massive glaciers, and turquoise lakes are truly unmatched.</p>
      <h3>The W Trek</h3>
      <p>The famous W Trek in Torres del Paine National Park is a must-do. It takes you past the iconic granite towers, the massive Grey Glacier, and the stunning French Valley.</p>
      <p>Prepare for wild weather, but the views are absolutely worth every step.</p>
    `,
    image: 'https://images.unsplash.com/photo-1508233620467-f79a1e8fd28f?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Mar 02, 2024',
    category: 'Adventure',
    readTime: '9 min read',
  },
  {
    id: '7',
    title: 'Surviving a Long Haul Flight',
    excerpt: 'Tips for staying comfortable, hydrated, and sane on 12+ hour flights.',
    content: `
      <p>Long haul flights can be brutal, but with the right preparation, you can arrive at your destination feeling refreshed.</p>
      <h3>Essential Packing</h3>
      <p>Always pack a neck pillow, an eye mask, noise-canceling headphones, and a good moisturizer. Hydration is key, so avoid alcohol and drink plenty of water.</p>
      <p>Get up and stretch every few hours to keep your circulation flowing.</p>
    `,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Mar 28, 2024',
    category: 'Travel Tips',
    readTime: '3 min read',
  },
  {
    id: '8',
    title: 'A Weekend in New York City',
    excerpt: 'How to make the most of 48 hours in the city that never sleeps.',
    content: `
      <p>New York City in 48 hours is a whirlwind. The trick is to group your sightseeing by neighborhood to avoid spending your whole weekend on the subway.</p>
      <h3>Day 1: Manhattan Classics</h3>
      <p>Start in Central Park, walk down 5th Avenue, and catch the sunset from the Top of the Rock. End your evening with dinner in the West Village.</p>
      <p>New York is best explored on foot, so bring comfortable shoes.</p>
    `,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop',
    author: 'Kasim Shah',
    authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
    date: 'Apr 15, 2024',
    category: 'City Guides',
    readTime: '5 min read',
  }
];
