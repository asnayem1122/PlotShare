// PlotShare — Bangladesh Agricultural Land & Farming Platform
// Core Data Layer: Locations, Units, Crops, Seasons, and Translations

export const BANGLADESH_LOCATIONS = {
  divisions: [
    { id: 'rangpur', name_en: 'Rangpur', name_bn: 'রংপুর' },
    { id: 'rajshahi', name_en: 'Rajshahi', name_bn: 'রাজশাহী' },
    { id: 'dhaka', name_en: 'Dhaka', name_bn: 'ঢাকা' },
    { id: 'mymensingh', name_en: 'Mymensingh', name_bn: 'ময়মনসিংহ' },
    { id: 'khulna', name_en: 'Khulna', name_bn: 'খুলনা' },
    { id: 'chittagong', name_en: 'Chittagong', name_bn: 'চট্টগ্রাম' },
    { id: 'sylhet', name_en: 'Sylhet', name_bn: 'সিলেট' },
    { id: 'barishal', name_en: 'Barishal', name_bn: 'বরিশাল' }
  ],
  districts: [
    { id: 'dinajpur', division: 'rangpur', name_en: 'Dinajpur', name_bn: 'দিনাজপুর', upazilas: ['Birganj', 'Kaharole', 'Sadar', 'Birol', 'Fulbari', 'Nawabganj', 'Parbatipur'] },
    { id: 'rangpur_sadar', division: 'rangpur', name_en: 'Rangpur', name_bn: 'রংপুর', upazilas: ['Sadar', 'Mithapukur', 'Pirganj', 'Badarganj', 'Gangachara'] },
    { id: 'bogura', division: 'rajshahi', name_en: 'Bogura', name_bn: 'বগুড়া', upazilas: ['Sadar', 'Shibganj', 'Gabtali', 'Sherpur', 'Dhunat', 'Kahaloo'] },
    { id: 'rajshahi_sadar', division: 'rajshahi', name_en: 'Rajshahi', name_bn: 'রাজশাহী', upazilas: ['Paba', 'Godagari', 'Tanore', 'Bagha', 'Charghat', 'Durgapur'] },
    { id: 'chapainawabganj', division: 'rajshahi', name_en: 'Chapainawabganj', name_bn: 'চাঁপাইনবাবগঞ্জ', upazilas: ['Sadar', 'Shibganj', 'Gomostapur', 'Nachole', 'Bholahat'] },
    { id: 'mymensingh_sadar', division: 'mymensingh', name_en: 'Mymensingh', name_bn: 'ময়মনসিংহ', upazilas: ['Sadar', 'Trishal', 'Muktagachha', 'Fulbaria', 'Gaffargaon', 'Bhaluka'] },
    { id: 'cumilla', division: 'chittagong', name_en: 'Cumilla', name_bn: 'কুমিল্লা', upazilas: ['Adarsha Sadar', 'Chandina', 'Debidwar', 'Burichang', 'Daudkandi', 'Laksam'] },
    { id: 'jashore', division: 'khulna', name_en: 'Jashore', name_bn: 'যশোর', upazilas: ['Sadar', 'Jhikargachha', 'Manirampur', 'Sharsha', 'Keshabpur', 'Bagherpara'] },
    { id: 'tangail', division: 'dhaka', name_en: 'Tangail', name_bn: 'টাঙ্গাইল', upazilas: ['Sadar', 'Madhupur', 'Ghatail', 'Kalihati', 'Sakhipur', 'Dhanbari'] },
    { id: 'natore', division: 'rajshahi', name_en: 'Natore', name_bn: 'নাটোর', upazilas: ['Sadar', 'Singra', 'Gurudaspur', 'Baraigram', 'Lalpur', 'Bagatipara'] },
    { id: 'pabna', division: 'rajshahi', name_en: 'Pabna', name_bn: 'পাবনা', upazilas: ['Sadar', 'Ishwardi', 'Chatmohar', 'Santhia', 'Bera', 'Sujanagar'] },
    { id: 'kushtia', division: 'khulna', name_en: 'Kushtia', name_bn: 'কুষ্টিয়া', upazilas: ['Sadar', 'Kumarkhali', 'Daulatpur', 'Mirpur', 'Bheramara', 'Khoksa'] }
  ]
};

// Normalized Area Units (Standard base: Square Meters)
// 1 Decimal / Shotok = 40.4686 m²
export const AREA_CONVERTER = {
  toSquareMeters(value, unit) {
    const val = parseFloat(value) || 0;
    switch (unit) {
      case 'shotok':
      case 'decimal':
        return val * 40.4686;
      case 'katha':
        return val * 1.65 * 40.4686;
      case 'bigha':
        return val * 33 * 40.4686;
      case 'acre':
        return val * 100 * 40.4686;
      case 'hectare':
        return val * 10000;
      case 'sqm':
      default:
        return val;
    }
  },
  fromSquareMeters(sqm, targetUnit) {
    const s = parseFloat(sqm) || 0;
    switch (targetUnit) {
      case 'shotok':
      case 'decimal':
        return s / 40.4686;
      case 'katha':
        return s / (1.65 * 40.4686);
      case 'bigha':
        return s / (33 * 40.4686);
      case 'acre':
        return s / (100 * 40.4686);
      case 'hectare':
        return s / 10000;
      case 'sqm':
      default:
        return s;
    }
  },
  convert(val, fromUnit, toUnit) {
    const sqm = this.toSquareMeters(val, fromUnit);
    return this.fromSquareMeters(sqm, toUnit);
  },
  format(val, unit, lang = 'bn') {
    const num = parseFloat(val).toFixed(1).replace(/\.0$/, '');
    const localizedNum = lang === 'bn' ? this.toBanglaNum(num) : num;
    const unitNames = {
      shotok: { en: 'Shotok', bn: 'শতক' },
      decimal: { en: 'Decimal', bn: 'ডেসিমেল' },
      katha: { en: 'Katha', bn: 'কাঠা' },
      bigha: { en: 'Bigha', bn: 'বিঘা' },
      acre: { en: 'Acre', bn: 'একর' },
      hectare: { en: 'Hectare', bn: 'হেক্টর' }
    };
    const unitLabel = unitNames[unit] ? unitNames[unit][lang] : unit;
    return `${localizedNum} ${unitLabel}`;
  },
  toBanglaNum(numStr) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return String(numStr).replace(/[0-9]/g, (d) => bnDigits[d]);
  },
  toEnglishNum(numStr) {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    let str = String(numStr);
    bnDigits.forEach((d, i) => {
      str = str.split(d).join(i);
    });
    return str;
  }
};

