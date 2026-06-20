const FX_KEY = '6cee3b11b03b735abebc4606';
const NEWS_KEY = '914e6779a821425e9cee162390fa0484';

const destinations = [
  // ASIA
  {
    name: 'Vietnam', flag: '🇻🇳', cities: 'Hanoi · Ho Chi Minh · Da Nang', currency: 'VND', dailyCostUSD: 25, badge: 'best',
    insight: 'One of the cheapest destinations in Asia — street food, hostels and transport are extremely affordable.', climate: '✅ Stable', newsQuery: 'Vietnam visa entry ban weather flood 2025',
    food: [
      { icon: '🍜', name: 'Pho Bo', desc: 'Iconic beef noodle soup — best had at street stalls before 9am. Look for places with plastic stools.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🥖', name: 'Banh Mi', desc: 'Vietnamese baguette sandwich with pate, pickled veg and chilli. Under $1 from street carts.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🫕', name: 'Bun Cha', desc: 'Grilled pork with vermicelli and dipping broth — Hanoi\'s most famous dish.', tag: 'Local Favourite', tagColor: '#2d1f4e', tagText: '#a78bfa' },
      { icon: '🥗', name: 'Cao Lau', desc: 'Thick noodles with pork and greens — only authentic in Hoi An due to the local well water used.', tag: 'Regional', tagColor: '#4a1010', tagText: '#f87171' },
    ],
    stay: [
      { icon: '🏨', name: 'Old Quarter Hostels, Hanoi', desc: 'Dorm beds from $5/night. Central, walkable, vibrant nightlife nearby.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🏩', name: 'Hoi An Boutique Guesthouses', desc: 'Private rooms from $15-20/night in lantern-lit ancient town.', tag: 'Mid Range', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🏖', name: 'Da Nang Beachfront Hotels', desc: 'Brand hotels on My Khe Beach from $40/night — world-class beach at a fraction of Thai prices.', tag: 'Comfort', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🛍', name: 'Ben Thanh Market, HCMC', desc: 'Iconic indoor market — clothing, souvenirs, street food. Bargain hard, start at 40% of asking price.', tag: 'Bargain', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎨', name: 'Hoi An Night Market', desc: 'Lanterns, silk clothing, hand-made gifts. Custom tailored clothes made overnight from $20.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' },
    ],
    itinerary: [
      { theme: 'Arrive in Hanoi', activities: [{ time: 'Morning', text: 'Arrive, check into Old Quarter hostel, walk Hoan Kiem Lake' }, { time: 'Afternoon', text: 'Visit Ho Chi Minh Mausoleum and Temple of Literature' }, { time: 'Evening', text: 'Pho Bo dinner at a street stall, Ta Hien Beer Street' }] },
      { theme: 'Hanoi Deep Dive', activities: [{ time: 'Morning', text: 'Hoa Lo Prison Museum, St Joseph\'s Cathedral' }, { time: 'Afternoon', text: 'Vietnam Museum of Ethnology' }, { time: 'Evening', text: 'Bun Cha dinner, rooftop bar in Old Quarter' }] },
      { theme: 'Halong Bay Day Trip', activities: [{ time: 'Full Day', text: 'Day cruise to Halong Bay — limestone karsts, kayaking, cave exploration' }, { time: 'Evening', text: 'Return to Hanoi, night train to Hue' }] },
      { theme: 'Hue — Imperial City', activities: [{ time: 'Morning', text: 'Imperial Citadel and Forbidden Purple City' }, { time: 'Afternoon', text: 'Thien Mu Pagoda by motorbike along Perfume River' }, { time: 'Evening', text: 'Bun Bo Hue for dinner — spicier than Hanoi pho' }] },
      { theme: 'Hoi An Arrival', activities: [{ time: 'Morning', text: 'Bus to Hoi An (3hrs), check into guesthouse' }, { time: 'Afternoon', text: 'Ancient Town walking tour — Japanese Bridge, merchant houses' }, { time: 'Evening', text: 'Night market, lantern release on the river' }] },
    ]
  },
  {
    name: 'Nepal', flag: '🇳🇵', cities: 'Kathmandu · Pokhara · Chitwan', currency: 'NPR', dailyCostUSD: 20, badge: 'best',
    insight: 'Extremely affordable — ideal for trekking and adventure travel on a tight budget.', climate: '✅ Stable', newsQuery: 'Nepal trekking permit earthquake landslide 2025',
    food: [
      { icon: '🥟', name: 'Momo', desc: 'Steamed or fried dumplings filled with buff or veg — Nepal\'s favourite street food. Everywhere for under $1.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🍛', name: 'Dal Bhat', desc: 'Lentil soup with rice, curry and pickles — the national meal. Most trekking lodges offer unlimited refills.', tag: 'Local Staple', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🍞', name: 'Sel Roti', desc: 'Sweet fried rice bread ring — popular at festivals and roadside stalls. Best eaten warm with tea.', tag: 'Street Food', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    stay: [
      { icon: '🏔', name: 'Thamel Guesthouses, Kathmandu', desc: 'Backpacker hub with rooms from $6-10/night. Everything walkable — gear shops, restaurants, tour agents.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🏞', name: 'Pokhara Lakeside Hotels', desc: 'Private rooms with Phewa Lake and Annapurna views from $12/night.', tag: 'Great Value', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '⛺', name: 'Annapurna Tea Houses', desc: 'Simple lodges on the trail from $3-8/night including dinner.', tag: 'Trekking', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🧣', name: 'Thamel Market, Kathmandu', desc: 'Pashmina scarves, singing bowls, Thangka paintings, trekking gear. Bargain — start at 50% of asking.', tag: 'Handicrafts', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎵', name: 'Singing Bowls', desc: 'Hand-hammered Tibetan singing bowls unique to Nepal. Asan Tole market has the best authentic ones.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' },
    ],
    itinerary: [
      { theme: 'Arrive Kathmandu', activities: [{ time: 'Morning', text: 'Arrive, check into Thamel, recover from flight' }, { time: 'Afternoon', text: 'Swayambhunath (Monkey Temple) — panoramic valley views' }, { time: 'Evening', text: 'Momo dinner in Thamel, gear shopping if trekking' }] },
      { theme: 'Kathmandu Valley', activities: [{ time: 'Morning', text: 'Pashupatinath Temple — sacred Hindu cremation ghats on Bagmati River' }, { time: 'Afternoon', text: 'Boudhanath Stupa — one of the largest in the world, walk the kora' }, { time: 'Evening', text: 'Rooftop dinner overlooking stupa' }] },
      { theme: 'Bhaktapur Day Trip', activities: [{ time: 'Full Day', text: 'Ancient Newari city 13km from Kathmandu — Durbar Square, 55-Window Palace, pottery square' }, { time: 'Afternoon', text: 'Try Juju Dhau (king\'s yoghurt) — famous local specialty' }] },
      { theme: 'Travel to Pokhara', activities: [{ time: 'Morning', text: 'Tourist bus to Pokhara (7hrs, scenic) or 25min flight' }, { time: 'Afternoon', text: 'Phewa Lake boating, Tal Barahi Temple island' }, { time: 'Evening', text: 'Lakeside strip — cafes, restaurants, mountain views at sunset' }] },
      { theme: 'Sarangkot Sunrise', activities: [{ time: '4:30am', text: 'Hike to Sarangkot for Annapurna sunrise — one of the great views in Asia' }, { time: 'Morning', text: 'World Peace Pagoda hike across the lake' }, { time: 'Afternoon', text: 'Paragliding from Sarangkot ($70-90)' }] },
    ]
  },
  {
    name: 'Thailand', flag: '🇹🇭', cities: 'Bangkok · Chiang Mai · Phuket', currency: 'THB', dailyCostUSD: 35, badge: 'great',
    insight: 'INR has strengthened vs THB recently — your money goes further than last year.', climate: '✅ Stable', newsQuery: 'Thailand travel warning flood protest visa 2025',
    food: [
      { icon: '🍜', name: 'Pad Thai', desc: 'Stir-fried rice noodles with shrimp, egg, bean sprouts and peanuts. Best from street woks at night markets.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🥘', name: 'Tom Yum Goong', desc: 'Spicy-sour prawn soup with lemongrass, galangal and kaffir lime — the defining Thai flavour.', tag: 'Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🥭', name: 'Mango Sticky Rice', desc: 'Fresh mango over coconut-steamed glutinous rice with coconut cream drizzle. Under $2 at markets.', tag: 'Dessert', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    stay: [
      { icon: '🏙', name: 'Khao San Road Hostels, Bangkok', desc: 'Party hostel central from $6/night. Loud at night but unbeatable location and social scene.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🌸', name: 'Nimman Area, Chiang Mai', desc: 'Hip boutique guesthouses from $20/night near cafes, night bazaar and Doi Suthep mountain.', tag: 'Mid Range', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🏝', name: 'Koh Lanta / Koh Tao Bungalows', desc: 'Beach bungalows from $15-25/night — less touristy than Phuket with clearer water.', tag: 'Beach', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🌃', name: 'Chatuchak Weekend Market, Bangkok', desc: 'World\'s largest weekend market — 15,000 stalls, clothing, art, plants, food. Go early before heat.', tag: 'Massive', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎪', name: 'Chiang Mai Night Bazaar', desc: 'Nightly market with hill tribe crafts, silk, silver jewellery and street food.', tag: 'Night Market', tagColor: '#1e3a5f', tagText: '#60a5fa' },
    ],
    itinerary: [
      { theme: 'Bangkok Temples', activities: [{ time: 'Morning', text: 'Wat Phra Kaew and Grand Palace — go early before crowds and heat' }, { time: 'Afternoon', text: 'Wat Pho (Reclining Buddha), longtail boat on Chao Phraya' }, { time: 'Evening', text: 'Khao San Road night scene, street food at Rambuttri' }] },
      { theme: 'Bangkok Modern', activities: [{ time: 'Morning', text: 'Chatuchak Weekend Market or Jim Thompson House' }, { time: 'Afternoon', text: 'Siam shopping malls, rooftop at MahaNakhon' }, { time: 'Evening', text: 'Chinatown (Yaowarat) street food crawl' }] },
      { theme: 'Travel to Chiang Mai', activities: [{ time: 'Morning', text: 'Overnight train or morning flight to Chiang Mai' }, { time: 'Afternoon', text: 'Old City moat walk, Wat Chedi Luang' }, { time: 'Evening', text: 'Sunday Walking Street if weekend, Night Bazaar otherwise' }] },
      { theme: 'Doi Suthep + Elephants', activities: [{ time: 'Morning', text: 'Doi Suthep temple mountain by songthaew' }, { time: 'Afternoon', text: 'Ethical elephant sanctuary half-day visit (book ahead, $50-70)' }, { time: 'Evening', text: 'Nimman area cafes and cocktail bars' }] },
      { theme: 'Islands', activities: [{ time: 'Morning', text: 'Flight or bus-ferry combo to Koh Tao or Koh Lanta' }, { time: 'Afternoon', text: 'Check into beach bungalow, snorkel or swim' }, { time: 'Evening', text: 'Beach bar sunset, fresh seafood BBQ dinner' }] },
    ]
  },
  { name: 'Indonesia', flag: '🇮🇩', cities: 'Bali · Jakarta · Yogyakarta', currency: 'IDR', dailyCostUSD: 30, badge: 'great', insight: 'Bali remains one of the best value destinations for young travellers globally.', climate: '✅ Stable', newsQuery: 'Bali Indonesia volcano eruption travel ban 2025', food: [{ icon: '🍢', name: 'Nasi Goreng', desc: 'Indonesian fried rice with egg, kecap manis and crackers — the national dish, available everywhere.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥩', name: 'Babi Guling', desc: 'Balinese suckling pig — crispy skin, spiced meat. Ibu Oka in Ubud is the most famous spot.', tag: 'Bali Special', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🌴', name: 'Canggu Guesthouses', desc: 'Surf town with private rooms from $15/night — digital nomad cafes, rice field walks, beach sunsets.', tag: 'Trendy', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🎨', name: 'Ubud Art Market', desc: 'Woodcarvings, batik, silver jewellery, woven bags. Bargain firmly — start at 30% of first price.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Arrive Bali', activities: [{ time: 'Afternoon', text: 'Arrive Ngurah Rai airport, check into Canggu or Seminyak' }, { time: 'Evening', text: 'Sunset at Echo Beach or Tanah Lot temple' }] }, { theme: 'Ubud Culture Day', activities: [{ time: 'Morning', text: 'Sacred Monkey Forest, Ubud Palace, art market' }, { time: 'Afternoon', text: 'Rice terrace walk at Tegallalang' }, { time: 'Evening', text: 'Kecak fire dance at Uluwatu' }] }] },
  { name: 'Malaysia', flag: '🇲🇾', cities: 'Kuala Lumpur · Penang · Langkawi', currency: 'MYR', dailyCostUSD: 35, badge: 'great', insight: 'KL is one of the most affordable major cities in Asia with excellent infrastructure.', climate: '✅ Stable', newsQuery: 'Malaysia travel advisory flood safety 2025', food: [{ icon: '🍜', name: 'Char Kway Teow', desc: 'Flat rice noodles stir-fried with prawns, egg, bean sprouts and dark soy — Penang\'s signature dish.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥘', name: 'Nasi Lemak', desc: 'Coconut rice with sambal, anchovies, peanuts and egg — Malaysia\'s national breakfast. Under $1.50.', tag: 'National Dish', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Bukit Bintang, KL', desc: 'Central hotel hub from $20/night — walking distance to Petronas Towers, malls, night markets.', tag: 'Central', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🌆', name: 'Petaling Street, KL Chinatown', desc: 'Busy covered street market for clothing, accessories, souvenirs. Open late, very cheap.', tag: 'Market', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Kuala Lumpur', activities: [{ time: 'Morning', text: 'Petronas Twin Towers skybridge (book ahead), KLCC park' }, { time: 'Afternoon', text: 'Batu Caves by train — golden staircase, Hindu temple' }, { time: 'Evening', text: 'Jalan Alor night food street' }] }, { theme: 'Penang Food Trail', activities: [{ time: 'Morning', text: 'Ferry to Penang, George Town street art walk' }, { time: 'Afternoon', text: 'Penang Hill funicular, Kek Lok Si temple' }, { time: 'Evening', text: 'Gurney Drive hawker centre — ultimate Penang food experience' }] }] },
  { name: 'Sri Lanka', flag: '🇱🇰', cities: 'Colombo · Kandy · Ella', currency: 'LKR', dailyCostUSD: 28, badge: 'great', insight: 'Beautiful island with beaches, mountains and culture — great value post-recovery.', climate: '✅ Stable', newsQuery: 'Sri Lanka travel safety visa economy 2025', food: [{ icon: '🍛', name: 'Rice and Curry', desc: 'Multiple curries served with rice on a banana leaf — fish, dhal, coconut sambol. Sri Lankan spice is serious.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥞', name: 'Kottu Roti', desc: 'Chopped flatbread stir-fried with vegetables, egg and curry — the street food sound of Sri Lanka.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏡', name: 'Ella Guesthouses', desc: 'Mountain village with rooms from $10-15/night — tea estates, jungle hikes, the famous nine-arch bridge.', tag: 'Scenic', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🍵', name: 'Ceylon Tea Shops', desc: 'Buy direct from Nuwara Eliya or Ella tea estates — freshest tea at lowest prices. Great gifts.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Colombo Arrival', activities: [{ time: 'Morning', text: 'Gangaramaya Temple, Pettah market district' }, { time: 'Afternoon', text: 'Dutch Hospital shopping precinct, Galle Face promenade' }, { time: 'Evening', text: 'Kottu Roti dinner at a local spot' }] }, { theme: 'Kandy — Temple City', activities: [{ time: 'Morning', text: 'Train to Kandy (scenic 3hr ride), check in' }, { time: 'Afternoon', text: 'Temple of the Tooth Relic, Kandy Lake walk' }, { time: 'Evening', text: 'Kandyan cultural dance show' }] }] },
  { name: 'Japan', flag: '🇯🇵', cities: 'Tokyo · Osaka · Kyoto', currency: 'JPY', dailyCostUSD: 80, badge: 'good', insight: 'JPY is historically weak right now — making Japan more affordable than it has been in years.', climate: '✅ Stable', newsQuery: 'Japan earthquake typhoon visa overtourism 2025', food: [{ icon: '🍣', name: 'Conveyor Belt Sushi', desc: 'Budget sushi from ¥100/plate at Sushiro or Kura Sushi — quality shocks most visitors. Under $15 for a full meal.', tag: 'Budget Friendly', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍜', name: 'Ramen', desc: 'Regional styles vary — Sapporo (miso), Hakata (tonkotsu), Tokyo (shoyu). Under ¥1000 ($7).', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍱', name: 'Convenience Store Food', desc: '7-Eleven and Lawson in Japan are genuinely excellent — onigiri, sandwiches, hot food.', tag: 'Unique to Japan', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🛕', name: 'Tokyo Capsule Hotels', desc: 'Unique Japanese experience from $25/night — compact, clean, great locations. Book ahead always.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏯', name: 'Kyoto Guesthouses (Machiya)', desc: 'Renovated wooden townhouses from $40/night — tatami rooms, garden, authentic neighbourhood feel.', tag: 'Atmospheric', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🎮', name: 'Akihabara, Tokyo', desc: 'Electronics, anime, retro games, manga — multi-floor stores unlike anything outside Japan.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Tokyo Arrival', activities: [{ time: 'Morning', text: 'Senso-ji Temple in Asakusa — best before 8am' }, { time: 'Afternoon', text: 'Shibuya Crossing and Shibuya Sky observation deck' }, { time: 'Evening', text: 'Shinjuku Golden Gai — tiny bars, incredible atmosphere' }] }, { theme: 'Kyoto Temples', activities: [{ time: 'Morning', text: 'Fushimi Inari — 10,000 torii gates, go before 7am for no crowds' }, { time: 'Afternoon', text: 'Arashiyama bamboo grove, Tenryu-ji garden' }, { time: 'Evening', text: 'Gion district geisha spotting, Pontocho alley dinner' }] }, { theme: 'Osaka Food Day', activities: [{ time: 'Morning', text: 'Osaka Castle park' }, { time: 'Afternoon', text: 'Dotonbori street food crawl — takoyaki, okonomiyaki, kushikatsu' }, { time: 'Evening', text: 'Kuromon Market, Namba nightlife' }] }] },

  // MIDDLE EAST
  { name: 'Dubai', flag: '🇦🇪', cities: 'Dubai · Abu Dhabi · Sharjah', currency: 'AED', dailyCostUSD: 120, badge: 'good', insight: 'Premium destination but incredible value on luxury — world-class hotels at 40% less than European equivalents.', climate: '✅ Stable', newsQuery: 'Dubai UAE travel visa rules 2025', food: [{ icon: '🥙', name: 'Shawarma', desc: 'Best street food in Dubai — lamb or chicken wrap from Al Mallah or Ravi Restaurant. Under AED 10.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍲', name: 'Al Harees', desc: 'Slow-cooked wheat and meat — traditional Emirati dish served at heritage restaurants during Ramadan.', tag: 'Traditional', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🥐', name: 'Breakfast at a Souq Cafe', desc: 'Fresh juices, hummus, foul medames and bread at Gold Souq area cafes — locals eat here, not tourists.', tag: 'Local Secret', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏨', name: 'Deira Budget Hotels', desc: 'Clean hotels in old Dubai from $35/night — near Gold and Spice Souqs, metro access, very walkable.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏙', name: 'Downtown Dubai Apartments', desc: 'Short-term apartments near Burj Khalifa from $80/night — better value than hotels for longer stays.', tag: 'Mid Range', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🌊', name: 'JBR Beach Hotels', desc: 'Beach access hotels from $120/night — walkable beach strip, restaurants, nightlife all at your door.', tag: 'Beach', tagColor: '#2d1f4e', tagText: '#a78bfa' }], shopping: [{ icon: '🥇', name: 'Gold Souq, Deira', desc: 'Hundreds of gold jewellery shops — prices by weight are some of the lowest in the world. Haggle firmly.', tag: 'Famous', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🌶', name: 'Spice Souq', desc: 'Saffron, dried limes, frankincense, cardamom — buy in bulk for incredible prices vs home country.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🛒', name: 'Dubai Mall', desc: 'World\'s largest mall — 1,200+ stores, ice rink, aquarium, Burj Khalifa views.', tag: 'Mega Mall', tagColor: '#2d1f4e', tagText: '#a78bfa' }], itinerary: [{ theme: 'Old Dubai', activities: [{ time: 'Morning', text: 'Gold Souq and Spice Souq in Deira, abra (water taxi) across Dubai Creek' }, { time: 'Afternoon', text: 'Al Fahidi Historical Neighbourhood, Dubai Museum' }, { time: 'Evening', text: 'Shawarma dinner at Al Mallah, shisha at a creek-side cafe' }] }, { theme: 'Modern Dubai', activities: [{ time: 'Morning', text: 'Burj Khalifa At the Top observation deck (book ahead)' }, { time: 'Afternoon', text: 'Dubai Mall, Dubai Aquarium, walk The Dubai Fountain at sunset' }, { time: 'Evening', text: 'Dubai Fountain show (free), dinner at Souk Al Bahar' }] }, { theme: 'Desert + Beach', activities: [{ time: 'Morning', text: 'JBR beach morning swim, The Walk brunch' }, { time: 'Afternoon', text: 'Desert safari — dune bashing, camel ride, sandboarding ($50-80)' }, { time: 'Evening', text: 'Bedouin camp dinner under stars with belly dancing show' }] }, { theme: 'Abu Dhabi Day Trip', activities: [{ time: 'Morning', text: 'Sheikh Zayed Grand Mosque — one of the most beautiful buildings in the world (free entry, dress code)' }, { time: 'Afternoon', text: 'Louvre Abu Dhabi, Corniche waterfront walk' }, { time: 'Evening', text: 'Return to Dubai, dinner at Dubai Marina' }] }] },
  { name: 'Jordan', flag: '🇯🇴', cities: 'Petra · Amman · Wadi Rum', currency: 'JOD', dailyCostUSD: 60, badge: 'good', insight: 'Home to Petra — one of the seven wonders of the world. Safe, welcoming and surprisingly affordable.', climate: '✅ Stable', newsQuery: 'Jordan travel safety visa Petra 2025', food: [{ icon: '🍖', name: 'Mansaf', desc: 'Jordan\'s national dish — lamb slow-cooked in fermented dried yoghurt sauce served over rice.', tag: 'National Dish', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🫓', name: 'Falafel & Hummus', desc: 'Best breakfast in the Middle East — falafel with hummus, ful and fresh bread. Under $2 at local spots.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍬', name: 'Knafeh', desc: 'Hot cheese pastry soaked in sugar syrup with pistachios — Nablus-style from Habibah Sweets in Amman.', tag: 'Must Try', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏨', name: 'Downtown Amman Hostels', desc: 'Central hostels from $12/night near Rainbow Street, walking distance to Roman Theatre and Citadel.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏜', name: 'Petra Guesthouses', desc: 'Stay in Wadi Musa (Petra village) from $25/night — walk to the site entrance in 10 minutes.', tag: 'Convenient', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '⭐', name: 'Wadi Rum Bubble Tents', desc: 'Sleep under the stars in a transparent dome tent in the desert — unforgettable at $80-120/night.', tag: 'Unique', tagColor: '#2d1f4e', tagText: '#a78bfa' }], shopping: [{ icon: '🎨', name: 'Downtown Amman Souq', desc: 'Traditional crafts — embroidered textiles, Dead Sea products, Bedouin jewellery, olive wood carvings.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🧴', name: 'Dead Sea Products', desc: 'Genuine Dead Sea mud, salts and skincare at fraction of airport prices. Buy from local pharmacies.', tag: 'Take Home', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Arrive Amman', activities: [{ time: 'Morning', text: 'Arrive, check in, walk Rainbow Street and its cafes' }, { time: 'Afternoon', text: 'Amman Citadel and Roman Theatre — stunning city views' }, { time: 'Evening', text: 'Knafeh at Habibah Sweets, nargileh at a traditional coffeehouse' }] }, { theme: 'Petra — The Rose City', activities: [{ time: 'Morning', text: 'Drive to Petra (3hrs). Enter the Siq — 1.2km canyon leading to the Treasury' }, { time: 'Afternoon', text: 'Monastery hike (850 steps), High Place of Sacrifice trail' }, { time: 'Evening', text: 'Petra by Night candlelight show (Tue/Thu/Sat — book ahead)' }] }, { theme: 'Wadi Rum Desert', activities: [{ time: 'Morning', text: 'Jeep tour of Wadi Rum — red sand dunes, Lawrence of Arabia film locations' }, { time: 'Afternoon', text: 'Camel ride, sandboarding, Bedouin tea in a cave' }, { time: 'Evening', text: 'Overnight in bubble tent under the Milky Way' }] }, { theme: 'Dead Sea + Departure', activities: [{ time: 'Morning', text: 'Float in the Dead Sea — world\'s lowest point, impossible to sink' }, { time: 'Afternoon', text: 'Dead Sea mud bath, mineral spa' }, { time: 'Evening', text: 'Return to Amman for departure' }] }] },
  { name: 'Turkey', flag: '🇹🇷', cities: 'Istanbul · Cappadocia · Antalya', currency: 'TRY', dailyCostUSD: 50, badge: 'great', insight: 'Turkish Lira weakness means incredible value right now — luxury experiences at budget prices.', climate: '✅ Stable', newsQuery: 'Turkey Istanbul travel visa safety 2025', food: [{ icon: '🥙', name: 'Doner Kebab', desc: 'The original — slow-roasted meat shaved into bread with salad. Istanbul\'s street version beats everywhere else.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍳', name: 'Turkish Breakfast', desc: 'Enormous spread — olives, cheeses, tomatoes, eggs, simit, honey, clotted cream, tea. The best meal of the day.', tag: 'Experience', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍮', name: 'Baklava', desc: 'Flaky pastry with pistachio and honey syrup — Gaziantep baklava is the gold standard.', tag: 'Sweet', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🕌', name: 'Sultanahmet Guesthouses, Istanbul', desc: 'Historic old city rooms from $25/night — walk to Blue Mosque, Hagia Sophia, Grand Bazaar.', tag: 'Location', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🎈', name: 'Cave Hotels, Cappadocia', desc: 'Rooms carved into volcanic rock from $40/night — surreal experience, wake up to hot air balloons.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🏖', name: 'Antalya Beach Hotels', desc: 'All-inclusive resorts from $60/night on the Turquoise Coast — unbeatable value for Mediterranean beach holidays.', tag: 'Resort', tagColor: '#2d1f4e', tagText: '#a78bfa' }], shopping: [{ icon: '🏛', name: 'Grand Bazaar, Istanbul', desc: 'One of the world\'s oldest and largest covered markets — 4,000 shops, carpets, ceramics, spices, jewellery.', tag: 'Iconic', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🌿', name: 'Spice Bazaar', desc: 'Saffron, Turkish tea, lokum (Turkish delight), dried fruits — buy here not at tourist shops. Much cheaper.', tag: 'Bargain', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Istanbul Old City', activities: [{ time: 'Morning', text: 'Hagia Sophia and Blue Mosque (free) — go early before tour groups arrive' }, { time: 'Afternoon', text: 'Topkapi Palace and Harem, Basilica Cistern underground' }, { time: 'Evening', text: 'Grand Bazaar browsing, Karaköy rooftop dinner with Bosphorus views' }] }, { theme: 'Istanbul Modern', activities: [{ time: 'Morning', text: 'Bosphorus cruise (local ferry not tourist boat — much cheaper)' }, { time: 'Afternoon', text: 'Galata Tower, Istiklal Avenue, Taksim Square' }, { time: 'Evening', text: 'Karaköy bar scene, meyhane dinner with raki' }] }, { theme: 'Cappadocia Arrival', activities: [{ time: 'Morning', text: 'Flight or overnight bus to Cappadocia (Göreme)' }, { time: 'Afternoon', text: 'Göreme Open Air Museum — ancient cave churches with Byzantine frescoes' }, { time: 'Evening', text: 'Sunset at Uçhisar Castle or Rose Valley viewpoint' }] }, { theme: 'Hot Air Balloon Day', activities: [{ time: '5:00am', text: 'Hot air balloon flight over fairy chimneys at sunrise ($150-180) — worth every penny' }, { time: 'Morning', text: 'Underground city of Derinkuyu or Kaymaklı' }, { time: 'Afternoon', text: 'ATV or horseback ride through Love Valley' }] }] },
  { name: 'Bahrain', flag: '🇧🇭', cities: 'Manama · Muharraq · Al Khobar', currency: 'BHD', dailyCostUSD: 80, badge: 'good', insight: 'The most relaxed and liberal country in the Gulf — great food scene, no alcohol ban, easy visa.', climate: '✅ Stable', newsQuery: 'Bahrain travel visa safety 2025', food: [{ icon: '🦐', name: 'Machboos', desc: 'Spiced rice with meat or seafood — Bahrain\'s national dish. Try it with fresh shrimp from the fish market.', tag: 'National Dish', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥐', name: 'Muharraq Street Food', desc: 'Historic island with legendary street food — shawarma, balaleet (sweet vermicelli), halwa and coffee.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏨', name: 'Manama City Hotels', desc: 'Business hotels from $50/night in the city centre — good value compared to Dubai for similar quality.', tag: 'Value', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🪬', name: 'Bab Al Bahrain Souq', desc: 'Historic souq in Manama — gold, pearls, spices, textiles. Bahrain is famous for its natural pearl diving heritage.', tag: 'Pearls', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Manama + History', activities: [{ time: 'Morning', text: 'Bahrain National Museum — best Gulf history museum, free entry' }, { time: 'Afternoon', text: 'Qal\'at al-Bahrain (Bahrain Fort) — UNESCO World Heritage site, 4,000 years old' }, { time: 'Evening', text: 'Adliya neighbourhood — Bahrain\'s creative district with restaurants and galleries' }] }, { theme: 'Muharraq + Culture', activities: [{ time: 'Morning', text: 'Muharraq Island — pearling path UNESCO trail, traditional merchant houses' }, { time: 'Afternoon', text: 'Shaikh Isa bin Ali House, Al-Oraifi Museum' }, { time: 'Evening', text: 'Seafood dinner at the Fish Market restaurants' }] }] },
  { name: 'Qatar', flag: '🇶🇦', cities: 'Doha · Lusail · Al Wakrah', currency: 'QAR', dailyCostUSD: 100, badge: 'good', insight: 'Ultra-modern Gulf city with world-class museums, free entry attractions, and incredible food diversity.', climate: '✅ Stable', newsQuery: 'Qatar Doha travel visa safety 2025', food: [{ icon: '🍖', name: 'Ouzi', desc: 'Slow-roasted lamb on spiced rice — Qatar\'s celebratory dish. Best at Al Aker restaurant in Doha.', tag: 'Traditional', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🫖', name: 'Karak Chai', desc: 'Spiced milk tea — the social glue of Qatar. Tiny takeaway cups from Indian chai shops, under QAR 2.', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Doha City Centre Hotels', desc: 'Business hotels from $70/night — near Souq Waqif, MIA and the Corniche. Good metro connections.', tag: 'Central', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🏺', name: 'Souq Waqif, Doha', desc: 'Restored traditional market — spices, falconry equipment, Arab perfumes, handicrafts. Most atmospheric at night.', tag: 'Iconic', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Doha Highlights', activities: [{ time: 'Morning', text: 'Museum of Islamic Art — world\'s finest Islamic art collection, stunning I.M. Pei building (free)' }, { time: 'Afternoon', text: 'National Museum of Qatar — the rose-shaped building is itself an attraction' }, { time: 'Evening', text: 'Souq Waqif for dinner and shisha, Corniche waterfront walk' }] }, { theme: 'Modern Qatar', activities: [{ time: 'Morning', text: 'The Pearl — artificial island with luxury marina, Monaco-like atmosphere' }, { time: 'Afternoon', text: 'Katara Cultural Village — amphitheatre, galleries, beach' }, { time: 'Evening', text: 'Lusail skyline view, 3-2-1 Qatar Olympic and Sports Museum' }] }] },
  { name: 'Lebanon', flag: '🇱🇧', cities: 'Beirut · Byblos · Baalbek', currency: 'LBP', dailyCostUSD: 45, badge: 'good', insight: 'Recovering but incredibly resilient — Beirut\'s food scene and nightlife rival Paris, at a fraction of the price.', climate: '⚠️ Check advisories', newsQuery: 'Lebanon Beirut travel safety political 2025', food: [{ icon: '🥗', name: 'Mezze', desc: 'Lebanese mezze is the greatest sharing food culture in the world — hummus, fattoush, kibbeh, tabbouleh, labneh, mutabal.', tag: 'Must Experience', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥙', name: 'Man\'ousheh', desc: 'Lebanese flatbread with zaatar and olive oil — the greatest breakfast anywhere. Under $1 from bakeries.', tag: 'Breakfast', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍬', name: 'Lebanese Sweets', desc: 'Baklava, maamoul (date cookies), znoud el sit — Beirut\'s sweet shops like Patisserie Suisse are legendary.', tag: 'Sweet', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏙', name: 'Hamra / Mar Mikhael, Beirut', desc: 'Boutique guesthouses and Airbnbs from $30-50/night in Beirut\'s most vibrant neighbourhoods.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🏺', name: 'Gemmayzeh Street, Beirut', desc: 'Vintage shops, Lebanese designer boutiques, antique dealers — the coolest street in the Middle East.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Beirut', activities: [{ time: 'Morning', text: 'National Museum of Beirut, Pigeon Rocks at Raouche' }, { time: 'Afternoon', text: 'Sursock Museum, Gemmayzeh vintage street' }, { time: 'Evening', text: 'Mar Mikhael bar street — one of the best nightlife areas in the Middle East' }] }, { theme: 'Byblos + Baalbek', activities: [{ time: 'Morning', text: 'Byblos — one of the oldest cities in the world, Phoenician ruins, crusader castle, harbour' }, { time: 'Afternoon', text: 'Baalbek Roman temples — among the best preserved Roman ruins outside Italy' }, { time: 'Evening', text: 'Return to Beirut, mezze dinner in Gemmayze' }] }] },

  // AFRICA
  { name: 'Morocco', flag: '🇲🇦', cities: 'Marrakech · Fez · Chefchaouen', currency: 'MAD', dailyCostUSD: 40, badge: 'great', insight: 'One of the most visually spectacular countries in the world — ancient medinas, Sahara desert and Atlantic coast.', climate: '✅ Stable', newsQuery: 'Morocco travel visa safety Marrakech 2025', food: [{ icon: '🥘', name: 'Tagine', desc: 'Slow-cooked stew with meat, preserved lemon and olives in a conical clay pot. Every region has its own version.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍲', name: 'Harira Soup', desc: 'Thick tomato and lentil soup with herbs — Morocco\'s answer to comfort food.', tag: 'Traditional', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🥐', name: 'Msemen with Honey', desc: 'Flaky square flatbread fried and served with argan oil honey and butter — the definitive Moroccan breakfast.', tag: 'Breakfast', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏰', name: 'Riads in the Medina', desc: 'Traditional townhouses with inner courtyard from $25-60/night — some of the most beautiful accommodation in the world.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏔', name: 'Atlas Mountain Guesthouses', desc: 'Berber guesthouses in Imlil village from $15/night — base for Toubkal summit and valley walks.', tag: 'Adventure', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🧶', name: 'Fez Medina Souqs', desc: 'World\'s largest car-free urban area — leather, ceramics, textiles, metalwork, spices. Get lost on purpose.', tag: 'Unmissable', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🫙', name: 'Argan Oil', desc: 'Buy from women\'s cooperatives directly — genuine argan oil for cooking and cosmetics at source prices.', tag: 'Take Home', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Marrakech Medina', activities: [{ time: 'Morning', text: 'Djemaa el-Fna square — snake charmers, musicians, juice stalls' }, { time: 'Afternoon', text: 'Bahia Palace, Saadian Tombs, Mellah Jewish quarter' }, { time: 'Evening', text: 'Djemaa el-Fna transforms at night — food stalls, storytellers, musicians. Eat here.' }] }, { theme: 'Gardens + Souqs', activities: [{ time: 'Morning', text: 'Majorelle Garden (Yves Saint Laurent) — electric blue villa and cactus garden' }, { time: 'Afternoon', text: 'Marrakech souqs — navigate the labyrinth: spices, lamps, babouche slippers' }, { time: 'Evening', text: 'Rooftop dinner with medina views, mint tea ceremony' }] }, { theme: 'Fez — UNESCO Medina', activities: [{ time: 'Morning', text: 'Bus or train to Fez (4hrs). Bou Inania Medersa, Al Qarawiyyin — world\'s oldest university' }, { time: 'Afternoon', text: 'Chouara Tanneries — iconic leather dyeing pits' }, { time: 'Evening', text: 'Dinner in the medina, stay in a riad' }] }, { theme: 'Sahara Desert', activities: [{ time: 'Morning', text: 'Drive or bus to Merzouga (8hrs) or fly to Errachidia' }, { time: 'Afternoon', text: 'Camel trek into the Sahara dunes at sunset' }, { time: 'Evening', text: 'Overnight in Berber desert camp — drums, fire, stars' }] }] },
  { name: 'Egypt', flag: '🇪🇬', cities: 'Cairo · Luxor · Aswan', currency: 'EGP', dailyCostUSD: 35, badge: 'great', insight: 'Pound devaluation makes Egypt extremely affordable right now — world\'s greatest ancient sites at budget prices.', climate: '✅ Stable', newsQuery: 'Egypt travel visa safety Cairo 2025', food: [{ icon: '🫘', name: 'Koshari', desc: 'Rice, lentils, pasta and crispy onions in spiced tomato sauce — Egypt\'s ultimate street food, under $1 a bowl.', tag: 'Street Food', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥙', name: 'Ful Medames', desc: 'Slow-cooked fava beans with olive oil, garlic and lemon — the Egyptian breakfast that\'s fuelled civilisations.', tag: 'Traditional', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🥐', name: 'Feteer Meshaltet', desc: 'Flaky layered pastry filled with sweet or savoury fillings — best from street ovens in Khan el-Khalili area.', tag: 'Must Try', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏨', name: 'Downtown Cairo Hotels', desc: 'Clean hotels from $20/night near Tahrir Square, Egyptian Museum and metro. Very central.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '⛵', name: 'Nile Felucca Overnight', desc: 'Sleep on a traditional felucca sailboat between Aswan and Luxor — magical experience from $15/night.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🏺', name: 'Khan el-Khalili Bazaar, Cairo', desc: 'Cairo\'s 600-year-old bazaar — papyrus, alabaster, spices, perfume, gold. Bargain everything by 60%.', tag: 'Iconic', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Cairo — Ancient Wonders', activities: [{ time: 'Morning', text: 'Giza Pyramids and Sphinx at sunrise — arrive before tour buses at 6am' }, { time: 'Afternoon', text: 'Egyptian Museum — Tutankhamun treasures, royal mummies' }, { time: 'Evening', text: 'Khan el-Khalili bazaar, dinner at Naguib Mahfouz Cafe' }] }, { theme: 'Luxor — Valley of Kings', activities: [{ time: 'Morning', text: 'Valley of the Kings — tombs of Ramesses II, Tutankhamun (book ahead), Seti I' }, { time: 'Afternoon', text: 'Karnak Temple — largest ancient religious complex in the world' }, { time: 'Evening', text: 'Sound and light show at Karnak' }] }, { theme: 'Aswan + Abu Simbel', activities: [{ time: 'Morning', text: 'Abu Simbel temples — 3hr drive or 45min flight' }, { time: 'Afternoon', text: 'Philae Temple on Nile island, Aswan High Dam' }, { time: 'Evening', text: 'Sunset felucca on the Nile, Nubian village dinner' }] }] },
  { name: 'Kenya', flag: '🇰🇪', cities: 'Nairobi · Maasai Mara · Mombasa', currency: 'KES', dailyCostUSD: 65, badge: 'good', insight: 'Home to the greatest wildlife spectacle on earth — the Great Migration. Nairobi is Africa\'s most vibrant city.', climate: '✅ Stable', newsQuery: 'Kenya travel safari safety visa 2025', food: [{ icon: '🥩', name: 'Nyama Choma', desc: 'Slow-roasted goat or beef — Kenya\'s national social food. Best at Carnivore Restaurant in Nairobi.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍲', name: 'Ugali with Sukuma Wiki', desc: 'Cornmeal porridge with stir-fried collard greens and beef stew — the everyday Kenyan meal, filling and cheap.', tag: 'Local Staple', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Nairobi Westlands Hotels', desc: 'Safe, modern hotels from $40/night in Nairobi\'s expat hub — near restaurants, malls, nightlife.', tag: 'City Base', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🦁', name: 'Maasai Mara Tented Camps', desc: 'Luxury tented camps from $150/night full board — wake up to lions, elephants and giraffes at your doorstep.', tag: 'Safari', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🎨', name: 'Maasai Market, Nairobi', desc: 'Rotating weekly market with Maasai beadwork, soapstone carvings, wooden masks, textiles. Bargain hard.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Nairobi', activities: [{ time: 'Morning', text: 'Nairobi National Park — giraffes with city skyline backdrop, unique to the world' }, { time: 'Afternoon', text: 'David Sheldrick Elephant Orphanage, Giraffe Centre' }, { time: 'Evening', text: 'Westlands restaurant scene, Alchemist bar' }] }, { theme: 'Maasai Mara Safari', activities: [{ time: 'Morning', text: 'Fly or drive to Maasai Mara (5hrs). Check into camp, afternoon game drive' }, { time: 'Afternoon', text: 'Big Five game drive — lions, elephants, leopards, rhinos, buffalo' }, { time: 'Evening', text: 'Sundowner on the savanna, bush dinner under stars' }] }, { theme: 'Great Migration (Jul-Oct)', activities: [{ time: 'Morning', text: 'Mara River crossing — wildebeest vs crocodiles. One of nature\'s greatest spectacles' }, { time: 'Afternoon', text: 'Hot air balloon over the Mara (from $450 — worth it)' }, { time: 'Evening', text: 'Maasai village cultural visit, traditional dance' }] }] },
  { name: 'Tanzania', flag: '🇹🇿', cities: 'Zanzibar · Serengeti · Kilimanjaro', currency: 'TZS', dailyCostUSD: 70, badge: 'good', insight: 'Zanzibar beaches rival the Maldives at a fraction of the cost, plus world-class safari and Kilimanjaro trekking.', climate: '✅ Stable', newsQuery: 'Tanzania Zanzibar travel safety visa 2025', food: [{ icon: '🍢', name: 'Zanzibar Pizza', desc: 'Street food unique to Stone Town — thin crepe filled with egg, meat and vegetables, folded and fried. Under $2.', tag: 'Street Food', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥥', name: 'Urojo (Zanzibar Mix)', desc: 'Coconut curry soup with bhajias, potato, mango and lime — the definitive Zanzibar street food bowl.', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏖', name: 'Nungwi / Kendwa Beach, Zanzibar', desc: 'Beachfront guesthouses from $25/night — white sand, turquoise water, full-moon beach parties.', tag: 'Beach', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🦁', name: 'Serengeti Tented Camps', desc: 'Mobile camps following the Great Migration from $200/night full board — remote and unforgettable.', tag: 'Safari', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🏺', name: 'Stone Town Zanzibar', desc: 'Antique Zanzibari doors, Tingatinga paintings, spices, Maasai crafts — UNESCO World Heritage old town.', tag: 'Historic', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Zanzibar Stone Town', activities: [{ time: 'Morning', text: 'Stone Town walking tour — House of Wonders, Palace Museum, narrow alleyways' }, { time: 'Afternoon', text: 'Spice tour — cloves, vanilla, cinnamon, black pepper growing on the island' }, { time: 'Evening', text: 'Forodhani Night Market — Zanzibar pizza, fresh seafood, sugar cane juice' }] }, { theme: 'Zanzibar Beaches', activities: [{ time: 'Morning', text: 'Nungwi beach — swim, snorkel, dhow boat trip to sandbank' }, { time: 'Afternoon', text: 'Prison Island — giant tortoises, coral reef snorkelling' }, { time: 'Evening', text: 'Full moon beach party at Kendwa Rocks (check dates)' }] }] },
  { name: 'South Africa', flag: '🇿🇦', cities: 'Cape Town · Johannesburg · Kruger', currency: 'ZAR', dailyCostUSD: 55, badge: 'great', insight: 'ZAR weakness makes South Africa extraordinary value — world-class wine, food, safari and scenery.', climate: '✅ Stable', newsQuery: 'South Africa travel safety crime visa 2025', food: [{ icon: '🥩', name: 'Braai', desc: 'South African barbecue — more than a meal, it\'s a way of life. Boerewors sausage, lamb chops, pap and chakalaka.', tag: 'Cultural Must', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥟', name: 'Bunny Chow', desc: 'Hollowed-out loaf of bread filled with curry — Durban\'s iconic dish brought by Indian workers in the 1940s.', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍷', name: 'Cape Winelands', desc: 'Stellenbosch and Franschhoek produce world-class wines you can taste at cellar door for under $5.', tag: 'Wine', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏔', name: 'Cape Town Guesthouses', desc: 'Guesthouses in Gardens or De Waterkant from $35/night — safe neighbourhoods, walkable, great restaurants.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🦁', name: 'Kruger Safari Camps', desc: 'SANParks rest camps from $30/night — self-drive safari in world\'s most famous game reserve.', tag: 'Safari', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🎨', name: 'Neighbourgoods Market, Cape Town', desc: 'Saturday market in Woodstock — local food, crafts, vintage, art. Best market in Africa.', tag: 'Cool', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Cape Town Arrival', activities: [{ time: 'Morning', text: 'Table Mountain cable car — 360° views of Cape Town, ocean and Cape Peninsula' }, { time: 'Afternoon', text: 'V&A Waterfront, Robben Island ferry (where Mandela was imprisoned)' }, { time: 'Evening', text: 'Long Street bar scene, braai at a local restaurant' }] }, { theme: 'Cape Peninsula', activities: [{ time: 'Morning', text: 'Chapman\'s Peak drive — one of the world\'s most scenic coastal roads' }, { time: 'Afternoon', text: 'Boulders Beach penguin colony, Cape of Good Hope' }, { time: 'Evening', text: 'Hout Bay harbour, fish and chips dinner' }] }, { theme: 'Winelands Day Trip', activities: [{ time: 'Morning', text: 'Stellenbosch — Cape Dutch architecture, cellar door wine tastings from $5' }, { time: 'Afternoon', text: 'Franschhoek — French Huguenot heritage, Michelin-quality restaurants at half European price' }, { time: 'Evening', text: 'Return to Cape Town, sunset over Signal Hill' }] }] },
  { name: 'Zambia', flag: '🇿🇲', cities: 'Livingstone · Lusaka · South Luangwa', currency: 'ZMW', dailyCostUSD: 60, badge: 'good', insight: 'Home to Victoria Falls — the world\'s largest waterfall. Pristine safari with fewer crowds than Kenya.', climate: '✅ Stable', newsQuery: 'Zambia travel safety visa Victoria Falls 2025', food: [{ icon: '🍲', name: 'Nshima with Relish', desc: 'Thick maize porridge with fish, meat or vegetable relish — the staple meal across Zambia. Eaten with hands.', tag: 'Local Staple', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🐟', name: 'Bream from the Zambezi', desc: 'Fresh tilapia grilled over charcoal at riverside restaurants in Livingstone — incredibly fresh and cheap.', tag: 'Fresh', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🌊', name: 'Livingstone Guesthouses', desc: 'Guesthouses near Victoria Falls from $30/night — walk to the falls and activities booking offices.', tag: 'Base', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🎨', name: 'Mukuni Village Crafts', desc: 'Authentic Toka Leya village near Livingstone — baskets, wooden carvings, beadwork at fair prices.', tag: 'Authentic', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Victoria Falls', activities: [{ time: 'Morning', text: 'Victoria Falls National Park — walk the rainforest trail, get drenched by spray. Best at high water (Feb-May)' }, { time: 'Afternoon', text: 'Devil\'s Pool on the edge of the falls (seasonal), Livingstone Island picnic' }, { time: 'Evening', text: 'Sunset cruise on the Zambezi — hippos and crocodiles while sipping sundowners' }] }, { theme: 'Adventure Activities', activities: [{ time: 'Morning', text: 'Bungee jump off Victoria Falls Bridge (111m) or white water rafting Grade 5 rapids' }, { time: 'Afternoon', text: 'Microlight flight over the falls — unforgettable aerial perspective' }, { time: 'Evening', text: 'Bush dinner at a lodge on the Zambezi banks' }] }] },
  { name: 'Zimbabwe', flag: '🇿🇼', cities: 'Victoria Falls · Harare · Hwange', currency: 'USD', dailyCostUSD: 55, badge: 'good', insight: 'Victoria Falls from the Zimbabwe side gives the best views. Hwange National Park rivals Botswana at lower cost.', climate: '✅ Stable', newsQuery: 'Zimbabwe travel safety visa 2025', food: [{ icon: '🍲', name: 'Sadza ne Nyama', desc: 'Thick cornmeal with slow-cooked beef stew — Zimbabwe\'s national dish. Filling, cheap and everywhere.', tag: 'Local Staple', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥩', name: 'Braai at the Falls', desc: 'Open fire barbecue overlooking the Zambezi gorge — Victoria Falls has some spectacular dinner settings.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🌊', name: 'Victoria Falls Town Hotels', desc: 'Hotels from $40/night in Vic Falls town — very close to the park entrance, busy tourist area.', tag: 'Convenient', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🗿', name: 'Zimbabwe Stone Sculptures', desc: 'Shona stone sculpture is Zimbabwe\'s greatest art form — serpentine and verdite stone works of exceptional quality.', tag: 'Art', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Victoria Falls Zimbabwe Side', activities: [{ time: 'Morning', text: 'Victoria Falls — Zimbabwe side has the best full-width view of the main falls' }, { time: 'Afternoon', text: 'Helicopter flight "Flight of Angels" over the falls ($150) — iconic experience' }, { time: 'Evening', text: 'Lookout Cafe for dinner with gorge views, sunset over Zambia' }] }, { theme: 'Hwange Safari', activities: [{ time: 'Morning', text: 'Drive to Hwange National Park (2hrs) — Zimbabwe\'s largest park, over 40,000 elephants' }, { time: 'Afternoon', text: 'Game drive — largest elephant herds in Africa, plus lions, leopards, painted dogs' }, { time: 'Evening', text: 'Night game drive — owls, genets, civets, night predators' }] }] },

  // AMERICAS
  { name: 'Colombia', flag: '🇨🇴', cities: 'Medellín · Cartagena · Bogotá', currency: 'COP', dailyCostUSD: 40, badge: 'great', insight: 'One of the greatest travel transformations of the decade — Colombia is now safe, vibrant and incredible value.', climate: '✅ Stable', newsQuery: 'Colombia travel safety visa Medellin 2025', food: [{ icon: '🫘', name: 'Bandeja Paisa', desc: 'The ultimate Colombian plate — red beans, rice, ground beef, chicharron, egg, plantain, avocado and arepa. Under $5.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥟', name: 'Empanadas', desc: 'Fried pastry pockets with meat and potato — $0.30 each from street vendors. Most addictive snack in South America.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '☕', name: 'Colombian Coffee', desc: 'World\'s finest coffee drunk in its home country — tinto (small black) at a tienda is the authentic experience.', tag: 'Experience', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏙', name: 'El Poblado, Medellín', desc: 'Safest neighbourhood in Medellín — hostels from $10/night, great restaurant scene, cool bars, safe to walk at night.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏖', name: 'Getsemaní, Cartagena', desc: 'Colourful barrio with street art, hostels from $12/night — more authentic than the walled city, great nightlife.', tag: 'Vibrant', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '💎', name: 'Emeralds in Bogotá', desc: 'Colombia produces 70% of the world\'s emeralds — buy certified stones from reputable dealers in La Candelaria.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🎨', name: 'Handicrafts Market, Cartagena', desc: 'Hammocks, mochilas (woven bags), hats and ceramics — Las Bóvedas in the walled city has the best selection.', tag: 'Crafts', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Medellín Transformation', activities: [{ time: 'Morning', text: 'Pablo Escobar tour (controversial but informative) or Museo de Antioquia (Botero sculptures)' }, { time: 'Afternoon', text: 'Metrocable to hillside communes — see how Medellín reinvented itself through urban design' }, { time: 'Evening', text: 'Parque Lleras bar scene in El Poblado, salsa dancing' }] }, { theme: 'Coffee Region', activities: [{ time: 'Full Day', text: 'Day trip to Guatapé — El Peñol rock (740 steps, panoramic view), colourful zocalos on buildings' }, { time: 'Morning', text: 'Coffee farm tour in the Zona Cafetera — pick beans, process, roast and taste' }, { time: 'Evening', text: 'Return to Medellín' }] }, { theme: 'Cartagena Walled City', activities: [{ time: 'Morning', text: 'Walk the colonial walls of Cartagena — sunset here is the most romantic thing in Colombia' }, { time: 'Afternoon', text: 'Castillo San Felipe fortress, Convento de la Popa hilltop views' }, { time: 'Evening', text: 'Getsemaní street food and nightlife — the real Cartagena' }] }, { theme: 'Islands', activities: [{ time: 'Full Day', text: 'Boat to Islas del Rosario or Playa Blanca — Caribbean beaches a short boat ride from Cartagena' }, { time: 'Afternoon', text: 'Snorkelling on coral reefs, fresh lobster lunch on the beach' }, { time: 'Evening', text: 'Return to Cartagena for sunset cocktails on the walls' }] }] },
  { name: 'Peru', flag: '🇵🇪', cities: 'Cusco · Lima · Machu Picchu', currency: 'PEN', dailyCostUSD: 45, badge: 'great', insight: 'Home to Machu Picchu, the Inca Trail and the world\'s best food city (Lima). An unmissable destination.', climate: '✅ Stable', newsQuery: 'Peru travel safety visa Machu Picchu 2025', food: [{ icon: '🐟', name: 'Ceviche', desc: 'Raw fish cured in lime juice with chilli, red onion and corn — Lima\'s greatest gift to the world. Best at La Mar.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥔', name: 'Causa Limeña', desc: 'Cold layered potato terrine with tuna or chicken filling and avocado — Peru has 3,000 varieties of potato.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍹', name: 'Pisco Sour', desc: 'Pisco grape brandy with lime, egg white and bitters — Peru\'s national cocktail. Try it at a bar in Miraflores.', tag: 'Drink', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏙', name: 'Miraflores, Lima', desc: 'Safe clifftop neighbourhood from $25/night — ocean views, great restaurants, shopping, easy taxis.', tag: 'Lima Base', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏔', name: 'Cusco Hostels', desc: 'Hostels from $10/night in the Inca capital — acclimatise here 2 days before Machu Picchu or Inca Trail.', tag: 'Altitude Base', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🦙', name: 'Alpaca Wool, Cusco', desc: 'Genuine alpaca sweaters, scarves and blankets from San Pedro Market — softest fabric in the world.', tag: 'Take Home', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🎨', name: 'Pisac Market', desc: 'Best artisan market in the Sacred Valley — textiles, ceramics, silver jewellery every Sunday.', tag: 'Market', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Lima Food City', activities: [{ time: 'Morning', text: 'Larco Museum — pre-Columbian gold and erotic pottery collection, beautiful colonial grounds' }, { time: 'Afternoon', text: 'Miraflores clifftop walk, Larcomar mall with Pacific Ocean views' }, { time: 'Evening', text: 'Ceviche at La Mar for lunch (they close at dinner), Pisco Sour tasting at night' }] }, { theme: 'Cusco — Inca Capital', activities: [{ time: 'Morning', text: 'Acclimatise (3,400m altitude) — walk Plaza de Armas, Cathedral, Qorikancha Inca temple' }, { time: 'Afternoon', text: 'Sacsayhuamán fortress ruins above the city' }, { time: 'Evening', text: 'Coca tea for altitude, San Pedro Market for dinner' }] }, { theme: 'Sacred Valley', activities: [{ time: 'Morning', text: 'Pisac ruins and Sunday market — terraced hillside with Inca masonry and vibrant craft market' }, { time: 'Afternoon', text: 'Ollantaytambo fortress — best preserved Inca site, train station for Machu Picchu' }, { time: 'Evening', text: 'Stay in Aguas Calientes (base for Machu Picchu)' }] }, { theme: 'Machu Picchu', activities: [{ time: '5:00am', text: 'Bus up to Machu Picchu at opening — arrive before mist clears for the iconic cloud shot' }, { time: 'Morning', text: 'Guided tour of the citadel, Sun Gate hike for aerial view (2hrs round trip)' }, { time: 'Afternoon', text: 'Return to Aguas Calientes, thermal baths to recover, train back to Cusco' }] }] },
  { name: 'Argentina', flag: '🇦🇷', cities: 'Buenos Aires · Patagonia · Mendoza', currency: 'ARS', dailyCostUSD: 50, badge: 'great', insight: 'Ongoing peso devaluation makes Argentina one of the best value destinations in the world for foreign visitors.', climate: '✅ Stable', newsQuery: 'Argentina travel safety visa Buenos Aires 2025', food: [{ icon: '🥩', name: 'Asado', desc: 'Argentine barbecue — whole ribs, chorizo, morcilla and sweetbreads slow-cooked over wood fire. A social ritual.', tag: 'Must Experience', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥟', name: 'Empanadas', desc: 'Baked or fried pastry pockets — beef, chicken, ham and cheese, spinach. Every region has its own style.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍦', name: 'Dulce de Leche Ice Cream', desc: 'Argentine helado is the world\'s best ice cream — dulce de leche flavour is liquid gold. Everywhere, very cheap.', tag: 'Dessert', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏙', name: 'Palermo / San Telmo, Buenos Aires', desc: 'Boutique hostels and hotels from $20/night — BA\'s coolest neighbourhoods with great food and tango bars.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏔', name: 'El Chaltén, Patagonia', desc: 'Trekking capital of Argentina — guesthouses from $25/night, all national park trails are completely free.', tag: 'Adventure', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🐄', name: 'Leather Goods, Buenos Aires', desc: 'Argentine leather is world-class — belts, jackets, bags at San Telmo market and Murillo Street workshops.', tag: 'Quality', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍷', name: 'Mendoza Wine', desc: 'Buy Malbec directly from bodegas in Mendoza — world-class wine at $5-8 a bottle from the cellar door.', tag: 'Wine', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Buenos Aires', activities: [{ time: 'Morning', text: 'La Boca neighbourhood — colourful Caminito street, Boca Juniors stadium tour' }, { time: 'Afternoon', text: 'San Telmo antiques market (Sundays), Plaza de Mayo, Casa Rosada' }, { time: 'Evening', text: 'Tango show in Palermo (authentic milonga, not tourist show), late dinner at 10pm like a local' }] }, { theme: 'Buenos Aires Food + Culture', activities: [{ time: 'Morning', text: 'MALBA (Latin American art museum), Recoleta Cemetery — Eva Perón\'s tomb, incredible architecture' }, { time: 'Afternoon', text: 'Palermo Soho boutiques, craft beer bars' }, { time: 'Evening', text: 'Asado dinner at a parrilla — order the tira de asado and provoleta' }] }, { theme: 'Mendoza Wine Country', activities: [{ time: 'Morning', text: 'Fly or bus to Mendoza (14hrs). Cycle between wineries — most are bike-accessible' }, { time: 'Afternoon', text: 'Zuccardi Valle de Uco or Achaval Ferrer cellar door tasting' }, { time: 'Evening', text: 'Asado at winery restaurant with Andes backdrop' }] }, { theme: 'Patagonia — El Chaltén', activities: [{ time: 'Morning', text: 'Trek to Laguna de los Tres — Fitz Roy mountain reflection. One of the great day hikes on earth (8hrs round trip)' }, { time: 'Afternoon', text: 'Laguna Torre — Cerro Torre spire with hanging glacier' }, { time: 'Evening', text: 'Cervecería local craft beer, meat pie dinner in the village' }] }] },
  { name: 'Mexico', flag: '🇲🇽', cities: 'Mexico City · Oaxaca · Tulum', currency: 'MXN', dailyCostUSD: 45, badge: 'good', insight: 'Incredible food and culture — your money stretches very well outside tourist hotspots.', climate: '⚠️ Check advisories', newsQuery: 'Mexico travel warning cartel safety advisory 2025', food: [{ icon: '🌮', name: 'Tacos al Pastor', desc: 'Spit-roasted pork with pineapple on corn tortilla — Mexico City\'s greatest contribution to humanity.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🫔', name: 'Tlayuda (Oaxaca)', desc: 'Giant crispy tortilla with black beans, cheese, and tasajo meat — Oaxaca\'s iconic street food.', tag: 'Regional', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Roma/Condesa, Mexico City', desc: 'Trendy neighbourhoods with boutique hotels from $35/night — tree-lined streets, great restaurants, safe.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🎨', name: 'Mercado de Artesanias, Oaxaca', desc: 'Black clay pottery, woven textiles, mezcal, chocolate — Oaxaca has the best crafts in Mexico.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Mexico City', activities: [{ time: 'Morning', text: 'Zocalo main square, Metropolitan Cathedral, Templo Mayor ruins' }, { time: 'Afternoon', text: 'Frida Kahlo Museum in Coyoacan (book ahead)' }, { time: 'Evening', text: 'Tacos al Pastor at El Huequito, oldest taqueria in CDMX' }] }, { theme: 'Teotihuacan', activities: [{ time: 'Morning', text: 'Teotihuacan pyramids day trip — climb Pyramid of the Sun for views' }, { time: 'Afternoon', text: 'National Museum of Anthropology (world class, free)' }, { time: 'Evening', text: 'Roma neighbourhood bar hop, mezcal tasting' }] }] },

  // EUROPE
  { name: 'Portugal', flag: '🇵🇹', cities: 'Lisbon · Porto · Algarve', currency: 'EUR', dailyCostUSD: 70, badge: 'good', insight: 'Cheapest country in Western Europe — great food, weather and safety for the price.', climate: '✅ Stable', newsQuery: 'Portugal wildfire protest visa Schengen 2025', food: [{ icon: '🐟', name: 'Bacalhau (Salt Cod)', desc: 'Portugal has 365 recipes for salt cod. Bacalhau a Bras with eggs and fries is the classic.', tag: 'National Dish', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥐', name: 'Pastel de Nata', desc: 'Custard tart with flaky pastry and cinnamon — best from Pasteis de Belem in Lisbon. Under €1.50.', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏛', name: 'Alfama Guesthouses, Lisbon', desc: 'Historic Moorish quarter with private rooms from €35/night — tiled facades, fado music at night.', tag: 'Atmospheric', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🪆', name: 'LX Factory, Lisbon', desc: 'Repurposed industrial space with indie shops, bookstores, vintage, Sunday market and rooftop bar.', tag: 'Trendy', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Lisbon Old City', activities: [{ time: 'Morning', text: 'Belem Tower and Jeronimos Monastery, pastel de nata at Pasteis de Belem' }, { time: 'Afternoon', text: 'Tram 28 through Alfama, Sao Jorge Castle' }, { time: 'Evening', text: 'Fado show in Alfama, ginjinha (cherry liqueur) at a tiny bar' }] }, { theme: 'Sintra Day Trip', activities: [{ time: 'Morning', text: 'Train to Sintra (40min) — Pena Palace, Moorish Castle' }, { time: 'Afternoon', text: 'Quinta da Regaleira secret garden and initiation well' }, { time: 'Evening', text: 'Return to Lisbon, Time Out Market dinner' }] }] },
  { name: 'Georgia', flag: '🇬🇪', cities: 'Tbilisi · Batumi · Kazbegi', currency: 'GEL', dailyCostUSD: 40, badge: 'great', insight: 'One of Europe\'s hidden gems — cheap wine, food, and stunning mountain scenery.', climate: '✅ Stable', newsQuery: 'Georgia Tbilisi protest political unrest safety 2025', food: [{ icon: '🥟', name: 'Khinkali', desc: 'Soup dumplings with spiced meat — bite the top, suck the broth, then eat the rest. Don\'t eat the knob.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🧀', name: 'Khachapuri', desc: 'Cheese-filled bread boat with egg and butter — Adjarian style is the famous boat version.', tag: 'Georgian Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏰', name: 'Old Town Tbilisi Guesthouses', desc: 'Sulfur bath district rooms from $15-20/night — wooden balconies, vine-covered walls, city views.', tag: 'Charming', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🍷', name: 'Wine from Telavi', desc: 'Natural amber wine is Georgia\'s gift to the world — buy directly from Alazani Valley wineries.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Tbilisi Old Town', activities: [{ time: 'Morning', text: 'Narikala Fortress cable car, Old Town walk through sulfur bath district' }, { time: 'Afternoon', text: 'Metekhi Church cliff viewpoint, Shardeni wine street' }, { time: 'Evening', text: 'Khinkali dinner, Georgian polyphonic choir show' }] }, { theme: 'Kazbegi Mountains', activities: [{ time: 'Morning', text: 'Marshrutka to Kazbegi (3hrs) through Caucasus mountains' }, { time: 'Afternoon', text: 'Hike to Gergeti Trinity Church above the clouds at 2170m' }, { time: 'Evening', text: 'Mountain guesthouse dinner, star gazing' }] }] },
  { name: 'France', flag: '🇫🇷', cities: 'Paris · Lyon · Nice', currency: 'EUR', dailyCostUSD: 110, badge: 'good', insight: 'The most visited country in the world — Paris, the French Riviera and the finest food and wine on earth.', climate: '✅ Stable', newsQuery: 'France Paris travel safety visa 2025', food: [{ icon: '🥐', name: 'Croissant + Café', desc: 'Fresh croissant with café au lait at a zinc bar — the definitive Parisian breakfast. Under €3.', tag: 'Daily Ritual', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🧅', name: 'French Onion Soup', desc: 'Caramelised onion broth topped with Gruyère toast — best at Chez Denise in Les Halles, Paris.', tag: 'Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🧀', name: 'Cheese + Wine', desc: 'France has 1,200 cheeses — visit a fromagerie and pair with local wine. Life-changing experience.', tag: 'Must Experience', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏨', name: 'Marais / Montmartre, Paris', desc: 'Boutique hotels from €80/night in Paris\'s most charming neighbourhoods — walk to major sights.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🌊', name: 'Nice Apartments', desc: 'Short-term apartments on the Côte d\'Azur from €60/night — beach, promenade, day trips to Monaco.', tag: 'Riviera', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '👜', name: 'Le Marais, Paris', desc: 'Paris\'s trendiest shopping neighbourhood — designer boutiques, vintage shops, galleries, falafels on rue des Rosiers.', tag: 'Fashion', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍷', name: 'Nicolas Wine Shops', desc: 'France\'s national wine chain — excellent bottles from €6, knowledgeable staff, great gift selections.', tag: 'Wine', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Paris Icons', activities: [{ time: 'Morning', text: 'Eiffel Tower (book timed entry online) — go at opening to beat queues' }, { time: 'Afternoon', text: 'Musée d\'Orsay (Impressionist masterpieces), walk along the Seine' }, { time: 'Evening', text: 'Sunset from Sacré-Cœur, dinner in Montmartre, Seine riverboat cruise' }] }, { theme: 'Paris Culture', activities: [{ time: 'Morning', text: 'The Louvre — Mona Lisa (arrive at 9am), Venus de Milo, Winged Victory. Book timed entry.' }, { time: 'Afternoon', text: 'Ile de la Cité — Notre Dame (reopened), Sainte-Chapelle stained glass' }, { time: 'Evening', text: 'Le Marais bar scene, picnic with wine and cheese by the Canal Saint-Martin' }] }, { theme: 'French Riviera', activities: [{ time: 'Morning', text: 'Nice Old Town — cours Saleya flower market, Niçoise salad at a terrace restaurant' }, { time: 'Afternoon', text: 'Monaco day trip — Prince\'s Palace, Casino Monte-Carlo (free to walk around)' }, { time: 'Evening', text: 'Promenade des Anglais sunset walk, socca flatbread from a street stall' }] }] },
  { name: 'Italy', flag: '🇮🇹', cities: 'Rome · Florence · Amalfi Coast', currency: 'EUR', dailyCostUSD: 100, badge: 'good', insight: 'Greatest concentration of art, history and food in the world — and more affordable than France if you know where to eat.', climate: '✅ Stable', newsQuery: 'Italy travel safety visa overtourism 2025', food: [{ icon: '🍕', name: 'Neapolitan Pizza', desc: 'The original — San Marzano tomatoes, buffalo mozzarella, basil. L\'Antica Pizzeria da Michele in Naples. Under €6.', tag: 'Original', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍝', name: 'Cacio e Pepe', desc: 'Roman pasta perfection — spaghetti with Pecorino Romano and black pepper. Only 3 ingredients, impossibly good.', tag: 'Roman Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍦', name: 'Gelato', desc: 'Real gelato from a gelateria artigianale (look for natural colours, not neon). Under €2.50 for two scoops.', tag: 'Daily Essential', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏛', name: 'Trastevere, Rome', desc: 'Rome\'s most atmospheric neighbourhood — guesthouses from €50/night, cobblestone streets, local trattorias.', tag: 'Atmospheric', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🌊', name: 'Positano Apartments, Amalfi', desc: 'Cliffside apartments from €80/night — the most beautiful coastline in Italy, terraced above turquoise water.', tag: 'Scenic', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '👠', name: 'Florence Leather Market', desc: 'San Lorenzo Market and leather school at Santa Croce — genuine Italian leather at workshop prices.', tag: 'Quality', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍋', name: 'Amalfi Limoncello', desc: 'Buy directly from producers on the Amalfi Coast — sfusato amalfitano lemons make the finest limoncello.', tag: 'Take Home', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Rome Ancient City', activities: [{ time: 'Morning', text: 'Colosseum and Roman Forum (book timed entry) — arrive at opening, incredible at 8am' }, { time: 'Afternoon', text: 'Palatine Hill, Circus Maximus, Aventine Hill\'s keyhole view of St Peter\'s' }, { time: 'Evening', text: 'Trastevere neighbourhood dinner, Piazza Navona at night' }] }, { theme: 'Rome Art + Vatican', activities: [{ time: 'Morning', text: 'Vatican Museums and Sistine Chapel (book months ahead or buy skip-the-line online)' }, { time: 'Afternoon', text: 'St Peter\'s Basilica (free), Castel Sant\'Angelo' }, { time: 'Evening', text: 'Throw coin in Trevi Fountain (go at midnight for fewer crowds), gelato crawl' }] }, { theme: 'Florence Renaissance', activities: [{ time: 'Morning', text: 'Uffizi Gallery — Botticelli\'s Birth of Venus, da Vinci, Michelangelo (book well ahead)' }, { time: 'Afternoon', text: 'Accademia — Michelangelo\'s David (book ahead). Ponte Vecchio gold shops.' }, { time: 'Evening', text: 'Piazzale Michelangelo sunset over Florence, bistecca Fiorentina dinner' }] }, { theme: 'Amalfi Coast', activities: [{ time: 'Morning', text: 'Ferry from Naples or Salerno to Positano — most dramatic coastal arrival in Europe' }, { time: 'Afternoon', text: 'Ravello gardens, Amalfi Cathedral, lemon grove walk' }, { time: 'Evening', text: 'Seafood dinner on a terrace over the sea, limoncello digestivo' }] }] },
  { name: 'UK', flag: '🇬🇧', cities: 'London · Edinburgh · Cotswolds', currency: 'GBP', dailyCostUSD: 130, badge: 'good', insight: 'London has the world\'s best free museums — you can experience world-class culture with almost no entry fees.', climate: '✅ Stable', newsQuery: 'UK London travel visa ETA 2025', food: [{ icon: '🍛', name: 'Chicken Tikka Masala', desc: 'Britain\'s true national dish — Indian-British fusion at its finest. Brick Lane in London has over 50 curry houses.', tag: 'National Dish', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥧', name: 'Full English Breakfast', desc: 'Eggs, bacon, sausage, beans, toast, black pudding and mushrooms — a proper fry-up keeps you going all day.', tag: 'Morning Ritual', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍺', name: 'Pub Meal + Pint', desc: 'Sunday roast at a British pub — roast beef, Yorkshire pudding, roast potatoes, gravy. Best meal of the week.', tag: 'Culture', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🏙', name: 'Zone 2 London Hotels', desc: 'Hotels in Shoreditch, Brixton or Bethnal Green from £60/night — excellent tube access, trendier than central.', tag: 'Value', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏰', name: 'Edinburgh Old Town', desc: 'Guesthouses from £45/night below the castle — most atmospheric city in Britain, especially at night.', tag: 'Atmospheric', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🎪', name: 'Borough Market, London', desc: 'London\'s finest food market under London Bridge — artisan cheeses, street food, pastries, coffee. Go hungry.', tag: 'Food Market', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '📚', name: 'Portobello Road Market', desc: 'Notting Hill\'s famous antiques and vintage market on Saturdays — furniture, jewellery, records, clothing.', tag: 'Vintage', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'London Free Day', activities: [{ time: 'Morning', text: 'British Museum (free) — Rosetta Stone, Elgin Marbles, Egyptian mummies. World\'s greatest collection.' }, { time: 'Afternoon', text: 'National Gallery (free) — Van Gogh Sunflowers, da Vinci, Turner. Trafalgar Square.' }, { time: 'Evening', text: 'South Bank walk — Tate Modern (free), Shakespeare\'s Globe, street food at Flat Iron Square' }] }, { theme: 'London Royal + Parks', activities: [{ time: 'Morning', text: 'Hyde Park, Kensington Palace, V&A Museum (free) — world\'s greatest decorative arts collection' }, { time: 'Afternoon', text: 'Buckingham Palace, St James\'s Park, Changing of the Guard' }, { time: 'Evening', text: 'Covent Garden street performers, West End theatre (buy day seats from box office)' }] }, { theme: 'Edinburgh Castle + Old Town', activities: [{ time: 'Morning', text: 'Edinburgh Castle — Scottish Crown Jewels, One O\'Clock Gun, views over the city' }, { time: 'Afternoon', text: 'Royal Mile walk, Greyfriars Kirkyard, Scottish whisky experience' }, { time: 'Evening', text: 'Ghost tour of the underground vaults — genuinely terrifying. Book ahead.' }] }, { theme: 'Scottish Highlands', activities: [{ time: 'Morning', text: 'Train or drive to Loch Ness — monster spotting optional, Urquhart Castle ruins required' }, { time: 'Afternoon', text: 'Glencoe valley — dramatic Highland scenery, site of 1692 massacre, incredible walking' }, { time: 'Evening', text: 'Whisky tasting at a distillery visitor centre' }] }] },
];

let liveRates = {};
let currentDest = null;
let currentDays = 0;
let currentSymbol = '₹';

async function loadRates() {
  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${FX_KEY}/latest/USD`);
    const data = await res.json();
    liveRates = data.conversion_rates;
    updateTicker();
  } catch (err) { console.log("❌ FX error:", err); }
}

function updateTicker() {
  const pairs = { 'INR/THB': liveRates.THB / liveRates.INR, 'INR/VND': liveRates.VND / liveRates.INR, 'INR/EUR': liveRates.EUR / liveRates.INR, 'INR/USD': 1 / liveRates.INR, 'INR/MYR': liveRates.MYR / liveRates.INR };
  for (const [pair, rate] of Object.entries(pairs)) {
    const el = document.querySelector(`[data-pair="${pair}"]`);
    if (el) el.textContent = rate.toFixed(4);
  }
}

async function searchDestinations() {
  const budgetInput = document.getElementById('budget').value;
  const selectedCurrency = document.getElementById('home-currency').value;
  if (!budgetInput) { alert('Please enter your budget!'); return; }
  if (!liveRates[selectedCurrency]) { alert('Rates still loading, try again!'); return; }

  const symbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' };
  currentSymbol = symbols[selectedCurrency] || selectedCurrency + ' ';
  const budgetUSD = parseFloat(budgetInput) / liveRates[selectedCurrency];

  // Experience quality scores — how good is this destination as a trip (not how cheap)
  const experienceScores = {
    'Japan': 10, 'Italy': 10, 'France': 10, 'Peru': 9.5, 'Morocco': 9.5,
    'Turkey': 9.5, 'Jordan': 9, 'Colombia': 9, 'Argentina': 9, 'South Africa': 9,
    'Thailand': 9, 'Vietnam': 8.5, 'Indonesia': 8.5, 'Portugal': 8.5, 'Georgia': 8.5,
    'Kenya': 8.5, 'Tanzania': 8.5, 'Egypt': 8, 'Malaysia': 8, 'Dubai': 7.5,
    'Sri Lanka': 8, 'Nepal': 8, 'Mexico': 8.5, 'Lebanon': 7.5, 'Qatar': 7,
    'Bahrain': 6.5, 'Zambia': 7.5, 'Zimbabwe': 7.5,
  };

  // Minimum viable days — below this the trip doesn't make sense
  const minViableDays = {
    'Japan': 7, 'Italy': 6, 'France': 5, 'Peru': 8, 'Morocco': 5,
    'Turkey': 5, 'Jordan': 4, 'Colombia': 6, 'Argentina': 8, 'South Africa': 7,
    'Thailand': 5, 'Vietnam': 6, 'Indonesia': 5, 'Portugal': 4, 'Georgia': 4,
    'Kenya': 5, 'Tanzania': 5, 'Egypt': 5, 'Malaysia': 4, 'Dubai': 3,
    'Sri Lanka': 5, 'Nepal': 5, 'Mexico': 5, 'Lebanon': 3, 'Qatar': 3,
    'Bahrain': 3, 'Zambia': 4, 'Zimbabwe': 4,
  };

  const results = destinations.map(dest => {
    const days = Math.floor(budgetUSD / dest.dailyCostUSD);
    const dailyCostLocal = (dest.dailyCostUSD * liveRates[selectedCurrency]).toFixed(0);
    const minDays = minViableDays[dest.name] || 4;

    // Skip destinations where budget doesn't cover a viable trip
    if (days < minDays) return null;

    const expScore = experienceScores[dest.name] || 7;

    // Days score — sweet spot is 7-21 days, diminishing returns after that
    const idealDays = Math.min(days, 21);
    const daysScore = Math.min(idealDays / 14, 1) * 10;

    // Value score — how many days relative to a "good" trip length
    const valueScore = Math.min(days / (minDays * 2), 1) * 10;

    // Small random shuffle factor so identical scores vary each search
    const shuffleFactor = (Math.random() * 2) - 1;

    // Weighted total score
    const totalScore = (expScore * 0.35) + (daysScore * 0.30) + (valueScore * 0.20) + (shuffleFactor * 0.15);

    return { ...dest, days, dailyCostLocal, totalScore };
  }).filter(Boolean).sort((a, b) => b.totalScore - a.totalScore);

  renderCards(results, selectedCurrency);
  for (const dest of results.slice(0, 3)) { fetchNews(dest.name, dest.newsQuery); }
}

const JUNK_KEYWORDS = ['chatgpt', 'ai generates', 'photographer', 'portrait photography', 'book celebrates', 'announces partnership', 'stock market', 'earnings report', 'celebrity'];

function isUsefulArticle(title) {
  const lower = title.toLowerCase();
  return !JUNK_KEYWORDS.some(k => lower.includes(k)) && ['warn', 'ban', 'flood', 'storm', 'earthquake', 'visa', 'entry', 'protest', 'unrest', 'war', 'conflict', 'typhoon', 'eruption', 'advisory', 'safety', 'danger', 'travel', 'tourist', 'permit', 'rule', 'restriction', 'weather', 'season', 'food', 'cost', 'cheap', 'affordable', 'scam'].some(k => lower.includes(k));
}

function tagArticle(title) {
  const lower = title.toLowerCase();
  if (['flood', 'storm', 'typhoon', 'earthquake', 'eruption', 'weather', 'season'].some(k => lower.includes(k))) return { label: '🌦 Weather', color: '#1e3a5f', text: '#60a5fa' };
  if (['visa', 'entry', 'ban', 'permit', 'restriction', 'rule'].some(k => lower.includes(k))) return { label: '🛂 Entry Rules', color: '#14532d', text: '#4ade80' };
  if (['protest', 'unrest', 'war', 'conflict', 'danger', 'safety', 'warn', 'advisory'].some(k => lower.includes(k))) return { label: '⚠️ Safety', color: '#4a1010', text: '#f87171' };
  return { label: '💡 Travel Tip', color: '#2d1f4e', text: '#a78bfa' };
}

async function fetchNews(destName, query) {
  try {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&pageSize=10&language=en&apiKey=${NEWS_KEY}`);
    const data = await res.json();
    const filtered = (data.articles || []).filter(a => isUsefulArticle(a.title)).slice(0, 3);
    const container = document.getElementById(`news-${destName.replace(/\s/g, '-')}`);
    if (!container) return;
    if (filtered.length === 0) { container.innerHTML = `<p class="news-loading">No major travel alerts right now.</p>`; return; }
    container.innerHTML = filtered.map(a => {
      const tag = tagArticle(a.title);
      const date = new Date(a.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
      return `<a class="news-item" href="${a.url}" target="_blank"><div class="news-tag" style="background:${tag.color}; color:${tag.text}">${tag.label}</div><div class="news-right"><span class="news-title">${a.title}</span><span class="news-date">${date} · ${a.source.name}</span></div></a>`;
    }).join('');
  } catch (err) { console.log(`❌ News error:`, err); }
}

function openDetail(destName, days, symbol) {
  const dest = destinations.find(d => d.name === destName);
  if (!dest) return;
  currentDest = dest;
  currentDays = days;
  currentSymbol = symbol;
  document.getElementById('detail-flag').textContent = dest.flag;
  document.getElementById('detail-name').textContent = dest.name;
  document.getElementById('detail-cities').textContent = dest.cities;
  document.getElementById('detail-days-badge').textContent = `${days} days on your budget`;
  document.getElementById('detail-budget-badge').textContent = `${symbol}${(dest.dailyCostUSD * (liveRates[Object.keys(liveRates).find(k => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }[k] === symbol))] || 1)).toFixed(0)} / day`;
  document.getElementById('detail-screen').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  switchTab('itinerary');
}

function closeDetail() {
  document.getElementById('detail-screen').classList.add('hidden');
  document.body.style.overflow = '';
}

function switchTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
  document.getElementById(`tab-${tab}`).classList.add('active');
  if (tab === 'itinerary') renderItinerary();
  if (tab === 'food') renderRecos('food-list', currentDest.food);
  if (tab === 'stay') renderRecos('stay-list', currentDest.stay);
  if (tab === 'shopping') renderRecos('shopping-list', currentDest.shopping);
  if (tab === 'visa') renderVisa(currentDest);
  if (tab === 'flights') {}
  if (tab === 'budget') { document.getElementById('budget-result').classList.add('hidden'); }
  if (tab === 'compare') { populateCompareDropdown(); }
}

function renderItinerary() {
  const list = document.getElementById('itinerary-list');
  const itin = currentDest.itinerary;
  let html = '';
  for (let i = 0; i < Math.min(currentDays, itin.length); i++) {
    const day = itin[i];
    html += `<div class="day-card"><div class="day-label">Day ${i + 1}</div><div class="day-title">${day.theme}</div><div class="day-activities">${day.activities.map(a => `<div class="activity"><span class="activity-time">${a.time}</span><span>${a.text}</span></div>`).join('')}</div></div>`;
  }
  if (currentDays > itin.length) {
    html += `<div class="day-card" style="border-style:dashed; border-color:#4f6ef7"><div class="day-label" style="color:#4f6ef7">Days ${itin.length + 1}–${currentDays}</div><div class="day-title">Explore at your own pace</div><div class="day-activities"><div class="activity"><span class="activity-time">Tip</span><span>With extra days, explore nearby regions, take day trips, or slow down and enjoy local life — the best travel moments are often unplanned.</span></div></div></div>`;
  }
  list.innerHTML = html;
}

function renderRecos(containerId, items) {
  const container = document.getElementById(containerId);
  if (!items || items.length === 0) { container.innerHTML = '<p class="loading-msg">Coming soon.</p>'; return; }
  container.innerHTML = items.map(item => `<div class="reco-card"><div class="reco-icon">${item.icon}</div><div class="reco-name">${item.name}</div><div class="reco-desc">${item.desc}</div><span class="reco-tag" style="background:${item.tagColor}; color:${item.tagText}">${item.tag}</span></div>`).join('');
}

function renderCards(results, currency) {
  const symbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' };
  const symbol = symbols[currency] || currency + ' ';
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = results.map((dest, i) => `
    <div class="dest-card" onclick="openDetail('${dest.name}', ${dest.days}, '${symbol}')" style="cursor:pointer;">
      <div class="card-top">
        <span class="flag">${dest.flag}</span>
        <div><h3 class="dest-name">${dest.name}</h3><p class="dest-city">${dest.cities}</p></div>
        <span class="value-badge ${dest.badge}">${dest.badge === 'best' ? 'Best Value' : dest.badge === 'great' ? 'Great Value' : 'Good Value'}</span>
      </div>
      <div class="days-banner"><span class="days-number">${dest.days}</span><span class="days-label">days on your budget</span></div>
      <div class="card-stats">
        <div class="stat"><span class="stat-label">Daily Cost</span><span class="stat-value">${symbol}${Number(dest.dailyCostLocal).toLocaleString()}</span></div>
        <div class="stat"><span class="stat-label">Currency</span><span class="stat-value">${dest.currency}</span></div>
        <div class="stat"><span class="stat-label">Travel Climate</span><span class="stat-value">${dest.climate}</span></div>
      </div>
      <p class="card-insight">💡 ${dest.insight}</p>
      ${i < 3 ? `<div class="news-section"><p class="news-label">📡 Travel Intelligence</p><div class="news-items" id="news-${dest.name.replace(/\s/g, '-')}"><p class="news-loading">Scanning conditions...</p></div></div>` : ''}
      <div class="card-cta">Tap to see itinerary, food & stays →</div>
    </div>
  `).join('');
}

// ─── PASSPORT TIERS ───────────────────────────────────────────────────────────
const passportTiers = {
  US:'tier1', GB:'tier1', DE:'tier1', FR:'tier1', IT:'tier1', ES:'tier1', NL:'tier1', JP:'tier1', KR:'tier1', AU:'tier1', NZ:'tier1', CA:'tier1',
  MY:'tier2', BR:'tier2', AR:'tier2', MX:'tier2', CL:'tier2', TR:'tier2', RU:'tier2', CN:'tier2',
  IN:'tier3', TH:'tier3', CO:'tier3', PE:'tier3', ID:'tier3', ZA:'tier3', MA:'tier3', JO:'tier3', LB:'tier3', AE:'tier3', SA:'tier3', QA:'tier3', KW:'tier3', BH:'tier3', OM:'tier3',
  PH:'tier4', VN:'tier4', LK:'tier4', NP:'tier4', BD:'tier4', PK:'tier4', EG:'tier4', GH:'tier4', KE:'tier4', TZ:'tier4', NG:'tier4', ET:'tier4', UG:'tier4', ZM:'tier4', ZW:'tier4', IR:'tier4', IQ:'tier4',
};

const passportNames = {
  US:'American', GB:'British', DE:'German', FR:'French', IT:'Italian', ES:'Spanish', NL:'Dutch', JP:'Japanese', KR:'South Korean', AU:'Australian', NZ:'New Zealand', CA:'Canadian',
  MY:'Malaysian', BR:'Brazilian', AR:'Argentine', MX:'Mexican', CL:'Chilean', TR:'Turkish', RU:'Russian', CN:'Chinese',
  IN:'Indian', TH:'Thai', CO:'Colombian', PE:'Peruvian', ID:'Indonesian', ZA:'South African', MA:'Moroccan', JO:'Jordanian', LB:'Lebanese', AE:'Emirati', SA:'Saudi', QA:'Qatari', KW:'Kuwaiti', BH:'Bahraini', OM:'Omani',
  PH:'Filipino', VN:'Vietnamese', LK:'Sri Lankan', NP:'Nepali', BD:'Bangladeshi', PK:'Pakistani', EG:'Egyptian', GH:'Ghanaian', KE:'Kenyan', TZ:'Tanzanian', NG:'Nigerian', ET:'Ethiopian', UG:'Ugandan', ZM:'Zambian', ZW:'Zimbabwean', IR:'Iranian', IQ:'Iraqi',
};

const visaDatabase = {
  'Vietnam': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '45 days', cost: 'Free', processing: 'Instant on arrival', note: 'Strong passport holders get 45-day visa-free access. E-visa available at $25 for longer flexibility.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: '30-day visa-free access. E-visa available at $25 for longer stays or multiple entries.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '45 days', cost: 'Free', processing: 'Instant on arrival', note: 'Vietnam extended visa-free access to Indian passport holders. E-visa available for $25.' },
    tier4: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '30 days', cost: '$25 USD', processing: '3 business days online', note: 'Apply at evisa.xuatnhapcanh.gov.vn. Most nationalities can get this quickly and easily.' },
    overrides: { PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$25 USD', processing: '5-7 business days', note: 'Apply at Vietnamese Embassy or e-visa portal. Straightforward tourist visa process.' } }
  },
  'Thailand': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '60 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 60-day visa-free entry. Extendable at immigration for 30 days.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: '30-day visa-free access. Apply for Thailand e-visa for longer stays.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '฿2,000 (~$55)', processing: 'On arrival (30-60 min queue)', note: 'Get Thailand e-visa before travel to skip the queue. Available at thaievisa.go.th.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '15 days', cost: '฿2,000 (~$55)', processing: 'On arrival', note: 'Visa on arrival available but queues can be long. Consider applying for a tourist visa at your local Thai embassy first.' },
    overrides: { PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '60 days', cost: 'Free', processing: 'Apply at embassy', note: 'Pakistani passport holders should apply for a tourist visa at the Royal Thai Embassy before travel.' } }
  },
  'Indonesia': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports enter Bali and Indonesia visa-free for 30 days. Not extendable.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: '30-day visa-free entry. Exit and re-enter for another 30 days.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Visa-free access for 30 days. No extension — exit and re-enter for another stay.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$35 USD', processing: 'On arrival at Ngurah Rai Airport', note: 'Visa on arrival available at Bali and major airports. Can also apply for e-VOA at molina.imigrasi.go.id before travel.' },
  },
  'Nepal': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '15-90 days', cost: '$30-100 USD', processing: 'On arrival at Tribhuvan Airport', note: 'Visa on arrival — 15 days $30, 30 days $50, 90 days $100. Also available via Nepal e-visa portal.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$50 USD', processing: 'On arrival', note: 'Straightforward visa on arrival process at Kathmandu Airport. Apply for e-visa at online.nepalimmigration.gov.np for quicker processing.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$50 USD', processing: 'On arrival', note: 'Visa on arrival available. For Indian passport holders only — no visa or passport needed, Aadhaar card suffices.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$50 USD', processing: 'On arrival', note: 'Nepal is open to most nationalities with visa on arrival. Pre-apply at online.nepalimmigration.gov.np to save time.' },
    overrides: { IN: { status: 'visa-free', statusLabel: 'Visa Free', duration: 'Unlimited', cost: 'Free', processing: 'Instant — no passport needed', note: 'Indian citizens need NO visa or passport for Nepal. Aadhaar card or voter ID is sufficient. No limit on stay.' } }
  },
  'Malaysia': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 90-day visa-free access to Malaysia.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: '30-day visa-free entry to Malaysia.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian, South African and most Gulf passport holders get 30-day visa-free entry.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'Free–$20', processing: '3-5 business days', note: 'Apply for Malaysia eNTRI or eVISA online at windowmalaysia.my. eNTRI is free and quick for eligible nationalities.' },
    overrides: { PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'RM25', processing: '3-5 business days', note: 'Pakistani passport holders need a visa. Apply online via windowmalaysia.my or at Malaysian High Commission.' }, BD: { status: 'visa-required', statusLabel: 'eNTRI Available', duration: '15 days', cost: 'Free', processing: 'Online in minutes', note: 'Bangladeshi passport holders can use the free eNTRI system for a 15-day stay. Apply at windowmalaysia.my.' } }
  },
  'Sri Lanka': {
    tier1: { status: 'visa-required', statusLabel: 'ETA Required', duration: '30 days', cost: '$20 USD', processing: '24-48 hours online', note: 'Apply at eta.gov.lk before travel. Quick online process. Do not use third party sites.' },
    tier2: { status: 'visa-required', statusLabel: 'ETA Required', duration: '30 days', cost: '$20 USD', processing: '24-48 hours online', note: 'Apply at eta.gov.lk. Most nationalities get approval within 24 hours.' },
    tier3: { status: 'visa-required', statusLabel: 'ETA Required', duration: '30 days', cost: '$20 USD', processing: '24-48 hours online', note: 'Apply at eta.gov.lk before travel. Takes 24-48 hrs and costs $20.' },
    tier4: { status: 'visa-required', statusLabel: 'ETA Required', duration: '30 days', cost: '$20 USD', processing: '24-48 hours online', note: 'Most nationalities can apply at eta.gov.lk. Some may require additional documentation from local embassy.' },
  },
  'Japan': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports enter Japan visa-free for 90 days. Register with Visit Japan Web before departure for faster processing.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '15-90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Several mid-tier passports get visa-free access to Japan. Check Japan foreign ministry site for your specific country.' },
    tier3: { status: 'visa-required', statusLabel: 'Visa Required', duration: '15-90 days', cost: '¥3,000 (~$20)', processing: '5-7 business days', note: 'Apply at VFS Japan or nearest Japanese Embassy. Requires bank statements, accommodation bookings and itinerary.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '15 days', cost: '¥3,000 (~$20)', processing: '7-14 business days', note: 'Japan visa can be challenging for some nationalities. Apply well in advance with strong financial documentation.' },
  },
  'Dubai': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 90-day visa-free access to UAE. Register on the ICA Smart App before arrival.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free / Visa on Arrival', duration: '30 days', cost: 'Free or AED100', processing: 'On arrival', note: 'Several mid-tier passports get visa on arrival or visa-free access. Check UAE ICA portal for your country.' },
    tier3: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30-60 days', cost: 'AED250-500', processing: '3-5 business days online', note: 'Apply via UAE ICA portal, Emirates website or a registered travel agent in UAE. Tourist visa available in 30 and 60-day options.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'AED300-600', processing: '5-7 business days', note: 'Visa required and may need a sponsor or hotel booking. Apply through a UAE-registered travel agency or hotel. Some nationalities face stricter requirements.' },
    overrides: { PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'AED300', processing: '5-10 business days', note: 'Pakistani passport holders need a UAE visa. Apply through a UAE travel agent or with a UAE national/resident sponsor. Process has become stricter — apply well in advance.' } }
  },
  'Jordan': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Several strong passports now get visa-free access to Jordan. Jordan Pass includes visa + sites from JOD 70.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'JOD 40', processing: 'On arrival at Queen Alia Airport', note: 'Visa on arrival available. Jordan Pass (from JOD 70) includes the visa fee + Petra entry — much better value.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'JOD 40', processing: 'On arrival', note: 'Single entry visa on arrival. Jordan Pass includes visa + Petra and 40+ sites. Worth buying at visitjordan.com.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'JOD 40', processing: 'On arrival', note: 'Jordan is generally welcoming to most nationalities. Visa on arrival available at Queen Alia International Airport.' },
  },
  'Turkey': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 90-day visa-free access to Turkey.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30-90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most mid-tier passports get visa-free access to Turkey for 30-90 days depending on country.' },
    tier3: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '30 days', cost: '$55 USD', processing: 'Online in minutes', note: 'Apply at evisa.gov.tr. Very quick process — takes minutes. Print or show on phone at the border.' },
    tier4: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '30 days', cost: '$55 USD', processing: 'Online — 1-3 days', note: 'Most nationalities can get the Turkey e-visa online at evisa.gov.tr. Some may need sticker visa from embassy.' },
    overrides: { SA: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Saudi passport holders get 90-day visa-free access to Turkey.' }, AE: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'UAE passport holders get 90-day visa-free access to Turkey.' } }
  },
  'Morocco': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 90-day visa-free access to Morocco.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Many mid-tier passports also get 90-day visa-free access to Morocco.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian passport holders get 90-day visa-free access — one of Morocco\'s most generous visa policies.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '90 days', cost: 'Free', processing: '5-10 business days at embassy', note: 'Apply at Moroccan Embassy. Required documentation varies by country. Some African passports face stricter requirements.' },
    overrides: { NG: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'Free', processing: '5-10 business days', note: 'Nigerian passport holders need a Moroccan visa. Apply at Moroccan Embassy with bank statements and hotel bookings.' } }
  },
  'Egypt': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$25 USD', processing: 'On arrival or e-visa online', note: 'Get the e-visa at visa2egypt.gov.eg to skip queues at Cairo airport which can be very slow.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$25 USD', processing: 'On arrival or online', note: 'e-Visa at visa2egypt.gov.eg is much faster than on arrival. Recommended for all nationalities.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: '$25 USD', processing: 'On arrival', note: 'Egyptian visa on arrival is available to most nationalities. e-Visa also available online at visa2egypt.gov.eg.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$25 USD', processing: 'Apply at embassy', note: 'Some nationalities may need to apply at Egyptian Embassy before travel. Check with your nearest Egyptian diplomatic mission.' },
  },
  'Kenya': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Register online before travel', note: 'Kenya dropped visa requirements for all countries in 2024. Register at etavisa.immigration.go.ke before travel (free).' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Register online before travel', note: 'All nationalities now enter Kenya visa-free. Pre-register at etavisa.immigration.go.ke for smooth entry.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Register online before travel', note: 'Kenya scrapped all visas in 2024. All passports welcome — pre-register online at etavisa.immigration.go.ke.' },
    tier4: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Register online before travel', note: 'Kenya is now visa-free for all nationalities. Register at etavisa.immigration.go.ke before departure.' },
  },
  'Tanzania': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival / e-Visa', duration: '90 days', cost: '$50 USD', processing: 'On arrival or online', note: 'e-Visa at immigration.go.tz is faster. Zanzibar is part of Tanzania — same visa covers both.' },
    tier2: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '90 days', cost: '$50 USD', processing: 'Online in 1-3 days', note: 'Apply at immigration.go.tz. East Africa Tourist Visa ($100) covers Tanzania, Uganda and Rwanda if multi-country.' },
    tier3: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '90 days', cost: '$50 USD', processing: 'Online in 1-3 days', note: 'Apply at immigration.go.tz. Covers both mainland Tanzania and Zanzibar.' },
    tier4: { status: 'visa-required', statusLabel: 'e-Visa Required', duration: '30-90 days', cost: '$50 USD', processing: '3-5 business days online', note: 'Apply at immigration.go.tz. Some nationalities may require additional documentation or embassy application.' },
  },
  'South Africa': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 90-day visa-free access to South Africa.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Several mid-tier passports get visa-free access. Check South African Home Affairs website for your country.' },
    tier3: { status: 'visa-required', statusLabel: 'Visa Required', duration: '90 days', cost: 'R425 (~$22)', processing: '10-15 business days', note: 'Apply at South African Embassy or VFS Global. Requires bank statements, accommodation bookings and return flights.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30-90 days', cost: 'R425', processing: '10-15 business days', note: 'Apply well in advance at South African Embassy. Some nationalities face stricter requirements. Strong financial proof needed.' },
  },
  'Zambia': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'KAZA UniVisa ($50) covers both Zambia and Zimbabwe — great value if visiting Victoria Falls from both sides.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'Zambia visa on arrival is available to most nationalities. KAZA UniVisa also covers Zimbabwe.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'KAZA UniVisa ($50) covers Zambia and Zimbabwe together — recommended for Victoria Falls visits from both sides.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival at Kenneth Kaunda Airport', note: 'Zambia is generally welcoming. Visa on arrival available to most passport holders.' },
  },
  'Zimbabwe': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$30-50 USD', processing: 'On arrival', note: 'Single country visa $30, KAZA UniVisa (Zambia + Zimbabwe) $50. Paid in USD cash at port of entry.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'KAZA UniVisa covers Zimbabwe and Zambia. Pay in USD on arrival.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'KAZA UniVisa ($50) covers Zimbabwe and Zambia — great for Victoria Falls from both sides.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '90 days', cost: '$50 USD', processing: 'On arrival', note: 'Available to most nationalities. Bring USD cash as card payments are unreliable at border crossings.' },
  },
  'Colombia': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports enter Colombia visa-free for 90 days. Fill out the Check-Mig form at migracioncolombia.gov.co before travel.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Colombia is visa-free for most nationalities. Fill Check-Mig form at migracioncolombia.gov.co before travel.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian, South African and most passport holders get 90-day visa-free access to Colombia.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '90 days', cost: '$52 USD', processing: '5-10 business days', note: 'Apply at Colombian Embassy. Some African and Asian passports require a visa. Check cancilleria.gov.co.' },
    overrides: { PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$52 USD', processing: '10-15 business days', note: 'Pakistani passport holders need a Colombian visa. Apply at Colombian Embassy well in advance.' } }
  },
  'Peru': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90-183 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports enter Peru visa-free. Buy Machu Picchu tickets at machupicchu.gob.pe well in advance — they sell out.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Peru is very open to international visitors. Visa-free for most nationalities.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '183 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian passport holders get exceptional 183-day (6 months) visa-free access to Peru. Pre-buy Machu Picchu tickets online.' },
    tier4: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Peru is open to most nationalities visa-free. Some may need to show onward travel and sufficient funds at entry.' },
  },
  'Argentina': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports enter Argentina visa-free. Use the "blue rate" for currency exchange — ask your hotel for the official method.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: '90-day visa-free access. Argentina uses USD widely — bring cash for the best exchange rates.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian and most South Asian passport holders get 90-day visa-free entry to Argentina.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '90 days', cost: '$100 USD', processing: '10-15 business days', note: 'Apply at Argentine Embassy or consulate. Requires financial proof, accommodation bookings and return ticket.' },
  },
  'Mexico': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '180 days', cost: 'Free', processing: 'Instant on arrival', note: 'Most strong passports get 180-day visa-free access to Mexico. Fill out FMM form on arrival or online.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: '90-day visa-free access for most mid-tier passports.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free (with conditions)', duration: '180 days', cost: 'Free', processing: 'Instant on arrival', note: 'Indian and most South Asian passport holders with a valid US, UK, Canadian or Schengen visa get visa-free entry to Mexico.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$36 USD', processing: '5-10 business days', note: 'Apply at Mexican Embassy. Without a valid US/Schengen/UK visa, several nationalities require a Mexican visa in advance.' },
    overrides: { BD: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$36', processing: '5-10 business days', note: 'Bangladeshi passport holders need a Mexican visa unless they hold a valid US, Canadian or Schengen visa.' }, PK: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: '$36', processing: '5-10 business days', note: 'Pakistani passport holders need a Mexican visa. A valid US or Schengen visa may exempt you — verify before travel.' } }
  },
  'Portugal': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free (Schengen)', duration: '90 days in 180', cost: 'Free', processing: 'Instant on arrival', note: 'One Schengen visa or visa-free access covers all 26 Schengen countries including Portugal.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free / Visa Required', duration: '90 days in 180', cost: 'Free or €90', processing: 'Varies by country', note: 'Some mid-tier passports are visa-free for Schengen. Check if your country has a Schengen waiver.' },
    tier3: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90 (~$98)', processing: '15-30 business days', note: 'Apply at VFS Global or Portuguese Embassy. Book appointment early. One visa covers all 26 Schengen countries.' },
    tier4: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90', processing: '15-30 business days', note: 'Schengen visa can be challenging to obtain. Apply early with strong financial documentation. Refusal rates vary by nationality.' },
  },
  'Georgia': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '365 days', cost: 'Free', processing: 'Instant on arrival', note: 'Georgia is visa-free for almost all nationalities for up to 1 year. One of the world\'s most open border policies.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '365 days', cost: 'Free', processing: 'Instant on arrival', note: 'Georgia gives 1-year visa-free access to most passport holders. No registration required.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '365 days', cost: 'Free', processing: 'Instant on arrival', note: 'One of the most generous visa policies in the world — 1 full year visa-free for Indian and most other passports.' },
    tier4: { status: 'visa-free', statusLabel: 'Visa Free', duration: '365 days', cost: 'Free', processing: 'Instant on arrival', note: 'Georgia is visa-free for almost everyone. If your country requires a visa, it\'s available on arrival.' },
  },
  'France': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free (Schengen)', duration: '90 days in 180', cost: 'Free', processing: 'Instant on arrival', note: 'Visa-free Schengen access covers France and all 25 other Schengen countries.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free / Visa Required', duration: '90 days in 180', cost: 'Free or €90', processing: 'Varies', note: 'Check if your specific passport has Schengen waiver. Some mid-tier passports are visa-free for France.' },
    tier3: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90', processing: '15-30 business days', note: 'Apply at VFS France. One Schengen visa covers 26 countries. Apply at embassy of your longest stay country.' },
    tier4: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90', processing: '15-30 business days', note: 'Apply well in advance. Schengen refusal rates can be high for some nationalities — strong financial documents essential.' },
  },
  'Italy': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free (Schengen)', duration: '90 days in 180', cost: 'Free', processing: 'Instant on arrival', note: 'Schengen visa-free access covers Italy and 25 other countries. Register on Visit Italy portal.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free / Visa Required', duration: '90 days in 180', cost: 'Free or €90', processing: 'Varies', note: 'Check Schengen waiver status for your passport at Italy\'s foreign ministry website.' },
    tier3: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90', processing: '15-30 business days', note: 'Apply at VFS Italy. If visiting multiple Schengen countries, apply at embassy of longest-stay country.' },
    tier4: { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', cost: '€90', processing: '15-30 business days', note: 'Italy is a popular destination — apply early. Financial documentation and travel history are key to approval.' },
  },
  'UK': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free + ETA', duration: '6 months', cost: '£10 ETA', processing: 'ETA online — minutes', note: 'Most strong passports now need a UK ETA (£10) even for visa-free entry. Apply at gov.uk/apply-uk-visa.' },
    tier2: { status: 'visa-required', statusLabel: 'UK Visitor Visa', duration: '6 months', cost: '£115', processing: '3-8 weeks', note: 'Several mid-tier passports require a UK visa. Apply at gov.uk. UK is separate from Schengen — separate visa needed.' },
    tier3: { status: 'visa-required', statusLabel: 'UK Visitor Visa Required', duration: '6 months', cost: '£115', processing: '3-8 weeks', note: 'Apply online at gov.uk. Requires strong financial evidence, travel history and ties to home country.' },
    tier4: { status: 'visa-required', statusLabel: 'UK Visitor Visa Required', duration: '6 months', cost: '£115', processing: '3-8 weeks', note: 'UK visa can be difficult to obtain for some nationalities. Strong financial proof, employment letter and property ties are essential.' },
    overrides: { US: { status: 'visa-free', statusLabel: 'Visa Free + ETA', duration: '6 months', cost: '£10 ETA', processing: 'Minutes online', note: 'Americans need a UK ETA (£10) for visa-free entry. Apply at gov.uk before travel.' }, CA: { status: 'visa-free', statusLabel: 'Visa Free + ETA', duration: '6 months', cost: '£10 ETA', processing: 'Minutes online', note: 'Canadians need a UK ETA (£10). Apply at gov.uk.' }, AU: { status: 'visa-free', statusLabel: 'Visa Free + ETA', duration: '6 months', cost: '£10 ETA', processing: 'Minutes online', note: 'Australians need a UK ETA (£10). Apply at gov.uk.' } }
  },
  'Lebanon': {
    tier1: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'Free', processing: 'On arrival', note: 'Most strong passports get free visa on arrival in Lebanon. Check current FCO advisories before travel given regional situation.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'Free', processing: 'On arrival', note: 'Visa on arrival available for most nationalities. Monitor travel advisories before booking given the regional situation.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'Free', processing: 'On arrival', note: 'Indian and most passport holders get free visa on arrival. Check latest FCO/MEA advisories before travel.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '30 days', cost: 'Free', processing: 'Apply at embassy', note: 'Some nationalities require a visa from Lebanese Embassy before arrival. Check with local Lebanese diplomatic mission.' },
  },
  'Bahrain': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Several strong passports get visa-free access to Bahrain. Others get straightforward visa on arrival.' },
    tier2: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '14 days', cost: 'BHD 5 (~$13)', processing: 'On arrival', note: 'Easy visa on arrival at Bahrain International Airport. Also available as e-visa at evisa.gov.bh.' },
    tier3: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '14 days', cost: 'BHD 5', processing: 'On arrival', note: 'Very easy process. e-Visa also available from Bahrain tourism portal at evisa.gov.bh.' },
    tier4: { status: 'visa-required', statusLabel: 'Visa Required', duration: '14 days', cost: 'BHD 5', processing: 'Apply via evisa.gov.bh', note: 'Apply for Bahrain e-visa at evisa.gov.bh. Most nationalities approved quickly.' },
  },
  'Qatar': {
    tier1: { status: 'visa-free', statusLabel: 'Visa Free', duration: '90 days', cost: 'Free', processing: 'Instant on arrival', note: 'Over 90 nationalities get visa-free access to Qatar. Register on Hayya platform for additional perks.' },
    tier2: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'Qatar has expanded its visa-free list significantly. Most mid-tier passports now enter without a visa.' },
    tier3: { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', cost: 'Free', processing: 'Instant on arrival', note: 'India and most Gulf-adjacent passports get visa-free entry to Qatar — a welcome initiative for tourism.' },
    tier4: { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', cost: 'Free', processing: 'On arrival at Hamad International Airport', note: 'Qatar offers free visa on arrival to many nationalities at Hamad International Airport.' },
  },
};

