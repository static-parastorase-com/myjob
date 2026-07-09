const questions = [
  {
    "cat": "General Knowledge",
    "kn": "ಕರ್ನಾಟಕದ ರಾಜಧಾನಿ ಯಾವುದು?",
    "en": "What is the capital of Karnataka?",
    "options": [
      "Bengaluru",
      "Mysuru",
      "Belagavi",
      "Mangaluru"
    ],
    "answer": 0,
    "summary": "Bengaluru is the administrative capital of Karnataka."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಕರ್ನಾಟಕದ ರಾಜ್ಯ ಪ್ರಾಣಿ ಯಾವುದು?",
    "en": "What is Karnataka state animal?",
    "options": [
      "Tiger",
      "Asian elephant",
      "Lion",
      "Blackbuck"
    ],
    "answer": 1,
    "summary": "The Asian elephant is Karnataka’s state animal."
  },
  {
    "cat": "General Knowledge",
    "kn": "ವಿಧಾನಸೌಧ ಯಾವ ನಗರದಲ್ಲಿದೆ?",
    "en": "Vidhana Soudha is located in which city?",
    "options": [
      "Bengaluru",
      "Dharwad",
      "Kalaburagi",
      "Hassan"
    ],
    "answer": 0,
    "summary": "Vidhana Soudha in Bengaluru houses the state legislature."
  },
  {
    "cat": "General Knowledge",
    "kn": "ತುಂಗಭದ್ರಾ ಅಣೆಕಟ್ಟು ಯಾವ ನದಿಯ ಮೇಲೆ ಇದೆ?",
    "en": "Tungabhadra Dam is built across which river?",
    "options": [
      "Kaveri",
      "Krishna",
      "Tungabhadra",
      "Sharavathi"
    ],
    "answer": 2,
    "summary": "The dam is on the Tungabhadra River near Hospet."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಮೈಸೂರು ದಸರಾ ಮುಖ್ಯವಾಗಿ ಯಾವ ಅರಮನೆಯೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದೆ?",
    "en": "Mysuru Dasara is mainly associated with which palace?",
    "options": [
      "Bangalore Palace",
      "Mysore Palace",
      "Tipu Palace",
      "Nalknad Palace"
    ],
    "answer": 1,
    "summary": "Mysore Palace is the centre of Dasara celebrations."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಚಿಹ್ನೆ ಯಾವ ಸ್ತಂಭದಿಂದ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ?",
    "en": "India’s national emblem is taken from which pillar?",
    "options": [
      "Ashoka Lion Capital, Sarnath",
      "Qutub Minar",
      "Charminar",
      "Gateway of India"
    ],
    "answer": 0,
    "summary": "The emblem is adapted from the Lion Capital of Ashoka at Sarnath."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ಜಲಚರ ಯಾವುದು?",
    "en": "What is India’s national aquatic animal?",
    "options": [
      "Crocodile",
      "Gangetic dolphin",
      "Blue whale",
      "Rohu fish"
    ],
    "answer": 1,
    "summary": "The Gangetic dolphin is India’s national aquatic animal."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಜೋಗ ಜಲಪಾತ ಯಾವ ನದಿಯ ಮೇಲೆ ಇದೆ?",
    "en": "Jog Falls is on which river?",
    "options": [
      "Sharavathi",
      "Kabini",
      "Hemavathi",
      "Bhima"
    ],
    "answer": 0,
    "summary": "Jog Falls is formed by the Sharavathi River."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಕರ್ನಾಟಕದ ಉನ್ನತ ನ್ಯಾಯಾಲಯ ಎಲ್ಲಿದೆ?",
    "en": "Where is the High Court of Karnataka located?",
    "options": [
      "Bengaluru",
      "Mysuru",
      "Ballari",
      "Udupi"
    ],
    "answer": 0,
    "summary": "The principal seat is in Bengaluru."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಹಂಪಿ ಯಾವ ಸಾಮ್ರಾಜ್ಯದ ಅವಶೇಷಗಳಿಗೆ ಪ್ರಸಿದ್ಧ?",
    "en": "Hampi is famous for ruins of which empire?",
    "options": [
      "Maurya",
      "Vijayanagara",
      "Gupta",
      "Chola"
    ],
    "answer": 1,
    "summary": "Hampi was the capital region of the Vijayanagara Empire."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಭಾರತದ ಮೊದಲ ಗೃಹ ಸಚಿವ ಯಾರು?",
    "en": "Who was India’s first Home Minister?",
    "options": [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "B R Ambedkar",
      "Rajendra Prasad"
    ],
    "answer": 1,
    "summary": "Sardar Patel was independent India’s first Home Minister."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಕರ್ನಾಟಕದ ಕರಾವಳಿ ಸಮುದ್ರ ಯಾವುದು?",
    "en": "Karnataka coast lies along which sea?",
    "options": [
      "Arabian Sea",
      "Bay of Bengal",
      "Red Sea",
      "Caspian Sea"
    ],
    "answer": 0,
    "summary": "Karnataka’s west coast touches the Arabian Sea."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಕನ್ನಡ ಭಾಷೆಯ ಲಿಪಿ ಯಾವುದು?",
    "en": "Kannada language uses which script?",
    "options": [
      "Devanagari",
      "Kannada script",
      "Tamil script",
      "Roman script"
    ],
    "answer": 1,
    "summary": "Kannada is written in the Kannada script."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಭಾರತದ ಅತಿ ಉದ್ದದ ನದಿ ವ್ಯವಸ್ಥೆ ಯಾವುದು?",
    "en": "Which is India’s longest river system?",
    "options": [
      "Ganga",
      "Narmada",
      "Mahanadi",
      "Tapi"
    ],
    "answer": 0,
    "summary": "The Ganga system is the longest river system in India."
  },
  {
    "cat": "General Knowledge",
    "kn": "ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಇಲಾಖೆಯ ಮುಖ್ಯಸ್ಥ ಹುದ್ದೆ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವುದು?",
    "en": "The head of Karnataka Police is generally called what?",
    "options": [
      "DGP and IGP",
      "Deputy Commissioner",
      "Tahsildar",
      "Mayor"
    ],
    "answer": 0,
    "summary": "The Director General and Inspector General of Police heads the state police."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ಜುಲೈ 8ರವರೆಗೆ ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಸಿವಿಲ್ ಕಾನ್ಸ್‌ಟೇಬಲ್ ಅರ್ಜಿ ಕೊನೆಯ ದಿನಾಂಕ ವಿಸ್ತರಿಸಿದ ಸಂಸ್ಥೆ ಯಾವುದು?",
    "en": "Which body extended Karnataka Police Civil Constable 2026 application deadline to July 8, 2026?",
    "options": [
      "KEA",
      "UPSC",
      "SSC",
      "KPSC"
    ],
    "answer": 0,
    "summary": "KEA handled the 2026 Karnataka Police Civil Constable recruitment application update."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಸಿವಿಲ್ ಕಾನ್ಸ್‌ಟೇಬಲ್ ನೇಮಕಾತಿಯಲ್ಲಿ ವರದಿಯಾದ ಹುದ್ದೆಗಳ ಸಂಖ್ಯೆ ಎಷ್ಟು?",
    "en": "How many Karnataka Police Civil Constable vacancies were reported in 2026?",
    "options": [
      "3991",
      "1500",
      "545",
      "12000"
    ],
    "answer": 0,
    "summary": "The recruitment update mentioned 3,991 Civil Police Constable posts."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ಜುಲೈ 8ರಂದು ಗಗನಯಾನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಮುಖ್ಯ ಪ್ಯಾರಾಶೂಟ್ ಪರೀಕ್ಷೆ ನಡೆಸಿದ ಸಂಸ್ಥೆ ಯಾವುದು?",
    "en": "Which organisation tested a main parachute system for Gaganyaan on July 8, 2026?",
    "options": [
      "ISRO",
      "NASA",
      "DRDO",
      "HAL"
    ],
    "answer": 0,
    "summary": "ISRO tested the parachute system for safe crew-module recovery."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "ಗಗನಯಾನ ಯಾವ ಕ್ಷೇತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?",
    "en": "Gaganyaan is related to which field?",
    "options": [
      "Human spaceflight",
      "Agriculture",
      "Banking",
      "Railways"
    ],
    "answer": 0,
    "summary": "Gaganyaan is India’s human spaceflight mission."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರಲ್ಲಿ ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಅರ್ಜಿ ಪೋರ್ಟಲ್‌ಗೆ ಸಂಬಂಧಿಸಿದ ಪರೀಕ್ಷಾ ಪ್ರಾಧಿಕಾರ ಯಾವುದು?",
    "en": "Which exam authority is linked with the 2026 Karnataka police application portal?",
    "options": [
      "Karnataka Examinations Authority",
      "CBSE",
      "NTA only",
      "Election Commission"
    ],
    "answer": 0,
    "summary": "The KEA portal is used for this Karnataka recruitment process."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರಲ್ಲಿ ಸುದ್ದಿಯಲ್ಲಿದ್ದ UAPA ಮುಖ್ಯವಾಗಿ ಯಾವುದಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?",
    "en": "UAPA, in 2026 news, mainly relates to what?",
    "options": [
      "Unlawful activities and terrorism",
      "Income tax refunds",
      "Food safety",
      "Road tolls"
    ],
    "answer": 0,
    "summary": "UAPA deals with unlawful activities and terrorist designations."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ಏಪ್ರಿಲ್ ಸುದ್ದಿಗಳಲ್ಲಿ Operation Global Hunt ಯಾವ ಕ್ಷೇತ್ರಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?",
    "en": "Operation Global Hunt in April 2026 news was linked to which area?",
    "options": [
      "International narcotics networks",
      "Space launch",
      "Wildlife census",
      "Sports training"
    ],
    "answer": 0,
    "summary": "It was described as a crackdown on international narcotics networks."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರಲ್ಲಿ AI Policy 2026ಗೆ ₹10,000 ಕೋಟಿ ಯೋಜನೆ ಅನುಮೋದಿಸಿದ ರಾಜ್ಯವೆಂದು ಸುದ್ದಿಯಲ್ಲಿದ್ದುದು ಯಾವುದು?",
    "en": "Which state was reported to approve AI Policy 2026 with ₹10,000 crore plan?",
    "options": [
      "Maharashtra",
      "Karnataka",
      "Kerala",
      "Punjab"
    ],
    "answer": 0,
    "summary": "Reports described Maharashtra’s AI policy plan and job target."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ಜೂನ್ CSIR-UGC NET ಸಂಬಂಧಿಸಿದ city slip ಅನ್ನು ಯಾರು ಬಿಡುಗಡೆ ಮಾಡುತ್ತಾರೆ?",
    "en": "Who releases the CSIR-UGC NET exam city slip?",
    "options": [
      "National Testing Agency",
      "KEA",
      "State Police",
      "RBI"
    ],
    "answer": 0,
    "summary": "NTA conducts CSIR-UGC NET related exam processes."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರ ಪ್ರಚಲಿತ ವಿಷಯಗಳಲ್ಲಿ ಪರೀಕ್ಷೆಗೆ ಮುಖ್ಯವಾಗುವ ವಿಷಯ ಯಾವುದು?",
    "en": "Which current-affairs theme is important for exams in 2026?",
    "options": [
      "Schemes, awards, sports, appointments",
      "Only cinema gossip",
      "Only old history",
      "Only spelling"
    ],
    "answer": 0,
    "summary": "Competitive exams often ask schemes, awards, sports and appointments."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "ಪೊಲೀಸ್ ಪರೀಕ್ಷೆಗೆ 2026ರ ಘಟನೆಗಳನ್ನು ಯಾವ ಅವಧಿವರೆಗೆ ಓದಬೇಕು?",
    "en": "For this exam, current affairs should be read up to which date?",
    "options": [
      "July 28, 2026",
      "January 1, 2025",
      "December 31, 2024",
      "Only 2020"
    ],
    "answer": 0,
    "summary": "The user’s exam date is July 28, 2026, so revise January to exam date."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026 ನೇಮಕಾತಿ ಆಯ್ಕೆ ಕ್ರಮದಲ್ಲಿ ಲಿಖಿತ ಪರೀಕ್ಷೆಯ ನಂತರ ಸಾಮಾನ್ಯವಾಗಿ ಏನು ಬರುತ್ತದೆ?",
    "en": "In the 2026 constable selection process, what generally follows the written exam?",
    "options": [
      "PET/PST",
      "Only interview",
      "Essay only",
      "Typing only"
    ],
    "answer": 0,
    "summary": "Police constable selection generally includes physical tests after written screening."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರಲ್ಲಿ ಗಗನಯಾನ ಪ್ಯಾರಾಶೂಟ್ ಪರೀಕ್ಷೆಯ ಉದ್ದೇಶ ಏನು?",
    "en": "What is the purpose of Gaganyaan parachute testing?",
    "options": [
      "Safe descent and landing",
      "Internet speed",
      "Crop yield",
      "Election counting"
    ],
    "answer": 0,
    "summary": "Parachutes slow and stabilise the crew module during descent."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "KEA ಪೂರ್ಣರೂಪ ಯಾವುದು?",
    "en": "What is the full form of KEA?",
    "options": [
      "Karnataka Examinations Authority",
      "Karnataka Education Army",
      "Kerala Exam Agency",
      "Knowledge Entry Act"
    ],
    "answer": 0,
    "summary": "KEA stands for Karnataka Examinations Authority."
  },
  {
    "cat": "Current Affairs Jan-Jul 2026",
    "kn": "2026ರ ಕರ್ನಾಟಕ ಪೊಲೀಸ್ ಪರೀಕ್ಷೆ ಯಾವ ರಾಜ್ಯಕ್ಕೆ ಸಂಬಂಧಿಸಿದೆ?",
    "en": "The 2026 police constable exam is for which state?",
    "options": [
      "Karnataka",
      "Tamil Nadu",
      "Gujarat",
      "Assam"
    ],
    "answer": 0,
    "summary": "The recruitment is for Karnataka Police."
  },
  {
    "cat": "General Science",
    "kn": "ಮಾನವ ದೇಹದ ರಕ್ತವನ್ನು ಶುದ್ಧೀಕರಿಸುವ ಅಂಗ ಯಾವುದು?",
    "en": "Which organ filters blood in the human body?",
    "options": [
      "Kidney",
      "Lung",
      "Stomach",
      "Skin"
    ],
    "answer": 0,
    "summary": "Kidneys filter blood and remove wastes."
  },
  {
    "cat": "General Science",
    "kn": "ಸಸ್ಯಗಳು ಆಹಾರ ತಯಾರಿಸುವ ಕ್ರಿಯೆ?",
    "en": "Process by which plants make food?",
    "options": [
      "Photosynthesis",
      "Respiration",
      "Digestion",
      "Fermentation"
    ],
    "answer": 0,
    "summary": "Photosynthesis uses sunlight, CO2 and water."
  },
  {
    "cat": "General Science",
    "kn": "ನೀರಿನ ರಾಸಾಯನಿಕ ಸೂತ್ರ?",
    "en": "Chemical formula of water?",
    "options": [
      "H2O",
      "CO2",
      "O2",
      "NaCl"
    ],
    "answer": 0,
    "summary": "Water contains two hydrogen atoms and one oxygen atom."
  },
  {
    "cat": "General Science",
    "kn": "ವಿದ್ಯುತ್ ಧಾರೆಯ SI ಏಕಕ?",
    "en": "SI unit of electric current?",
    "options": [
      "Ampere",
      "Volt",
      "Ohm",
      "Watt"
    ],
    "answer": 0,
    "summary": "Ampere is the SI unit of current."
  },
  {
    "cat": "General Science",
    "kn": "ಧ್ವನಿ ಯಾವ ಮಾಧ್ಯಮದಲ್ಲಿ ಸಂಚರಿಸಲಾರದು?",
    "en": "Sound cannot travel through what?",
    "options": [
      "Vacuum",
      "Water",
      "Steel",
      "Air"
    ],
    "answer": 0,
    "summary": "Sound needs a material medium."
  },
  {
    "cat": "General Science",
    "kn": "ವಿಟಮಿನ್ C ಕೊರತೆಯಿಂದ ಯಾವ ರೋಗ?",
    "en": "Vitamin C deficiency causes?",
    "options": [
      "Scurvy",
      "Rickets",
      "Night blindness",
      "Goitre"
    ],
    "answer": 0,
    "summary": "Scurvy is caused by vitamin C deficiency."
  },
  {
    "cat": "General Science",
    "kn": "ಭೂಮಿ ಸೂರ್ಯನ ಸುತ್ತ ಒಂದು ಸುತ್ತಿಗೆ ಬೇಕಾಗುವ ಕಾಲ?",
    "en": "Earth takes how long to orbit the Sun?",
    "options": [
      "About 365 days",
      "24 hours",
      "30 days",
      "7 days"
    ],
    "answer": 0,
    "summary": "One revolution takes about one year."
  },
  {
    "cat": "General Science",
    "kn": "DNA ಪೂರ್ಣರೂಪ?",
    "en": "Full form of DNA?",
    "options": [
      "Deoxyribonucleic acid",
      "Dynamic nerve acid",
      "Digital natural atom",
      "Double nitrogen acid"
    ],
    "answer": 0,
    "summary": "DNA carries genetic information."
  },
  {
    "cat": "General Science",
    "kn": "ಲೋಹಗಳಲ್ಲಿ ಉತ್ತಮ ವಿದ್ಯುತ್ ವಾಹಕ ಸಾಮಾನ್ಯವಾಗಿ ಯಾವುದು?",
    "en": "Good electrical conductor among metals?",
    "options": [
      "Copper",
      "Wood",
      "Plastic",
      "Rubber"
    ],
    "answer": 0,
    "summary": "Copper is widely used for electrical wiring."
  },
  {
    "cat": "General Science",
    "kn": "ಆಮ್ಲದ pH ಸಾಮಾನ್ಯವಾಗಿ?",
    "en": "Acids usually have pH?",
    "options": [
      "Less than 7",
      "Exactly 9",
      "More than 14",
      "Always 7"
    ],
    "answer": 0,
    "summary": "Acids have pH below 7."
  },
  {
    "cat": "General Science",
    "kn": "ಮಾನವನ ಸಾಮಾನ್ಯ ದೇಹದ ತಾಪಮಾನ?",
    "en": "Normal human body temperature?",
    "options": [
      "About 37°C",
      "10°C",
      "60°C",
      "100°C"
    ],
    "answer": 0,
    "summary": "Normal body temperature is about 37°C."
  },
  {
    "cat": "General Science",
    "kn": "ಓಜೋನ್ ಪದರವು ಯಾವುದರಿಂದ ರಕ್ಷಿಸುತ್ತದೆ?",
    "en": "Ozone layer protects from?",
    "options": [
      "UV rays",
      "Sound waves",
      "Dust only",
      "Gravity"
    ],
    "answer": 0,
    "summary": "Ozone absorbs harmful ultraviolet radiation."
  },
  {
    "cat": "General Science",
    "kn": "ನ್ಯೂಟನ್‌ನ ಮೂರನೇ ನಿಯಮ ಏನು ಹೇಳುತ್ತದೆ?",
    "en": "Newton’s third law says?",
    "options": [
      "Every action has equal and opposite reaction",
      "Mass is zero",
      "Current flows backward",
      "Plants breathe nitrogen only"
    ],
    "answer": 0,
    "summary": "Action and reaction forces are equal and opposite."
  },
  {
    "cat": "General Science",
    "kn": "ರಕ್ತದ ಕೆಂಪು ಬಣ್ಣಕ್ಕೆ ಕಾರಣ?",
    "en": "Red colour of blood is due to?",
    "options": [
      "Haemoglobin",
      "Insulin",
      "Bile",
      "Melanin"
    ],
    "answer": 0,
    "summary": "Haemoglobin contains iron and carries oxygen."
  },
  {
    "cat": "General Science",
    "kn": "ಕಂಪ್ಯೂಟರ್‌ನ ಮೆದುಳು ಎಂದು ಕರೆಯುವುದು?",
    "en": "Brain of a computer is called?",
    "options": [
      "CPU",
      "Monitor",
      "Keyboard",
      "Printer"
    ],
    "answer": 0,
    "summary": "CPU processes instructions."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಭಾರತ ಸಂವಿಧಾನ ಜಾರಿಗೆ ಬಂದ ದಿನ?",
    "en": "When did Indian Constitution come into force?",
    "options": [
      "26 January 1950",
      "15 August 1947",
      "26 November 1949",
      "2 October 1950"
    ],
    "answer": 0,
    "summary": "Republic Day marks enforcement of the Constitution."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಸಂವಿಧಾನ ರಚನಾ ಸಮಿತಿಯ ಕರಡು ಸಮಿತಿ ಅಧ್ಯಕ್ಷರು?",
    "en": "Chairman of Drafting Committee?",
    "options": [
      "Dr B R Ambedkar",
      "Mahatma Gandhi",
      "Nehru",
      "Patel"
    ],
    "answer": 0,
    "summary": "Ambedkar chaired the Drafting Committee."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಮೂಲಭೂತ ಹಕ್ಕುಗಳು ಯಾವ ಭಾಗದಲ್ಲಿವೆ?",
    "en": "Fundamental Rights are in which Part?",
    "options": [
      "Part III",
      "Part IV",
      "Part I",
      "Part IX"
    ],
    "answer": 0,
    "summary": "Part III contains Fundamental Rights."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ರಾಜ್ಯ ನೀತಿ ನಿರ್ದೇಶಕ ತತ್ವಗಳು ಯಾವ ಭಾಗ?",
    "en": "DPSPs are in which Part?",
    "options": [
      "Part IV",
      "Part III",
      "Part V",
      "Part II"
    ],
    "answer": 0,
    "summary": "Part IV contains Directive Principles."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಲೋಕಸಭೆಯ ಗರಿಷ್ಠ ಅವಧಿ?",
    "en": "Normal maximum term of Lok Sabha?",
    "options": [
      "5 years",
      "6 years",
      "4 years",
      "2 years"
    ],
    "answer": 0,
    "summary": "Lok Sabha normally lasts five years."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ರಾಜ್ಯಪಾಲರನ್ನು ಯಾರು ನೇಮಿಸುತ್ತಾರೆ?",
    "en": "Who appoints a Governor?",
    "options": [
      "President of India",
      "Chief Minister",
      "Speaker",
      "DGP"
    ],
    "answer": 0,
    "summary": "The President appoints state Governors."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಭಾರತದ ರಾಷ್ಟ್ರಪತಿ ಚುನಾವಣೆ ಯಾವ ರೀತಿಯದು?",
    "en": "President of India is elected by?",
    "options": [
      "Electoral college",
      "Direct public vote only",
      "Police board",
      "Supreme Court judges only"
    ],
    "answer": 0,
    "summary": "An electoral college elects the President."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಸಂವಿಧಾನದ ರಕ್ಷಕ ಎಂದರೆ?",
    "en": "Guardian of the Constitution?",
    "options": [
      "Supreme Court",
      "Lok Sabha only",
      "Police station",
      "Municipality"
    ],
    "answer": 0,
    "summary": "The Supreme Court interprets and protects the Constitution."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಮತದಾನದ ವಯಸ್ಸು ಭಾರತದಲ್ಲಿ?",
    "en": "Voting age in India?",
    "options": [
      "18 years",
      "21 years",
      "16 years",
      "25 years"
    ],
    "answer": 0,
    "summary": "The voting age is 18 years."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಪಂಚಾಯತ್ ರಾಜ್ ಸಂಬಂಧಿಸಿದ ತಿದ್ದುಪಡಿ?",
    "en": "Amendment related to Panchayati Raj?",
    "options": [
      "73rd",
      "42nd",
      "44th",
      "52nd"
    ],
    "answer": 0,
    "summary": "The 73rd Amendment constitutionalised Panchayati Raj."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ನಗರ ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳ ತಿದ್ದುಪಡಿ?",
    "en": "Amendment for urban local bodies?",
    "options": [
      "74th",
      "61st",
      "86th",
      "101st"
    ],
    "answer": 0,
    "summary": "The 74th Amendment covers municipalities."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಮೂಲ ಕರ್ತವ್ಯಗಳು ಯಾವ ಭಾಗ?",
    "en": "Fundamental Duties are in which Part?",
    "options": [
      "Part IVA",
      "Part III",
      "Part X",
      "Part XII"
    ],
    "answer": 0,
    "summary": "Part IVA lists Fundamental Duties."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಸಂಸತ್ತಿನ ಎರಡು ಸದನಗಳು?",
    "en": "Two Houses of Parliament?",
    "options": [
      "Lok Sabha and Rajya Sabha",
      "Vidhan Sabha and Zilla Panchayat",
      "Cabinet and Police",
      "Court and Bank"
    ],
    "answer": 0,
    "summary": "Parliament has Lok Sabha and Rajya Sabha."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಭಾರತವು ಯಾವ ರೀತಿಯ ಗಣರಾಜ್ಯ?",
    "en": "India is what type of republic?",
    "options": [
      "Sovereign socialist secular democratic republic",
      "Monarchy",
      "Military rule",
      "Colony"
    ],
    "answer": 0,
    "summary": "The Preamble describes India in these terms."
  },
  {
    "cat": "Indian Constitution",
    "kn": "ಸಂವಿಧಾನ ದಿನ ಯಾವುದು?",
    "en": "Constitution Day is observed on?",
    "options": [
      "26 November",
      "15 August",
      "1 May",
      "5 June"
    ],
    "answer": 0,
    "summary": "26 November commemorates adoption of the Constitution."
  },
  {
    "cat": "Mental Ability",
    "kn": "2,4,8,16 ನಂತರ?",
    "en": "2,4,8,16 next?",
    "options": [
      "32",
      "24",
      "20",
      "30"
    ],
    "answer": 0,
    "summary": "Each term doubles."
  },
  {
    "cat": "Mental Ability",
    "kn": "Odd one: Dog, Cat, Cow, Mango",
    "en": "Odd one out: Dog, Cat, Cow, Mango",
    "options": [
      "Mango",
      "Dog",
      "Cat",
      "Cow"
    ],
    "answer": 0,
    "summary": "Mango is a fruit; others are animals."
  },
  {
    "cat": "Mental Ability",
    "kn": "A=1 ಆಗಿದ್ದರೆ C=?",
    "en": "If A=1, C=?",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "answer": 0,
    "summary": "Alphabet positions: C is 3."
  },
  {
    "cat": "Mental Ability",
    "kn": "ದಕ್ಷಿಣಕ್ಕೆ ಮುಖ ಮಾಡಿ ಎಡಕ್ಕೆ ತಿರುಗಿದರೆ ದಿಕ್ಕು?",
    "en": "Facing south, turn left. Direction?",
    "options": [
      "East",
      "West",
      "North",
      "South"
    ],
    "answer": 0,
    "summary": "Left from south is east."
  },
  {
    "cat": "Mental Ability",
    "kn": "10ರ 20% ಎಷ್ಟು?",
    "en": "20% of 10 is?",
    "options": [
      "2",
      "5",
      "1",
      "20"
    ],
    "answer": 0,
    "summary": "20/100 × 10 = 2."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪುಸ್ತಕ:ಓದು :: ಪೆನ್:?",
    "en": "Book:Read :: Pen:?",
    "options": [
      "Write",
      "Run",
      "Eat",
      "Sleep"
    ],
    "answer": 0,
    "summary": "A pen is used to write."
  },
  {
    "cat": "Mental Ability",
    "kn": "5 ಜನ ಕೈಕುಲುಕಿದರೆ ಒಟ್ಟು handshake?",
    "en": "5 people shake hands once each. Total?",
    "options": [
      "10",
      "5",
      "20",
      "15"
    ],
    "answer": 0,
    "summary": "n(n-1)/2 = 5×4/2 = 10."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಸರಣಿ 1,4,9,16 ನಂತರ?",
    "en": "1,4,9,16 next?",
    "options": [
      "25",
      "20",
      "24",
      "30"
    ],
    "answer": 0,
    "summary": "These are square numbers."
  },
  {
    "cat": "Mental Ability",
    "kn": "ತಾಯಿ ಸಹೋದರ ಯಾರು?",
    "en": "Mother’s brother is?",
    "options": [
      "Uncle",
      "Cousin",
      "Nephew",
      "Grandfather"
    ],
    "answer": 0,
    "summary": "Mother’s brother is maternal uncle."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಘಡಿಯಾರ 3:00ಕ್ಕೆ ಕೋನ?",
    "en": "Angle at 3:00?",
    "options": [
      "90°",
      "180°",
      "60°",
      "120°"
    ],
    "answer": 0,
    "summary": "Hour and minute hands form a right angle."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "ಎಲ್ಲಾ Aಗಳು B. ಕೆಲವು Bಗಳು C. ಖಚಿತವಾಗಿ?",
    "en": "All A are B. Some B are C. Definitely?",
    "options": [
      "All A are C",
      "All A are B",
      "No B is A",
      "All C are A"
    ],
    "answer": 1,
    "summary": "Only “All A are B” is directly certain."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "If today is Monday, after 10 days?",
    "en": "If today is Monday, after 10 days?",
    "options": [
      "Thursday",
      "Wednesday",
      "Friday",
      "Sunday"
    ],
    "answer": 0,
    "summary": "10 mod 7 = 3; Monday +3 = Thursday."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Code: CAT=DBU, then DOG=?",
    "en": "Code CAT=DBU, DOG=?",
    "options": [
      "EPH",
      "CNE",
      "FQI",
      "DOG"
    ],
    "answer": 0,
    "summary": "Each letter shifts by +1."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Odd pair: 2-4,3-9,4-16,5-20",
    "en": "Odd pair?",
    "options": [
      "5-20",
      "2-4",
      "3-9",
      "4-16"
    ],
    "answer": 0,
    "summary": "Others are squares; 5 square is 25."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Venn: ಪೊಲೀಸ್, ಸರ್ಕಾರಿ ನೌಕರ, ಮಾನವ",
    "en": "Police, government employee, human relation?",
    "options": [
      "Police subset of govt employees subset of humans",
      "All humans are police",
      "No police are humans",
      "Govt employees are not humans"
    ],
    "answer": 0,
    "summary": "Police are government employees and all are humans."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Statement cause-effect: ಮಳೆ ಬಂತು, ರಸ್ತೆ ಒದ್ದೆಯಾಯಿತು",
    "en": "Rain came, road became wet. Cause?",
    "options": [
      "Rain",
      "Wet road",
      "Traffic",
      "Sun"
    ],
    "answer": 0,
    "summary": "Rain is the cause of wet road."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Mirror image skill mainly tests?",
    "en": "Mirror image questions test?",
    "options": [
      "Visual reasoning",
      "Grammar",
      "History",
      "Tax law"
    ],
    "answer": 0,
    "summary": "They assess spatial/visual reasoning."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Blood relation: ತಂದೆಯ ತಂದೆ",
    "en": "Father’s father is?",
    "options": [
      "Grandfather",
      "Brother",
      "Uncle",
      "Son"
    ],
    "answer": 0,
    "summary": "Father’s father is grandfather."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Syllogism needs what?",
    "en": "Syllogism is based on?",
    "options": [
      "Logical conclusion",
      "Random guess",
      "Physical strength",
      "Speed only"
    ],
    "answer": 0,
    "summary": "Syllogism derives conclusions from statements."
  },
  {
    "cat": "Logical Reasoning",
    "kn": "Find missing: 3,6,9,12,_",
    "en": "3,6,9,12,_",
    "options": [
      "15",
      "14",
      "16",
      "18"
    ],
    "answer": 0,
    "summary": "Add 3 each time."
  },
  {
    "cat": "Numerical Ability",
    "kn": "25 + 37 = ?",
    "en": "25 + 37 = ?",
    "options": [
      "62",
      "52",
      "72",
      "60"
    ],
    "answer": 0,
    "summary": "25 plus 37 equals 62."
  },
  {
    "cat": "Numerical Ability",
    "kn": "144 ÷ 12 = ?",
    "en": "144 ÷ 12 = ?",
    "options": [
      "12",
      "10",
      "14",
      "16"
    ],
    "answer": 0,
    "summary": "12×12 = 144."
  },
  {
    "cat": "Numerical Ability",
    "kn": "15% of 200?",
    "en": "15% of 200?",
    "options": [
      "30",
      "20",
      "15",
      "35"
    ],
    "answer": 0,
    "summary": "0.15×200 = 30."
  },
  {
    "cat": "Numerical Ability",
    "kn": "LCM of 4 and 6?",
    "en": "LCM of 4 and 6?",
    "options": [
      "12",
      "24",
      "10",
      "6"
    ],
    "answer": 0,
    "summary": "Smallest common multiple is 12."
  },
  {
    "cat": "Numerical Ability",
    "kn": "HCF of 18 and 24?",
    "en": "HCF of 18 and 24?",
    "options": [
      "6",
      "12",
      "3",
      "9"
    ],
    "answer": 0,
    "summary": "Greatest common factor is 6."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Simple interest on ₹1000 at 10% for 2 years?",
    "en": "Simple interest on ₹1000 at 10% for 2 years?",
    "options": [
      "₹200",
      "₹100",
      "₹120",
      "₹220"
    ],
    "answer": 0,
    "summary": "SI = PRT/100 = 1000×10×2/100."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Average of 10,20,30?",
    "en": "Average of 10,20,30?",
    "options": [
      "20",
      "30",
      "15",
      "25"
    ],
    "answer": 0,
    "summary": "Sum 60 divided by 3 is 20."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Speed = 60 km in 2 h?",
    "en": "Speed for 60 km in 2 hours?",
    "options": [
      "30 km/h",
      "60 km/h",
      "120 km/h",
      "20 km/h"
    ],
    "answer": 0,
    "summary": "Speed = distance/time = 30 km/h."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Area of square side 5?",
    "en": "Area of square side 5?",
    "options": [
      "25",
      "20",
      "10",
      "15"
    ],
    "answer": 0,
    "summary": "Area = side² = 25."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Perimeter of rectangle 4×6?",
    "en": "Perimeter of rectangle 4 by 6?",
    "options": [
      "20",
      "24",
      "10",
      "18"
    ],
    "answer": 0,
    "summary": "Perimeter = 2(4+6)=20."
  },
  {
    "cat": "Numerical Ability",
    "kn": "3/4 as percentage?",
    "en": "3/4 as percentage?",
    "options": [
      "75%",
      "34%",
      "50%",
      "25%"
    ],
    "answer": 0,
    "summary": "3 divided by 4 equals 75%."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Profit: CP 100, SP 125",
    "en": "CP 100, SP 125 profit?",
    "options": [
      "25",
      "20",
      "15",
      "30"
    ],
    "answer": 0,
    "summary": "Profit = SP - CP = 25."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Ratio 2:3 total 50, first part?",
    "en": "Ratio 2:3 total 50, first part?",
    "options": [
      "20",
      "30",
      "25",
      "10"
    ],
    "answer": 0,
    "summary": "2/5 of 50 is 20."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Solve x+5=12",
    "en": "Solve x+5=12",
    "options": [
      "7",
      "5",
      "12",
      "17"
    ],
    "answer": 0,
    "summary": "Subtract 5 from both sides."
  },
  {
    "cat": "Numerical Ability",
    "kn": "0.5 equals fraction?",
    "en": "0.5 equals?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "3/4"
    ],
    "answer": 0,
    "summary": "0.5 is one half."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Cube of 3?",
    "en": "Cube of 3?",
    "options": [
      "27",
      "9",
      "6",
      "18"
    ],
    "answer": 0,
    "summary": "3×3×3 = 27."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Square root of 81?",
    "en": "Square root of 81?",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "answer": 0,
    "summary": "9×9 = 81."
  },
  {
    "cat": "Numerical Ability",
    "kn": "7×8 = ?",
    "en": "7×8 = ?",
    "options": [
      "56",
      "54",
      "64",
      "48"
    ],
    "answer": 0,
    "summary": "Multiplication fact: 7 times 8 is 56."
  },
  {
    "cat": "Numerical Ability",
    "kn": "1000 meters = ?",
    "en": "1000 meters equals?",
    "options": [
      "1 km",
      "10 km",
      "100 km",
      "0.1 km"
    ],
    "answer": 0,
    "summary": "1000 metres make one kilometre."
  },
  {
    "cat": "Numerical Ability",
    "kn": "Time: 90 minutes = ?",
    "en": "90 minutes equals?",
    "options": [
      "1.5 hours",
      "2 hours",
      "1 hour",
      "3 hours"
    ],
    "answer": 0,
    "summary": "90 minutes is one and a half hours."
  }
];


