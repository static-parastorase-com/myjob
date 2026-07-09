const questions = [
  {
    "kn": "ಪ್ರಶ್ನೆ 1: Which river is called the Ganga of the South?",
    "en": "Which river is called the Ganga of the South?",
    "options": [
      "Godavari",
      "Krishna",
      "Kaveri",
      "Tungabhadra"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 2: Which Karnataka city is known as the Silicon City of India?",
    "en": "Which Karnataka city is known as the Silicon City of India?",
    "options": [
      "Mysuru",
      "Bengaluru",
      "Dharwad",
      "Udupi"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 3: Who is known as the Father of the Indian Constitution?",
    "en": "Who is known as the Father of the Indian Constitution?",
    "options": [
      "Mahatma Gandhi",
      "B. R. Ambedkar",
      "Sardar Patel",
      "Jawaharlal Nehru"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 4: Which planet is known as the Red Planet?",
    "en": "Which planet is known as the Red Planet?",
    "options": [
      "Venus",
      "Mars",
      "Jupiter",
      "Mercury"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 5: What is the chemical symbol of water?",
    "en": "What is the chemical symbol of water?",
    "options": [
      "CO2",
      "H2O",
      "O2",
      "NaCl"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 6: Which is the largest organ of the human body?",
    "en": "Which is the largest organ of the human body?",
    "options": [
      "Heart",
      "Skin",
      "Liver",
      "Lung"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 7: How many players are there in a cricket team on the field?",
    "en": "How many players are there in a cricket team on the field?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 8: Which gas do plants absorb during photosynthesis?",
    "en": "Which gas do plants absorb during photosynthesis?",
    "options": [
      "Oxygen",
      "Carbon dioxide",
      "Nitrogen",
      "Hydrogen"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 9: What is the SI unit of force?",
    "en": "What is the SI unit of force?",
    "options": [
      "Joule",
      "Newton",
      "Watt",
      "Pascal"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 10: Which is the national animal of India?",
    "en": "Which is the national animal of India?",
    "options": [
      "Lion",
      "Tiger",
      "Elephant",
      "Leopard"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 11: Which city is called the Garden City of India?",
    "en": "Which city is called the Garden City of India?",
    "options": [
      "Bengaluru",
      "Chennai",
      "Pune",
      "Jaipur"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 12: Which river flows through Hampi?",
    "en": "Which river flows through Hampi?",
    "options": [
      "Sharavathi",
      "Tungabhadra",
      "Netravati",
      "Kabini"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 13: Who wrote the national anthem of India?",
    "en": "Who wrote the national anthem of India?",
    "options": [
      "Bankim Chandra Chatterjee",
      "Rabindranath Tagore",
      "Sarojini Naidu",
      "Subramania Bharati"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 14: What is the capital of India?",
    "en": "What is the capital of India?",
    "options": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 15: Which amendment lowered the voting age from 21 to 18?",
    "en": "Which amendment lowered the voting age from 21 to 18?",
    "options": [
      "42nd",
      "44th",
      "61st",
      "73rd"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 16: Which article deals with abolition of untouchability?",
    "en": "Which article deals with abolition of untouchability?",
    "options": [
      "Article 15",
      "Article 17",
      "Article 19",
      "Article 23"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 17: Which court is the highest court in India?",
    "en": "Which court is the highest court in India?",
    "options": [
      "High Court",
      "Supreme Court",
      "District Court",
      "Taluk Court"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 18: What is the full form of IPC?",
    "en": "What is the full form of IPC?",
    "options": [
      "Indian Penal Code",
      "Indian Police Council",
      "Internal Peace Code",
      "India Public Court"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 19: What is the full form of CrPC?",
    "en": "What is the full form of CrPC?",
    "options": [
      "Criminal Procedure Code",
      "Civil Police Code",
      "Crime Prevention Cell",
      "Court Record Process Code"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 20: Which emergency number is commonly used for police in India?",
    "en": "Which emergency number is commonly used for police in India?",
    "options": [
      "100",
      "101",
      "102",
      "108"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 21: What does CCTV stand for?",
    "en": "What does CCTV stand for?",
    "options": [
      "Closed Circuit Television",
      "Central Crime TV",
      "Citizen Camera Tool",
      "City Control Television"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 22: Which device is used to measure temperature?",
    "en": "Which device is used to measure temperature?",
    "options": [
      "Barometer",
      "Thermometer",
      "Hygrometer",
      "Ammeter"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 23: Which instrument measures atmospheric pressure?",
    "en": "Which instrument measures atmospheric pressure?",
    "options": [
      "Thermometer",
      "Barometer",
      "Voltmeter",
      "Speedometer"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 24: What is 25% of 200?",
    "en": "What is 25% of 200?",
    "options": [
      "25",
      "50",
      "75",
      "100"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 25: If 12 + 18 = ?",
    "en": "If 12 + 18 = ?",
    "options": [
      "20",
      "25",
      "30",
      "35"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 26: What is 9 × 8?",
    "en": "What is 9 × 8?",
    "options": [
      "64",
      "72",
      "81",
      "98"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 27: What is the next number: 2, 4, 8, 16, ?",
    "en": "What is the next number: 2, 4, 8, 16, ?",
    "options": [
      "20",
      "24",
      "32",
      "36"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 28: Find the odd one out: Apple, Mango, Carrot, Banana",
    "en": "Find the odd one out: Apple, Mango, Carrot, Banana",
    "options": [
      "Apple",
      "Mango",
      "Carrot",
      "Banana"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 29: If A=1, B=2, then D=?",
    "en": "If A=1, B=2, then D=?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 30: Which direction is opposite to North?",
    "en": "Which direction is opposite to North?",
    "options": [
      "East",
      "West",
      "South",
      "North-East"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 31: Which is the smallest two-digit number?",
    "en": "Which is the smallest two-digit number?",
    "options": [
      "9",
      "10",
      "11",
      "99"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 32: What is the square of 12?",
    "en": "What is the square of 12?",
    "options": [
      "124",
      "144",
      "154",
      "164"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 33: What is the value of 3/4 as a percentage?",
    "en": "What is the value of 3/4 as a percentage?",
    "options": [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 34: Which number is prime?",
    "en": "Which number is prime?",
    "options": [
      "21",
      "27",
      "29",
      "33"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 35: How many centimeters are in one meter?",
    "en": "How many centimeters are in one meter?",
    "options": [
      "10",
      "100",
      "1000",
      "10000"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 36: How many grams are in one kilogram?",
    "en": "How many grams are in one kilogram?",
    "options": [
      "100",
      "500",
      "1000",
      "10000"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 37: Which color indicates stop in traffic signals?",
    "en": "Which color indicates stop in traffic signals?",
    "options": [
      "Green",
      "Yellow",
      "Red",
      "Blue"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 38: Which color indicates go in traffic signals?",
    "en": "Which color indicates go in traffic signals?",
    "options": [
      "Green",
      "Yellow",
      "Red",
      "White"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 39: What should be worn while riding a two-wheeler?",
    "en": "What should be worn while riding a two-wheeler?",
    "options": [
      "Helmet",
      "Cap",
      "Scarf",
      "Sunglasses only"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 40: Which document is needed to drive legally?",
    "en": "Which document is needed to drive legally?",
    "options": [
      "Driving licence",
      "Library card",
      "Voter slip",
      "ATM card"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 41: What is first aid?",
    "en": "What is first aid?",
    "options": [
      "Immediate basic help to injured person",
      "Court punishment",
      "Police parade",
      "Vehicle repair"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 42: Which number is used for ambulance service in many Indian states?",
    "en": "Which number is used for ambulance service in many Indian states?",
    "options": [
      "108",
      "1098",
      "1122",
      "1818"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 43: What is the all-in-one emergency number in India?",
    "en": "What is the all-in-one emergency number in India?",
    "options": [
      "112",
      "144",
      "155",
      "199"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 44: Which body maintains law and order in a district under police leadership?",
    "en": "Which body maintains law and order in a district under police leadership?",
    "options": [
      "District police",
      "Post office",
      "Bank branch",
      "College board"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 45: What is patrolling?",
    "en": "What is patrolling?",
    "options": [
      "Regular movement to prevent crime",
      "Court hearing",
      "Tax payment",
      "School admission"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 46: What is community policing?",
    "en": "What is community policing?",
    "options": [
      "Police-public cooperation",
      "Only traffic fine collection",
      "Private security work",
      "Army training"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 47: What is evidence?",
    "en": "What is evidence?",
    "options": [
      "Material that helps prove facts",
      "Rumour only",
      "Advertisement",
      "Weather report"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 48: What is a witness?",
    "en": "What is a witness?",
    "options": [
      "Person who saw or knows facts",
      "Vehicle owner only",
      "Bank officer only",
      "Shop name"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 49: What does arrest mean?",
    "en": "What does arrest mean?",
    "options": [
      "Taking a person into lawful custody",
      "Giving reward",
      "Issuing passport",
      "Opening bank account"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 50: Which skill is most important while handling public complaints?",
    "en": "Which skill is most important while handling public complaints?",
    "options": [
      "Listening patiently",
      "Shouting loudly",
      "Ignoring people",
      "Avoiding records"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 51: Which is a cyber safety practice?",
    "en": "Which is a cyber safety practice?",
    "options": [
      "Use strong passwords",
      "Share OTP",
      "Click unknown links",
      "Post passwords online"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 52: What is phishing?",
    "en": "What is phishing?",
    "options": [
      "Fraudulent attempt to steal information",
      "Fishing in rivers",
      "Police drill",
      "Road repair"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 53: Which password is strongest?",
    "en": "Which password is strongest?",
    "options": [
      "123456",
      "password",
      "Ksp@2026#Safe",
      "yourname"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 54: What should you do with an unknown suspicious link?",
    "en": "What should you do with an unknown suspicious link?",
    "options": [
      "Do not click it",
      "Forward to everyone",
      "Enter bank details",
      "Download immediately"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 55: Which app/service stores digital documents in India?",
    "en": "Which app/service stores digital documents in India?",
    "options": [
      "DigiLocker",
      "IRCTC only",
      "Weather app",
      "Camera app"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 56: What does GPS help to find?",
    "en": "What does GPS help to find?",
    "options": [
      "Location",
      "Blood group",
      "Exam marks",
      "Electricity bill"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 57: Which is a renewable source of energy?",
    "en": "Which is a renewable source of energy?",
    "options": [
      "Solar energy",
      "Coal",
      "Petrol",
      "Diesel"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 58: Which is a non-renewable fuel?",
    "en": "Which is a non-renewable fuel?",
    "options": [
      "Coal",
      "Wind",
      "Solar",
      "Tidal"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 59: What is rainwater harvesting?",
    "en": "What is rainwater harvesting?",
    "options": [
      "Collecting and storing rainwater",
      "Burning plastic",
      "Cutting trees",
      "Wasting water"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 60: Which day is celebrated as World Environment Day?",
    "en": "Which day is celebrated as World Environment Day?",
    "options": [
      "5 June",
      "15 August",
      "26 January",
      "2 October"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 61: Which is the basic unit of life?",
    "en": "Which is the basic unit of life?",
    "options": [
      "Cell",
      "Atom",
      "Organ",
      "Tissue only"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 62: Which vitamin is produced in skin by sunlight?",
    "en": "Which vitamin is produced in skin by sunlight?",
    "options": [
      "Vitamin A",
      "Vitamin B",
      "Vitamin C",
      "Vitamin D"
    ],
    "answer": 3
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 63: Which blood cells fight infection?",
    "en": "Which blood cells fight infection?",
    "options": [
      "White blood cells",
      "Red blood cells",
      "Platelets only",
      "Plasma only"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 64: Normal human body temperature is approximately?",
    "en": "Normal human body temperature is approximately?",
    "options": [
      "37°C",
      "27°C",
      "47°C",
      "57°C"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 65: Which organ pumps blood?",
    "en": "Which organ pumps blood?",
    "options": [
      "Heart",
      "Kidney",
      "Brain",
      "Stomach"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 66: Which organ purifies blood and produces urine?",
    "en": "Which organ purifies blood and produces urine?",
    "options": [
      "Kidney",
      "Liver",
      "Lung",
      "Eye"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 67: Which is the longest bone in the human body?",
    "en": "Which is the longest bone in the human body?",
    "options": [
      "Femur",
      "Radius",
      "Skull",
      "Rib"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 68: Which disease is spread by mosquitoes?",
    "en": "Which disease is spread by mosquitoes?",
    "options": [
      "Malaria",
      "Diabetes",
      "Scurvy",
      "Rickets"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 69: Which is a balanced diet component?",
    "en": "Which is a balanced diet component?",
    "options": [
      "Proteins",
      "Only sugar",
      "Only oil",
      "Only salt"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 70: Which is Karnataka’s classical dance-drama tradition?",
    "en": "Which is Karnataka’s classical dance-drama tradition?",
    "options": [
      "Yakshagana",
      "Garba",
      "Bhangra",
      "Lavani"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 71: Which place in Karnataka is famous for Gol Gumbaz?",
    "en": "Which place in Karnataka is famous for Gol Gumbaz?",
    "options": [
      "Vijayapura",
      "Mandya",
      "Karwar",
      "Chikkamagaluru"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 72: Jog Falls is on which river?",
    "en": "Jog Falls is on which river?",
    "options": [
      "Sharavathi",
      "Kaveri",
      "Bhima",
      "Malaprabha"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 73: Which dam is built across the Kaveri near Mandya?",
    "en": "Which dam is built across the Kaveri near Mandya?",
    "options": [
      "KRS Dam",
      "Almatti Dam",
      "Tunga Dam",
      "Supa Dam"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 74: Which crop is Mandya district famous for?",
    "en": "Which crop is Mandya district famous for?",
    "options": [
      "Sugarcane",
      "Tea",
      "Apple",
      "Saffron"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 75: Which coastal city is a major port in Karnataka?",
    "en": "Which coastal city is a major port in Karnataka?",
    "options": [
      "Mangaluru",
      "Kolar",
      "Hassan",
      "Raichur"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 76: Which district is known for coffee plantations?",
    "en": "Which district is known for coffee plantations?",
    "options": [
      "Chikkamagaluru",
      "Bidar",
      "Yadgir",
      "Koppal"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 77: Which Karnataka city is famous for sandalwood products?",
    "en": "Which Karnataka city is famous for sandalwood products?",
    "options": [
      "Mysuru",
      "Hospet",
      "Gadag",
      "Bagalkot"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 78: Which fort is associated with Tipu Sultan in Bengaluru region?",
    "en": "Which fort is associated with Tipu Sultan in Bengaluru region?",
    "options": [
      "Devanahalli Fort",
      "Red Fort",
      "Gwalior Fort",
      "Mehrangarh Fort"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 79: Which ruler is called the Tiger of Mysore?",
    "en": "Which ruler is called the Tiger of Mysore?",
    "options": [
      "Tipu Sultan",
      "Ashoka",
      "Akbar",
      "Shivaji"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 80: Who founded the Vijayanagara Empire with Harihara?",
    "en": "Who founded the Vijayanagara Empire with Harihara?",
    "options": [
      "Bukka Raya",
      "Krishnadevaraya",
      "Pulakeshin",
      "Mayurasharma"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 81: Which king wrote Amuktamalyada?",
    "en": "Which king wrote Amuktamalyada?",
    "options": [
      "Krishnadevaraya",
      "Harshavardhana",
      "Ashoka",
      "Chandragupta I"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 82: Which sea borders Karnataka to the west?",
    "en": "Which sea borders Karnataka to the west?",
    "options": [
      "Arabian Sea",
      "Bay of Bengal",
      "Red Sea",
      "Caspian Sea"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 83: Which state lies north of Karnataka?",
    "en": "Which state lies north of Karnataka?",
    "options": [
      "Maharashtra",
      "Kerala",
      "Tamil Nadu",
      "Sri Lanka"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 84: Which state lies south of Karnataka?",
    "en": "Which state lies south of Karnataka?",
    "options": [
      "Tamil Nadu",
      "Punjab",
      "Rajasthan",
      "Haryana"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 85: Which union territory is near Karnataka coast?",
    "en": "Which union territory is near Karnataka coast?",
    "options": [
      "Lakshadweep",
      "Delhi",
      "Chandigarh",
      "Puducherry only"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 86: Which language script is used for Kannada?",
    "en": "Which language script is used for Kannada?",
    "options": [
      "Kannada script",
      "Devanagari only",
      "Roman only",
      "Tamil script"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 87: How many minutes are in two hours?",
    "en": "How many minutes are in two hours?",
    "options": [
      "60",
      "90",
      "120",
      "180"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 88: If a train travels 60 km in 1 hour, its speed is?",
    "en": "If a train travels 60 km in 1 hour, its speed is?",
    "options": [
      "30 km/h",
      "60 km/h",
      "90 km/h",
      "120 km/h"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 89: Simple interest formula is?",
    "en": "Simple interest formula is?",
    "options": [
      "P×R×T/100",
      "P+R+T",
      "P/R/T",
      "100/PRT"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 90: Average of 10, 20, 30 is?",
    "en": "Average of 10, 20, 30 is?",
    "options": [
      "10",
      "20",
      "30",
      "60"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 91: Ratio 2:3 total parts are?",
    "en": "Ratio 2:3 total parts are?",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 92: Which is an even number?",
    "en": "Which is an even number?",
    "options": [
      "17",
      "19",
      "22",
      "23"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 93: What is 1000 - 375?",
    "en": "What is 1000 - 375?",
    "options": [
      "525",
      "625",
      "725",
      "825"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 94: What is 14 × 5?",
    "en": "What is 14 × 5?",
    "options": [
      "60",
      "65",
      "70",
      "75"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 95: What is the perimeter of a square of side 5 cm?",
    "en": "What is the perimeter of a square of side 5 cm?",
    "options": [
      "10 cm",
      "20 cm",
      "25 cm",
      "30 cm"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 96: What is the area of a rectangle 8 cm by 4 cm?",
    "en": "What is the area of a rectangle 8 cm by 4 cm?",
    "options": [
      "12 sq cm",
      "24 sq cm",
      "32 sq cm",
      "64 sq cm"
    ],
    "answer": 2
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 97: Which is a leap year condition?",
    "en": "Which is a leap year condition?",
    "options": [
      "Divisible by 4 generally",
      "Always every 3 years",
      "Every 5 years",
      "Every 10 years"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 98: How many days are in a normal year?",
    "en": "How many days are in a normal year?",
    "options": [
      "364",
      "365",
      "366",
      "367"
    ],
    "answer": 1
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 99: Which month has 28 or 29 days?",
    "en": "Which month has 28 or 29 days?",
    "options": [
      "February",
      "March",
      "April",
      "May"
    ],
    "answer": 0
  },
  {
    "kn": "ಪ್ರಶ್ನೆ 100: Which is the correct order in dictionary?",
    "en": "Which is the correct order in dictionary?",
    "options": [
      "Ant, Ball, Cat",
      "Cat, Ball, Ant",
      "Ball, Ant, Cat",
      "Ant, Cat, Ball"
    ],
    "answer": 0
  }
];


const homeLink = document.getElementById('homeLink');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const form = document.getElementById('quizForm');
const progress = document.getElementById('progress');
const scoreBox = document.getElementById('scoreBox');
const review = document.getElementById('review');
const ANSWER_MARK = 1;
const WRONG_PENALTY = 0.25;

function renderQuiz() {
  progress.textContent = `${questions.length} questions / ಪ್ರಶ್ನೆಗಳು`;
  form.innerHTML = questions.map((q, index) => `
    <fieldset class="question">
      <h3>${index + 1}. ${q.kn}<br><span>${q.en}</span></h3>
      <div class="options">
        ${q.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="q${index}" value="${optionIndex}" required>
            <span>${String.fromCharCode(65 + optionIndex)}. ${option}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `).join('');
}

function showResult() {
  const selected = questions.map((_, index) => {
    const checked = form.querySelector(`input[name="q${index}"]:checked`);
    return checked ? Number(checked.value) : null;
  });
  if (selected.includes(null)) {
    alert(`Please answer all ${questions.length} questions. / ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸಿ.`);
    return;
  }

  const correct = selected.filter((choice, index) => choice === questions[index].answer).length;
  const wrong = questions.length - correct;
  const total = questions.length;
  const score = Math.max(0, (correct * ANSWER_MARK) - (wrong * WRONG_PENALTY));
  const percentage = ((score / total) * 100).toFixed(2);

  scoreBox.innerHTML = `${score.toFixed(2)} / ${total} marks (${percentage}%)<br><small>Correct: ${correct}, Wrong: ${wrong}, Negative: ${wrong} × ${WRONG_PENALTY}</small>`;
  review.innerHTML = questions.map((q, index) => {
    const isCorrect = selected[index] === q.answer;
    return `
      <article class="review-item">
        <h4>${index + 1}. ${q.kn}<br>${q.en}</h4>
        <p>Your answer / ನಿಮ್ಮ ಉತ್ತರ: <span class="${isCorrect ? 'correct' : 'wrong'}">${q.options[selected[index]]}</span></p>
        <p>Correct answer / ಸರಿಯಾದ ಉತ್ತರ: <span class="correct">${q.options[q.answer]}</span></p>
      </article>
    `;
  }).join('');

  result.classList.remove('hidden');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetTest() {
  form.reset();
  result.classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('submitTest').addEventListener('click', showResult);
document.getElementById('resetTest').addEventListener('click', resetTest);

renderQuiz();
