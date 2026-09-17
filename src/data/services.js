const services = [
  {
    id: "general-checkups",
    icon: "Stethoscope",
    name: "General Checkups & Cleanings",
    short: "Routine exams, cleanings, and X-rays to keep small issues from becoming big ones.",
    description:
      "Twice-yearly checkups pair a thorough exam with a professional cleaning, digital X-rays when needed, and a plain-language rundown of what we see. No surprises, no scare tactics.",
    duration: "45 min",
    priceFrom: 90,
    category: "Preventive",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "cosmetic-whitening",
    icon: "Sparkles",
    name: "Teeth Whitening",
    short: "In-office and take-home whitening systems for a brighter, even smile.",
    description:
      "Our in-chair treatment lifts stains in about an hour, or take a custom tray kit home for a gradual, low-sensitivity brighten on your own schedule.",
    duration: "60 min",
    priceFrom: 250,
    category: "Cosmetic",
    image: "https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "invisalign",
    icon: "AlignCenter",
    name: "Invisalign & Clear Aligners",
    short: "Straighten teeth discreetly with custom, removable clear aligners.",
    description:
      "We map your full treatment digitally before you start, so you can preview your finished smile. Most cases run 6–18 months with check-ins every 6 weeks.",
    duration: "Ongoing",
    priceFrom: 3200,
    category: "Orthodontic",
    image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dental-implants",
    icon: "Anchor",
    name: "Dental Implants",
    short: "Permanent, natural-looking replacements for missing teeth.",
    description:
      "Titanium posts fuse with the jawbone to anchor a custom crown, giving you a replacement tooth that looks, feels, and functions like your own.",
    duration: "Multi-visit",
    priceFrom: 1800,
    category: "Restorative",
    image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "root-canal",
    icon: "Activity",
    name: "Root Canal Therapy",
    short: "Save an infected or badly damaged tooth and relieve pain fast.",
    description:
      "Modern technique and local anesthesia make this far more comfortable than its reputation suggests — most patients say it feels like getting a filling.",
    duration: "90 min",
    priceFrom: 700,
    category: "Restorative",
  },
  {
    id: "pediatric",
    icon: "Baby",
    name: "Pediatric Dentistry",
    short: "Friendly first visits and ongoing care built for growing smiles.",
    description:
      "A calm, unrushed approach for kids, from their very first checkup through sealants and cavity prevention as adult teeth come in.",
    duration: "30 min",
    priceFrom: 70,
    category: "Family",
  },
  {
    id: "crowns-bridges",
    icon: "Gem",
    name: "Crowns & Bridges",
    short: "Restore strength and shape to damaged or missing teeth.",
    description:
      "Custom-fabricated in a shade matched to your smile, crowns and bridges rebuild chewing function without anyone noticing the work.",
    duration: "2 visits",
    priceFrom: 950,
    category: "Restorative",
  },
  {
    id: "emergency-care",
    icon: "Siren",
    name: "Emergency Care",
    short: "Same-day relief for pain, breaks, and knocked-out teeth.",
    description:
      "Chipped a tooth at brunch? Woke up with a throbbing molar? We hold same-day slots every weekday for exactly this.",
    duration: "Same day",
    priceFrom: 120,
    category: "Urgent",
  },
];

export default services;
