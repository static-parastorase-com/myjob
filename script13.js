const questions = [
  { cat: 'Current Affairs', kn: '2024 ರ ಬೇಸಿಗೆ ಒಲಿಂಪಿಕ್ ಕ್ರೀಡಾಕೂಟವನ್ನು ಯಾವ ನಗರ ಆಯೋಜಿಸಿತು?', en: 'Which city hosted the 2024 Summer Olympic Games?', options: ['Tokyo', 'Los Angeles', 'Paris', 'London'], answer: 2, summary: 'Paris hosted the 2024 Summer Olympic Games.' },
  { cat: 'Current Affairs', kn: '2024 ನೇ ಸಾಲಿನ ನೊಬೆಲ್ ಶಾಂತಿ ಪ್ರಶಸ್ತಿಯನ್ನು ಯಾರು ಗೆದ್ದರು?', en: 'Who won the Nobel Peace Prize for 2024?', options: ['Narges Mohammadi', 'Nihon Hidankyo', 'Malala Yousafzai', 'World Food Programme'], answer: 1, summary: 'Nihon Hidankyo won the 2024 Nobel Peace Prize.' },
  { cat: 'Current Affairs', kn: 'ಯುವ ನಿಧಿ ಯೋಜನೆಯಡಿ ಪದವೀಧರರಿಗೆ ಮಾಸಿಕ ನಿರುದ್ಯೋಗ ಭತ್ಯೆ ಎಷ್ಟು?', en: 'Under Karnataka Yuva Nidhi, what monthly stipend is provided to graduates?', options: ['₹1,500', '₹2,000', '₹3,000', '₹4,000'], answer: 2, summary: 'Graduates receive ₹3,000 per month; diploma holders receive ₹1,500.' },
  { cat: 'Current Affairs', kn: 'ಭಾರತದ ಮೊದಲ ಅರೆ-ಹೈ-ಸ್ಪೀಡ್ RRTS ರೈಲು ಸೇವೆಯ ಹೆಸರು ಏನು?', en: 'India’s first semi-high-speed regional rail service (RRTS) is named what?', options: ['Vande Bharat', 'Namo Bharat', 'Gatimaan Express', 'RapidX'], answer: 1, summary: 'The RRTS service is named Namo Bharat.' },
  { cat: 'Current Affairs', kn: 'COP29 ಹವಾಮಾನ ಸಮ್ಮೇಳನ ಯಾವ ದೇಶದಲ್ಲಿ ನಡೆಯಿತು?', en: 'The UN Climate Change Conference COP29 was scheduled in which country?', options: ['UAE', 'Egypt', 'Azerbaijan', 'Brazil'], answer: 2, summary: 'COP29 was held in Baku, Azerbaijan.' },
  { cat: 'Current Affairs', kn: '2024 ICC ಪುರುಷರ T20 ವಿಶ್ವಕಪ್ ಗೆದ್ದ ದೇಶ ಯಾವುದು?', en: 'Which country won the 2024 ICC Men’s T20 World Cup?', options: ['South Africa', 'India', 'Australia', 'England'], answer: 1, summary: 'India won the 2024 ICC Men’s T20 World Cup.' },
  { cat: 'Current Affairs', kn: 'ಮಹಾರಾಷ್ಟ್ರದ ಭಾರತದ ಅತಿ ಉದ್ದ ಸಮುದ್ರ ಸೇತುವೆಗೆ ಯಾರ ಹೆಸರಿಡಲಾಗಿದೆ?', en: 'India’s longest sea bridge in Maharashtra is named after whom?', options: ['Sardar Vallabhbhai Patel', 'Shivaji Maharaj', 'Atal Bihari Vajpayee', 'Dr. B.R. Ambedkar'], answer: 2, summary: 'Atal Setu / MTHL is named after Atal Bihari Vajpayee.' },
  { cat: 'Current Affairs', kn: '2024 ರಂತೆ ಭಾರತದ ಮುಖ್ಯ ಚುನಾವಣಾ ಆಯುಕ್ತರು ಯಾರು?', en: 'Who was the Chief Election Commissioner of India as of 2024?', options: ['Sushil Chandra', 'Sunil Arora', 'Rajiv Kumar', 'Anup Chandra Pandey'], answer: 2, summary: 'Rajiv Kumar was the CEC as of 2024.' },
  { cat: 'Current Affairs', kn: 'ಗಂಗಾ ಡಾಲ್ಫಿನ್ ಅನ್ನು ರಾಜ್ಯ ಜಲಚರ ಪ್ರಾಣಿ ಎಂದು ಘೋಷಿಸಿದ ರಾಜ್ಯ ಯಾವುದು?', en: 'Which state declared the Gangetic Dolphin as its state aquatic animal?', options: ['Bihar', 'West Bengal', 'Uttar Pradesh', 'Uttarakhand'], answer: 2, summary: 'Uttar Pradesh declared it as the state aquatic animal.' },
  { cat: 'Current Affairs', kn: 'ಸೂರ್ಯ ಕಿರಣ್ ಜಂಟಿ ಸೇನಾ ಅಭ್ಯಾಸ ಭಾರತ ಮತ್ತು ಯಾವ ದೇಶದ ನಡುವೆ?', en: 'Exercise Surya Kiran is conducted between India and which country?', options: ['Sri Lanka', 'Nepal', 'Bangladesh', 'France'], answer: 1, summary: 'Surya Kiran is an India-Nepal military exercise.' },
  { cat: 'Current Affairs', kn: 'ಪಿಎಂ ಸೂರ್ಯ ಘರ್ ಯೋಜನೆ ತಿಂಗಳಿಗೆ ಎಷ್ಟು ಯೂನಿಟ್ ಉಚಿತ ವಿದ್ಯುತ್ ಗುರಿ ಹೊಂದಿದೆ?', en: 'PM Surya Ghar Muft Bijli Yojana aims to provide up to how many free units per month?', options: ['100 units', '200 units', '300 units', '400 units'], answer: 2, summary: 'The scheme targets up to 300 free units per month.' },
  { cat: 'Current Affairs', kn: 'Europa Clipper ಮಿಷನ್ ಉಡಾವಣೆ ಮಾಡಿದ ಸಂಸ್ಥೆ ಯಾವುದು?', en: 'Which agency launched Europa Clipper to study Jupiter’s moon?', options: ['ISRO', 'ESA', 'NASA', 'JAXA'], answer: 2, summary: 'NASA launched Europa Clipper.' },
  { cat: 'Current Affairs', kn: '2024 G20 ಶೃಂಗಸಭೆಯನ್ನು ಯಾವ ದೇಶ ಆಯೋಜಿಸಿತು?', en: 'The 2024 G20 Summit was hosted by which country?', options: ['India', 'Brazil', 'South Africa', 'Indonesia'], answer: 1, summary: 'Brazil hosted the 2024 G20 Summit.' },
  { cat: 'Current Affairs', kn: '2023 ಖೇಲ್ ರತ್ನ ಪ್ರಶಸ್ತಿ ಬ್ಯಾಡ್ಮಿಂಟನ್\u200cನಲ್ಲಿ ಯಾರಿಗೆ ಸಿಕ್ಕಿತು?', en: 'Who won the Major Dhyan Chand Khel Ratna Award 2023 in badminton?', options: ['PV Sindhu', 'Lakshya Sen', 'Satwiksairaj Rankireddy and Chirag Shetty', 'Kidambi Srikanth'], answer: 2, summary: 'Satwik and Chirag received the award.' },
  { cat: 'Current Affairs', kn: 'ಕರ್ನಾಟಕದ 31ನೇ ಹೊಸ ಜಿಲ್ಲೆ ಯಾವುದು?', en: 'The newly formed 31st district of Karnataka is which?', options: ['Yadgir', 'Ramanagara', 'Vijayanagara', 'Chikkaballapura'], answer: 2, summary: 'Vijayanagara was carved out of Ballari.' },
  { cat: 'Polity', kn: 'ಬಿರುದುಗಳ ರದ್ದತಿಗೆ ಸಂಬಂಧಿಸಿದ ವಿಧಿ ಯಾವುದು?', en: 'Which Article deals with abolition of titles?', options: ['Article 16', 'Article 17', 'Article 18', 'Article 19'], answer: 2, summary: 'Article 18 abolishes titles.' },
  { cat: 'Polity', kn: 'ಮೊದಲ ಸಂವಿಧಾನ ತಿದ್ದುಪಡಿ ಯಾವ ವರ್ಷ?', en: 'The first amendment to the Indian Constitution was made in which year?', options: ['1950', '1951', '1952', '1956'], answer: 1, summary: 'The First Amendment was in 1951.' },
  { cat: 'Polity', kn: 'ಖಾಸಗಿತನದ ಹಕ್ಕು ಯಾವ ವಿಧಿಯಡಿ ರಕ್ಷಿತವಾಗಿದೆ?', en: 'Right to Privacy is protected under which Article?', options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'], answer: 2, summary: 'It is under Article 21.' },
  { cat: 'Polity', kn: 'ಮುಖ್ಯಮಂತ್ರಿಯಾಗಲು ಕನಿಷ್ಠ ವಯಸ್ಸು ಎಷ್ಟು?', en: 'Minimum age to become a State Chief Minister?', options: ['21 years', '25 years', '30 years', '35 years'], answer: 1, summary: 'A legislator for the Assembly must be at least 25.' },
  { cat: 'Polity', kn: 'PIL ಪರಿಕಲ್ಪನೆ ಯಾವ ದೇಶದಲ್ಲಿ ಹುಟ್ಟಿತು?', en: 'Public Interest Litigation originated in which country?', options: ['UK', 'USA', 'Australia', 'India'], answer: 1, summary: 'The concept originated in the USA.' },
  { cat: 'Polity', kn: 'ಪ್ರಸ್ತುತ ಮೂಲಭೂತ ಹಕ್ಕುಗಳ ಸಂಖ್ಯೆ ಎಷ್ಟು?', en: 'How many Fundamental Rights are currently provided?', options: ['5', '6', '7', '8'], answer: 1, summary: 'There are six Fundamental Rights.' },
  { cat: 'Polity', kn: 'ಪಕ್ಷಾಂತರ ನಿರೋಧಕ 10ನೇ ಅನುಸೂಚಿ ಯಾವ ತಿದ್ದುಪಡಿಯಿಂದ ಸೇರಿತು?', en: '10th Schedule was added by which Amendment?', options: ['42nd', '44th', '52nd', '73rd'], answer: 2, summary: 'The 52nd Amendment added it in 1985.' },
  { cat: 'Polity', kn: 'ಹೊಸ ರಾಜ್ಯ ರಚನೆ ಅಧಿಕಾರ ಯಾರಿಗೆ?', en: 'Who has power to form a new state in India?', options: ['President', 'Parliament', 'Supreme Court', 'State Legislature'], answer: 1, summary: 'Parliament has this power under Article 3.' },
  { cat: 'Polity', kn: 'ಪೀಠಿಕೆ ಎಷ್ಟು ಬಾರಿ ತಿದ್ದುಪಡಿ ಆಗಿದೆ?', en: 'How many times has the Preamble been amended?', options: ['Never', 'Once', 'Twice', 'Three times'], answer: 1, summary: 'It was amended once by the 42nd Amendment.' },
  { cat: 'Polity', kn: 'Prohibition ರಿಟ್ ಯಾರ ವಿರುದ್ಧ?', en: 'Writ of Prohibition is issued against whom?', options: ['Public official', 'Lower court or tribunal', 'Private individual', 'Parliament'], answer: 1, summary: 'It is issued to a lower court or tribunal.' },
  { cat: 'Polity', kn: 'ಕರಡು ಸಮಿತಿಯ ಅಧ್ಯಕ್ಷರು ಯಾರು?', en: 'Who chaired the Drafting Committee?', options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'], answer: 2, summary: 'Dr. B.R. Ambedkar chaired it.' },
  { cat: 'Polity', kn: 'ಸಮವರ್ತಿ ಪಟ್ಟಿಯನ್ನು ಯಾವ ದೇಶದಿಂದ ಎರವಲು ಪಡೆದಿದೆ?', en: 'Concurrent List was borrowed from which constitution?', options: ['Canada', 'Australia', 'Ireland', 'South Africa'], answer: 1, summary: 'It was borrowed from Australia.' },
  { cat: 'Polity', kn: 'Article 370 ಯಾವ ವರ್ಷ ರದ್ದು?', en: 'Article 370 was abrogated in which year?', options: ['2018', '2019', '2020', '2021'], answer: 1, summary: 'It was abrogated in 2019.' },
  { cat: 'Polity', kn: 'ಗ್ರಾಮ ಪಂಚಾಯಿತಿ ಚುನಾವಣೆ ನಡೆಸುವ ಸಂಸ್ಥೆ ಯಾವುದು?', en: 'Which body conducts Gram Panchayat elections?', options: ['Election Commission of India', 'State Election Commission', 'State PSC', 'District Magistrate'], answer: 1, summary: 'State Election Commission conducts them.' },
  { cat: 'Polity', kn: 'ಹಣಕಾಸು ಮಸೂದೆ ರಾಜ್ಯಸಭೆ ಎಷ್ಟು ದಿನಗಳಲ್ಲಿ ಮರಳಿಸಬೇಕು?', en: 'Rajya Sabha must return a Money Bill within how many days?', options: ['7 days', '14 days', '30 days', '60 days'], answer: 1, summary: 'It must be returned within 14 days.' },
  { cat: 'Karnataka GK', kn: 'ಹೊಯ್ಸಳರ ರಾಜಧಾನಿ ಯಾವುದು?', en: 'Which city was the Hoysala capital?', options: ['Badami', 'Manyakheta', 'Dwarasamudra (Halebidu)', 'Talakadu'], answer: 2, summary: 'Dwarasamudra, now Halebidu, was the capital.' },
  { cat: 'Karnataka GK', kn: 'ವಿಧಾನಸೌಧ ಯಾವ ಮುಖ್ಯಮಂತ್ರಿಯ ಕಾಲದಲ್ಲಿ ನಿರ್ಮಿತವಾಯಿತು?', en: 'Vidhana Soudha was built under which Chief Minister?', options: ['K.C. Reddy', 'Kengal Hanumanthaiah', 'S. Nijalingappa', 'D. Devaraj Urs'], answer: 1, summary: 'Kengal Hanumanthaiah led its construction.' },
  { cat: 'Karnataka GK', kn: '2011 ಜನಗಣತಿ ಪ್ರಕಾರ ಕಡಿಮೆ ಜನಸಂಖ್ಯೆಯ ಜಿಲ್ಲೆ?', en: 'Lowest population district in Karnataka as per 2011 Census?', options: ['Yadgir', 'Chamarajanagar', 'Kodagu', 'Gadag'], answer: 2, summary: 'Kodagu had the lowest population.' },
  { cat: 'Karnataka GK', kn: 'ಜೋಗ ಜಲಪಾತ ಯಾವ ನದಿಯಿಂದ?', en: 'Jog Falls is created by which river?', options: ['Kaveri', 'Tungabhadra', 'Sharavathi', 'Malaprabha'], answer: 2, summary: 'Jog Falls is on the Sharavathi.' },
  { cat: 'Karnataka GK', kn: 'ಕನ್ನಡ ವ್ಯಾಕರಣ-ಕಾವ್ಯಮೀಮಾಂಸೆಯ ಹಳೆಯ ಕೃತಿ?', en: 'Earliest available Kannada grammar and poetics work?', options: ['Vaddaradhane', 'Kavirajamarga', 'Shabdamanidarpana', 'Pampa Bharata'], answer: 1, summary: 'Kavirajamarga is the earliest available work.' },
  { cat: 'Karnataka GK', kn: 'ಇಳಕಲ್ ಸೀರೆಗಳು ಯಾವ ಜಿಲ್ಲೆಗೆ ಸೇರಿವೆ?', en: 'Ilkal sarees originate from which district?', options: ['Belagavi', 'Bagalkote', 'Vijayapura', 'Dharwad'], answer: 1, summary: 'They originate from Bagalkote.' },
  { cat: 'Karnataka GK', kn: 'ಮೊದಲ ಕನ್ನಡ ಪತ್ರಿಕೆ ಯಾವುದು?', en: 'First newspaper in Kannada?', options: ['Mysuru Vrittanta', 'Mangaluru Samachara', 'Karmaveera', 'Prajavani'], answer: 1, summary: 'Mangaluru Samachara began in 1843.' },
  { cat: 'Karnataka GK', kn: 'ಕರ್ನಾಟಕ ಕುಲಪುರೋಹಿತ ಯಾರು?', en: 'Who is Karnataka Kulapurohita?', options: ['Gangadharrao Deshpande', 'Hardekar Manjappa', 'Aluru Venkata Rao', 'B.M. Srikantaiah'], answer: 2, summary: 'Aluru Venkata Rao is known by this title.' },
  { cat: 'Karnataka GK', kn: 'ವಿಜಯನಗರ ಸ್ಥಾಪಕರು ಯಾರು?', en: 'Founders of Vijayanagara Empire?', options: ['Krishnadevaraya and Achyuta', 'Harihara and Bukka', 'Vidyaranya and Sayana', 'Rama Raya and Tirumala'], answer: 1, summary: 'Harihara and Bukka founded it.' },
  { cat: 'Karnataka GK', kn: 'ಭಾರತೀಯ ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು?', en: 'Cradle of Indian temple architecture?', options: ['Hampi', 'Badami', 'Pattadakal', 'Aihole'], answer: 3, summary: 'Aihole is called the cradle.' },
  { cat: 'Karnataka GK', kn: '1924 ಕಾಂಗ್ರೆಸ್ ಅಧಿವೇಶನದಲ್ಲಿ ಗಾಂಧೀಜಿ ಅಧ್ಯಕ್ಷತೆ ವಹಿಸಿದ ಸ್ಥಳ?', en: 'Gandhi presided over Congress in 1924 at?', options: ['Mysuru', 'Belagavi', 'Hubballi', 'Mangaluru'], answer: 1, summary: 'It was at Belagavi.' },
  { cat: 'Karnataka GK', kn: 'ಕರಾವಳಿ ಎಮ್ಮೆ ಓಟದ ಹೆಸರು?', en: 'Traditional buffalo race in coastal Karnataka?', options: ['Jallikattu', 'Kambala', 'Yakshagana', 'Karaga'], answer: 1, summary: 'It is Kambala.' },
  { cat: 'Karnataka GK', kn: 'ಮೈಸೂರು ಚಲೋ ಚಳುವಳಿ ಯಾವ ವರ್ಷ?', en: 'Mysore Chalo movement happened in which year?', options: ['1942', '1947', '1956', '1973'], answer: 1, summary: 'It happened in 1947.' },
  { cat: 'Karnataka GK', kn: 'ಕರ್ನಾಟಕದ ಎತ್ತರದ ಶಿಖರ?', en: 'Highest mountain peak in Karnataka?', options: ['Kudremukh', 'Bababudangiri', 'Mullayanagiri', 'Pushpagiri'], answer: 2, summary: 'Mullayanagiri is the highest.' },
  { cat: 'Karnataka GK', kn: 'ಹಲ್ಮಿಡಿ ಶಾಸನದ ಭಾಷೆ?', en: 'Halmidi Inscription language?', options: ['Sanskrit', 'Prakrit', 'Old Kannada', 'Telugu'], answer: 2, summary: 'It is in Old Kannada.' },
  { cat: 'Karnataka GK', kn: 'ಗೋಲ್ ಗುಂಬಜ್ ಎರಡನೇ ಅತಿ ದೊಡ್ಡ ಏನಿಗೆ ಪ್ರಸಿದ್ಧ?', en: 'Gol Gumbaz is known for the second-largest what?', options: ['Minaret', 'Dome', 'Courtyard', 'Gateway'], answer: 1, summary: 'It is known for its dome.' },
  { cat: 'Karnataka GK', kn: 'ಕುದುರೆಮುಖ ಯಾವ ಖನಿಜಕ್ಕೆ ಪ್ರಸಿದ್ಧ?', en: 'Kudremukh is famous for mining which mineral?', options: ['Gold', 'Manganese', 'Iron Ore', 'Bauxite'], answer: 2, summary: 'It is famous for iron ore.' },
  { cat: 'Karnataka GK', kn: 'ಮೈಸೂರಿನ ಹುಲಿ ಯಾರು?', en: 'Who is the Tiger of Mysore?', options: ['Hyder Ali', 'Tipu Sultan', 'Krishnaraja Wodeyar III', 'Chamarajendra Wodeyar'], answer: 1, summary: 'Tipu Sultan is known as the Tiger of Mysore.' },
  { cat: 'Karnataka GK', kn: 'ವಾಣಿ ವಿಲಾಸ ಸಾಗರ ಯಾವ ಜಿಲ್ಲೆಯಲ್ಲಿ?', en: 'Vani Vilas Sagara dam is in which district?', options: ['Tumakuru', 'Chitradurga', 'Davanagere', 'Mysuru'], answer: 1, summary: 'It is in Chitradurga.' },
  { cat: 'Karnataka GK', kn: 'ಮೈಸೂರು ಶೈಲಿಯ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯ?', en: 'Classical dance form rooted in Mysore?', options: ['Kathak', 'Bharatanatyam (Mysore style)', 'Kuchipudi', 'Mohiniyattam'], answer: 1, summary: 'It is Bharatanatyam, Mysore style.' },
  { cat: 'Karnataka GK', kn: 'ವಿಜಯಪುರದಲ್ಲಿ ಜನಿಸಿದ 12ನೇ ಶತಮಾನದ ಗಣಿತಜ್ಞ?', en: '12th-century mathematician born in Vijayapura?', options: ['Aryabhata', 'Brahmagupta', 'Bhaskara II', 'Varahamihira'], answer: 2, summary: 'Bhaskara II was born there.' },
  { cat: 'Karnataka GK', kn: 'ಬಂಡೀಪುರ ಹುಲಿ ಸಂರಕ್ಷಿತ ಪ್ರದೇಶ ಜಿಲ್ಲೆ?', en: 'Bandipur Tiger Reserve is in which district?', options: ['Mysuru', 'Kodagu', 'Chamarajanagar', 'Hassan'], answer: 2, summary: 'It is in Chamarajanagar.' },
  { cat: 'Karnataka GK', kn: 'ಚೋಮನ ದುಡಿ ಲೇಖಕರು ಯಾರು?', en: 'Who wrote Chomana Dudi?', options: ['Kuvempu', 'U.R. Ananthamurthy', 'K. Shivaram Karanth', 'P. Lankesh'], answer: 2, summary: 'K. Shivaram Karanth wrote it.' },
  { cat: 'Karnataka GK', kn: 'ಒನಕೆ ಓಬವ್ವ ದಂತಕಥೆಗೆ ಪ್ರಸಿದ್ಧ ಕೋಟೆ?', en: 'Fort known for Onake Obavva?', options: ['Bellary Fort', 'Chitradurga Fort', 'Bidar Fort', 'Srirangapatna Fort'], answer: 1, summary: 'Chitradurga Fort is associated with her.' },
  { cat: 'Karnataka GK', kn: 'ಆಗುಂಬೆ ಯಾವ ಜಿಲ್ಲೆಯಲ್ಲಿ?', en: 'Agumbe is located in which district?', options: ['Udupi', 'Dakshina Kannada', 'Shivamogga', 'Chikkamagaluru'], answer: 2, summary: 'Agumbe is in Shivamogga.' },
  { cat: 'Indian GK', kn: 'ಮೌರ್ಯ ಸಾಮ್ರಾಜ್ಯದ ಸ್ಥಾಪಕ?', en: 'Founder of the Maurya Empire?', options: ['Ashoka', 'Chandragupta Maurya', 'Bindusara', 'Bimbisara'], answer: 1, summary: 'Chandragupta Maurya founded it.' },
  { cat: 'Indian GK', kn: 'ಮೊದಲ ಪಾಣಿಪತ್ ಕದನ ವರ್ಷ?', en: 'First Battle of Panipat year?', options: ['1192', '1526', '1556', '1761'], answer: 1, summary: 'It was fought in 1526.' },
  { cat: 'Indian GK', kn: 'ಕಾನ್ಪುರದಲ್ಲಿ 1857 ದಂಗೆಯ ನಾಯಕ?', en: 'Who led the 1857 revolt in Kanpur?', options: ['Rani Lakshmibai', 'Kunwar Singh', 'Nana Sahib', 'Begum Hazrat Mahal'], answer: 2, summary: 'Nana Sahib led it in Kanpur.' },
  { cat: 'Indian GK', kn: 'ಭಾರತೀಯ ರಾಷ್ಟ್ರೀಯ ಕಾಂಗ್ರೆಸ್ ಸ್ಥಾಪನೆ ವರ್ಷ?', en: 'INC was founded in which year?', options: ['1857', '1885', '1905', '1919'], answer: 1, summary: 'INC was founded in 1885.' },
  { cat: 'Indian GK', kn: 'ತಂಜಾವೂರಿನ ಬೃಹದೀಶ್ವರ ದೇವಾಲಯ ನಿರ್ಮಿಸಿದ ಚೋಳ ರಾಜ?', en: 'Which Chola king built Brihadisvara Temple?', options: ['Rajendra I', 'Rajaraja I', 'Parantaka I', 'Karikala'], answer: 1, summary: 'Rajaraja I built it.' },
  { cat: 'Indian GK', kn: 'ಅಸಹಕಾರ ಚಳುವಳಿ ಪ್ರಾರಂಭವಾದ ವರ್ಷ?', en: 'Non-Cooperation Movement was launched in?', options: ['1917', '1920', '1930', '1942'], answer: 1, summary: 'It began in 1920.' },
  { cat: 'Indian GK', kn: 'ಗ್ರಾಂಡ್ ಟ್ರಂಕ್ ರಸ್ತೆ ನಿರ್ಮಿಸಿದವರು?', en: 'Who built the Grand Trunk Road?', options: ['Akbar', 'Ashoka', 'Sher Shah Suri', 'Alauddin Khilji'], answer: 2, summary: 'Sher Shah Suri developed it.' },
  { cat: 'Indian GK', kn: 'ಗಾಂಧಿ-ಇರ್ವಿನ್ ಒಪ್ಪಂದ ವರ್ಷ?', en: 'Gandhi-Irwin Pact was signed in?', options: ['1929', '1930', '1931', '1932'], answer: 2, summary: 'It was signed in 1931.' },
  { cat: 'Indian GK', kn: 'ವಿಸ್ತೀರ್ಣದ ಅತಿದೊಡ್ಡ ರಾಜ್ಯ?', en: 'Largest Indian state by area?', options: ['Madhya Pradesh', 'Maharashtra', 'Uttar Pradesh', 'Rajasthan'], answer: 3, summary: 'Rajasthan is the largest by area.' },
  { cat: 'Indian GK', kn: 'ಭಾರತದ ಅತ್ಯಂತ ದಕ್ಷಿಣ ತುದಿ?', en: 'Southernmost point of Indian territory?', options: ['Kanyakumari', 'Indira Point', 'Point Calimere', 'Cape Comorin'], answer: 1, summary: 'Indira Point is the southernmost point.' },
  { cat: 'Indian GK', kn: 'ಭಾರತದ ಹಳೆಯ ಪರ್ವತ ಶ್ರೇಣಿ?', en: 'Oldest mountain range in India?', options: ['Himalayas', 'Western Ghats', 'Aravalli Range', 'Vindhya Range'], answer: 2, summary: 'Aravalli is the oldest.' },
  { cat: 'Indian GK', kn: 'ಭಾರತದ ಅತಿ ಎತ್ತರದ ಜಲಪಾತ?', en: 'Highest waterfall in India?', options: ['Jog Falls', 'Dudhsagar Falls', 'Kunchikal Falls', 'Athirappilly Falls'], answer: 2, summary: 'Kunchikal Falls is the highest.' },
  { cat: 'Indian GK', kn: 'ಸೌರವ್ಯೂಹದ ಅತ್ಯಂತ ಬಿಸಿ ಗ್ರಹ?', en: 'Hottest planet in the solar system?', options: ['Mercury', 'Venus', 'Mars', 'Jupiter'], answer: 1, summary: 'Venus is hottest due to greenhouse effect.' },
  { cat: 'Indian GK', kn: 'ಲಕ್ಷದ್ವೀಪದ ರಾಜಧಾನಿ?', en: 'Capital of Lakshadweep?', options: ['Port Blair', 'Kavaratti', 'Silvassa', 'Minicoy'], answer: 1, summary: 'Kavaratti is the capital.' },
  { cat: 'Indian GK', kn: 'ಮೊದಲ ಪ್ರಯಾಣಿಕ ರೈಲು ಬಾಂಬೆ ಮತ್ತು ಯಾವ ಸ್ಥಳದ ನಡುವೆ?', en: 'First passenger train ran between Bombay and?', options: ['Pune', 'Thane', 'Surat', 'Kalyan'], answer: 1, summary: 'It ran to Thane.' },
  { cat: 'Indian GK', kn: 'ಭಾಕ್ರಾ ನಂಗಲ್ ಯಾವ ನದಿಯ ಮೇಲೆ?', en: 'Bhakra Nangal Dam is on which river?', options: ['Ravi', 'Beas', 'Sutlej', 'Chenab'], answer: 2, summary: 'It is on the Sutlej.' },
  { cat: 'Indian GK', kn: 'ಭಾರತದ ಮಸಾಲೆ ತೋಟ ರಾಜ್ಯ?', en: 'Spice Garden of India is which state?', options: ['Karnataka', 'Kerala', 'Andhra Pradesh', 'Tamil Nadu'], answer: 1, summary: 'Kerala is called the Spice Garden.' },
  { cat: 'Indian GK', kn: 'ಭಾರತ-ಪಾಕಿಸ್ತಾನ ಗಡಿ ರೇಖೆ?', en: 'Boundary line between India and Pakistan?', options: ['McMahon Line', 'Durand Line', 'Radcliffe Line', 'LAC'], answer: 2, summary: 'It is the Radcliffe Line.' },
  { cat: 'Indian GK', kn: '2011ರಲ್ಲಿ ಹೆಚ್ಚು ಜನಸಾಂದ್ರತೆ ರಾಜ್ಯ?', en: 'Most densely populated state as per 2011 Census?', options: ['Uttar Pradesh', 'West Bengal', 'Bihar', 'Kerala'], answer: 2, summary: 'Bihar had the highest density.' },
  { cat: 'Indian GK', kn: 'ಸುಂದರಬನ್ಸ್ ಡೆಲ್ಟಾ ಗಂಗಾ ಮತ್ತು ಯಾವ ನದಿಯಿಂದ?', en: 'Sundarbans delta is formed by Ganga and which river?', options: ['Yamuna', 'Brahmaputra', 'Mahanadi', 'Hooghly'], answer: 1, summary: 'It is formed by the Ganga and Brahmaputra.' },
  { cat: 'Science', kn: 'ಜೀವಕೋಶದ ಶಕ್ತಿ ಉತ್ಪಾದನಾ ಕೇಂದ್ರ?', en: 'Powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Chloroplast'], answer: 2, summary: 'Mitochondria produce cellular energy.' },
  { cat: 'Science', kn: 'ನೀರಿನ ರಾಸಾಯನಿಕ ಸೂತ್ರ?', en: 'Chemical formula of water?', options: ['HO2', 'H2O', 'H2O2', 'OH'], answer: 1, summary: 'Water is H2O.' },
  { cat: 'Science', kn: 'ಬಲದ SI ಏಕಮಾನ?', en: 'SI unit of force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2, summary: 'Force is measured in newtons.' },
  { cat: 'Science', kn: 'ಅತ್ಯಂತ ಹಗುರ ಅನಿಲ?', en: 'Lightest gas in periodic table?', options: ['Helium', 'Nitrogen', 'Oxygen', 'Hydrogen'], answer: 3, summary: 'Hydrogen is the lightest.' },
  { cat: 'Science', kn: 'ಸ್ಕರ್ವಿ ಯಾವ ವಿಟಮಿನ್ ಕೊರತೆಯಿಂದ?', en: 'Scurvy is caused by deficiency of?', options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], answer: 2, summary: 'Scurvy is due to vitamin C deficiency.' },
  { cat: 'Science', kn: 'ರಕ್ತದೊತ್ತಡ ಅಳೆಯುವ ಉಪಕರಣ?', en: 'Instrument used to measure blood pressure?', options: ['Barometer', 'Sphygmomanometer', 'Thermometer', 'Stethoscope'], answer: 1, summary: 'A sphygmomanometer measures blood pressure.' },
  { cat: 'Science', kn: 'Universal Acceptor ರಕ್ತ ಗುಂಪು?', en: 'Universal acceptor blood group?', options: ['O', 'A', 'B', 'AB'], answer: 3, summary: 'AB positive is the universal acceptor.' },
  { cat: 'Science', kn: 'ಶೂನ್ಯದಲ್ಲಿ ಬೆಳಕಿನ ವೇಗ?', en: 'Speed of light in vacuum?', options: ['3 × 10^5 m/s', '3 × 10^8 m/s', '3 × 10^10 m/s', '3 × 10^6 m/s'], answer: 1, summary: 'It is about 3 × 10^8 m/s.' },
  { cat: 'Science', kn: 'ಬೆಳಕಿನ ಪ್ರಾಥಮಿಕ ಬಣ್ಣಗಳು?', en: 'Primary colors of light?', options: ['Red, Blue, Yellow', 'Red, Green, Blue', 'Yellow, Green, Blue', 'Cyan, Magenta, Yellow'], answer: 1, summary: 'Primary light colors are RGB.' },
  { cat: 'Science', kn: 'ಕಠಿಣ ನೈಸರ್ಗಿಕ ವಸ್ತು?', en: 'Hardest naturally occurring substance?', options: ['Gold', 'Iron', 'Diamond', 'Platinum'], answer: 2, summary: 'Diamond is the hardest natural substance.' },
  { cat: 'Science', kn: 'ಸಸ್ಯಗಳು ಆಹಾರ ತಯಾರಿಸುವ ಪ್ರಕ್ರಿಯೆ?', en: 'Plants make food by which process?', options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Digestion'], answer: 2, summary: 'Plants use photosynthesis.' },
  { cat: 'Science', kn: 'ಸಾಮಾನ್ಯ ಮಾನವ ದೇಹದ ಉಷ್ಣಾಂಶ?', en: 'Normal human body temperature?', options: ['37°C', '39°C', '90°C', '100°C'], answer: 0, summary: 'Normal body temperature is about 37°C.' },
  { cat: 'Science', kn: 'ಬೆಂಕಿ ನಂದಕಗಳಲ್ಲಿ ಮುಖ್ಯ ಅನಿಲ?', en: 'Gas predominantly used in fire extinguishers?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'], answer: 1, summary: 'Carbon dioxide is commonly used.' },
  { cat: 'Science', kn: 'ಕೊಠಡಿ ತಾಪಮಾನದಲ್ಲಿ ದ್ರವ ಲೋಹ?', en: 'Metal liquid at room temperature?', options: ['Iron', 'Gold', 'Mercury', 'Copper'], answer: 2, summary: 'Mercury is liquid at room temperature.' },
  { cat: 'Science', kn: 'ತಟಸ್ಥ ನೀರಿನ pH?', en: 'pH of pure neutral water?', options: ['0', '5', '7', '14'], answer: 2, summary: 'Neutral water has pH 7.' },
  { cat: 'Mental Ability', kn: '2, 4, 8, 16, ?', en: 'Find the missing number: 2, 4, 8, 16, ?', options: ['24', '32', '64', '20'], answer: 1, summary: 'Each term is multiplied by 2.' },
  { cat: 'Mental Ability', kn: 'CAT ಪದದ ಮೌಲ್ಯ?', en: 'If A=1, B=2, what is CAT?', options: ['22', '24', '26', '28'], answer: 1, summary: 'C=3, A=1, T=20; total 24.' },
  { cat: 'Mental Ability', kn: '144 ರ ವರ್ಗಮೂಲ?', en: 'Square root of 144?', options: ['12', '14', '16', '18'], answer: 0, summary: 'The square root is 12.' },
  { cat: 'Mental Ability', kn: '500 ರ 10%?', en: 'What is 10% of 500?', options: ['5', '50', '55', '500'], answer: 1, summary: '10% of 500 is 50.' },
  { cat: 'Mental Ability', kn: '1,2,3,4,5 ಸರಾಸರಿ?', en: 'Average of 1,2,3,4,5?', options: ['2', '3', '4', '5'], answer: 1, summary: '15 divided by 5 is 3.' },
  { cat: 'Mental Ability', kn: 'ದೂರ = ವೇಗ × ?', en: 'Distance = Speed × ?', options: ['Volume', 'Mass', 'Time', 'Acceleration'], answer: 2, summary: 'Distance equals speed multiplied by time.' },
  { cat: 'Mental Ability', kn: 'ಸರಳ ರೇಖೆಯ ಕೋನ?', en: 'Angle of a straight line?', options: ['90°', '180°', '270°', '360°'], answer: 1, summary: 'A straight angle is 180°.' },
  { cat: 'Mental Ability', kn: '5 ಕೆಲಸಗಾರರು 10 ದಿನ; 10 ಕೆಲಸಗಾರರು ಎಷ್ಟು ದಿನ?', en: '5 workers take 10 days; how many days for 10 workers?', options: ['2 days', '5 days', '10 days', '20 days'], answer: 1, summary: 'Doubling workers halves the time.' },
  { cat: 'Mental Ability', kn: 'A, C, E, G, ?', en: 'What comes next: A, C, E, G, ?', options: ['H', 'I', 'J', 'K'], answer: 1, summary: 'The sequence skips one letter each time.' },
  { cat: 'Mental Ability', kn: 'ತ್ರಿಭುಜದ ಒಳಕೋನಗಳ ಮೊತ್ತ?', en: 'Sum of interior angles of a triangle?', options: ['90°', '180°', '270°', '360°'], answer: 1, summary: 'A triangle’s interior angles sum to 180°.' },
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
  // Paper-local serial numbers intentionally restart at 1 for this next page.
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