// ─── FLIGHT COSTS ─────────────────────────────────────────────────────────────
const flightCosts = {
  'Vietnam':     { DEL: [180,320], BOM: [200,340], BLR: [190,330], HYD: [185,320], MAA: [175,300], LHR: [400,700], JFK: [600,900], DXB: [250,420] },
  'Thailand':    { DEL: [120,250], BOM: [140,270], BLR: [130,260], HYD: [125,250], MAA: [115,230], LHR: [350,600], JFK: [550,850], DXB: [180,350] },
  'Indonesia':   { DEL: [200,380], BOM: [220,390], BLR: [210,375], HYD: [205,370], MAA: [195,355], LHR: [450,750], JFK: [650,950], DXB: [280,460] },
  'Malaysia':    { DEL: [100,200], BOM: [110,220], BLR: [100,210], HYD: [100,200], MAA: [90,185],  LHR: [300,500], JFK: [500,800], DXB: [150,300] },
  'Nepal':       { DEL: [60,130],  BOM: [80,160],  BLR: [90,180],  HYD: [85,170],  MAA: [85,175],  LHR: [350,600], JFK: [550,850], DXB: [200,380] },
  'Sri Lanka':   { DEL: [80,180],  BOM: [70,160],  BLR: [75,165],  HYD: [80,170],  MAA: [60,140],  LHR: [300,500], JFK: [500,800], DXB: [130,260] },
  'Japan':       { DEL: [280,500], BOM: [300,520], BLR: [290,510], HYD: [285,505], MAA: [280,500], LHR: [450,750], JFK: [550,900], DXB: [350,580] },
  'Dubai':       { DEL: [80,180],  BOM: [70,160],  BLR: [75,165],  HYD: [80,170],  MAA: [70,155],  LHR: [100,250], JFK: [400,700], DXB: [0,0] },
  'Jordan':      { DEL: [250,450], BOM: [270,470], BLR: [260,460], HYD: [255,455], MAA: [250,450], LHR: [150,300], JFK: [500,800], DXB: [120,250] },
  'Turkey':      { DEL: [300,550], BOM: [320,570], BLR: [310,560], HYD: [305,555], MAA: [300,550], LHR: [80,200],  JFK: [450,750], DXB: [150,300] },
  'Bahrain':     { DEL: [100,200], BOM: [90,190],  BLR: [95,195],  HYD: [85,180],  MAA: [80,175],  LHR: [200,400], JFK: [500,800], DXB: [50,120] },
  'Qatar':       { DEL: [90,190],  BOM: [85,180],  BLR: [88,185],  HYD: [82,178],  MAA: [80,175],  LHR: [180,380], JFK: [480,780], DXB: [60,130] },
  'Lebanon':     { DEL: [350,600], BOM: [370,620], BLR: [360,610], HYD: [355,605], MAA: [350,600], LHR: [150,350], JFK: [550,850], DXB: [180,350] },
  'Morocco':     { DEL: [450,750], BOM: [470,770], BLR: [460,760], HYD: [455,755], MAA: [450,750], LHR: [80,200],  JFK: [400,700], DXB: [280,500] },
  'Egypt':       { DEL: [200,380], BOM: [220,400], BLR: [210,390], HYD: [205,385], MAA: [200,380], LHR: [150,350], JFK: [500,800], DXB: [100,220] },
  'Kenya':       { DEL: [400,700], BOM: [380,680], BLR: [390,690], HYD: [395,695], MAA: [385,685], LHR: [300,550], JFK: [600,900], DXB: [280,500] },
  'Tanzania':    { DEL: [450,750], BOM: [430,730], BLR: [440,740], HYD: [445,745], MAA: [435,735], LHR: [350,600], JFK: [650,950], DXB: [300,550] },
  'South Africa':{ DEL: [500,850], BOM: [480,830], BLR: [490,840], HYD: [495,845], MAA: [485,835], LHR: [250,500], JFK: [700,1050],DXB: [380,650] },
  'Zambia':      { DEL: [550,900], BOM: [530,880], BLR: [540,890], HYD: [545,895], MAA: [535,885], LHR: [400,700], JFK: [750,1100],DXB: [420,700] },
  'Zimbabwe':    { DEL: [550,900], BOM: [530,880], BLR: [540,890], HYD: [545,895], MAA: [535,885], LHR: [400,700], JFK: [750,1100],DXB: [420,700] },
  'Colombia':    { DEL: [700,1100],BOM: [720,1120],BLR: [710,1110],HYD: [705,1105],MAA: [700,1100],LHR: [450,750], JFK: [250,500], DXB: [600,950] },
  'Peru':        { DEL: [750,1150],BOM: [770,1170],BLR: [760,1160],HYD: [755,1155],MAA: [750,1150],LHR: [500,800], JFK: [300,550], DXB: [650,1000]},
  'Argentina':   { DEL: [800,1200],BOM: [820,1220],BLR: [810,1210],HYD: [805,1205],MAA: [800,1200],LHR: [550,850], JFK: [350,600], DXB: [700,1050]},
  'Portugal':    { DEL: [450,800], BOM: [480,820], BLR: [470,810], HYD: [460,800], MAA: [455,795], LHR: [80,200],  JFK: [350,600], DXB: [380,650] },
  'Georgia':     { DEL: [200,380], BOM: [220,400], BLR: [215,390], HYD: [210,385], MAA: [210,385], LHR: [120,280], JFK: [450,750], DXB: [150,320] },
  'France':      { DEL: [400,750], BOM: [420,770], BLR: [410,760], HYD: [405,755], MAA: [400,750], LHR: [50,150],  JFK: [300,550], DXB: [350,600] },
  'Italy':       { DEL: [380,720], BOM: [400,740], BLR: [390,730], HYD: [385,725], MAA: [380,720], LHR: [60,180],  JFK: [320,580], DXB: [330,580] },
  'UK':          { DEL: [350,650], BOM: [370,670], BLR: [360,660], HYD: [355,655], MAA: [350,650], LHR: [0,0],     JFK: [250,500], DXB: [280,520] },
  'Mexico':      { DEL: [550,950], BOM: [570,970], BLR: [560,960], HYD: [555,950], MAA: [550,945], LHR: [350,600], JFK: [150,350], DXB: [500,850] },
};