const form = document.getElementById('quizForm');
const result = document.getElementById('result');
const progress = document.getElementById('progress');
const scoreBox = document.getElementById('scoreBox');
const review = document.getElementById('review');
const ANSWER_MARK = 1;
const WRONG_PENALTY = 0.25;
function renderQuiz() {
  progress.textContent = `${questions.length} questions / ಪ್ರಶ್ನೆಗಳು`;
  form.innerHTML = questions.map((q, index) => `
    <fieldset class="question">
      <h3>${index + 1}. <small>${q.cat}</small><br>${q.kn}<br><span>${q.en}</span></h3>
      <div class="options">${q.options.map((option, optionIndex) => `
        <label class="option"><input type="radio" name="q${index}" value="${optionIndex}" required><span>${String.fromCharCode(65 + optionIndex)}. ${option}</span></label>
      `).join('')}</div>
    </fieldset>`).join('');
}
function showResult() {
  const selected = questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
  if (selected.includes(null)) { alert(`Please answer all ${questions.length} questions. / ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.`); return; }
  const correct = selected.filter((choice, index) => choice === questions[index].answer).length;
  const wrong = questions.length - correct;
  const score = Math.max(0, (correct * ANSWER_MARK) - (wrong * WRONG_PENALTY));
  scoreBox.innerHTML = `${score.toFixed(2)} / ${questions.length} marks (${((score / questions.length) * 100).toFixed(2)}%)<br><small>Correct: ${correct}, Wrong: ${wrong}, Negative: ${wrong} × ${WRONG_PENALTY}</small>`;
  review.innerHTML = questions.map((q, index) => {
    const isCorrect = selected[index] === q.answer;
    return `<article class="review-item"><h4>${index + 1}. ${q.kn}<br>${q.en}</h4><p>Your answer / ನಿಮ್ಮ ಉತ್ತರ: <span class="${isCorrect ? 'correct' : 'wrong'}">${q.options[selected[index]]}</span></p><p>Correct answer / ಸರಿಯಾದ ಉತ್ತರ: <span class="correct">${q.options[q.answer]}</span></p><p class="summary-line"><strong>Summary / ವಿವರಣೆ:</strong> ${q.summary}</p></article>`;
  }).join('');
  result.classList.remove('hidden'); result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function resetTest() { form.reset(); result.classList.add('hidden'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
document.getElementById('submitTest').addEventListener('click', showResult);
document.getElementById('resetTest').addEventListener('click', resetTest);
renderQuiz();
