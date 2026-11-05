# MedGuard - Architectural Plan and Development Memory

## 1. Project Overview & Problem Statement
MedGuard is an open-source, local-first personal health safety companion. It solves three critical real-world problems:
1. Adverse Drug Interactions: Polypharmacy patients frequently take combinations of prescription, over-the-counter, or supplemental medications that have dangerous pharmacokinetic or pharmacodynamic interactions.
2. Clinical Lab Report Confusion: Patients receiving blood or metabolic test results are overwhelmed by clinical acronyms, ambiguous reference values, and medical jargon before they can speak with a healthcare provider.
3. Emergency Medical Response (ICE): In accidents or acute medical crises, first responders lose precious minutes attempting to determine an unconscious patient's blood type, drug allergies, or active medications.

MedGuard provides client-side, zero-telemetry tools for drug interaction verification, biomarker explanation with interactive gauge visualizations, and downloadable/printable emergency medical identification cards.

---

## 2. Core Modules Architecture

### 2.1 Drug Interaction Engine (`src/drugs` / `app.js`)
- Comprehensive clinical registry covering common medications across cardiovascular, neurological, metabolic, pain, antibiotic, and psychiatric categories.
- Pairwise interaction evaluator with severity categorization:
  - Critical / Contraindicated (e.g., Sildenafil + Nitroglycerin -> profound hypotension; MAOIs + SSRIs -> serotonin toxicity).
  - Major (e.g., Warfarin + Aspirin/NSAIDs -> severe hemorrhage; Lisinopril + Spironolactone -> hyperkalemia).
  - Moderate (e.g., Metformin + Alcohol -> lactic acidosis risk; Levothyroxine + Calcium -> chelation).
  - Minor / Monitor (e.g., Omeprazole + Clopidogrel -> reduced antiplatelet activation).
- Multi-medication tray where users can add 2 or more drugs to evaluate all pairwise intersections simultaneously.

### 2.2 Clinical Lab Demystifier (`src/labs` / `app.js`)
- 6 Primary Panels:
  - Complete Blood Count (CBC): Hemoglobin, WBC, Platelets, RBC, Hematocrit.
  - Comprehensive Metabolic Panel (CMP): Fasting Glucose, HbA1c, Serum Creatinine, eGFR, BUN, Sodium, Potassium.
  - Lipid & Cardiovascular Panel: Total Cholesterol, LDL-C, HDL-C, Triglycerides, hs-CRP.
  - Liver Function Panel (LFT): ALT, AST, Bilirubin, Alkaline Phosphatase.
  - Thyroid & Endocrine: TSH, Free T4, Vitamin D (25-OH), Vitamin B12.
  - Iron & Storage: Serum Ferritin, Iron Saturation.
- Interactive Value Evaluator: Allows the user to type their specific numerical lab value, selects unit (metric/US), and renders a real-time status marker on an accessible color-coded range bar (Low, Normal, Borderline, High).
- Clear, calming context: Highlights benign reasons for variations (dehydration, strenuous workout, fasting status) and provides structured questions to ask a doctor.

### 2.3 Emergency Medical Identification Card (`src/emergency` / `app.js`)
- Input attributes: Full Name, Date of Birth, Blood Type, Primary Emergency Contact, Secondary Contact, Critical Allergies, Chronic Medical Conditions, Current Daily Medications, Medical Devices / Implants, Organ Donor status.
- Real-time live card visualization:
  - Front: Identity, Blood Type, Primary Emergency Contacts, Organ Donor status.
  - Back: Critical Allergies, Medical Conditions, Active Medications, Implant notes.
- Format options:
  - Physical Wallet Card (ISO/IEC 7810 ID-1 standard credit card proportions, foldable).
  - Phone Lock-Screen Graphic (9:16 high-contrast mobile wallpaper format).
- Export capabilities:
  - Print-to-paper / Save as PDF with high-resolution vector layout.
  - Instant raw text ICE format for copy-pasting to phone emergency notes.

### 2.4 Privacy and Security Architecture
- 100% Client-Side Execution.
- No network requests, no external tracking pixels, no server-side logging.
- Data persistence strictly via local browser storage (opt-in) or zero storage (ephemeral).

---

## 3. Git Protocol and Quality Standards
- Production Branch: `main` (Protected; clean release milestones only).
- Development Branch: `dev` (Active development).
- Commits on `dev` act as crash-proof checkpoints.
- Strict No-Emoji Standard: Absolutely no emojis in commit messages, branch names, PR descriptions, documentation, or code comments.

---

## 4. Milestones and Roadmap
- Milestone 1 (v0.1.0): Foundation, core responsive layout, drug interaction engine, lab explainer dictionary, emergency card generator, printable layout, and GitHub repository launch.
- Milestone 2 (v0.2.0): PWA offline service worker, expanded clinical interaction database, multi-lingual terminology dictionary.
- Milestone 3 (v0.3.0): Community open-source launch, contributor documentation, good first issues for regional medications and lab panels.
