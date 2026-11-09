/* ==========================================================================
   MedGuard - Health Safety Companion Client Engine
   Strictly Zero Emojis
   ========================================================================== */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Clinical Drug Database (Generic, Brands, Category, Class)
  // ---------------------------------------------------------------------------
  const DRUGS_CATALOG = [
    { id: 'warfarin', name: 'Warfarin', brands: ['Coumadin', 'Jantoven'], category: 'Cardiovascular', class: 'Vitamin K Antagonist Anticoagulant' },
    { id: 'aspirin', name: 'Aspirin', brands: ['Bayer', 'Bufferin', 'Ecotrin'], category: 'Pain & Cardiovascular', class: 'Salicylate Antiplatelet / NSAID' },
    { id: 'sildenafil', name: 'Sildenafil', brands: ['Viagra', 'Revatio'], category: 'Cardiovascular & Urological', class: 'PDE-5 Inhibitor' },
    { id: 'nitroglycerin', name: 'Nitroglycerin', brands: ['Nitrostat', 'Nitro-Dur'], category: 'Cardiovascular', class: 'Nitrate Vasodilator' },
    { id: 'sertraline', name: 'Sertraline', brands: ['Zoloft'], category: 'Psychiatry', class: 'SSRI Antidepressant' },
    { id: 'fluoxetine', name: 'Fluoxetine', brands: ['Prozac'], category: 'Psychiatry', class: 'SSRI Antidepressant' },
    { id: 'escitalopram', name: 'Escitalopram', brands: ['Lexapro'], category: 'Psychiatry', class: 'SSRI Antidepressant' },
    { id: 'tramadol', name: 'Tramadol', brands: ['Ultram'], category: 'Analgesic', class: 'Opioid / SNRI Activity' },
    { id: 'st_johns_wort', name: "St. John's Wort", brands: ['Hypericum Perforatum'], category: 'Supplement', class: 'Herbal Serotonergic Agent' },
    { id: 'lisinopril', name: 'Lisinopril', brands: ['Prinivil', 'Zestril'], category: 'Cardiovascular', class: 'ACE Inhibitor' },
    { id: 'spironolactone', name: 'Spironolactone', brands: ['Aldactone'], category: 'Cardiovascular', class: 'Potassium-Sparing Diuretic' },
    { id: 'potassium_chloride', name: 'Potassium Chloride', brands: ['K-Tab', 'Klor-Con'], category: 'Electrolyte', class: 'Potassium Supplement' },
    { id: 'atorvastatin', name: 'Atorvastatin', brands: ['Lipitor'], category: 'Cardiovascular', class: 'HMG-CoA Reductase Inhibitor (Statin)' },
    { id: 'simvastatin', name: 'Simvastatin', brands: ['Zocor'], category: 'Cardiovascular', class: 'HMG-CoA Reductase Inhibitor (Statin)' },
    { id: 'clarithromycin', name: 'Clarithromycin', brands: ['Biaxin'], category: 'Antibiotic', class: 'Macrolide Antibiotic / CYP3A4 Inhibitor' },
    { id: 'metformin', name: 'Metformin', brands: ['Glucophage'], category: 'Endocrine', class: 'Biguanide Antidiabetic' },
    { id: 'alcohol', name: 'Alcohol (Ethanol)', brands: ['Ethanol'], category: 'Social / Substance', class: 'CNS Depressant / Metabolic Stressor' },
    { id: 'ibuprofen', name: 'Ibuprofen', brands: ['Advil', 'Motrin'], category: 'Analgesic', class: 'Nonsteroidal Anti-inflammatory (NSAID)' },
    { id: 'naproxen', name: 'Naproxen', brands: ['Aleve', 'Naprosyn'], category: 'Analgesic', class: 'Nonsteroidal Anti-inflammatory (NSAID)' },
    { id: 'ciprofloxacin', name: 'Ciprofloxacin', brands: ['Cipro'], category: 'Antibiotic', class: 'Fluoroquinolone Antibiotic' },
    { id: 'calcium_carbonate', name: 'Calcium Carbonate', brands: ['Tums', 'Caltrate'], category: 'Supplement / Antacid', class: 'Divalent Cation Antacid' },
    { id: 'ferrous_sulfate', name: 'Ferrous Sulfate (Iron)', brands: ['Feosol'], category: 'Supplement', class: 'Iron Mineral Supplement' },
    { id: 'levothyroxine', name: 'Levothyroxine', brands: ['Synthroid', 'Levoxyl'], category: 'Endocrine', class: 'Thyroid Hormone T4' },
    { id: 'clopidogrel', name: 'Clopidogrel', brands: ['Plavix'], category: 'Cardiovascular', class: 'P2Y12 Platelet Inhibitor' },
    { id: 'omeprazole', name: 'Omeprazole', brands: ['Prilosec'], category: 'Gastrointestinal', class: 'Proton Pump Inhibitor (CYP2C19)' },
    { id: 'lithium', name: 'Lithium', brands: ['Lithobid', 'Eskalith'], category: 'Psychiatry', class: 'Mood Stabilizer' },
    { id: 'methotrexate', name: 'Methotrexate', brands: ['Trexall'], category: 'Immunology & Oncology', class: 'Antimetabolite / Immunosuppressant' },
    { id: 'digoxin', name: 'Digoxin', brands: ['Lanoxin'], category: 'Cardiovascular', class: 'Cardiac Glycoside' },
    { id: 'amiodarone', name: 'Amiodarone', brands: ['Cordarone', 'Pacerone'], category: 'Cardiovascular', class: 'Class III Antiarrhythmic' },
    { id: 'furosemide', name: 'Furosemide', brands: ['Lasix'], category: 'Cardiovascular', class: 'Loop Diuretic' },
    { id: 'apixaban', name: 'Apixaban', brands: ['Eliquis'], category: 'Cardiovascular', class: 'Direct Factor Xa Inhibitor (DOAC)' },
    { id: 'fluconazole', name: 'Fluconazole', brands: ['Diflucan'], category: 'Antifungal', class: 'Azole Antifungal / CYP3A4 Inhibitor' },
    { id: 'metoprolol', name: 'Metoprolol', brands: ['Lopressor', 'Toprol XL'], category: 'Cardiovascular', class: 'Beta-1 Selective Blocker' },
    { id: 'amlodipine', name: 'Amlodipine', brands: ['Norvasc'], category: 'Cardiovascular', class: 'Dihydropyridine Calcium Channel Blocker' },
    { id: 'diazepam', name: 'Diazepam', brands: ['Valium'], category: 'Neurology / Psychiatry', class: 'Benzodiazepine' },
    { id: 'alprazolam', name: 'Alprazolam', brands: ['Xanax'], category: 'Psychiatry', class: 'Benzodiazepine' },
    { id: 'acetaminophen', name: 'Acetaminophen (Paracetamol)', brands: ['Tylenol'], category: 'Analgesic', class: 'Non-opioid Analgesic / Antipyretic' },
    { id: 'duloxetine', name: 'Duloxetine', brands: ['Cymbalta'], category: 'Psychiatry & Pain', class: 'SNRI Antidepressant' },
    { id: 'losartan', name: 'Losartan', brands: ['Cozaar'], category: 'Cardiovascular', class: 'Angiotensin Receptor Blocker (ARB)' },
    { id: 'gabapentin', name: 'Gabapentin', brands: ['Neurontin'], category: 'Neurology', class: 'Gabapentinoid Anticonvulsant' }
  ];

  // ---------------------------------------------------------------------------
  // 2. Pairwise Clinical Interaction Matrix
  // ---------------------------------------------------------------------------
  const INTERACTION_PAIRS = [
    {
      drugs: ['nitroglycerin', 'sildenafil'],
      severity: 'critical',
      title: 'Contraindicated Severe Vasodilation & Fatal Hypotension Risk',
      description: 'Sildenafil (PDE-5 inhibitor) drastically amplifies the cyclic GMP-mediated vasodilatory action of nitrates. Co-administration can cause a catastrophic, life-threatening drop in systemic blood pressure, profound syncope, and myocardial infarction.',
      action: 'Do not take together under any circumstances. Emergency protocol requires at least a 24 to 48-hour separation.'
    },
    {
      drugs: ['aspirin', 'warfarin'],
      severity: 'major',
      title: 'Compounded Hemorrhage & Gastrointestinal Bleeding Risk',
      description: 'Warfarin diminishes clotting factors via vitamin K antagonism, while aspirin permanently inhibits platelet thromboxane A2 and erodes gastric mucosa. The combination multiplies major bleeding risks.',
      action: 'Requires close international normalized ratio (INR) monitoring and explicit physician oversight. Avoid adding over-the-counter aspirin without cardiology approval.'
    },
    {
      drugs: ['ibuprofen', 'warfarin'],
      severity: 'major',
      title: 'Severe Anticoagulant Potentiation & Gastric Ulceration',
      description: 'Ibuprofen competitively displaces warfarin from plasma albumin binding sites while suppressing protective gastric prostaglandins. Risk of severe GI hemorrhage is elevated.',
      action: 'Avoid NSAIDs while on warfarin. Consider acetaminophen for mild pain after consulting your physician.'
    },
    {
      drugs: ['lisinopril', 'spironolactone'],
      severity: 'major',
      title: 'Additive Severe Hyperkalemia Risk',
      description: 'Both ACE inhibitors (lisinopril) and aldosterone antagonists (spironolactone) impair renal potassium excretion. Elevated serum potassium can trigger life-threatening cardiac arrhythmias.',
      action: 'Regular serum potassium and creatinine blood monitoring is mandatory. Avoid potassium supplements or salt substitutes containing potassium.'
    },
    {
      drugs: ['lisinopril', 'potassium_chloride'],
      severity: 'major',
      title: 'Direct Hyperkalemia Toxicity',
      description: 'Lisinopril reduces aldosterone secretion, markedly decreasing renal excretion of potassium. Adding supplemental potassium chloride can lead to rapid hyperkalemia.',
      action: 'Potassium supplements should only be co-prescribed with strict laboratory supervision.'
    },
    {
      drugs: ['sertraline', 'tramadol'],
      severity: 'major',
      title: 'Serotonin Syndrome & Lowered Seizure Threshold',
      description: 'Sertraline blocks serotonin reuptake while tramadol stimulates serotonin release and inhibits reuptake. Co-use can precipitate serotonin toxicity (agitation, hyperthermia, tremor, hyperreflexia, rigidity).',
      action: 'Seek immediate medical attention if agitation, rapid heart rate, or muscle stiffness occurs. Consult physician for non-serotonergic analgesics.'
    },
    {
      drugs: ['fluoxetine', 'st_johns_wort'],
      severity: 'major',
      title: 'Dangerous Herbal-Pharmaceutical Serotonin Toxicity',
      description: "St. John's Wort contains hyperforin and hypericin which exert potent additive serotonergic and monoamine oxidase inhibitory effects when combined with SSRIs like fluoxetine.",
      action: "Discontinue St. John's Wort and consult prescribing doctor. Always disclose herbal supplements to your care team."
    },
    {
      drugs: ['atorvastatin', 'clarithromycin'],
      severity: 'major',
      title: 'CYP3A4 Inhibition Causing Statin Toxicity & Rhabdomyolysis',
      description: 'Clarithromycin is a potent inhibitor of cytochrome P450 3A4, the primary metabolic pathway for atorvastatin. Statin serum concentrations can increase up to 10-fold, raising the risk of muscle breakdown (rhabdomyolysis) and acute renal failure.',
      action: 'Temporarily suspend atorvastatin during the clarithromycin antibiotic course under medical guidance, or switch to an alternative antibiotic.'
    },
    {
      drugs: ['clarithromycin', 'simvastatin'],
      severity: 'critical',
      title: 'Severe Statin Rhabdomyolysis & Acute Renal Collapse',
      description: 'Simvastatin relies almost entirely on CYP3A4 for clearance. Clarithromycin causes massive accumulation of simvastatin, with documented fatalities from severe rhabdomyolysis.',
      action: 'Strictly contraindicated. Simvastatin must be paused while taking clarithromycin.'
    },
    {
      drugs: ['alcohol', 'metformin'],
      severity: 'major',
      title: 'Potentiated Lactic Acidosis Risk',
      description: 'Acute or chronic alcohol consumption impairs hepatic lactate clearance and gluconeogenesis, magnifying metformin-associated lactic acidosis, a rare but life-threatening metabolic emergency.',
      action: 'Avoid excessive or binge alcohol intake while taking metformin. Report muscle cramps, extreme fatigue, or deep breathing immediately.'
    },
    {
      drugs: ['calcium_carbonate', 'ciprofloxacin'],
      severity: 'moderate',
      title: 'Chelation Inactivation of Antibiotic Absorption',
      description: 'Divalent calcium ions form an insoluble chemical chelate with ciprofloxacin in the gastrointestinal tract, reducing antibiotic absorption by up to 60% and leading to clinical treatment failure.',
      action: 'Administer ciprofloxacin at least 2 hours before or 6 hours after calcium antacids or calcium-fortified foods.'
    },
    {
      drugs: ['ciprofloxacin', 'ferrous_sulfate'],
      severity: 'moderate',
      title: 'Iron Chelation Binding Decreasing Antibiotic Efficacy',
      description: 'Iron molecules bind strongly to ciprofloxacin in the stomach, rendering the antibiotic unabsorbable.',
      action: 'Separate ingestion by at least 2 hours before or 4 to 6 hours after iron intake.'
    },
    {
      drugs: ['calcium_carbonate', 'levothyroxine'],
      severity: 'moderate',
      title: 'Absorption Interference with Thyroid Hormone',
      description: 'Calcium binds levothyroxine in an acidic stomach environment, forming insoluble compounds that significantly reduce thyroid hormone bioavailability.',
      action: 'Separate levothyroxine from calcium supplements by at least 4 hours.'
    },
    {
      drugs: ['ferrous_sulfate', 'levothyroxine'],
      severity: 'moderate',
      title: 'Decreased Thyroid Hormone Bioavailability',
      description: 'Iron salts bind levothyroxine, resulting in reduced efficacy and recurrence of hypothyroid symptoms (fatigue, cold intolerance).',
      action: 'Maintain at least a 4-hour gap between iron and levothyroxine administration.'
    },
    {
      drugs: ['clopidogrel', 'omeprazole'],
      severity: 'moderate',
      title: 'CYP2C19 Competition Decreasing Antiplatelet Activation',
      description: 'Clopidogrel is a prodrug requiring CYP2C19 enzyme activation. Omeprazole competitively inhibits CYP2C19, significantly lowering active metabolite levels and increasing cardiovascular ischemic event risks.',
      action: 'Consider switching to a proton pump inhibitor with lower CYP2C19 inhibition (such as pantoprazole) if gastroprotection is required.'
    },
    {
      drugs: ['ibuprofen', 'lithium'],
      severity: 'major',
      title: 'Decreased Renal Lithium Clearance & Severe Lithium Toxicity',
      description: 'NSAIDs like ibuprofen reduce renal blood flow by inhibiting renal prostaglandins, decreasing lithium excretion and causing toxic serum levels (ataxia, tremors, confusion, seizures).',
      action: 'Avoid NSAIDs while taking lithium. Monitor serum lithium levels closely if co-administration is unavoidable.'
    },
    {
      drugs: ['ibuprofen', 'methotrexate'],
      severity: 'major',
      title: 'Suppressed Methotrexate Clearance & Bone Marrow Toxicity',
      description: 'NSAIDs compete with methotrexate for renal organic anion tubular secretion, resulting in elevated, toxic concentrations of methotrexate.',
      action: 'Do not take over-the-counter NSAIDs with high-dose methotrexate. Consult your rheumatologist or oncologist.'
    },
    {
      drugs: ['amiodarone', 'digoxin'],
      severity: 'major',
      title: 'P-Glycoprotein Inhibition Doubling Digoxin Levels',
      description: 'Amiodarone inhibits P-glycoprotein efflux transporters in the kidneys and gut, often doubling serum digoxin concentrations and precipitating fatal digoxin toxicity.',
      action: 'When initiating amiodarone, the digoxin dosage typically must be reduced by 50% with frequent electrocardiogram and level checks.'
    },
    {
      drugs: ['digoxin', 'furosemide'],
      severity: 'moderate',
      title: 'Hypokalemia-Induced Digoxin Sensitization',
      description: 'Furosemide causes renal potassium wasting. Low serum potassium (hypokalemia) sensitizes cardiac myocardium to digoxin, greatly increasing the risk of arrhythmias even at normal digoxin levels.',
      action: 'Monitor serum potassium and magnesium levels regularly. Potassium supplementation may be necessary.'
    },
    {
      drugs: ['apixaban', 'ibuprofen'],
      severity: 'major',
      title: 'Combined Anticoagulant and Antiplatelet Bleeding Risk',
      description: 'Combining a direct oral anticoagulant (apixaban) with an NSAID (ibuprofen) impairs both clotting cascade factors and platelet plugs, drastically elevating bleeding hazards.',
      action: 'Avoid routine NSAID usage while on apixaban. Use paracetamol/acetaminophen for minor aches after physician clearance.'
    },
    {
      drugs: ['apixaban', 'fluconazole'],
      severity: 'major',
      title: 'Elevated Apixaban Exposure via Dual Pathway Inhibition',
      description: 'Fluconazole is a moderate CYP3A4 and P-gp inhibitor. Combining them increases systemic apixaban exposure and bleeding incidents.',
      action: 'Careful clinical assessment required; dosage adjustment or alternative antifungal selection may be necessary.'
    },
    {
      drugs: ['fluoxetine', 'metoprolol'],
      severity: 'moderate',
      title: 'CYP2D6 Inhibition Inducing Severe Bradycardia',
      description: 'Fluoxetine is a strong CYP2D6 inhibitor that blocks the metabolism of metoprolol, leading to exaggerated beta-blocker effects (profound bradycardia, hypotension, and heart block).',
      action: 'Monitor pulse rate and blood pressure closely. Beta-blocker dosage reduction may be warranted.'
    },
    {
      drugs: ['amlodipine', 'simvastatin'],
      severity: 'moderate',
      title: 'Increased Simvastatin Plasma Concentration',
      description: 'Amlodipine inhibits CYP3A4-mediated breakdown of simvastatin, elevating circulating statin levels and myopathy risk.',
      action: 'Clinical guidelines recommend limiting simvastatin dose to a maximum of 20 mg daily when taken alongside amlodipine.'
    },
    {
      drugs: ['acetaminophen', 'alcohol'],
      severity: 'moderate',
      title: 'Metabolic Conversion to Toxic NAPQI & Hepatotoxicity Risk',
      description: 'Chronic alcohol intake induces hepatic CYP2E1 enzymes, accelerating the conversion of acetaminophen into its toxic metabolite (NAPQI) which depletes glutathione and causes liver cell death.',
      action: 'Do not exceed 2,000 mg of acetaminophen in 24 hours if consuming alcohol. Avoid completely during heavy alcohol consumption.'
    },
    {
      drugs: ['alprazolam', 'alcohol'],
      severity: 'critical',
      title: 'Life-Threatening Additive Central Nervous System Depression',
      description: 'Ethanol and benzodiazepines both stimulate GABA-A receptors synergistically. Co-use produces severe sedation, respiratory depression, coma, and fatal overdose.',
      action: 'Strictly contraindicated. Never consume alcohol while taking benzodiazepines.'
    },
    {
      drugs: ['diazepam', 'tramadol'],
      severity: 'major',
      title: 'Profound Sedation & Respiratory Depression Warning',
      description: 'Concurrent use of opioids and benzodiazepines increases the risk of severe sedation, respiratory depression, coma, and death.',
      action: 'Reserve co-prescribing for patients with no alternative treatment options, at minimal dosages for shortest durations.'
    },
    {
      drugs: ['gabapentin', 'tramadol'],
      severity: 'major',
      title: 'Compounded Respiratory Depression & Sedation',
      description: 'Concomitant use of gabapentinoids and opioids increases the likelihood of opioid overdose and profound CNS/respiratory depression.',
      action: 'Report extreme sleepiness, dizziness, or slow breathing immediately to healthcare providers.'
    },
    {
      drugs: ['losartan', 'spironolactone'],
      severity: 'major',
      title: 'Additive Hyperkalemia & Renal Dysfunction',
      description: 'Angiotensin receptor blockers combined with potassium-sparing diuretics markedly reduce renal potassium excretion.',
      action: 'Monitor serum potassium and renal panel within 1 to 2 weeks of initiating combination.'
    },
    {
      drugs: ['duloxetine', 'tramadol'],
      severity: 'major',
      title: 'Combined Serotonergic Neurotoxicity Risk',
      description: 'Dual serotonin reuptake inhibition increases synaptic serotonin concentrations, elevating risk of serotonin syndrome.',
      action: 'Watch for autonomic instability, neuromuscular excitability, and altered mental status.'
    }
  ];

  // ---------------------------------------------------------------------------
  // 3. Clinical Lab Biomarker Reference Dictionary
  // ---------------------------------------------------------------------------
  const LAB_TESTS_CATALOG = [
    {
      id: 'hgb',
      name: 'Hemoglobin (Hb)',
      acronym: 'Hgb / Hb',
      category: 'cbc',
      panelName: 'Complete Blood Count (CBC)',
      unit: 'g/dL',
      min: 6.0,
      optimalMin: 13.5,
      optimalMax: 17.5,
      max: 22.0,
      desc: 'Hemoglobin is the iron-rich protein in red blood cells that transports oxygen from your lungs to all tissues in your body.',
      benignReasons: 'Mild low readings can be caused by minor iron deficiency, frequent blood donations, or heavy menstrual cycles. Mild elevations are frequently caused by dehydration, smoking, or living at higher altitudes.',
      questions: [
        'Is my hemoglobin level related to dietary iron or recent fluid intake?',
        'Should we check serum ferritin to evaluate iron stores?',
        'Does this value require an adjustment in my nutritional plan?'
      ]
    },
    {
      id: 'wbc',
      name: 'White Blood Cell Count (WBC)',
      acronym: 'WBC',
      category: 'cbc',
      panelName: 'Complete Blood Count (CBC)',
      unit: 'K/uL',
      min: 1.0,
      optimalMin: 4.5,
      optimalMax: 11.0,
      max: 25.0,
      desc: 'White blood cells are the core defensive components of your immune system, fighting off viral, bacterial, and inflammatory threats.',
      benignReasons: 'Transient spikes are very common during minor physical stress, intense athletic exercise, or recovering from a mild common cold. Mildly low counts can occur following common viral infections.',
      questions: [
        'Could recent stress or a mild cold have caused this white cell count?',
        'Would you recommend a follow-up differential panel in a few weeks?',
        'Do my current medications have any effect on leukocyte production?'
      ]
    },
    {
      id: 'plt',
      name: 'Platelet Count (PLT)',
      acronym: 'PLT',
      category: 'cbc',
      panelName: 'Complete Blood Count (CBC)',
      unit: 'K/uL',
      min: 30,
      optimalMin: 150,
      optimalMax: 450,
      max: 800,
      desc: 'Platelets (thrombocytes) are specialized cell fragments that bind together to form initial blood clots and stop bleeding.',
      benignReasons: 'Elevated platelets can occur as a temporary reactive response to systemic inflammation or recovering from an infection. Mild drops can occur during pregnancy or from laboratory platelet clumping.',
      questions: [
        'Could platelet clumping in the test tube have influenced this result?',
        'Are there any bleeding or clotting precautions I should keep in mind?',
        'Should we recheck this count to establish my normal baseline?'
      ]
    },
    {
      id: 'glucose_fasting',
      name: 'Fasting Blood Glucose',
      acronym: 'FBG',
      category: 'cmp',
      panelName: 'Comprehensive Metabolic Panel (CMP)',
      unit: 'mg/dL',
      min: 40,
      optimalMin: 70,
      optimalMax: 99,
      max: 250,
      desc: 'Fasting glucose measures the concentration of sugar circulating in your bloodstream after an overnight fast (typically 8 to 12 hours).',
      benignReasons: 'Slight elevations frequently happen if the fast was shorter than 8 hours, from poor sleep, acute morning stress (cortisol dawn phenomenon), or illness.',
      questions: [
        'Does this fasting glucose result suggest prediabetes or insulin resistance?',
        'Would ordering an HbA1c test provide a better three-month picture?',
        'What lifestyle or dietary modifications are most effective for my level?'
      ]
    },
    {
      id: 'hba1c',
      name: 'Hemoglobin A1c (Glycated Hemoglobin)',
      acronym: 'HbA1c',
      category: 'cmp',
      panelName: 'Metabolic & Diabetes Panel',
      unit: '%',
      min: 3.5,
      optimalMin: 4.0,
      optimalMax: 5.6,
      max: 14.0,
      desc: 'HbA1c measures the percentage of hemoglobin coated with sugar over the 90-to-120-day lifespan of red blood cells, providing a long-term glycemic overview.',
      benignReasons: 'Variants in hemoglobin, severe iron deficiency anemia, or conditions altering red blood cell turnover can occasionally distort HbA1c values.',
      questions: [
        'How does this HbA1c align with my daily glucose readings?',
        'Are we within my individualized target range for long-term health?',
        'What specific carbohydrate or exercise adjustments do you recommend?'
      ]
    },
    {
      id: 'creatinine',
      name: 'Serum Creatinine',
      acronym: 'Cr',
      category: 'cmp',
      panelName: 'Comprehensive Metabolic Panel (CMP)',
      unit: 'mg/dL',
      min: 0.3,
      optimalMin: 0.7,
      optimalMax: 1.3,
      max: 4.0,
      desc: 'Creatinine is a waste product generated from normal muscle metabolism, filtered out of the blood exclusively by healthy kidneys.',
      benignReasons: 'Elevated levels often stem from dehydration, high dietary red meat intake, intense weightlifting, or creatine monohydrate supplementation without reflecting true kidney damage.',
      questions: [
        'Could mild dehydration or recent physical workouts have elevated my creatinine?',
        'How does my estimated glomerular filtration rate (eGFR) look alongside this?',
        'Should I repeat this test while ensuring optimal hydration?'
      ]
    },
    {
      id: 'egfr',
      name: 'Estimated GFR (eGFR)',
      acronym: 'eGFR',
      category: 'cmp',
      panelName: 'Renal Function Panel',
      unit: 'mL/min/1.73m2',
      min: 10,
      optimalMin: 90,
      optimalMax: 120,
      max: 140,
      desc: 'Estimated Glomerular Filtration Rate calculates how efficiently your kidneys filter blood based on your serum creatinine, age, and biological sex.',
      benignReasons: 'Values fluctuate with hydration status, blood pressure, and transient acute illnesses.',
      questions: [
        'Does my eGFR indicate stable and healthy kidney function?',
        'Are there any over-the-counter medications (like NSAIDs) I should limit?',
        'When should we recheck my kidney markers?'
      ]
    },
    {
      id: 'potassium',
      name: 'Serum Potassium (K+)',
      acronym: 'K+',
      category: 'cmp',
      panelName: 'Electrolyte Panel',
      unit: 'mEq/L',
      min: 2.0,
      optimalMin: 3.5,
      optimalMax: 5.0,
      max: 7.5,
      desc: 'Potassium is a crucial mineral electrolyte essential for nerve conduction, muscular contraction, and maintaining a stable cardiac rhythm.',
      benignReasons: 'Spurious high readings (pseudohyperkalemia) frequently occur if the blood sample hemolyzed during collection, or if a tourniquet was held tightly.',
      questions: [
        'Could the blood sample have hemolyzed during the draw?',
        'Do any of my blood pressure medications affect my potassium levels?',
        'Should this result be repeated to verify accuracy?'
      ]
    },
    {
      id: 'sodium',
      name: 'Serum Sodium (Na+)',
      acronym: 'Na+',
      category: 'cmp',
      panelName: 'Electrolyte Panel',
      unit: 'mEq/L',
      min: 115,
      optimalMin: 135,
      optimalMax: 145,
      max: 165,
      desc: 'Sodium regulates fluid volume, blood pressure, and osmotic balance throughout intracellular and extracellular compartments.',
      benignReasons: 'Heavy sweating, excessive plain water consumption, or diuretic medications can cause minor sodium dips.',
      questions: [
        'Is my sodium level balanced relative to my overall hydration?',
        'Do my current prescriptions impact my electrolyte excretion?'
      ]
    },
    {
      id: 'cholesterol_total',
      name: 'Total Cholesterol',
      acronym: 'TC',
      category: 'lipid',
      panelName: 'Lipid & Cardiovascular Panel',
      unit: 'mg/dL',
      min: 80,
      optimalMin: 125,
      optimalMax: 200,
      max: 350,
      desc: 'Total cholesterol combines LDL, HDL, and VLDL particles into a single aggregate metric of blood lipid concentration.',
      benignReasons: 'Cholesterol levels vary naturally with dietary patterns, acute illness, thyroid status, and genetics.',
      questions: [
        'What is my overall cardiovascular risk calculation based on this profile?',
        'How does my ratio of HDL to LDL look?',
        'Would dietary changes or medications be the preferred first step?'
      ]
    },
    {
      id: 'cholesterol_ldl',
      name: 'LDL Cholesterol ("Bad" Cholesterol)',
      acronym: 'LDL-C',
      category: 'lipid',
      panelName: 'Lipid & Cardiovascular Panel',
      unit: 'mg/dL',
      min: 30,
      optimalMin: 50,
      optimalMax: 100,
      max: 250,
      desc: 'Low-density lipoprotein transports cholesterol to peripheral tissues. Elevated levels can accumulate in arterial walls, forming plaques.',
      benignReasons: 'High saturated fat intake, genetic familial hypercholesterolemia, and low physical activity raise LDL-C.',
      questions: [
        'What is my personal target LDL goal based on my family history?',
        'Would an advanced lipid test (such as Apolipoprotein B) provide deeper clarity?',
        'What are the most impactful nutritional strategies for lowering my LDL?'
      ]
    },
    {
      id: 'cholesterol_hdl',
      name: 'HDL Cholesterol ("Good" Cholesterol)',
      acronym: 'HDL-C',
      category: 'lipid',
      panelName: 'Lipid & Cardiovascular Panel',
      unit: 'mg/dL',
      min: 15,
      optimalMin: 50,
      optimalMax: 90,
      max: 120,
      desc: 'High-density lipoprotein absorbs excess cholesterol from arteries and carries it back to the liver for excretion (reverse cholesterol transport).',
      benignReasons: 'Aerobic exercise and healthy fats (olive oil, nuts) raise HDL. Sedentary lifestyle and smoking decrease it.',
      questions: [
        'Is my HDL level protective against cardiovascular plaque buildup?',
        'What aerobic activities can help me optimize my HDL numbers?'
      ]
    },
    {
      id: 'triglycerides',
      name: 'Serum Triglycerides',
      acronym: 'TG',
      category: 'lipid',
      panelName: 'Lipid & Cardiovascular Panel',
      unit: 'mg/dL',
      min: 30,
      optimalMin: 50,
      optimalMax: 150,
      max: 500,
      desc: 'Triglycerides are the primary storage form of fat in your body, derived from dietary calories and excess carbohydrates converted by the liver.',
      benignReasons: 'A meal eaten within 10 hours prior to the test or alcohol consumed the night before can cause temporary surges.',
      questions: [
        'Did my fasting duration affect this triglyceride number?',
        'How does my sugar and refined carbohydrate intake impact this level?',
        'What cardiovascular precautions are advised at this level?'
      ]
    },
    {
      id: 'alt',
      name: 'Alanine Aminotransferase (ALT)',
      acronym: 'ALT / SGPT',
      category: 'liver',
      panelName: 'Liver Function Panel (LFT)',
      unit: 'U/L',
      min: 5,
      optimalMin: 7,
      optimalMax: 45,
      max: 180,
      desc: 'ALT is an enzyme found concentrated primarily inside liver cells. When hepatocytes are strained or inflamed, ALT leaks into the circulation.',
      benignReasons: 'Intense weight training, recent alcohol intake, or taking over-the-counter pain medications can cause temporary, harmless mild spikes.',
      questions: [
        'Could recent strenuous physical exercise or medications have caused this elevation?',
        'Should we screen for fatty liver or metabolic health markers?',
        'Should we retest this enzyme in 6 to 8 weeks?'
      ]
    },
    {
      id: 'ast',
      name: 'Aspartate Aminotransferase (AST)',
      acronym: 'AST / SGOT',
      category: 'liver',
      panelName: 'Liver Function Panel (LFT)',
      unit: 'U/L',
      min: 5,
      optimalMin: 8,
      optimalMax: 40,
      max: 180,
      desc: 'AST is an enzyme located in liver cells as well as cardiac muscle, skeletal muscle, and red blood cells.',
      benignReasons: 'Skeletal muscle breakdown after hard workouts frequently elevates AST even when the liver is completely healthy.',
      questions: [
        'Is the AST-to-ALT ratio clinically significant in my case?',
        'Could muscular exertion or soreness explain this number?'
      ]
    },
    {
      id: 'tsh',
      name: 'Thyroid Stimulating Hormone (TSH)',
      acronym: 'TSH',
      category: 'thyroid',
      panelName: 'Thyroid & Endocrine Panel',
      unit: 'uIU/mL',
      min: 0.1,
      optimalMin: 0.45,
      optimalMax: 4.5,
      max: 12.0,
      desc: 'TSH is released by your pituitary gland to instruct the thyroid gland on how much active thyroid hormone (T3/T4) to produce.',
      benignReasons: 'TSH has a natural circadian rhythm (peaking overnight) and can fluctuate with acute recovery from systemic viral illnesses or biotin supplements.',
      questions: [
        'Does this TSH level suggest subclinical hypothyroidism or hyperthyroidism?',
        'Would a Free T4 and Free T3 test provide a complete diagnostic evaluation?',
        'Are any of my symptoms (fatigue, weight changes) attributable to thyroid function?'
      ]
    },
    {
      id: 'vit_d',
      name: '25-Hydroxy Vitamin D',
      acronym: '25(OH)D',
      category: 'thyroid',
      panelName: 'Vitamins & Storage Markers',
      unit: 'ng/mL',
      min: 5,
      optimalMin: 30,
      optimalMax: 80,
      max: 120,
      desc: 'Vitamin D is a secosteroid hormone vital for intestinal calcium absorption, immune function, and bone mineral density.',
      benignReasons: 'Seasonal winter variations and spending minimal time outdoors in sunlight frequently lead to sub-optimal numbers.',
      questions: [
        'Would daily or weekly Vitamin D3 supplementation benefit my bone and immune health?',
        'What is an appropriate daily dosage for my baseline number?',
        'When should we retest to verify replenishment?'
      ]
    },
    {
      id: 'ferritin',
      name: 'Serum Ferritin',
      acronym: 'Ferritin',
      category: 'cbc',
      panelName: 'Iron Stores Panel',
      unit: 'ng/mL',
      min: 5,
      optimalMin: 24,
      optimalMax: 300,
      max: 800,
      desc: 'Ferritin is the universal intracellular protein that stores iron and releases it in a controlled fashion as needed by your body.',
      benignReasons: 'Ferritin acts as an acute-phase reactant; inflammation, colds, or fatty liver can elevate it even if true iron stores are normal.',
      questions: [
        'Does my ferritin reflect true iron deficiency or iron overload?',
        'Should we pair this with a total iron-binding capacity (TIBC) test?'
      ]
    }
  ];

  // ---------------------------------------------------------------------------
  // 4. Application State
  // ---------------------------------------------------------------------------
  const state = {
    selectedDrugIds: new Set(),
    selectedLabTestId: null,
    activeLabCategory: 'all'
  };

  // ---------------------------------------------------------------------------
  // 5. DOM Element References
  // ---------------------------------------------------------------------------
  const dom = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    tabDrugs: document.getElementById('tab-drugs'),
    tabLabs: document.getElementById('tab-labs'),
    tabEmergency: document.getElementById('tab-emergency'),
    viewDrugs: document.getElementById('view-drugs'),
    viewLabs: document.getElementById('view-labs'),
    viewEmergency: document.getElementById('view-emergency'),

    // Drugs View
    drugSearchInput: document.getElementById('drugSearchInput'),
    drugSuggestionsBox: document.getElementById('drugSuggestionsBox'),
    selectedDrugsList: document.getElementById('selectedDrugsList'),
    selectedDrugCount: document.getElementById('selectedDrugCount'),
    commonDrugPills: document.getElementById('commonDrugPills'),
    clearDrugsBtn: document.getElementById('clearDrugsBtn'),
    interactionResultsArea: document.getElementById('interactionResultsArea'),
    interactionSummaryBadge: document.getElementById('interactionSummaryBadge'),

    // Labs View
    labSearchInput: document.getElementById('labSearchInput'),
    labTestsList: document.getElementById('labTestsList'),
    testCounter: document.getElementById('testCounter'),
    labDetailEmpty: document.getElementById('labDetailEmpty'),
    labDetailActive: document.getElementById('labDetailActive'),
    detailPanelBadge: document.getElementById('detailPanelBadge'),
    detailTestName: document.getElementById('detailTestName'),
    detailUnit: document.getElementById('detailUnit'),
    inputUnitTag: document.getElementById('inputUnitTag'),
    userLabValueInput: document.getElementById('userLabValueInput'),
    rangeStatusBar: document.getElementById('rangeStatusBar'),
    userValuePointer: document.getElementById('userValuePointer'),
    pointerValueLabel: document.getElementById('pointerValueLabel'),
    tickMin: document.getElementById('tickMin'),
    tickNormalMin: document.getElementById('tickNormalMin'),
    tickNormalMax: document.getElementById('tickNormalMax'),
    tickMax: document.getElementById('tickMax'),
    evaluationFeedback: document.getElementById('evaluationFeedback'),
    detailDescription: document.getElementById('detailDescription'),
    detailBenignReasons: document.getElementById('detailBenignReasons'),
    detailQuestions: document.getElementById('detailQuestions'),

    // ICE View
    iceForm: document.getElementById('iceForm'),
    iceFullName: document.getElementById('iceFullName'),
    iceDob: document.getElementById('iceDob'),
    iceBloodType: document.getElementById('iceBloodType'),
    iceContactPrimary: document.getElementById('iceContactPrimary'),
    iceContactSecondary: document.getElementById('iceContactSecondary'),
    iceAllergies: document.getElementById('iceAllergies'),
    iceConditions: document.getElementById('iceConditions'),
    iceMedications: document.getElementById('iceMedications'),
    iceNotes: document.getElementById('iceNotes'),
    sampleIceBtn: document.getElementById('sampleIceBtn'),
    printCardBtn: document.getElementById('printCardBtn'),
    copyIceTextBtn: document.getElementById('copyIceTextBtn'),

    // Card Displays
    cardBloodDisplay: document.getElementById('cardBloodDisplay'),
    cardNameDisplay: document.getElementById('cardNameDisplay'),
    cardDobDisplay: document.getElementById('cardDobDisplay'),
    cardDonorDisplay: document.getElementById('cardDonorDisplay'),
    cardPrimaryDisplay: document.getElementById('cardPrimaryDisplay'),
    cardSecondaryDisplay: document.getElementById('cardSecondaryDisplay'),
    cardSecondaryWrap: document.getElementById('cardSecondaryWrap'),
    cardAllergiesDisplay: document.getElementById('cardAllergiesDisplay'),
    cardConditionsDisplay: document.getElementById('cardConditionsDisplay'),
    cardMedicationsDisplay: document.getElementById('cardMedicationsDisplay'),
    cardNotesDisplay: document.getElementById('cardNotesDisplay'),

    // Toast
    toastMessage: document.getElementById('toastMessage')
  };

  // ---------------------------------------------------------------------------
  // 6. Theme Engine
  // ---------------------------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('medguard_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const initial = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      setTheme(initial);
    }

    dom.themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-theme');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
    localStorage.setItem('medguard_theme', theme);
  }

  // ---------------------------------------------------------------------------
  // 7. Tab Navigation
  // ---------------------------------------------------------------------------
  function switchTab(viewId) {
    const tabs = [
      { btn: dom.tabDrugs, view: dom.viewDrugs, id: 'view-drugs' },
      { btn: dom.tabLabs, view: dom.viewLabs, id: 'view-labs' },
      { btn: dom.tabEmergency, view: dom.viewEmergency, id: 'view-emergency' }
    ];
    tabs.forEach(t => {
      const match = t.id === viewId;
      t.btn.classList.toggle('active', match);
      t.btn.setAttribute('aria-selected', match ? 'true' : 'false');
      t.view.classList.toggle('active', match);
    });
  }

  function initNavigation() {
    const tabs = [
      { btn: dom.tabDrugs, view: dom.viewDrugs, id: 'view-drugs' },
      { btn: dom.tabLabs, view: dom.viewLabs, id: 'view-labs' },
      { btn: dom.tabEmergency, view: dom.viewEmergency, id: 'view-emergency' }
    ];

    tabs.forEach(({ btn, id }) => {
      btn.addEventListener('click', () => {
        switchTab(id);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 8. Drug Interactions Engine
  // ---------------------------------------------------------------------------
  function initDrugEngine() {
    renderCommonDrugPills();
    renderSelectedDrugs();
    evaluateInteractions();

    // Search Input
    dom.drugSearchInput.addEventListener('input', handleDrugSearch);
    dom.drugSearchInput.addEventListener('focus', handleDrugSearch);

    document.addEventListener('click', (e) => {
      if (!dom.drugSearchInput.contains(e.target) && !dom.drugSuggestionsBox.contains(e.target)) {
        dom.drugSuggestionsBox.classList.add('hidden');
      }
    });

    dom.clearDrugsBtn.addEventListener('click', () => {
      state.selectedDrugIds.clear();
      renderSelectedDrugs();
      evaluateInteractions();
      showToast('Medication tray cleared.');
    });

    // Preset Scenarios
    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const scenario = chip.getAttribute('data-scenario');
        state.selectedDrugIds.clear();

        if (scenario === 'cardiac') {
          state.selectedDrugIds.add('warfarin');
          state.selectedDrugIds.add('aspirin');
        } else if (scenario === 'critical') {
          state.selectedDrugIds.add('sildenafil');
          state.selectedDrugIds.add('nitroglycerin');
        } else if (scenario === 'psych') {
          state.selectedDrugIds.add('sertraline');
          state.selectedDrugIds.add('tramadol');
        } else if (scenario === 'metabolic') {
          state.selectedDrugIds.add('metformin');
          state.selectedDrugIds.add('alcohol');
        }

        renderSelectedDrugs();
        evaluateInteractions();
        showToast('Loaded preset scenario.');
      });
    });
  }

  function handleDrugSearch() {
    const query = dom.drugSearchInput.value.trim().toLowerCase();
    if (!query) {
      dom.drugSuggestionsBox.classList.add('hidden');
      return;
    }

    const matches = DRUGS_CATALOG.filter(d => {
      const matchName = d.name.toLowerCase().includes(query);
      const matchBrand = d.brands.some(b => b.toLowerCase().includes(query));
      const matchClass = d.class.toLowerCase().includes(query);
      return (matchName || matchBrand || matchClass) && !state.selectedDrugIds.has(d.id);
    }).slice(0, 8);

    if (matches.length === 0) {
      dom.drugSuggestionsBox.innerHTML = '<div style="padding: 12px; font-size: 0.85rem; color: var(--text-muted); text-align: center;">No matching medications found in local database.</div>';
      dom.drugSuggestionsBox.classList.remove('hidden');
      return;
    }

    dom.drugSuggestionsBox.innerHTML = matches.map(d => `
      <div class="suggestion-item" data-id="${d.id}">
        <div>
          <div class="suggestion-name">${d.name} <span style="font-weight: 400; font-size: 0.8rem; color: var(--text-muted);">(${d.brands.join(', ')})</span></div>
          <div class="suggestion-class">${d.class}</div>
        </div>
        <span style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 700;">+ ADD</span>
      </div>
    `).join('');

    dom.drugSuggestionsBox.querySelectorAll('.suggestion-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        addDrugToTray(id);
        dom.drugSearchInput.value = '';
        dom.drugSuggestionsBox.classList.add('hidden');
      });
    });

    dom.drugSuggestionsBox.classList.remove('hidden');
  }

  function addDrugToTray(drugId) {
    if (state.selectedDrugIds.has(drugId)) return;
    state.selectedDrugIds.add(drugId);
    renderSelectedDrugs();
    evaluateInteractions();
  }

  function removeDrugFromTray(drugId) {
    state.selectedDrugIds.delete(drugId);
    renderSelectedDrugs();
    evaluateInteractions();
  }

  function renderCommonDrugPills() {
    const popularIds = ['warfarin', 'aspirin', 'sildenafil', 'nitroglycerin', 'sertraline', 'tramadol', 'metformin', 'lisinopril', 'atorvastatin', 'ibuprofen', 'ciprofloxacin', 'alcohol'];
    dom.commonDrugPills.innerHTML = popularIds.map(id => {
      const drug = DRUGS_CATALOG.find(d => d.id === id);
      return `<button class="common-pill" data-id="${id}">+ ${drug.name}</button>`;
    }).join('');

    dom.commonDrugPills.querySelectorAll('.common-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        addDrugToTray(btn.getAttribute('data-id'));
      });
    });
  }

  function renderSelectedDrugs() {
    dom.selectedDrugCount.textContent = state.selectedDrugIds.size;

    if (state.selectedDrugIds.size === 0) {
      dom.selectedDrugsList.innerHTML = '<div class="empty-tray-notice">No medications selected yet. Use the search box above or click a quick scenario to begin analysis.</div>';
      return;
    }

    dom.selectedDrugsList.innerHTML = Array.from(state.selectedDrugIds).map(id => {
      const drug = DRUGS_CATALOG.find(d => d.id === id);
      return `
        <div class="med-chip">
          <span>${drug.name}</span>
          <button class="chip-remove-btn" data-id="${id}" title="Remove ${drug.name}" aria-label="Remove ${drug.name}">&times;</button>
        </div>
      `;
    }).join('');

    dom.selectedDrugsList.querySelectorAll('.chip-remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        removeDrugFromTray(btn.getAttribute('data-id'));
      });
    });
  }

  function evaluateInteractions() {
    const ids = Array.from(state.selectedDrugIds);

    if (ids.length < 2) {
      dom.interactionSummaryBadge.className = 'status-indicator-pill neutral';
      dom.interactionSummaryBadge.textContent = ids.length === 1 ? 'Select 1 More' : 'Ready';
      if (dom.pairwiseMatrixCard) {
        dom.pairwiseMatrixCard.style.display = 'none';
      }
      dom.interactionResultsArea.innerHTML = `
        <div class="empty-state-card">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="empty-state-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M12 8v4"/>
            <path d="M12 16h.01"/>
          </svg>
          <div class="empty-state-title">${ids.length === 1 ? 'One Medication Selected' : 'Awaiting Medication Input'}</div>
          <div class="empty-state-text">${ids.length === 1 ? 'Add at least one more drug or supplement to evaluate pairwise interactions.' : 'Select at least two medications to cross-reference our clinical interaction matrix and evaluate metabolic risks.'}</div>
        </div>
      `;
      return;
    }

    // Find all pairwise combinations
    const findings = [];
    for (let i = 0; i < ids.length; i++) {
      for (let j = i + 1; j < ids.length; j++) {
        const idA = ids[i];
        const idB = ids[j];
        const match = INTERACTION_PAIRS.find(p =>
          (p.drugs[0] === idA && p.drugs[1] === idB) ||
          (p.drugs[0] === idB && p.drugs[1] === idA)
        );
        if (match) {
          const drugA = DRUGS_CATALOG.find(d => d.id === idA);
          const drugB = DRUGS_CATALOG.find(d => d.id === idB);
          findings.push({ ...match, drugA, drugB });
        }
      }
    }

    // Sort findings by severity: critical > major > moderate > minor
    const severityRank = { critical: 4, major: 3, moderate: 2, minor: 1 };
    findings.sort((a, b) => severityRank[b.severity] - severityRank[a.severity]);

    if (findings.length === 0) {
      dom.interactionSummaryBadge.className = 'status-indicator-pill clean';
      dom.interactionSummaryBadge.textContent = 'No Critical Flags';
      dom.interactionResultsArea.innerHTML = `
        <div class="finding-card" style="border-left-color: #3B82F6; background: var(--bg-mint-wash, rgba(59, 130, 246, 0.12));">
          <div class="finding-top">
            <div class="finding-pair" style="color: #60A5FA;">No Major Documented Interactions Detected</div>
            <span class="severity-tag" style="background: #2563EB; color: #fff;">Clear</span>
          </div>
          <div class="finding-desc">
            No dangerous pairwise interactions were detected between the ${ids.length} selected medications in our core clinical database.
          </div>
          <div class="finding-action">
            Note: Always consult your prescribing physician and pharmacist when starting new medications or supplements, as individual metabolic factors may vary.
          </div>
        </div>
      `;

    // Render Pairwise Interaction Collision Matrix
    if (dom.pairwiseMatrixCard && dom.pairwiseMatrixContainer) {
      dom.pairwiseMatrixCard.style.display = 'block';
      if (dom.matrixCountTag) {
        dom.matrixCountTag.textContent = `${ids.length} x ${ids.length} Collision Matrix`;
      }

      const drugObjs = ids.map(id => DRUGS_CATALOG.find(d => d.id === id) || { id, name: id });

      let matrixHtml = `<table class="matrix-table"><thead><tr><th class="matrix-th">Medication</th>`;
      drugObjs.forEach(d => {
        matrixHtml += `<th class="matrix-th">${d.name}</th>`;
      });
      matrixHtml += `</tr></thead><tbody>`;

      drugObjs.forEach((rowDrug, rIdx) => {
        matrixHtml += `<tr><th class="matrix-th">${rowDrug.name}</th>`;
        drugObjs.forEach((colDrug, cIdx) => {
          if (rIdx === cIdx) {
            matrixHtml += `<td class="matrix-td matrix-cell-self">-</td>`;
          } else {
            const pairMatch = INTERACTION_PAIRS.find(p =>
              (p.drugs[0] === rowDrug.id && p.drugs[1] === colDrug.id) ||
              (p.drugs[0] === colDrug.id && p.drugs[1] === rowDrug.id)
            );
            if (pairMatch) {
              const sev = pairMatch.severity;
              const sevClass = sev === 'critical' ? 'matrix-cell-critical' : (sev === 'major' ? 'matrix-cell-major' : 'matrix-cell-moderate');
              matrixHtml += `<td class="matrix-td ${sevClass}" title="${pairMatch.title}: ${pairMatch.description}">${sev.toUpperCase()}</td>`;
            } else {
              matrixHtml += `<td class="matrix-td matrix-cell-clean" title="No documented high-severity collision">CLEAN</td>`;
            }
          }
        });
        matrixHtml += `</tr>`;
      });
      matrixHtml += `</tbody></table>`;
      dom.pairwiseMatrixContainer.innerHTML = matrixHtml;
    }
      return;
    }

    // Has flags
    const highestSeverity = findings[0].severity;
    dom.interactionSummaryBadge.className = `status-indicator-pill alert`;
    dom.interactionSummaryBadge.textContent = `${findings.length} Flag${findings.length > 1 ? 's' : ''} (${highestSeverity.toUpperCase()})`;

    dom.interactionResultsArea.innerHTML = findings.map(f => `
      <div class="finding-card ${f.severity}">
        <div class="finding-top">
          <div class="finding-pair">${f.drugA.name} + ${f.drugB.name}</div>
          <span class="severity-tag ${f.severity}">${f.severity}</span>
        </div>
        <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-main);">${f.title}</div>
        <div class="finding-desc">${f.description}</div>
        <div class="finding-action"><strong>Clinical Guidance:</strong> ${f.action}</div>
      </div>
    `).join('');

    // Render Pairwise Interaction Collision Matrix
    if (dom.pairwiseMatrixCard && dom.pairwiseMatrixContainer) {
      dom.pairwiseMatrixCard.style.display = 'block';
      if (dom.matrixCountTag) {
        dom.matrixCountTag.textContent = `${ids.length} x ${ids.length} Collision Matrix`;
      }

      const drugObjs = ids.map(id => DRUGS_CATALOG.find(d => d.id === id) || { id, name: id });

      let matrixHtml = `<table class="matrix-table"><thead><tr><th class="matrix-th">Medication</th>`;
      drugObjs.forEach(d => {
        matrixHtml += `<th class="matrix-th">${d.name}</th>`;
      });
      matrixHtml += `</tr></thead><tbody>`;

      drugObjs.forEach((rowDrug, rIdx) => {
        matrixHtml += `<tr><th class="matrix-th">${rowDrug.name}</th>`;
        drugObjs.forEach((colDrug, cIdx) => {
          if (rIdx === cIdx) {
            matrixHtml += `<td class="matrix-td matrix-cell-self">-</td>`;
          } else {
            const pairMatch = INTERACTION_PAIRS.find(p =>
              (p.drugs[0] === rowDrug.id && p.drugs[1] === colDrug.id) ||
              (p.drugs[0] === colDrug.id && p.drugs[1] === rowDrug.id)
            );
            if (pairMatch) {
              const sev = pairMatch.severity;
              const sevClass = sev === 'critical' ? 'matrix-cell-critical' : (sev === 'major' ? 'matrix-cell-major' : 'matrix-cell-moderate');
              matrixHtml += `<td class="matrix-td ${sevClass}" title="${pairMatch.title}: ${pairMatch.description}">${sev.toUpperCase()}</td>`;
            } else {
              matrixHtml += `<td class="matrix-td matrix-cell-clean" title="No documented high-severity collision">CLEAN</td>`;
            }
          }
        });
        matrixHtml += `</tr>`;
      });
      matrixHtml += `</tbody></table>`;
      dom.pairwiseMatrixContainer.innerHTML = matrixHtml;
    }
  }

  // ---------------------------------------------------------------------------
  // 9. Clinical Lab Explainer Engine
  // ---------------------------------------------------------------------------
  function initLabEngine() {
    renderLabTestList();

    // Category Filter Chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeLabCategory = chip.getAttribute('data-category');
        renderLabTestList();
      });
    });

    // Search Input
    dom.labSearchInput.addEventListener('input', () => {
      renderLabTestList();
    });

    // User Value Input
    dom.userLabValueInput.addEventListener('input', evaluateUserLabValue);

    // Auto-select first test
    if (LAB_TESTS_CATALOG.length > 0) {
      selectLabTest(LAB_TESTS_CATALOG[0].id);
    }
  }

  function renderLabTestList() {
    const query = dom.labSearchInput.value.trim().toLowerCase();
    const filtered = LAB_TESTS_CATALOG.filter(test => {
      const matchCat = state.activeLabCategory === 'all' || test.category === state.activeLabCategory;
      const matchQuery = !query ||
        test.name.toLowerCase().includes(query) ||
        test.acronym.toLowerCase().includes(query) ||
        test.panelName.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    dom.testCounter.textContent = `${filtered.length} Tests`;

    if (filtered.length === 0) {
      dom.labTestsList.innerHTML = '<div style="padding: 24px; text-align: center; color: var(--text-faint); font-size: 0.88rem;">No tests match your filter criteria.</div>';
      return;
    }

    dom.labTestsList.innerHTML = filtered.map(test => `
      <div class="test-list-item ${state.selectedLabTestId === test.id ? 'selected' : ''}" data-id="${test.id}">
        <div>
          <div class="test-item-name">${test.name}</div>
          <div class="test-item-meta">${test.acronym} &bull; ${test.panelName}</div>
        </div>
        <span class="unit-box">${test.unit}</span>
      </div>
    `).join('');

    dom.labTestsList.querySelectorAll('.test-list-item').forEach(item => {
      item.addEventListener('click', () => {
        selectLabTest(item.getAttribute('data-id'));
      });
    });
  }

  function selectLabTest(testId) {
    state.selectedLabTestId = testId;
    const test = LAB_TESTS_CATALOG.find(t => t.id === testId);
    if (!test) return;

    // Highlight in list
    document.querySelectorAll('.test-list-item').forEach(i => {
      i.classList.toggle('selected', i.getAttribute('data-id') === testId);
    });

    // Populate active details
    dom.labDetailEmpty.classList.add('hidden');
    dom.labDetailActive.classList.remove('hidden');

    dom.detailPanelBadge.textContent = test.panelName;
    dom.detailTestName.textContent = test.name;
    dom.detailUnit.textContent = test.unit;
    dom.inputUnitTag.textContent = test.unit;

    // Ticks & Dynamic Segment Widths (Bug 4 fix)
    dom.tickMin.textContent = test.min;
    dom.tickNormalMin.textContent = test.optimalMin;
    dom.tickNormalMax.textContent = test.optimalMax;
    dom.tickMax.textContent = test.max;

    const totalRange = test.max - test.min;
    const lowPct = ((test.optimalMin - test.min) / totalRange) * 100;
    const optPct = ((test.optimalMax - test.optimalMin) / totalRange) * 100;
    const highPct = ((test.max - test.optimalMax) / totalRange) * 100;

    const segLow = document.getElementById('segLowBar');
    const segNormal = document.getElementById('segNormalBar');
    const segHigh = document.getElementById('segHighBar');

    if (segLow) segLow.style.width = `${lowPct}%`;
    if (segNormal) segNormal.style.width = `${optPct}%`;
    if (segHigh) segHigh.style.width = `${highPct}%`;

    if (dom.tickNormalMin) dom.tickNormalMin.style.left = `${lowPct}%`;
    if (dom.tickNormalMax) dom.tickNormalMax.style.left = `${lowPct + optPct}%`;

    // Content
    dom.detailDescription.textContent = test.desc;
    dom.detailBenignReasons.textContent = test.benignReasons;
    dom.detailQuestions.innerHTML = test.questions.map(q => `<li>${q}</li>`).join('');

    // Reset user input and gauge
    dom.userLabValueInput.value = '';
    dom.userValuePointer.classList.add('hidden');
    dom.evaluationFeedback.classList.add('hidden');
  }

  function evaluateUserLabValue() {
    const rawVal = dom.userLabValueInput.value.trim();
    if (!rawVal || isNaN(rawVal)) {
      dom.userValuePointer.classList.add('hidden');
      dom.evaluationFeedback.classList.add('hidden');
      return;
    }

    const test = LAB_TESTS_CATALOG.find(t => t.id === state.selectedLabTestId);
    if (!test) return;

    const val = parseFloat(rawVal);
    const min = test.min;
    const max = test.max;
    const optMin = test.optimalMin;
    const optMax = test.optimalMax;

    // Calculate percentage on gauge
    let pct = ((val - min) / (max - min)) * 100;
    pct = Math.max(3, Math.min(97, pct)); // Clamp inside bar visually

    dom.userValuePointer.style.left = `${pct}%`;
    dom.pointerValueLabel.textContent = `${val} ${test.unit}`;
    dom.userValuePointer.classList.remove('hidden');

    // Dynamic Pin and Bubble Styling
    const pin = dom.userValuePointer.querySelector('.pointer-pin');

    // Feedback
    dom.evaluationFeedback.classList.remove('hidden');
    if (val < optMin) {
      if (pin) pin.style.borderTopColor = '#38bdf8';
      dom.pointerValueLabel.style.background = '#0284c7';
      dom.pointerValueLabel.style.color = '#ffffff';

      dom.evaluationFeedback.className = 'evaluation-feedback-box deviant';
      dom.evaluationFeedback.innerHTML = `
        <strong>Result: Lower than Standard Reference Interval (${optMin} - ${optMax} ${test.unit})</strong>
        <p style="margin-top: 4px; font-size: 0.82rem;">Your value of ${val} ${test.unit} falls below standard adult baseline brackets. Review the non-emergency causes below and discuss with your clinician.</p>
      `;
    } else if (val > optMax) {
      if (pin) pin.style.borderTopColor = '#f43f5e';
      dom.pointerValueLabel.style.background = '#e11d48';
      dom.pointerValueLabel.style.color = '#ffffff';

      dom.evaluationFeedback.className = 'evaluation-feedback-box deviant';
      dom.evaluationFeedback.innerHTML = `
        <strong>Result: Higher than Standard Reference Interval (${optMin} - ${optMax} ${test.unit})</strong>
        <p style="margin-top: 4px; font-size: 0.82rem;">Your value of ${val} ${test.unit} falls above standard adult baseline brackets. Consider recent diet, workouts, or discuss with your clinician.</p>
      `;
    } else {
      if (pin) pin.style.borderTopColor = '#3B82F6';
      dom.pointerValueLabel.style.background = '#2563EB';
      dom.pointerValueLabel.style.color = '#ffffff';

      dom.evaluationFeedback.className = 'evaluation-feedback-box optimal';
      dom.evaluationFeedback.innerHTML = `
        <strong>Result: Within Optimal Adult Reference Interval (${optMin} - ${optMax} ${test.unit})</strong>
        <p style="margin-top: 4px; font-size: 0.82rem;">Your value of ${val} ${test.unit} falls squarely within the standard physiological range for healthy adults.</p>
      `;
    }
  }

  // ---------------------------------------------------------------------------
  // 10. Emergency Medical Card (ICE) Engine
  // ---------------------------------------------------------------------------
  function initIceEngine() {
    loadSavedIceData();
    attachIceInputListeners();

    dom.sampleIceBtn.addEventListener('click', loadDemoIceData);
    dom.printCardBtn.addEventListener('click', () => {
      window.print();
    });

    dom.copyIceTextBtn.addEventListener('click', copyEmergencyText);
  }

  function attachIceInputListeners() {
    const fields = [
      dom.iceFullName, dom.iceDob, dom.iceBloodType, dom.iceContactPrimary,
      dom.iceContactSecondary, dom.iceAllergies, dom.iceConditions,
      dom.iceMedications, dom.iceNotes
    ];

    fields.forEach(field => {
      field.addEventListener('input', () => {
        updateCardDisplays();
        saveIceData();
      });
    });
  }

  function updateCardDisplays() {
    const name = dom.iceFullName.value.trim() || 'Jane M. Doe';
    const dob = dom.iceDob.value.trim() || '1990-05-15';
    const blood = dom.iceBloodType.value;
    const primary = dom.iceContactPrimary.value.trim() || 'John Doe (Spouse) - +1 (555) 234-5678';
    const secondary = dom.iceContactSecondary.value.trim();
    const allergies = dom.iceAllergies.value.trim() || 'No Known Drug Allergies (NKDA)';
    const conditions = dom.iceConditions.value.trim() || 'None Reported';
    const medications = dom.iceMedications.value.trim() || 'None Reported';
    const notes = dom.iceNotes.value.trim() || 'None';

    dom.cardNameDisplay.textContent = name;
    dom.cardDobDisplay.textContent = dob;
    dom.cardBloodDisplay.textContent = blood;
    dom.cardPrimaryDisplay.textContent = primary;

    if (secondary) {
      dom.cardSecondaryDisplay.textContent = secondary;
      dom.cardSecondaryWrap.style.display = 'block';
    } else {
      dom.cardSecondaryWrap.style.display = 'none';
    }

    dom.cardAllergiesDisplay.textContent = allergies;
    dom.cardConditionsDisplay.textContent = conditions;
    dom.cardMedicationsDisplay.textContent = medications;
    dom.cardNotesDisplay.textContent = notes;
    dom.cardDonorDisplay.textContent = notes.toLowerCase().includes('donor') ? 'Yes' : 'Not Specified';
  }

  function saveIceData() {
    const data = {
      fullName: dom.iceFullName.value,
      dob: dom.iceDob.value,
      bloodType: dom.iceBloodType.value,
      primaryContact: dom.iceContactPrimary.value,
      secondaryContact: dom.iceContactSecondary.value,
      allergies: dom.iceAllergies.value,
      conditions: dom.iceConditions.value,
      medications: dom.iceMedications.value,
      notes: dom.iceNotes.value
    };
    localStorage.setItem('medguard_ice_profile', JSON.stringify(data));
  }

  function loadSavedIceData() {
    const saved = localStorage.getItem('medguard_ice_profile');
    if (!saved) {
      loadDemoIceData();
      return;
    }
    try {
      const data = JSON.parse(saved);
      dom.iceFullName.value = data.fullName || '';
      dom.iceDob.value = data.dob || '';
      dom.iceBloodType.value = data.bloodType || 'O+';
      dom.iceContactPrimary.value = data.primaryContact || '';
      dom.iceContactSecondary.value = data.secondaryContact || '';
      dom.iceAllergies.value = data.allergies || '';
      dom.iceConditions.value = data.conditions || '';
      dom.iceMedications.value = data.medications || '';
      dom.iceNotes.value = data.notes || '';
      updateCardDisplays();
    } catch (e) {
      loadDemoIceData();
    }
  }

  function loadDemoIceData() {
    dom.iceFullName.value = 'Jane M. Doe';
    dom.iceDob.value = '1990-05-15';
    dom.iceBloodType.value = 'O+';
    dom.iceContactPrimary.value = 'John Doe (Spouse) - +1 (555) 234-5678';
    dom.iceContactSecondary.value = 'Dr. Sarah Chen (Physician) - +1 (555) 987-6543';
    dom.iceAllergies.value = 'Penicillin (Anaphylaxis), Peanuts, Sulfa Drugs';
    dom.iceConditions.value = 'Type 1 Diabetes, Asthma, Hypertension';
    dom.iceMedications.value = 'Insulin Glargine 20u qHS, Lisinopril 10mg PO QD';
    dom.iceNotes.value = 'Cardiac Pacemaker (2023), Registered Organ Donor';
    updateCardDisplays();
    saveIceData();
    showToast('Loaded demo medical identity.');
  }

  function copyEmergencyText() {
    const name = dom.iceFullName.value.trim() || 'Jane M. Doe';
    const dob = dom.iceDob.value.trim() || '1990-05-15';
    const blood = dom.iceBloodType.value;
    const primary = dom.iceContactPrimary.value.trim() || 'None';
    const secondary = dom.iceContactSecondary.value.trim() || 'None';
    const allergies = dom.iceAllergies.value.trim() || 'No Known Drug Allergies (NKDA)';
    const conditions = dom.iceConditions.value.trim() || 'None';
    const meds = dom.iceMedications.value.trim() || 'None';
    const notes = dom.iceNotes.value.trim() || 'None';

    const text = [
      '========================================',
      'IN CASE OF EMERGENCY (ICE) - MEDICAL CARD',
      '========================================',
      `NAME: ${name}`,
      `DATE OF BIRTH: ${dob}`,
      `BLOOD TYPE: ${blood}`,
      `PRIMARY EMERGENCY CONTACT: ${primary}`,
      `SECONDARY EMERGENCY CONTACT: ${secondary}`,
      '----------------------------------------',
      `CRITICAL ALLERGIES: ${allergies}`,
      `CHRONIC MEDICAL CONDITIONS: ${conditions}`,
      `ACTIVE MEDICATIONS: ${meds}`,
      `MEDICAL NOTES / IMPLANTS: ${notes}`,
      '========================================',
      'Generated with MedGuard (Local-First Medical Companion)'
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      showToast('Emergency text copied to clipboard.');
    }).catch(() => {
      showToast('Failed to copy to clipboard.');
    });
  }

  // ---------------------------------------------------------------------------
  // 11. Toast Notifications
  // ---------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    dom.toastMessage.textContent = message;
    dom.toastMessage.classList.remove('hidden');
    toastTimer = setTimeout(() => {
      dom.toastMessage.classList.add('hidden');
    }, 2800);
  }

  // ---------------------------------------------------------------------------
  // 12. Spotlight Micro-Interaction
  // ---------------------------------------------------------------------------
  function initSpotlightCards() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 13. Global Keyboard Shortcuts
  // ---------------------------------------------------------------------------
  function initKeyboardShortcuts() {
    window.addEventListener('keydown', e => {
      const tag = (e.target.tagName || '').toLowerCase();
      const isInput = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;

      if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) && !isInput) {
        e.preventDefault();
        if (dom.viewLabs.classList.contains('active')) {
          dom.labSearchInput.focus();
          dom.labSearchInput.select();
        } else {
          switchTab('view-drugs');
          dom.drugSearchInput.focus();
          dom.drugSearchInput.select();
        }
      } else if (e.key === 'Escape' && isInput) {
        e.target.blur();
        if (dom.drugSuggestionsBox) {
          dom.drugSuggestionsBox.classList.add('hidden');
        }
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 14. Interactive Biochemical Mesh Canvas
  // ---------------------------------------------------------------------------
  function initMeshCanvas() {
    const canvas = document.getElementById('meshCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      if (ctx.resetTransform) {
        ctx.resetTransform();
      }
      ctx.scale(dpr, dpr);
      buildNodes();
    }

    const mouse = { x: width / 2, y: height / 2, active: false };

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    });

    window.addEventListener('resize', resizeCanvas);

    const NODE_COUNT = Math.min(Math.floor((width * height) / 14000), 85);
    let nodes = [];

    function buildNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() < 0.25 ? 2.2 : 1.4,
          baseAlpha: Math.random() * 0.4 + 0.2
        });
      }
    }

    resizeCanvas();

    function render() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.body.classList.contains('dark-theme');
      const nodeColor = isDark ? 'rgba(255, 255, 255,' : 'rgba(13, 27, 42,';
      const lineColor = isDark ? 'rgba(59, 130, 246,' : 'rgba(0, 102, 204,';

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - a.x;
          const dy = mouse.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const force = (180 - dist) / 180;
            a.x += (dx / dist) * force * 0.6;
            a.y += (dy / dist) * force * 0.6;
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${nodeColor} ${a.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `${lineColor} ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(render);
    }

    render();
  }

  // ---------------------------------------------------------------------------
  // 15. 3D Mouse Parallax Tilt for Medical ID Cards
  // ---------------------------------------------------------------------------
  function initCardTilt() {
    const cards = document.querySelectorAll('.card-preview-stage .medical-id-card');
    cards.forEach(card => {
      const glare = card.querySelector('.holo-glare');
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 12;
        const rotateX = -((y - centerY) / centerY) * 12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        if (glare) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.22) 0%, transparent 65%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        if (glare) {
          glare.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)';
        }
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 16. Application Bootstrapper
  // ---------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initDrugEngine();
    initLabEngine();
    initIceEngine();
    initSpotlightCards();
    initKeyboardShortcuts();
    initMeshCanvas();
    initCardTilt();
  });
})();