// Bangladesh Agricultural Seasons
export const SEASONS = [
  {
    id: 'rabi',
    name_en: 'Rabi Season (Winter)',
    name_bn: 'রবি মৌসুম (শীতকালীন)',
    period_en: 'Mid November – Mid March',
    period_bn: 'কার্তিক – ফাল্গুন (নভেম্বর – মার্চ)',
    typical_crops: ['boro_rice', 'potato', 'mustard', 'wheat', 'tomato', 'onion', 'garlic', 'cauliflower', 'cabbage']
  },
  {
    id: 'kharif_1',
    name_en: 'Kharif-1 Season (Early Summer)',
    name_bn: 'খরিপ-১ মৌসুম (গ্রীষ্মকালীন)',
    period_en: 'Mid March – Mid July',
    period_bn: 'চৈত্র – আষাঢ় (মার্চ – জুলাই)',
    typical_crops: ['aus_rice', 'jute', 'cucumber', 'bitter_gourd', 'ridge_gourd', 'okra', 'spinach']
  },
  {
    id: 'kharif_2',
    name_en: 'Kharif-2 Season (Monsoon / Autumn)',
    name_bn: 'খরিপ-২ মৌসুম (বর্ষা / শরৎকালীন)',
    period_en: 'Mid July – Mid November',
    period_bn: 'শ্রাবণ – কার্তিক (জুলাই – নভেম্বর)',
    typical_crops: ['aman_rice', 'brinjal', 'papaya', 'radish', 'bottle_gourd']
  }
];

