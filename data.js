const part1 = {
    "Step_1__Airport_Check-In_1._General_Check-in.mp3": {
        dialogue: [
            { speaker: "agent", text: "Hello, where are you flying today?", dict: { "hello": "merhaba", "where": "nereye", "are": "olmak", "flying": "uçmak", "today": "bugün" } },
            { speaker: "deniz", text: "Hello, I am flying to London.", dict: { "am": "olmak", "flying": "uçmak", "london": "londra" } },
            { speaker: "agent", text: "Can I see your passport and ticket, please?", dict: { "can": "ebilmek", "see": "görmek", "your": "senin", "passport": "pasaport", "ticket": "bilet", "please": "lütfen" } },
            { speaker: "deniz", text: "Yes, here is my passport.", dict: { "yes": "evet", "here": "işte", "is": "olmak", "passport": "pasaport" } },
            { speaker: "agent", text: "Thank you. Are you traveling alone?", dict: { "thank": "teşekkür etmek", "are": "olmak", "traveling": "seyahat etmek", "alone": "yalnız" } },
            { speaker: "deniz", text: "Yes, it is just me.", dict: { "is": "olmak", "just": "sadece", "me": "ben" } },
            { speaker: "agent", text: "Okay, here is your boarding pass.", dict: { "here": "işte", "is": "olmak", "boarding": "biniş", "pass": "kartı" } },
            { speaker: "deniz", text: "Thank you very much.", dict: { "thank": "teşekkür etmek", "very": "çok", "much": "fazla" } }
        ],
        questions: [
            { q: "Where is Deniz flying to?", a_en: "London", a_tr: "Londra" },
            { q: "What does the agent want to see first?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "What is the second item the agent wants to see?", a_en: "Ticket", a_tr: "Bilet" },
            { q: "Is Deniz traveling with family?", a_en: "No", a_tr: "Hayır" },
            { q: "The agent asks if Deniz is traveling...", a_en: "Alone", a_tr: "Yalnız" },
            { q: "What does the agent give Deniz? Boarding...", a_en: "Pass", a_tr: "Kart" },
            { q: "Who is Deniz talking to?", a_en: "Agent", a_tr: "Görevli" }
        ]
    },
    "Step_1__Airport_Check-In_2._Checking_Baggage.mp3": {
        dialogue: [
            { speaker: "agent", text: "Do you have bags to check in?", dict: { "do": "yapmak", "have": "sahip olmak", "bags": "çantalar", "check": "teslim etmek" } },
            { speaker: "deniz", text: "Yes, I have one big suitcase.", dict: { "have": "sahip olmak", "one": "bir", "big": "büyük", "suitcase": "valiz" } },
            { speaker: "agent", text: "Please put it on the scale.", dict: { "please": "lütfen", "put": "koymak", "scale": "terazi" } },
            { speaker: "deniz", text: "Okay, here it is. Is it heavy?", dict: { "here": "işte", "is": "olmak", "heavy": "ağır" } },
            { speaker: "agent", text: "It is 20 kilos. It is fine.", dict: { "is": "olmak", "kilos": "kilo", "fine": "iyi" } },
            { speaker: "deniz", text: "Do I keep this small bag with me?", dict: { "do": "yapmak", "keep": "tutmak", "small": "küçük", "bag": "çanta", "with": "ile" } },
            { speaker: "agent", text: "Yes, you can take that on the plane.", dict: { "can": "ebilmek", "take": "almak", "plane": "uçak" } },
            { speaker: "deniz", text: "Great, thank you.", dict: { "great": "harika", "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "How many suitcases does Deniz have?", a_en: "One", a_tr: "Bir" },
            { q: "What size is the suitcase?", a_en: "Big", a_tr: "Büyük" },
            { q: "Where should the bag go?", a_en: "Scale", a_tr: "Terazi" },
            { q: "Deniz asks if the bag is...", a_en: "Heavy", a_tr: "Ağır" },
            { q: "How many kilos is the bag?", a_en: "20", a_tr: "20" },
            { q: "Deniz has another bag. It is...", a_en: "Small", a_tr: "Küçük" },
            { q: "Where can the small bag go?", a_en: "Plane", a_tr: "Uçak" }
        ]
    },
    "Step_1__Airport_Check-In_3._Overweight_Luggage.mp3": {
        dialogue: [
            { speaker: "agent", text: "I am sorry, your bag is too heavy.", dict: { "am": "olmak", "sorry": "üzgün", "bag": "çanta", "is": "olmak", "too": "çok", "heavy": "ağır" } },
            { speaker: "deniz", text: "Oh no. How heavy is it?", dict: { "how": "ne kadar", "heavy": "ağır", "is": "olmak" } },
            { speaker: "agent", text: "It is 25 kilos. The limit is 23 kilos.", dict: { "is": "olmak", "limit": "sınır" } },
            { speaker: "deniz", text: "Can I pay for the extra weight?", dict: { "can": "ebilmek", "pay": "ödemek", "extra": "fazla", "weight": "ağırlık" } },
            { speaker: "agent", text: "Yes, it costs 30 euros.", dict: { "costs": "tutar", "euros": "avro" } },
            { speaker: "deniz", text: "Okay, I will pay with my credit card.", dict: { "will": "ecek", "pay": "ödemek", "with": "ile", "credit": "kredi", "card": "kart" } },
            { speaker: "agent", text: "Thank you. Here is your receipt.", dict: { "thank": "teşekkür etmek", "here": "işte", "is": "olmak", "receipt": "fiş" } },
            { speaker: "deniz", text: "Thanks for your help.", dict: { "thanks": "teşekkürler", "for": "için", "help": "yardım" } }
        ],
        questions: [
            { q: "What is the problem with the bag?", a_en: "Heavy", a_tr: "Ağır" },
            { q: "How many kilos is the bag?", a_en: "25", a_tr: "25" },
            { q: "What is the weight limit?", a_en: "23", a_tr: "23" },
            { q: "What will Deniz pay for?", a_en: "Weight", a_tr: "Ağırlık" },
            { q: "How much does it cost?", a_en: "30", a_tr: "30" },
            { q: "How will Deniz pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What document does the agent give?", a_en: "Receipt", a_tr: "Fiş" }
        ]
    },
    "Step_1__Airport_Check-In_4._Seat_Preference.mp3": {
        dialogue: [
            { speaker: "agent", text: "Would you like a window or aisle seat?", dict: { "would": "ister", "like": "istemek", "window": "pencere", "aisle": "koridor", "seat": "koltuk" } },
            { speaker: "deniz", text: "I would like a window seat, please.", dict: { "would": "ister", "like": "istemek", "window": "pencere", "seat": "koltuk", "please": "lütfen" } },
            { speaker: "agent", text: "Let me check. Yes, I have one.", dict: { "let": "izin vermek", "check": "kontrol etmek", "have": "sahip olmak", "one": "bir" } },
            { speaker: "deniz", text: "Is it near the front of the plane?", dict: { "is": "olmak", "near": "yakın", "front": "ön", "plane": "uçak" } },
            { speaker: "agent", text: "Yes, it is in row 10.", dict: { "is": "olmak", "row": "sıra" } },
            { speaker: "deniz", text: "That is perfect.", dict: { "is": "olmak", "perfect": "kusursuz" } },
            { speaker: "agent", text: "Here is your ticket with your seat number.", dict: { "here": "işte", "is": "olmak", "ticket": "bilet", "with": "ile", "seat": "koltuk", "number": "numara" } },
            { speaker: "deniz", text: "Thanks a lot.", dict: { "thanks": "teşekkürler", "lot": "çok" } }
        ],
        questions: [
            { q: "The agent offers a window or... seat.", a_en: "Aisle", a_tr: "Koridor" },
            { q: "Which seat does Deniz want?", a_en: "Window", a_tr: "Pencere" },
            { q: "Where does Deniz want to sit?", a_en: "Front", a_tr: "Ön" },
            { q: "What row is the seat in?", a_en: "10", a_tr: "10" },
            { q: "Deniz says the seat is...", a_en: "Perfect", a_tr: "Kusursuz" },
            { q: "What has the seat number on it?", a_en: "Ticket", a_tr: "Bilet" },
            { q: "What vehicle are they talking about?", a_en: "Plane", a_tr: "Uçak" }
        ]
    },
    "Step_1__Airport_Check-In_5._Boarding_Time_Inquiry.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, what time is boarding?", dict: { "excuse": "affetmek", "what": "ne", "time": "zaman", "is": "olmak", "boarding": "biniş" } },
            { speaker: "agent", text: "Boarding starts at 10:30 AM.", dict: { "boarding": "biniş", "starts": "başlamak" } },
            { speaker: "deniz", text: "Which gate do I need to go to?", dict: { "which": "hangi", "gate": "kapı", "do": "yapmak", "need": "ihtiyaç duymak", "go": "gitmek" } },
            { speaker: "agent", text: "You need to go to Gate 15.", dict: { "need": "ihtiyaç duymak", "go": "gitmek", "gate": "kapı" } },
            { speaker: "deniz", text: "Is the gate far from here?", dict: { "is": "olmak", "gate": "kapı", "far": "uzak", "from": "den", "here": "burası" } },
            { speaker: "agent", text: "It is a ten-minute walk.", dict: { "is": "olmak", "minute": "dakikalık", "walk": "yürüyüş" } },
            { speaker: "deniz", text: "Okay, I will go there now.", dict: { "will": "ecek", "go": "gitmek", "there": "oraya", "now": "şimdi" } },
            { speaker: "agent", text: "Have a good flight!", dict: { "have": "sahip olmak", "good": "iyi", "flight": "uçuş" } }
        ],
        questions: [
            { q: "What event is Deniz asking about?", a_en: "Boarding", a_tr: "Biniş" },
            { q: "What time does it start?", a_en: "10", a_tr: "10" },
            { q: "What must Deniz find?", a_en: "Gate", a_tr: "Kapı" },
            { q: "What number is the gate?", a_en: "15", a_tr: "15" },
            { q: "Deniz asks if the gate is...", a_en: "Far", a_tr: "Uzak" },
            { q: "How many minutes is the walk?", a_en: "Ten", a_tr: "On" },
            { q: "The agent wishes them a good...", a_en: "Flight", a_tr: "Uçuş" }
        ]
    },
    "Step_2__Boarding_the_Plane_1._Finding_the_Seat.mp3": {
        dialogue: [
            { speaker: "attendant", text: "Welcome! Can I see your ticket?", dict: { "welcome": "hoşgeldiniz", "can": "ebilmek", "see": "görmek", "ticket": "bilet" } },
            { speaker: "deniz", text: "Yes, my seat is 10A.", dict: { "seat": "koltuk", "is": "olmak" } },
            { speaker: "attendant", text: "Walk down this aisle. It is on the left.", dict: { "walk": "yürümek", "down": "aşağı", "aisle": "koridor", "is": "olmak", "left": "sol" } },
            { speaker: "deniz", text: "Is it near the wing?", dict: { "is": "olmak", "near": "yakın", "wing": "kanat" } },
            { speaker: "attendant", text: "Yes, it is right next to the window.", dict: { "is": "olmak", "right": "tam", "next": "yanında", "window": "pencere" } },
            { speaker: "deniz", text: "Perfect, I see it now.", dict: { "perfect": "kusursuz", "see": "görmek", "now": "şimdi" } },
            { speaker: "attendant", text: "Let me know if you need help.", dict: { "let": "izin vermek", "know": "bilmek", "need": "ihtiyaç duymak", "help": "yardım" } },
            { speaker: "deniz", text: "Thank you, I am fine.", dict: { "thank": "teşekkür etmek", "am": "olmak", "fine": "iyi" } }
        ],
        questions: [
            { q: "What document does the attendant check?", a_en: "Ticket", a_tr: "Bilet" },
            { q: "What is the seat number?", a_en: "10a", a_tr: "10a" },
            { q: "The attendant says to walk down the...", a_en: "Aisle", a_tr: "Koridor" },
            { q: "Is the seat on the right or left?", a_en: "Left", a_tr: "Sol" },
            { q: "Is the seat near the front or wing?", a_en: "Wing", a_tr: "Kanat" },
            { q: "Is it an aisle or window seat?", a_en: "Window", a_tr: "Pencere" },
            { q: "The attendant offers to give...", a_en: "Help", a_tr: "Yardım" }
        ]
    },
    "Step_2__Boarding_the_Plane_2._Overhead_Bin_Space.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, this bin is full.", dict: { "excuse": "affetmek", "bin": "dolap", "is": "olmak", "full": "dolu" } },
            { speaker: "attendant", text: "Let me help you find space.", dict: { "let": "izin vermek", "help": "yardım etmek", "find": "bulmak", "space": "boşluk" } },
            { speaker: "deniz", text: "My bag is a little heavy.", dict: { "bag": "çanta", "is": "olmak", "little": "biraz", "heavy": "ağır" } },
            { speaker: "attendant", text: "I can put it in the bin behind you.", dict: { "can": "ebilmek", "put": "koymak", "bin": "dolap", "behind": "arkasında" } },
            { speaker: "deniz", text: "Thank you. That is very helpful.", dict: { "thank": "teşekkür etmek", "is": "olmak", "very": "çok", "helpful": "yardımcı" } },
            { speaker: "attendant", text: "You are welcome. Please sit down.", dict: { "are": "olmak", "welcome": "rica", "sit": "oturmak", "down": "aşağı" } },
            { speaker: "deniz", text: "I will sit down now.", dict: { "will": "ecek", "sit": "oturmak", "down": "aşağı", "now": "şimdi" } },
            { speaker: "attendant", text: "Fasten your seatbelt, please.", dict: { "fasten": "bağlamak", "seatbelt": "emniyet kemeri", "please": "lütfen" } }
        ],
        questions: [
            { q: "Deniz says the bin is...", a_en: "Full", a_tr: "Dolu" },
            { q: "The attendant will try to find...", a_en: "Space", a_tr: "Boşluk" },
            { q: "How does the bag feel?", a_en: "Heavy", a_tr: "Ağır" },
            { q: "The attendant puts the bag in a bin... them.", a_en: "Behind", a_tr: "Arkasında" },
            { q: "Deniz says the attendant is very...", a_en: "Helpful", a_tr: "Yardımcı" },
            { q: "The attendant tells Deniz to...", a_en: "Sit", a_tr: "Oturmak" },
            { q: "What must Deniz fasten?", a_en: "Seatbelt", a_tr: "Emniyet kemeri" }
        ]
    },
    "Step_2__Boarding_the_Plane_3._Wrong_Seat.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, I think this is my seat.", dict: { "think": "düşünmek", "is": "olmak", "seat": "koltuk" } },
            { speaker: "passenger", text: "Oh, really? Are you sure?", dict: { "really": "gerçekten", "are": "olmak", "sure": "emin" } },
            { speaker: "deniz", text: "Yes, my ticket says 10A.", dict: { "ticket": "bilet", "says": "diyor" } },
            { speaker: "passenger", text: "Sorry, I am in 10B. I sat in the wrong seat.", dict: { "sorry": "üzgün", "am": "olmak", "sat": "oturdum", "wrong": "yanlış", "seat": "koltuk" } },
            { speaker: "deniz", text: "No problem. It happens.", dict: { "problem": "sorun", "happens": "olur" } },
            { speaker: "passenger", text: "I will move right now.", dict: { "will": "ecek", "move": "hareket etmek", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "Take your time, no rush.", dict: { "take": "almak", "time": "zaman", "rush": "acele" } },
            { speaker: "passenger", text: "Thank you for understanding.", dict: { "thank": "teşekkür etmek", "understanding": "anlayış" } }
        ],
        questions: [
            { q: "What does Deniz say the passenger is in?", a_en: "Seat", a_tr: "Koltuk" },
            { q: "What proves it is Deniz's seat?", a_en: "Ticket", a_tr: "Bilet" },
            { q: "What seat number does Deniz have?", a_en: "10a", a_tr: "10a" },
            { q: "The passenger sat in the... seat.", a_en: "Wrong", a_tr: "Yanlış" },
            { q: "The passenger says 'I will... right now'.", a_en: "Move", a_tr: "Hareket etmek" },
            { q: "Deniz says 'no...'", a_en: "Rush", a_tr: "Acele" },
            { q: "The passenger thanks Deniz for their...", a_en: "Understanding", a_tr: "Anlayış" }
        ]
    },
    "Step_2__Boarding_the_Plane_4._Asking_for_a_Blanket.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, it is very cold here.", dict: { "is": "olmak", "very": "çok", "cold": "soğuk", "here": "burada" } },
            { speaker: "attendant", text: "I can turn down the air.", dict: { "can": "ebilmek", "turn": "çevirmek", "down": "aşağı", "air": "hava" } },
            { speaker: "deniz", text: "Can I also get a blanket, please?", dict: { "can": "ebilmek", "also": "ayrıca", "get": "almak", "blanket": "battaniye" } },
            { speaker: "attendant", text: "Yes, of course. I will bring one.", dict: { "will": "ecek", "bring": "getirmek", "one": "bir" } },
            { speaker: "deniz", text: "Thank you, I want to sleep.", dict: { "want": "istemek", "sleep": "uyumak" } },
            { speaker: "attendant", text: "Here is your blanket.", dict: { "here": "işte", "is": "olmak", "blanket": "battaniye" } },
            { speaker: "deniz", text: "Thanks, this is much better.", dict: { "is": "olmak", "much": "çok", "better": "daha iyi" } },
            { speaker: "attendant", text: "Have a nice rest.", dict: { "have": "sahip olmak", "nice": "güzel", "rest": "dinlenme" } }
        ],
        questions: [
            { q: "How is Deniz feeling?", a_en: "Cold", a_tr: "Soğuk" },
            { q: "What will the attendant turn down?", a_en: "Air", a_tr: "Hava" },
            { q: "What item does Deniz request?", a_en: "Blanket", a_tr: "Battaniye" },
            { q: "What will the attendant do with the blanket?", a_en: "Bring", a_tr: "Getirmek" },
            { q: "What does Deniz want to do?", a_en: "Sleep", a_tr: "Uyumak" },
            { q: "Deniz says the blanket makes them feel...", a_en: "Better", a_tr: "Daha iyi" },
            { q: "The attendant wishes them a nice...", a_en: "Rest", a_tr: "Dinlenme" }
        ]
    },
    "Step_2__Boarding_the_Plane_5._Safety_Check.mp3": {
        dialogue: [
            { speaker: "attendant", text: "Please fasten your seatbelt.", dict: { "fasten": "bağlamak", "seatbelt": "emniyet kemeri" } },
            { speaker: "deniz", text: "Okay, I did it.", dict: { "did": "yaptım" } },
            { speaker: "attendant", text: "And please put your table up.", dict: { "put": "koymak", "table": "masa", "up": "yukarı" } },
            { speaker: "deniz", text: "Sorry, I forgot. Is this right?", dict: { "sorry": "üzgün", "forgot": "unuttum", "is": "olmak", "right": "doğru" } },
            { speaker: "attendant", text: "Yes, that is perfect. Thank you.", dict: { "is": "olmak", "perfect": "kusursuz" } },
            { speaker: "deniz", text: "Are we leaving soon?", dict: { "are": "olmak", "leaving": "ayrılıyoruz", "soon": "yakında" } },
            { speaker: "attendant", text: "Yes, we will fly in five minutes.", dict: { "will": "ecek", "fly": "uçmak", "five": "beş", "minutes": "dakika" } },
            { speaker: "deniz", text: "Great, I am ready.", dict: { "great": "harika", "am": "olmak", "ready": "hazır" } }
        ],
        questions: [
            { q: "What must Deniz fasten?", a_en: "Seatbelt", a_tr: "Emniyet kemeri" },
            { q: "What must Deniz put up?", a_en: "Table", a_tr: "Masa" },
            { q: "Deniz apologizes because they...", a_en: "Forgot", a_tr: "Unuttum" },
            { q: "Deniz asks if they are leaving...", a_en: "Soon", a_tr: "Yakında" },
            { q: "What will they do in five minutes?", a_en: "Fly", a_tr: "Uçmak" },
            { q: "How many minutes until they fly?", a_en: "Five", a_tr: "Beş" },
            { q: "Deniz says 'I am...'", a_en: "Ready", a_tr: "Hazır" }
        ]
    },
    "Step_3__In-Flight_Service_1._Ordering_Food.mp3": {
        dialogue: [
            { speaker: "attendant", text: "What do you want to eat? Chicken or pasta?", dict: { "do": "yapmak", "want": "istemek", "eat": "yemek", "chicken": "tavuk", "pasta": "makarna" } },
            { speaker: "deniz", text: "I will have the pasta, please.", dict: { "will": "ecek", "have": "almak", "pasta": "makarna" } },
            { speaker: "attendant", text: "Here is your hot meal.", dict: { "is": "olmak", "hot": "sıcak", "meal": "öğün" } },
            { speaker: "deniz", text: "Does it come with bread?", dict: { "does": "yapmak", "come": "gelmek", "with": "ile", "bread": "ekmek" } },
            { speaker: "attendant", text: "Yes, there is a bread roll on the tray.", dict: { "is": "olmak", "bread": "ekmek", "roll": "rulo", "tray": "tepsi" } },
            { speaker: "deniz", text: "Thank you. It looks good.", dict: { "looks": "görünüyor", "good": "iyi" } },
            { speaker: "attendant", text: "Enjoy your meal.", dict: { "enjoy": "keyfini çıkarmak", "meal": "öğün" } },
            { speaker: "deniz", text: "I will, thanks.", dict: { "will": "ecek", "thanks": "teşekkürler" } }
        ],
        questions: [
            { q: "The attendant offers chicken or...", a_en: "Pasta", a_tr: "Makarna" },
            { q: "What does Deniz order?", a_en: "Pasta", a_tr: "Makarna" },
            { q: "The attendant says 'Here is your hot...'", a_en: "Meal", a_tr: "Öğün" },
            { q: "What side dish does Deniz ask about?", a_en: "Bread", a_tr: "Ekmek" },
            { q: "Where is the bread located?", a_en: "Tray", a_tr: "Tepsi" },
            { q: "Deniz says the food... good.", a_en: "Looks", a_tr: "Görünüyor" },
            { q: "The attendant says '... your meal'.", a_en: "Enjoy", a_tr: "Afiyet olsun" }
        ]
    },
    "Step_3__In-Flight_Service_2._Ordering_a_Drink.mp3": {
        dialogue: [
            { speaker: "attendant", text: "What would you like to drink?", dict: { "would": "ister", "like": "istemek", "drink": "içmek" } },
            { speaker: "deniz", text: "Can I have some apple juice?", dict: { "can": "ebilmek", "have": "almak", "apple": "elma", "juice": "meyve suyu" } },
            { speaker: "attendant", text: "Do you want ice in it?", dict: { "do": "yapmak", "want": "istemek", "ice": "buz" } },
            { speaker: "deniz", text: "No ice, please.", dict: { "no": "hayır", "ice": "buz" } },
            { speaker: "attendant", text: "Here is your juice.", dict: { "is": "olmak", "juice": "meyve suyu" } },
            { speaker: "deniz", text: "Can I have a glass of water, too?", dict: { "can": "ebilmek", "have": "almak", "glass": "bardak", "water": "su", "too": "ayrıca" } },
            { speaker: "attendant", text: "Of course. Here you go.", dict: { "go": "gitmek" } },
            { speaker: "deniz", text: "Thank you very much.", dict: { "very": "çok", "much": "fazla" } }
        ],
        questions: [
            { q: "What action is the attendant asking about?", a_en: "Drink", a_tr: "İçmek" },
            { q: "What fruit flavor does Deniz want?", a_en: "Apple", a_tr: "Elma" },
            { q: "What type of beverage is ordered?", a_en: "Juice", a_tr: "Meyve suyu" },
            { q: "Does Deniz want ice?", a_en: "No", a_tr: "Hayır" },
            { q: "What does Deniz want a glass of?", a_en: "Water", a_tr: "Su" },
            { q: "What container is the water in?", a_en: "Glass", a_tr: "Bardak" },
            { q: "The attendant says 'Of...'", a_en: "Course", a_tr: "Elbette" }
        ]
    },
    "Step_3__In-Flight_Service_3._Dropping_a_Fork.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, my fork fell on the floor.", dict: { "fork": "çatal", "fell": "düştü", "floor": "zemin" } },
            { speaker: "attendant", text: "Oh, don't use it. I will get a new one.", dict: { "use": "kullanmak", "will": "ecek", "get": "almak", "new": "yeni", "one": "bir" } },
            { speaker: "deniz", text: "I am sorry about that.", dict: { "am": "olmak", "sorry": "üzgün" } },
            { speaker: "attendant", text: "It is no problem at all.", dict: { "is": "olmak", "no": "yok", "problem": "sorun" } },
            { speaker: "deniz", text: "The food is very nice, by the way.", dict: { "food": "yemek", "is": "olmak", "very": "çok", "nice": "güzel" } },
            { speaker: "attendant", text: "I am glad you like it. Here is a clean fork.", dict: { "am": "olmak", "glad": "memnun", "like": "beğenmek", "is": "olmak", "clean": "temiz", "fork": "çatal" } },
            { speaker: "deniz", text: "Thanks for your quick help.", dict: { "quick": "hızlı", "help": "yardım" } },
            { speaker: "attendant", text: "You are welcome.", dict: { "are": "olmak", "welcome": "rica" } }
        ],
        questions: [
            { q: "What item was dropped?", a_en: "Fork", a_tr: "Çatal" },
            { q: "Where did the item fall?", a_en: "Floor", a_tr: "Zemin" },
            { q: "The attendant tells them not to... it.", a_en: "Use", a_tr: "Kullanmak" },
            { q: "The attendant will get a... one.", a_en: "New", a_tr: "Yeni" },
            { q: "The attendant gives them a... fork.", a_en: "Clean", a_tr: "Temiz" },
            { q: "Deniz says the food is very...", a_en: "Nice", a_tr: "Güzel" },
            { q: "Deniz thanks the attendant for... help.", a_en: "Quick", a_tr: "Hızlı" }
        ]
    },
    "Step_3__In-Flight_Service_4._Trash_Collection.mp3": {
        dialogue: [
            { speaker: "attendant", text: "Have you finished your meal?", dict: { "have": "sahip olmak", "finished": "bitirdi", "meal": "öğün" } },
            { speaker: "deniz", text: "Yes, you can take my tray.", dict: { "can": "ebilmek", "take": "almak", "tray": "tepsi" } },
            { speaker: "attendant", text: "Did you like the pasta?", dict: { "did": "yaptı", "like": "beğenmek", "pasta": "makarna" } },
            { speaker: "deniz", text: "It was delicious, thank you.", dict: { "was": "idi", "delicious": "lezzetli" } },
            { speaker: "attendant", text: "Would you like some tea or coffee now?", dict: { "would": "ister", "like": "istemek", "tea": "çay", "coffee": "kahve", "now": "şimdi" } },
            { speaker: "deniz", text: "I will have some black tea with sugar.", dict: { "will": "ecek", "have": "almak", "black": "siyah", "tea": "çay", "with": "ile", "sugar": "şeker" } },
            { speaker: "attendant", text: "I will bring it right away.", dict: { "will": "ecek", "bring": "getirmek", "right": "hemen", "away": "hemen" } },
            { speaker: "deniz", text: "Take your time.", dict: { "take": "almak", "time": "zaman" } }
        ],
        questions: [
            { q: "Has Deniz finished their meal?", a_en: "Yes", a_tr: "Evet" },
            { q: "What can the attendant take?", a_en: "Tray", a_tr: "Tepsi" },
            { q: "Deniz says the pasta was...", a_en: "Delicious", a_tr: "Lezzetli" },
            { q: "The attendant offers tea or...", a_en: "Coffee", a_tr: "Kahve" },
            { q: "What drink does Deniz choose?", a_en: "Tea", a_tr: "Çay" },
            { q: "What color is the tea?", a_en: "Black", a_tr: "Siyah" },
            { q: "What does Deniz want in the tea?", a_en: "Sugar", a_tr: "Şeker" }
        ]
    },
    "Step_4__Passport_Control_5._Arrival_Time.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, when do we arrive?", dict: { "when": "ne zaman", "do": "yapmak", "arrive": "varmak" } },
            { speaker: "attendant", text: "We will land in one hour.", dict: { "will": "ecek", "land": "inmek", "one": "bir", "hour": "saat" } },
            { speaker: "deniz", text: "Are we on time?", dict: { "are": "olmak", "time": "zaman" } },
            { speaker: "attendant", text: "Yes, the weather is good. We are on time.", dict: { "weather": "hava", "is": "olmak", "good": "iyi", "are": "olmak", "time": "zaman" } },
            { speaker: "deniz", text: "That is great. I have a bus to catch.", dict: { "is": "olmak", "great": "harika", "have": "sahip olmak", "bus": "otobüs", "catch": "yakalamak" } },
            { speaker: "attendant", text: "We will start going down soon.", dict: { "will": "ecek", "start": "başlamak", "going": "gidiyoruz", "down": "aşağı", "soon": "yakında" } },
            { speaker: "deniz", text: "Okay, I will pack my things.", dict: { "will": "ecek", "pack": "toplamak", "things": "eşyalar" } },
            { speaker: "attendant", text: "Please stay in your seat.", dict: { "stay": "kalmak", "seat": "koltuk" } }
        ],
        questions: [
            { q: "What action is Deniz asking about?", a_en: "Arrive", a_tr: "Varmak" },
            { q: "When will the plane land? In one...", a_en: "Hour", a_tr: "Saat" },
            { q: "The attendant says the plane is on...", a_en: "Time", a_tr: "Zaman" },
            { q: "Why is the plane on time? Good...", a_en: "Weather", a_tr: "Hava" },
            { q: "What vehicle does Deniz need to catch?", a_en: "Bus", a_tr: "Otobüs" },
            { q: "What will Deniz do with their things?", a_en: "Pack", a_tr: "Toplamak" },
            { q: "Where must Deniz stay?", a_en: "Seat", a_tr: "Koltuk" }
        ]
    },
    "Step_4__Passport_Control_1._Purpose_of_Visit.mp3": {
        dialogue: [
            { speaker: "officer", text: "Good afternoon. Passport, please.", dict: { "good": "iyi", "afternoon": "öğleden sonra", "passport": "pasaport" } },
            { speaker: "deniz", text: "Hello. Here is my passport.", dict: { "here": "işte", "is": "olmak", "passport": "pasaport" } },
            { speaker: "officer", text: "Why are you visiting our country?", dict: { "are": "olmak", "visiting": "ziyaret etmek", "country": "ülke" } },
            { speaker: "deniz", text: "I am here for a holiday.", dict: { "am": "olmak", "here": "burada", "holiday": "tatil" } },
            { speaker: "officer", text: "Who are you traveling with?", dict: { "are": "olmak", "traveling": "seyahat etmek", "with": "ile" } },
            { speaker: "deniz", text: "I am traveling by myself.", dict: { "am": "olmak", "traveling": "seyahat etmek", "myself": "kendim" } },
            { speaker: "officer", text: "Welcome. Enjoy your holiday.", dict: { "welcome": "hoşgeldiniz", "enjoy": "keyfini çıkarmak", "holiday": "tatil" } },
            { speaker: "deniz", text: "Thank you so much.", dict: { "thank": "teşekkür etmek", "so": "çok", "much": "fazla" } }
        ],
        questions: [
            { q: "What time of day is it?", a_en: "Afternoon", a_tr: "Öğleden sonra" },
            { q: "What document is requested?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "Why is Deniz visiting the country?", a_en: "Holiday", a_tr: "Tatil" },
            { q: "Is Deniz traveling with friends?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz is traveling by...", a_en: "Myself", a_tr: "Kendim" },
            { q: "The officer says 'Enjoy your...'", a_en: "Holiday", a_tr: "Tatil" },
            { q: "Deniz says thank you so...", a_en: "Much", a_tr: "Çok" }
        ]
    },
    "Step_4__Passport_Control_2._Duration_of_Stay.mp3": {
        dialogue: [
            { speaker: "officer", text: "How long will you stay here?", dict: { "long": "uzun", "will": "ecek", "stay": "kalmak", "here": "burada" } },
            { speaker: "deniz", text: "I will stay for one week.", dict: { "will": "ecek", "stay": "kalmak", "one": "bir", "week": "hafta" } },
            { speaker: "officer", text: "When is your flight back?", dict: { "is": "olmak", "flight": "uçuş", "back": "geri" } },
            { speaker: "deniz", text: "My flight back is next Monday.", dict: { "flight": "uçuş", "back": "geri", "is": "olmak", "next": "gelecek", "monday": "pazartesi" } },
            { speaker: "officer", text: "Can I see your return ticket?", dict: { "can": "ebilmek", "see": "görmek", "return": "dönüş", "ticket": "bilet" } },
            { speaker: "deniz", text: "Yes, it is on my phone. Here it is.", dict: { "is": "olmak", "phone": "telefon", "here": "işte" } },
            { speaker: "officer", text: "Everything looks good.", dict: { "everything": "her şey", "looks": "görünüyor", "good": "iyi" } },
            { speaker: "deniz", text: "Thank you, officer.", dict: { "thank": "teşekkür etmek", "officer": "memur" } }
        ],
        questions: [
            { q: "How long will Deniz stay?", a_en: "Week", a_tr: "Hafta" },
            { q: "When is the flight back?", a_en: "Monday", a_tr: "Pazartesi" },
            { q: "What kind of ticket does the officer want to see?", a_en: "Return", a_tr: "Dönüş" },
            { q: "What device is the ticket on?", a_en: "Phone", a_tr: "Telefon" },
            { q: "The officer says everything looks...", a_en: "Good", a_tr: "İyi" },
            { q: "Who is Deniz speaking to?", a_en: "Officer", a_tr: "Memur" },
            { q: "Deniz will... for one week.", a_en: "Stay", a_tr: "Kalmak" }
        ]
    },
    "Step_4__Passport_Control_3._Accommodation.mp3": {
        dialogue: [
            { speaker: "officer", text: "Where are you staying?", dict: { "are": "olmak", "staying": "kalıyorsunuz" } },
            { speaker: "deniz", text: "I am staying at the Star Hotel.", dict: { "am": "olmak", "staying": "kalıyorum", "hotel": "otel" } },
            { speaker: "officer", text: "Where is that hotel?", dict: { "is": "olmak", "hotel": "otel" } },
            { speaker: "deniz", text: "It is in the city center.", dict: { "is": "olmak", "city": "şehir", "center": "merkez" } },
            { speaker: "officer", text: "Do you have the booking paper?", dict: { "do": "yapmak", "have": "sahip olmak", "booking": "rezervasyon", "paper": "kağıt" } },
            { speaker: "deniz", text: "Yes, I printed it. Here you go.", dict: { "printed": "yazdırdım", "here": "işte", "go": "gitmek" } },
            { speaker: "officer", text: "Thank you. You can go.", dict: { "thank": "teşekkür etmek", "can": "ebilmek", "go": "gitmek" } },
            { speaker: "deniz", text: "Have a good day.", dict: { "have": "sahip olmak", "good": "iyi", "day": "gün" } }
        ],
        questions: [
            { q: "What kind of place is Deniz staying in?", a_en: "Hotel", a_tr: "Otel" },
            { q: "What is the name of the hotel?", a_en: "Star", a_tr: "Yıldız" },
            { q: "Where is the hotel located?", a_en: "Center", a_tr: "Merkez" },
            { q: "The officer asks for the booking...", a_en: "Paper", a_tr: "Kağıt" },
            { q: "What did Deniz do to the paper?", a_en: "Printed", a_tr: "Yazdırdım" },
            { q: "The officer says Deniz can...", a_en: "Go", a_tr: "Gitmek" },
            { q: "Deniz says 'Have a good...'", a_en: "Day", a_tr: "Gün" }
        ]
    },
    "Step_4__Passport_Control_4._First_Visit.mp3": {
        dialogue: [
            { speaker: "officer", text: "Is this your first time here?", dict: { "is": "olmak", "first": "ilk", "time": "kez", "here": "burada" } },
            { speaker: "deniz", text: "Yes, it is my first time.", dict: { "is": "olmak", "first": "ilk", "time": "kez" } },
            { speaker: "officer", text: "What do you want to see?", dict: { "do": "yapmak", "want": "istemek", "see": "görmek" } },
            { speaker: "deniz", text: "I want to visit the big museums.", dict: { "want": "istemek", "visit": "ziyaret etmek", "big": "büyük", "museums": "müzeler" } },
            { speaker: "officer", text: "The museums are very nice here.", dict: { "are": "olmak", "very": "çok", "nice": "güzel", "here": "burada" } },
            { speaker: "deniz", text: "I am very excited to see them.", dict: { "am": "olmak", "very": "çok", "excited": "heyecanlı", "see": "görmek" } },
            { speaker: "officer", text: "Here is your stamp. Welcome.", dict: { "here": "işte", "is": "olmak", "stamp": "damga", "welcome": "hoşgeldiniz" } },
            { speaker: "deniz", text: "Thanks!", dict: { "thanks": "teşekkürler" } }
        ],
        questions: [
            { q: "Is it Deniz's first time visiting?", a_en: "Yes", a_tr: "Evet" },
            { q: "What places does Deniz want to visit?", a_en: "Museums", a_tr: "Müzeler" },
            { q: "Are the museums big or small?", a_en: "Big", a_tr: "Büyük" },
            { q: "The officer says the museums are very...", a_en: "Nice", a_tr: "Güzel" },
            { q: "How is Deniz feeling about the trip?", a_en: "Excited", a_tr: "Heyecanlı" },
            { q: "What does the officer put in the passport?", a_en: "Stamp", a_tr: "Damga" },
            { q: "The officer says '... to our country'.", a_en: "Welcome", a_tr: "Hoşgeldiniz" }
        ]
    },
    "Step_5__Customs_Clearance_5._Fingerprints.mp3": {
        dialogue: [
            { speaker: "officer", text: "Please look at the camera.", dict: { "look": "bakmak", "camera": "kamera" } },
            { speaker: "deniz", text: "Like this?", dict: { "like": "gibi" } },
            { speaker: "officer", text: "Yes. Now, put your right hand on the machine.", dict: { "put": "koymak", "right": "sağ", "hand": "el", "machine": "makine" } },
            { speaker: "deniz", text: "Just the right hand?", dict: { "just": "sadece", "right": "sağ", "hand": "el" } },
            { speaker: "officer", text: "Yes, press your fingers down.", dict: { "press": "basmak", "fingers": "parmaklar", "down": "aşağı" } },
            { speaker: "deniz", text: "Okay, I did it.", dict: { "did": "yaptım" } },
            { speaker: "officer", text: "All done. Here is your passport.", dict: { "done": "bitti", "here": "işte", "is": "olmak", "passport": "pasaport" } },
            { speaker: "deniz", text: "Thank you. Goodbye.", dict: { "thank": "teşekkür etmek", "goodbye": "hoşçakal" } }
        ],
        questions: [
            { q: "What does the officer want Deniz to look at?", a_en: "Camera", a_tr: "Kamera" },
            { q: "Which hand must be placed on the machine?", a_en: "Right", a_tr: "Sağ" },
            { q: "What must Deniz press down?", a_en: "Fingers", a_tr: "Parmaklar" },
            { q: "What object are the fingers placed on?", a_en: "Machine", a_tr: "Makine" },
            { q: "The officer says 'All...'", a_en: "Done", a_tr: "Bitti" },
            { q: "What document does the officer return?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "Deniz says 'Thank you...'", a_en: "Goodbye", a_tr: "Hoşçakal" }
        ]
    },
    "Step_5__Customs_Clearance_1._Nothing_to_Declare.mp3": {
        dialogue: [
            { speaker: "customs", text: "Do you have anything to declare?", dict: { "do": "yapmak", "have": "sahip olmak", "anything": "herhangi bir şey", "declare": "beyan etmek" } },
            { speaker: "deniz", text: "No, I don't have anything.", dict: { "have": "sahip olmak", "anything": "hiçbir şey" } },
            { speaker: "customs", text: "Do you have any food or fruit?", dict: { "have": "sahip olmak", "food": "yemek", "fruit": "meyve" } },
            { speaker: "deniz", text: "I only have some chocolate.", dict: { "only": "sadece", "have": "sahip olmak", "chocolate": "çikolata" } },
            { speaker: "customs", text: "Chocolate is fine. You can go.", dict: { "is": "olmak", "fine": "iyi", "can": "ebilmek", "go": "gitmek" } },
            { speaker: "deniz", text: "Where is the exit, please?", dict: { "where": "nerede", "is": "olmak", "exit": "çıkış" } },
            { speaker: "customs", text: "Go straight and turn left.", dict: { "go": "gitmek", "straight": "düz", "turn": "dönmek", "left": "sol" } },
            { speaker: "deniz", text: "Thank you!", dict: { "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "Does Deniz have anything to declare?", a_en: "No", a_tr: "Hayır" },
            { q: "What type of item does Deniz have?", a_en: "Chocolate", a_tr: "Çikolata" },
            { q: "Does Deniz have any fruit?", a_en: "No", a_tr: "Hayır" },
            { q: "The officer says chocolate is...", a_en: "Fine", a_tr: "İyi" },
            { q: "What is Deniz looking for?", a_en: "Exit", a_tr: "Çıkış" },
            { q: "The officer says to go...", a_en: "Straight", a_tr: "Düz" },
            { q: "After going straight, which way to turn?", a_en: "Left", a_tr: "Sol" }
        ]
    },
    "Step_5__Customs_Clearance_2._Carrying_Cash.mp3": {
        dialogue: [
            { speaker: "customs", text: "How much money do you have with you?", dict: { "much": "kadar", "money": "para", "do": "yapmak", "have": "sahip olmak" } },
            { speaker: "deniz", text: "I have about four hundred euros.", dict: { "have": "sahip olmak", "about": "yaklaşık", "four": "dört", "hundred": "yüz", "euros": "avro" } },
            { speaker: "customs", text: "Do you have more than 10,000 euros?", dict: { "have": "sahip olmak", "more": "daha" } },
            { speaker: "deniz", text: "No, definitely not.", dict: { "definitely": "kesinlikle", "not": "değil" } },
            { speaker: "customs", text: "Okay, that is fine.", dict: { "is": "olmak", "fine": "iyi" } },
            { speaker: "deniz", text: "Is everything okay?", dict: { "is": "olmak", "everything": "her şey", "okay": "tamam" } },
            { speaker: "customs", text: "Yes, you can pass. Have a good trip.", dict: { "can": "ebilmek", "pass": "geçmek", "have": "sahip olmak", "good": "iyi", "trip": "seyahat" } },
            { speaker: "deniz", text: "Thanks a lot.", dict: { "thanks": "teşekkürler", "lot": "çok" } }
        ],
        questions: [
            { q: "What is the officer asking about?", a_en: "Money", a_tr: "Para" },
            { q: "How many hundred euros does Deniz have?", a_en: "Four", a_tr: "Dört" },
            { q: "Does Deniz have more than 10,000?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz says 'definitely...'", a_en: "Not", a_tr: "Değil" },
            { q: "The officer says 'that is...'", a_en: "Fine", a_tr: "İyi" },
            { q: "The officer says 'you can...'", a_en: "Pass", a_tr: "Geçmek" },
            { q: "The officer wishes Deniz a good...", a_en: "Trip", a_tr: "Seyahat" }
        ]
    },
    "Step_5__Customs_Clearance_3._Bag_Check.mp3": {
        dialogue: [
            { speaker: "customs", text: "Please put your bag on this table.", dict: { "put": "koymak", "bag": "çanta", "table": "masa" } },
            { speaker: "deniz", text: "Sure. Do I need to open it?", dict: { "do": "yapmak", "need": "ihtiyaç duymak", "open": "açmak" } },
            { speaker: "customs", text: "Yes, open it, please.", dict: { "open": "açmak" } },
            { speaker: "deniz", text: "Okay, here you go.", dict: { "here": "işte", "go": "gitmek" } },
            { speaker: "customs", text: "What is in this small bag?", dict: { "is": "olmak", "small": "küçük", "bag": "çanta" } },
            { speaker: "deniz", text: "Those are my clothes and shoes.", dict: { "are": "olmak", "clothes": "kıyafetler", "shoes": "ayakkabılar" } },
            { speaker: "customs", text: "Alright, you can close it now.", dict: { "can": "ebilmek", "close": "kapatmak", "now": "şimdi" } },
            { speaker: "deniz", text: "Thank you.", dict: { "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "What object must be put on the table?", a_en: "Bag", a_tr: "Çanta" },
            { q: "What must Deniz do to the bag?", a_en: "Open", a_tr: "Açmak" },
            { q: "The officer asks about a... bag.", a_en: "Small", a_tr: "Küçük" },
            { q: "What is inside the bag besides shoes?", a_en: "Clothes", a_tr: "Kıyafetler" },
            { q: "What is inside the bag besides clothes?", a_en: "Shoes", a_tr: "Ayakkabılar" },
            { q: "What must Deniz do to the bag now?", a_en: "Close", a_tr: "Kapatmak" },
            { q: "Where does the bag go?", a_en: "Table", a_tr: "Masa" }
        ]
    },
    "Step_5__Customs_Clearance_4._Explaining_an_Item.mp3": {
        dialogue: [
            { speaker: "customs", text: "What is this electronic machine?", dict: { "is": "olmak", "electronic": "elektronik", "machine": "makine" } },
            { speaker: "deniz", text: "That is my camera for taking photos.", dict: { "is": "olmak", "camera": "kamera", "taking": "çekmek", "photos": "fotoğraflar" } },
            { speaker: "customs", text: "Is it for personal use?", dict: { "is": "olmak", "personal": "kişisel", "use": "kullanım" } },
            { speaker: "deniz", text: "Yes, I like photography.", dict: { "like": "sevmek", "photography": "fotoğrafçılık" } },
            { speaker: "customs", text: "Okay, everything is clear.", dict: { "is": "olmak", "everything": "her şey", "clear": "açık" } },
            { speaker: "deniz", text: "Can I put my bag down now?", dict: { "can": "ebilmek", "put": "koymak", "bag": "çanta", "down": "aşağı" } },
            { speaker: "customs", text: "Yes, follow the green sign to exit.", dict: { "follow": "takip etmek", "green": "yeşil", "sign": "tabela", "exit": "çıkmak" } },
            { speaker: "deniz", text: "Perfect, goodbye.", dict: { "perfect": "kusursuz" } }
        ],
        questions: [
            { q: "What type of machine is it?", a_en: "Electronic", a_tr: "Elektronik" },
            { q: "What specific item is it?", a_en: "Camera", a_tr: "Kamera" },
            { q: "What does Deniz take with it?", a_en: "Photos", a_tr: "Fotoğraflar" },
            { q: "Is the camera for personal use?", a_en: "Yes", a_tr: "Evet" },
            { q: "The officer says 'everything is...'", a_en: "Clear", a_tr: "Açık" },
            { q: "What color is the sign to follow?", a_en: "Green", a_tr: "Yeşil" },
            { q: "Where does the sign lead?", a_en: "Exit", a_tr: "Çıkış" }
        ]
    },
    "Step_6__Arranging_an_Airport_Transfer_5._Final_Clearance.mp3": {
        dialogue: [
            { speaker: "customs", text: "Can I see your passport one more time?", dict: { "can": "ebilmek", "see": "görmek", "passport": "pasaport", "more": "daha", "time": "kez" } },
            { speaker: "deniz", text: "Yes, here it is.", dict: { "here": "işte", "is": "olmak" } },
            { speaker: "customs", text: "Where did you fly from today?", dict: { "did": "yaptı", "fly": "uçmak", "today": "bugün" } },
            { speaker: "deniz", text: "I flew from London.", dict: { "flew": "uçtum", "london": "londra" } },
            { speaker: "customs", text: "Alright, you are finished here.", dict: { "are": "olmak", "finished": "bitmiş" } },
            { speaker: "deniz", text: "Where are the taxis?", dict: { "are": "olmak", "taxis": "taksiler" } },
            { speaker: "customs", text: "Outside the main doors on the right.", dict: { "outside": "dışarıda", "main": "ana", "doors": "kapılar", "right": "sağ" } },
            { speaker: "deniz", text: "Great, thank you.", dict: { "great": "harika", "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "What document is asked for?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "Where did Deniz fly from?", a_en: "London", a_tr: "Londra" },
            { q: "The customs officer says 'you are... here'.", a_en: "Finished", a_tr: "Bitti" },
            { q: "What vehicle is Deniz looking for?", a_en: "Taxis", a_tr: "Taksiler" },
            { q: "Are the taxis inside or outside?", a_en: "Outside", a_tr: "Dışarıda" },
            { q: "What kind of doors? The...", a_en: "Main", a_tr: "Ana" },
            { q: "Are they on the left or right?", a_en: "Right", a_tr: "Sağ" }
        ]
    },
    "Step_6__Arranging_an_Airport_Transfer_1._Finding_a_Taxi.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, where is the taxi stop?", dict: { "is": "olmak", "taxi": "taksi", "stop": "durak" } },
            { speaker: "worker", text: "It is outside, next to the bus stop.", dict: { "is": "olmak", "outside": "dışarıda", "next": "yanında", "bus": "otobüs", "stop": "durak" } },
            { speaker: "deniz", text: "Are there usually many taxis?", dict: { "are": "olmak", "usually": "genellikle", "many": "birçok", "taxis": "taksiler" } },
            { speaker: "worker", text: "Yes, you will find one easily.", dict: { "will": "ecek", "find": "bulmak", "one": "bir", "easily": "kolayca" } },
            { speaker: "deniz", text: "Do they take credit cards?", dict: { "do": "yapmak", "take": "almak", "credit": "kredi", "cards": "kartlar" } },
            { speaker: "worker", text: "Yes, all yellow taxis take cards.", dict: { "all": "tüm", "yellow": "sarı", "taxis": "taksiler", "take": "almak" } },
            { speaker: "deniz", text: "Thank you for the information.", dict: { "thank": "teşekkür etmek", "information": "bilgi" } },
            { speaker: "worker", text: "You are welcome.", dict: { "are": "olmak", "welcome": "rica" } }
        ],
        questions: [
            { q: "What kind of stop is Deniz looking for?", a_en: "Taxi", a_tr: "Taksi" },
            { q: "Is the stop inside or outside?", a_en: "Outside", a_tr: "Dışarıda" },
            { q: "The taxi stop is next to the... stop.", a_en: "Bus", a_tr: "Otobüs" },
            { q: "The worker says Deniz will find one...", a_en: "Easily", a_tr: "Kolayca" },
            { q: "What kind of cards do they take?", a_en: "Credit", a_tr: "Kredi" },
            { q: "What color are the taxis?", a_en: "Yellow", a_tr: "Sarı" },
            { q: "Deniz thanks them for the...", a_en: "Information", a_tr: "Bilgi" }
        ]
    },
    "Step_6__Arranging_an_Airport_Transfer_2._Asking_the_Price.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello, how much to the Star Hotel?", dict: { "much": "kadar", "hotel": "otel" } },
            { speaker: "driver", text: "It costs about thirty euros.", dict: { "costs": "tutar", "about": "yaklaşık", "thirty": "otuz", "euros": "avro" } },
            { speaker: "deniz", text: "Is it a fixed price?", dict: { "is": "olmak", "fixed": "sabit", "price": "fiyat" } },
            { speaker: "driver", text: "No, we use the taximeter.", dict: { "use": "kullanmak", "taximeter": "taksimetre" } },
            { speaker: "deniz", text: "Okay, that sounds fair to me.", dict: { "sounds": "geliyor", "fair": "adil" } },
            { speaker: "driver", text: "Please get in the car.", dict: { "get": "girmek", "car": "araba" } },
            { speaker: "deniz", text: "Thank you.", dict: { "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "Where does Deniz want to go?", a_en: "Hotel", a_tr: "Otel" },
            { q: "How many euros does it cost?", a_en: "Thirty", a_tr: "Otuz" },
            { q: "Is the price fixed?", a_en: "No", a_tr: "Hayır" },
            { q: "What device do they use to calculate the price?", a_en: "Taximeter", a_tr: "Taksimetre" },
            { q: "Deniz thinks the price is...", a_en: "Fair", a_tr: "Adil" },
            { q: "The driver says 'Please get in the...'", a_en: "Car", a_tr: "Araba" },
            { q: "What is the name of the hotel?", a_en: "Star", a_tr: "Yıldız" }
        ]
    },
    "Step_6__Arranging_an_Airport_Transfer_3._Loading_Bags.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can you help me with my bag?", dict: { "can": "ebilmek", "help": "yardım etmek", "bag": "çanta" } },
            { speaker: "driver", text: "Yes, I will put it in the back.", dict: { "will": "ecek", "put": "koymak", "back": "arka" } },
            { speaker: "deniz", text: "Be careful, it is very heavy.", dict: { "be": "olmak", "careful": "dikkatli", "is": "olmak", "very": "çok", "heavy": "ağır" } },
            { speaker: "driver", text: "I got it. It is safe inside.", dict: { "got": "aldım", "is": "olmak", "safe": "güvenli", "inside": "içeride" } },
            { speaker: "deniz", text: "Thank you. Should I sit in the back?", dict: { "should": "meli", "sit": "oturmak", "back": "arka" } },
            { speaker: "driver", text: "Yes, make yourself comfortable.", dict: { "make": "yapmak", "comfortable": "rahat" } },
            { speaker: "deniz", text: "I am ready to go.", dict: { "am": "olmak", "ready": "hazır", "go": "gitmek" } },
            { speaker: "driver", text: "Let's go to your hotel.", dict: { "go": "gitmek", "hotel": "otel" } }
        ],
        questions: [
            { q: "What does Deniz need help with?", a_en: "Bag", a_tr: "Çanta" },
            { q: "Where will the driver put the bag?", a_en: "Back", a_tr: "Arka" },
            { q: "Deniz says the bag is very...", a_en: "Heavy", a_tr: "Ağır" },
            { q: "The driver says the bag is...", a_en: "Safe", a_tr: "Güvenli" },
            { q: "Where will Deniz sit?", a_en: "Back", a_tr: "Arka" },
            { q: "The driver tells Deniz to make themselves...", a_en: "Comfortable", a_tr: "Rahat" },
            { q: "They are going to the...", a_en: "Hotel", a_tr: "Otel" }
        ]
    },
    "Step_6__Arranging_an_Airport_Transfer_4._The_Route.mp3": {
        dialogue: [
            { speaker: "driver", text: "Traffic is bad today.", dict: { "traffic": "trafik", "is": "olmak", "bad": "kötü", "today": "bugün" } },
            { speaker: "deniz", text: "Oh no. How long will it take?", dict: { "long": "uzun", "will": "ecek", "take": "sürmek" } },
            { speaker: "driver", text: "Maybe forty-five minutes.", dict: { "minutes": "dakika" } },
            { speaker: "deniz", text: "Is there a faster road?", dict: { "is": "olmak", "faster": "daha hızlı", "road": "yol" } },
            { speaker: "driver", text: "I can take the highway, but it has a toll.", dict: { "can": "ebilmek", "take": "almak", "highway": "otoyol", "has": "sahip", "toll": "gişe" } },
            { speaker: "deniz", text: "That is fine. I will pay the toll.", dict: { "is": "olmak", "fine": "iyi", "will": "ecek", "pay": "ödemek" } },
            { speaker: "driver", text: "Okay, I will take the fast road.", dict: { "will": "ecek", "take": "almak", "fast": "hızlı", "road": "yol" } },
            { speaker: "deniz", text: "I just want to rest soon.", dict: { "want": "istemek", "rest": "dinlenmek", "soon": "yakında" } }
        ],
        questions: [
            { q: "What is bad today?", a_en: "Traffic", a_tr: "Trafik" },
            { q: "How many minutes will it take?", a_en: "Forty-five", a_tr: "Kırk beş" },
            { q: "Deniz asks for a... road.", a_en: "Faster", a_tr: "Daha hızlı" },
            { q: "What kind of road can the driver take?", a_en: "Highway", a_tr: "Otoyol" },
            { q: "What does the highway have?", a_en: "Toll", a_tr: "Gişe" },
            { q: "Who will pay the toll?", a_en: "Deniz", a_tr: "Deniz" },
            { q: "Deniz wants to... soon.", a_en: "Rest", a_tr: "Dinlenmek" }
        ]
    },
    "Step_7__Hotel_Check-In_1._Greeting.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello, I have a room booked for today.", dict: { "have": "sahip olmak", "room": "oda", "booked": "ayrılmış", "today": "bugün" } },
            { speaker: "receptionist", text: "Welcome! What is your name?", dict: { "welcome": "hoşgeldiniz", "is": "olmak", "name": "isim" } },
            { speaker: "deniz", text: "My name is Deniz.", dict: { "name": "isim", "is": "olmak" } },
            { speaker: "receptionist", text: "Can I see your ID or passport?", dict: { "can": "ebilmek", "see": "görmek", "passport": "pasaport" } },
            { speaker: "deniz", text: "Yes, here is my passport.", dict: { "here": "işte", "is": "olmak" } },
            { speaker: "receptionist", text: "Thank you. You are staying for four nights?", dict: { "are": "olmak", "staying": "kalıyorsunuz", "four": "dört", "nights": "geceler" } },
            { speaker: "deniz", text: "Yes, four nights. That is correct.", dict: { "four": "dört", "nights": "geceler", "is": "olmak", "correct": "doğru" } },
            { speaker: "receptionist", text: "I will prepare your key now.", dict: { "will": "ecek", "prepare": "hazırlamak", "key": "anahtar", "now": "şimdi" } }
        ],
        questions: [
            { q: "What does Deniz have booked?", a_en: "Room", a_tr: "Oda" },
            { q: "What is the traveler's name?", a_en: "Deniz", a_tr: "Deniz" },
            { q: "What document does the receptionist ask for?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "How many nights are they staying?", a_en: "Four", a_tr: "Dört" },
            { q: "Deniz says 'That is...'", a_en: "Correct", a_tr: "Doğru" },
            { q: "What will the receptionist prepare?", a_en: "Key", a_tr: "Anahtar" },
            { q: "What part of the day is the room booked for?", a_en: "Today", a_tr: "Bugün" }
        ]
    }
};const part2 = {
    "Step_7__Hotel_Check-In_2._Breakfast_Question.mp3": {
        dialogue: [
            { speaker: "deniz", text: "What time is breakfast served?", dict: { "what": "ne", "time": "saat", "is": "olmak", "breakfast": "kahvaltı", "served": "servis edilir" } },
            { speaker: "receptionist", text: "It starts at 7:00 AM and ends at 10:00 AM.", dict: { "starts": "başlar", "and": "ve", "ends": "biter" } },
            { speaker: "deniz", text: "Is it on this floor?", dict: { "is": "olmak", "on": "üzerinde", "this": "bu", "floor": "kat" } },
            { speaker: "receptionist", text: "No, it is on the second floor.", dict: { "no": "hayır", "is": "olmak", "second": "ikinci", "floor": "kat" } },
            { speaker: "deniz", text: "Do I need a ticket for breakfast?", dict: { "do": "yapmak", "need": "ihtiyaç duymak", "ticket": "bilet", "for": "için" } },
            { speaker: "receptionist", text: "Just tell them your room number.", dict: { "just": "sadece", "tell": "söylemek", "your": "senin", "room": "oda", "number": "numara" } },
            { speaker: "deniz", text: "Okay, that is easy. Thank you.", dict: { "is": "olmak", "easy": "kolay", "thank": "teşekkür etmek" } },
            { speaker: "receptionist", text: "Enjoy your breakfast tomorrow!", dict: { "enjoy": "keyfini çıkarmak", "your": "senin", "tomorrow": "yarın" } }
        ],
        questions: [
            { q: "What meal is Deniz asking about?", a_en: "Breakfast", a_tr: "Kahvaltı" },
            { q: "What time does it start?", a_en: "7", a_tr: "7" },
            { q: "What floor is it on?", a_en: "Second", a_tr: "İkinci" },
            { q: "Does Deniz need a ticket?", a_en: "No", a_tr: "Hayır" },
            { q: "What number do they need to tell?", a_en: "Room", a_tr: "Oda" },
            { q: "Deniz says 'that is...'", a_en: "Easy", a_tr: "Kolay" },
            { q: "When will they have breakfast?", a_en: "Tomorrow", a_tr: "Yarın" }
        ]
    },
    "Step_7__Hotel_Check-In_3._Wi-Fi_Connection.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Is there free internet in the room?", dict: { "is": "olmak", "there": "orada", "free": "ücretsiz", "internet": "internet", "room": "oda" } },
            { speaker: "receptionist", text: "Yes, the Wi-Fi is free for guests.", dict: { "yes": "evet", "is": "olmak", "free": "ücretsiz", "for": "için", "guests": "misafirler" } },
            { speaker: "deniz", text: "What is the password?", dict: { "what": "ne", "is": "olmak", "password": "şifre" } },
            { speaker: "receptionist", text: "It is written on this small card.", dict: { "is": "olmak", "written": "yazılı", "on": "üzerinde", "small": "küçük", "card": "kart" } },
            { speaker: "deniz", text: "Does it work in the lobby, too?", dict: { "does": "yapmak", "work": "çalışmak", "in": "içinde", "lobby": "lobi", "too": "ayrıca" } },
            { speaker: "receptionist", text: "Yes, it works everywhere in the hotel.", dict: { "works": "çalışır", "everywhere": "her yerde", "hotel": "otel" } },
            { speaker: "deniz", text: "That is great, thanks.", dict: { "is": "olmak", "great": "harika", "thanks": "teşekkürler" } },
            { speaker: "receptionist", text: "Let me know if you have problems with it.", dict: { "let": "izin vermek", "know": "bilmek", "if": "eğer", "have": "sahip olmak", "problems": "sorunlar" } }
        ],
        questions: [
            { q: "What kind of connection is Deniz asking about?", a_en: "Internet", a_tr: "İnternet" },
            { q: "Is the Wi-Fi free?", a_en: "Yes", a_tr: "Evet" },
            { q: "What is written on the small card?", a_en: "Password", a_tr: "Şifre" },
            { q: "Where does the Wi-Fi work, besides the room?", a_en: "Lobby", a_tr: "Lobi" },
            { q: "The receptionist says it works... in the hotel.", a_en: "Everywhere", a_tr: "Her yerde" },
            { q: "Deniz says 'That is...'", a_en: "Great", a_tr: "Harika" },
            { q: "The receptionist asks to be told if there are...", a_en: "Problems", a_tr: "Sorunlar" }
        ]
    },
    "Step_7__Hotel_Check-In_4._Asking_for_a_Wake-Up_Call.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can someone wake me up tomorrow?", dict: { "can": "ebilmek", "someone": "birisi", "wake": "uyandırmak", "up": "yukarı", "tomorrow": "yarın" } },
            { speaker: "receptionist", text: "Of course. What time do you want to wake up?", dict: { "course": "elbette", "what": "ne", "time": "zaman", "do": "yapmak", "want": "istemek", "wake": "uyanmak" } },
            { speaker: "deniz", text: "Please call my room at 8:00 AM.", dict: { "please": "lütfen", "call": "aramak", "room": "oda" } },
            { speaker: "receptionist", text: "I will set the alarm for 8:00 AM.", dict: { "will": "ecek", "set": "ayarlamak", "alarm": "alarm" } },
            { speaker: "deniz", text: "Does the phone ring loud?", dict: { "does": "yapmak", "phone": "telefon", "ring": "çalmak", "loud": "yüksek sesle" } },
            { speaker: "receptionist", text: "Yes, it will wake you up, don't worry.", dict: { "will": "ecek", "wake": "uyandırmak", "worry": "endişelenmek" } },
            { speaker: "deniz", text: "Thank you, I sleep very deeply!", dict: { "thank": "teşekkür etmek", "sleep": "uyumak", "very": "çok", "deeply": "derinden" } },
            { speaker: "receptionist", text: "We will make sure you wake up.", dict: { "will": "ecek", "make": "yapmak", "sure": "emin", "wake": "uyanmak" } }
        ],
        questions: [
            { q: "What does Deniz want someone to do?", a_en: "Wake", a_tr: "Uyandırmak" },
            { q: "What time is the wake-up call?", a_en: "8", a_tr: "8" },
            { q: "What will the receptionist set?", a_en: "Alarm", a_tr: "Alarm" },
            { q: "What object will ring?", a_en: "Phone", a_tr: "Telefon" },
            { q: "Deniz asks if the ring is...", a_en: "Loud", a_tr: "Yüksek" },
            { q: "Deniz says 'I sleep very...'", a_en: "Deeply", a_tr: "Derin" },
            { q: "The receptionist tells them not to...", a_en: "Worry", a_tr: "Endişelenmek" }
        ]
    },
    "Step_7__Hotel_Check-In_5._Dropping_Off.mp3": {
        dialogue: [
            { speaker: "receptionist", text: "Your room is number 505.", dict: { "your": "senin", "room": "oda", "is": "olmak", "number": "numara" } },
            { speaker: "deniz", text: "Is that on the fifth floor?", dict: { "is": "olmak", "that": "şu", "on": "üzerinde", "fifth": "beşinci", "floor": "kat" } },
            { speaker: "receptionist", text: "Yes. The elevator is behind you.", dict: { "elevator": "asansör", "is": "olmak", "behind": "arkasında", "you": "sen" } },
            { speaker: "deniz", text: "How do I use this card to open the door?", dict: { "how": "nasıl", "do": "yapmak", "use": "kullanmak", "card": "kart", "open": "açmak", "door": "kapı" } },
            { speaker: "receptionist", text: "Just touch the card to the door handle.", dict: { "just": "sadece", "touch": "dokunmak", "card": "kart", "door": "kapı", "handle": "kol" } },
            { speaker: "deniz", text: "Okay, I understand.", dict: { "understand": "anlamak" } },
            { speaker: "receptionist", text: "Have a great stay with us!", dict: { "have": "sahip olmak", "great": "harika", "stay": "konaklama", "with": "ile" } },
            { speaker: "deniz", text: "Thanks, I am going to my room now.", dict: { "thanks": "teşekkürler", "am": "olmak", "going": "gidiyorum", "room": "oda", "now": "şimdi" } }
        ],
        questions: [
            { q: "What is the room number?", a_en: "505", a_tr: "505" },
            { q: "What floor is it on?", a_en: "Fifth", a_tr: "Beşinci" },
            { q: "What is behind Deniz?", a_en: "Elevator", a_tr: "Asansör" },
            { q: "What does Deniz use to open the door?", a_en: "Card", a_tr: "Kart" },
            { q: "The receptionist says to... the card.", a_en: "Touch", a_tr: "Dokunmak" },
            { q: "Where does the card touch? The door...", a_en: "Handle", a_tr: "Kol" },
            { q: "Deniz says 'I...'", a_en: "Understand", a_tr: "Anlıyorum" }
        ]
    },
    "Step_8__Hotel_Complaints_1._Dirty_Room.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. My room is not clean.", dict: { "room": "oda", "is": "olmak", "not": "değil", "clean": "temiz" } },
            { speaker: "receptionist", text: "I am so sorry. What is dirty?", dict: { "am": "olmak", "so": "çok", "sorry": "üzgün", "what": "ne", "is": "olmak", "dirty": "kirli" } },
            { speaker: "deniz", text: "The bathroom floor is wet and dirty.", dict: { "bathroom": "banyo", "floor": "zemin", "is": "olmak", "wet": "ıslak", "and": "ve", "dirty": "kirli" } },
            { speaker: "receptionist", text: "I will send the cleaner right now.", dict: { "will": "ecek", "send": "göndermek", "cleaner": "temizlikçi", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "Can they bring clean towels too?", dict: { "can": "ebilmek", "bring": "getirmek", "clean": "temiz", "towels": "havlular", "too": "ayrıca" } },
            { speaker: "receptionist", text: "Yes, absolutely. I apologize.", dict: { "absolutely": "kesinlikle", "apologize": "özür dilemek" } },
            { speaker: "deniz", text: "Thank you for fixing it fast.", dict: { "thank": "teşekkür etmek", "fixing": "düzeltmek", "fast": "hızlı" } },
            { speaker: "receptionist", text: "It will be clean in five minutes.", dict: { "will": "ecek", "be": "olmak", "clean": "temiz", "five": "beş", "minutes": "dakika" } }
        ],
        questions: [
            { q: "What is the problem with the room? It is not...", a_en: "Clean", a_tr: "Temiz" },
            { q: "What room specifically is dirty?", a_en: "Bathroom", a_tr: "Banyo" },
            { q: "The floor is dirty and...", a_en: "Wet", a_tr: "Islak" },
            { q: "Who will the receptionist send?", a_en: "Cleaner", a_tr: "Temizlikçi" },
            { q: "What else does Deniz want?", a_en: "Towels", a_tr: "Havlular" },
            { q: "The receptionist says 'I...'", a_en: "Apologize", a_tr: "Özür dilerim" },
            { q: "How many minutes will it take?", a_en: "Five", a_tr: "Beş" }
        ]
    },
    "Step_8__Hotel_Complaints_2._No_Hot_Water.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, my shower has no hot water.", dict: { "excuse": "affetmek", "shower": "duş", "has": "sahip", "no": "yok", "hot": "sıcak", "water": "su" } },
            { speaker: "receptionist", text: "Oh, I am sorry. Let me check the system.", dict: { "am": "olmak", "sorry": "üzgün", "let": "izin vermek", "check": "kontrol etmek", "system": "sistem" } },
            { speaker: "deniz", text: "It is only cold water.", dict: { "is": "olmak", "only": "sadece", "cold": "soğuk", "water": "su" } },
            { speaker: "receptionist", text: "The worker will come to look at it.", dict: { "worker": "işçi", "will": "ecek", "come": "gelmek", "look": "bakmak" } },
            { speaker: "deniz", text: "Will it take a long time?", dict: { "will": "ecek", "take": "sürmek", "long": "uzun", "time": "zaman" } },
            { speaker: "receptionist", text: "No, he will fix it very fast.", dict: { "will": "ecek", "fix": "tamir etmek", "very": "çok", "fast": "hızlı" } },
            { speaker: "deniz", text: "Okay, I will wait in my room.", dict: { "will": "ecek", "wait": "beklemek", "room": "oda" } },
            { speaker: "receptionist", text: "Thanks for your patience.", dict: { "thanks": "teşekkürler", "patience": "sabır" } }
        ],
        questions: [
            { q: "What doesn't have hot water?", a_en: "Shower", a_tr: "Duş" },
            { q: "Deniz says it is only... water.", a_en: "Cold", a_tr: "Soğuk" },
            { q: "Who will come to look at it?", a_en: "Worker", a_tr: "İşçi" },
            { q: "Deniz asks if it will take a... time.", a_en: "Long", a_tr: "Uzun" },
            { q: "The receptionist says he will fix it very...", a_en: "Fast", a_tr: "Hızlı" },
            { q: "Where will Deniz wait?", a_en: "Room", a_tr: "Oda" },
            { q: "The receptionist thanks them for their...", a_en: "Patience", a_tr: "Sabır" }
        ]
    },
    "Step_8__Hotel_Complaints_3._Noisy_Neighbors.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello, the people next to me are very loud.", dict: { "people": "insanlar", "next": "yanında", "are": "olmak", "very": "çok", "loud": "yüksek sesli" } },
            { speaker: "receptionist", text: "I am sorry. Are they playing music?", dict: { "am": "olmak", "sorry": "üzgün", "are": "olmak", "playing": "çalıyor", "music": "müzik" } },
            { speaker: "deniz", text: "Yes, loud music and shouting. I want to sleep.", dict: { "loud": "yüksek", "music": "müzik", "shouting": "bağırmak", "want": "istemek", "sleep": "uyumak" } },
            { speaker: "receptionist", text: "I will call their room and tell them to stop.", dict: { "will": "ecek", "call": "aramak", "room": "oda", "tell": "söylemek", "stop": "durmak" } },
            { speaker: "deniz", text: "Thank you. It is past midnight.", dict: { "is": "olmak", "past": "geçti", "midnight": "gece yarısı" } },
            { speaker: "receptionist", text: "If they don't stop, I will give you a new room.", dict: { "if": "eğer", "stop": "durmak", "will": "ecek", "give": "vermek", "new": "yeni", "room": "oda" } },
            { speaker: "deniz", text: "I hope they just go to sleep.", dict: { "hope": "umut etmek", "just": "sadece", "go": "gitmek", "sleep": "uyumak" } },
            { speaker: "receptionist", text: "I will call them right away.", dict: { "will": "ecek", "call": "aramak", "right": "hemen", "away": "hemen" } }
        ],
        questions: [
            { q: "The people next door are very...", a_en: "Loud", a_tr: "Yüksek sesli" },
            { q: "What are they playing?", a_en: "Music", a_tr: "Müzik" },
            { q: "What else are the neighbors doing?", a_en: "Shouting", a_tr: "Bağırmak" },
            { q: "What time is it past?", a_en: "Midnight", a_tr: "Gece yarısı" },
            { q: "What will the receptionist do?", a_en: "Call", a_tr: "Aramak" },
            { q: "The receptionist tells them to...", a_en: "Stop", a_tr: "Durmak" },
            { q: "What will the receptionist give if they don't stop?", a_en: "Room", a_tr: "Oda" }
        ]
    },
    "Step_8__Hotel_Complaints_4._Broken_Air_Conditioning.mp3": {
        dialogue: [
            { speaker: "deniz", text: "My room is too hot. The air machine is broken.", dict: { "room": "oda", "is": "olmak", "too": "çok", "hot": "sıcak", "air": "hava", "machine": "makine", "broken": "bozuk" } },
            { speaker: "receptionist", text: "Did you turn it on using the remote?", dict: { "did": "yaptı", "turn": "açmak", "using": "kullanarak", "remote": "kumanda" } },
            { speaker: "deniz", text: "Yes, but cold air is not coming out.", dict: { "cold": "soğuk", "air": "hava", "is": "olmak", "not": "değil", "coming": "geliyor" } },
            { speaker: "receptionist", text: "I am sorry. We must fix that tomorrow.", dict: { "am": "olmak", "sorry": "üzgün", "must": "zorunda", "fix": "tamir etmek", "tomorrow": "yarın" } },
            { speaker: "deniz", text: "Can I change my room tonight?", dict: { "can": "ebilmek", "change": "değiştirmek", "room": "oda", "tonight": "bu gece" } },
            { speaker: "receptionist", text: "Yes, I have a nice room on the 6th floor.", dict: { "have": "sahip olmak", "nice": "güzel", "room": "oda", "floor": "kat" } },
            { speaker: "deniz", text: "I will take the new room, please.", dict: { "will": "ecek", "take": "almak", "new": "yeni", "room": "oda" } },
            { speaker: "receptionist", text: "Here is your new key.", dict: { "here": "işte", "is": "olmak", "new": "yeni", "key": "anahtar" } }
        ],
        questions: [
            { q: "What is wrong with the machine?", a_en: "Broken", a_tr: "Bozuk" },
            { q: "The room is too...", a_en: "Hot", a_tr: "Sıcak" },
            { q: "What did Deniz use to turn it on?", a_en: "Remote", a_tr: "Kumanda" },
            { q: "When can they fix it?", a_en: "Tomorrow", a_tr: "Yarın" },
            { q: "What does Deniz want to change?", a_en: "Room", a_tr: "Oda" },
            { q: "What floor is the new room on?", a_en: "6th", a_tr: "6." },
            { q: "What does the receptionist give?", a_en: "Key", a_tr: "Anahtar" }
        ]
    },
    "Step_8__Hotel_Complaints_5._Missing_Pillows.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello, I only have one pillow on my bed.", dict: { "only": "sadece", "have": "sahip olmak", "one": "bir", "pillow": "yastık", "bed": "yatak" } },
            { speaker: "receptionist", text: "I am sorry. Do you need more?", dict: { "am": "olmak", "sorry": "üzgün", "do": "yapmak", "need": "ihtiyaç duymak", "more": "daha fazla" } },
            { speaker: "deniz", text: "Yes, I need two more pillows, please.", dict: { "need": "ihtiyaç duymak", "two": "iki", "more": "daha", "pillows": "yastıklar" } },
            { speaker: "receptionist", text: "I will send them to your room now.", dict: { "will": "ecek", "send": "göndermek", "room": "oda", "now": "şimdi" } },
            { speaker: "deniz", text: "Can I also have an extra blanket?", dict: { "can": "ebilmek", "also": "ayrıca", "have": "almak", "extra": "ekstra", "blanket": "battaniye" } },
            { speaker: "receptionist", text: "Yes, I will tell the staff to bring both.", dict: { "will": "ecek", "tell": "söylemek", "staff": "personel", "bring": "getirmek", "both": "ikisini de" } },
            { speaker: "deniz", text: "Thank you. You are very helpful.", dict: { "are": "olmak", "very": "çok", "helpful": "yardımsever" } },
            { speaker: "receptionist", text: "It is my pleasure. Good night.", dict: { "is": "olmak", "pleasure": "memnuniyet", "good": "iyi", "night": "gece" } }
        ],
        questions: [
            { q: "How many pillows are on the bed?", a_en: "One", a_tr: "Bir" },
            { q: "Where is the pillow?", a_en: "Bed", a_tr: "Yatak" },
            { q: "How many more does Deniz need?", a_en: "Two", a_tr: "İki" },
            { q: "What else does Deniz want?", a_en: "Blanket", a_tr: "Battaniye" },
            { q: "Who will bring the items?", a_en: "Staff", a_tr: "Personel" },
            { q: "Deniz says the receptionist is...", a_en: "Helpful", a_tr: "Yardımsever" },
            { q: "The receptionist says 'It is my...'", a_en: "Pleasure", a_tr: "Zevk" }
        ]
    },
    "Step_9__Arriving_at_the_Restaurant_1._Greeting_and_Table.mp3": {
        dialogue: [
            { speaker: "host", text: "Good evening. Do you have a reservation?", dict: { "good": "iyi", "evening": "akşam", "do": "yapmak", "have": "sahip olmak", "reservation": "rezervasyon" } },
            { speaker: "deniz", text: "No, I don't. Do you have a table for one?", dict: { "no": "hayır", "have": "sahip olmak", "table": "masa", "one": "bir" } },
            { speaker: "host", text: "Yes, we have a table. Please follow me.", dict: { "have": "sahip olmak", "table": "masa", "please": "lütfen", "follow": "takip etmek" } },
            { speaker: "deniz", text: "Thank you. It smells very good here.", dict: { "smells": "kokuyor", "very": "çok", "good": "iyi", "here": "burada" } },
            { speaker: "host", text: "Here is your table. Please sit down.", dict: { "here": "işte", "is": "olmak", "table": "masa", "sit": "oturmak", "down": "aşağı" } },
            { speaker: "deniz", text: "Can I sit next to the window?", dict: { "can": "ebilmek", "sit": "oturmak", "next": "yanında", "window": "pencere" } },
            { speaker: "host", text: "Yes, that table by the window is empty.", dict: { "table": "masa", "window": "pencere", "is": "olmak", "empty": "boş" } },
            { speaker: "deniz", text: "Perfect, I like looking at the street.", dict: { "perfect": "kusursuz", "like": "sevmek", "looking": "bakmak", "street": "sokak" } }
        ],
        questions: [
            { q: "Does Deniz have a reservation?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz needs a table for...", a_en: "One", a_tr: "Bir" },
            { q: "The host says 'Please... me'.", a_en: "Follow", a_tr: "Takip et" },
            { q: "Deniz says it... very good here.", a_en: "Smells", a_tr: "Kokuyor" },
            { q: "Where does Deniz want to sit?", a_en: "Window", a_tr: "Pencere" },
            { q: "Is the window table full or empty?", a_en: "Empty", a_tr: "Boş" },
            { q: "What does Deniz like looking at?", a_en: "Street", a_tr: "Sokak" }
        ]
    },
    "Step_9__Arriving_at_the_Restaurant_2._Wait_Time.mp3": {
        dialogue: [
            { speaker: "host", text: "Hello. We are very full right now.", dict: { "are": "olmak", "very": "çok", "full": "dolu", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "How long do I have to wait?", dict: { "how": "nasıl", "long": "uzun", "have": "zorunda", "wait": "beklemek" } },
            { speaker: "host", text: "You will wait about twenty minutes.", dict: { "will": "ecek", "wait": "beklemek", "about": "yaklaşık", "twenty": "yirmi", "minutes": "dakika" } },
            { speaker: "deniz", text: "That is okay. I will wait.", dict: { "is": "olmak", "okay": "tamam", "will": "ecek", "wait": "beklemek" } },
            { speaker: "host", text: "You can sit on those chairs over there.", dict: { "can": "ebilmek", "sit": "oturmak", "chairs": "sandalyeler", "over": "üzerinde", "there": "orada" } },
            { speaker: "deniz", text: "Can I look at the menu while I wait?", dict: { "can": "ebilmek", "look": "bakmak", "menu": "menü", "while": "sırasında", "wait": "beklemek" } },
            { speaker: "host", text: "Yes, here is the menu.", dict: { "here": "işte", "is": "olmak", "menu": "menü" } },
            { speaker: "deniz", text: "Thank you, I will read it now.", dict: { "will": "ecek", "read": "okumak", "now": "şimdi" } }
        ],
        questions: [
            { q: "The host says the restaurant is very...", a_en: "Full", a_tr: "Dolu" },
            { q: "What does Deniz have to do?", a_en: "Wait", a_tr: "Beklemek" },
            { q: "How many minutes is the wait?", a_en: "Twenty", a_tr: "Yirmi" },
            { q: "Where can Deniz sit?", a_en: "Chairs", a_tr: "Sandalyeler" },
            { q: "What does Deniz want to look at?", a_en: "Menu", a_tr: "Menü" },
            { q: "Deniz asks to look... they wait.", a_en: "While", a_tr: "Sırasında" },
            { q: "Deniz will... it now.", a_en: "Read", a_tr: "Okumak" }
        ]
    },
    "Step_9__Arriving_at_the_Restaurant_3._Getting_the_Menu.mp3": {
        dialogue: [
            { speaker: "waiter", text: "Hello, welcome to our restaurant.", dict: { "welcome": "hoşgeldiniz", "restaurant": "restoran" } },
            { speaker: "deniz", text: "Hello. Can I see the menu, please?", dict: { "can": "ebilmek", "see": "görmek", "menu": "menü" } },
            { speaker: "waiter", text: "Here is the food menu and the drinks menu.", dict: { "here": "işte", "is": "olmak", "food": "yemek", "drinks": "içecekler" } },
            { speaker: "deniz", text: "Thank you. Do you sell local food?", dict: { "do": "yapmak", "sell": "satmak", "local": "yerel", "food": "yemek" } },
            { speaker: "waiter", text: "Yes, the local food is on the first page.", dict: { "local": "yerel", "is": "olmak", "first": "ilk", "page": "sayfa" } },
            { speaker: "deniz", text: "Give me a few minutes to choose, please.", dict: { "give": "vermek", "few": "birkaç", "minutes": "dakika", "choose": "seçmek" } },
            { speaker: "waiter", text: "Take your time. I will be back.", dict: { "take": "almak", "time": "zaman", "will": "ecek", "be": "olmak", "back": "geri" } },
            { speaker: "deniz", text: "Great, see you soon.", dict: { "great": "harika", "see": "görmek", "soon": "yakında" } }
        ],
        questions: [
            { q: "What does Deniz ask to see?", a_en: "Menu", a_tr: "Menü" },
            { q: "The waiter gives the food menu and the... menu.", a_en: "Drinks", a_tr: "İçecekler" },
            { q: "What kind of food is Deniz asking for?", a_en: "Local", a_tr: "Yerel" },
            { q: "Where is the local food listed?", a_en: "Page", a_tr: "Sayfa" },
            { q: "Which page is it on?", a_en: "First", a_tr: "İlk" },
            { q: "Deniz needs a few minutes to...", a_en: "Choose", a_tr: "Seçmek" },
            { q: "The waiter says 'Take your...'", a_en: "Time", a_tr: "Zaman" }
        ]
    },
    "Step_9__Arriving_at_the_Restaurant_4._The_Specials.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, what is the special food today?", dict: { "what": "ne", "is": "olmak", "special": "özel", "food": "yemek", "today": "bugün" } },
            { speaker: "waiter", text: "Today, our special is grilled fish with potatoes.", dict: { "special": "özel", "is": "olmak", "grilled": "ızgara", "fish": "balık", "potatoes": "patatesler" } },
            { speaker: "deniz", text: "Does it come with a salad?", dict: { "does": "yapmak", "come": "gelmek", "with": "ile", "salad": "salata" } },
            { speaker: "waiter", text: "Yes, a small green salad is included.", dict: { "small": "küçük", "green": "yeşil", "salad": "salata", "is": "olmak", "included": "dahil" } },
            { speaker: "deniz", text: "That sounds very healthy.", dict: { "sounds": "kulağa geliyor", "very": "çok", "healthy": "sağlıklı" } },
            { speaker: "waiter", text: "It is our best dish today.", dict: { "is": "olmak", "best": "en iyi", "dish": "tabak" } },
            { speaker: "deniz", text: "I will think about it, thanks.", dict: { "will": "ecek", "think": "düşünmek", "about": "hakkında" } },
            { speaker: "waiter", text: "I will return to take your order soon.", dict: { "will": "ecek", "return": "dönmek", "take": "almak", "order": "sipariş", "soon": "yakında" } }
        ],
        questions: [
            { q: "What kind of food is Deniz asking about?", a_en: "Special", a_tr: "Özel" },
            { q: "What meat is the special today?", a_en: "Fish", a_tr: "Balık" },
            { q: "What comes with the fish?", a_en: "Potatoes", a_tr: "Patates" },
            { q: "What color is the salad?", a_en: "Green", a_tr: "Yeşil" },
            { q: "Deniz thinks it sounds...", a_en: "Healthy", a_tr: "Sağlıklı" },
            { q: "The waiter says it is their... dish.", a_en: "Best", a_tr: "En iyi" },
            { q: "The waiter will return to take the...", a_en: "Order", a_tr: "Sipariş" }
        ]
    },
    "Step_9__Arriving_at_the_Restaurant_5._Drink_First.mp3": {
        dialogue: [
            { speaker: "waiter", text: "Can I bring you something to drink first?", dict: { "can": "ebilmek", "bring": "getirmek", "drink": "içmek", "first": "ilk" } },
            { speaker: "deniz", text: "Yes, please. I would like a cold beer.", dict: { "would": "ister", "like": "istemek", "cold": "soğuk", "beer": "bira" } },
            { speaker: "waiter", text: "We have light beer and dark beer.", dict: { "have": "sahip olmak", "light": "açık", "dark": "koyu", "beer": "bira" } },
            { speaker: "deniz", text: "I will take a light beer, please.", dict: { "will": "ecek", "take": "almak", "light": "açık" } },
            { speaker: "waiter", text: "Okay, one light beer. I will bring it fast.", dict: { "will": "ecek", "bring": "getirmek", "fast": "hızlı" } },
            { speaker: "deniz", text: "And a glass of water, please.", dict: { "glass": "bardak", "water": "su" } },
            { speaker: "waiter", text: "Sure, no problem.", dict: { "sure": "elbette", "problem": "sorun" } },
            { speaker: "deniz", text: "Thanks, I am very thirsty.", dict: { "am": "olmak", "very": "çok", "thirsty": "susamış" } }
        ],
        questions: [
            { q: "What does the waiter offer first?", a_en: "Drink", a_tr: "İçki" },
            { q: "What kind of drink does Deniz want?", a_en: "Beer", a_tr: "Bira" },
            { q: "Does Deniz want light or dark beer?", a_en: "Light", a_tr: "Açık" },
            { q: "What does Deniz want a glass of?", a_en: "Water", a_tr: "Su" },
            { q: "The waiter says 'I will bring it...'", a_en: "Fast", a_tr: "Hızlı" },
            { q: "The waiter says 'No...'", a_en: "Problem", a_tr: "Sorun" },
            { q: "How is Deniz feeling?", a_en: "Thirsty", a_tr: "Susamış" }
        ]
    },
    "Step_10__Ordering_Food_1._Ordering_the_Main_Course.mp3": {
        dialogue: [
            { speaker: "waiter", text: "Are you ready to order?", dict: { "are": "olmak", "ready": "hazır", "order": "sipariş vermek" } },
            { speaker: "deniz", text: "Yes, I want the chicken and rice, please.", dict: { "want": "istemek", "chicken": "tavuk", "rice": "pirinç" } },
            { speaker: "waiter", text: "Very good. Do you want vegetables with it?", dict: { "very": "çok", "good": "iyi", "do": "yapmak", "want": "istemek", "vegetables": "sebzeler", "with": "ile" } },
            { speaker: "deniz", text: "Yes, carrots and peas, please.", dict: { "carrots": "havuçlar", "peas": "bezelyeler" } },
            { speaker: "waiter", text: "Okay. Do you want any sauce on the chicken?", dict: { "want": "istemek", "sauce": "sos", "on": "üzerinde" } },
            { speaker: "deniz", text: "Just a little bit of garlic sauce.", dict: { "just": "sadece", "little": "biraz", "bit": "miktar", "garlic": "sarımsak" } },
            { speaker: "waiter", text: "Perfect. I will tell the chef.", dict: { "perfect": "kusursuz", "will": "ecek", "tell": "söylemek", "chef": "şef" } },
            { speaker: "deniz", text: "Thank you. I am very hungry.", dict: { "am": "olmak", "very": "çok", "hungry": "aç" } }
        ],
        questions: [
            { q: "Is Deniz ready to...?", a_en: "Order", a_tr: "Sipariş vermek" },
            { q: "What meat did Deniz order?", a_en: "Chicken", a_tr: "Tavuk" },
            { q: "What comes with the chicken?", a_en: "Rice", a_tr: "Pirinç" },
            { q: "What kind of food are carrots and peas?", a_en: "Vegetables", a_tr: "Sebzeler" },
            { q: "What goes on the chicken?", a_en: "Sauce", a_tr: "Sos" },
            { q: "What flavor is the sauce?", a_en: "Garlic", a_tr: "Sarımsak" },
            { q: "Who will the waiter tell?", a_en: "Chef", a_tr: "Şef" }
        ]
    },
    "Step_10__Ordering_Food_2._Asking_About_Ingredients.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, does this soup have meat in it?", dict: { "does": "yapmak", "soup": "çorba", "have": "sahip olmak", "meat": "et" } },
            { speaker: "waiter", text: "Yes, the tomato soup has some chicken.", dict: { "tomato": "domates", "has": "sahip", "chicken": "tavuk" } },
            { speaker: "deniz", text: "Oh, I don't want meat right now.", dict: { "want": "istemek", "right": "hemen", "now": "şimdi" } },
            { speaker: "waiter", text: "The mushroom soup has no meat.", dict: { "mushroom": "mantar", "has": "sahip", "no": "yok" } },
            { speaker: "deniz", text: "Okay, I will have the mushroom soup.", dict: { "will": "ecek", "have": "almak" } },
            { speaker: "waiter", text: "Good choice. It is very tasty.", dict: { "good": "iyi", "choice": "seçim", "is": "olmak", "very": "çok", "tasty": "lezzetli" } },
            { speaker: "deniz", text: "I love mushrooms.", dict: { "love": "sevmek", "mushrooms": "mantarlar" } },
            { speaker: "waiter", text: "I will bring it right away.", dict: { "will": "ecek", "bring": "getirmek", "right": "hemen", "away": "hemen" } }
        ],
        questions: [
            { q: "What food is Deniz asking about?", a_en: "Soup", a_tr: "Çorba" },
            { q: "What ingredient do they not want?", a_en: "Meat", a_tr: "Et" },
            { q: "What kind of soup has chicken in it?", a_en: "Tomato", a_tr: "Domates" },
            { q: "What kind of soup has no meat?", a_en: "Mushroom", a_tr: "Mantar" },
            { q: "The waiter says 'Good...'", a_en: "Choice", a_tr: "Seçim" },
            { q: "The waiter says the soup is very...", a_en: "Tasty", a_tr: "Lezzetli" },
            { q: "The waiter says 'I will bring it right...'", a_en: "Away", a_tr: "Hemen" }
        ]
    },
    "Step_10__Ordering_Food_3._Not_Spicy.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I want the beef curry, please.", dict: { "want": "istemek", "beef": "sığır eti", "curry": "köri" } },
            { speaker: "waiter", text: "Okay. The curry is a little bit spicy.", dict: { "is": "olmak", "little": "biraz", "bit": "miktar", "spicy": "baharatlı" } },
            { speaker: "deniz", text: "Oh, I cannot eat spicy food.", dict: { "cannot": "yapamamak", "eat": "yemek", "spicy": "baharatlı" } },
            { speaker: "waiter", text: "The chef can make it not spicy for you.", dict: { "chef": "şef", "can": "ebilmek", "make": "yapmak", "not": "değil" } },
            { speaker: "deniz", text: "Yes, please make it very mild.", dict: { "make": "yapmak", "very": "çok", "mild": "hafif" } },
            { speaker: "waiter", text: "No problem. Mild beef curry.", dict: { "problem": "sorun", "mild": "hafif" } },
            { speaker: "deniz", text: "Thank you for telling me.", dict: { "telling": "söylemek" } },
            { speaker: "waiter", text: "You are welcome.", dict: { "are": "olmak", "welcome": "rica" } }
        ],
        questions: [
            { q: "What meat is in the curry?", a_en: "Beef", a_tr: "Sığır eti" },
            { q: "The waiter warns that the curry is...", a_en: "Spicy", a_tr: "Baharatlı" },
            { q: "Can Deniz eat spicy food?", a_en: "No", a_tr: "Hayır" },
            { q: "Who can change the food?", a_en: "Chef", a_tr: "Şef" },
            { q: "Deniz asks for the food to be...", a_en: "Mild", a_tr: "Hafif" },
            { q: "The waiter says 'No...'", a_en: "Problem", a_tr: "Sorun" },
            { q: "Deniz says 'Thank you for... me'", a_en: "Telling", a_tr: "Söylemek" }
        ]
    },
    "Step_10__Ordering_Food_4._Recommending_Food.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I don't know what to eat. What do you like?", dict: { "know": "bilmek", "eat": "yemek", "do": "yapmak", "like": "beğenmek" } },
            { speaker: "waiter", text: "I really like the roasted lamb.", dict: { "really": "gerçekten", "like": "beğenmek", "roasted": "kavrulmuş", "lamb": "kuzu" } },
            { speaker: "deniz", text: "Is it a big plate of food?", dict: { "is": "olmak", "big": "büyük", "plate": "tabak" } },
            { speaker: "waiter", text: "Yes, it is very big and filling.", dict: { "is": "olmak", "very": "çok", "big": "büyük", "filling": "doyurucu" } },
            { speaker: "deniz", text: "Okay, I will trust you. Bring me the lamb.", dict: { "will": "ecek", "trust": "güvenmek", "bring": "getirmek" } },
            { speaker: "waiter", text: "You will love it, sir.", dict: { "will": "ecek", "love": "sevmek", "sir": "beyefendi" } },
            { speaker: "deniz", text: "I hope so!", dict: { "hope": "umut etmek" } },
            { speaker: "waiter", text: "I will place your order now.", dict: { "will": "ecek", "place": "vermek", "order": "sipariş", "now": "şimdi" } }
        ],
        questions: [
            { q: "What does the waiter recommend?", a_en: "Lamb", a_tr: "Kuzu" },
            { q: "How is the lamb cooked?", a_en: "Roasted", a_tr: "Kavrulmuş" },
            { q: "Deniz asks if it is a big...", a_en: "Plate", a_tr: "Tabak" },
            { q: "The waiter says the food is very...", a_en: "Filling", a_tr: "Doyurucu" },
            { q: "Deniz says 'I will... you'.", a_en: "Trust", a_tr: "Güvenmek" },
            { q: "The waiter says 'You will... it'.", a_en: "Love", a_tr: "Sevmek" },
            { q: "The waiter will place the...", a_en: "Order", a_tr: "Sipariş" }
        ]
    },
    "Step_10__Ordering_Food_5._Drink_First.mp3": {
        dialogue: [
            { speaker: "waiter", text: "Can I bring you something to drink first?", dict: { "can": "ebilmek", "bring": "getirmek", "drink": "içmek", "first": "ilk" } },
            { speaker: "deniz", text: "Yes, please. I would like a cold beer.", dict: { "would": "ister", "like": "istemek", "cold": "soğuk", "beer": "bira" } },
            { speaker: "waiter", text: "We have light beer and dark beer.", dict: { "have": "sahip olmak", "light": "açık", "dark": "koyu", "beer": "bira" } },
            { speaker: "deniz", text: "I will take a light beer, please.", dict: { "will": "ecek", "take": "almak", "light": "açık" } },
            { speaker: "waiter", text: "Okay, one light beer. I will bring it fast.", dict: { "will": "ecek", "bring": "getirmek", "fast": "hızlı" } },
            { speaker: "deniz", text: "And a glass of water, please.", dict: { "glass": "bardak", "water": "su" } },
            { speaker: "waiter", text: "Sure, no problem.", dict: { "sure": "elbette", "problem": "sorun" } },
            { speaker: "deniz", text: "Thanks, I am very thirsty.", dict: { "am": "olmak", "very": "çok", "thirsty": "susamış" } }
        ],
        questions: [
            { q: "What does the waiter offer first?", a_en: "Drink", a_tr: "İçki" },
            { q: "What kind of drink does Deniz want?", a_en: "Beer", a_tr: "Bira" },
            { q: "Does Deniz want light or dark beer?", a_en: "Light", a_tr: "Açık" },
            { q: "What does Deniz want a glass of?", a_en: "Water", a_tr: "Su" },
            { q: "The waiter says 'I will bring it...'", a_en: "Fast", a_tr: "Hızlı" },
            { q: "The waiter says 'No...'", a_en: "Problem", a_tr: "Sorun" },
            { q: "How is Deniz feeling?", a_en: "Thirsty", a_tr: "Susamış" }
        ]
    },
    "Step_11__Restaurant_Problems_1._Wrong_Food.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, waiter. This is not my food.", dict: { "waiter": "garson", "is": "olmak", "not": "değil", "food": "yemek" } },
            { speaker: "waiter", text: "Oh, I am sorry. What did you order?", dict: { "am": "olmak", "sorry": "üzgün", "did": "yaptı", "order": "sipariş etmek" } },
            { speaker: "deniz", text: "I ordered chicken, but this is fish.", dict: { "ordered": "sipariş ettim", "chicken": "tavuk", "is": "olmak", "fish": "balık" } },
            { speaker: "waiter", text: "I am very sorry for the mistake.", dict: { "am": "olmak", "very": "çok", "sorry": "üzgün", "mistake": "hata" } },
            { speaker: "deniz", text: "Can you bring me the chicken?", dict: { "can": "ebilmek", "bring": "getirmek" } },
            { speaker: "waiter", text: "Yes, I will get the chicken right now.", dict: { "will": "ecek", "get": "almak", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "Thank you. I will wait.", dict: { "will": "ecek", "wait": "beklemek" } },
            { speaker: "waiter", text: "It will only take a minute.", dict: { "will": "ecek", "only": "sadece", "take": "sürmek", "minute": "dakika" } }
        ],
        questions: [
            { q: "Who does Deniz call?", a_en: "Waiter", a_tr: "Garson" },
            { q: "What is wrong? This is not my...", a_en: "Food", a_tr: "Yemek" },
            { q: "What did Deniz actually order?", a_en: "Chicken", a_tr: "Tavuk" },
            { q: "What was brought instead?", a_en: "Fish", a_tr: "Balık" },
            { q: "The waiter apologizes for the...", a_en: "Mistake", a_tr: "Hata" },
            { q: "Deniz asks the waiter to... the chicken.", a_en: "Bring", a_tr: "Getirmek" },
            { q: "How long will it take? A...", a_en: "Minute", a_tr: "Dakika" }
        ]
    },
    "Step_11__Restaurant_Problems_2._Cold_Food.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, my soup is cold.", dict: { "soup": "çorba", "is": "olmak", "cold": "soğuk" } },
            { speaker: "waiter", text: "I apologize, sir. Let me take it back.", dict: { "apologize": "özür dilemek", "sir": "beyefendi", "let": "izin vermek", "take": "almak", "back": "geri" } },
            { speaker: "deniz", text: "I really wanted a hot soup.", dict: { "really": "gerçekten", "wanted": "istedim", "hot": "sıcak" } },
            { speaker: "waiter", text: "The chef will make a new, hot bowl for you.", dict: { "chef": "şef", "will": "ecek", "make": "yapmak", "new": "yeni", "bowl": "kase" } },
            { speaker: "deniz", text: "Thank you. Please make it very warm.", dict: { "make": "yapmak", "very": "çok", "warm": "sıcak" } },
            { speaker: "waiter", text: "Yes, I will make sure it is perfect.", dict: { "will": "ecek", "make": "yapmak", "sure": "emin olmak", "is": "olmak", "perfect": "kusursuz" } },
            { speaker: "deniz", text: "I appreciate your help.", dict: { "appreciate": "minnettar olmak", "help": "yardım" } },
            { speaker: "waiter", text: "I will be right back with hot soup.", dict: { "will": "ecek", "be": "olmak", "right": "hemen", "back": "geri" } }
        ],
        questions: [
            { q: "What food is the problem?", a_en: "Soup", a_tr: "Çorba" },
            { q: "What is wrong with the soup?", a_en: "Cold", a_tr: "Soğuk" },
            { q: "The waiter says 'I...'", a_en: "Apologize", a_tr: "Özür dilerim" },
            { q: "Who will make a new one?", a_en: "Chef", a_tr: "Şef" },
            { q: "The chef will make a new...", a_en: "Bowl", a_tr: "Kase" },
            { q: "Deniz asks to make it very...", a_en: "Warm", a_tr: "Ilık/Sıcak" },
            { q: "The waiter says it will be...", a_en: "Perfect", a_tr: "Kusursuz" }
        ]
    },
    "Step_11__Restaurant_Problems_3._Dirty_Fork.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. My fork is not clean.", dict: { "fork": "çatal", "is": "olmak", "not": "değil", "clean": "temiz" } },
            { speaker: "waiter", text: "Oh, I am so sorry about that.", dict: { "am": "olmak", "so": "çok", "sorry": "üzgün" } },
            { speaker: "deniz", text: "Can you bring me a new one?", dict: { "can": "ebilmek", "bring": "getirmek", "new": "yeni" } },
            { speaker: "waiter", text: "Yes, of course. Here is a clean fork.", dict: { "course": "elbette", "here": "işte", "is": "olmak", "clean": "temiz" } },
            { speaker: "deniz", text: "And a clean knife too, please.", dict: { "clean": "temiz", "knife": "bıçak", "too": "ayrıca" } },
            { speaker: "waiter", text: "Here you go. I am very sorry again.", dict: { "go": "gitmek", "am": "olmak", "very": "çok", "sorry": "üzgün", "again": "tekrar" } },
            { speaker: "deniz", text: "It is okay. Thank you.", dict: { "is": "olmak", "okay": "tamam" } },
            { speaker: "waiter", text: "Enjoy your meal.", dict: { "enjoy": "afiyet olsun", "meal": "öğün" } }
        ],
        questions: [
            { q: "What item is not clean?", a_en: "Fork", a_tr: "Çatal" },
            { q: "Deniz asks for a... one.", a_en: "New", a_tr: "Yeni" },
            { q: "What other item does Deniz request?", a_en: "Knife", a_tr: "Bıçak" },
            { q: "The new items must be...", a_en: "Clean", a_tr: "Temiz" },
            { q: "The waiter is very... again.", a_en: "Sorry", a_tr: "Üzgün" },
            { q: "Deniz says 'It is...'", a_en: "Okay", a_tr: "Tamam" },
            { q: "The waiter says '... your meal'.", a_en: "Enjoy", a_tr: "Afiyet olsun" }
        ]
    },
    "Step_11__Restaurant_Problems_4._Missing_Salad.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, where is my side salad?", dict: { "where": "nerede", "is": "olmak", "side": "yan", "salad": "salata" } },
            { speaker: "waiter", text: "Oh no, I forgot your salad!", dict: { "forgot": "unuttum" } },
            { speaker: "deniz", text: "That's okay, but can I have it now?", dict: { "okay": "tamam", "can": "ebilmek", "have": "almak", "now": "şimdi" } },
            { speaker: "waiter", text: "Yes, I will run to the kitchen and get it.", dict: { "will": "ecek", "run": "koşmak", "kitchen": "mutfak", "get": "almak" } },
            { speaker: "deniz", text: "Thank you. I want to eat it with my meat.", dict: { "want": "istemek", "eat": "yemek", "with": "ile", "meat": "et" } },
            { speaker: "waiter", text: "Here is your salad. Sorry for the wait.", dict: { "is": "olmak", "sorry": "üzgün", "wait": "bekleme" } },
            { speaker: "deniz", text: "Thanks, it looks fresh.", dict: { "looks": "görünüyor", "fresh": "taze" } },
            { speaker: "waiter", text: "Please let me know if you need anything else.", dict: { "let": "izin vermek", "know": "bilmek", "need": "ihtiyacı olmak", "else": "başka" } }
        ],
        questions: [
            { q: "What is missing from the order?", a_en: "Salad", a_tr: "Salata" },
            { q: "The waiter says 'I... your salad!'.", a_en: "Forgot", a_tr: "Unuttum" },
            { q: "Where will the waiter run to?", a_en: "Kitchen", a_tr: "Mutfak" },
            { q: "What does Deniz want to eat it with?", a_en: "Meat", a_tr: "Et" },
            { q: "The waiter is sorry for the...", a_en: "Wait", a_tr: "Bekleme" },
            { q: "Deniz says the salad looks...", a_en: "Fresh", a_tr: "Taze" },
            { q: "The waiter asks if they need anything...", a_en: "Else", a_tr: "Başka" }
        ]
    },
    "Step_11__Restaurant_Problems_5._Ordering_Dessert.mp3": {
        dialogue: [
            { speaker: "waiter", text: "Did you enjoy your food?", dict: { "did": "yaptı", "enjoy": "keyfini çıkarmak", "food": "yemek" } },
            { speaker: "deniz", text: "Yes, it was great. Now I want something sweet.", dict: { "was": "idi", "great": "harika", "now": "şimdi", "want": "istemek", "sweet": "tatlı" } },
            { speaker: "waiter", text: "We have chocolate cake and ice cream.", dict: { "have": "sahip olmak", "chocolate": "çikolata", "cake": "kek", "ice": "buz", "cream": "krem" } },
            { speaker: "deniz", text: "I will have one slice of chocolate cake.", dict: { "will": "ecek", "have": "almak", "one": "bir", "slice": "dilim" } },
            { speaker: "waiter", text: "Would you like coffee with your cake?", dict: { "would": "ister", "like": "istemek", "coffee": "kahve", "with": "ile" } },
            { speaker: "deniz", text: "Yes, a black coffee, please.", dict: { "black": "siyah" } },
            { speaker: "waiter", text: "Cake and coffee coming right up.", dict: { "coming": "geliyor", "right": "hemen", "up": "yukarı" } },
            { speaker: "deniz", text: "Thank you, that is all I need.", dict: { "is": "olmak", "all": "tümü", "need": "ihtiyaç" } }
        ],
        questions: [
            { q: "Deniz wants something...", a_en: "Sweet", a_tr: "Tatlı" },
            { q: "The waiter offers ice...", a_en: "Cream", a_tr: "Krema" },
            { q: "What does Deniz order?", a_en: "Cake", a_tr: "Kek" },
            { q: "What flavor is the cake?", a_en: "Chocolate", a_tr: "Çikolata" },
            { q: "How much cake? One...", a_en: "Slice", a_tr: "Dilim" },
            { q: "What drink is ordered with the cake?", a_en: "Coffee", a_tr: "Kahve" },
            { q: "What color is the coffee?", a_en: "Black", a_tr: "Siyah" }
        ]
    },
    "Step_12__Asking_for_the_Check_1._Getting_the_Bill.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, can I have the bill, please?", dict: { "can": "ebilmek", "have": "almak", "bill": "hesap" } },
            { speaker: "waiter", text: "Yes, sir. Are you ready to pay?", dict: { "are": "olmak", "ready": "hazır", "pay": "ödemek" } },
            { speaker: "deniz", text: "Yes, I am finished.", dict: { "am": "olmak", "finished": "bitirdim" } },
            { speaker: "waiter", text: "Here is the bill. It is forty euros.", dict: { "is": "olmak", "bill": "hesap", "forty": "kırk", "euros": "avro" } },
            { speaker: "deniz", text: "I will pay with my credit card.", dict: { "will": "ecek", "pay": "ödemek", "with": "ile", "credit": "kredi", "card": "kart" } },
            { speaker: "waiter", text: "Please tap your card on the machine.", dict: { "tap": "dokundurmak", "on": "üzerinde", "machine": "makine" } },
            { speaker: "deniz", text: "Okay, it is done.", dict: { "is": "olmak", "done": "bitti" } },
            { speaker: "waiter", text: "Thank you. Have a good night.", dict: { "have": "sahip olmak", "good": "iyi", "night": "gece" } }
        ],
        questions: [
            { q: "What does Deniz ask for?", a_en: "Bill", a_tr: "Hesap" },
            { q: "Is Deniz ready to...?", a_en: "Pay", a_tr: "Ödemek" },
            { q: "How many euros is it?", a_en: "Forty", a_tr: "Kırk" },
            { q: "How will they pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What should they do with the card?", a_en: "Tap", a_tr: "Dokundurmak" },
            { q: "Where do they tap the card?", a_en: "Machine", a_tr: "Makine" },
            { q: "The waiter says 'Have a good...'", a_en: "Night", a_tr: "Gece" }
        ]
    },
    "Step_12__Asking_for_the_Check_2._Paying_with_Cash.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can I get the check, please?", dict: { "can": "ebilmek", "get": "almak", "check": "hesap" } },
            { speaker: "waiter", text: "Of course. Here it is.", dict: { "course": "elbette", "here": "işte", "is": "olmak" } },
            { speaker: "deniz", text: "The total is twenty-five euros.", dict: { "total": "toplam", "is": "olmak", "twenty": "yirmi", "five": "beş" } },
            { speaker: "waiter", text: "Yes, twenty-five euros.", dict: {} },
            { speaker: "deniz", text: "Here is thirty euros. Keep the change.", dict: { "is": "olmak", "thirty": "otuz", "keep": "tutmak", "change": "para üstü" } },
            { speaker: "waiter", text: "Thank you very much for the tip!", dict: { "very": "çok", "tip": "bahşiş" } },
            { speaker: "deniz", text: "You gave good service today.", dict: { "gave": "verdin", "good": "iyi", "service": "hizmet", "today": "bugün" } },
            { speaker: "waiter", text: "I am glad you were happy.", dict: { "am": "olmak", "glad": "memnun", "were": "idin", "happy": "mutlu" } }
        ],
        questions: [
            { q: "What does Deniz ask for?", a_en: "Check", a_tr: "Hesap" },
            { q: "How much is the total? Twenty-...", a_en: "Five", a_tr: "Beş" },
            { q: "How much money does Deniz give?", a_en: "Thirty", a_tr: "Otuz" },
            { q: "Deniz says 'Keep the...'", a_en: "Change", a_tr: "Para üstü" },
            { q: "What is the extra money called?", a_en: "Tip", a_tr: "Bahşiş" },
            { q: "Deniz says they gave good...", a_en: "Service", a_tr: "Hizmet" },
            { q: "The waiter is glad Deniz was...", a_en: "Happy", a_tr: "Mutlu" }
        ]
    },
    "Step_12__Asking_for_the_Check_3._Checking_a_Mistake.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, I think there is a mistake here.", dict: { "think": "düşünmek", "is": "olmak", "mistake": "hata" } },
            { speaker: "waiter", text: "Let me see. What is wrong?", dict: { "let": "izin vermek", "see": "görmek", "is": "olmak", "wrong": "yanlış" } },
            { speaker: "deniz", text: "It says two waters, but I drank one water.", dict: { "says": "diyor", "two": "iki", "drank": "içtim", "one": "bir" } },
            { speaker: "waiter", text: "Ah, you are right. I am sorry.", dict: { "are": "olmak", "right": "haklı", "am": "olmak", "sorry": "üzgün" } },
            { speaker: "deniz", text: "Can you change the price?", dict: { "can": "ebilmek", "change": "değiştirmek", "price": "fiyat" } },
            { speaker: "waiter", text: "Yes, I will print a new bill for you.", dict: { "will": "ecek", "print": "yazdırmak", "new": "yeni", "bill": "hesap" } },
            { speaker: "deniz", text: "Thank you. I appreciate it.", dict: { "appreciate": "minnettar olmak" } },
            { speaker: "waiter", text: "Here is the correct bill.", dict: { "is": "olmak", "correct": "doğru" } }
        ],
        questions: [
            { q: "What does Deniz think is there?", a_en: "Mistake", a_tr: "Hata" },
            { q: "The waiter asks 'What is...?'", a_en: "Wrong", a_tr: "Yanlış" },
            { q: "How many waters does the bill say?", a_en: "Two", a_tr: "İki" },
            { q: "How many waters did they actually drink?", a_en: "One", a_tr: "Bir" },
            { q: "Deniz asks to change the...", a_en: "Price", a_tr: "Fiyat" },
            { q: "What will the waiter print?", a_en: "Bill", a_tr: "Hesap" },
            { q: "The waiter gives the... bill.", a_en: "Correct", a_tr: "Doğru" }
        ]
    },
    "Step_12__Asking_for_the_Check_4._Splitting_the_Bill.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can we pay on two different cards?", dict: { "can": "ebilmek", "pay": "ödemek", "two": "iki", "different": "farklı", "cards": "kartlar" } },
            { speaker: "waiter", text: "Yes, we can split the bill.", dict: { "can": "ebilmek", "split": "bölmek", "bill": "hesap" } },
            { speaker: "deniz", text: "Can you charge twenty euros on this card?", dict: { "can": "ebilmek", "charge": "çekmek", "twenty": "yirmi" } },
            { speaker: "waiter", text: "Yes. And the rest on the second card?", dict: { "rest": "kalan", "second": "ikinci" } },
            { speaker: "deniz", text: "Exactly. Here is the first card.", dict: { "exactly": "kesinlikle", "is": "olmak", "first": "ilk" } },
            { speaker: "waiter", text: "Done. Now the second card, please.", dict: { "done": "bitti", "now": "şimdi", "second": "ikinci" } },
            { speaker: "deniz", text: "Here you go.", dict: { "here": "işte", "go": "gitmek" } },
            { speaker: "waiter", text: "All finished. Thank you!", dict: { "all": "tümü", "finished": "bitti" } }
        ],
        questions: [
            { q: "How many cards are they using?", a_en: "Two", a_tr: "İki" },
            { q: "What do they want to do to the bill?", a_en: "Split", a_tr: "Bölmek" },
            { q: "How much to charge on the first card?", a_en: "Twenty", a_tr: "Yirmi" },
            { q: "The waiter asks if the... is on the second card.", a_en: "Rest", a_tr: "Kalan" },
            { q: "Deniz says '...', meaning yes.", a_en: "Exactly", a_tr: "Kesinlikle" },
            { q: "The waiter asks for the... card.", a_en: "Second", a_tr: "İkinci" },
            { q: "The waiter says 'All...'", a_en: "Finished", a_tr: "Bitti" }
        ]
    },
    "Step_12__Asking_for_the_Check_5._Asking_for_a_Receipt.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Here is my card to pay the bill.", dict: { "is": "olmak", "card": "kart", "pay": "ödemek", "bill": "hesap" } },
            { speaker: "waiter", text: "Thank you. Do you want the receipt?", dict: { "do": "yapmak", "want": "istemek", "receipt": "fiş" } },
            { speaker: "deniz", text: "Yes, please. I need the receipt.", dict: { "need": "ihtiyacı olmak" } },
            { speaker: "waiter", text: "I will print it for you now.", dict: { "will": "ecek", "print": "yazdırmak", "now": "şimdi" } },
            { speaker: "deniz", text: "Thank you very much.", dict: { "very": "çok", "much": "fazla" } },
            { speaker: "waiter", text: "Here is your card and your receipt.", dict: { "is": "olmak" } },
            { speaker: "deniz", text: "The food was lovely. Goodbye.", dict: { "was": "idi", "lovely": "harika", "goodbye": "hoşçakal" } },
            { speaker: "waiter", text: "Goodbye, see you next time.", dict: { "see": "görüşmek", "next": "gelecek", "time": "zaman" } }
        ],
        questions: [
            { q: "What is Deniz using to pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What does Deniz want after paying?", a_en: "Receipt", a_tr: "Fiş" },
            { q: "The waiter will... it.", a_en: "Print", a_tr: "Yazdırmak" },
            { q: "Deniz says the food was...", a_en: "Lovely", a_tr: "Harika" },
            { q: "Deniz says...", a_en: "Goodbye", a_tr: "Hoşçakal" },
            { q: "The waiter says 'See you... time'.", a_en: "Next", a_tr: "Gelecek" },
            { q: "What are they paying? The...", a_en: "Bill", a_tr: "Hesap" }
        ]
    },
    "Step_13__Asking_for_Directions_1._Finding_the_Museum.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, where is the City Museum?", dict: { "where": "nerede", "is": "olmak", "museum": "müze" } },
            { speaker: "local", text: "Go straight and turn left at the park.", dict: { "go": "gitmek", "straight": "düz", "turn": "dönmek", "left": "sol", "park": "park" } },
            { speaker: "deniz", text: "Is it a long walk from here?", dict: { "is": "olmak", "long": "uzun", "walk": "yürüyüş", "here": "buradan" } },
            { speaker: "local", text: "No, it is only five minutes away.", dict: { "is": "olmak", "only": "sadece", "five": "beş", "minutes": "dakika", "away": "uzaklıkta" } },
            { speaker: "deniz", text: "Is it a big building?", dict: { "is": "olmak", "big": "büyük", "building": "bina" } },
            { speaker: "local", text: "Yes, it is a big white building.", dict: { "is": "olmak", "big": "büyük", "white": "beyaz" } },
            { speaker: "deniz", text: "Thank you for your help.", dict: { "help": "yardım" } },
            { speaker: "local", text: "You are welcome. Enjoy the museum.", dict: { "are": "olmak", "welcome": "rica", "enjoy": "keyfini çıkarın" } }
        ],
        questions: [
            { q: "What is Deniz looking for?", a_en: "Museum", a_tr: "Müze" },
            { q: "The local says to turn... at the park.", a_en: "Left", a_tr: "Sol" },
            { q: "How many minutes away is it?", a_en: "Five", a_tr: "Beş" },
            { q: "What kind of structure is it?", a_en: "Building", a_tr: "Bina" },
            { q: "What color is the building?", a_en: "White", a_tr: "Beyaz" },
            { q: "Deniz asks if it is a... walk.", a_en: "Long", a_tr: "Uzun" },
            { q: "The local says '... the museum'.", a_en: "Enjoy", a_tr: "Keyfini çıkar" }
        ]
    },
    "Step_13__Asking_for_Directions_2._Finding_the_Monument.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. Do you know where the old statue is?", dict: { "do": "yapmak", "know": "bilmek", "where": "nerede", "old": "eski", "statue": "heykel", "is": "olmak" } },
            { speaker: "local", text: "The big horse statue? It is in the main square.", dict: { "big": "büyük", "horse": "at", "is": "olmak", "main": "ana", "square": "meydan" } },
            { speaker: "deniz", text: "How do I get to the main square?", dict: { "how": "nasıl", "do": "yapmak", "get": "varmak" } },
            { speaker: "local", text: "Walk down this street until you see the church.", dict: { "walk": "yürümek", "down": "aşağı", "street": "sokak", "until": "kadar", "see": "görmek", "church": "kilise" } },
            { speaker: "deniz", text: "And then turn right?", dict: { "then": "sonra", "turn": "dönmek", "right": "sağ" } },
            { speaker: "local", text: "Yes, turn right at the church. You will see it.", dict: { "turn": "dönmek", "will": "ecek", "see": "görmek" } },
            { speaker: "deniz", text: "Thank you very much.", dict: { "very": "çok", "much": "fazla" } },
            { speaker: "local", text: "No problem. Have a nice day.", dict: { "problem": "sorun", "have": "sahip olmak", "nice": "güzel", "day": "gün" } }
        ],
        questions: [
            { q: "What object is Deniz looking for?", a_en: "Statue", a_tr: "Heykel" },
            { q: "What animal is the statue of?", a_en: "Horse", a_tr: "At" },
            { q: "Where is the statue located? Main...", a_en: "Square", a_tr: "Meydan" },
            { q: "What building is a landmark?", a_en: "Church", a_tr: "Kilise" },
            { q: "Which direction to turn at the church?", a_en: "Right", a_tr: "Sağ" },
            { q: "The local says 'Have a... day'.", a_en: "Nice", a_tr: "Güzel" },
            { q: "The statue is very...", a_en: "Old", a_tr: "Eski" }
        ]
    },
    "Step_13__Asking_for_Directions_3._Taking_the_Bus.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, which bus goes to the Art Gallery?", dict: { "which": "hangi", "bus": "otobüs", "goes": "gider", "art": "sanat", "gallery": "galeri" } },
            { speaker: "local", text: "You need bus number 10.", dict: { "need": "ihtiyaç duymak", "number": "numara" } },
            { speaker: "deniz", text: "Where is the bus stop?", dict: { "where": "nerede", "is": "olmak", "stop": "durak" } },
            { speaker: "local", text: "The bus stop is across the street.", dict: { "is": "olmak", "across": "karşısında", "street": "sokak" } },
            { speaker: "deniz", text: "How many stops is it?", dict: { "many": "kaç", "stops": "duraklar", "is": "olmak" } },
            { speaker: "local", text: "It is three stops. Listen for Art Gallery.", dict: { "is": "olmak", "three": "üç", "listen": "dinlemek" } },
            { speaker: "deniz", text: "Okay, I will listen for it. Thanks.", dict: { "will": "ecek", "listen": "dinlemek" } },
            { speaker: "local", text: "Have a good trip!", dict: { "have": "sahip olmak", "good": "iyi", "trip": "yolculuk" } }
        ],
        questions: [
            { q: "Where does Deniz want to go?", a_en: "Gallery", a_tr: "Galeri" },
            { q: "What type of gallery?", a_en: "Art", a_tr: "Sanat" },
            { q: "What vehicle is needed?", a_en: "Bus", a_tr: "Otobüs" },
            { q: "What is the bus number?", a_en: "10", a_tr: "10" },
            { q: "Where is the bus stop?", a_en: "Across", a_tr: "Karşısında" },
            { q: "How many stops is the ride?", a_en: "Three", a_tr: "Üç" },
            { q: "The local says 'Have a good...'", a_en: "Trip", a_tr: "Yolculuk" }
        ]
    },
    "Step_13__Asking_for_Directions_4._Getting_Lost.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, I am lost. Where is the river?", dict: { "am": "olmak", "lost": "kayıp", "where": "nerede", "is": "olmak", "river": "nehir" } },
            { speaker: "local", text: "You are walking the wrong way.", dict: { "are": "olmak", "walking": "yürüyorsun", "wrong": "yanlış", "way": "yön" } },
            { speaker: "deniz", text: "Oh no. Which way should I go?", dict: { "which": "hangi", "should": "meli", "go": "gitmek" } },
            { speaker: "local", text: "Turn around and walk straight for two blocks.", dict: { "turn": "dönmek", "around": "etrafında", "walk": "yürümek", "straight": "düz", "two": "iki", "blocks": "bloklar" } },
            { speaker: "deniz", text: "Then will I see the river?", dict: { "then": "sonra", "will": "ecek", "see": "görmek" } },
            { speaker: "local", text: "Yes, you will see the water easily.", dict: { "will": "ecek", "see": "görmek", "water": "su", "easily": "kolayca" } },
            { speaker: "deniz", text: "Thank you so much.", dict: { "so": "çok", "much": "fazla" } },
            { speaker: "local", text: "Stay safe!", dict: { "stay": "kal", "safe": "güvende" } }
        ],
        questions: [
            { q: "What is Deniz's situation?", a_en: "Lost", a_tr: "Kayıp" },
            { q: "What feature is Deniz looking for?", a_en: "River", a_tr: "Nehir" },
            { q: "Deniz is walking the... way.", a_en: "Wrong", a_tr: "Yanlış" },
            { q: "The local says to walk...", a_en: "Straight", a_tr: "Düz" },
            { q: "How many blocks to walk?", a_en: "Two", a_tr: "İki" },
            { q: "What will Deniz see easily?", a_en: "Water", a_tr: "Su" },
            { q: "The local says 'Stay...'", a_en: "Safe", a_tr: "Güvende" }
        ]
    },
    "Step_13__Asking_for_Directions_5._Asking_for_a_Map.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, do you sell city maps?", dict: { "do": "yapmak", "sell": "satmak", "city": "şehir", "maps": "haritalar" } },
            { speaker: "shopkeeper", text: "Yes, we have small maps for tourists.", dict: { "have": "sahip olmak", "small": "küçük", "tourists": "turistler" } },
            { speaker: "deniz", text: "How much is a map?", dict: { "much": "ne kadar", "is": "olmak", "map": "harita" } },
            { speaker: "shopkeeper", text: "It is two euros.", dict: { "is": "olmak", "two": "iki", "euros": "avro" } },
            { speaker: "deniz", text: "I will buy one. Here is the money.", dict: { "will": "ecek", "buy": "satın almak", "one": "bir", "here": "işte", "is": "olmak", "money": "para" } },
            { speaker: "shopkeeper", text: "Thank you. Look, we are here on the map.", dict: { "look": "bakmak", "are": "olmak", "here": "burada" } },
            { speaker: "deniz", text: "Oh, I see. Now I can find the castle.", dict: { "see": "görmek", "now": "şimdi", "can": "ebilmek", "find": "bulmak", "castle": "kale" } },
            { speaker: "shopkeeper", text: "Have a wonderful walk.", dict: { "have": "sahip olmak", "wonderful": "harika", "walk": "yürüyüş" } }
        ],
        questions: [
            { q: "What item does Deniz want to buy?", a_en: "Map", a_tr: "Harita" },
            { q: "Who are the maps for?", a_en: "Tourists", a_tr: "Turistler" },
            { q: "How many euros does it cost?", a_en: "Two", a_tr: "İki" },
            { q: "What does Deniz give to the shopkeeper?", a_en: "Money", a_tr: "Para" },
            { q: "What location does Deniz want to find?", a_en: "Castle", a_tr: "Kale" },
            { q: "The shopkeeper shows where they are on the...", a_en: "Map", a_tr: "Harita" },
            { q: "The shopkeeper wishes Deniz a wonderful...", a_en: "Walk", a_tr: "Yürüyüş" }
        ]
    }
};const part3 = {
    "Step_14__Renting_a_Car_1._Booking_a_Car.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello, I want to rent a small car.", dict: { "want": "istemek", "rent": "kiralamak", "small": "küçük", "car": "araba" } },
            { speaker: "agent", text: "For how many days do you need it?", dict: { "how": "kaç", "many": "çok", "days": "günler", "do": "yapmak", "need": "ihtiyaç duymak" } },
            { speaker: "deniz", text: "I need it for three days.", dict: { "need": "ihtiyaç duymak", "three": "üç" } },
            { speaker: "agent", text: "We have a blue car ready.", dict: { "have": "sahip olmak", "blue": "mavi", "ready": "hazır" } },
            { speaker: "deniz", text: "How much does it cost per day?", dict: { "much": "kadar", "does": "yapmak", "cost": "mal olmak", "per": "başına" } },
            { speaker: "agent", text: "It is forty euros a day.", dict: { "is": "olmak", "forty": "kırk", "euros": "avro" } },
            { speaker: "deniz", text: "That is good. I will take it.", dict: { "is": "olmak", "good": "iyi", "will": "ecek", "take": "almak" } },
            { speaker: "agent", text: "Please give me your driver's license.", dict: { "please": "lütfen", "give": "vermek", "driver": "sürücü", "license": "ehliyet" } }
        ],
        questions: [
            { q: "What vehicle does Deniz want to rent?", a_en: "Car", a_tr: "Araba" },
            { q: "What size is the car?", a_en: "Small", a_tr: "Küçük" },
            { q: "How many days will Deniz rent it?", a_en: "Three", a_tr: "Üç" },
            { q: "What color is the ready car?", a_en: "Blue", a_tr: "Mavi" },
            { q: "How many euros per day?", a_en: "Forty", a_tr: "Kırk" },
            { q: "What document is required?", a_en: "License", a_tr: "Ehliyet" },
            { q: "Deniz says 'That is...'", a_en: "Good", a_tr: "İyi" }
        ]
    },
    "Step_14__Renting_a_Car_2._Providing_Documents.mp3": {
        dialogue: [
            { speaker: "agent", text: "Do you have an international license?", dict: { "do": "yapmak", "have": "sahip olmak", "international": "uluslararası", "license": "ehliyet" } },
            { speaker: "deniz", text: "Yes, here is my international license.", dict: { "here": "işte", "is": "olmak", "international": "uluslararası" } },
            { speaker: "agent", text: "I also need a credit card for the deposit.", dict: { "also": "ayrıca", "need": "ihtiyaç duymak", "credit": "kredi", "card": "kart", "deposit": "depozito" } },
            { speaker: "deniz", text: "Here is my credit card.", dict: { "here": "işte", "is": "olmak", "credit": "kredi" } },
            { speaker: "agent", text: "Please sign this paper at the bottom.", dict: { "please": "lütfen", "sign": "imzalamak", "paper": "kağıt", "bottom": "alt" } },
            { speaker: "deniz", text: "Okay, I signed it.", dict: { "signed": "imzaladım" } },
            { speaker: "agent", text: "Thank you. The keys are here.", dict: { "thank": "teşekkür etmek", "are": "olmak", "keys": "anahtarlar", "here": "burada" } },
            { speaker: "deniz", text: "Great, where is the car parked?", dict: { "great": "harika", "where": "nerede", "is": "olmak", "parked": "park edilmiş" } }
        ],
        questions: [
            { q: "What kind of license is needed?", a_en: "International", a_tr: "Uluslararası" },
            { q: "What type of card is required?", a_en: "Credit", a_tr: "Kredi" },
            { q: "What is the card for?", a_en: "Deposit", a_tr: "Depozito" },
            { q: "What must Deniz do to the paper?", a_en: "Sign", a_tr: "İmzalamak" },
            { q: "Where should Deniz sign? At the...", a_en: "Bottom", a_tr: "Alt" },
            { q: "What does the agent give Deniz?", a_en: "Keys", a_tr: "Anahtarlar" },
            { q: "Deniz asks where the car is...", a_en: "Parked", a_tr: "Park edilmiş" }
        ]
    },
    "Step_14__Renting_a_Car_3._Checking_the_Car.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, there is a scratch on the door.", dict: { "excuse": "affetmek", "is": "olmak", "scratch": "çizik", "door": "kapı" } },
            { speaker: "agent", text: "Let me see. Ah, yes, on the right door.", dict: { "let": "izin vermek", "see": "görmek", "right": "sağ" } },
            { speaker: "deniz", text: "I didn't do it. It was already there.", dict: { "did": "yaptı", "do": "yapmak", "was": "idi", "already": "zaten", "there": "orada" } },
            { speaker: "agent", text: "Don't worry, I will write it on the paper.", dict: { "do": "yapmak", "worry": "endişelenmek", "will": "ecek", "write": "yazmak", "paper": "kağıt" } },
            { speaker: "deniz", text: "Thank you. I don't want to pay for it.", dict: { "do": "yapmak", "want": "istemek", "pay": "ödemek" } },
            { speaker: "agent", text: "You won't pay. Are the lights working?", dict: { "will": "ecek", "pay": "ödemek", "are": "olmak", "lights": "ışıklar", "working": "çalışıyor" } },
            { speaker: "deniz", text: "Yes, I checked the lights. They work.", dict: { "checked": "kontrol ettim", "work": "çalışmak" } },
            { speaker: "agent", text: "Excellent. You are ready to go.", dict: { "excellent": "mükemmel", "are": "olmak", "ready": "hazır", "go": "gitmek" } }
        ],
        questions: [
            { q: "What is on the car door?", a_en: "Scratch", a_tr: "Çizik" },
            { q: "Which door has the problem?", a_en: "Right", a_tr: "Sağ" },
            { q: "The agent will write it on the...", a_en: "Paper", a_tr: "Kağıt" },
            { q: "Does Deniz have to pay for it?", a_en: "No", a_tr: "Hayır" },
            { q: "What does the agent ask to check?", a_en: "Lights", a_tr: "Işıklar" },
            { q: "Do the lights work?", a_en: "Yes", a_tr: "Evet" },
            { q: "The agent says 'You are... to go'.", a_en: "Ready", a_tr: "Hazır" }
        ]
    },
    "Step_14__Renting_a_Car_4._Buying_Insurance.mp3": {
        dialogue: [
            { speaker: "agent", text: "Do you want to buy full insurance?", dict: { "do": "yapmak", "want": "istemek", "buy": "satın almak", "full": "tam", "insurance": "sigorta" } },
            { speaker: "deniz", text: "What does the insurance cover?", dict: { "what": "ne", "does": "yapmak", "cover": "kapsamak" } },
            { speaker: "agent", text: "It covers all damage to the car.", dict: { "covers": "kapsar", "all": "tümü", "damage": "hasar", "car": "araba" } },
            { speaker: "deniz", text: "Is it expensive?", dict: { "is": "olmak", "expensive": "pahalı" } },
            { speaker: "agent", text: "It is ten extra euros a day.", dict: { "is": "olmak", "ten": "on", "extra": "ekstra", "euros": "avro" } },
            { speaker: "deniz", text: "Yes, I want full insurance to be safe.", dict: { "want": "istemek", "full": "tam", "be": "olmak", "safe": "güvende" } },
            { speaker: "agent", text: "Smart choice. I will add it to your bill.", dict: { "smart": "akıllı", "choice": "seçim", "will": "ecek", "add": "eklemek", "bill": "hesap" } },
            { speaker: "deniz", text: "Thank you for explaining it.", dict: { "thank": "teşekkür etmek", "explaining": "açıklamak" } }
        ],
        questions: [
            { q: "What is the agent selling?", a_en: "Insurance", a_tr: "Sigorta" },
            { q: "What does it cover? All...", a_en: "Damage", a_tr: "Hasar" },
            { q: "Deniz asks if it is...", a_en: "Expensive", a_tr: "Pahalı" },
            { q: "How many extra euros per day?", a_en: "Ten", a_tr: "On" },
            { q: "Deniz wants it to be...", a_en: "Safe", a_tr: "Güvende" },
            { q: "The agent says 'Smart...'", a_en: "Choice", a_tr: "Seçim" },
            { q: "Where will the agent add the cost?", a_en: "Bill", a_tr: "Hesap" }
        ]
    },
    "Step_14__Renting_a_Car_5._Returning_the_Car.mp3": {
        dialogue: [
            { speaker: "deniz", text: "What time must I bring the car back?", dict: { "must": "zorunda", "bring": "getirmek", "back": "geri" } },
            { speaker: "agent", text: "Please bring it back before 5:00 PM on Friday.", dict: { "bring": "getirmek", "back": "geri", "before": "önce", "friday": "cuma" } },
            { speaker: "deniz", text: "Do I need to fill the gas tank?", dict: { "do": "yapmak", "need": "ihtiyaç duymak", "fill": "doldurmak", "gas": "benzin", "tank": "depo" } },
            { speaker: "agent", text: "Yes, please bring it back with full gas.", dict: { "bring": "getirmek", "back": "geri", "full": "dolu", "gas": "benzin" } },
            { speaker: "deniz", text: "Where is the closest gas station?", dict: { "is": "olmak", "closest": "en yakın", "station": "istasyon" } },
            { speaker: "agent", text: "There is one right down this street.", dict: { "is": "olmak", "right": "hemen", "down": "aşağı", "street": "sokak" } },
            { speaker: "deniz", text: "Perfect. I will see you on Friday.", dict: { "perfect": "kusursuz", "will": "ecek", "see": "görmek" } },
            { speaker: "agent", text: "Drive safely!", dict: { "drive": "sürmek", "safely": "güvenle" } }
        ],
        questions: [
            { q: "What day is the car due back?", a_en: "Friday", a_tr: "Cuma" },
            { q: "What must be filled? Gas...", a_en: "Tank", a_tr: "Depo" },
            { q: "The car must come back with... gas.", a_en: "Full", a_tr: "Dolu" },
            { q: "Deniz asks for the... gas station.", a_en: "Closest", a_tr: "En yakın" },
            { q: "The station is on this...", a_en: "Street", a_tr: "Sokak" },
            { q: "Deniz says 'I will... you on Friday'.", a_en: "See", a_tr: "Görmek" },
            { q: "The agent says 'Drive...'", a_en: "Safely", a_tr: "Güvenle" }
        ]
    },
    "Step_15__Medical_Emergency_1._Feeling_Sick.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. I feel very sick.", dict: { "feel": "hissetmek", "very": "çok", "sick": "hasta" } },
            { speaker: "nurse", text: "What is wrong? Do you have pain?", dict: { "is": "olmak", "wrong": "yanlış", "do": "yapmak", "have": "sahip olmak", "pain": "ağrı" } },
            { speaker: "deniz", text: "My stomach hurts very much.", dict: { "stomach": "mide", "hurts": "ağrıyor", "very": "çok", "much": "fazla" } },
            { speaker: "nurse", text: "Do you have health insurance?", dict: { "do": "yapmak", "have": "sahip olmak", "health": "sağlık", "insurance": "sigorta" } },
            { speaker: "deniz", text: "Yes, here is my travel insurance card.", dict: { "here": "işte", "is": "olmak", "travel": "seyahat", "card": "kart" } },
            { speaker: "nurse", text: "Please sit down. The doctor will see you.", dict: { "sit": "oturmak", "down": "aşağı", "will": "ecek", "see": "görmek" } },
            { speaker: "deniz", text: "Will I wait a long time?", dict: { "will": "ecek", "wait": "beklemek", "long": "uzun", "time": "zaman" } },
            { speaker: "nurse", text: "No, only five minutes.", dict: { "only": "sadece", "five": "beş", "minutes": "dakika" } }
        ],
        questions: [
            { q: "How does Deniz feel?", a_en: "Sick", a_tr: "Hasta" },
            { q: "The nurse asks if Deniz has...", a_en: "Pain", a_tr: "Ağrı" },
            { q: "What body part hurts?", a_en: "Stomach", a_tr: "Mide" },
            { q: "What kind of card is provided?", a_en: "Insurance", a_tr: "Sigorta" },
            { q: "Who will see Deniz?", a_en: "Doctor", a_tr: "Doktor" },
            { q: "Deniz asks if the wait will be...", a_en: "Long", a_tr: "Uzun" },
            { q: "How many minutes is the wait?", a_en: "Five", a_tr: "Beş" }
        ]
    },
    "Step_15__Medical_Emergency_2._Seeing_the_Doctor.mp3": {
        dialogue: [
            { speaker: "doctor", text: "Hello. When did your stomach pain start?", dict: { "when": "ne zaman", "did": "yaptı", "stomach": "mide", "pain": "ağrı", "start": "başlamak" } },
            { speaker: "deniz", text: "It started last night after dinner.", dict: { "started": "başladı", "last": "geçen", "night": "gece", "after": "sonra", "dinner": "akşam yemeği" } },
            { speaker: "doctor", text: "Did you vomit?", dict: { "did": "yaptı", "vomit": "kusmak" } },
            { speaker: "deniz", text: "Yes, two times in the night.", dict: { "two": "iki", "times": "kez" } },
            { speaker: "doctor", text: "You probably ate some bad food.", dict: { "probably": "muhtemelen", "ate": "yedin", "bad": "kötü", "food": "yemek" } },
            { speaker: "deniz", text: "Yes, I ate street food yesterday.", dict: { "ate": "yedim", "street": "sokak", "yesterday": "dün" } },
            { speaker: "doctor", text: "I will give you some medicine for your stomach.", dict: { "will": "ecek", "give": "vermek", "medicine": "ilaç" } },
            { speaker: "deniz", text: "Thank you, doctor.", dict: { "thank": "teşekkür etmek" } }
        ],
        questions: [
            { q: "When did the pain start? Last...", a_en: "Night", a_tr: "Gece" },
            { q: "After which meal did it start?", a_en: "Dinner", a_tr: "Akşam yemeği" },
            { q: "Did Deniz vomit?", a_en: "Yes", a_tr: "Evet" },
            { q: "How many times?", a_en: "Two", a_tr: "İki" },
            { q: "The doctor says Deniz ate... food.", a_en: "Bad", a_tr: "Kötü" },
            { q: "Where was the food from?", a_en: "Street", a_tr: "Sokak" },
            { q: "What will the doctor give?", a_en: "Medicine", a_tr: "İlaç" }
        ]
    },
    "Step_15__Medical_Emergency_3._Having_a_Fever.mp3": {
        dialogue: [
            { speaker: "doctor", text: "You look very hot and tired.", dict: { "look": "görünmek", "very": "çok", "hot": "sıcak", "tired": "yorgun" } },
            { speaker: "deniz", text: "Yes, I feel very cold and then very hot.", dict: { "feel": "hissetmek", "cold": "soğuk", "then": "sonra" } },
            { speaker: "doctor", text: "Let me check your temperature.", dict: { "let": "izin vermek", "check": "kontrol etmek", "temperature": "ateş" } },
            { speaker: "deniz", text: "Is it high?", dict: { "is": "olmak", "high": "yüksek" } },
            { speaker: "doctor", text: "Yes, you have a fever. It is 39 degrees.", dict: { "have": "sahip olmak", "fever": "ateş", "is": "olmak", "degrees": "derece" } },
            { speaker: "deniz", text: "What should I do?", dict: { "what": "ne", "should": "meli", "do": "yapmak" } },
            { speaker: "doctor", text: "You must stay in bed and drink lots of water.", dict: { "must": "zorunda", "stay": "kalmak", "bed": "yatak", "drink": "içmek", "lots": "bol", "water": "su" } },
            { speaker: "deniz", text: "Okay, I will go to my hotel and rest.", dict: { "will": "ecek", "go": "gitmek", "hotel": "otel", "rest": "dinlenmek" } }
        ],
        questions: [
            { q: "Deniz looks hot and...", a_en: "Tired", a_tr: "Yorgun" },
            { q: "The doctor checks the...", a_en: "Temperature", a_tr: "Ateş" },
            { q: "Deniz asks if it is...", a_en: "High", a_tr: "Yüksek" },
            { q: "What does Deniz have?", a_en: "Fever", a_tr: "Ateş" },
            { q: "Where must Deniz stay?", a_en: "Bed", a_tr: "Yatak" },
            { q: "What must Deniz drink?", a_en: "Water", a_tr: "Su" },
            { q: "Deniz will go to the hotel and...", a_en: "Rest", a_tr: "Dinlenmek" }
        ]
    },
    "Step_15__Medical_Emergency_4._Twisted_Ankle.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Doctor, I hurt my foot on the street.", dict: { "hurt": "incitmek", "foot": "ayak", "street": "sokak" } },
            { speaker: "doctor", text: "Can you stand on it?", dict: { "can": "ebilmek", "stand": "durmak" } },
            { speaker: "deniz", text: "No, it hurts too much when I walk.", dict: { "hurts": "ağrıyor", "too": "çok", "much": "fazla", "walk": "yürümek" } },
            { speaker: "doctor", text: "It looks very big and red.", dict: { "looks": "görünüyor", "very": "çok", "big": "büyük", "red": "kırmızı" } },
            { speaker: "deniz", text: "Is my bone broken?", dict: { "is": "olmak", "bone": "kemik", "broken": "kırık" } },
            { speaker: "doctor", text: "We need to take an X-ray to see.", dict: { "need": "ihtiyaç duymak", "take": "çekmek", "see": "görmek" } },
            { speaker: "deniz", text: "Please, do it fast. It hurts.", dict: { "do": "yapmak", "fast": "hızlı", "hurts": "ağrıyor" } },
            { speaker: "doctor", text: "Don't worry, we will help the pain.", dict: { "do": "yapmak", "worry": "endişelenmek", "will": "ecek", "help": "yardım etmek", "pain": "ağrı" } }
        ],
        questions: [
            { q: "What body part is hurt?", a_en: "Foot", a_tr: "Ayak" },
            { q: "Can Deniz stand on it?", a_en: "No", a_tr: "Hayır" },
            { q: "It hurts when Deniz tries to...", a_en: "Walk", a_tr: "Yürümek" },
            { q: "The foot is big and...", a_en: "Red", a_tr: "Kırmızı" },
            { q: "Deniz asks if the... is broken.", a_en: "Bone", a_tr: "Kemik" },
            { q: "What test is needed?", a_en: "X-ray", a_tr: "Röntgen" },
            { q: "The doctor says 'we will help the...'", a_en: "Pain", a_tr: "Ağrı" }
        ]
    },
    "Step_15__Medical_Emergency_5._Getting_a_Prescription.mp3": {
        dialogue: [
            { speaker: "doctor", text: "It is not broken. Just rest your foot.", dict: { "is": "olmak", "broken": "kırık", "just": "sadece", "rest": "dinlendirmek", "foot": "ayak" } },
            { speaker: "deniz", text: "Do I need medicine for the pain?", dict: { "do": "yapmak", "need": "ihtiyaç duymak", "medicine": "ilaç", "pain": "ağrı" } },
            { speaker: "doctor", text: "Yes, here is a paper for the pharmacy.", dict: { "here": "işte", "is": "olmak", "paper": "kağıt", "pharmacy": "eczane" } },
            { speaker: "deniz", text: "How many pills do I take?", dict: { "how": "kaç", "many": "çok", "pills": "haplar", "take": "almak" } },
            { speaker: "doctor", text: "Take one pill every morning.", dict: { "take": "almak", "one": "bir", "pill": "hap", "every": "her", "morning": "sabah" } },
            { speaker: "deniz", text: "Should I take it with food?", dict: { "should": "meli", "take": "almak", "with": "ile", "food": "yemek" } },
            { speaker: "doctor", text: "Yes, eat breakfast first.", dict: { "eat": "yemek", "breakfast": "kahvaltı", "first": "önce" } },
            { speaker: "deniz", text: "Thank you for your help, doctor.", dict: { "thank": "teşekkür etmek", "help": "yardım" } }
        ],
        questions: [
            { q: "Is the bone broken?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz asks for... for the pain.", a_en: "Medicine", a_tr: "İlaç" },
            { q: "The paper is for the...", a_en: "Pharmacy", a_tr: "Eczane" },
            { q: "How many pills to take at a time?", a_en: "One", a_tr: "Bir" },
            { q: "When should the pill be taken?", a_en: "Morning", a_tr: "Sabah" },
            { q: "Should it be taken with food?", a_en: "Yes", a_tr: "Evet" },
            { q: "What meal to eat first?", a_en: "Breakfast", a_tr: "Kahvaltı" }
        ]
    },
    "Step_16__Pharmacy_1._Buying_Medicine.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. I have this paper from the doctor.", dict: { "have": "sahip olmak", "paper": "kağıt", "doctor": "doktor" } },
            { speaker: "pharmacist", text: "Let me see. Okay, I have these pills.", dict: { "let": "izin vermek", "see": "görmek", "have": "sahip olmak", "pills": "haplar" } },
            { speaker: "deniz", text: "How much do they cost?", dict: { "much": "kadar", "do": "yapmak", "cost": "mal olmak" } },
            { speaker: "pharmacist", text: "The medicine is fifteen euros.", dict: { "medicine": "ilaç", "is": "olmak", "fifteen": "on beş", "euros": "avro" } },
            { speaker: "deniz", text: "Here is twenty euros.", dict: { "here": "işte", "is": "olmak", "twenty": "yirmi" } },
            { speaker: "pharmacist", text: "Here is your change and your medicine.", dict: { "here": "işte", "is": "olmak", "change": "para üstü", "medicine": "ilaç" } },
            { speaker: "deniz", text: "Thanks. How often do I take them?", dict: { "often": "sıklıkla", "do": "yapmak", "take": "almak" } },
            { speaker: "pharmacist", text: "Just one pill a day.", dict: { "just": "sadece", "one": "bir", "pill": "hap", "day": "gün" } }
        ],
        questions: [
            { q: "What does Deniz have from the doctor?", a_en: "Paper", a_tr: "Kağıt" },
            { q: "What does the pharmacist have?", a_en: "Pills", a_tr: "Haplar" },
            { q: "How many euros does the medicine cost?", a_en: "Fifteen", a_tr: "On beş" },
            { q: "How many euros does Deniz give?", a_en: "Twenty", a_tr: "Yirmi" },
            { q: "What does the pharmacist give back? The...", a_en: "Change", a_tr: "Para üstü" },
            { q: "Deniz asks how... to take them.", a_en: "Often", a_tr: "Sıklıkla" },
            { q: "How many pills a day?", a_en: "One", a_tr: "Bir" }
        ]
    },
    "Step_16__Pharmacy_2._Headache_Medicine.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Do you have anything for a bad headache?", dict: { "do": "yapmak", "have": "sahip olmak", "anything": "herhangi bir şey", "bad": "kötü", "headache": "baş ağrısı" } },
            { speaker: "pharmacist", text: "Yes, we have ibuprofen. It is very strong.", dict: { "have": "sahip olmak", "is": "olmak", "very": "çok", "strong": "güçlü" } },
            { speaker: "deniz", text: "Can I buy a small box?", dict: { "can": "ebilmek", "buy": "satın almak", "small": "küçük", "box": "kutu" } },
            { speaker: "pharmacist", text: "Yes, this box has ten pills.", dict: { "has": "sahip", "ten": "on", "pills": "haplar" } },
            { speaker: "deniz", text: "Great. I need some water, too.", dict: { "great": "harika", "need": "ihtiyaç duymak", "water": "su", "too": "ayrıca" } },
            { speaker: "pharmacist", text: "We sell cold water in the fridge over there.", dict: { "sell": "satmak", "cold": "soğuk", "water": "su", "fridge": "buzdolabı", "there": "orada" } },
            { speaker: "deniz", text: "Perfect. I will buy both.", dict: { "perfect": "kusursuz", "will": "ecek", "buy": "satın almak", "both": "ikisi de" } },
            { speaker: "pharmacist", text: "That will be eight euros total.", dict: { "will": "ecek", "be": "olmak", "eight": "sekiz", "total": "toplam" } }
        ],
        questions: [
            { q: "What kind of pain does Deniz have?", a_en: "Headache", a_tr: "Baş ağrısı" },
            { q: "The pharmacist says the medicine is very...", a_en: "Strong", a_tr: "Güçlü" },
            { q: "What size box does Deniz want?", a_en: "Small", a_tr: "Küçük" },
            { q: "How many pills are in the box?", a_en: "Ten", a_tr: "On" },
            { q: "What else does Deniz need?", a_en: "Water", a_tr: "Su" },
            { q: "Where is the water? In the...", a_en: "Fridge", a_tr: "Buzdolabı" },
            { q: "How much is the total in euros?", a_en: "Eight", a_tr: "Sekiz" }
        ]
    },
    "Step_16__Pharmacy_3._Buying_a_Bandage.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Do you sell bandages for an ankle?", dict: { "do": "yapmak", "sell": "satmak", "bandages": "sargılar", "ankle": "ayak bileği" } },
            { speaker: "pharmacist", text: "Yes, they are in the second aisle.", dict: { "are": "olmak", "second": "ikinci", "aisle": "koridor" } },
            { speaker: "deniz", text: "Can you show me which one is best?", dict: { "can": "ebilmek", "show": "göstermek", "which": "hangi", "best": "en iyi" } },
            { speaker: "pharmacist", text: "This blue one is very tight and good.", dict: { "blue": "mavi", "is": "olmak", "very": "çok", "tight": "sıkı", "good": "iyi" } },
            { speaker: "deniz", text: "Thank you. Do you have cream for pain?", dict: { "do": "yapmak", "have": "sahip olmak", "cream": "krem", "pain": "ağrı" } },
            { speaker: "pharmacist", text: "Yes, this cream is very cold and feels nice.", dict: { "is": "olmak", "very": "çok", "cold": "soğuk", "feels": "hissettirir", "nice": "güzel" } },
            { speaker: "deniz", text: "I will buy the bandage and the cream.", dict: { "will": "ecek", "buy": "satın almak" } },
            { speaker: "pharmacist", text: "Good choice. I will put them in a bag.", dict: { "good": "iyi", "choice": "seçim", "will": "ecek", "put": "koymak", "bag": "çanta" } }
        ],
        questions: [
            { q: "What body part is the bandage for?", a_en: "Ankle", a_tr: "Ayak bileği" },
            { q: "What aisle are they in?", a_en: "Second", a_tr: "İkinci" },
            { q: "What color is the good bandage?", a_en: "Blue", a_tr: "Mavi" },
            { q: "The bandage is good because it is...", a_en: "Tight", a_tr: "Sıkı" },
            { q: "What else does Deniz want for pain?", a_en: "Cream", a_tr: "Krem" },
            { q: "The pharmacist says the cream feels...", a_en: "Nice", a_tr: "Güzel" },
            { q: "Where will the pharmacist put the items?", a_en: "Bag", a_tr: "Çanta" }
        ]
    },
    "Step_16__Pharmacy_4._Cold_Symptoms.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I have a bad cough and a runny nose.", dict: { "have": "sahip olmak", "bad": "kötü", "cough": "öksürük", "runny": "akan", "nose": "burun" } },
            { speaker: "pharmacist", text: "Do you want cough syrup or pills?", dict: { "do": "yapmak", "want": "istemek", "syrup": "şurup", "pills": "haplar" } },
            { speaker: "deniz", text: "I prefer cough syrup. It works better.", dict: { "prefer": "tercih etmek", "works": "çalışır", "better": "daha iyi" } },
            { speaker: "pharmacist", text: "Drink one spoon of this before bed.", dict: { "drink": "içmek", "one": "bir", "spoon": "kaşık", "before": "önce", "bed": "yatak" } },
            { speaker: "deniz", text: "Will it make me sleepy?", dict: { "will": "ecek", "make": "yapmak", "sleepy": "uykulu" } },
            { speaker: "pharmacist", text: "Yes, it will help you sleep very well.", dict: { "will": "ecek", "help": "yardım etmek", "sleep": "uyumak", "very": "çok", "well": "iyi" } },
            { speaker: "deniz", text: "Good, I need a good sleep.", dict: { "good": "iyi", "need": "ihtiyaç duymak", "sleep": "uyku" } },
            { speaker: "pharmacist", text: "Take care and get well soon.", dict: { "take": "almak", "care": "dikkat", "get": "olmak", "well": "iyi", "soon": "yakında" } }
        ],
        questions: [
            { q: "What problem does Deniz have besides a runny nose?", a_en: "Cough", a_tr: "Öksürük" },
            { q: "What form of medicine does Deniz prefer?", a_en: "Syrup", a_tr: "Şurup" },
            { q: "Deniz thinks syrup works...", a_en: "Better", a_tr: "Daha iyi" },
            { q: "How much should Deniz drink? One...", a_en: "Spoon", a_tr: "Kaşık" },
            { q: "When should Deniz take it? Before...", a_en: "Bed", a_tr: "Yatak" },
            { q: "Will the medicine make Deniz sleepy?", a_en: "Yes", a_tr: "Evet" },
            { q: "The pharmacist says get well...", a_en: "Soon", a_tr: "Yakında" }
        ]
    },
    "Step_16__Pharmacy_5._Paying_with_Card.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I want to buy these vitamins.", dict: { "want": "istemek", "buy": "satın almak", "vitamins": "vitaminler" } },
            { speaker: "pharmacist", text: "Okay. That is twelve euros.", dict: { "is": "olmak", "twelve": "on iki", "euros": "avro" } },
            { speaker: "deniz", text: "Do you take credit cards for small prices?", dict: { "do": "yapmak", "take": "almak", "credit": "kredi", "cards": "kartlar", "small": "küçük", "prices": "fiyatlar" } },
            { speaker: "pharmacist", text: "Yes, any price is fine for a card.", dict: { "any": "herhangi", "price": "fiyat", "is": "olmak", "fine": "iyi" } },
            { speaker: "deniz", text: "Okay, I am tapping my card now.", dict: { "am": "olmak", "tapping": "dokunduruyorum", "card": "kart", "now": "şimdi" } },
            { speaker: "pharmacist", text: "Approved. Do you need a bag?", dict: { "approved": "onaylandı", "do": "yapmak", "need": "ihtiyaç duymak", "bag": "çanta" } },
            { speaker: "deniz", text: "No thanks, I can put it in my pocket.", dict: { "can": "ebilmek", "put": "koymak", "pocket": "cep" } },
            { speaker: "pharmacist", text: "Have a nice day!", dict: { "have": "sahip olmak", "nice": "güzel", "day": "gün" } }
        ],
        questions: [
            { q: "What is Deniz buying?", a_en: "Vitamins", a_tr: "Vitaminler" },
            { q: "How many euros does it cost?", a_en: "Twelve", a_tr: "On iki" },
            { q: "What does Deniz use to pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What action does Deniz do with the card?", a_en: "Tapping", a_tr: "Dokunduruyorum" },
            { q: "The pharmacist says the payment is...", a_en: "Approved", a_tr: "Onaylandı" },
            { q: "Does Deniz need a bag?", a_en: "No", a_tr: "Hayır" },
            { q: "Where will Deniz put the vitamins?", a_en: "Pocket", a_tr: "Cep" }
        ]
    },
    "Step_17__Reporting_a_Lost_Item_1._Lost_Passport.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello officer. I lost my passport.", dict: { "lost": "kaybettim", "passport": "pasaport" } },
            { speaker: "police", text: "Oh no. Where did you lose it?", dict: { "where": "nerede", "did": "yaptı", "lose": "kaybetmek" } },
            { speaker: "deniz", text: "I think I lost it near the museum.", dict: { "think": "düşünmek", "lost": "kaybettim", "near": "yakınında", "museum": "müze" } },
            { speaker: "police", text: "What color is your passport?", dict: { "color": "renk", "is": "olmak" } },
            { speaker: "deniz", text: "It is a red passport.", dict: { "is": "olmak", "red": "kırmızı" } },
            { speaker: "police", text: "You must fill out this lost item form.", dict: { "must": "zorunda", "fill": "doldurmak", "lost": "kayıp", "item": "eşya", "form": "form" } },
            { speaker: "deniz", text: "Do I give this form to my embassy?", dict: { "do": "yapmak", "give": "vermek", "form": "form", "embassy": "büyükelçilik" } },
            { speaker: "police", text: "Yes, take this form to your embassy today.", dict: { "take": "götürmek", "form": "form", "embassy": "büyükelçilik", "today": "bugün" } }
        ],
        questions: [
            { q: "What document did Deniz lose?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "Where was it lost near?", a_en: "Museum", a_tr: "Müze" },
            { q: "What color is the passport?", a_en: "Red", a_tr: "Kırmızı" },
            { q: "What must Deniz fill out?", a_en: "Form", a_tr: "Form" },
            { q: "Who does Deniz ask if they should give the form to?", a_en: "Embassy", a_tr: "Büyükelçilik" },
            { q: "The police say to take the form there...", a_en: "Today", a_tr: "Bugün" },
            { q: "Who is Deniz talking to?", a_en: "Police", a_tr: "Polis" }
        ]
    },
    "Step_17__Reporting_a_Lost_Item_2._Stolen_Phone.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, someone stole my phone.", dict: { "someone": "birisi", "stole": "çaldı", "phone": "telefon" } },
            { speaker: "police", text: "Where were you when it happened?", dict: { "where": "nerede", "were": "idin", "happened": "oldu" } },
            { speaker: "deniz", text: "I was on the busy train, near the door.", dict: { "was": "idim", "busy": "meşgul", "train": "tren", "near": "yakınında", "door": "kapı" } },
            { speaker: "police", text: "Do you know your phone number?", dict: { "do": "yapmak", "know": "bilmek", "phone": "telefon", "number": "numara" } },
            { speaker: "deniz", text: "Yes, my number is 555-0123.", dict: { "number": "numara", "is": "olmak" } },
            { speaker: "police", text: "We will write a police report for you.", dict: { "will": "ecek", "write": "yazmak", "report": "rapor" } },
            { speaker: "deniz", text: "Can you track where the phone is?", dict: { "can": "ebilmek", "track": "izlemek", "where": "nerede", "is": "olmak" } },
            { speaker: "police", text: "We will try, but please block your number.", dict: { "will": "ecek", "try": "denemek", "block": "engellemek", "number": "numara" } }
        ],
        questions: [
            { q: "What item was stolen?", a_en: "Phone", a_tr: "Telefon" },
            { q: "Where was Deniz when it was stolen?", a_en: "Train", a_tr: "Tren" },
            { q: "Was the train busy or empty?", a_en: "Busy", a_tr: "Meşgul/Kalabalık" },
            { q: "Deniz was standing near the...", a_en: "Door", a_tr: "Kapı" },
            { q: "What will the police write?", a_en: "Report", a_tr: "Rapor" },
            { q: "Deniz asks if they can... the phone.", a_en: "Track", a_tr: "İzlemek" },
            { q: "The police advise Deniz to... the number.", a_en: "Block", a_tr: "Engellemek" }
        ]
    },
    "Step_17__Reporting_a_Lost_Item_3._Lost_Wallet.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. I cannot find my wallet.", dict: { "cannot": "yapamamak", "find": "bulmak", "wallet": "cüzdan" } },
            { speaker: "police", text: "Did you have credit cards in it?", dict: { "did": "yaptı", "have": "sahip olmak", "credit": "kredi", "cards": "kartlar" } },
            { speaker: "deniz", text: "Yes, two credit cards and some cash.", dict: { "two": "iki", "cash": "nakit" } },
            { speaker: "police", text: "You must call your bank right now.", dict: { "must": "zorunda", "call": "aramak", "bank": "banka", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "I don't have a phone with me.", dict: { "have": "sahip olmak", "phone": "telefon", "with": "ile" } },
            { speaker: "police", text: "You can use our police phone on the desk.", dict: { "can": "ebilmek", "use": "kullanmak", "phone": "telefon", "desk": "masa" } },
            { speaker: "deniz", text: "Thank you so much for your help.", dict: { "much": "çok", "help": "yardım" } },
            { speaker: "police", text: "Call the bank, then we will talk.", dict: { "call": "aramak", "bank": "banka", "then": "sonra", "will": "ecek", "talk": "konuşmak" } }
        ],
        questions: [
            { q: "What item did Deniz lose?", a_en: "Wallet", a_tr: "Cüzdan" },
            { q: "How many credit cards were in it?", a_en: "Two", a_tr: "İki" },
            { q: "What else was in it besides cards?", a_en: "Cash", a_tr: "Nakit" },
            { q: "Who must Deniz call right now?", a_en: "Bank", a_tr: "Banka" },
            { q: "Does Deniz have a phone with them?", a_en: "No", a_tr: "Hayır" },
            { q: "Where is the police phone?", a_en: "Desk", a_tr: "Masa" },
            { q: "The police say call the bank, then we will...", a_en: "Talk", a_tr: "Konuşmak" }
        ]
    },
    "Step_17__Reporting_a_Lost_Item_4._Lost_Bag.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I forgot my black bag in a taxi.", dict: { "forgot": "unuttum", "black": "siyah", "bag": "çanta", "taxi": "taksi" } },
            { speaker: "police", text: "Do you have the taxi receipt?", dict: { "do": "yapmak", "have": "sahip olmak", "receipt": "fiş" } },
            { speaker: "deniz", text: "No, I paid with cash and didn't get a receipt.", dict: { "paid": "ödedim", "cash": "nakit", "get": "almak" } },
            { speaker: "police", text: "Do you remember the taxi company name?", dict: { "do": "yapmak", "remember": "hatırlamak", "company": "şirket", "name": "isim" } },
            { speaker: "deniz", text: "It was a yellow car, but I don't know the name.", dict: { "was": "idi", "yellow": "sarı", "car": "araba", "know": "bilmek" } },
            { speaker: "police", text: "I will call the taxi center to ask them.", dict: { "will": "ecek", "call": "aramak", "center": "merkez", "ask": "sormak" } },
            { speaker: "deniz", text: "Please do. My house keys are in the bag.", dict: { "do": "yapmak", "house": "ev", "keys": "anahtarlar", "are": "olmak" } },
            { speaker: "police", text: "We will do our best to find it.", dict: { "will": "ecek", "do": "yapmak", "best": "en iyi", "find": "bulmak" } }
        ],
        questions: [
            { q: "What color is the bag?", a_en: "Black", a_tr: "Siyah" },
            { q: "Where was the bag forgotten?", a_en: "Taxi", a_tr: "Taksi" },
            { q: "Does Deniz have a receipt?", a_en: "No", a_tr: "Hayır" },
            { q: "What color was the car?", a_en: "Yellow", a_tr: "Sarı" },
            { q: "Who will the police call?", a_en: "Center", a_tr: "Merkez" },
            { q: "What important items are in the bag?", a_en: "Keys", a_tr: "Anahtarlar" },
            { q: "The police will do their best to... it.", a_en: "Find", a_tr: "Bulmak" }
        ]
    },
    "Step_17__Reporting_a_Lost_Item_5._Missing_Camera.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I left my camera at the coffee shop.", dict: { "left": "bıraktım", "camera": "kamera", "coffee": "kahve", "shop": "dükkan" } },
            { speaker: "police", text: "Did you go back to the coffee shop to look?", dict: { "did": "yaptı", "go": "gitmek", "back": "geri", "look": "bakmak" } },
            { speaker: "deniz", text: "Yes, but the waiter said it wasn't there.", dict: { "waiter": "garson", "said": "dedi", "was": "idi", "there": "orada" } },
            { speaker: "police", text: "What brand is the camera?", dict: { "brand": "marka", "is": "olmak" } },
            { speaker: "deniz", text: "It is a black Sony camera.", dict: { "is": "olmak", "black": "siyah" } },
            { speaker: "police", text: "We will call the shop and ask to see the video.", dict: { "will": "ecek", "call": "aramak", "ask": "sormak", "see": "görmek", "video": "video" } },
            { speaker: "deniz", text: "Thank you. It has all my holiday photos!", dict: { "has": "sahip", "all": "tümü", "holiday": "tatil", "photos": "fotoğraflar" } },
            { speaker: "police", text: "We will contact you if we find it.", dict: { "will": "ecek", "contact": "iletişim kurmak", "find": "bulmak" } }
        ],
        questions: [
            { q: "What item is missing?", a_en: "Camera", a_tr: "Kamera" },
            { q: "Where did Deniz leave it?", a_en: "Shop", a_tr: "Dükkan" },
            { q: "Who said it wasn't there?", a_en: "Waiter", a_tr: "Garson" },
            { q: "What brand is the camera?", a_en: "Sony", a_tr: "Sony" },
            { q: "What will the police ask to see?", a_en: "Video", a_tr: "Video" },
            { q: "What is on the camera?", a_en: "Photos", a_tr: "Fotoğraflar" },
            { q: "The police will... you if they find it.", a_en: "Contact", a_tr: "İletişime geçmek" }
        ]
    },
    "Step_18__Back_at_the_Hotel_1._Telling_the_Receptionist.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. I had a very bad day.", dict: { "had": "sahiptim", "very": "çok", "bad": "kötü", "day": "gün" } },
            { speaker: "receptionist", text: "Oh no, what happened?", dict: { "happened": "oldu" } },
            { speaker: "deniz", text: "I lost my wallet in the city.", dict: { "lost": "kaybettim", "wallet": "cüzdan", "city": "şehir" } },
            { speaker: "receptionist", text: "I am so sorry. Did you go to the police?", dict: { "am": "olmak", "sorry": "üzgün", "did": "yaptı", "go": "gitmek", "police": "polis" } },
            { speaker: "deniz", text: "Yes, I made a police report.", dict: { "made": "yaptım", "report": "rapor" } },
            { speaker: "receptionist", text: "If you need to make calls, use the lobby phone.", dict: { "need": "ihtiyaç duymak", "make": "yapmak", "calls": "aramalar", "use": "kullanmak", "lobby": "lobi", "phone": "telefon" } },
            { speaker: "deniz", text: "Thank you. You are very kind.", dict: { "are": "olmak", "very": "çok", "kind": "nazik" } },
            { speaker: "receptionist", text: "Please let us know how we can help.", dict: { "let": "izin vermek", "know": "bilmek", "can": "ebilmek", "help": "yardım etmek" } }
        ],
        questions: [
            { q: "How does Deniz describe the day?", a_en: "Bad", a_tr: "Kötü" },
            { q: "What did Deniz lose?", a_en: "Wallet", a_tr: "Cüzdan" },
            { q: "Where was it lost?", a_en: "City", a_tr: "Şehir" },
            { q: "Who did Deniz go to see?", a_en: "Police", a_tr: "Polis" },
            { q: "Deniz made a police...", a_en: "Report", a_tr: "Rapor" },
            { q: "Where can Deniz use the phone?", a_en: "Lobby", a_tr: "Lobi" },
            { q: "Deniz tells the receptionist 'You are very...'", a_en: "Kind", a_tr: "Nazik" }
        ]
    },
    "Step_18__Back_at_the_Hotel_2._Getting_a_New_Key.mp3": {
        dialogue: [
            { speaker: "deniz", text: "My hotel room key was in my lost wallet.", dict: { "room": "oda", "key": "anahtar", "was": "idi", "lost": "kayıp", "wallet": "cüzdan" } },
            { speaker: "receptionist", text: "Do not worry. I will cancel the old key.", dict: { "do": "yapmak", "worry": "endişelenmek", "will": "ecek", "cancel": "iptal etmek", "old": "eski", "key": "anahtar" } },
            { speaker: "deniz", text: "Thank you. I was worried someone could enter.", dict: { "was": "idim", "worried": "endişeli", "someone": "birisi", "could": "ebilmek", "enter": "girmek" } },
            { speaker: "receptionist", text: "No one can use the old key now.", dict: { "can": "ebilmek", "use": "kullanmak", "old": "eski", "now": "şimdi" } },
            { speaker: "deniz", text: "Can I have a new key to go to sleep?", dict: { "can": "ebilmek", "have": "almak", "new": "yeni", "go": "gitmek", "sleep": "uyumak" } },
            { speaker: "receptionist", text: "Yes, here is your new card for room 505.", dict: { "is": "olmak", "new": "yeni", "card": "kart" } },
            { speaker: "deniz", text: "Thanks. I just want to rest.", dict: { "want": "istemek", "rest": "dinlenmek" } },
            { speaker: "receptionist", text: "Get a good sleep tonight.", dict: { "get": "almak", "good": "iyi", "sleep": "uyku", "tonight": "bu gece" } }
        ],
        questions: [
            { q: "What was in the lost wallet?", a_en: "Key", a_tr: "Anahtar" },
            { q: "What will the receptionist do to the old key?", a_en: "Cancel", a_tr: "İptal etmek" },
            { q: "Deniz was worried someone could...", a_en: "Enter", a_tr: "Girmek" },
            { q: "Can anyone use the old key now?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz asks for a... key.", a_en: "New", a_tr: "Yeni" },
            { q: "What room number is it?", a_en: "505", a_tr: "505" },
            { q: "Deniz says 'I just want to...'", a_en: "Rest", a_tr: "Dinlenmek" }
        ]
    },
    "Step_18__Back_at_the_Hotel_3._Asking_to_Call_Home.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can I use your phone to call my family?", dict: { "can": "ebilmek", "use": "kullanmak", "phone": "telefon", "call": "aramak", "family": "aile" } },
            { speaker: "receptionist", text: "Yes, is it an international call?", dict: { "is": "olmak", "international": "uluslararası", "call": "arama" } },
            { speaker: "deniz", text: "Yes, I need to tell them I lost my phone.", dict: { "need": "ihtiyaç duymak", "tell": "söylemek", "lost": "kaybettim" } },
            { speaker: "receptionist", text: "It is free for emergencies. Dial 9 first.", dict: { "is": "olmak", "free": "ücretsiz", "emergencies": "acil durumlar", "dial": "tuşlamak", "first": "önce" } },
            { speaker: "deniz", text: "Thank you, I will make a short call.", dict: { "will": "ecek", "make": "yapmak", "short": "kısa", "call": "arama" } },
            { speaker: "receptionist", text: "Take your time, sir. Don't rush.", dict: { "take": "almak", "time": "zaman", "sir": "beyefendi", "rush": "acele etmek" } },
            { speaker: "deniz", text: "I appreciate the help.", dict: { "appreciate": "minnettar olmak", "help": "yardım" } },
            { speaker: "receptionist", text: "We are here for you.", dict: { "are": "olmak", "here": "burada" } }
        ],
        questions: [
            { q: "Who does Deniz want to call?", a_en: "Family", a_tr: "Aile" },
            { q: "Is the call local or international?", a_en: "International", a_tr: "Uluslararası" },
            { q: "What must Deniz tell their family they lost?", a_en: "Phone", a_tr: "Telefon" },
            { q: "Is the call expensive or free?", a_en: "Free", a_tr: "Ücretsiz" },
            { q: "What number must Deniz dial first?", a_en: "9", a_tr: "9" },
            { q: "Deniz promises to make a... call.", a_en: "Short", a_tr: "Kısa" },
            { q: "The receptionist says 'Don't...'", a_en: "Rush", a_tr: "Acele etme" }
        ]
    },
    "Step_18__Back_at_the_Hotel_4._Staying_One_More_Night.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I need to stay one more night to get a new passport.", dict: { "need": "ihtiyaç duymak", "stay": "kalmak", "more": "daha", "night": "gece", "get": "almak", "new": "yeni" } },
            { speaker: "receptionist", text: "Let me check if your room is free tomorrow.", dict: { "let": "izin vermek", "check": "kontrol etmek", "is": "olmak", "free": "boş", "tomorrow": "yarın" } },
            { speaker: "deniz", text: "I hope I can stay in the same room.", dict: { "hope": "umut etmek", "can": "ebilmek", "stay": "kalmak", "same": "aynı" } },
            { speaker: "receptionist", text: "Yes, room 505 is free tomorrow night.", dict: { "is": "olmak", "free": "boş" } },
            { speaker: "deniz", text: "That is great news.", dict: { "is": "olmak", "great": "harika", "news": "haberler" } },
            { speaker: "receptionist", text: "I will add one more night to your booking.", dict: { "will": "ecek", "add": "eklemek", "more": "daha", "booking": "rezervasyon" } },
            { speaker: "deniz", text: "Thank you. It makes things easier.", dict: { "makes": "yapar", "things": "şeyler", "easier": "daha kolay" } },
            { speaker: "receptionist", text: "We are happy to have you stay longer.", dict: { "are": "olmak", "happy": "mutlu", "have": "sahip olmak", "stay": "kalmak", "longer": "daha uzun" } }
        ],
        questions: [
            { q: "How many more nights does Deniz need to stay?", a_en: "One", a_tr: "Bir" },
            { q: "What new document is Deniz waiting for?", a_en: "Passport", a_tr: "Pasaport" },
            { q: "Does Deniz want to move rooms?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz hopes to stay in the... room.", a_en: "Same", a_tr: "Aynı" },
            { q: "Is room 505 free tomorrow?", a_en: "Yes", a_tr: "Evet" },
            { q: "The receptionist will... a night to the booking.", a_en: "Add", a_tr: "Eklemek" },
            { q: "Deniz says this makes things...", a_en: "Easier", a_tr: "Daha kolay" }
        ]
    },
    "Step_18__Back_at_the_Hotel_5._Relaxing_with_Tea.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I am very stressed today.", dict: { "am": "olmak", "very": "çok", "stressed": "stresli", "today": "bugün" } },
            { speaker: "receptionist", text: "Would you like some hot tea to relax?", dict: { "would": "ister", "like": "istemek", "hot": "sıcak", "tea": "çay", "relax": "rahatlamak" } },
            { speaker: "deniz", text: "Yes, a cup of green tea would be lovely.", dict: { "cup": "fincan", "green": "yeşil", "would": "olurdu", "lovely": "harika" } },
            { speaker: "receptionist", text: "Please sit on the sofa. I will bring it.", dict: { "sit": "oturmak", "sofa": "kanepe", "will": "ecek", "bring": "getirmek" } },
            { speaker: "deniz", text: "How much is the tea?", dict: { "much": "kadar", "is": "olmak" } },
            { speaker: "receptionist", text: "It is free for you today.", dict: { "is": "olmak", "free": "ücretsiz", "today": "bugün" } },
            { speaker: "deniz", text: "Thank you for making me smile.", dict: { "making": "yapmak", "smile": "gülümsemek" } },
            { speaker: "receptionist", text: "Everything will be okay tomorrow.", dict: { "will": "ecek", "be": "olmak", "okay": "tamam", "tomorrow": "yarın" } }
        ],
        questions: [
            { q: "How is Deniz feeling today?", a_en: "Stressed", a_tr: "Stresli" },
            { q: "What drink does the receptionist offer?", a_en: "Tea", a_tr: "Çay" },
            { q: "What kind of tea does Deniz request?", a_en: "Green", a_tr: "Yeşil" },
            { q: "Where should Deniz sit?", a_en: "Sofa", a_tr: "Kanepe" },
            { q: "Is the tea expensive?", a_en: "No", a_tr: "Hayır" },
            { q: "The receptionist says the tea is...", a_en: "Free", a_tr: "Ücretsiz" },
            { q: "Deniz thanks them for making him...", a_en: "Smile", a_tr: "Gülümsemek" }
        ]
    },
    "Step_19__Shopping_1._Looking_Around.mp3": {
        dialogue: [
            { speaker: "shopkeeper", text: "Welcome to our shop! Can I help you?", dict: { "welcome": "hoşgeldiniz", "shop": "dükkan", "can": "ebilmek", "help": "yardım etmek" } },
            { speaker: "deniz", text: "Hello. No thanks, I am just looking.", dict: { "am": "olmak", "just": "sadece", "looking": "bakıyorum" } },
            { speaker: "shopkeeper", text: "Take your time. We have many souvenirs.", dict: { "take": "almak", "time": "zaman", "have": "sahip olmak", "many": "birçok", "souvenirs": "hediyelik eşyalar" } },
            { speaker: "deniz", text: "These magnets are very beautiful.", dict: { "are": "olmak", "very": "çok", "beautiful": "güzel" } },
            { speaker: "shopkeeper", text: "Yes, they are painted by local artists.", dict: { "are": "olmak", "painted": "boyanmış", "local": "yerel", "artists": "sanatçılar" } },
            { speaker: "deniz", text: "I will look at the shirts over there.", dict: { "will": "ecek", "look": "bakmak", "shirts": "gömlekler", "there": "orada" } },
            { speaker: "shopkeeper", text: "Let me know if you need a different size.", dict: { "let": "izin vermek", "know": "bilmek", "need": "ihtiyaç duymak", "different": "farklı", "size": "beden" } },
            { speaker: "deniz", text: "I will. Thank you.", dict: { "will": "ecek" } }
        ],
        questions: [
            { q: "What does the shopkeeper offer?", a_en: "Help", a_tr: "Yardım" },
            { q: "Deniz says 'I am just...'", a_en: "Looking", a_tr: "Bakıyorum" },
            { q: "What kind of items does the shop have?", a_en: "Souvenirs", a_tr: "Hediyelik eşyalar" },
            { q: "Deniz thinks the magnets are...", a_en: "Beautiful", a_tr: "Güzel" },
            { q: "Who painted the magnets? Local...", a_en: "Artists", a_tr: "Sanatçılar" },
            { q: "What clothing will Deniz look at?", a_en: "Shirts", a_tr: "Gömlekler" },
            { q: "The shopkeeper asks if Deniz needs a different...", a_en: "Size", a_tr: "Beden" }
        ]
    },
    "Step_19__Shopping_2._Asking_for_the_Price.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Excuse me, how much is this coffee cup?", dict: { "much": "kadar", "is": "olmak", "coffee": "kahve", "cup": "fincan" } },
            { speaker: "shopkeeper", text: "That cup is fifteen euros.", dict: { "is": "olmak", "fifteen": "on beş", "euros": "avro" } },
            { speaker: "deniz", text: "Hmm, it is a bit expensive for me.", dict: { "is": "olmak", "bit": "biraz", "expensive": "pahalı" } },
            { speaker: "shopkeeper", text: "I have smaller cups for ten euros.", dict: { "have": "sahip olmak", "smaller": "daha küçük", "ten": "on" } },
            { speaker: "deniz", text: "Oh, I like the small blue one. I will buy it.", dict: { "like": "beğenmek", "small": "küçük", "blue": "mavi", "will": "ecek", "buy": "satın almak" } },
            { speaker: "shopkeeper", text: "Great. I will pack it safely for you.", dict: { "great": "harika", "will": "ecek", "pack": "paketlemek", "safely": "güvenle" } },
            { speaker: "deniz", text: "Yes, please wrap it well for the flight.", dict: { "wrap": "sarmak", "well": "iyi", "flight": "uçuş" } },
            { speaker: "shopkeeper", text: "It won't break. Here you go.", dict: { "will": "ecek", "break": "kırılmak", "here": "işte" } }
        ],
        questions: [
            { q: "What item is Deniz asking about?", a_en: "Cup", a_tr: "Fincan" },
            { q: "How many euros is the first cup?", a_en: "Fifteen", a_tr: "On beş" },
            { q: "Deniz thinks the cup is...", a_en: "Expensive", a_tr: "Pahalı" },
            { q: "How much is the smaller cup?", a_en: "Ten", a_tr: "On" },
            { q: "What color is the small cup?", a_en: "Blue", a_tr: "Mavi" },
            { q: "The shopkeeper will pack it...", a_en: "Safely", a_tr: "Güvenle" },
            { q: "Deniz asks to wrap it well for the...", a_en: "Flight", a_tr: "Uçuş" }
        ]
    },
    "Step_19__Shopping_3._Trying_on_Clothes.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Can I try this jacket on?", dict: { "can": "ebilmek", "try": "denemek", "jacket": "ceket" } },
            { speaker: "shopkeeper", text: "Yes, the mirror is right behind you.", dict: { "is": "olmak", "mirror": "ayna", "right": "hemen", "behind": "arkasında" } },
            { speaker: "deniz", text: "This jacket is too small for me.", dict: { "is": "olmak", "too": "çok", "small": "küçük" } },
            { speaker: "shopkeeper", text: "Do you want to try a large size?", dict: { "do": "yapmak", "want": "istemek", "try": "denemek", "large": "büyük", "size": "beden" } },
            { speaker: "deniz", text: "Yes, please give me a large one.", dict: { "give": "vermek", "large": "büyük" } },
            { speaker: "shopkeeper", text: "Here is the large size in the same color.", dict: { "is": "olmak", "same": "aynı", "color": "renk" } },
            { speaker: "deniz", text: "This one fits perfectly. I will take it.", dict: { "fits": "uyuyor", "perfectly": "kusursuz", "will": "ecek", "take": "almak" } },
            { speaker: "shopkeeper", text: "You look very handsome in it!", dict: { "look": "görünmek", "very": "çok", "handsome": "yakışıklı" } }
        ],
        questions: [
            { q: "What clothing does Deniz want to try?", a_en: "Jacket", a_tr: "Ceket" },
            { q: "What is right behind Deniz?", a_en: "Mirror", a_tr: "Ayna" },
            { q: "The first jacket is too...", a_en: "Small", a_tr: "Küçük" },
            { q: "What size does Deniz try next?", a_en: "Large", a_tr: "Büyük" },
            { q: "Is the second jacket a different color?", a_en: "No", a_tr: "Hayır" },
            { q: "Deniz says it fits...", a_en: "Perfectly", a_tr: "Kusursuz" },
            { q: "The shopkeeper says Deniz looks...", a_en: "Handsome", a_tr: "Yakışıklı" }
        ]
    },
    "Step_19__Shopping_4._Buying_Gifts.mp3": {
        dialogue: [
            { speaker: "deniz", text: "I want to buy a gift for a friend.", dict: { "want": "istemek", "buy": "satın almak", "gift": "hediye", "friend": "arkadaş" } },
            { speaker: "shopkeeper", text: "Does your friend like sweets or tea?", dict: { "does": "yapmak", "like": "sevmek", "sweets": "tatlılar", "tea": "çay" } },
            { speaker: "deniz", text: "He loves local tea very much.", dict: { "loves": "sever", "local": "yerel", "very": "çok" } },
            { speaker: "shopkeeper", text: "We have a special apple tea. It is very popular.", dict: { "have": "sahip olmak", "special": "özel", "apple": "elma", "is": "olmak", "popular": "popüler" } },
            { speaker: "deniz", text: "How much is one box of apple tea?", dict: { "much": "kadar", "is": "olmak", "box": "kutu" } },
            { speaker: "shopkeeper", text: "One box is five euros.", dict: { "is": "olmak", "five": "beş" } },
            { speaker: "deniz", text: "I will take three boxes, please.", dict: { "will": "ecek", "take": "almak", "three": "üç" } },
            { speaker: "shopkeeper", text: "Excellent choice. They smell amazing.", dict: { "excellent": "mükemmel", "choice": "seçim", "smell": "kokmak", "amazing": "harika" } }
        ],
        questions: [
            { q: "What does Deniz want to buy?", a_en: "Gift", a_tr: "Hediye" },
            { q: "Who is it for?", a_en: "Friend", a_tr: "Arkadaş" },
            { q: "What does the friend love?", a_en: "Tea", a_tr: "Çay" },
            { q: "What flavor is the special tea?", a_en: "Apple", a_tr: "Elma" },
            { q: "How many euros is one box?", a_en: "Five", a_tr: "Beş" },
            { q: "How many boxes will Deniz take?", a_en: "Three", a_tr: "Üç" },
            { q: "The shopkeeper says they... amazing.", a_en: "Smell", a_tr: "Kokmak" }
        ]
    },
    "Step_19__Shopping_5._Asking_for_a_Discount.mp3": {
        dialogue: [
            { speaker: "deniz", text: "If I buy five postcards, can I get a cheaper price?", dict: { "buy": "satın almak", "five": "beş", "postcards": "kartpostallar", "can": "ebilmek", "get": "almak", "cheaper": "daha ucuz", "price": "fiyat" } },
            { speaker: "shopkeeper", text: "They are one euro each. I can give you five for four euros.", dict: { "are": "olmak", "each": "her biri", "can": "ebilmek", "give": "vermek", "four": "dört" } },
            { speaker: "deniz", text: "That is very kind of you. Deal.", dict: { "is": "olmak", "very": "çok", "kind": "nazik", "deal": "anlaştık" } },
            { speaker: "shopkeeper", text: "Do you also need stamps for the postcards?", dict: { "do": "yapmak", "need": "ihtiyaç duymak", "stamps": "pullar" } },
            { speaker: "deniz", text: "Yes! Do you sell stamps here?", dict: { "sell": "satmak", "here": "burada" } },
            { speaker: "shopkeeper", text: "Yes, I will give you five stamps too.", dict: { "will": "ecek", "give": "vermek", "too": "ayrıca" } },
            { speaker: "deniz", text: "Perfect. Here is the money for everything.", dict: { "perfect": "kusursuz", "is": "olmak", "money": "para", "everything": "her şey" } },
            { speaker: "shopkeeper", text: "Thank you very much!", dict: { "very": "çok", "much": "fazla" } }
        ],
        questions: [
            { q: "What item is Deniz buying?", a_en: "Postcards", a_tr: "Kartpostallar" },
            { q: "Deniz asks for a... price.", a_en: "Cheaper", a_tr: "Daha ucuz" },
            { q: "How many postcards is Deniz buying?", a_en: "Five", a_tr: "Beş" },
            { q: "How many euros will five cost?", a_en: "Four", a_tr: "Dört" },
            { q: "Deniz says 'Deal'. The offer is...", a_en: "Kind", a_tr: "Nazik" },
            { q: "What else does Deniz need?", a_en: "Stamps", a_tr: "Pullar" },
            { q: "Deniz gives the... for everything.", a_en: "Money", a_tr: "Para" }
        ]
    },
    "Step_20__Arranging_a_Ride_to_the_Airport_1._Booking_the_Taxi.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Hello. I need a taxi to the airport tomorrow.", dict: { "need": "ihtiyaç duymak", "taxi": "taksi", "tomorrow": "yarın" } },
            { speaker: "receptionist", text: "What time is your flight tomorrow?", dict: { "is": "olmak", "flight": "uçuş" } },
            { speaker: "deniz", text: "My flight is at 2:00 PM.", dict: { "is": "olmak" } },
            { speaker: "receptionist", text: "You should leave the hotel at 11:00 AM.", dict: { "should": "meli", "leave": "ayrılmak", "hotel": "otel" } },
            { speaker: "deniz", text: "Okay, please book a taxi for 11:00 AM.", dict: { "book": "ayırtmak" } },
            { speaker: "receptionist", text: "I will call the taxi company now.", dict: { "will": "ecek", "call": "aramak", "company": "şirket", "now": "şimdi" } },
            { speaker: "deniz", text: "Thank you for organizing it.", dict: { "organizing": "organize etmek" } },
            { speaker: "receptionist", text: "The driver will wait for you outside.", dict: { "will": "ecek", "wait": "beklemek", "outside": "dışarıda" } }
        ],
        questions: [
            { q: "Where does Deniz need to go tomorrow?", a_en: "Airport", a_tr: "Havaalanı" },
            { q: "What time is the flight?", a_en: "2", a_tr: "2" },
            { q: "What time should Deniz leave the hotel?", a_en: "11", a_tr: "11" },
            { q: "Deniz asks the receptionist to... a taxi.", a_en: "Book", a_tr: "Ayırtmak" },
            { q: "Who will the receptionist call?", a_en: "Company", a_tr: "Şirket" },
            { q: "Who will wait outside?", a_en: "Driver", a_tr: "Sürücü" },
            { q: "Where will the driver wait?", a_en: "Outside", a_tr: "Dışarıda" }
        ]
    },
    "Step_20__Arranging_a_Ride_to_the_Airport_2._Asking_the_Price.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Do you know how much the taxi will cost?", dict: { "do": "yapmak", "know": "bilmek", "much": "kadar", "will": "ecek", "cost": "mal olmak" } },
            { speaker: "receptionist", text: "The taxi to the airport is a fixed price.", dict: { "is": "olmak", "fixed": "sabit", "price": "fiyat" } },
            { speaker: "deniz", text: "How much is the fixed price?", dict: { "is": "olmak" } },
            { speaker: "receptionist", text: "It is forty-five euros from our hotel.", dict: { "is": "olmak", "forty": "kırk", "five": "beş" } },
            { speaker: "deniz", text: "Can I pay the driver with my card?", dict: { "can": "ebilmek", "pay": "ödemek", "card": "kart" } },
            { speaker: "receptionist", text: "Yes, the drivers carry card machines.", dict: { "carry": "taşımak", "machines": "makineler" } },
            { speaker: "deniz", text: "Great, I don't have enough cash.", dict: { "have": "sahip olmak", "enough": "yeterli", "cash": "nakit" } },
            { speaker: "receptionist", text: "You will have no problems.", dict: { "will": "ecek", "have": "sahip olmak", "problems": "sorunlar" } }
        ],
        questions: [
            { q: "What does Deniz want to know? The...", a_en: "Cost", a_tr: "Maliyet" },
            { q: "The receptionist says the price is...", a_en: "Fixed", a_tr: "Sabit" },
            { q: "How many euros is it? Forty-...", a_en: "Five", a_tr: "Beş" },
            { q: "How does Deniz want to pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What do the drivers carry?", a_en: "Machines", a_tr: "Makineler" },
            { q: "Deniz doesn't have enough...", a_en: "Cash", a_tr: "Nakit" },
            { q: "The receptionist says Deniz will have no...", a_en: "Problems", a_tr: "Sorunlar" }
        ]
    },
    "Step_20__Arranging_a_Ride_to_the_Airport_3._Help_with_Bags.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Will someone help me with my bags tomorrow?", dict: { "will": "ecek", "help": "yardım etmek", "bags": "çantalar", "tomorrow": "yarın" } },
            { speaker: "receptionist", text: "Yes, our worker will carry your bags downstairs.", dict: { "worker": "işçi", "carry": "taşımak", "downstairs": "alt kata" } },
            { speaker: "deniz", text: "My big suitcase is very heavy now.", dict: { "big": "büyük", "suitcase": "valiz", "is": "olmak", "heavy": "ağır" } },
            { speaker: "receptionist", text: "Don't worry, he is very strong.", dict: { "worry": "endişelenmek", "is": "olmak", "strong": "güçlü" } },
            { speaker: "deniz", text: "Should I call the reception when I am ready?", dict: { "should": "meli", "call": "aramak", "am": "olmak", "ready": "hazır" } },
            { speaker: "receptionist", text: "Yes, just call us from your room phone.", dict: { "just": "sadece", "call": "aramak", "phone": "telefon" } },
            { speaker: "deniz", text: "That is very helpful, thank you.", dict: { "is": "olmak", "helpful": "yardımsever" } },
            { speaker: "receptionist", text: "We are happy to help you.", dict: { "are": "olmak", "happy": "mutlu", "help": "yardım etmek" } }
        ],
        questions: [
            { q: "What does Deniz need help with?", a_en: "Bags", a_tr: "Çantalar" },
            { q: "Who will carry the bags?", a_en: "Worker", a_tr: "İşçi" },
            { q: "Deniz's suitcase is very...", a_en: "Heavy", a_tr: "Ağır" },
            { q: "The receptionist says the worker is very...", a_en: "Strong", a_tr: "Güçlü" },
            { q: "Who should Deniz call?", a_en: "Reception", a_tr: "Resepsiyon" },
            { q: "What should Deniz use to call?", a_en: "Phone", a_tr: "Telefon" },
            { q: "Deniz says 'That is very...'", a_en: "Helpful", a_tr: "Yardımsever" }
        ]
    },
    "Step_20__Arranging_a_Ride_to_the_Airport_4._Early_Checkout.mp3": {
        dialogue: [
            { speaker: "deniz", text: "My taxi is very early, at 4:00 AM.", dict: { "taxi": "taksi", "is": "olmak", "early": "erken" } },
            { speaker: "receptionist", text: "The reception is open all night.", dict: { "is": "olmak", "open": "açık", "night": "gece" } },
            { speaker: "deniz", text: "Can I pay my hotel bill tonight?", dict: { "can": "ebilmek", "pay": "ödemek", "bill": "hesap", "tonight": "bu gece" } },
            { speaker: "receptionist", text: "Yes, you can pay now to save time tomorrow.", dict: { "can": "ebilmek", "pay": "ödemek", "save": "kurtarmak", "time": "zaman" } },
            { speaker: "deniz", text: "Okay, here is my card for the room.", dict: { "is": "olmak", "card": "kart" } },
            { speaker: "receptionist", text: "Thank you. You are all paid.", dict: { "are": "olmak", "paid": "ödendi" } },
            { speaker: "deniz", text: "Tomorrow I will just leave the key and go.", dict: { "will": "ecek", "leave": "bırakmak", "key": "anahtar", "go": "gitmek" } },
            { speaker: "receptionist", text: "Yes, just drop the key on the desk.", dict: { "drop": "bırakmak", "desk": "masa" } }
        ],
        questions: [
            { q: "Deniz's taxi is very...", a_en: "Early", a_tr: "Erken" },
            { q: "What time is the taxi?", a_en: "4", a_tr: "4" },
            { q: "What does Deniz want to pay?", a_en: "Bill", a_tr: "Hesap" },
            { q: "Paying now will save... tomorrow.", a_en: "Time", a_tr: "Zaman" },
            { q: "What does Deniz give to pay?", a_en: "Card", a_tr: "Kart" },
            { q: "What will Deniz leave tomorrow?", a_en: "Key", a_tr: "Anahtar" },
            { q: "Where will Deniz drop the key?", a_en: "Desk", a_tr: "Masa" }
        ]
    },
    "Step_20__Arranging_a_Ride_to_the_Airport_5._Saying_Goodbye.mp3": {
        dialogue: [
            { speaker: "receptionist", text: "Your taxi is here, sir.", dict: { "is": "olmak", "here": "burada" } },
            { speaker: "deniz", text: "Thank you. I had a very nice stay.", dict: { "had": "sahiptim", "nice": "güzel", "stay": "konaklama" } },
            { speaker: "receptionist", text: "We hope to see you again next year.", dict: { "hope": "umut etmek", "see": "görmek", "again": "tekrar", "next": "gelecek", "year": "yıl" } },
            { speaker: "deniz", text: "Yes, the city is beautiful. I will come back.", dict: { "is": "olmak", "beautiful": "güzel", "will": "ecek", "come": "gelmek", "back": "geri" } },
            { speaker: "receptionist", text: "Have a safe flight home.", dict: { "have": "sahip olmak", "safe": "güvenli", "flight": "uçuş", "home": "ev" } },
            { speaker: "deniz", text: "Thank you for all your help this week.", dict: { "help": "yardım", "week": "hafta" } },
            { speaker: "receptionist", text: "Goodbye, take care!", dict: { "goodbye": "hoşçakal", "take": "almak", "care": "dikkat" } },
            { speaker: "deniz", text: "Goodbye!", dict: { "goodbye": "hoşçakal" } }
        ],
        questions: [
            { q: "What vehicle is here?", a_en: "Taxi", a_tr: "Taksi" },
            { q: "Deniz had a very... stay.", a_en: "Nice", a_tr: "Güzel" },
            { q: "The receptionist hopes to see Deniz next...", a_en: "Year", a_tr: "Yıl" },
            { q: "Deniz says the city is...", a_en: "Beautiful", a_tr: "Güzel" },
            { q: "The receptionist wishes a... flight.", a_en: "Safe", a_tr: "Güvenli" },
            { q: "Deniz thanks them for their...", a_en: "Help", a_tr: "Yardım" },
            { q: "The receptionist says 'Take...'", a_en: "Care", a_tr: "Dikkat/Kendine iyi bak" }
        ]
    },
    "Step_21__Conversation_with_the_Driver_1._Confirming_the_Destination.mp3": {
        dialogue: [
            { speaker: "driver", text: "Hello, sir. Are we going to the airport?", dict: { "are": "olmak", "going": "gidiyoruz", "airport": "havaalanı" } },
            { speaker: "deniz", text: "Yes, to the main international airport, please.", dict: { "main": "ana", "international": "uluslararası" } },
            { speaker: "driver", text: "Which airline are you flying with today?", dict: { "which": "hangi", "airline": "havayolu", "are": "olmak", "flying": "uçmak" } },
            { speaker: "deniz", text: "I am flying with British Airways.", dict: { "am": "olmak", "flying": "uçmak", "british": "İngiliz" } },
            { speaker: "driver", text: "Okay, I will take you to Terminal 2.", dict: { "will": "ecek", "take": "götürmek", "terminal": "terminal" } },
            { speaker: "deniz", text: "Thank you. Let's go.", dict: { "let": "izin vermek", "go": "gitmek" } },
            { speaker: "driver", text: "Buckle your seatbelt, please.", dict: { "buckle": "bağlamak", "seatbelt": "emniyet kemeri" } },
            { speaker: "deniz", text: "Done. I am ready.", dict: { "done": "bitti", "am": "olmak", "ready": "hazır" } }
        ],
        questions: [
            { q: "Where are they going?", a_en: "Airport", a_tr: "Havaalanı" },
            { q: "Is it the local or international airport?", a_en: "International", a_tr: "Uluslararası" },
            { q: "What does the driver ask about? The...", a_en: "Airline", a_tr: "Havayolu" },
            { q: "What terminal are they going to?", a_en: "2", a_tr: "2" },
            { q: "What must Deniz buckle?", a_en: "Seatbelt", a_tr: "Emniyet kemeri" },
            { q: "Deniz says 'Let's...'", a_en: "Go", a_tr: "Gitmek" },
            { q: "Deniz says 'I am...'", a_en: "Ready", a_tr: "Hazır" }
        ]
    },
    "Step_21__Conversation_with_the_Driver_2._Talking_about_Traffic.mp3": {
        dialogue: [
            { speaker: "deniz", text: "Is the traffic bad today?", dict: { "is": "olmak", "traffic": "trafik", "bad": "kötü" } },
            { speaker: "driver", text: "No, the roads are very clear right now.", dict: { "are": "olmak", "roads": "yollar", "clear": "açık", "right": "hemen", "now": "şimdi" } },
            { speaker: "deniz", text: "That is good. I don't want to be late.", dict: { "is": "olmak", "good": "iyi", "want": "istemek", "be": "olmak", "late": "geç" } },
            { speaker: "driver", text: "We will arrive in thirty minutes.", dict: { "will": "ecek", "arrive": "varmak", "thirty": "otuz", "minutes": "dakika" } },
            { speaker: "deniz", text: "You drive very smoothly.", dict: { "drive": "sürmek", "very": "çok", "smoothly": "pürüzsüzce" } },
            { speaker: "driver", text: "Thank you. I have been a driver for ten years.", dict: { "have": "sahip olmak", "been": "olmak", "driver": "sürücü", "ten": "on", "years": "yıllar" } },
            { speaker: "deniz", text: "I can tell. It is a relaxing ride.", dict: { "can": "ebilmek", "tell": "söylemek", "is": "olmak", "relaxing": "rahatlatıcı", "ride": "yolculuk" } },
            { speaker: "driver", text: "Sit back and enjoy the view.", dict: { "sit": "oturmak", "enjoy": "keyfini çıkarmak", "view": "manzara" } }
        ],
        questions: [
            { q: "Deniz asks if the... is bad.", a_en: "Traffic", a_tr: "Trafik" },
            { q: "The driver says the roads are...", a_en: "Clear", a_tr: "Açık" },
            { q: "Deniz doesn't want to be...", a_en: "Late", a_tr: "Geç" },
            { q: "How many minutes until they arrive?", a_en: "Thirty", a_tr: "Otuz" },
            { q: "Deniz says the driver drives...", a_en: "Smoothly", a_tr: "Pürüzsüzce" },
            { q: "Deniz says it is a... ride.", a_en: "Relaxing", a_tr: "Rahatlatıcı" },
            { q: "The driver says 'enjoy the...'", a_en: "View", a_tr: "Manzara" }
        ]
    },
    "Step_21__Conversation_with_the_Driver_3._Talking_about_the_Trip.mp3": {
        dialogue: [
            { speaker: "driver", text: "Did you enjoy your time in our city?", dict: { "did": "yaptı", "enjoy": "keyfini çıkarmak", "time": "zaman", "city": "şehir" } },
            { speaker: "deniz", text: "Yes, it was wonderful. The food was great.", dict: { "was": "idi", "wonderful": "harika", "food": "yemek", "great": "harika" } },
            { speaker: "driver", text: "What was your favorite place?", dict: { "was": "idi", "favorite": "favori", "place": "yer" } },
            { speaker: "deniz", text: "I really loved the big art museum.", dict: { "really": "gerçekten", "loved": "sevdim", "big": "büyük", "art": "sanat", "museum": "müze" } },
            { speaker: "driver", text: "Ah, that is a very famous museum.", dict: { "is": "olmak", "famous": "ünlü" } },
            { speaker: "deniz", text: "I took many photos of the paintings.", dict: { "took": "çektim", "many": "birçok", "photos": "fotoğraflar", "paintings": "tablolar" } },
            { speaker: "driver", text: "You must show them to your friends at home.", dict: { "must": "zorunda", "show": "göstermek", "friends": "arkadaşlar", "home": "ev" } },
            { speaker: "deniz", text: "I definitely will!", dict: { "definitely": "kesinlikle", "will": "ecek" } }
        ],
        questions: [
            { q: "Did Deniz enjoy the time in the...?", a_en: "City", a_tr: "Şehir" },
            { q: "What was wonderful? The...", a_en: "Food", a_tr: "Yemek" },
            { q: "What kind of museum did Deniz love?", a_en: "Art", a_tr: "Sanat" },
            { q: "The driver says the museum is...", a_en: "Famous", a_tr: "Ünlü" },
            { q: "What did Deniz take photos of?", a_en: "Paintings", a_tr: "Tablolar" },
            { q: "Who should Deniz show the photos to?", a_en: "Friends", a_tr: "Arkadaşlar" },
            { q: "Deniz says 'I... will'.", a_en: "Definitely", a_tr: "Kesinlikle" }
        ]
    },
    "Step_21__Conversation_with_the_Driver_4._Arriving_at_the_Airport.mp3": {
        dialogue: [
            { speaker: "driver", text: "Look, we can see the airplanes now.", dict: { "look": "bakmak", "can": "ebilmek", "see": "görmek", "airplanes": "uçaklar" } },
            { speaker: "deniz", text: "Oh yes, the airport is huge.", dict: { "is": "olmak", "huge": "kocaman", "airport": "havaalanı" } },
            { speaker: "driver", text: "Which door do you want me to stop at?", dict: { "do": "yapmak", "want": "istemek", "stop": "durmak", "door": "kapı" } },
            { speaker: "deniz", text: "Please stop near the Departure doors.", dict: { "stop": "durmak", "near": "yakınında", "departure": "gidiş", "doors": "kapılar" } },
            { speaker: "driver", text: "I will stop right in front of the gate.", dict: { "will": "ecek", "stop": "durmak", "right": "hemen", "front": "ön", "gate": "kapı" } },
            { speaker: "deniz", text: "That is perfect. Thank you.", dict: { "is": "olmak", "perfect": "kusursuz" } },
            { speaker: "driver", text: "We are stopping now.", dict: { "are": "olmak", "stopping": "duruyoruz" } },
            { speaker: "deniz", text: "I will get my wallet ready.", dict: { "will": "ecek", "get": "almak", "wallet": "cüzdan", "ready": "hazır" } }
        ],
        questions: [
            { q: "What can they see now?", a_en: "Airplanes", a_tr: "Uçaklar" },
            { q: "Deniz says the airport is...", a_en: "Huge", a_tr: "Kocaman" },
            { q: "The driver asks which... to stop at.", a_en: "Door", a_tr: "Kapı" },
            { q: "Deniz wants the... doors.", a_en: "Departure", a_tr: "Gidiş" },
            { q: "The driver will stop in... of the gate.", a_en: "Front", a_tr: "Önünde" },
            { q: "Deniz says 'That is...'", a_en: "Perfect", a_tr: "Kusursuz" },
            { q: "What will Deniz get ready?", a_en: "Wallet", a_tr: "Cüzdan" }
        ]
    },
    "Step_21__Conversation_with_the_Driver_5._Paying_and_Leaving.mp3": {
        dialogue: [
            { speaker: "driver", text: "The price is forty-five euros.", dict: { "price": "fiyat", "is": "olmak", "forty": "kırk", "five": "beş", "euros": "avro" } },
            { speaker: "deniz", text: "Here is my credit card to pay.", dict: { "is": "olmak", "credit": "kredi", "card": "kart", "pay": "ödemek" } },
            { speaker: "driver", text: "The machine says Approved. Thank you.", dict: { "machine": "makine", "says": "diyor", "approved": "onaylandı" } },
            { speaker: "deniz", text: "Can you open the trunk for my bag?", dict: { "can": "ebilmek", "open": "açmak", "trunk": "bagaj", "bag": "çanta" } },
            { speaker: "driver", text: "Yes, I will get it out for you now.", dict: { "will": "ecek", "get": "almak", "out": "dışarı" } },
            { speaker: "deniz", text: "Thank you very much for the ride.", dict: { "very": "çok", "much": "fazla", "ride": "yolculuk" } },
            { speaker: "driver", text: "Have a safe flight back home!", dict: { "have": "sahip olmak", "safe": "güvenli", "flight": "uçuş", "back": "geri", "home": "ev" } },
            { speaker: "deniz", text: "Goodbye, have a good day.", dict: { "goodbye": "hoşçakal", "have": "sahip olmak", "good": "iyi", "day": "gün" } }
        ],
        questions: [
            { q: "What is the price?", a_en: "Forty-five", a_tr: "Kırk beş" },
            { q: "What does Deniz use to pay?", a_en: "Card", a_tr: "Kart" },
            { q: "The machine says the card is...", a_en: "Approved", a_tr: "Onaylandı" },
            { q: "What part of the car must the driver open?", a_en: "Trunk", a_tr: "Bagaj" },
            { q: "Deniz thanks the driver for the...", a_en: "Ride", a_tr: "Yolculuk" },
            { q: "The driver wishes Deniz a... flight.", a_en: "Safe", a_tr: "Güvenli" },
            { q: "Deniz says 'Have a good...'", a_en: "Day", a_tr: "Gün" }
        ]
    }
};

const lessonData = { ...part1, ...part2, ...part3 };
