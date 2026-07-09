const questions = [
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 101: The 2026 Asian Games (20th edition) are scheduled to be held in which country?",
    "en": "Q101. The 2026 Asian Games (20th edition) are scheduled to be held in which country?",
    "options": [
      "India",
      "Japan",
      "South Korea",
      "Qatar"
    ],
    "answer": 1,
    "summary": "The 20th Asian Games are scheduled for Aichi-Nagoya, Japan."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 102: Under the Karnataka Shakti scheme, which service is free for women?",
    "en": "Q102. Under the Karnataka Shakti scheme, which service is free for women?",
    "options": [
      "Electricity up to 200 units",
      "10 kg free rice",
      "Free travel in non-premium state transport buses",
      "Free healthcare for pregnant women"
    ],
    "answer": 2,
    "summary": "Shakti provides free travel for women in non-premium state transport buses."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 103: Which Indian organization launched Gaganyaan uncrewed test flights?",
    "en": "Q103. Which Indian organization launched Gaganyaan uncrewed test flights?",
    "options": [
      "DRDO",
      "HAL",
      "ISRO",
      "BARC"
    ],
    "answer": 2,
    "summary": "ISRO conducts the Gaganyaan mission test flights."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 104: The Global Gender Gap Report is published by which organization?",
    "en": "Q104. The Global Gender Gap Report is published by which organization?",
    "options": [
      "World Bank",
      "World Economic Forum (WEF)",
      "United Nations",
      "IMF"
    ],
    "answer": 1,
    "summary": "The WEF publishes the Global Gender Gap Report."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 105: Who received the Bharat Ratna posthumously in 2024 for social justice and politics in Bihar?",
    "en": "Q105. Who received the Bharat Ratna posthumously in 2024 for social justice and politics in Bihar?",
    "options": [
      "L.K. Advani",
      "Karpoori Thakur",
      "P.V. Narasimha Rao",
      "Chaudhary Charan Singh"
    ],
    "answer": 1,
    "summary": "Karpoori Thakur received the Bharat Ratna posthumously."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 106: India’s first indigenous aircraft carrier is named what?",
    "en": "Q106. India’s first indigenous aircraft carrier is named what?",
    "options": [
      "INS Vikramaditya",
      "INS Vikrant",
      "INS Viraat",
      "INS Vishal"
    ],
    "answer": 1,
    "summary": "INS Vikrant is India’s first indigenous aircraft carrier."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 107: The Brand Bengaluru initiative primarily focuses on what?",
    "en": "Q107. The Brand Bengaluru initiative primarily focuses on what?",
    "options": [
      "Promoting IT exports",
      "Comprehensive urban development and infrastructure",
      "Free housing for the poor",
      "Promoting Kannada cinema globally"
    ],
    "answer": 1,
    "summary": "Brand Bengaluru focuses on urban development and infrastructure."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 108: Which state first successfully conducted a caste-based survey recently?",
    "en": "Q108. Which state first successfully conducted a caste-based survey recently?",
    "options": [
      "Karnataka",
      "Bihar",
      "Tamil Nadu",
      "Kerala"
    ],
    "answer": 1,
    "summary": "Bihar conducted the caste-based survey."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 109: World Environment Day 2024 global host country was which?",
    "en": "Q109. World Environment Day 2024 global host country was which?",
    "options": [
      "Saudi Arabia",
      "India",
      "Germany",
      "Brazil"
    ],
    "answer": 0,
    "summary": "Saudi Arabia hosted World Environment Day 2024."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 110: Which is the world’s longest railway platform located in Karnataka?",
    "en": "Q110. Which is the world’s longest railway platform located in Karnataka?",
    "options": [
      "KSR Bengaluru",
      "Hubballi Railway Station",
      "Mysuru Junction",
      "Yesvantpur Junction"
    ],
    "answer": 1,
    "summary": "Hubballi station has the 1,507 m platform."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 111: Pravasi Bharatiya Divas marks Gandhi’s return to India from where?",
    "en": "Q111. Pravasi Bharatiya Divas marks Gandhi’s return to India from where?",
    "options": [
      "United Kingdom",
      "South Africa",
      "Kenya",
      "USA"
    ],
    "answer": 1,
    "summary": "It marks Gandhi’s return from South Africa on 9 January 1915."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 112: Operation Sadbhavana aims to do what?",
    "en": "Q112. Operation Sadbhavana aims to do what?",
    "options": [
      "Conduct surgical strikes",
      "Civic action and welfare projects in J&K and Ladakh",
      "Rescue Indians from conflict zones",
      "Enhance border fencing"
    ],
    "answer": 1,
    "summary": "Sadbhavana supports civic welfare projects in J&K and Ladakh."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 113: Who is the first woman to head the Railway Board of India?",
    "en": "Q113. Who is the first woman to head the Railway Board of India?",
    "options": [
      "Ashwani Lohani",
      "Jaya Varma Sinha",
      "Soma Mondal",
      "Madhabi Puri Buch"
    ],
    "answer": 1,
    "summary": "Jaya Varma Sinha was the first woman Railway Board head."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 114: COP 28 climate summit was held in which city?",
    "en": "Q114. COP 28 climate summit was held in which city?",
    "options": [
      "Dubai, UAE",
      "Sharm El-Sheikh, Egypt",
      "Glasgow, UK",
      "Baku, Azerbaijan"
    ],
    "answer": 0,
    "summary": "COP 28 was held in Dubai, UAE."
  },
  {
    "cat": "Current Affairs",
    "kn": "ಪ್ರಶ್ನೆ 115: Which Karnataka scheme gives ₹2,000 per month to women heads of BPL families?",
    "en": "Q115. Which Karnataka scheme gives ₹2,000 per month to women heads of BPL families?",
    "options": [
      "Anna Bhagya",
      "Gruha Jyothi",
      "Gruha Lakshmi",
      "Yuva Nidhi"
    ],
    "answer": 2,
    "summary": "Gruha Lakshmi provides the monthly assistance."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 116: Which Article empowers the President to promulgate Ordinances during Parliament recess?",
    "en": "Q116. Which Article empowers the President to promulgate Ordinances during Parliament recess?",
    "options": [
      "Article 123",
      "Article 213",
      "Article 143",
      "Article 108"
    ],
    "answer": 0,
    "summary": "Article 123 gives ordinance power to the President."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 117: Who administers oath to the President of India?",
    "en": "Q117. Who administers oath to the President of India?",
    "options": [
      "Prime Minister",
      "Vice-President",
      "Chief Justice of India",
      "Lok Sabha Speaker"
    ],
    "answer": 2,
    "summary": "The CJI administers the oath."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 118: Which amendment lowered voting age from 21 to 18?",
    "en": "Q118. Which amendment lowered voting age from 21 to 18?",
    "options": [
      "42nd",
      "44th",
      "61st",
      "73rd"
    ],
    "answer": 2,
    "summary": "The 61st Amendment lowered the voting age."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 119: Article 44 relates to what?",
    "en": "Q119. Article 44 relates to what?",
    "options": [
      "Uniform Civil Code",
      "Protection of Monuments",
      "Separation of Judiciary",
      "Village Panchayats"
    ],
    "answer": 0,
    "summary": "Article 44 concerns the Uniform Civil Code."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 120: Equality of opportunity in public employment is guaranteed by which Article?",
    "en": "Q120. Equality of opportunity in public employment is guaranteed by which Article?",
    "options": [
      "Article 14",
      "Article 15",
      "Article 16",
      "Article 18"
    ],
    "answer": 2,
    "summary": "Article 16 guarantees equality of opportunity in public employment."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 121: Who appoints a State Governor?",
    "en": "Q121. Who appoints a State Governor?",
    "options": [
      "Chief Minister",
      "Chief Justice of India",
      "Prime Minister",
      "President of India"
    ],
    "answer": 3,
    "summary": "The President appoints Governors."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 122: Residuary legislative powers in India are vested with whom?",
    "en": "Q122. Residuary legislative powers in India are vested with whom?",
    "options": [
      "State Legislatures",
      "President",
      "Parliament",
      "Supreme Court"
    ],
    "answer": 2,
    "summary": "Residuary powers rest with Parliament."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 123: First Indian state formed on linguistic basis?",
    "en": "Q123. First Indian state formed on linguistic basis?",
    "options": [
      "Karnataka",
      "Andhra Pradesh",
      "Gujarat",
      "Kerala"
    ],
    "answer": 1,
    "summary": "Andhra Pradesh was formed in 1953."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 124: How many schedules are currently in the Constitution?",
    "en": "Q124. How many schedules are currently in the Constitution?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "answer": 2,
    "summary": "The Constitution currently has 12 schedules."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 125: DPSPs are in which Part?",
    "en": "Q125. DPSPs are in which Part?",
    "options": [
      "Part II",
      "Part III",
      "Part IV",
      "Part V"
    ],
    "answer": 2,
    "summary": "Directive Principles are in Part IV."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 126: Guardian of Fundamental Rights in India?",
    "en": "Q126. Guardian of Fundamental Rights in India?",
    "options": [
      "Parliament",
      "President",
      "Supreme Court",
      "Human Rights Commission"
    ],
    "answer": 2,
    "summary": "The Supreme Court guards Fundamental Rights."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 127: Article 326 deals with what?",
    "en": "Q127. Article 326 deals with what?",
    "options": [
      "Election Commission",
      "Universal Adult Suffrage",
      "SC/ST reservation",
      "Official Language"
    ],
    "answer": 1,
    "summary": "Article 326 deals with adult suffrage."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 128: RTI Act came into force in which year?",
    "en": "Q128. RTI Act came into force in which year?",
    "options": [
      "2000",
      "2002",
      "2005",
      "2009"
    ],
    "answer": 2,
    "summary": "RTI Act came into force in 2005."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 129: How many Lok Sabha members can the President nominate currently?",
    "en": "Q129. How many Lok Sabha members can the President nominate currently?",
    "options": [
      "2 Anglo-Indians",
      "12",
      "0",
      "4"
    ],
    "answer": 2,
    "summary": "The Anglo-Indian nomination provision was removed."
  },
  {
    "cat": "Polity",
    "kn": "ಪ್ರಶ್ನೆ 130: An arrested person must be produced before a magistrate within what time?",
    "en": "Q130. An arrested person must be produced before a magistrate within what time?",
    "options": [
      "12 hours",
      "24 hours",
      "48 hours",
      "72 hours"
    ],
    "answer": 1,
    "summary": "The limit is 24 hours excluding travel time."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 131: Who wrote Karnataka Gatha Vaibhava?",
    "en": "Q131. Who wrote Karnataka Gatha Vaibhava?",
    "options": [
      "Govinda Pai",
      "Aluru Venkata Rao",
      "Kuvempu",
      "Shivaram Karanth"
    ],
    "answer": 1,
    "summary": "Aluru Venkata Rao wrote it."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 132: First Kannada talkie released in 1934?",
    "en": "Q132. First Kannada talkie released in 1934?",
    "options": [
      "Bedara Kannappa",
      "Sati Sulochana",
      "Bhakta Prahlada",
      "Jeevana Nataka"
    ],
    "answer": 1,
    "summary": "Sati Sulochana was the first Kannada talkie."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 133: Chunchanakatte Falls is created by which river?",
    "en": "Q133. Chunchanakatte Falls is created by which river?",
    "options": [
      "Sharavathi",
      "Kaveri",
      "Hemavati",
      "Tungabhadra"
    ],
    "answer": 1,
    "summary": "It is on the Kaveri river."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 134: Dharmasthala temple is dedicated to which deity?",
    "en": "Q134. Dharmasthala temple is dedicated to which deity?",
    "options": [
      "Vishnu",
      "Manjunatha (Shiva)",
      "Ganesha",
      "Durga"
    ],
    "answer": 1,
    "summary": "The main deity is Lord Manjunatha."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 135: Daria Daulat Bagh is located in which place?",
    "en": "Q135. Daria Daulat Bagh is located in which place?",
    "options": [
      "Mysuru",
      "Srirangapatna",
      "Bengaluru",
      "Chitradurga"
    ],
    "answer": 1,
    "summary": "Tipu’s summer palace is in Srirangapatna."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 136: Who established Anubhava Mantapa?",
    "en": "Q136. Who established Anubhava Mantapa?",
    "options": [
      "Allama Prabhu",
      "Akka Mahadevi",
      "Basavanna",
      "Jedara Dasimayya"
    ],
    "answer": 2,
    "summary": "Basavanna established it."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 137: Which Chalukya king took the title Kanchigonda?",
    "en": "Q137. Which Chalukya king took the title Kanchigonda?",
    "options": [
      "Pulakeshin I",
      "Pulakeshin II",
      "Vikramaditya II",
      "Kirtivarman I"
    ],
    "answer": 2,
    "summary": "Vikramaditya II took the title."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 138: Author of the Aihole Inscription?",
    "en": "Q138. Author of the Aihole Inscription?",
    "options": [
      "Harisena",
      "Ravikirti",
      "Banabhatta",
      "Kalidasa"
    ],
    "answer": 1,
    "summary": "Ravikirti composed it."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 139: Which Wodeyar helped found Kannada Sahitya Parishat in 1915?",
    "en": "Q139. Which Wodeyar helped found Kannada Sahitya Parishat in 1915?",
    "options": [
      "Chamaraja Wodeyar",
      "Krishnaraja Wodeyar III",
      "Krishnaraja Wodeyar IV",
      "Jayachamarajendra Wodeyar"
    ],
    "answer": 2,
    "summary": "Nalwadi Krishnaraja Wodeyar supported its founding."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 140: Which district is known as Land of Coffee?",
    "en": "Q140. Which district is known as Land of Coffee?",
    "options": [
      "Hassan",
      "Kodagu",
      "Chikkamagaluru",
      "Shivamogga"
    ],
    "answer": 2,
    "summary": "Chikkamagaluru is known as the Land of Coffee."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 141: Asia’s first major hydro-electric station was at where?",
    "en": "Q141. Asia’s first major hydro-electric station was at where?",
    "options": [
      "Shivanasamudra",
      "Jog Falls",
      "Almatti",
      "Supa"
    ],
    "answer": 0,
    "summary": "It was established at Shivanasamudra."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 142: Bhootha Kola is mainly practiced in which region?",
    "en": "Q142. Bhootha Kola is mainly practiced in which region?",
    "options": [
      "Malnad",
      "Tulu Nadu",
      "Kalyana Karnataka",
      "Kittur Karnataka"
    ],
    "answer": 1,
    "summary": "Bhootha Kola is a Tulu Nadu ritual."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 143: State tree of Karnataka?",
    "en": "Q143. State tree of Karnataka?",
    "options": [
      "Banyan",
      "Peepal",
      "Sandalwood",
      "Mango"
    ],
    "answer": 2,
    "summary": "Sandalwood is the state tree."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 144: First railway line in Karnataka connected Bengaluru and where?",
    "en": "Q144. First railway line in Karnataka connected Bengaluru and where?",
    "options": [
      "Mysuru",
      "Madras",
      "Jolarpettai",
      "Tumakuru"
    ],
    "answer": 2,
    "summary": "It connected Bengaluru with Jolarpettai."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 145: Former official name of Karnataka before 1973?",
    "en": "Q145. Former official name of Karnataka before 1973?",
    "options": [
      "Karnad",
      "Mysore State",
      "Canara State",
      "Deccan Province"
    ],
    "answer": 1,
    "summary": "Karnataka was Mysore State."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 146: District with highest total forest cover area in Karnataka?",
    "en": "Q146. District with highest total forest cover area in Karnataka?",
    "options": [
      "Kodagu",
      "Chamarajanagar",
      "Uttara Kannada",
      "Chikkamagaluru"
    ],
    "answer": 2,
    "summary": "Uttara Kannada has the highest forest cover area."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 147: Vachana movement took place in which century?",
    "en": "Q147. Vachana movement took place in which century?",
    "options": [
      "10th",
      "12th",
      "14th",
      "16th"
    ],
    "answer": 1,
    "summary": "The movement was in the 12th century."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 148: Who wrote the novel Parva?",
    "en": "Q148. Who wrote the novel Parva?",
    "options": [
      "Kuvempu",
      "S.L. Bhyrappa",
      "U.R. Ananthamurthy",
      "Girish Karnad"
    ],
    "answer": 1,
    "summary": "S.L. Bhyrappa wrote Parva."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 149: Navaraspur Utsav is celebrated in which district?",
    "en": "Q149. Navaraspur Utsav is celebrated in which district?",
    "options": [
      "Bidar",
      "Kalaburagi",
      "Vijayapura",
      "Raichur"
    ],
    "answer": 2,
    "summary": "It is celebrated in Vijayapura."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 150: Which ghat connects Mangaluru and Bengaluru?",
    "en": "Q150. Which ghat connects Mangaluru and Bengaluru?",
    "options": [
      "Charmadi",
      "Shiradi",
      "Agumbe",
      "Hulikal"
    ],
    "answer": 1,
    "summary": "Shiradi Ghat connects them."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 151: Mysore Sandal Soap factory was established in which year?",
    "en": "Q151. Mysore Sandal Soap factory was established in which year?",
    "options": [
      "1902",
      "1916",
      "1932",
      "1947"
    ],
    "answer": 1,
    "summary": "KSDL was established in 1916."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 152: Keladi ruler who fought Aurangzeb’s forces?",
    "en": "Q152. Keladi ruler who fought Aurangzeb’s forces?",
    "options": [
      "Rani Abbakka",
      "Kittur Chennamma",
      "Keladi Chennamma",
      "Belawadi Mallamma"
    ],
    "answer": 2,
    "summary": "Keladi Chennamma resisted Mughal forces."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 153: Tattvapadas were popularized by whom?",
    "en": "Q153. Tattvapadas were popularized by whom?",
    "options": [
      "Purandara Dasa",
      "Kanaka Dasa",
      "Shishunala Sharif",
      "Sarvajna"
    ],
    "answer": 2,
    "summary": "Shishunala Sharif popularized them."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 154: Chief engineer behind KRS Dam?",
    "en": "Q154. Chief engineer behind KRS Dam?",
    "options": [
      "Mirza Ismail",
      "Sir M. Visvesvaraya",
      "C.N.R. Rao",
      "H.N. Ananth Kumar"
    ],
    "answer": 1,
    "summary": "Sir M. Visvesvaraya designed it."
  },
  {
    "cat": "Karnataka GK",
    "kn": "ಪ್ರಶ್ನೆ 155: NIMHANS is located in which city?",
    "en": "Q155. NIMHANS is located in which city?",
    "options": [
      "Mysuru",
      "Hubballi",
      "Bengaluru",
      "Mangaluru"
    ],
    "answer": 2,
    "summary": "NIMHANS is in Bengaluru."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 156: In First Battle of Tarain, Prithviraj Chauhan defeated whom?",
    "en": "Q156. In First Battle of Tarain, Prithviraj Chauhan defeated whom?",
    "options": [
      "Mahmud of Ghazni",
      "Muhammad Ghori",
      "Qutbuddin Aibak",
      "Babur"
    ],
    "answer": 1,
    "summary": "He defeated Muhammad Ghori in 1191."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 157: Who is Frontier Gandhi?",
    "en": "Q157. Who is Frontier Gandhi?",
    "options": [
      "Maulana Azad",
      "Khan Abdul Ghaffar Khan",
      "Syed Ahmed Khan",
      "M.A. Jinnah"
    ],
    "answer": 1,
    "summary": "Khan Abdul Ghaffar Khan was called Frontier Gandhi."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 158: Who initiated Bhoodan Movement?",
    "en": "Q158. Who initiated Bhoodan Movement?",
    "options": [
      "Mahatma Gandhi",
      "Jayaprakash Narayan",
      "Vinoba Bhave",
      "Jawaharlal Nehru"
    ],
    "answer": 2,
    "summary": "Vinoba Bhave began it in 1951."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 159: First Viceroy after Government of India Act 1858?",
    "en": "Q159. First Viceroy after Government of India Act 1858?",
    "options": [
      "Lord Dalhousie",
      "Lord Canning",
      "Lord Mountbatten",
      "Lord Curzon"
    ],
    "answer": 1,
    "summary": "Lord Canning became the first Viceroy."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 160: Which planet is called Blue Planet?",
    "en": "Q160. Which planet is called Blue Planet?",
    "options": [
      "Venus",
      "Neptune",
      "Uranus",
      "Earth"
    ],
    "answer": 3,
    "summary": "Earth is called the Blue Planet."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 161: Narmada originates from where?",
    "en": "Q161. Narmada originates from where?",
    "options": [
      "Mahabaleshwar",
      "Brahmagiri",
      "Amarkantak",
      "Gangotri"
    ],
    "answer": 2,
    "summary": "Narmada originates at Amarkantak."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 162: Longest National Highway in India?",
    "en": "Q162. Longest National Highway in India?",
    "options": [
      "NH 7",
      "NH 44",
      "NH 27",
      "NH 48"
    ],
    "answer": 1,
    "summary": "NH 44 runs from Srinagar to Kanyakumari."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 163: Periyar National Park is in which state?",
    "en": "Q163. Periyar National Park is in which state?",
    "options": [
      "Kerala",
      "Tamil Nadu",
      "Karnataka",
      "Andhra Pradesh"
    ],
    "answer": 0,
    "summary": "Periyar is in Kerala."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 164: Sardar Sarovar Dam is on which river?",
    "en": "Q164. Sardar Sarovar Dam is on which river?",
    "options": [
      "Tapi",
      "Narmada",
      "Mahi",
      "Sabarmati"
    ],
    "answer": 1,
    "summary": "It is on the Narmada."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 165: Capital of Pallava dynasty?",
    "en": "Q165. Capital of Pallava dynasty?",
    "options": [
      "Madurai",
      "Tanjore",
      "Kanchipuram",
      "Badami"
    ],
    "answer": 2,
    "summary": "Kanchipuram was the Pallava capital."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 166: First INC session in 1885 was held at where?",
    "en": "Q166. First INC session in 1885 was held at where?",
    "options": [
      "Calcutta",
      "Madras",
      "Bombay",
      "Delhi"
    ],
    "answer": 2,
    "summary": "The first session was in Bombay."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 167: Rowlatt Act was passed in which year?",
    "en": "Q167. Rowlatt Act was passed in which year?",
    "options": [
      "1909",
      "1919",
      "1929",
      "1935"
    ],
    "answer": 1,
    "summary": "It was passed in 1919."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 168: Latitude dividing North and South Korea?",
    "en": "Q168. Latitude dividing North and South Korea?",
    "options": [
      "17th Parallel",
      "24th Parallel",
      "38th Parallel",
      "49th Parallel"
    ],
    "answer": 2,
    "summary": "The 38th Parallel is famous for this."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 169: Highest peak in Aravalli Range?",
    "en": "Q169. Highest peak in Aravalli Range?",
    "options": [
      "Anamudi",
      "Dodda Betta",
      "Guru Shikhar",
      "Mahendragiri"
    ],
    "answer": 2,
    "summary": "Guru Shikhar is the highest."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 170: Highest literacy state as per 2011 Census?",
    "en": "Q170. Highest literacy state as per 2011 Census?",
    "options": [
      "Mizoram",
      "Goa",
      "Kerala",
      "Tripura"
    ],
    "answer": 2,
    "summary": "Kerala had the highest literacy."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 171: Who wrote Arthashastra?",
    "en": "Q171. Who wrote Arthashastra?",
    "options": [
      "Megasthenes",
      "Kautilya",
      "Kalidasa",
      "Aryabhata"
    ],
    "answer": 1,
    "summary": "Kautilya wrote Arthashastra."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 172: Iron Man of India?",
    "en": "Q172. Iron Man of India?",
    "options": [
      "Subhas Chandra Bose",
      "Bhagat Singh",
      "Sardar Vallabhbhai Patel",
      "Bal Gangadhar Tilak"
    ],
    "answer": 2,
    "summary": "Sardar Patel is known by this title."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 173: Ellora Kailasanatha temple was mainly built by whom?",
    "en": "Q173. Ellora Kailasanatha temple was mainly built by whom?",
    "options": [
      "Pallavas",
      "Cholas",
      "Rashtrakutas",
      "Chalukyas"
    ],
    "answer": 2,
    "summary": "Rashtrakutas, especially Krishna I, built it."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 174: Deepest ocean in the world?",
    "en": "Q174. Deepest ocean in the world?",
    "options": [
      "Atlantic",
      "Indian",
      "Pacific",
      "Arctic"
    ],
    "answer": 2,
    "summary": "The Pacific contains the Mariana Trench."
  },
  {
    "cat": "Indian GK",
    "kn": "ಪ್ರಶ್ನೆ 175: Largest hot desert in the world?",
    "en": "Q175. Largest hot desert in the world?",
    "options": [
      "Gobi",
      "Kalahari",
      "Thar",
      "Sahara"
    ],
    "answer": 3,
    "summary": "The Sahara is the largest hot desert."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 176: Chemical name of Vitamin D?",
    "en": "Q176. Chemical name of Vitamin D?",
    "options": [
      "Retinol",
      "Ascorbic acid",
      "Calciferol",
      "Thiamine"
    ],
    "answer": 2,
    "summary": "Vitamin D is calciferol."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 177: Which refrigerants were banned due to ozone depletion?",
    "en": "Q177. Which refrigerants were banned due to ozone depletion?",
    "options": [
      "Nitrogen oxides",
      "CFCs",
      "Carbon monoxide",
      "Sulphur dioxide"
    ],
    "answer": 1,
    "summary": "CFCs deplete ozone."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 178: SI unit of frequency?",
    "en": "Q178. SI unit of frequency?",
    "options": [
      "Decibel",
      "Hertz",
      "Joule",
      "Diopter"
    ],
    "answer": 1,
    "summary": "Frequency is measured in hertz."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 179: Anemometer measures what?",
    "en": "Q179. Anemometer measures what?",
    "options": [
      "Atmospheric pressure",
      "Wind speed and direction",
      "Earthquakes",
      "Ocean depth"
    ],
    "answer": 1,
    "summary": "It measures wind."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 180: Normal resting adult heart rate?",
    "en": "Q180. Normal resting adult heart rate?",
    "options": [
      "50-60 bpm",
      "60-100 bpm",
      "100-120 bpm",
      "120-140 bpm"
    ],
    "answer": 1,
    "summary": "Normal resting adult heart rate is about 60-100 bpm."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 181: Acid found in lemons and oranges?",
    "en": "Q181. Acid found in lemons and oranges?",
    "options": [
      "Lactic acid",
      "Acetic acid",
      "Citric acid",
      "Tartaric acid"
    ],
    "answer": 2,
    "summary": "Citrus fruits contain citric acid."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 182: Closest planet to the Sun?",
    "en": "Q182. Closest planet to the Sun?",
    "options": [
      "Venus",
      "Earth",
      "Mercury",
      "Mars"
    ],
    "answer": 2,
    "summary": "Mercury is closest."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 183: Longest and strongest human bone?",
    "en": "Q183. Longest and strongest human bone?",
    "options": [
      "Tibia",
      "Fibula",
      "Humerus",
      "Femur"
    ],
    "answer": 3,
    "summary": "The femur is longest and strongest."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 184: Theory of Relativity was proposed by whom?",
    "en": "Q184. Theory of Relativity was proposed by whom?",
    "options": [
      "Newton",
      "Galileo",
      "Einstein",
      "Hawking"
    ],
    "answer": 2,
    "summary": "Einstein proposed relativity."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 185: Hypermetropia is corrected by which lens?",
    "en": "Q185. Hypermetropia is corrected by which lens?",
    "options": [
      "Concave",
      "Convex",
      "Cylindrical",
      "Bifocal"
    ],
    "answer": 1,
    "summary": "Convex lenses correct farsightedness."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 186: Atomic number 1 element?",
    "en": "Q186. Atomic number 1 element?",
    "options": [
      "Helium",
      "Oxygen",
      "Hydrogen",
      "Carbon"
    ],
    "answer": 2,
    "summary": "Hydrogen has atomic number 1."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 187: Solid changing to liquid is called what?",
    "en": "Q187. Solid changing to liquid is called what?",
    "options": [
      "Evaporation",
      "Sublimation",
      "Melting",
      "Freezing"
    ],
    "answer": 2,
    "summary": "Solid to liquid is melting."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 188: Iodine deficiency causes what?",
    "en": "Q188. Iodine deficiency causes what?",
    "options": [
      "Anemia",
      "Goiter",
      "Diabetes",
      "Scurvy"
    ],
    "answer": 1,
    "summary": "Iodine deficiency can cause goiter."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 189: Study of fungi is called what?",
    "en": "Q189. Study of fungi is called what?",
    "options": [
      "Virology",
      "Bacteriology",
      "Mycology",
      "Phycology"
    ],
    "answer": 2,
    "summary": "Mycology is the study of fungi."
  },
  {
    "cat": "Science",
    "kn": "ಪ್ರಶ್ನೆ 190: Primary energy source for Earth’s climate system?",
    "en": "Q190. Primary energy source for Earth’s climate system?",
    "options": [
      "Earth core",
      "Moon gravity",
      "The Sun",
      "Fossil fuels"
    ],
    "answer": 2,
    "summary": "The Sun drives Earth’s climate system."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 191: Next number: 1, 4, 9, 16, ?",
    "en": "Q191. Next number: 1, 4, 9, 16, ?",
    "options": [
      "20",
      "24",
      "25",
      "36"
    ],
    "answer": 2,
    "summary": "They are squares; next is 25."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 192: Son of my mother’s brother is my what?",
    "en": "Q192. Son of my mother’s brother is my what?",
    "options": [
      "Brother",
      "Cousin",
      "Nephew",
      "Uncle"
    ],
    "answer": 1,
    "summary": "Mother’s brother’s son is a cousin."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 193: Walk north 10 m, right 10 m, right 10 m: direction from start?",
    "en": "Q193. Walk north 10 m, right 10 m, right 10 m: direction from start?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 2,
    "summary": "She ends 10 m east of the start."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 194: If APPLE is BQQMF, ORANGE is coded as what?",
    "en": "Q194. If APPLE is BQQMF, ORANGE is coded as what?",
    "options": [
      "PSBOHF",
      "PQBOHF",
      "PSCOHF",
      "PRBOHF"
    ],
    "answer": 0,
    "summary": "Each letter shifts forward by one."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 195: What is 20% of 80?",
    "en": "Q195. What is 20% of 80?",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "answer": 2,
    "summary": "20% of 80 is 16."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 196: Area of circle with radius 7 cm, pi=22/7?",
    "en": "Q196. Area of circle with radius 7 cm, pi=22/7?",
    "options": [
      "44 sq.cm",
      "88 sq.cm",
      "154 sq.cm",
      "196 sq.cm"
    ],
    "answer": 2,
    "summary": "Area is 154 sq.cm."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 197: A 200 m train crosses a pole in 10 seconds. Speed in km/h?",
    "en": "Q197. A 200 m train crosses a pole in 10 seconds. Speed in km/h?",
    "options": [
      "36",
      "54",
      "72",
      "90"
    ],
    "answer": 2,
    "summary": "20 m/s equals 72 km/h."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 198: Father twice son; sum ages 60. Son age?",
    "en": "Q198. Father twice son; sum ages 60. Son age?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "answer": 1,
    "summary": "3x=60, so son is 20."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 199: A in 10 days and B in 15 days. Together?",
    "en": "Q199. A in 10 days and B in 15 days. Together?",
    "options": [
      "5 days",
      "6 days",
      "8 days",
      "12 days"
    ],
    "answer": 1,
    "summary": "Together rate is 1/6 work per day."
  },
  {
    "cat": "Mental Ability",
    "kn": "ಪ್ರಶ್ನೆ 200: At 6:00, angle between clock hands?",
    "en": "Q200. At 6:00, angle between clock hands?",
    "options": [
      "90°",
      "120°",
      "180°",
      "360°"
    ],
    "answer": 2,
    "summary": "At 6:00 the hands form a straight line."
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
  // Paper 14 uses the provided Q101-Q200 source set while numbering locally for the quiz UI.
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
