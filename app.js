const FX_KEY = '6cee3b11b03b735abebc4606';
const NEWS_KEY = '914e6779a821425e9cee162390fa0484';

const destinations = [
  {
    name: 'Vietnam', flag: '🇻🇳', cities: 'Hanoi · Ho Chi Minh · Da Nang', currency: 'VND', dailyCostUSD: 25, badge: 'best',
    insight: 'One of the cheapest destinations in Asia — street food, hostels and transport are extremely affordable.', climate: '✅ Stable', newsQuery: 'Vietnam visa entry ban weather flood 2025',
    food: [
      { icon: '🍜', name: 'Pho Bo', desc: 'Iconic beef noodle soup — best had at street stalls before 9am. Look for places with plastic stools.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🥖', name: 'Banh Mi', desc: 'Vietnamese baguette sandwich with pate, pickled veg and chilli. Under $1 from street carts.', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🫕', name: 'Bun Cha', desc: 'Grilled pork with vermicelli and dipping broth — Hanoi\'s most famous dish. Famous from Obama\'s visit.', tag: 'Local Favourite', tagColor: '#2d1f4e', tagText: '#a78bfa' },
      { icon: '🥗', name: 'Cao Lau', desc: 'Thick noodles with pork and greens — only authentic in Hoi An due to the local well water used.', tag: 'Regional', tagColor: '#4a1010', tagText: '#f87171' },
    ],
    stay: [
      { icon: '🏨', name: 'Old Quarter Hostels, Hanoi', desc: 'Dorm beds from $5/night. Central, walkable, vibrant nightlife nearby. Best for solo travellers.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🏩', name: 'Hoi An Boutique Guesthouses', desc: 'Private rooms from $15-20/night in lantern-lit ancient town. Incredible value for the ambience.', tag: 'Mid Range', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🏖', name: 'Da Nang Beachfront Hotels', desc: 'Brand hotels on My Khe Beach from $40/night — genuinely world-class beach at a fraction of Thai prices.', tag: 'Comfort', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🛍', name: 'Ben Thanh Market, HCMC', desc: 'Iconic indoor market — clothing, souvenirs, street food. Bargain hard, start at 40% of asking price.', tag: 'Bargain', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎨', name: 'Hoi An Night Market', desc: 'Lanterns, silk clothing, hand-made gifts. Great for custom tailored clothes made overnight from $20.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '☕', name: 'Hanoi Weekend Market', desc: 'Local crafts, vintage items, Vietnamese coffee gear. Less touristy, more authentic than Ben Thanh.', tag: 'Local', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    itinerary: [
      { theme: 'Arrive in Hanoi', activities: [{ time: 'Morning', text: 'Arrive, check into Old Quarter hostel, walk Hoan Kiem Lake' }, { time: 'Afternoon', text: 'Visit Ho Chi Minh Mausoleum and Temple of Literature' }, { time: 'Evening', text: 'Pho Bo dinner at a street stall, Ta Hien Beer Street' }] },
      { theme: 'Hanoi Deep Dive', activities: [{ time: 'Morning', text: 'Hoa Lo Prison Museum, St Joseph\'s Cathedral' }, { time: 'Afternoon', text: 'Vietnam Museum of Ethnology' }, { time: 'Evening', text: 'Bun Cha dinner, rooftop bar in Old Quarter' }] },
      { theme: 'Halong Bay Day Trip', activities: [{ time: 'Full Day', text: 'Join a day cruise to Halong Bay — limestone karsts, kayaking, cave exploration' }, { time: 'Evening', text: 'Return to Hanoi, night train to Hue (book ahead)' }] },
      { theme: 'Hue — Imperial City', activities: [{ time: 'Morning', text: 'Imperial Citadel and Forbidden Purple City' }, { time: 'Afternoon', text: 'Thien Mu Pagoda by motorbike along Perfume River' }, { time: 'Evening', text: 'Bun Bo Hue (spicy beef noodle) for dinner — spicier than Hanoi pho' }] },
      { theme: 'Hoi An Arrival', activities: [{ time: 'Morning', text: 'Bus to Hoi An (3hrs), check into guesthouse' }, { time: 'Afternoon', text: 'Ancient Town walking tour — Japanese Bridge, merchant houses' }, { time: 'Evening', text: 'Night market, lantern release on the river' }] },
    ]
  },
  {
    name: 'Nepal', flag: '🇳🇵', cities: 'Kathmandu · Pokhara · Chitwan', currency: 'NPR', dailyCostUSD: 20, badge: 'best',
    insight: 'Extremely affordable — ideal for trekking and adventure travel on a tight budget.', climate: '✅ Stable', newsQuery: 'Nepal trekking permit earthquake landslide 2025',
    food: [
      { icon: '🥟', name: 'Momo', desc: 'Steamed or fried dumplings filled with buff (buffalo) or veg — Nepal\'s favourite street food. Everywhere for under $1.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🍛', name: 'Dal Bhat', desc: 'Lentil soup with rice, curry and pickles — the national meal. Most trekking lodges offer unlimited refills.', tag: 'Local Staple', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🍞', name: 'Sel Roti', desc: 'Sweet fried rice bread ring — popular at festivals and roadside stalls. Best eaten warm with tea.', tag: 'Street Food', tagColor: '#2d1f4e', tagText: '#a78bfa' },
      { icon: '🍵', name: 'Butter Tea (Tongba)', desc: 'Warm millet-based fermented drink in mountains — warming and traditional. Try in Pokhara lakeside cafes.', tag: 'Traditional', tagColor: '#4a1010', tagText: '#f87171' },
    ],
    stay: [
      { icon: '🏔', name: 'Thamel Guesthouses, Kathmandu', desc: 'Backpacker hub with rooms from $6-10/night. Everything walkable — gear shops, restaurants, tour agents.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🏞', name: 'Pokhara Lakeside Hotels', desc: 'Private rooms with Phewa Lake and Annapurna views from $12/night. Most peaceful base for trekking prep.', tag: 'Great Value', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '⛺', name: 'Annapurna Tea Houses', desc: 'Simple lodges on the trail from $3-8/night including dinner — buy Dal Bhat and room comes cheap or free.', tag: 'Trekking', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🧣', name: 'Thamel Market, Kathmandu', desc: 'Pashmina scarves, singing bowls, Thangka paintings, trekking gear. Bargain — start at 50% of asking.', tag: 'Handicrafts', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎵', name: 'Singing Bowls', desc: 'Hand-hammered Tibetan singing bowls are unique to Nepal. Asan Tole market has the best authentic ones.', tag: 'Unique', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🧥', name: 'North Face Gear (Knock-offs)', desc: 'Thamel is famous for trekking gear — quality varies, inspect carefully. Real bargains if you\'re patient.', tag: 'Practical', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    itinerary: [
      { theme: 'Arrive Kathmandu', activities: [{ time: 'Morning', text: 'Arrive, check into Thamel, recover from flight' }, { time: 'Afternoon', text: 'Swayambhunath (Monkey Temple) — panoramic valley views' }, { time: 'Evening', text: 'Momo dinner in Thamel, gear shopping if trekking' }] },
      { theme: 'Kathmandu Valley', activities: [{ time: 'Morning', text: 'Pashupatinath Temple — sacred Hindu cremation ghats on Bagmati River' }, { time: 'Afternoon', text: 'Boudhanath Stupa — one of the largest in the world, walk the kora' }, { time: 'Evening', text: 'Rooftop dinner overlooking stupa' }] },
      { theme: 'Bhaktapur Day Trip', activities: [{ time: 'Full Day', text: 'Ancient Newari city 13km from Kathmandu — Durbar Square, 55-Window Palace, pottery square' }, { time: 'Afternoon', text: 'Try Juju Dhau (king\'s yoghurt) — famous local specialty' }, { time: 'Evening', text: 'Return to Kathmandu' }] },
      { theme: 'Travel to Pokhara', activities: [{ time: 'Morning', text: 'Tourist bus to Pokhara (7hrs, scenic) or 25min flight' }, { time: 'Afternoon', text: 'Phewa Lake boating, Tal Barahi Temple island' }, { time: 'Evening', text: 'Lakeside strip — cafes, restaurants, mountain views at sunset' }] },
      { theme: 'Sarangkot Sunrise + Hike', activities: [{ time: '4:30am', text: 'Hike or taxi to Sarangkot for Annapurna sunrise — one of the great views in Asia' }, { time: 'Morning', text: 'World Peace Pagoda hike across the lake' }, { time: 'Afternoon', text: 'Paragliding from Sarangkot ($70-90) — most popular activity in Pokhara' }] },
    ]
  },
  {
    name: 'Thailand', flag: '🇹🇭', cities: 'Bangkok · Chiang Mai · Phuket', currency: 'THB', dailyCostUSD: 35, badge: 'great',
    insight: 'INR has strengthened vs THB recently — your money goes further than last year.', climate: '✅ Stable', newsQuery: 'Thailand travel warning flood protest visa 2025',
    food: [
      { icon: '🍜', name: 'Pad Thai', desc: 'Stir-fried rice noodles with shrimp, egg, bean sprouts and peanuts. Best from street woks at night markets.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🥘', name: 'Tom Yum Goong', desc: 'Spicy-sour prawn soup with lemongrass, galangal and kaffir lime — the defining Thai flavour.', tag: 'Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🥭', name: 'Mango Sticky Rice', desc: 'Fresh mango over coconut-steamed glutinous rice with coconut cream drizzle. Under $2 at markets.', tag: 'Dessert', tagColor: '#2d1f4e', tagText: '#a78bfa' },
      { icon: '🌶', name: 'Som Tum (Papaya Salad)', desc: 'Green papaya, chilli, lime, peanuts — refreshing and fiery. Order "mai pet" if you want it mild.', tag: 'Street Food', tagColor: '#4a1010', tagText: '#f87171' },
    ],
    stay: [
      { icon: '🏙', name: 'Khao San Road Hostels, Bangkok', desc: 'Party hostel central from $6/night. Loud at night but unbeatable location and social scene.', tag: 'Budget', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🌸', name: 'Nimman Area, Chiang Mai', desc: 'Hip boutique guesthouses from $20/night near cafes, night bazaar and Doi Suthep mountain.', tag: 'Mid Range', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🏝', name: 'Koh Lanta / Koh Tao Bungalows', budget: true, desc: 'Beach bungalows from $15-25/night — less touristy than Phuket with clearer water.', tag: 'Beach', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    shopping: [
      { icon: '🌃', name: 'Chatuchak Weekend Market, Bangkok', desc: 'World\'s largest weekend market — 15,000 stalls, clothing, art, plants, food. Go early before heat.', tag: 'Massive', tagColor: '#14532d', tagText: '#4ade80' },
      { icon: '🎪', name: 'Chiang Mai Night Bazaar', desc: 'Nightly market with hill tribe crafts, silk, silver jewellery and street food. Walking Street on Sundays.', tag: 'Night Market', tagColor: '#1e3a5f', tagText: '#60a5fa' },
      { icon: '🛺', name: 'Or Tor Kor Market, Bangkok', desc: 'Best quality fresh market in Bangkok — premium Thai produce, snacks, and prepared foods. Near Chatuchak.', tag: 'Food Market', tagColor: '#2d1f4e', tagText: '#a78bfa' },
    ],
    itinerary: [
      { theme: 'Bangkok Temples', activities: [{ time: 'Morning', text: 'Wat Phra Kaew (Temple of the Emerald Buddha) and Grand Palace — go early before crowds and heat' }, { time: 'Afternoon', text: 'Wat Pho (Reclining Buddha), longtail boat on Chao Phraya' }, { time: 'Evening', text: 'Khao San Road night scene, street food at Rambuttri' }] },
      { theme: 'Bangkok Modern', activities: [{ time: 'Morning', text: 'Chatuchak Weekend Market (if weekend) or Jim Thompson House' }, { time: 'Afternoon', text: 'Siam shopping malls, rooftop at MahaNakhon or King Power' }, { time: 'Evening', text: 'Chinatown (Yaowarat) street food crawl — best in Asia' }] },
      { theme: 'Travel to Chiang Mai', activities: [{ time: 'Morning', text: 'Overnight train or morning flight to Chiang Mai' }, { time: 'Afternoon', text: 'Old City moat walk, Wat Chedi Luang' }, { time: 'Evening', text: 'Sunday Walking Street if weekend, Night Bazaar otherwise' }] },
      { theme: 'Doi Suthep + Elephants', activities: [{ time: 'Morning', text: 'Doi Suthep temple mountain by songthaew — panoramic city views' }, { time: 'Afternoon', text: 'Ethical elephant sanctuary half-day visit (book ahead, $50-70)' }, { time: 'Evening', text: 'Nimman area cafes and cocktail bars' }] },
      { theme: 'Islands — Travel Day', activities: [{ time: 'Morning', text: 'Flight or bus-ferry combo to Koh Tao or Koh Lanta' }, { time: 'Afternoon', text: 'Check into beach bungalow, snorkel or swim' }, { time: 'Evening', text: 'Beach bar sunset, fresh seafood BBQ dinner' }] },
    ]
  },
  { name: 'Indonesia', flag: '🇮🇩', cities: 'Bali · Jakarta · Yogyakarta', currency: 'IDR', dailyCostUSD: 30, badge: 'great', insight: 'Bali remains one of the best value destinations for young travellers globally.', climate: '✅ Stable', newsQuery: 'Bali Indonesia volcano eruption travel ban 2025', food: [{ icon: '🍢', name: 'Nasi Goreng', desc: 'Indonesian fried rice with egg, kecap manis and crackers — the national dish, available everywhere.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥩', name: 'Babi Guling', desc: 'Balinese suckling pig — crispy skin, spiced meat. Ibu Oka in Ubud is the most famous spot.', tag: 'Bali Special', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🌴', name: 'Canggu Guesthouses', desc: 'Surf town with private rooms from $15/night — digital nomad cafes, rice field walks, beach sunsets.', tag: 'Trendy', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🎨', name: 'Ubud Art Market', desc: 'Woodcarvings, batik, silver jewellery, woven bags. Bargain firmly — start at 30% of first price.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Arrive Bali — Seminyak', activities: [{ time: 'Afternoon', text: 'Arrive Ngurah Rai airport, check into Canggu or Seminyak' }, { time: 'Evening', text: 'Sunset at Echo Beach or Tanah Lot temple' }] }, { theme: 'Ubud Culture Day', activities: [{ time: 'Morning', text: 'Sacred Monkey Forest, Ubud Palace, art market' }, { time: 'Afternoon', text: 'Rice terrace walk at Tegallalang' }, { time: 'Evening', text: 'Kecak fire dance at Uluwatu' }] }] },
  { name: 'Malaysia', flag: '🇲🇾', cities: 'Kuala Lumpur · Penang · Langkawi', currency: 'MYR', dailyCostUSD: 35, badge: 'great', insight: 'KL is one of the most affordable major cities in Asia with excellent infrastructure.', climate: '✅ Stable', newsQuery: 'Malaysia travel advisory flood safety 2025', food: [{ icon: '🍜', name: 'Char Kway Teow', desc: 'Flat rice noodles stir-fried with prawns, egg, bean sprouts and dark soy — Penang\'s signature dish.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥘', name: 'Nasi Lemak', desc: 'Coconut rice with sambal, anchovies, peanuts and egg — Malaysia\'s national breakfast. Under $1.50.', tag: 'National Dish', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Bukit Bintang, KL', desc: 'Central hotel hub from $20/night — walking distance to Petronas Towers, malls, night markets.', tag: 'Central', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🌆', name: 'Petaling Street, KL Chinatown', desc: 'Busy covered street market for clothing, accessories, souvenirs. Open late, very cheap.', tag: 'Market', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Kuala Lumpur', activities: [{ time: 'Morning', text: 'Petronas Twin Towers skybridge (book ahead), KLCC park' }, { time: 'Afternoon', text: 'Batu Caves by train — golden staircase, Hindu temple' }, { time: 'Evening', text: 'Jalan Alor night food street' }] }, { theme: 'Penang Food Trail', activities: [{ time: 'Morning', text: 'Ferry to Penang, George Town street art walk' }, { time: 'Afternoon', text: 'Penang Hill funicular, Kek Lok Si temple' }, { time: 'Evening', text: 'Gurney Drive hawker centre — ultimate Penang food experience' }] }] },
  { name: 'Sri Lanka', flag: '🇱🇰', cities: 'Colombo · Kandy · Ella', currency: 'LKR', dailyCostUSD: 28, badge: 'great', insight: 'Beautiful island with beaches, mountains and culture — great value post-recovery.', climate: '✅ Stable', newsQuery: 'Sri Lanka travel safety visa economy 2025', food: [{ icon: '🍛', name: 'Rice and Curry', desc: 'Multiple curries served with rice on a banana leaf — fish, dhal, coconut sambol. Sri Lankan spice is serious.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥞', name: 'Kottu Roti', desc: 'Chopped flatbread stir-fried with vegetables, egg and curry — the street food sound of Sri Lanka (loud!).', tag: 'Street Food', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏡', name: 'Ella Guesthouses', desc: 'Mountain village with rooms from $10-15/night — tea estates, jungle hikes, the famous nine-arch bridge.', tag: 'Scenic', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🍵', name: 'Ceylon Tea Shops', desc: 'Buy direct from Nuwara Eliya or Ella tea estates — freshest tea at lowest prices. Great gifts.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Colombo Arrival', activities: [{ time: 'Morning', text: 'Gangaramaya Temple, Pettah market district' }, { time: 'Afternoon', text: 'Dutch Hospital shopping precinct, Galle Face promenade' }, { time: 'Evening', text: 'Kottu Roti dinner at a local spot' }] }, { theme: 'Kandy — Temple City', activities: [{ time: 'Morning', text: 'Train to Kandy (scenic 3hr ride), check in' }, { time: 'Afternoon', text: 'Temple of the Tooth Relic, Kandy Lake walk' }, { time: 'Evening', text: 'Kandyan cultural dance show' }] }] },
  { name: 'Portugal', flag: '🇵🇹', cities: 'Lisbon · Porto · Algarve', currency: 'EUR', dailyCostUSD: 70, badge: 'good', insight: 'Cheapest country in Western Europe — great food, weather and safety for the price.', climate: '✅ Stable', newsQuery: 'Portugal wildfire protest visa Schengen 2025', food: [{ icon: '🐟', name: 'Bacalhau (Salt Cod)', desc: 'Portugal has 365 recipes for salt cod — one for every day. Bacalhau a Bras (with eggs and fries) is the classic.', tag: 'National Dish', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🥐', name: 'Pastel de Nata', desc: 'Custard tart with flaky pastry and cinnamon — best from Pasteis de Belem in Lisbon. Under €1.50.', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏛', name: 'Alfama Guesthouses, Lisbon', desc: 'Historic Moorish quarter with private rooms from €35/night — tiled facades, fado music at night.', tag: 'Atmospheric', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🪆', name: 'LX Factory, Lisbon', desc: 'Repurposed industrial space with indie shops, bookstores, vintage, Sunday market and rooftop bar.', tag: 'Trendy', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Lisbon Old City', activities: [{ time: 'Morning', text: 'Belem Tower and Jeronimos Monastery, pastel de nata at Pasteis de Belem' }, { time: 'Afternoon', text: 'Tram 28 through Alfama, Sao Jorge Castle' }, { time: 'Evening', text: 'Fado show in Alfama, ginjinha (cherry liqueur) at a tiny bar' }] }, { theme: 'Sintra Day Trip', activities: [{ time: 'Morning', text: 'Train to Sintra (40min) — Pena Palace, Moorish Castle' }, { time: 'Afternoon', text: 'Quinta da Regaleira secret garden and initiation well' }, { time: 'Evening', text: 'Return to Lisbon, Time Out Market dinner' }] }] },
  { name: 'Georgia', flag: '🇬🇪', cities: 'Tbilisi · Batumi · Kazbegi', currency: 'GEL', dailyCostUSD: 40, badge: 'great', insight: 'One of Europe\'s hidden gems — cheap wine, food, and stunning mountain scenery.', climate: '✅ Stable', newsQuery: 'Georgia Tbilisi protest political unrest safety 2025', food: [{ icon: '🥟', name: 'Khinkali', desc: 'Soup dumplings with spiced meat — bite the top, suck the broth, then eat the rest. Don\'t eat the knob.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🧀', name: 'Khachapuri', desc: 'Cheese-filled bread boat with egg and butter — Adjarian style is the famous boat version. Unmissable.', tag: 'Georgian Classic', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏰', name: 'Old Town Tbilisi Guesthouses', desc: 'Sulfur bath district rooms from $15-20/night — wooden balconies, vine-covered walls, city views.', tag: 'Charming', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🍷', name: 'Wine from Telavi', desc: 'Natural amber wine is Georgia\'s gift to the world — buy directly from Alazani Valley wineries.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Tbilisi Old Town', activities: [{ time: 'Morning', text: 'Narikala Fortress cable car, Old Town walk through sulfur bath district' }, { time: 'Afternoon', text: 'Metekhi Church cliff viewpoint, Shardeni wine street' }, { time: 'Evening', text: 'Khinkali dinner, Georgian polyphonic choir show' }] }, { theme: 'Kazbegi Mountains', activities: [{ time: 'Morning', text: 'Marshrutka to Kazbegi (3hrs) through Caucasus mountains' }, { time: 'Afternoon', text: 'Hike to Gergeti Trinity Church above the clouds at 2170m' }, { time: 'Evening', text: 'Mountain guesthouse dinner, star gazing' }] }] },
  { name: 'Mexico', flag: '🇲🇽', cities: 'Mexico City · Oaxaca · Tulum', currency: 'MXN', dailyCostUSD: 45, badge: 'good', insight: 'Incredible food and culture — your money stretches very well outside tourist hotspots.', climate: '⚠️ Check advisories', newsQuery: 'Mexico travel warning cartel safety advisory 2025', food: [{ icon: '🌮', name: 'Tacos al Pastor', desc: 'Spit-roasted pork with pineapple on corn tortilla — Mexico City\'s greatest contribution to humanity.', tag: 'Must Try', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🫔', name: 'Tlayuda (Oaxaca)', desc: 'Giant crispy tortilla with black beans, cheese, and tasajo meat — Oaxaca\'s iconic street food.', tag: 'Regional', tagColor: '#1e3a5f', tagText: '#60a5fa' }], stay: [{ icon: '🏙', name: 'Roma/Condesa, Mexico City', desc: 'Trendy neighbourhoods with boutique hotels from $35/night — tree-lined streets, great restaurants, safe.', tag: 'Recommended', tagColor: '#14532d', tagText: '#4ade80' }], shopping: [{ icon: '🎨', name: 'Mercado de Artesanias, Oaxaca', desc: 'Black clay pottery, woven textiles, mezcal, chocolate — Oaxaca has the best crafts in Mexico.', tag: 'Crafts', tagColor: '#14532d', tagText: '#4ade80' }], itinerary: [{ theme: 'Mexico City Arrival', activities: [{ time: 'Morning', text: 'Zocalo main square, Metropolitan Cathedral, Templo Mayor ruins' }, { time: 'Afternoon', text: 'Frida Kahlo Museum in Coyoacan (book ahead), colourful streets' }, { time: 'Evening', text: 'Tacos al Pastor at El Huequito, oldest taqueria in CDMX' }] }, { theme: 'Teotihuacan + Chapultepec', activities: [{ time: 'Morning', text: 'Teotihuacan pyramids day trip — climb Pyramid of the Sun for views' }, { time: 'Afternoon', text: 'Chapultepec Park, National Museum of Anthropology (world class, free)' }, { time: 'Evening', text: 'Roma neighbourhood bar hop, mezcal tasting' }] }] },
  { name: 'Japan', flag: '🇯🇵', cities: 'Tokyo · Osaka · Kyoto', currency: 'JPY', dailyCostUSD: 80, badge: 'good', insight: 'JPY is historically weak right now — making Japan more affordable than it has been in years.', climate: '✅ Stable', newsQuery: 'Japan earthquake typhoon visa overtourism 2025', food: [{ icon: '🍣', name: 'Conveyor Belt Sushi (Kaiten)', desc: 'Budget sushi from ¥100/plate at Sushiro or Kura Sushi — quality shocks most visitors. Under $15 for a full meal.', tag: 'Budget Friendly', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🍜', name: 'Ramen', desc: 'Regional styles vary dramatically — Sapporo (miso), Hakata (tonkotsu), Tokyo (shoyu). Under ¥1000 ($7).', tag: 'Must Try', tagColor: '#1e3a5f', tagText: '#60a5fa' }, { icon: '🍱', name: 'Convenience Store Food', desc: '7-Eleven and Lawson in Japan are genuinely excellent — onigiri, sandwiches, hot food. Unmissable experience.', tag: 'Unique to Japan', tagColor: '#2d1f4e', tagText: '#a78bfa' }], stay: [{ icon: '🛕', name: 'Tokyo Capsule Hotels', desc: 'Unique Japanese experience from $25/night — compact, clean, great locations. Book ahead always.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏯', name: 'Kyoto Guesthouses (Machiya)', desc: 'Renovated wooden townhouses from $40/night — tatami rooms, garden, authentic neighbourhood feel.', tag: 'Atmospheric', tagColor: '#1e3a5f', tagText: '#60a5fa' }], shopping: [{ icon: '🎮', name: 'Akihabara, Tokyo', desc: 'Electronics, anime, retro games, manga — multi-floor stores unlike anything outside Japan.', tag: 'Unique', tagColor: '#14532d', tagText: '#4ade80' }, { icon: '🏮', name: 'Nishiki Market, Kyoto', desc: 'Five-block covered market — pickles, tofu, street snacks, knives, matcha. Called "Kyoto\'s Kitchen".', tag: 'Food Market', tagColor: '#1e3a5f', tagText: '#60a5fa' }], itinerary: [{ theme: 'Tokyo Arrival', activities: [{ time: 'Morning', text: 'Senso-ji Temple in Asakusa — Tokyo\'s oldest, best before 8am' }, { time: 'Afternoon', text: 'Shibuya Crossing and Shibuya Sky observation deck' }, { time: 'Evening', text: 'Shinjuku Golden Gai — tiny bars, incredible atmosphere' }] }, { theme: 'Tokyo Modern', activities: [{ time: 'Morning', text: 'Harajuku Takeshita Street, Meiji Shrine forest walk' }, { time: 'Afternoon', text: 'teamLab Borderless digital art (book ahead), Odaiba' }, { time: 'Evening', text: 'Ramen at Ichiran (solo booth ramen — very Japanese)' }] }, { theme: 'Kyoto Temples', activities: [{ time: 'Morning', text: 'Fushimi Inari — 10,000 torii gates up the mountain, go before 7am for no crowds' }, { time: 'Afternoon', text: 'Arashiyama bamboo grove, Tenryu-ji garden' }, { time: 'Evening', text: 'Gion district geisha spotting, Pontocho alley dinner' }] }, { theme: 'Osaka Food Day', activities: [{ time: 'Morning', text: 'Osaka Castle park, surrounding moat walk' }, { time: 'Afternoon', text: 'Dotonbori street food crawl — takoyaki, okonomiyaki, kushikatsu' }, { time: 'Evening', text: 'Kuromon Market, Namba nightlife' }] }] },
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
  const symbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ' };
  currentSymbol = symbols[selectedCurrency] || selectedCurrency + ' ';
  const budgetUSD = parseFloat(budgetInput) / liveRates[selectedCurrency];
  const results = destinations.map(dest => {
    const days = Math.floor(budgetUSD / dest.dailyCostUSD);
    const dailyCostLocal = (dest.dailyCostUSD * liveRates[selectedCurrency]).toFixed(0);
    return { ...dest, days, dailyCostLocal };
  }).filter(d => d.days >= 1).sort((a, b) => b.days - a.days);
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
  document.getElementById('detail-budget-badge').textContent = `${currentSymbol}${(dest.dailyCostUSD * (liveRates[Object.keys(liveRates).find(k => { const sym = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ' }; return sym[k] === symbol; })] || 1)).toFixed(0)} / day`;
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
}

function renderItinerary() {
  const list = document.getElementById('itinerary-list');
  const itin = currentDest.itinerary;
  const totalDays = currentDays;
  let html = '';
  for (let i = 0; i < Math.min(totalDays, itin.length); i++) {
    const day = itin[i];
    html += `<div class="day-card"><div class="day-label">Day ${i + 1}</div><div class="day-title">${day.theme}</div><div class="day-activities">${day.activities.map(a => `<div class="activity"><span class="activity-time">${a.time}</span><span>${a.text}</span></div>`).join('')}</div></div>`;
  }
  if (totalDays > itin.length) {
    html += `<div class="day-card" style="border-style:dashed; border-color:#4f6ef7"><div class="day-label" style="color:#4f6ef7">Days ${itin.length + 1}–${totalDays}</div><div class="day-title">Explore at your own pace</div><div class="day-activities"><div class="activity"><span class="activity-time">Tip</span><span>With extra days, explore nearby regions, take day trips, or slow down and enjoy local life — the best travel moments are often unplanned.</span></div></div></div>`;
  }
  list.innerHTML = html;
}

function renderRecos(containerId, items) {
  const container = document.getElementById(containerId);
  if (!items || items.length === 0) { container.innerHTML = '<p class="loading-msg">Coming soon.</p>'; return; }
  container.innerHTML = items.map(item => `<div class="reco-card"><div class="reco-icon">${item.icon}</div><div class="reco-name">${item.name}</div><div class="reco-desc">${item.desc}</div><span class="reco-tag" style="background:${item.tagColor}; color:${item.tagText}">${item.tag}</span></div>`).join('');
}

function renderCards(results, currency) {
  const symbols = { INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ' };
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

loadRates();
// Visa data per destination (for Indian passport holders)
const visaData = {
  'Vietnam': { status: 'visa-free', statusLabel: 'Visa Free', duration: '45 days', type: 'E-visa also available', cost: 'Free', processing: 'Instant on arrival', note: 'Indian passport holders get 45-day visa-free access. E-visa available for $25 if you prefer pre-approval. Extension possible at immigration offices.' },
  'Thailand': { status: 'visa-on-arrival', statusLabel: 'Visa on Arrival', duration: '30 days', type: 'Visa on Arrival / E-visa', cost: '฿2,000 (~₹4,600)', processing: 'On arrival (30-60 min queue)', note: 'Get the e-visa before travel to skip the queue — ₹2,800 approx and takes 3 business days. Multiple entries not allowed on VOA.' },
  'Indonesia': { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', type: 'Visa Free', cost: 'Free', processing: 'Instant on arrival', note: 'India passport gets 30-day visa-free access to Bali and all Indonesia. No extension — you must exit and re-enter.' },
  'Malaysia': { status: 'visa-free', statusLabel: 'Visa Free', duration: '30 days', type: 'Visa Free', cost: 'Free', processing: 'Instant on arrival', note: 'Indian passport holders get 30-day visa-free entry. Very easy destination — no prior approval needed.' },
  'Nepal': { status: 'visa-free', statusLabel: 'Visa Free', duration: 'Unlimited', type: 'Visa Free', cost: 'Free', processing: 'Instant on arrival', note: 'Indian citizens do not need a visa or passport for Nepal — Aadhaar card or voter ID is sufficient. No limit on stay duration.' },
  'Sri Lanka': { status: 'visa-required', statusLabel: 'ETA Required', duration: '30 days', type: 'Electronic Travel Authorisation', cost: '$20 USD', processing: '24-48 hours online', note: 'Apply at eta.gov.lk before travel. Takes 24-48 hrs and costs $20. Do not use third party sites — only the official government portal.' },
  'Portugal': { status: 'visa-required', statusLabel: 'Schengen Visa Required', duration: '90 days in 180', type: 'Schengen Short Stay Visa', cost: '€90 (~₹8,100)', processing: '15-30 business days', note: 'Apply at VFS Global or the Portuguese Embassy. Book appointment early — slots fill fast. Requires bank statements, hotel bookings, travel insurance and itinerary.' },
  'Georgia': { status: 'visa-free', statusLabel: 'Visa Free', duration: '365 days', type: 'Visa Free', cost: 'Free', processing: 'Instant on arrival', note: 'One of the most generous visa policies in the world for Indian passport holders — 1 full year visa-free. No prior registration needed.' },
  'Mexico': { status: 'visa-free', statusLabel: 'Visa Free', duration: '180 days', type: 'Visa Free (with conditions)', cost: 'Free', processing: 'Instant on arrival', note: 'Indian passport holders with a valid US, UK, Canadian or Schengen visa get visa-free entry. Without one, a Mexican visa is required. Carry your US/Schengen visa just in case.' },
  'Japan': { status: 'visa-required', statusLabel: 'Visa Required', duration: '15-90 days', type: 'Tourist Visa', cost: '¥3,000 (~₹1,600)', processing: '5-7 business days', note: 'Apply at VFS Japan. Requires 3 months bank statements, leave letter, hotel bookings. Japan has recently relaxed some requirements — process is smoother than before.' },
};

// Flight cost data (USD estimates from Indian cities)
const flightCosts = {
  'Vietnam':    { DEL: [180,320], BOM: [200,340], BLR: [190,330], HYD: [185,320], MAA: [175,300], LHR: [400,700], JFK: [600,900], DXB: [250,420] },
  'Thailand':   { DEL: [120,250], BOM: [140,270], BLR: [130,260], HYD: [125,250], MAA: [115,230], LHR: [350,600], JFK: [550,850], DXB: [180,350] },
  'Indonesia':  { DEL: [200,380], BOM: [220,390], BLR: [210,375], HYD: [205,370], MAA: [195,355], LHR: [450,750], JFK: [650,950], DXB: [280,460] },
  'Malaysia':   { DEL: [100,200], BOM: [110,220], BLR: [100,210], HYD: [100,200], MAA: [90,185],  LHR: [300,500], JFK: [500,800], DXB: [150,300] },
  'Nepal':      { DEL: [60,130],  BOM: [80,160],  BLR: [90,180],  HYD: [85,170],  MAA: [85,175],  LHR: [350,600], JFK: [550,850], DXB: [200,380] },
  'Sri Lanka':  { DEL: [80,180],  BOM: [70,160],  BLR: [75,165],  HYD: [80,170],  MAA: [60,140],  LHR: [300,500], JFK: [500,800], DXB: [130,260] },
  'Portugal':   { DEL: [450,800], BOM: [480,820], BLR: [470,810], HYD: [460,800], MAA: [455,795], LHR: [80,200],  JFK: [350,600], DXB: [380,650] },
  'Georgia':    { DEL: [200,380], BOM: [220,400], BLR: [215,390], HYD: [210,385], MAA: [210,385], LHR: [120,280], JFK: [450,750], DXB: [150,320] },
  'Mexico':     { DEL: [550,950], BOM: [570,970], BLR: [560,960], HYD: [555,950], MAA: [550,945], LHR: [350,600], JFK: [150,350], DXB: [500,850] },
  'Japan':      { DEL: [280,500], BOM: [300,520], BLR: [290,510], HYD: [285,505], MAA: [280,500], LHR: [450,750], JFK: [550,900], DXB: [350,580] },
};

const classMultiplier = { economy: 1, premium: 1.8, business: 3.5 };

function estimateFlight() {
  const origin = document.getElementById('flight-origin').value;
  const flightClass = document.getElementById('flight-class').value;
  const pax = parseInt(document.getElementById('flight-pax').value) || 1;
  const dest = currentDest.name;
  const currency = Object.keys({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ' }).find(k => ({ INR: '₹', USD: '$', GBP: '£', EUR: '€', AED: 'د.إ' }[k] === currentSymbol)) || 'INR';

  const data = flightCosts[dest]?.[origin];
  if (!data) { document.getElementById('flight-result').innerHTML = '<p class="news-loading">No estimate available for this route.</p>'; document.getElementById('flight-result').classList.add('show'); return; }

  const multiplier = classMultiplier[flightClass];
  const low = Math.round(data[0] * multiplier * pax * liveRates[currency]);
  const high = Math.round(data[1] * multiplier * pax * liveRates[currency]);
  const midUSD = ((data[0] + data[1]) / 2) * multiplier;
  const tripCostUSD = currentDays * currentDest.dailyCostUSD;
  const totalUSD = (midUSD * pax) + tripCostUSD;
  const total = Math.round(totalUSD * liveRates[currency]);

  const classLabels = { economy: 'Economy class', premium: 'Premium Economy', business: 'Business class' };
  const tips = {
    economy: 'Book 6-8 weeks ahead for best economy prices. Tuesday/Wednesday departures are typically cheapest.',
    premium: 'Premium Economy is 40-50% cheaper than Business but far more comfortable on long hauls.',
    business: 'Business class prices drop significantly 2-3 weeks before departure if seats are unsold.',
  };

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
  const visa = visaData[dest.name];
  if (!visa) { container.innerHTML = '<p class="loading-msg">Visa info coming soon for this destination.</p>'; return; }
  container.innerHTML = `
    <div class="visa-card">
      <div class="visa-header">
        <span class="visa-status ${visa.status}">${visa.statusLabel}</span>
        <span class="visa-title">For Indian passport holders</span>
      </div>
      <div class="visa-rows">
        <div class="visa-row"><span class="visa-key">Visa type</span><span class="visa-val">${visa.type}</span></div>
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