const classMultiplier = { economy: 1, premium: 1.8, business: 3.5 };

function estimateFlight() {
  const origin = document.getElementById('flight-origin').value;
  const flightClass = document.getElementById('flight-class').value;
  const pax = parseInt(document.getElementById('flight-pax').value) || 1;
  const currency = Object.keys({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }).find(k => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }[k] === currentSymbol)) || 'INR';
  const data = flightCosts[currentDest.name]?.[origin];
  if (!data || data[0] === 0) { document.getElementById('flight-result').innerHTML = '<p class="news-loading">You\'re already there! No flight needed from this origin.</p>'; document.getElementById('flight-result').classList.add('show'); return; }
  const multiplier = classMultiplier[flightClass];
  const low = Math.round(data[0] * multiplier * pax * liveRates[currency]);
  const high = Math.round(data[1] * multiplier * pax * liveRates[currency]);
  const midUSD = ((data[0] + data[1]) / 2) * multiplier;
  const tripCostUSD = currentDays * currentDest.dailyCostUSD;
  const total = Math.round(((midUSD * pax) + tripCostUSD) * liveRates[currency]);
  const classLabels = { economy: 'Economy class', premium: 'Premium Economy', business: 'Business class' };
  const tips = { economy: 'Book 6-8 weeks ahead for best economy prices. Tuesday/Wednesday departures are typically cheapest.', premium: 'Premium Economy is 40-50% cheaper than Business but far more comfortable on long hauls.', business: 'Business class prices drop significantly 2-3 weeks before departure if seats are unsold.' };
  document.getElementById('flight-result').innerHTML = `
    <div class="flight-price">${currentSymbol}${low.toLocaleString()} – ${currentSymbol}${high.toLocaleString()}</div>
    <div class="flight-range">${classLabels[flightClass]} · ${pax} passenger${pax > 1 ? 's' : ''} · return trip estimate</div>
    <div class="flight-breakdown">
      <div class="flight-row"><span>Flight (per person)</span><span>${currentSymbol}${Math.round(data[0] * multiplier * liveRates[currency]).toLocaleString()} – ${currentSymbol}${Math.round(data[1] * multiplier * liveRates[currency]).toLocaleString()}</span></div>
      <div class="flight-row"><span>Accommodation (${currentDays} days)</span><span>${currentSymbol}${Math.round(tripCostUSD * 0.35 * liveRates[currency]).toLocaleString()} est.</span></div>
      <div class="flight-row"><span>Food & transport (${currentDays} days)</span><span>${currentSymbol}${Math.round(tripCostUSD * 0.65 * liveRates[currency]).toLocaleString()} est.</span></div>
      <div class="flight-row total-row"><span>Total trip estimate</span><span>${currentSymbol}${total.toLocaleString()}</span></div>
    </div>
    <div class="flight-tip">💡 ${tips[flightClass]}</div>
  `;
  document.getElementById('flight-result').classList.add('show');
}