// Bangladesh Crops Knowledge Base
export const CROPS = [
  {
    id: 'boro_rice',
    name_en: 'Boro Rice',
    name_bn: 'বোরো ধান',
    category: 'grain',
    season: 'rabi',
    duration_days: 140,
    ideal_soil: ['loamy', 'clay'],
    water_req_en: 'High (Irrigation mandatory via Deep/Shallow tube well)',
    water_req_bn: 'উচ্চ (গভীর/অগভীর নলকূপের সেচ আবশ্যক)',
    fertilizer_per_shotok: { urea: '1.2 kg', tsp: '0.6 kg', mop: '0.7 kg', zinc: '0.1 kg' },
    est_yield_per_shotok: '25-30 kg (প্রায় ২৫-৩০ কেজি/শতক)',
    est_cost_per_shotok: 650,
    est_revenue_per_shotok: 1100
  },
  {
    id: 'aman_rice',
    name_en: 'Aman Rice',
    name_bn: 'আমন ধান',
    category: 'grain',
    season: 'kharif_2',
    duration_days: 125,
    ideal_soil: ['clay', 'loamy', 'silty'],
    water_req_en: 'Medium-High (Rain dependent + Supplementary irrigation)',
    water_req_bn: 'মাঝারি-উচ্চ (বৃষ্টি নির্ভর + সম্পূরক সেচ)',
    fertilizer_per_shotok: { urea: '0.9 kg', tsp: '0.5 kg', mop: '0.5 kg', gypsum: '0.2 kg' },
    est_yield_per_shotok: '22-26 kg (২২-২৬ কেজি/শতক)',
    est_cost_per_shotok: 500,
    est_revenue_per_shotok: 950
  },
  {
    id: 'potato',
    name_en: 'Potato (Diamond / Granola)',
    name_bn: 'আলু (ডায়মন্ড / কার্ডিনাল)',
    category: 'vegetable',
    season: 'rabi',
    duration_days: 90,
    ideal_soil: ['sandy_loam', 'loamy'],
    water_req_en: 'Medium (3-4 light irrigations)',
    water_req_bn: 'মাঝারি (৩-৪ টি হালকা সেচ)',
    fertilizer_per_shotok: { urea: '1.5 kg', tsp: '1.0 kg', mop: '1.2 kg', boron: '0.05 kg' },
    est_yield_per_shotok: '80-100 kg (৮০-১০০ কেজি/শতক)',
    est_cost_per_shotok: 1200,
    est_revenue_per_shotok: 2200
  },
  {
    id: 'mustard',
    name_en: 'Mustard (Tori-7 / BARI-14)',
    name_bn: 'সরিষা (বারি-১৪ / টোরি-৭)',
    category: 'oilseed',
    season: 'rabi',
    duration_days: 75,
    ideal_soil: ['loamy', 'sandy_loam'],
    water_req_en: 'Low-Medium (1-2 irrigations)',
    water_req_bn: 'কম-মাঝারি (১-২ টি সেচ)',
    fertilizer_per_shotok: { urea: '0.8 kg', tsp: '0.5 kg', mop: '0.4 kg', sulfur: '0.3 kg' },
    est_yield_per_shotok: '6-8 kg (৬-৮ কেজি/শতক)',
    est_cost_per_shotok: 350,
    est_revenue_per_shotok: 750
  },
  {
    id: 'onion',
    name_en: 'Winter Onion / Summer Onion',
    name_bn: 'পেঁয়াজ (তাহেরপুরী / বারি-৪)',
    category: 'spice',
    season: 'rabi',
    duration_days: 100,
    ideal_soil: ['loamy', 'silty_loam'],
    water_req_en: 'Medium (Frequent light irrigation)',
    water_req_bn: 'মাঝারি (নিয়মিত হালকা সেচ)',
    fertilizer_per_shotok: { urea: '1.0 kg', tsp: '0.8 kg', mop: '0.9 kg', sulfur: '0.4 kg' },
    est_yield_per_shotok: '50-65 kg (৫০-৬৫ কেজি/শতক)',
    est_cost_per_shotok: 1400,
    est_revenue_per_shotok: 2800
  },
  {
    id: 'tomato',
    name_en: 'Tomato (BARI Hybrid)',
    name_bn: 'টমেটো (বারি হাইব্রিড)',
    category: 'vegetable',
    season: 'rabi',
    duration_days: 110,
    ideal_soil: ['loamy', 'sandy_loam'],
    water_req_en: 'Medium (Regular irrigation, avoid waterlogging)',
    water_req_bn: 'মাঝারি (নিয়মিত সেচ, পানি নিষ্কাশন জরুরি)',
    fertilizer_per_shotok: { urea: '1.4 kg', tsp: '1.1 kg', mop: '1.0 kg', boron: '0.04 kg' },
    est_yield_per_shotok: '120-150 kg (১২০-১৫০ কেজি/শতক)',
    est_cost_per_shotok: 1500,
    est_revenue_per_shotok: 3200
  },
  {
    id: 'brinjal',
    name_en: 'Brinjal / Eggplant (Kajla / Islampuri)',
    name_bn: 'বেগুন (কাজলা / ইসলামপুরী)',
    category: 'vegetable',
    season: 'kharif_1',
    duration_days: 130,
    ideal_soil: ['loamy', 'sandy_loam', 'clay_loam'],
    water_req_en: 'Medium-High',
    water_req_bn: 'মাঝারি-উচ্চ',
    fertilizer_per_shotok: { urea: '1.2 kg', tsp: '0.9 kg', mop: '0.8 kg' },
    est_yield_per_shotok: '100-130 kg (১০০-১৩০ কেজি/শতক)',
    est_cost_per_shotok: 1100,
    est_revenue_per_shotok: 2500
  },
  {
    id: 'mango',
    name_en: 'Mango Orchard (Amrapali / Haribhanga)',
    name_bn: 'আম বাগান (আম্রপালি / হাঁড়িভাঙ্গা)',
    category: 'fruit',
    season: 'kharif_1',
    duration_days: 365,
    ideal_soil: ['loamy', 'clay_loam'],
    water_req_en: 'Seasonal irrigation during flowering & fruiting',
    water_req_bn: 'মুকুল ও গুটি আসার সময় সেচ',
    fertilizer_per_shotok: { urea: '2.0 kg', tsp: '1.5 kg', mop: '1.5 kg', organic: '10 kg' },
    est_yield_per_shotok: '150-200 kg (বার্ষিক)',
    est_cost_per_shotok: 2000,
    est_revenue_per_shotok: 7000
  },
  {
    id: 'jute',
    name_en: 'Tossa Jute (Golden Fibre)',
    name_bn: 'তোষা পাট (সোনালী আঁশ)',
    category: 'cash_crop',
    season: 'kharif_1',
    duration_days: 120,
    ideal_soil: ['silty_loam', 'alluvial'],
    water_req_en: 'Rainfed / High moisture requirement',
    water_req_bn: 'বৃষ্টি নির্ভর / আর্দ্রতা আবশ্যক',
    fertilizer_per_shotok: { urea: '0.9 kg', tsp: '0.4 kg', mop: '0.3 kg' },
    est_yield_per_shotok: '12-16 kg fiber (১২-১৬ কেজি আঁশ/শতক)',
    est_cost_per_shotok: 450,
    est_revenue_per_shotok: 900
  }
];

