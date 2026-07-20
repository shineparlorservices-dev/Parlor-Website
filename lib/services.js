export const services = {
  threading: {
    title: "Threading",
    emoji: "🧵",
    slug: "threading",
    startingPrice: "₹20",
    image: "/images/eyebrow-threading.png",
    description: "Precision eyebrows, upper lip, chin & face shaping for clean, defined facial features.",
    items: [
      { name: "Eyebrows",   price: "₹40" },
      { name: "Upper Lips", price: "₹30" },
      { name: "Chin",       price: "₹20" },
      { name: "Forehead",   price: "₹30" },
      { name: "Sidelocks",  price: "₹60" },
    ]
  },
  facial: {
    title: "Facial",
    emoji: "✨",
    slug: "facial",
    startingPrice: "₹399",
    image: "/images/facial-hero.png",
    description: "Rejuvenating Raaga, Lotus & O3+ facials for a radiant, glowing & youthful skin tone.",
    sections: [
      {
        heading: "Raaga Facials",
        items: [
          { 
            name: "Clean Up Fruit", 
            price: "₹399",
            desc: "Gentle cleansing facial"
          },
          { 
            name: "O3+ Bridal Facial", 
            price: "₹2,999",
            desc: "Premium bridal treatment (+1 complimentary)"
          },
          { 
            name: "Raaga Rejuvenating", 
            price: "₹2,499",
            desc: "Normal to dry & dull skin"
          },
          { 
            name: "Raaga Revitalising", 
            price: "₹1,500",
            desc: "Normal to oily & uneven skin"
          },
          { 
            name: "Raaga Fairness", 
            price: "₹1,099",
            desc: "Dark spots & pigmentation"
          },
          { 
            name: "Raaga Anti-ageing", 
            price: "₹1,499",
            desc: "All skin types"
          },
          { 
            name: "Raaga Gold", 
            price: "₹2,499",
            desc: "Anti acne, blemish facial kit"
          },
          { 
            name: "Raaga Platinum", 
            price: "₹1,399",
            desc: "Fine lines & wrinkles"
          },
          { 
            name: "Raaga De-tan", 
            price: "₹499",
            desc: "Effective tan removal"
          },
        ]
      },
      {
        heading: "Lotus Facials",
        items: [
          { name: "Lotus Gold",
            price: "₹1,799", desc: "" },
          { name: "Lotus Diamond",
            price: "₹1,399", desc: "" },
          { name: "Lotus White Glow",
            price: "₹1,099", desc: "" },
          { name: "Lotus Pearl",
            price: "₹1,399", desc: "" },
          { name: "Lotus Bridal Glow",
            price: "₹2,699", desc: "" },
          { name: "Lotus Party Glow",
            price: "₹1,199",
            desc: "De-tan treatment" },
        ]
      }
    ]
  },
  waxing: {
    title: "Waxing",
    emoji: "💅",
    slug: "waxing",
    startingPrice: "₹199",
    image: "/images/waxing-hero.png",
    description: "Silky smooth Rica, Honey & Brazilian waxing for legs, arms, underarms & full body care.",
    sections: [
      {
        heading: "Full Legs",
        items: [
          { name: "Normal (Honey) Wax", price: "₹399" },
          { name: "Chocolate Wax",      price: "₹499" },
          { name: "Brazilian Wax",      price: "₹399" },
          { name: "Rica Wax",           price: "₹799" },
        ]
      },
      {
        heading: "Full Hands",
        items: [
          { name: "Normal (Honey) Wax", price: "₹349" },
          { name: "Chocolate Wax",      price: "₹399" },
          { name: "Brazilian Wax",      price: "₹349" },
          { name: "Rica Wax",           price: "₹699" },
        ]
      },
      {
        heading: "Under Arms",
        items: [
          { name: "Normal (Honey) Wax", price: "₹199" },
          { name: "Chocolate Wax",      price: "₹299" },
          { name: "Brazilian Wax",      price: "₹199" },
          { name: "Rica Wax",           price: "₹399" },
        ]
      },
      {
        heading: "Combo (Full Hands & Legs)",
        items: [
          { name: "Rica Wax",   price: "₹1,349" },
          { name: "Normal Wax", price: "₹899" },
        ]
      }
    ],
    // Legacy flat list for booking form compatibility
    items: [
      { name: "Honey Wax", price: "₹199", desc: "Gentle on sensitive skin" },
      { name: "Chocolate Wax", price: "₹299", desc: "Moisturizing & soothing" },
      { name: "Brazilian Wax", price: "₹199", desc: "Complete hair removal" },
      { name: "Rica Wax", price: "₹399", desc: "Premium Italian wax" },
    ]
  },
  bleach: {
    title: "Bleach",
    emoji: "🌟",
    slug: "bleach",
    startingPrice: "₹199",
    image: "/images/bleach-hero.png",
    description: "Safe & gentle Oxy Life and Raaga skin brightening treatment for face, neck & body.",
    brands: ["Oxy Life", "Raaga"],
    items: [
      { name: "Face",            oxyLife: "₹299", raaga: "₹349" },
      { name: "Face + Neck",     oxyLife: "₹349", raaga: "₹399" },
      { name: "Underarm Bleach", oxyLife: "₹199", raaga: "₹249" },
      { name: "Full Arms Bleach",oxyLife: "₹349", raaga: "₹499" },
      { name: "Full Leg Bleach", oxyLife: "₹499", raaga: "₹599" },
      { name: "Half Leg Bleach", oxyLife: "₹299", raaga: "₹349" },
    ]
  }
}

export const subServices = {
  Threading: [
    "Eyebrows",
    "Upper Lips",
    "Chin",
    "Forehead",
    "Sidelocks"
  ],
  Facial: [
    "Clean Up Fruit",
    "O3+ Bridal Facial",
    "Raaga Rejuvenating",
    "Raaga Revitalising",
    "Raaga Fairness",
    "Raaga Anti-ageing",
    "Raaga Gold",
    "Raaga Platinum",
    "Raaga De-tan",
    "Lotus Gold",
    "Lotus Diamond",
    "Lotus White Glow",
    "Lotus Pearl",
    "Lotus Bridal Glow",
    "Lotus Party Glow"
  ],
  Waxing: [
    "Honey Wax",
    "Chocolate Wax",
    "Brazilian Wax",
    "Rica Wax"
  ],
  Bleach: [
    "Face Bleach",
    "Face + Neck Bleach",
    "Underarm Bleach",
    "Full Arms Bleach",
    "Full Leg Bleach",
    "Half Leg Bleach"
  ]
}