function renderVisa(dest) {
  const container = document.getElementById('visa-info');
  const passportCode = document.getElementById('passport-country')?.value || 'IN';
  const tier = passportTiers[passportCode] || 'tier4';
  const passportName = passportNames[passportCode] || 'your';
  const destVisaData = visaDatabase[dest.name];
  if (!destVisaData) { container.innerHTML = '<p class="loading-msg">Visa info coming soon for this destination.</p>'; return; }
  const visa = destVisaData.overrides?.[passportCode] || destVisaData[tier];
  if (!visa) { container.innerHTML = '<p class="loading-msg">Visa info not available for this passport yet.</p>'; return; }
  container.innerHTML = `
    <div class="visa-card">
      <div class="visa-header">
        <span class="visa-status ${visa.status}">${visa.statusLabel}</span>
        <span class="visa-title">For ${passportName} passport holders</span>
      </div>
      <div class="visa-rows">
        <div class="visa-row"><span class="visa-key">Visa type</span><span class="visa-val">${visa.type || visa.statusLabel}</span></div>
        <div class="visa-row"><span class="visa-key">Max stay</span><span class="visa-val">${visa.duration}</span></div>
        <div class="visa-row"><span class="visa-key">Cost</span><span class="visa-val">${visa.cost}</span></div>
        <div class="visa-row"><span class="visa-key">Processing</span><span class="visa-val">${visa.processing}</span></div>
      </div>
      <div class="visa-note">📋 ${visa.note}</div>
    </div>
  `;
}

