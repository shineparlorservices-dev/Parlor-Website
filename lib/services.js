export const services = {
  threading: {
    title: "Threading",
    emoji: "🧵",
    slug: "threading",
    startingPrice: "₹30",
    items: [
      { name: "Eyebrows",   price: "₹50" },
      { name: "Upper Lips", price: "₹50" },
      { name: "Chin",       price: "₹30" },
      { name: "Forehead",   price: "₹50" },
      { name: "Sidelocks",  price: "₹30" },
    ]
  },
  facial: {
    title: "Facial",
    emoji: "✨",
    slug: "facial",
    startingPrice: "₹400",
    sections: [
      {
        heading: "Raaga Facials",
        items: [
          { 
            name: "Clean Up Fruit", 
            price: "₹400",
            desc: "Gentle cleansing facial"
          },
          { 
            name: "O3+ Bridal Facial", 
            price: "₹3,000",
            desc: "Premium bridal treatment"
          },
          { 
            name: "Raaga Rejuvenating", 
            price: "₹2,500",
            desc: "Normal to dry & dull skin"
          },
          { 
            name: "Raaga Revitalising", 
            price: "₹1,500",
            desc: "Normal to oily & uneven skin"
          },
          { 
            name: "Raaga Fairness", 
            price: "₹2,000",
            desc: "Dark spots & pigmentation"
          },
          { 
            name: "Raaga Anti-ageing", 
            price: "₹2,500",
            desc: "All skin types"
          },
          { 
            name: "Raaga Gold", 
            price: "₹3,000",
            desc: "Anti acne & blemish kit"
          },
          { 
            name: "Raaga Platinum", 
            price: "₹2,500",
            desc: "Fine lines & wrinkles"
          },
          { 
            name: "Raaga De-tan", 
            price: "₹500",
            desc: "Effective tan removal"
          },
        ]
      },
      {
        heading: "Lotus Facials",
        items: [
          { name: "Lotus Gold",
            price: "₹1,500", desc: "" },
          { name: "Lotus Diamond",
            price: "₹1,800", desc: "" },
          { name: "Lotus White Glow",
            price: "₹1,800", desc: "" },
          { name: "Lotus Pearl",
            price: "₹1,400", desc: "" },
          { name: "Lotus Bridal Glow",
            price: "₹3,000", desc: "" },
          { name: "Lotus Party Glow",
            price: "Call for price",
            desc: "De-tan treatment" },
        ]
      }
    ]
  },
  waxing: {
    title: "Waxing",
    emoji: "💅",
    slug: "waxing",
    startingPrice: "On Request",
    items: [
      { name: "Honey Wax", price: "On Request", desc: "Gentle on sensitive skin" },
      { name: "Chocolate Wax", price: "On Request", desc: "Moisturizing & soothing" },
      { name: "Brazilian Wax", price: "On Request", desc: "Complete hair removal" },
      { name: "Rica Wax", price: "On Request", desc: "Premium Italian wax" },
    ]
  },
  bleach: {
    title: "Bleach",
    emoji: "🌟",
    slug: "bleach",
    startingPrice: "On Request",
    items: [
      { name: "Oxy Life Bleach"  },
      { name: "Underarm Bleach"  },
      { name: "Full Hand Bleach" },
      { name: "Half Arm Bleach"  },
      { name: "Full Leg Bleach"  },
      { name: "Half Leg Bleach"  },
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
    "Oxy Life Bleach",
    "Underarm Bleach",
    "Full Hand Bleach",
    "Half Arm Bleach",
    "Full Leg Bleach",
    "Half Leg Bleach"
  ]
}