// Initial Farmland Listings
export const INITIAL_PLOTS = [
  {
    id: 'plot-101',
    title_en: '50 Shotok Fertile Paddy Land with Deep Tube Well',
    title_bn: '৫০ শতক উর্বর ধানি জমি (গভীর নলকূপের সেচসহ)',
    division: 'rangpur',
    district: 'dinajpur',
    upazila: 'Birganj',
    village_en: 'Mohonpur, Birganj',
    village_bn: 'মোহনপুর, বীরগঞ্জ',
    location_label_en: 'Birganj, Dinajpur',
    location_label_bn: 'বীরগঞ্জ, দিনাজপুর',
    area_shotok: 50,
    area_bigha: 1.51,
    soil_type_en: 'Loamy Soil (দোআঁশ মাটি)',
    soil_type_bn: 'উর্বর দোআঁশ মাটি',
    soil_type_key: 'loamy',
    irrigation_en: 'Deep Tube Well (Electric Line connected)',
    irrigation_bn: 'গভীর নলকূপ (বিদ্যুৎ চালিত নিজস্ব সেচ সংযোগ)',
    irrigation_key: 'deep_tubewell',
    elevation_en: 'Medium High Land (No flood risk)',
    elevation_bn: 'মাঝারি উঁচু জমি (বন্যা মুক্ত)',
    road_access_en: 'Paved Road access for tractors & pickups',
    road_access_bn: 'পাকা রাস্তার সাথে সংযোগ (ট্রাক্টর ও ট্রলি চলাচলের উপযোগী)',
    electricity: true,
    previous_crop_en: 'Aman Rice',
    previous_crop_bn: 'রোপা আমন ধান',
    suitable_crops_en: ['Boro Rice', 'Potato', 'Mustard', 'Maize'],
    suitable_crops_bn: ['বোরো ধান', 'আলু', 'সরিষা', 'ভুট্টা'],
    terms_type: 'seasonal_lease',
    terms_type_en: 'Seasonal Lease / Barga',
    terms_type_bn: 'মৌসুমি লিজ / বর্গা চাষ',
    price_bdt: 28000,
    price_unit_en: '/ Season (মৌসুম)',
    price_unit_bn: '/ মৌসুম',
    barga_split: '50:50 (Harvest Shared Equally)',
    barga_split_bn: '৫০:৫০ (ফসল সমানভাবে ভাগ)',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsBPFIE6sgdlb09X4ttUptcHKOhTZTTFPJWpqPChq5BbJ1LRB-GZISGWUB42jKVdb-F3V_w77Wxgon0UyDKFw5Vz054rNz6nPnyx7hF_TyF9KJPcdzGhJ0PfCKh1DaIXcos7PtOrO67QHPb20x_kFgcgdAuApa1-X9DazYvdb5tRnmIzsDp-jd1jXeGm2IjRbatU2oYninWH7IL3nq8VAdyoGMig7QRbmcDi7NX1gMOeSirsn5YgPHg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFBT09x9RLaPGc6X-0HI6k6kbkjsnEjWMCR4M-4Rv0__hj8RwFMQT4yLJapBZ963TsfEhHd7IaXnabl9QPbn17V5BtxR68SS99oi7Z6-b0lFPuLagNnzPvO4Z0PY_N-xUnFgX31EI1bAFu7h8rMxGYNBiUJR0nzKKYp5zEmnAm3XzyZuSPgTofIsrWOLrABSAMWA5MbUN4oON3HKGbkOYGHSFpAS8OpDeEVy4ihSxZFOqdKYjBk_nEQ'
    ],
    owner: {
      name_en: 'Alhaj Rafiqul Islam',
      name_bn: 'আলহাজ্ব রফিকুল ইসলাম',
      phone: '01712-XXXXXX',
      verified: true,
      rating: 4.9,
      completed_deals: 6,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADqkEMmuCMfXI2UfVnf8ee82dhRgbSPU1VWy4cQtfif-kuqQDD1meM6Id9oUv9haklLjD2PNhnaUmeLP1vh9aZ4_WW4_7M8E32mA_zilyf11LTcbDSIcfKje06-3Yg0hGyfcWOCtdUIzyUlp3NSYNQZh91BXdIdSEQaqdplbEI2XceBOB2n5PiXbNwfyFwrN_30i4TK04T41hQ9e41Cz2uMCubtEyXdtq8pTf6ATJlfhYQGVqp-fmZ_w'
    },
    description_en: 'Prime agricultural land with guaranteed water irrigation all year round. The soil is exceptionally rich in organic matter. Perfect for immediate Boro rice transplantation or intensive winter potato cultivation. Landowner lives nearby and supports diligent growers.',
    description_bn: 'সারা বছর নিশ্চিত সেচ সুবিধাসহ উর্বর ধানি জমি। দোআঁশ মাটি হওয়ায় ফলন অত্যন্ত ভালো হয়। বর্তমান রবি মৌসুমে বোরো ধান বা আলু চাষের জন্য পুরোপুরি প্রস্তুত। জমির মালিক বীরগঞ্জেই থাকেন এবং সৎ ও পরিশ্রমী চাষীকে অগ্রাধিকার দেবেন।'
  },
  {
    id: 'plot-102',
    title_en: '2 Bigha Sandy-Loam Vegetable Land with Canal Access',
    title_bn: '২ বিঘা বেলে-দোআঁশ সবজি জমি (খাল ও পাম্প সেচসহ)',
    division: 'rajshahi',
    district: 'bogura',
    upazila: 'Shibganj',
    village_en: 'Mokarimpur, Shibganj',
    village_bn: 'মোকামপাড়া, শিবগঞ্জ',
    location_label_en: 'Shibganj, Bogura',
    location_label_bn: 'শিবগঞ্জ, বগুড়া',
    area_shotok: 66,
    area_bigha: 2.0,
    soil_type_en: 'Sandy Loam (বেলে দোআঁশ)',
    soil_type_bn: 'বেলে দোআঁশ মাটি (সবজির জন্য সেরা)',
    soil_type_key: 'sandy_loam',
    irrigation_en: 'Canal Pump & Shallow Tube Well',
    irrigation_bn: 'খাল থেকে পাম্প ও অগভীর নলকূপ',
    irrigation_key: 'canal_shallow',
    elevation_en: 'High Land (উঁচু জমি)',
    elevation_bn: 'উঁচু জমি (পানি জমে না)',
    road_access_en: 'Direct Union road connection',
    road_access_bn: 'ইউনিয়ন পাকা রাস্তার সাথে সংযোগ',
    electricity: true,
    previous_crop_en: 'Cauliflower & Chili',
    previous_crop_bn: 'ফুলকপি ও কাঁচামরিচ',
    suitable_crops_en: ['Potato', 'Tomato', 'Cabbage', 'Chili', 'Onion'],
    suitable_crops_bn: ['আলু', 'টমেটো', 'বাঁধাকপি', 'মরিচ', 'পেঁয়াজ'],
    terms_type: 'annual_lease',
    terms_type_en: 'Annual Lease',
    terms_type_bn: 'বার্ষিক লিজ / চুক্তি',
    price_bdt: 45000,
    price_unit_en: '/ Year (বছর)',
    price_unit_bn: '/ বছর',
    barga_split: '60:40 (Farmer 60%, Owner 40%)',
    barga_split_bn: '৬০:৪০ (চাষী ৬০%, মালিক ৪০%)',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDL1YGGj3stN6Y9hiwekbJQeN698i0Qvgg0E1ROkqqOFcPChjS6yDknedV1DEKm6hoU-ECP_HJk0uV3cwxw1sX5YJqtOEGyBtBBOEcFZY9dDhbkMB8llwVsnDoOntKM2JINmUKLjm1RnQ-ytWH-gC6CaCMC35sSj1jN_bwZUQ9yMYKRY1-9e74uUZ8JmwYZarQfzz16Z_Gn7X1JIakphKnEFD397SMZzl0M8y_43eEj3Sc1E9XKDOf9aA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAZRLnERXPxZo8W6IoL8XsRc4v4ImrvqbC0df-uRd5LiYXsoEOW5Pa7tACRrmOA1G2P711McyLctdqW0K2I4_wQtLGcKSrAxk5TvosUtJCp1FOeTphy1xfx0cPJkhCecr9hllcjHq8Y90aly-EqVkyLM1J5yKLB7W_KENPF89gSnEriwst04fKBrrRYwxhHs75yobS5J5Sg2b9-4wPJXfp-U4e1D4MzAsQLQhQ81Dk88jPM1Z9dLms-nQ'
    ],
    owner: {
      name_en: 'Md. Tariqul Hasan',
      name_bn: 'মো: তারিকুল হাসান',
      phone: '01819-XXXXXX',
      verified: true,
      rating: 4.8,
      completed_deals: 4,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9lGu5aTZJ71H5DeOOwM8te1cour7NZIEOJhrBkzYAHvjPbGHOkHq_p3WDrKmM653Iu0sAkzUA8Yzk_Hapagtai0V3Z8C-nxJHj3ZkJpr9H7BwQWFLzPy8b-2GyaSehMqHSR8R1ATyUnEczokjJVMiAMRiNHYxtmHz71UIgaHbxrIAZ6-UCH0R2yyB0ar9332OK4yNkaPHJn8tH40tob3DCQmSG4cEC1q6VfaUcqbf6IOIZ35AqWZhvg'
    },
    description_en: 'Bogura Shibganj is known across Bangladesh for highest quality commercial vegetables. This 2-bigha plot has excellent topsoil, drainage, and direct road connectivity to Mahasthangarh vegetable wholesale market.',
    description_bn: 'বগুড়ার শিবগঞ্জের বিখ্যাত সবজি চাষের উপযোগী জমি। উঁচু জমি হওয়ায় বর্ষা বা অতিরিক্ত বৃষ্টিতেও কোনো পানি জমে না। মহাস্থানগড় কাঁচাবাজারের সাথে সহজ যোগাযোগ। বাণিজ্যিক সবজি বা আলু চাষের জন্য আদর্শ।'
  },
  {
    id: 'plot-103',
    title_en: '1.5 Acre Mango Orchard with Intercropping Space',
    title_bn: '১.৫ একর আম বাগান ও সাথী ফসল চাষের জমি',
    division: 'rajshahi',
    district: 'chapainawabganj',
    upazila: 'Shibganj',
    village_en: 'Kansat, Shibganj',
    village_bn: 'কানসাট, শিবগঞ্জ',
    location_label_en: 'Kansat, Chapainawabganj',
    location_label_bn: 'কানসাট, চাঁপাইনবাবগঞ্জ',
    area_shotok: 150,
    area_bigha: 4.54,
    soil_type_en: 'Alluvial Loamy (পলি দোআঁশ)',
    soil_type_bn: 'উর্বর পলি দোআঁশ মাটি',
    soil_type_key: 'loamy',
    irrigation_en: 'Deep Tube Well with Drip lines',
    irrigation_bn: 'গভীর নলকূপ ও পাইপলাইন সেচ ব্যবস্থা',
    irrigation_key: 'deep_tubewell',
    elevation_en: 'High Land (উঁচু জমি)',
    elevation_bn: 'উঁচু জমি',
    road_access_en: 'Pucca road beside Kansat market',
    road_access_bn: 'কানসাট বাজারের কাছে পাকা রাস্তা',
    electricity: true,
    previous_crop_en: 'Mango + Turmeric & Ginger',
    previous_crop_bn: 'আম + আদা ও হলুদ',
    suitable_crops_en: ['Mango', 'Turmeric', 'Ginger', 'Mustard', 'Grass Pea'],
    suitable_crops_bn: ['আম', 'হলুদ', 'আদা', 'সরিষা', 'খেসারি ডাল'],
    terms_type: 'sharecropping',
    terms_type_en: 'Barga / Sharecropping (বর্গা চাষ)',
    terms_type_bn: 'বর্গা চাষ (৫০:৫০ চুক্তি)',
    price_bdt: 60000,
    price_unit_en: '/ Year or Harvest share',
    price_unit_bn: '/ বছর বা ফসল ভাগ',
    barga_split: '50:50 (Crop & Fruit Shared Equally)',
    barga_split_bn: '৫০:৫০ (আম ও সাথী ফসলের সমান ভাগ)',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwKZgwW-InJZt3WFmxWC_J2OB1uUz9TyRuPTruM3e7D7iuVsr-4a_SMzBgm1lDYG7pT2lBJIx8x_LvC936NW2kcf06KNMdnr1hfVUp1wuJ8fGwh0y8Z1m79Z29N_dOqLIQSJ03lOqpZkdWa25olsV4K5N8GIPzsmRoL6bv84-MrGvYLCfMKaNTfdGHmKJ6W5PUXYcD-hqJ2WzApX2sVbfEa5lZLpGOnmsxuHg0tAFkypXrtQVqQihoog',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvnd_x4Xk8kHpQatHXkoD3LhCNAHrl-1_vj3K7YiKUyL2XFY-rOFFKdZKC9j5h777i8pbyBA2lItfgYjNHB1ivrEKn6uxiSXUFoxZSX6DZwV2MpEnSaV4b7ioF9woYz1_FcquF5mgg4GirjxIk46OgcufLJLtJSEnostpeoId40ZKdZTEoH1js9n4Pk0l0F19V2G9ePQYvGY8yB8Vkhpu7j_2VU7eoYY4BwsoA8bmyN7jHfRkeUE5rGg'
    ],
    owner: {
      name_en: 'Dr. Shahriar Alam',
      name_bn: 'ডা: শাহরিয়ার আলম',
      phone: '01911-XXXXXX',
      verified: true,
      rating: 5.0,
      completed_deals: 8,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADqkEMmuCMfXI2UfVnf8ee82dhRgbSPU1VWy4cQtfif-kuqQDD1meM6Id9oUv9haklLjD2PNhnaUmeLP1vh9aZ4_WW4_7M8E32mA_zilyf11LTcbDSIcfKje06-3Yg0hGyfcWOCtdUIzyUlp3NSYNQZh91BXdIdSEQaqdplbEI2XceBOB2n5PiXbNwfyFwrN_30i4TK04T41hQ9e41Cz2uMCubtEyXdtq8pTf6ATJlfhYQGVqp-fmZ_w'
    },
    description_en: '120 mature Amrapali and Fazli mango trees with ample open rows suitable for high-profit intercropping such as turmeric, ginger, and mustard. Landowner provides organic fertilizers and spray equipment costs 50%.',
    description_bn: '১২০টি ফলবান আম্রপালি ও ফজলি আমের গাছসহ বাগান। সারির মাঝে প্রচুর ফাঁকা জমি রয়েছে যেখানে আদা, হলুদ বা সরিষা চাষ করে প্রচুর লাভ করা সম্ভব। বালাইনাশক ও সেচের খরচের ৫০% মালিক বহন করবেন।'
  },
  {
    id: 'plot-104',
    title_en: '33 Shotok (1 Bigha) Prime Land for Mustard & Aus Rice',
    title_bn: '৩৩ শতক (১ বিঘা) সরিষা ও আউশ ধানের জন্য উপযোগী জমি',
    division: 'mymensingh',
    district: 'mymensingh_sadar',
    upazila: 'Trishal',
    village_en: 'Dhanikhola, Trishal',
    village_bn: 'ধানীখোলা, ত্রিশাল',
    location_label_en: 'Trishal, Mymensingh',
    location_label_bn: 'ত্রিশাল, ময়মনসিংহ',
    area_shotok: 33,
    area_bigha: 1.0,
    soil_type_en: 'Clay Loam (এঁটেল দোআঁশ)',
    soil_type_bn: 'এঁটেল দোআঁশ মাটি',
    soil_type_key: 'clay_loam',
    irrigation_en: 'Electric Tube Well + Pond',
    irrigation_bn: 'বিদ্যুৎ চালিত নলকূপ ও পুকুর',
    irrigation_key: 'tubewell_pond',
    elevation_en: 'Medium High',
    elevation_bn: 'মাঝারি উঁচু',
    road_access_en: 'Accessible by Power Tiller and Van',
    road_access_bn: 'পাওয়ার টিলার ও ভ্যান চলাচলের রাস্তা',
    electricity: true,
    previous_crop_en: 'Aman Rice',
    previous_crop_bn: 'আমন ধান',
    suitable_crops_en: ['Mustard', 'Boro Rice', 'Wheat', 'Vegetables'],
    suitable_crops_bn: ['সরিষা', 'বোরো ধান', 'গম', 'শীতকালীন সবজি'],
    terms_type: 'seasonal_lease',
    terms_type_en: 'Seasonal Lease',
    terms_type_bn: 'মৌসুমি লিজ',
    price_bdt: 18000,
    price_unit_en: '/ Season',
    price_unit_bn: '/ মৌসুম',
    barga_split: '50:50',
    barga_split_bn: '৫০:৫০',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCKFBT09x9RLaPGc6X-0HI6k6kbkjsnEjWMCR4M-4Rv0__hj8RwFMQT4yLJapBZ963TsfEhHd7IaXnabl9QPbn17V5BtxR68SS99oi7Z6-b0lFPuLagNnzPvO4Z0PY_N-xUnFgX31EI1bAFu7h8rMxGYNBiUJR0nzKKYp5zEmnAm3XzyZuSPgTofIsrWOLrABSAMWA5MbUN4oON3HKGbkOYGHSFpAS8OpDeEVy4ihSxZFOqdKYjBk_nEQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMsBPFIE6sgdlb09X4ttUptcHKOhTZTTFPJWpqPChq5BbJ1LRB-GZISGWUB42jKVdb-F3V_w77Wxgon0UyDKFw5Vz054rNz6nPnyx7hF_TyF9KJPcdzGhJ0PfCKh1DaIXcos7PtOrO67QHPb20x_kFgcgdAuApa1-X9DazYvdb5tRnmIzsDp-jd1jXeGm2IjRbatU2oYninWH7IL3nq8VAdyoGMig7QRbmcDi7NX1gMOeSirsn5YgPHg'
    ],
    owner: {
      name_en: 'Anisur Rahman',
      name_bn: 'আনিসুর রহমান',
      phone: '01733-XXXXXX',
      verified: true,
      rating: 4.7,
      completed_deals: 3,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADqkEMmuCMfXI2UfVnf8ee82dhRgbSPU1VWy4cQtfif-kuqQDD1meM6Id9oUv9haklLjD2PNhnaUmeLP1vh9aZ4_WW4_7M8E32mA_zilyf11LTcbDSIcfKje06-3Yg0hGyfcWOCtdUIzyUlp3NSYNQZh91BXdIdSEQaqdplbEI2XceBOB2n5PiXbNwfyFwrN_30i4TK04T41hQ9e41Cz2uMCubtEyXdtq8pTf6ATJlfhYQGVqp-fmZ_w'
    },
    description_en: 'Ideal 1-bigha plot in Dhanikhola, Trishal with very fertile clay-loam soil. Ready for instant Mustard sowing or upcoming Boro rice transplantation. Clean water source from adjoining deep pond and motor.',
    description_bn: 'ময়মনসিংহের ত্রিশালে উর্বর ১ বিঘা জমি। সরিষা বা বোরো ধান আবাদের জন্য উপযুক্ত। নিজস্ব পুকুর ও বৈদ্যুতিক মোটর থাকায় সেচের কোনো সমস্যা নেই।'
  }
];

