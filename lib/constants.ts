/**
 * Site-wide constants.
 * Edit nav items / contact info here → reflected across the entire site.
 */

import { title } from "process";

export const SITE = {
  name: "Novum",
  fullName: "Novum Apartments",
  location: "Philadelphia, PA",
  tagline: "Luxury Living Redefined",
};

export const CONTACT = {
  address: "1112 E Berks St., Philadelphia, PA",
  phone: "267-616-8870",
  phoneHref: "tel:+12676168870",
  email: "group@vicintas.com",
  emailHref: "mailto:group@vicintas.com",
};

export const NAV_LINKS = [
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Residents", href: "/resident-portal" },
  { label: "Apply Now", href: "/apply" },
];

export const FOOTER_LINKS = {
  explore: [
    { label: "Properties", href: "/properties" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Residents", href: "/resident-portal" },
    { label: "Apply Now", href: "/apply" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

// ═══════════════════════════════════════════════════════════
// RESIDENCES  full data for both listing + detail pages
// ═══════════════════════════════════════════════════════════
export const RESIDENCES = [
  {
    slug: "studio",
    name: "The Studio",
    category: "studio",
    type: "Studio · 1 Bath",
    sqft: "400 - 550 sqft",
    priceFrom: "From $1,700/mo",
    image:
      "/images/home/Studiofront.jpeg",
    description: "An efficient layout designed for refined city living.",
    tagline: "Studio Residence",
    longDescription: [
      "A thoughtfully composed studio that makes the most of every square foot. Floor-to-ceiling windows fill the space with natural light, while curated finishes lend a sense of permanence that belies its size.",
      "Ideal for the urban professional, the Studio at Triad reflects the building's larger philosophy. Refined materials, generous proportions, and a quiet sense of permanence in every detail.",
    ],
    gallery: [
      "/images/properties/studio/studio1.jpg",
      "/images/properties/studio/studio2.jpg",
      "/images/properties/studio/studio3.jpg",
    ],
    features: [
      "400 to 550 sqft",
      "1 Bathroom",
      "Large windows",
      "Hardwood flooring",
      "In-unit washer and dryer",
      "Smart thermostat",
      "Quartz countertops",
      "Stainless appliances",
    ],
    floorPlan:
      "/images/properties/studio/studio-floor-plan.PNG",
  },
  {
    slug: "one-bedroom",
    name: "The One",
    category: "one-bedroom",
    type: "1 Bedroom · 1 Bath",
    sqft: "600 - 800 sqft",
    priceFrom: "From $1,925/mo",
    image:
      "/images/home/1bedfront.jpg",
    description: "A timeless one-bedroom retreat with elegant proportions.",
    tagline: "1 Bedroom Residence",
    longDescription: [
      "The One is a residence shaped by quiet confidence. A generous bedroom, a refined kitchen, and a living area calibrated for both intimate evenings and weekend gatherings.",
      "Every detail from the warm oak floors to the considered placement of light invites you to linger.",
    ],
    gallery: [
      "/images/properties/the-one/1bed1.jpg",
      "/images/properties/the-one/1bed2.jpg",
      "/images/properties/the-one/1bed3.jpg",
    ],
    features: [
      "600 to 800 sqft",
      "1 Bedroom · 1 Bathroom",
      "Large windows",
      "Engineered oak flooring",
      "In-unit washer and dryer",
      "Walk-in closet",
      "Quartz countertops",
      "Stainless appliances",
    ],
    floorPlan:
      "/images/properties/the-one/the-one-floor-plan.png",
  },
  {
    slug: "two-bedroom",
    name: "The Pair",
    category: "two-bedroom",
    type: "2 Bedroom · 2 Bath",
    sqft: "900 - 1,150 sqft",
    priceFrom: "From $2,650/mo",
    image:
      "/images/home/2bedfront.jpeg",
    description: "Our signature residence, expansive, refined, unforgettable.",
    tagline: "2 Bedroom Residence",
    longDescription: [
      "The Pair is built for those who live with intention. Two well-proportioned bedrooms available with one or two bathrooms, and a connected living area that flexes between calm and conversation.",
      "Available in two configurations: 2 Bedroom with 2 Bathrooms, and 2 Bedroom with 1 Bathroom. Both designed with the same commitment to refined living.",
    ],
    gallery: [
      "/images/properties/the-pair/2bed1.jpg",
      "/images/properties/the-pair/2bed2.jpg",
      "/images/properties/the-pair/2bed3.jpg",
    ],
    features: [
      "900 to 1,150 sqft",
      "2 Bedrooms · 1 or 2 Bathrooms",
      "Open-concept living",
      "Engineered oak flooring",
      "In-unit washer and dryer",
      "Walk-in closet",
      "Quartz countertops",
      "Premium stainless appliances",
    ],
    floorPlan:
      "/images/properties/the-pair/the-pair-floor-plan.png",
  },
  //{
    //slug: "three-bedroom",
    //name: "The Suite",
    //category: "three-bedroom",
    //type: "3 Bedroom · 2 Bath",
    //sqft: "1,200 - 1,500 sqft",
    //priceFrom: "From $3,450/mo",
    //image:
      //"/images/home/suite.jpg",
    //description: "Our signature residence, expansive, refined, unforgettable.",
    //tagline: "3 Bedroom Signature Residence",
    //longDescription: [
      //"The Suite is the building's most generous offering. Three full bedrooms, two beautifully appointed baths, and a great room scaled for the way life actually unfolds.",
      //"A home for families, hosts, and anyone who has decided that home should be the most considered space in their day.",
    //],
    //gallery: [
      //"/images/home/suite.jpg",
      //"/images/properties/the-suite/suite 2.jpg",
      //"/images/properties/the-suite/suite 3.jpg",
    //],
    //features: [
      //"1,200 to 1,500 sqft",
      //"3 Bedrooms · 2 Bathrooms",
      //"Open-concept great room",
      //"Engineered oak flooring",
      //"In-unit washer and dryer",
      //"Walk-in closets",
      //"Quartz countertops",
      //"Premium stainless appliances",
    //],
    //floorPlan:
      //"/images/properties/the-suite/suite-floor-plan.png",
  //},
];

// Filter categories for the properties page
export const RESIDENCE_CATEGORIES = [
  { id: "all", label: "All Residences" },
  { id: "studio", label: "Studio" },
  { id: "one-bedroom", label: "1 Bedroom" },
  { id: "two-bedroom", label: "2 Bedroom" },
  //{ id: "three-bedroom", label: "3 Bedroom" },
];


// ═══════════════════════════════════════════════════════════
// ABOUT SECTION  story + stats
// ═══════════════════════════════════════════════════════════
export const ABOUT = {
  eyebrow: "A New Landmark",
  title: "A modern residence, thoughtfully designed.",
  body: [
    "Set in one of Philadelphia’s most connected neighborhoods, Novum introduces modern residences shaped by clean design, quality interiors, and everyday ease.",
    "Completed in 2024, the building offers a fresh residential experience with considered layouts, refined finishes, and practical comforts throughout. Every detail is designed to support modern city living without feeling overstated.",
  ],
  image:
    "/images/home/landmark.jpg",
  imageAlt: "Modern architectural detail at Triad UCity Apartments",
  stats: [
    { value: "40", label: "Residences" },
    { value: "13", label: "Floor Plans" },
    { value: "2024", label: "Newly Built" },
  ],
};

// ═══════════════════════════════════════════════════════════
// AMENITIES  featured image + icon grid
// ═══════════════════════════════════════════════════════════
export const AMENITIES = {
  eyebrow: "Life Elevated",
  title: "A residence shaped by what you'll do here.",
  description:
    "Designed to make daily life feel effortless, social, and entirely your own.",

  heroImage:
    "/images/home/rooftoptriad.jpg",
  heroImageAlt: "Rooftop terrace at Triad UCity Apartments",
  heroCaption: "Rooftop, above the city, beyond the ordinary.",

  items: [
    {
      icon: "Package",
      title: "Secure Package Room",
      description:
        "Handling of deliveries with controlled, monitored access.",
    },
    {
      icon: "PawPrint",
      title: "Pet-Friendly Living",
      description:
        "Welcoming policies and thoughtful touches for your companions.",
    },
    {
      icon: "Bike",
      title: "Bike Storage",
      description:
        "Indoor parking and convenient access for everyday commuters.",
    },
    {
      icon: "Laptop",
      title: "Elevator Access",
      description:
        "Convenient access throughout the building for everyday ease.", //A quiet, well-equipped space for focused work without leaving home.",
    },
    {
      icon: "Wifi",
      title: "High-Speed Internet",
      description: "Ready for immediate setup.",
    },
    {
      icon: "ShieldCheck",
      title: "Controlled Access",
      description:
        "Secure entry, surveillance, and peace of mind around the clock.",
    },
    {
      icon: "Dumbbell", 
      title: "Modern Kitchens", 
      description:
        "Thoughtful finishes, efficient layouts, and stainless steel appliances.",
    },
    {
      icon: "Building2", 
      title: "Rooftop", 
      description:
        "An elevated outdoor retreat with sweeping views of the skyline."
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// GALLERY PREVIEW  6 images for homepage teaser
// ═══════════════════════════════════════════════════════════
export const GALLERY_PREVIEW = {
  eyebrow: "Moments",
  title: "Spaces that speak quietly.",
  description:
    "A glimpse into life at Novum interiors, light, and the quiet rhythm of the building.",

  images: [
    {
      src: "/images/home/livingroomgallery.jpeg",
      alt: "Sunlit living room with refined furnishings",
      caption: "The Living Room",
      size: "tall", // tall | short | medium
    },
    {
      src: "/images/home/kitchengallery.jpg",
      alt: "Minimalist kitchen with stone counters",
      caption: "The Kitchen",
      size: "short",
    },
    {
      src: "/images/home/gymgallery.jpg",
      alt: "Bedroom with soft natural light",
      caption: "The Gym",
      size: "medium",
    },
    {
      src: "/images/home/bathgallery.jpg",
      alt: "Bathroom with timeless fixtures",
      caption: "The Bath",
      size: "tall",
    },
    {
      src: "/images/home/lightandstonegallery.jpg",
      alt: "Architectural detail at sunset",
      caption: "Light & Stone",
      size: "short",
    },
    {
      src: "/images/home/loungegallery.jpg",
      alt: "Open lounge with curated decor",
      caption: "Lounge/Co-working",
      size: "short",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// TESTIMONIALS  resident quotes
// ═══════════════════════════════════════════════════════════
export const TESTIMONIALS = {
  eyebrow: "Voices",
  title: "From the residents at Novum.",

  quotes: [
    {
      text: "The rooftop has quickly become one of my favorite parts of living at Novum. It is a peaceful place to step outside, get some fresh air, and enjoy a different view of the neighborhood without leaving home.",
      author: "Uyen N.",
      meta: "Resident since 2024",
    },
    {
      text: "The location has made daily life so much easier. I can get around the neighborhood quickly, access transit when I need it, and still come home to a space that feels calm and well designed.",
      author: "David L.",
      meta: "1-Bedroom Resident",
    },
    {
      text: "The natural light, the modern kitchen, and the overall layout make the apartment feel easy to live in.",
      author: "Priya S.",
      meta: "Studio Resident",
    },
    {
      text: "Novum has been a great fit for my routine. The secure entry, package access, and in-unit laundry make everyday living simple, and the apartment itself feels fresh and comfortable.",
      author: "Kevin C.",
      meta: "2-Bedroom Resident",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// LOCATION  neighborhood story, stats, nearby places
// ═══════════════════════════════════════════════════════════
export const LOCATION = {
  eyebrow: "The Neighborhood",
  title: "Where the city comes alive.",
  body: [
    "Novum sits in one of Philadelphia's most connected neighborhoods, surrounded by local dining, transit access, everyday conveniences, and the energy of city living.",
    "Step out for coffee, commute with ease, or explore nearby restaurants and neighborhood destinations. Everything you need is close to home.",
  ],

  address: "1112 E Berks St., Philadelphia, PA 19125",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=1112+E+Berks+St+Philadelphia+PA+19125",

  // Embedded map URL (Google Maps embed format)
  mapEmbedUrl:
    "https://www.google.com/maps?q=1112%20E%20Berks%20St%2C%20Philadelphia%2C%20PA%2019125&output=embed",

  stats: [
    { value: "97", label: "Walk Score" },
    { value: "95", label: "Bike Score" },
    { value: "05", label: "Min to Transit" },
  ],

  nearby: [
    { place: "Fishtown", time: "Nearby" },
    { place: "Frankford Avenue", time: "Nearby" },
    { place: "Girard Station", time: "Short Walk" },
    { place: "Northern Liberties", time: "Short ride" },
    { place: "Center City", time: "Short ride" },
    { place: "Delaware River Waterfront", time: "Short ride" },
  ],
};

// ═══════════════════════════════════════════════════════════
// FINAL CTA  closing call-to-action on the homepage
// ═══════════════════════════════════════════════════════════
export const FINAL_CTA = {
  eyebrow: "Begin",
  title: "Find your place at Novum.",
  description:
    "Schedule a private tour or speak with our leasing team. We're here whenever you're ready.",
  image:
    "/images/home/finalctatriad.jpg",
  imageAlt: "Architectural exterior of Triad UCity Apartments at dusk",
  primaryCta: {
    label: "Schedule a Tour",
    href: "/contact",
  },
  secondaryCta: {
    label: "Contact Us",
    href: "/contact",
  },
};

// ═══════════════════════════════════════════════════════════
// PROMO BAR  announcement bar above the navbar
// Set `enabled: false` to hide entirely.
// ═══════════════════════════════════════════════════════════
export const PROMO_BAR = {
  enabled: true, // ← toggle this to show/hide the bar

  // Rotation interval (milliseconds). 0 = no rotation.
  rotationMs: 7000,

  // Each message can be a plain text OR include a link.
  messages: [
    {
      text: "Now leasing",
      linkText: "Schedule a private tour",
      href: "/contact",
    },
    {
      text: "First-month rent waived for select residences",
      linkText: "Explore offers",
      href: "/properties",
    },
    {
      text: "Newly completed in 2024 · Lancaster Avenue, Philadelphia",
      linkText: "Discover Triad",
      href: "/about",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// ABOUT PAGE  full story page (separate from homepage About)
// ═══════════════════════════════════════════════════════════
export const ABOUT_PAGE = {
  hero: {
    eyebrow: "Our Story",
    title: "A residence built without compromise.",
    description:
      "Triad was not built to fill a lot. It was built to set a new standard for what residential living on Lancaster Avenue could be.",
    image:
      "/images/home/rooftoptriad.jpg",
    imageAlt: "Architectural detail of Triad UCity Apartments",
  },

  introduction: {
    eyebrow: "Introduction",
    title: "Forty homes. One uncompromising standard.",
    paragraphs: [
      "Triad began with a simple observation, that the corridor of Lancaster Avenue deserved a residential building that took its surroundings seriously. Not a compromise. Not a template. A luxurious residence sized for the neighborhood it joined.",
      "Completed in 2024, the building delivers forty homes across thirteen floor plans and four levels. Each was drawn with the same conviction, that proportion, light, and material are the difference between a place to live and a place to come home to.",
    ],
  },

  pillars: [
    {
      number: "01",
      title: "Craft",
      description:
        "Materials selected for permanence, not trend. Surfaces that age beautifully. Hardware that quietly works.",
    },
    {
      number: "02",
      title: "Place",
      description:
        "Rooted in Lancaster Avenue's energy and rhythm. Designed to complement the corridor with a fresh modern perspective.",
    },
    {
      number: "03",
      title: "Standard",
      description:
        "A leasing experience shaped by attentiveness, discretion, and an unwavering commitment to the highest quality.",
    },
  ],

  design: {
    eyebrow: "Design",
    title: "High end, in every detail.",
    paragraphs: [
      "The exterior is a study in modern restraint, designed to stand out without overwhelming. Inside, residences open with full-height glazing, engineered oak floors, and kitchens calibrated for daily use.",
      "Every choice, from the temperature of the lobby light to the weight of the door hardware, was made to deliver an exceptional living experience from the moment you arrive.",
    ],
    image:
      "/images/home/kitchengallery.jpg",
    imageAlt: "Interior architectural detail",
  },

  timeline: [
    {
      year: "2023",
      title: "The Site",
      description: "Land acquisition along the Lancaster Avenue corridor.",
    },
    {
      year: "2024",
      title: "Construction",
      description: "Eighteen months of careful, considered building.",
    },
    {
      year: "2025",
      title: "Completion",
      description: "Forty residences welcomed their first neighbors.",
    },
    {
      year: "Today",
      title: "A Community",
      description: "A growing neighborhood of residents shaping daily life.",
    },
  ],
};

// ═══════════════════════════════════════════════════════════
// GALLERY PAGE  full gallery with category filters
// ═══════════════════════════════════════════════════════════
export const GALLERY_PAGE = {
  hero: {
    eyebrow: "Gallery",
    title: "Light, surface, space.",
    description:
      "A visual survey of the building  interiors, amenities, and the moments that shape life at Triad.",
    image:
      "/images/home/loungegallery.jpg",
    imageAlt: "Architectural interior at Triad",
  },

  categories: [
    { id: "all", label: "All" },
    { id: "interiors", label: "Interiors" },
    { id: "amenities", label: "Amenities" },
    { id: "exterior", label: "Exterior" },
  ],

  images: [
    // Interiors
    {
      src: "/images/home/livingroomgallery.jpeg",
      alt: "Sunlit living room with refined furnishings",
      caption: "The Living Room",
      category: "interiors",
      size: "tall",
    },
    {
      src: "/images/home/kitchengallery.jpg",
      alt: "Minimalist kitchen with stone counters",
      caption: "The Kitchen",
      category: "interiors",
      size: "short",
    },
    {
      src: "/images/home/2bedfront.jpeg",
      alt: "Bedroom with soft natural light",
      caption: "The Bedroom",
      category: "interiors",
      size: "medium",
    },
    {
      src: "/images/home/bathgallery.jpg",
      alt: "Bathroom with timeless fixtures",
      caption: "The Bath",
      category: "interiors",
      size: "tall",
    },
    {
      src: "/images/home/lightandstonegallery.jpg",
      alt: "Quiet bedroom in morning light",
      caption: "Morning Light",
      category: "interiors",
      size: "medium",
    },

    // Amenities
    {
      src: "/images/home/rooftoptriad.jpg",
      alt: "Panaromic Rooftop",
      caption: "The Rooftop",
      category: "amenities",
      size: "tall",
    },
    {
      src: "/images/home/laundrygallery.jpg",
      alt: "In house Laundry for uncompromised cleanliness",
      caption: "In-house Laundry",
      category: "amenities",
      size: "short",
    },
    {
      src: "/images/home/gymgallery.jpg",
      alt: "Modern fitness studio with natural light",
      caption: "The Gym",
      category: "amenities",
      size: "medium",
    },
    {
      src: "/images/home/loungegallery.jpg",
      alt: "Lounge/Co-working",
      caption: "Lounge/Co-working",
      category: "amenities",
      size: "short",
    },

    // Exterior
    {
      src: "/images/home/facadegallery.jpg",
      alt: "Exterior facade at twilight",
      caption: "The Facade",
      category: "exterior",
      size: "tall",
    },
    //{
      //src: "/images/pages/golden-hour.jpg",
      //alt: "Building detail at golden hour",
      //caption: "Golden Hour",
      //category: "exterior",
      //size: "short",
    //},
    //{
      //src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop",
      //alt: "Building entrance at evening",
      //caption: "The Entrance",
      //category: "exterior",
      //size: "medium",
    //},
    //{
      //src: "/images/home/gallery-new-5.jpg",
      //alt: "Material details at sunset",
      //caption: "Light & Stone",
      //category: "exterior",
      //size: "tall",
    //},
  ],
};

// ═══════════════════════════════════════════════════════════
// CONTACT PAGE  full contact page data
// ═══════════════════════════════════════════════════════════
export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Contact",
    title: "Let's begin a conversation.",
    description:
      "Reach out to schedule a private tour, request availability, or ask anything about life at Triad.",
    image:
      "/images/home/contactcta.jpg",
    imageAlt: "Triad UCity Apartments exterior at twilight",
  },

  formIntro: {
    eyebrow: "Get in Touch",
    title: "Send us a message.",
    description:
      "We'll respond within one business day. For immediate assistance, please call our leasing team directly.",
  },

  // Interest options for the form
  interests: [
    { id: "studio", label: "Studio" },
    { id: "one-bedroom", label: "1 Bedroom" },
    { id: "two-bedroom", label: "2 Bedroom" },
    //{ id: "three-bedroom", label: "3 Bedroom" },
  ],

  hours: [
    { day: "Monday – Friday", time: "9 AM – 6 PM" },
    { day: "Saturday", time: "10 AM – 4 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};