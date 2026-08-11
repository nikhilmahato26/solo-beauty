export const BUSINESS = {
  name: 'SOLO BEAUTY',
  tagline: 'Where Beauty Meets Perfection',
  phone: '81 684 83 684',
  phoneRaw: '+918168483684',
  whatsapp: '918168483684',
  email: 'sonobeautysirsa@gmail.com',
  address: {
    line1: 'Near New Bus Stand',
    line2: 'Savera hotel wali gali',
    city: 'Sirsa',
    state: 'Haryana',
    pincode: '125055',
  },
  openHours: '10:00 AM - 8:00 PM',
  hours: [
    { day: 'Mon – Sun', time: '10:00 AM — 8:00 PM' },
    { day: 'Bridal Bookings', time: 'By Appointment' },
  ],
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/918168483684',
  },
}

export const NAV_LINKS = [
  { label: 'HOME', href: '#top' },
  { label: 'WOMEN', href: '#categories' },
  { label: 'MEN', href: '#categories' },
  { label: 'KIDS', href: '#categories' },
  { label: 'CATALOGUE', href: '#popular-services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'CONTACT US', href: '#contact' },
]

export const GLOBAL_OFFICES = [
  {
    country: 'INDIA',
    city: 'Mohali',
    phone: '+91 77101 10525',
    time: '10:00 AM - 10:00 PM',
    mapLink: 'https://maps.google.com/?q=Mohali',
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80', // Taj Mahal
  },
  {
    country: 'KENYA',
    city: 'Nairobi',
    phone: '+254 722 801 898',
    time: '10:00 AM - 10:00 PM',
    mapLink: 'https://maps.google.com/?q=Nairobi',
    img: 'https://images.unsplash.com/photo-1549082907-531bdfc3cc28?auto=format&fit=crop&w=400&q=80', // Nairobi
  },
  {
    country: 'SOUTH AFRICA',
    city: 'uMhlanga, KZN',
    phone: '+27 84 061 8013',
    time: '10:00 AM - 10:00 PM',
    mapLink: 'https://maps.google.com/?q=uMhlanga+KZN',
    img: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80', // Durban/South Africa
  },
  {
    country: 'DUBAI',
    city: 'United Arab Emirates',
    phone: '+971 56 737 9250',
    time: '10:00 AM - 10:00 PM',
    mapLink: 'https://maps.google.com/?q=Dubai+Burj+Al+Arab',
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80', // Dubai Burj Al Arab
    isHeadOffice: true,
  },
]

export const MAIN_CATEGORIES = [
  {
    id: 'women',
    title: 'WOMEN',
    desc: 'Hair | Skin | Makeup\nNails | Waxing & More',
    img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'men',
    title: 'MEN',
    desc: 'Hair | Beard | Skin\nGrooming & More',
    img: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'kids',
    title: 'KIDS',
    desc: 'Hair | Grooming\nSpecial Kids Services',
    img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=600&q=80',
  },
]

export const POPULAR_OFFERS = [
  {
    title: 'HAIRCUT',
    sub: '(Women)',
    original: '599',
    price: '399',
    discount: '33% OFF',
    tag: 'hair',
    img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'HAIR SPA',
    sub: '(Loreal)',
    original: '1299',
    price: '799',
    discount: '38% OFF',
    tag: 'hair',
    img: '/hair_spa.png',
  },
  {
    title: 'BRIDAL MAKEUP',
    sub: '(Premium)',
    original: '24999',
    price: '14999',
    discount: '40% OFF',
    tag: 'makeup',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'MANICURE',
    sub: '(O3+ D-Tan)',
    original: '799',
    price: '499',
    discount: '37% OFF',
    tag: 'nails',
    img: '/manicure.png',
  },
  {
    title: 'FACIAL',
    sub: '(O3+ Platinum)',
    original: '1499',
    price: '899',
    discount: '40% OFF',
    tag: 'skin',
    img: '/facial.png',
  },
]

export const UNBEATABLE_OFFERS = [
  {
    title: 'THREADING',
    price: '29',
    original: '79',
    discount: 'SAVE 63%',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'PARTY MAKEUP',
    price: '899',
    original: '1699',
    discount: 'SAVE 47%',
    img: 'https://images.unsplash.com/photo-1522338258045-8b5e4185838d?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'BRIDAL MAKEUP',
    price: '4999',
    original: '9999',
    discount: 'SAVE 50%',
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=300&q=80',
    badge: 'MOST LOVED',
  },
  {
    title: 'PRE-BRIDAL SERVICES',
    price: '3999',
    original: '7999',
    discount: 'SAVE 50%',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=300&q=80',
    subText: 'FULL PACKAGE',
  },
]

export const WHY_CHOOSE_ITEMS = [
  'Professional Experts',
  'Hygienic & Safe',
  'Premium Products',
  'Affordable Prices',
  'On-Time Service',
  '100% Satisfaction',
]

export const WHY_CHOOSE_ABOUT = [
  'Premium & Hygienic Services',
  'Trained & Certified Professionals',
  'High Quality Products',
  'Personalized Beauty Solutions',
  'Customer Satisfaction Guaranteed',
]

export const TEAM_MEMBERS = [
  {
    name: 'Neha S.',
    role: 'Hair Stylist',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Pooja B.',
    role: 'Makeup Artist',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Kavita R.',
    role: 'Skin Expert',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Simran K.',
    role: 'Nail Artist',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Sapna D.',
    role: 'Senior Stylist',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
]

export const INSTA_VIDEOS = [
  {
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=200&q=80',
    link: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80',
    link: '#',
    hasPlay: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=200&q=80',
    link: '#',
  },
]

export const GOOGLE_REVIEWS = [
  {
    name: 'Neha S.',
    rating: 5,
    text: 'Amazing services! The staff is very professional and friendly. Highly recommended!',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Pooja B.',
    rating: 5,
    text: 'Best beauty salon in Sirsa! Loved the bridal makeup. Thank you Solo Beauty!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    name: 'Kavita R.',
    rating: 5,
    text: 'Clean, hygienic and best products. Must visit! Great experience.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
  },
]

export const TRUST_BADGES = [
  'Certified Experts',
  'Hygienic & Safe',
  'Premium Products',
  'On-Time Service',
  '100% Satisfaction',
]

export const ABOUT_HIGHLIGHTS = [
  { n: '01', label: 'Bridal Specialist' },
  { n: '02', label: 'Luxury Makeup' },
  { n: '03', label: 'Hair Experts' },
  { n: '04', label: 'Skin Care' },
  { n: '05', label: 'Nail Services' },
  { n: '06', label: 'Hygienic Space' },
]

export const SERVICE_CATEGORIES = [
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Hair Services',
    items: [
      { name: 'Hair Cut', price: '99' },
      { name: 'Shave', price: '49' },
      { name: 'Beard Trim', price: '69' },
      { name: 'Beard Shave', price: '99' },
      { name: 'Change of Style', price: '129' },
      { name: 'Kids Cut', price: '149' },
      { name: 'Kids Change of Style', price: '129' },
      { name: 'Head Wash', price: '49' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Hair Colours',
    items: [
      { name: 'Fruit Colour', price: '199' },
      { name: 'Garnier Colour', price: '249' },
      { name: 'Loreal Colour', price: '499' },
      { name: 'Loreal Ammonia Free Colour', price: '599' },
      { name: 'Fashion Colour Per Streak', price: '599' },
      { name: 'Fashion Colour Global', price: '649' },
      { name: 'Beard Colour', price: '99' },
      { name: 'Cap Highlights Colour', price: '799' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Hair Spa',
    items: [
      { name: 'Damage Hair Spa', price: '599' },
      { name: 'Dandruff Hair Spa', price: '699' },
      { name: 'Hair Loss Hair Spa', price: '699' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Straightening',
    items: [
      { name: 'Hair Straightening Half', price: '1449' },
      { name: 'Hair Straightening Full', price: '1949' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Head Massage',
    items: [
      { name: 'Coconut Oil (20 Min)', price: '199' },
      { name: 'Almond Oil (20 Min)', price: '199' },
      { name: 'Amravati Oil (20 Min)', price: '199' },
      { name: 'Navratna Oil (20 Min)', price: '199' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Facial Services',
    items: [
      { name: 'Face Wash Normal', price: '49' },
      { name: 'Face Scrub Normal', price: '99' },
      { name: 'Face Scrub with Steam', price: '249' },
      { name: 'Face Bleach', price: '199' },
      { name: 'Face & Neck Bleach', price: '299' },
      { name: 'Face De-Tan O3+', price: '399' },
      { name: 'Face De-Tan Raga', price: '299' },
      { name: 'Face Peel Off Mask', price: '299' },
      { name: 'Face Cleanup', price: '399' },
      { name: 'Fruit Facial', price: '499' },
      { name: 'Wine Facial', price: '699' },
      { name: 'Gold Facial', price: '999' },
      { name: 'Diamond Facial', price: '999' },
      { name: 'Skin Lightening Facial', price: '1799' },
      { name: 'Skin Brightening Facial', price: '1999' },
    ]
  },
  {
    cat: 'Men & Women Hair & Beauty (Vt)',
    title: 'Massage Chair',
    items: [
      { name: '10 Minutes', price: '100' },
      { name: '15 Minutes', price: '150' },
      { name: '20 Minutes', price: '200' },
      { name: '25 Minutes', price: '250' },
      { name: '30 Minutes', price: '300' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Hair Cuts',
    items: [
      { name: 'Kids Hair Cut', price: '149' },
      { name: 'Straight Cut', price: '149' },
      { name: 'U Shape', price: '199' },
      { name: 'V Shape', price: '199' },
      { name: 'Layer Cut', price: '399' },
      { name: 'Step Cut', price: '399' },
      { name: 'Feather Cut', price: '329' },
      { name: 'Advanced Hair Cut', price: '539' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Threading',
    items: [
      { name: 'Eyebrows', price: '30' },
      { name: 'Forehead', price: '20' },
      { name: 'Upper Lip', price: '20' },
      { name: 'Chin', price: '20' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Bleaching',
    items: [
      { name: 'Face Bleach', price: '199' },
      { name: 'Deep Neck', price: '199' },
      { name: 'Hand', price: '249' },
      { name: 'Neck', price: '150' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Honey Wax',
    items: [
      { name: 'Hand', price: '249' },
      { name: 'Under Arm', price: '70' },
      { name: 'Half Leg', price: '249' },
      { name: 'Full Leg', price: '399' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Rica Wax',
    items: [
      { name: 'Hand', price: '249' },
      { name: 'Under Arm', price: '70' },
      { name: 'Half Leg', price: '249' },
      { name: 'Full Leg', price: '399' },
      { name: 'Chin Wax', price: '40' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Facials',
    items: [
      { name: 'Clean Up', price: '299' },
      { name: 'D-Tan', price: '349' },
      { name: 'Fruit Facial', price: '499' },
      { name: 'Gold Facial', price: '999' },
      { name: 'Pearl Facial', price: '799' },
      { name: 'Diamond Facial', price: '999' },
      { name: 'VLCC Facial', price: '1199' },
      { name: 'Lotus Facial', price: '1199' },
      { name: 'Hydra Facial', price: '1849' },
      { name: 'Wine Facial', price: '699' },
      { name: 'Papaya Facial', price: '601' },
      { name: 'Brightening Facial', price: '1199' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Manicure',
    items: [
      { name: 'Paraffin', price: '599' },
      { name: 'Wax Aroma', price: '499' },
      { name: 'Antitan', price: '400' },
      { name: 'O3', price: '999' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Pedicure',
    items: [
      { name: 'Paraffin', price: '599' },
      { name: 'Wax Aroma', price: '499' },
      { name: 'Antitan', price: '500' },
      { name: 'O3', price: '999' },
    ]
  },
  {
    cat: 'Women\'s Styling (we)',
    title: 'Hair Treatment',
    items: [
      { name: 'Anti Dandruff Treatment', price: '1099' },
      { name: 'Hair Wash with Conditioner', price: '249' },
      { name: 'Hair Oil Massage', price: '249' },
      { name: 'Hair Spa', price: '1299' },
    ]
  },
  {
    cat: 'Hair Coloring & Treatment (Se)',
    title: 'Hair Coloring',
    items: [
      { name: 'Highlights Per Streak', price: '249' },
      { name: 'Root Touch-up', price: '999' },
      { name: 'Root Touch-up Ammonia Free', price: '1099' },
    ]
  },
  {
    cat: 'Hair Coloring & Treatment (Se)',
    title: 'Straightening & Smoothening',
    items: [
      { name: 'Short', price: '1399' },
      { name: 'Medium', price: '2349' },
      { name: 'Long', price: '3199' },
    ]
  },
  {
    cat: 'Hair Coloring & Treatment (Se)',
    title: 'Keratin Treatment',
    items: [
      { name: 'Short', price: '1399' },
      { name: 'Medium', price: '2349' },
      { name: 'Long', price: '3199' },
    ]
  },
  {
    cat: 'Hair Coloring & Treatment (Se)',
    title: 'Hair Botox',
    items: [
      { name: 'Short', price: '1399' },
      { name: 'Medium', price: '2349' },
      { name: 'Long', price: '3199' },
    ]
  },
  {
    cat: 'Hair Coloring & Treatment (Se)',
    title: 'Temporary Styling',
    items: [
      { name: 'Temporary Straightening', price: '549' },
      { name: 'Ironing (Short–Long)', price: '499–799' },
    ]
  },
  {
    cat: 'Facials & Cleaning (Rg)',
    title: 'Aroma Facials',
    items: [
      { name: 'Fruit Fresh Facial', price: '649' },
      { name: 'Gold Glow Facial', price: '949' },
      { name: 'Pearl Glow Facial', price: '1349' },
      { name: 'De-Tan Facial', price: '1449' },
    ]
  },
  {
    cat: 'Facials & Cleaning (Rg)',
    title: 'Premium Facials',
    items: [
      { name: 'Skin Brightening Facial', price: '1999' },
      { name: 'Bridal Facial', price: '2349' },
    ]
  },
  {
    cat: 'Facials & Cleaning (Rg)',
    title: 'Deep Cleaning',
    items: [
      { name: 'Clean-up', price: '549' },
      { name: 'Fruit Clean-up', price: '449' },
      { name: 'Gold Radiance Clean-up', price: '749' },
      { name: 'Pearl/Diamond Clean-up', price: '849' },
    ]
  },
  {
    cat: 'Hair Wash & Styling',
    title: 'Hair Wash & Styling',
    items: [
      { name: 'Wash & Blow Dry', price: '189' },
      { name: 'Wash & Deep Conditioning', price: '289' },
      { name: 'Straight Blow Dry (Short–Long)', price: '399–499' },
      { name: 'Curly Setup', price: '699' },
    ]
  },
  {
    cat: 'Hair Spa Services',
    title: 'Hair Spa Services',
    items: [
      { name: 'Moisturizing Hair Spa', price: '749' },
      { name: 'Repair/Damage Hair Spa', price: '949' },
      { name: 'Frizz Ease Hair Spa', price: '949' },
      { name: 'Dandruff Removing Spa', price: '949' },
    ]
  },
  {
    cat: 'Makeup Services',
    title: 'Makeup Services',
    featured: true,
    items: [
      { name: 'Light Makeup', price: '1500–2500' },
      { name: 'HD Bridal Makeup', price: '4000–5000', star: true },
      { name: 'Saree Pre-Plating', price: '350' },
      { name: 'Saree Draping', price: '500' },
      { name: 'Lehanga Draping', price: '500' },
    ]
  },
  {
    cat: 'Mehendi Services',
    title: 'Mehendi Services',
    items: [
      { name: 'Simple Mehendi (Both Hands)', price: '999' },
      { name: 'Bridal Mehendi (Both Hands)', price: '3499', star: true },
    ]
  },
  {
    cat: 'Packages and Combos',
    title: 'Packages and Combos',
    items: [
      { name: 'Pick Any 3 Services', price: '949' },
      { name: 'Pick Any 5 Services', price: '1999' },
      { name: 'Package 1', price: '299' },
      { name: 'Package 2', price: '399' },
      { name: 'Package 3', price: '329' },
      { name: 'Package 4', price: '649' },
      { name: 'Package 5', price: '799' },
      { name: 'Package 6', price: '999' },
    ]
  },
]

export const FEATURED_SERVICES = [
  {
    title: 'Lips',
    n: '01',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
    alt: 'Lip beauty service',
  },
  {
    title: 'Brows & Lash',
    n: '02',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    alt: 'Eyebrow shaping',
  },
  {
    title: 'Facials',
    n: '03',
    img: 'https://images.pexels.com/photos/15866041/pexels-photo-15866041.jpeg',
    alt: 'Facial treatment',
  },
]

export const GALLERY = Array.from({ length: 8 }).map((_, i) => ({
  src: `https://images.unsplash.com/photo-${i % 2 === 0 ? '1562322140' : '1595777457'}?auto=format&fit=crop&w=400&q=80`,
  alt: `Gallery Image ${i + 1}`
}))

export const PACKAGES = [
  {
    original: '₹299',
    price: '₹299',
    points: '6',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Face Wash'],
    popular: false,
  },
  {
    original: '₹399',
    price: '₹399',
    points: '8',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Massage Chair (15 Min)'],
    popular: true,
  },
  {
    original: '₹329',
    price: '₹329',
    points: '8',
    items: ['Hair Cut', 'Beard Trim', 'Hair Wash', 'Head Massage (15 Min)'],
    popular: false,
  },
  {
    original: '₹649',
    price: '₹649',
    points: '10',
    items: ['Hair Cut', 'Beard Trim', 'Hair Colour', 'De-Tan'],
    popular: false,
  },
  {
    original: '₹799',
    price: '₹799',
    points: '12',
    items: ['Hair Cut', 'Beard Trim', 'Dandruff Hair Spa'],
    popular: false,
  },
  {
    original: '₹999',
    price: '₹999',
    points: '18',
    items: ['Hair Cut', 'Beard Trim', 'Golden Facial'],
    popular: true,
  },
]
