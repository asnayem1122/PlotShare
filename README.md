# 🌾 PlotShare — Bangladesh Agricultural Land & Farming Platform

> **"জমি খুঁজুন, চাষ করুন, ফলন বাড়ান।"**  
> *PlotShare — A smart platform connecting farmers with available agricultural land for easier, smarter, and more productive farming.*

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-GitHub%20Pages-A43700?style=for-the-badge&logo=githubpages&logoColor=white)](https://asnayem1122.github.io/PlotShare/)
[![Bangladesh Agriculture](https://img.shields.io/badge/Focus-Bangladesh%20Agriculture-2D5A27?style=for-the-badge&logo=leaf&logoColor=white)](https://github.com/asnayem1122/PlotShare)
[![Language](https://img.shields.io/badge/Language-বাংলা%20%7C%20English-E65100?style=for-the-badge)](https://github.com/asnayem1122/PlotShare)
[![Design System](https://img.shields.io/badge/Theme-Golden%20Harvest-FFB300?style=for-the-badge)](https://github.com/asnayem1122/PlotShare)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

👉 **Live Demo**: [https://asnayem1122.github.io/PlotShare/](https://asnayem1122.github.io/PlotShare/)

---

## 📖 About PlotShare

Across Bangladesh, vast tracts of fertile agricultural land remain unused, temporarily idle, underutilized, or difficult for landowners to cultivate themselves. At the same time, smallholder farmers, seasonal growers, and young agri-entrepreneurs face a major bottleneck: **access to cultivable land**.

**PlotShare** bridges this gap by connecting agricultural landowners with farmers seeking land for seasonal cultivation, long-term leasing, and sharecropping (**বর্গা চাষ**). Beyond land discovery, PlotShare serves as a complete **farming management ecosystem** with AI-driven agronomic guidance, seasonal crop calendars, financial forecasting, and produce trading.

---

## 🇧🇩 Bangladesh-First Agricultural Architecture

PlotShare is built from the ground up tailored to the realities of Bangladesh's rural ecosystem:

### 1. 🗺️ Location Hierarchy
- **Division (বিভাগ)** → **District (জেলা)** → **Upazila (উপজেলা)** → **Union (ইউনিয়ন)** → **Village/Mouza (গ্রাম/মৌজা)** + GPS coordinates.
- Tailored for key agricultural hubs: *Dinajpur (দিনাজপুর), Bogura (বগুড়া), Chapainawabganj (চাঁপাইনবাবগঞ্জ), Mymensingh (ময়মনসিংহ), Rangpur (রংপুর), Rajshahi (রাজশাহী), Cumilla (কুমিল্লা), Jashore (যশোর), Pabna (পাবনা), Natore (নাটোর)*, etc.

### 2. 📐 Normalized Area Conversion Engine
Seamless mathematical conversion across all regional land measurement units:
- **শতক (Shotok / Decimal)**: `1 Shotok = 40.4686 m² = 435.6 sq ft`
- **কাঠা (Katha)**: `1 Katha = 1.65 Shotok`
- **বিঘা (Bigha)**: `1 Bigha = 20 Katha = 33 Shotok = 1335.46 m²`
- **একর (Acre)**: `1 Acre = 3 Bigha = 100 Shotok = 4046.86 m²`
- **হেক্টর (Hectare)**: `1 Hectare = 2.471 Acre = 247.1 Shotok = 10,000 m²`

### 3. 🤝 Bangladesh Lease & Sharecropping Agreements (বর্গা চাষ)
- **Seasonal Cash Lease (মৌসুমি লিজ)**: Fixed seasonal fee in ৳ (BDT).
- **Sharecropping (বর্গা চাষ / ভাগ চাষ)**: Standard **50:50** or **60:40** harvest split with customized input and irrigation cost-sharing agreements.
- **Annual Lease (বার্ষিক চুক্তি)**: Multi-season crop rotation agreements.

### 4. 🌾 Comprehensive Crops & Seasons Database
- **Seasons (মৌসুম)**:
  - **রবি (Rabi)**: Nov – Mar (*Boro Rice, Potato, Mustard, Wheat, Winter Vegetables, Onion, Garlic*)
  - **খরিপ-১ (Kharif-1)**: Mar – Jul (*Aus Rice, Jute, Cucumber, Bitter Gourd, Okra*)
  - **খরিপ-২ (Kharif-2)**: Jul – Nov (*Aman Rice, Brinjal, Papaya, Radish, Bottle Gourd*)
- **Soil Profiling**: *Loamy (দোআঁশ), Sandy Loam (বেলে দোআঁশ), Clay (এঁটেল), Silty Alluvial (পলি মাটি)*.
- **Irrigation Systems**: *Deep Tube Well (গভীর নলকূপ), Shallow Tube Well (অগভীর নলকূপ), Canal/River Pump (খাল/নদী পাম্প), Pond (পুকুর)*.

---

## ✨ Core Features & Screens

| Module | Route | Highlights |
| :--- | :--- | :--- |
| **Home Dashboard** | `#home` | District search, AI weather/rain advisory, nearby farmland carousel, active crop progress ring, and market prices. |
| **Explore Farmland** | `#explore` | Map & List view toggle, filters for area (শতক/বিঘা), irrigation, soil type, agreement terms (লিজ/বর্গা), and district markers. |
| **Farmland Details** | `#plot-details` | High-res photos, 4-grid stats (Area, Soil, Irrigation, Elevation, Road Access), verified landowner badge, and Request Land CTA. |
| **Agreement Generator** | `#book-plot` | Custom agreement builder for seasonal lease vs 50:50 sharecropping, input cost sharing, and digital submission. |
| **12-Step Listing Wizard** | `#list-plot` | Guided farmland listing wizard with live area unit conversion, photo upload, draft saving, and instant publishing. |
| **My Farm (আমার খামার)** | `#my-farm` | Active crop growth stage tracker (e.g. *Boro Rice 38th Day, 42% complete*), daily task checklist, expense log, and financial profit ledger. |
| **PlotShare AI Assistant** | `#grow-assistant` | Natural Bangla & English AI agronomy assistant for fertilizer dosages (Urea, TSP, MoP, Zinc), pest control, and weather advice. |
| **AI Farm Planner** | `#farm-planner` | Complete cultivation blueprints based on land area (শতক), location, budget, and soil conditions. |
| **Crop Calendar** | `#crop-planner` | Sowing, weeding, and harvesting timelines across Rabi, Kharif-1, and Kharif-2. |
| **Harvest Tracker** | `#harvest-tracker` | Historical yield records in মণ/কেজি, selling price calculations, and net profit ledger. |
| **Farmer Community** | `#community` | Local farming updates, tractor/harvester sharing, seed exchange, and mentor Q&A. |
| **Produce Marketplace** | `#marketplace` | Direct farmer-to-buyer wholesale produce marketplace (ধান, আলু, পেঁয়াজ, সরিষা). |
| **Notifications** | `#notifications` | Real-time weather warnings, agreement approvals, and irrigation reminders. |
| **User Profile** | `#profile` | Krishi Card (কৃষি কার্ড) verification status, farming history, language & measurement unit preferences. |

---

## 🎨 Golden Harvest Design System

Built adhering to the **Golden Harvest** design specifications:

- **Rice Cream (`#fdf9f4` / `#F9F5F0`)**: Warm, sun-drenched surface base.
- **Harvest Orange (`#a43700` / `#E65100`)**: Deep primary brand color symbolizing golden hour and ripening crops.
- **Golden Amber (`#feb300` / `#FFB300`)**: Energetic highlight for seasonal tags and badges.
- **Success Leaf (`#2D5A27`)**: Forest green reserved for verified badges, crop health, and growth indicators.
- **Terracotta (`#914723` / `#A0522D`)**: Earthy structural accents and warm ambient depth.
- **Typography**: Google Fonts (*Hanken Grotesk* for numerals/modern tech contrast + *Hind Siliguri* for first-class Bangla typography).

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/asnayem1122/PlotShare.git
cd PlotShare
```

### 2. Run Locally
You can serve the project using any static file server:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js / npx
npx http-server -p 8080
```

Open your browser and visit:
👉 `http://localhost:8080/index.html`

---

## 📁 Project Structure

```
PlotShare/
├── index.html                  # Master Bilingual Single Page Application (SPA)
├── README.md                   # Project Documentation
├── .gitignore                  # Git Ignore Configuration
├── src/
│   └── data/
│       └── bangladeshData.js   # BD Locations, Area Math, Crops, Seasons & Translations
├── book_plot/                  # Agreement & Sharecropping Screen
├── community_feed/             # Farmer Community & Social Feed Screen
├── crop_planner/               # Bangladesh Agricultural Calendar Screen
├── explore_map/                # Farmland Discovery & Map View Screen
├── golden_harvest/             # Golden Harvest Design System Specification
│   └── DESIGN.md
├── grow_assistant/             # PlotShare AI Farm Assistant Screen
├── harvest_tracker/            # Harvest Yield & Sales Tracker Screen
├── home_dashboard/             # Home Dashboard Screen
├── list_your_plot/             # 12-Step Landowner Listing Wizard Screen
├── my_plots_dashboard/         # My Farm (আমার খামার) Management Screen
├── notifications_center/       # Weather & Agreement Notifications Screen
├── plot_details/               # Farmland Details & Landowner Card Screen
├── splash_onboarding/          # Onboarding & Role Selection Screen
├── surplus_sharing/            # Produce Marketplace & Direct Trading Screen
└── user_profile/               # Krishi Card & Farmer Profile Screen
```

---

## 🛣️ Roadmap

- [x] **Phase 1**: Bilingual (বাংলা / EN) Mobile & Desktop responsive SPA with Golden Harvest styling.
- [x] **Phase 2**: Bangladesh geographic hierarchy (Division → District → Upazila) and normalized area math.
- [x] **Phase 3**: Farmland marketplace with seasonal lease and 50:50 sharecropping (**বর্গা চাষ**) proposals.
- [x] **Phase 4**: **My Farm (আমার খামার)** crop progress tracking, tasks, expenses, and harvest profit ledger.
- [x] **Phase 5**: **PlotShare AI Farm Assistant (কৃষি সহায়ক)** in natural Bangla/English.
- [ ] **Phase 6**: Integration with live Bangladesh Meteorological Department (BMD) weather API & SMS alerts for rural offline farmers.
- [ ] **Phase 7**: Mobile App deployment (Flutter / React Native) with offline-first synchronization.
- [ ] **Phase 8**: Krishi Card (কৃষি কার্ড) & NID national biometric verification integration.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/asnayem1122/PlotShare/issues).

---

## 📄 License

This project is licensed under the **MIT License**.

---

*Built with ❤️ for Bangladesh's hardworking farmers and landowners.*