// Active Farm Mock Data for Current User (Farmer Persona)
export const CURRENT_FARM_DATA = {
  farmer_name_en: 'Rahim Uddin',
  farmer_name_bn: 'রহিম উদ্দিন',
  farmer_type_en: 'Seasonal Commercial Grower & Farmer',
  farmer_type_bn: 'বাণিজ্যিক চাষী ও উদ্যোক্তা',
  location_en: 'Birganj, Dinajpur',
  location_bn: 'বীরগঞ্জ, দিনাজপুর',
  krishi_card_verified: true,
  krishi_card_no: 'KRISHI-BD-894210',
  active_crops: [
    {
      id: 'crop-active-1',
      crop_name_en: 'Boro Rice (BRRI dhan-28)',
      crop_name_bn: 'বোরো ধান (ব্রি ধান-২৮)',
      plot_name_en: 'Mohonpur East Plot (Plot #101)',
      plot_name_bn: 'বীরগঞ্জ মোহনপুর পূর্ব খেত',
      area_shotok: 25,
      planting_date: '2026-01-08',
      current_day: 38,
      total_days: 140,
      progress_pct: 42,
      stage_en: 'Tillering Stage (কুশি গজানোর পর্যায়)',
      stage_bn: 'কুশি গজানোর পর্যায় (Tillering)',
      next_task_en: 'Apply 2nd round Urea & Zinc fertilizer before morning watering',
      next_task_bn: '২য় কিস্তির ইউরিয়া ও জিংক সার প্রয়োগ এবং পরিমিত সেচ প্রদান করুন',
      irrigation_status_en: 'Water Level Optimal (2-3 inches)',
      irrigation_status_bn: 'পানির স্তর সঠিক আছে (২-৩ ইঞ্চি)',
      expenses_bdt: 14500,
      est_revenue_bdt: 32000,
      est_profit_bdt: 17500
    },
    {
      id: 'crop-active-2',
      crop_name_en: 'Diamond Potato (আলু)',
      crop_name_bn: 'ডায়মন্ড আলু (উচ্চ ফলনশীল)',
      plot_name_en: 'Shibganj West Bigha (Plot #102)',
      plot_name_bn: 'শিবগঞ্জ পশ্চিম বিঘা',
      area_shotok: 33,
      planting_date: '2025-11-20',
      current_day: 85,
      total_days: 90,
      progress_pct: 94,
      stage_en: 'Maturity & Pre-Harvest (পরিপক্কতা ও উত্তোলনের দ্বারপ্রান্তে)',
      stage_bn: 'পরিপক্কতা ও উত্তোলনের দ্বারপ্রান্তে',
      next_task_en: 'Stop irrigation, prepare storage sacks, harvest in 5 days',
      next_task_bn: 'সেচ বন্ধ রাখুন, বস্তা প্রস্তুত করুন, ৫ দিনের মধ্যে আলু উত্তোলন শুরু হবে',
      irrigation_status_en: 'Irrigation Suspended for Harvest',
      irrigation_status_bn: 'উত্তোলনের জন্য সেচ বন্ধ',
      expenses_bdt: 28000,
      est_revenue_bdt: 58000,
      est_profit_bdt: 30000
    }
  ],
  tasks_today: [
    {
      id: 'task-1',
      title_en: 'Check field water depth & apply Zinc Sulfate (250g/shotok)',
      title_bn: 'ধান ক্ষেতের পানির গভীরতা পরীক্ষা করুন ও জিংক সালফেট প্রয়োগ করুন',
      crop: 'Boro Rice',
      urgency: 'high',
      done: false
    },
    {
      id: 'task-2',
      title_en: 'Weather Alert: Rain forecasted tomorrow in Dinajpur — Hold off on irrigation',
      title_bn: 'আবহাওয়া বার্তা: আগামীকাল দিনাজপুরে বৃষ্টির সম্ভাবনা — আজকের সেচ স্থগিত রাখুন',
      crop: 'General',
      urgency: 'medium',
      done: false
    },
    {
      id: 'task-3',
      title_en: 'Prepare 50 plastic crates and labor for potato harvest on Friday',
      title_bn: 'শুক্রবার আলু উত্তোলনের জন্য ৫০টি প্লাস্টিক ক্রেট ও শ্রমিক প্রস্তুত রাখুন',
      crop: 'Potato',
      urgency: 'medium',
      done: true
    }
  ]
};