function filterDestinations() {
  const query = document.getElementById('dest-search').value.toLowerCase();
  const cards = document.querySelectorAll('.dest-card');
  cards.forEach(card => {
    const name = card.querySelector('.dest-name')?.textContent.toLowerCase() || '';
    const cities = card.querySelector('.dest-city')?.textContent.toLowerCase() || '';
    card.style.display = (name.includes(query) || cities.includes(query)) ? '' : 'none';
  });
}
function calculateBudget() {
  const origin = document.getElementById('bp-origin').value;
  const days = parseInt(document.getElementById('bp-days').value) || currentDays;
  const style = document.getElementById('bp-style').value;
  const people = parseInt(document.getElementById('bp-people').value) || 1;
  const flightClass = document.getElementById('bp-flight-class').value;
  const currency = Object.keys({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }).find(k => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }[k] === currentSymbol)) || 'INR';
  const rate = liveRates[currency] || 1;

  const styleMultiplier = { budget: 0.7, mid: 1.0, luxury: 2.2 };
  const multiplier = styleMultiplier[style];
  const classMultiplierMap = { economy: 1, premium: 1.8, business: 3.5 };
  const fClassMult = classMultiplierMap[flightClass];

  const dailyUSD = currentDest.dailyCostUSD * multiplier;
  const flightData = flightCosts[currentDest.name]?.[origin];
  const flightMidUSD = flightData ? ((flightData[0] + flightData[1]) / 2) * fClassMult : 0;
  const flightTotalUSD = flightMidUSD * people;
  const accomUSD = dailyUSD * 0.40 * days * people;
  const foodUSD = dailyUSD * 0.30 * days * people;
  const transportUSD = dailyUSD * 0.15 * days * people;
  const activitiesUSD = dailyUSD * 0.15 * days * people;
  const totalUSD = flightTotalUSD + accomUSD + foodUSD + transportUSD + activitiesUSD;
  const visa = visaDatabase[currentDest.name]?.[passportTiers[document.getElementById('passport-country')?.value || 'IN'] || 'tier3'];
  const visaCost = visa?.cost || 'Check visa tab';

  const fmt = usd => `${currentSymbol}${Math.round(usd * rate).toLocaleString()}`;
  const styleLabels = { budget: 'Budget traveller', mid: 'Mid-range comfort', luxury: 'Luxury' };

  document.getElementById('budget-result').classList.remove('hidden');
  document.getElementById('budget-result').innerHTML = `
    <div class="bp-header">
      <span class="bp-dest">${currentDest.flag} ${currentDest.name}</span>
      <span class="bp-style-tag">${styleLabels[style]}</span>
    </div>
    <div class="bp-total">${fmt(totalUSD)}</div>
    <div class="bp-total-label">${people} person${people > 1 ? 's' : ''} · ${days} days · ${flightClass}</div>
    <div class="bp-rows">
      ${flightData ? `<div class="bp-row"><span>✈️ Flights (${people} pax)</span><span>${fmt(flightTotalUSD)}</span></div>` : ''}
      <div class="bp-row"><span>🏨 Accommodation</span><span>${fmt(accomUSD)}</span></div>
      <div class="bp-row"><span>🍜 Food & drink</span><span>${fmt(foodUSD)}</span></div>
      <div class="bp-row"><span>🚌 Local transport</span><span>${fmt(transportUSD)}</span></div>
      <div class="bp-row"><span>🎟 Activities & tours</span><span>${fmt(activitiesUSD)}</span></div>
      <div class="bp-row"><span>🛂 Visa cost</span><span>${visaCost}</span></div>
      <div class="bp-row bp-total-row"><span>Total estimate</span><span>${fmt(totalUSD)}</span></div>
    </div>
    <p class="bp-note">💡 Budget style reduces daily costs by 30%. Luxury increases by 120%. Actual costs vary by season and booking timing.</p>
  `;
}

