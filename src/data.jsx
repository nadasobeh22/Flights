export const cities = [
    "Amman", "Dubai", "Riyadh", "Cairo", "Beirut", "Baghdad", "Casablanca", "Tunis", "Khartoum", "Tripoli",
    "Muscat", "Kuwait City", "Doha", "Manama", "Sana'a", "Damascus", "Amman", "Algiers", "Rabat", "Nouakchott"
  ];
  
  export const flights = Array.from({ length: 102 }, (_, i) => ({
    id: i + 1,
    from: cities[Math.floor(Math.random() * cities.length)],
    to: cities[Math.floor(Math.random() * cities.length)],
    date: `2023-10-${(i % 30) + 1}`,
    price: 100 + (i * 10),
    seats: 50 - (i % 10),
    rating: Math.floor(Math.random() * 5) + 1, 
  }));
  
  export const bookings = [];