const clinicInfo = {
  name: "Bright Arc Dental",
  tagline: "Gentle, modern dentistry for every smile in the family.",
  phone: "+1 (555) 216-4470",
  phoneHref: "tel:+15552164470",
  email: "hello@brightarcdental.com",
  address: {
    line1: "482 Maple Grove Avenue",
    line2: "Suite 3B",
    city: "Riverdale",
    region: "NY",
    zip: "10471",
  },
  hours: [
    { day: "Monday – Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "8:00 AM – 4:00 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Google Reviews", href: "#" },
  ],
  emergency: {
    label: "Dental emergency?",
    note: "Call us directly — we hold same-day slots for urgent care.",
  },
};

export default clinicInfo;