function populateCompareDropdown() {
  const sel = document.getElementById('compare-dest');
  sel.innerHTML = '<option value="">Select a destination to compare...</option>';
  destinations.forEach(d => {
    if (d.name !== currentDest?.name) {
      const opt = document.createElement('option');
      opt.value = d.name;
      opt.textContent = `${d.flag} ${d.name}`;
      sel.appendChild(opt);
    }
  });
}

function runComparison() {
  const compareName = document.getElementById('compare-dest').value;
  if (!compareName) { alert('Please select a destination to compare!'); return; }
  const compareDest = destinations.find(d => d.name === compareName);
  if (!compareDest || !currentDest) return;

  const currency = Object.keys({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }).find(k => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ', SAR: 'SAR ', BDT: '৳', NGN: '₦', PKR: '₨', BRL: 'R$', MXN: 'MX$', ZAR: 'R', TRY: '₺', CNY: '¥', JPY: '¥', KRW: '₩', CAD: 'CA$', AUD: 'A$' }[k] === currentSymbol)) || 'INR';
  const rate = liveRates[currency] || 1;
  const budgetUSD = (parseFloat(document.getElementById('budget').value) || 0) / rate;
  const daysA = currentDays;
  const daysB = Math.floor(budgetUSD / compareDest.dailyCostUSD);
  const fmt = usd => `${currentSymbol}${Math.round(usd * rate).toLocaleString()}`;

  const passportCode = document.getElementById('passport-country')?.value || 'IN';
  const tier = passportTiers[passportCode] || 'tier3';
  const visaA = visaDatabase[currentDest.name]?.[tier];
  const visaB = visaDatabase[compareDest.name]?.[tier];

  const experienceScores = { 'Japan': 10, 'Italy': 10, 'France': 10, 'Peru': 9.5, 'Morocco': 9.5, 'Turkey': 9.5, 'Jordan': 9, 'Colombia': 9, 'Argentina': 9, 'South Africa': 9, 'Thailand': 9, 'Vietnam': 8.5, 'Indonesia': 8.5, 'Portugal': 8.5, 'Georgia': 8.5, 'Kenya': 8.5, 'Tanzania': 8.5, 'Egypt': 8, 'Malaysia': 8, 'Dubai': 7.5, 'Sri Lanka': 8, 'Nepal': 8, 'Mexico': 8.5, 'Lebanon': 7.5, 'Qatar': 7, 'Bahrain': 6.5, 'Zambia': 7.5, 'Zimbabwe': 7.5 };
  const scoreA = experienceScores[currentDest.name] || 7;
  const scoreB = experienceScores[compareDest.name] || 7;

  const rows = [
    { label: 'Daily cost', a: fmt(currentDest.dailyCostUSD), b: fmt(compareDest.dailyCostUSD), winA: currentDest.dailyCostUSD <= compareDest.dailyCostUSD },
    { label: 'Days on budget', a: `${daysA} days`, b: `${daysB} days`, winA: daysA >= daysB },
    { label: 'Experience score', a: `${scoreA}/10`, b: `${scoreB}/10`, winA: scoreA >= scoreB },
    { label: 'Travel climate', a: currentDest.climate, b: compareDest.climate, winA: currentDest.climate === '✅ Stable' },
    { label: 'Currency', a: currentDest.currency, b: compareDest.currency, winA: null },
    { label: 'Visa (your passport)', a: visaA?.statusLabel || '—', b: visaB?.statusLabel || '—', winA: visaA?.status === 'visa-free' && visaB?.status !== 'visa-free' },
  ];

  const winsA = rows.filter(r => r.winA === true).length;
  const winsB = rows.filter(r => r.winA === false).length;
  const verdict = winsA > winsB ? currentDest : winsB > winsA ? compareDest : null;

  document.getElementById('compare-result').innerHTML = `
    <div class="cmp-header">
      <div class="cmp-dest">${currentDest.flag}<br><strong>${currentDest.name}</strong></div>
      <div class="cmp-vs">VS</div>
      <div class="cmp-dest">${compareDest.flag}<br><strong>${compareDest.name}</strong></div>
    </div>
    <div class="cmp-rows">
      ${rows.map(r => `
        <div class="cmp-row">
          <span class="cmp-val ${r.winA === true ? 'cmp-win' : r.winA === false ? '' : ''}">${r.a}</span>
          <span class="cmp-label">${r.label}</span>
          <span class="cmp-val ${r.winA === false ? 'cmp-win' : ''}">${r.b}</span>
        </div>
      `).join('')}
    </div>
    ${verdict ? `<div class="cmp-verdict">🏆 ${verdict.flag} <strong>${verdict.name}</strong> wins on more factors for your budget</div>` : `<div class="cmp-verdict">🤝 It\'s a close call — both destinations offer great value</div>`}
  `;
}

loadRates();
