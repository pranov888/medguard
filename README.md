# MedGuard

> Open-source, local-first personal health safety companion. Check dangerous drug interactions, demystify clinical lab reports, and generate emergency medical cards with absolute client-side privacy.

MedGuard is an accessible, zero-telemetry healthcare utility created to protect individuals, families, and caretakers from preventable medication errors, clarify complex medical blood tests, and equip first responders with vital emergency information during critical incidents.

- **Live Showcase Website**: [medguard-showcase.vercel.app](https://medguard-showcase.vercel.app)
- **Source Code Repository**: [github.com/pranov888/medguard](https://github.com/pranov888/medguard)

---

## Key Features

### 1. Multi-Drug Interaction Checker
- Multi-medication evaluation: Add multiple prescription, over-the-counter, or supplemental drugs into an active assessment tray.
- Comprehensive clinical matrix: Evaluates pairwise intersections across cardiovascular, neurological, metabolic, antibiotic, and psychiatric drug categories.
- Severity stratification: Categorizes findings as Critical (Contraindicated), Major, Moderate, or Minor.
- Mechanism explanations: Outlines biological mechanisms in clear language with actionable guidance for discussions with physicians and pharmacists.

### 2. Clinical Lab Report Demystifier
- 6 Essential Diagnostic Panels:
  - Complete Blood Count (CBC)
  - Comprehensive Metabolic Panel (CMP)
  - Lipid and Cardiovascular Panel
  - Liver Function Panel (LFT)
  - Thyroid and Endocrine Panel
  - Vitamins and Storage Markers
- Interactive Value Evaluator: Enter your lab values to view real-time visual status gauges displaying Low, Optimal, Borderline, and Elevated brackets.
- Non-Alarmist Guidance: Lists common non-emergency causes for minor fluctuations (hydration, exercise, fasting status) and provides structured questions to ask your physician.

### 3. Emergency Medical Identification Card (ICE)
- Standardized Medical Data: Records blood group, emergency contacts, critical allergies, chronic conditions, and active medications.
- Multi-Format Views:
  - ISO/IEC ID-1 foldable wallet card layout.
  - High-contrast phone lock-screen format.
- Instant Export: Print directly to paper or export clean vector emergency identification cards.
- Quick Copy: Export standardized text snippets ready for smartphone emergency notes.

### 4. Zero-Cloud Privacy Guarantee
- 100% Client-Side Architecture.
- Zero server communication, zero analytics, zero cookies, zero external trackers.
- Works entirely offline.

---

## Tech Stack & Architecture

- **Core Technologies**: Semantic HTML5, Modular CSS3 (Apple VisionOS / Linear glass aesthetic, high contrast WCAG AA compliant), Modern Vanilla JavaScript (ES2022).
- **Zero Heavy Dependencies**: No bloated node frameworks, no tracking scripts, no external font or CDN dependencies. Runs immediately in any modern browser.
- **Offline First**: Ready for offline access and local execution.

---

## Quick Start

### Option 1: Direct Browser Launch
Clone the repository and open `index.html` directly:
```bash
git clone https://github.com/pranov888/medguard.git
cd medguard
xdg-open index.html # On Linux
# or open index.html on macOS / start index.html on Windows
```

### Option 2: Lightweight Local HTTP Server
Run with Python:
```bash
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

---

## Project Structure

```
medguard/
├── index.html        # Main application layout and accessibility structure
├── style.css         # VisionOS frosted glass aesthetic, typography, and print styles
├── app.js            # Drug engine, lab evaluator, and emergency card generator
├── CONTRIBUTING.md   # Clinical data submission guidelines and contribution guide
├── LICENSE           # MIT License
└── .gitignore        # Git ignore rules
```

---

## Medical Disclaimer

MedGuard is an educational and personal reference tool designed to support, not replace, the relationship that exists between a patient and their physician. Never disregard professional medical advice or delay seeking medical treatment because of information provided by this tool. In the event of a medical emergency, call your local emergency services immediately.

---

## Contributing

Contributions from healthcare professionals, software engineers, and patient advocates are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on submitting drug pairs, biomarker ranges, and localization support.

---

## License

Distributed under the [MIT](LICENSE) License.