// Bilingual UI Text Dictionary
export const DICTIONARY = {
  bn: {
    app_name: 'প্লটশেয়ার',
    tagline: 'জমি খুঁজুন, চাষ করুন, ফলন বাড়ান।',
    switch_lang: 'English',
    home: 'হোম',
    explore: 'জমি খুঁজুন',
    list_plot: 'জমি দিন',
    my_farm: 'আমার খামার',
    ai_assistant: 'কৃষি সহায়ক',
    community: 'কমিউনিটি',
    marketplace: 'বাজারদর / ফসল',
    notifications: 'বার্তা',
    profile: 'প্রোফাইল',
    greeting: 'আসসালামু আলাইকুম, রহিম উদ্দিন 👋',
    hero_search_placeholder: 'জেলা, উপজেলা বা ফসল লিখে খুঁজুন...',
    nearby_plots: 'আশেপাশের কৃষি জমি',
    view_all: 'সব দেখুন',
    ai_advisory_title: 'প্লটশেয়ার এআই কৃষি সহায়ক',
    ai_weather_tip: 'আগামীকাল বিকেলে দিনাজপুরে হালকা বৃষ্টির সম্ভাবনা রয়েছে। আজ জমিতে সেচ না দিয়ে পানি ধরে রাখার প্রস্তুতি নিন।',
    view_details: 'বিস্তারিত দেখুন',
    request_land: 'এই জমি চাষের জন্য চান',
    request_barga: 'বর্গা / লিজের প্রস্তাব পাঠান',
    soil: 'মাটি',
    area: 'জমির পরিমাণ',
    irrigation: 'সেচ ব্যবস্থা',
    elevation: 'উচ্চতা',
    road_access: 'রাস্তা সংযোগ',
    suitable_crops: 'উপযুক্ত ফসল',
    previous_crop: 'পূর্ববর্তী ফসল',
    owner: 'জমির মালিক',
    verified_landowner: 'যাচাইকৃত জমির মালিক',
    verified_farmer: 'যাচাইকৃত কৃষক',
    terms: 'চুক্তি ও শর্তাবলী',
    season: 'মৌসুম',
    cost: 'খরচ',
    revenue: 'আয়',
    profit: 'সম্ভাব্য লাভ',
    shotok: 'শতক',
    bigha: 'বিঘা',
    acre: 'একর',
    taka: '৳'
  },
  en: {
    app_name: 'PlotShare',
    tagline: 'Find land. Grow crops. Build your farm.',
    switch_lang: 'বাংলা',
    home: 'Home',
    explore: 'Explore Land',
    list_plot: 'List Land',
    my_farm: 'My Farm',
    ai_assistant: 'AI Assistant',
    community: 'Community',
    marketplace: 'Marketplace',
    notifications: 'Alerts',
    profile: 'Profile',
    greeting: 'Welcome, Rahim Uddin 👋',
    hero_search_placeholder: 'Search by District, Upazila or Crop...',
    nearby_plots: 'Nearby Agricultural Lands',
    view_all: 'View All',
    ai_advisory_title: 'PlotShare AI Farm Assistant',
    ai_weather_tip: 'Light rain expected tomorrow afternoon in Dinajpur. Perfect time to hold off on irrigation and conserve water.',
    view_details: 'View Details',
    request_land: 'Request This Farmland',
    request_barga: 'Send Lease / Barga Request',
    soil: 'Soil Type',
    area: 'Total Area',
    irrigation: 'Irrigation Source',
    elevation: 'Elevation',
    road_access: 'Road Access',
    suitable_crops: 'Suitable Crops',
    previous_crop: 'Previous Crop',
    owner: 'Landowner',
    verified_landowner: 'Verified Landowner',
    verified_farmer: 'Verified Farmer',
    terms: 'Agreement & Terms',
    season: 'Season',
    cost: 'Cost',
    revenue: 'Revenue',
    profit: 'Estimated Profit',
    shotok: 'Shotok',
    bigha: 'Bigha',
    acre: 'Acre',
    taka: '৳'
  }
};
