
export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const siteConfig = {
  name: "Neptune Dive",
  description: "Explore the vibrant world beneath the waves with Neptune Dive, your premier scuba diving center.",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    {
      href: "/courses",
      label: "Courses",
      children: [
        {
          href: "/courses",
          label: "All Courses",
          description: "Browse all our diving courses.",
        },
        {
          href: "/courses/open-water",
          label: "Open Water",
          description: "Start your scuba journey here.",
        },
        {
          href: "/courses/advanced",
          label: "Advanced Open Water",
          description: "Take your skills to the next level.",
        },
        {
          href: "/courses/specialty",
          label: "Specialty Courses",
          description: "Focus on specific diving interests.",
        },
      ],
    },
    {
      href: "/trips",
      label: "Diving Trips",
      children: [
        {
          href: "/trips",
          label: "All Trips",
          description: "See all our upcoming diving expeditions."
        },
        {
          href: "/trips/local",
          label: "Local Sites",
          description: "Discover the beauty of our nearby waters.",
        },
        {
          href: "/trips/international",
          label: "International Sites",
          description: "Join us on an exotic diving expedition.",
        },
      ],
    },
    {
      href: "/equipment",
      label: "Equipment",
      children: [
        {
          href: "/equipment/rentals",
          label: "Rentals",
          description: "High-quality gear for your dives."
        },
        {
          href: "/equipment/sales",
          label: "Sales",
          description: "Get your own top-tier diving equipment."
        }
      ]
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ] as NavItem[],
  footerNavLinks: [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/team", label: "Our Team" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact Us" },
        { href: "/blog", label: "Blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/courses", label: "All Courses" },
        { href: "/trips", label: "Diving Trips" },
        { href: "/equipment", label: "Equipment" },
        { href: "/booking", label: "Book a Dive" },
      ],
    },
  ],
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
  },
  contact: {
    address: "123 Ocean Drive, Atlantis, OC 45678",
    phone: "(123) 456-7890",
    email: "info@neptunedive.com",
  }
};

export const courses = [
  {
    id: "open-water",
    title: "Open Water Diver",
    description: "The first step to becoming a certified diver. Learn the fundamentals of scuba diving.",
    price: 499,
    duration: "3-4 Days",
    image: "course-open-water",
  },
  {
    id: "advanced-open-water",
    title: "Advanced Open Water",
    description: "Expand your skills with five adventure dives, including deep and navigation dives.",
    price: 399,
    duration: "2-3 Days",
    image: "course-advanced",
  },
  {
    id: "rescue-diver",
    title: "Rescue Diver",
    description: "Learn to prevent and manage problems in the water, and become a more confident diver.",
    price: 599,
    duration: "3 Days",
    image: "course-rescue",
  },
  {
    id: "divemaster",
    title: "Divemaster",
    description: "Take the first step in your professional diving career. Lead others and share your passion.",
    price: 1299,
    duration: "4-6 Weeks",
    image: "course-divemaster",
  },
];

export const teamMembers = [
    {
        name: "Dr. Marina Helms",
        role: "Master Instructor & Marine Biologist",
        bio: "With over 20 years of diving experience and a PhD in Marine Biology, Marina is the heart of our operation. Her passion for ocean conservation is contagious.",
        image: "team-1"
    },
    {
        name: "Jake 'The Fin' Sullivan",
        role: "Lead Divemaster & Wreck Specialist",
        bio: "Jake knows every sunken treasure and hidden cave in the area. His adventurous spirit and keen eye make every dive an unforgettable exploration.",
        image: "team-2"
    },
    {
        name: "Coral Rodriguez",
        role: "Instructor & Underwater Photographer",
        bio: "Coral can teach you how to handle a camera as well as you handle your BCD. She has a knack for finding the perfect shot and the most photogenic sea creatures.",
        image: "team-3"
    },
    {
        name: "Captain Ahab",
        role: "Boat Captain & Chief Storyteller",
        bio: "Our seasoned captain has more stories than the sea has fish. He ensures a safe and smooth journey to all our dive sites, with a healthy dose of humor.",
        image: "team-4"
    }
];

export const trips = [
  {
    id: "blue-hole",
    title: "The Great Blue Hole, Belize",
    description: "A giant marine sinkhole offering a unique dive into crystal-clear waters and mysterious stalactites.",
    type: "international",
    image: "gallery-3"
  },
  {
    id: "local-kelp",
    title: "Monterey Bay Kelp Forests",
    description: "Explore the enchanting underwater forests of Monterey Bay, home to otters, seals, and vibrant marine life.",
    type: "local",
    image: "gallery-1"
  },
  {
    id: "red-sea",
    title: "Red Sea Reefs, Egypt",
    description: "Discover the world-renowned coral reefs of the Red Sea, bustling with colorful fish and historic wrecks.",
    type: "international",
    image: "gallery-2"
  },
  {
    id: "puget-sound",
    title: "Puget Sound, Washington",
    description: "Dive into the cool, nutrient-rich waters of Puget Sound to see giant Pacific octopuses and wolf eels.",
    type: "local",
    image: "gallery-6"
  }
];

export const equipment = {
  rentals: [
    {
      id: "bcd",
      name: "Buoyancy Control Device (BCD)",
      description: "Top-of-the-line BCDs for perfect buoyancy control.",
      price: "$20/day",
      image: "equipment-bcd"
    },
    {
      id: "regulator",
      name: "Regulator Set",
      description: "High-performance regulators for easy breathing at any depth.",
      price: "$25/day",
      image: "equipment-regulator"
    },
    {
      id: "wetsuit",
      name: "Wetsuit (7mm)",
      description: "Stay warm in our comfortable and flexible 7mm wetsuits.",
      price: "$15/day",
      image: "equipment-wetsuit"
    },
  ],
  sales: [
     {
      id: "dive-computer",
      name: "Dive Computer",
      description: "Advanced dive computers from leading brands to track your dives.",
      price: "Starting at $299",
      image: "equipment-computer"
    },
    {
      id: "mask-fins",
      name: "Mask & Fins Set",
      description: "High-quality silicone masks and powerful fins for the best experience.",
      price: "Starting at $149",
      image: "equipment-mask"
    },
     {
      id: "dive-light",
      name: "Primary Dive Light",
      description: "Illuminate the depths with our powerful and reliable dive lights.",
      price: "Starting at $199",
      image: "equipment-light"
    },
  ]
};
