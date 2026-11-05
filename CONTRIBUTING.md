# Contributing to MedGuard

Thank you for your interest in contributing to MedGuard. This project is built to protect personal health safety through open, accessible, and privacy-preserving tools.

---

## Code of Conduct and Core Principles

1. **Patient Safety First**: All medical information, biomarker reference brackets, and drug interaction data must cite authoritative clinical references (e.g., FDA labels, PubMed, NHS, NIH, WHO).
2. **Absolute Privacy**: MedGuard is strictly client-side. No user data, medication list, or lab result may ever be transmitted over network protocols or logged to external servers.
3. **Inclusive and Accessible**: All UI elements must meet WCAG 2.1 AA contrast and screen-reader accessibility standards.
4. **Strict No-Emoji Standard**: All documentation, commit messages, branch names, code comments, and pull request descriptions must remain completely free of emojis.

---

## Development Workflow

MedGuard follows a structured dual-branch Git architecture:

1. **`main` Branch**: Production branch. Protected. Only stable, fully tested releases are merged here.
2. **`dev` Branch**: Active development branch. All feature branches branch off `dev` and merge back to `dev` via pull requests.

### Steps to Contribute

1. Fork the repository and clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/medguard.git
   cd medguard
   ```

2. Check out the `dev` branch:
   ```bash
   git checkout dev
   ```

3. Create a focused feature branch:
   ```bash
   git checkout -b feat/add-biomarker-ferritin
   ```

4. Make your changes adhering to existing code conventions.

5. Test locally by running any static server or opening `index.html` in your browser:
   ```bash
   python3 -m http.server 8000
   ```

6. Commit your changes with clear, imperative commit messages (no emojis):
   ```bash
   git commit -m "feat(labs): add ferritin biomarker reference data and clinical notes"
   ```

7. Push to your fork and submit a Pull Request targeting the `dev` branch.

---

## Contribution Areas

### 1. Adding Drug Interaction Pairs
Drug data is defined in `data/drugs.json` (or `app.js`). To add a new interaction:
- Specify both generic names in lower-case alphabetical order.
- Define severity: `critical`, `major`, `moderate`, or `minor`.
- Provide a plain-language summary of the clinical mechanism.
- State actionable recommendations (e.g., "Consult prescribing physician before co-administration").

### 2. Adding Lab Biomarkers
Biomarker data lives in `data/labs.json` (or `app.js`). To add a test:
- Common test name and standard medical abbreviation.
- Primary diagnostic panel (e.g., CBC, Metabolic, Lipid, Thyroid, Liver, Renal).
- Standard unit and adult reference intervals (with male/female brackets where clinically differentiated).
- Non-emergency lifestyle or physiological factors that can cause slight deviations.
- Questions for the patient to ask their doctor.

### 3. Localization and Internationalization
Help translate clinical terms and explanations into regional languages so non-English speakers can understand their lab results and drug warnings.

### 4. Accessibility and Design
Enhance screen-reader labeling (`aria-*`), keyboard navigation shortcuts, high-contrast themes, and printable layout dimensions.
