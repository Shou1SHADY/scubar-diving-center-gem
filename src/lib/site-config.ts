export const siteConfig = {
  name: "Neptune Dive",
  description: "Explore the vibrant world beneath the waves with Neptune Dive, your premier scuba diving center.",
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/courses", label: "Courses" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
  ],
  footerNavLinks: [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/team", label: "Our Team" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact Us" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/courses", label: "All Courses" },
        { href: "/courses", label: "Equipment Rental" },
        { href: "/courses", label: "Guided Tours" },
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
]
