const splash = document.getElementById('splash-screen'), instr = document.getElementById('instructions-screen'),
      lobbyScreen = document.getElementById('lobby-screen'), lobbyContainer = document.getElementById('lobby-container'), 
      subScreen = document.getElementById('sub-screen'), subContainer = document.getElementById('sub-container'),
      playerZone = document.getElementById('player-zone'), audio = document.getElementById('audio-player'), 
      transcript = document.getElementById('transcript-box'), popup = document.getElementById('translation-popup'), 
      gameZone = document.getElementById('game-zone'), gameBoard = document.getElementById('game-board'), 
      feedbackArea = document.getElementById('quiz-feedback-area');

let wordBucket = []; let currentQ = 0; let attempts = 0; let totalScore = 0; let firstCard = null;
let currentLessonData = null; 

// NAVIGATION
document.getElementById('btn-start').onclick = () => { splash.classList.add('hidden'); instr.classList.remove('hidden'); };
document.getElementById('btn-enter').onclick = () => { 
    instr.classList.add('hidden'); lobbyScreen.classList.remove('hidden'); 
    if (typeof lessonData === 'undefined') {
        lobbyContainer.innerHTML = "<h2 style='color:#ff4444;'>DATA ERROR: Check data.js syntax!</h2>";
    } else {
        generateLobby(); 
    }
};

document.getElementById('btn-back-grid').onclick = () => { 
    subScreen.classList.add('hidden'); lobbyScreen.classList.remove('hidden'); 
};
document.getElementById('btn-back-sub').onclick = () => { 
    playerZone.classList.add('hidden'); subScreen.classList.remove('hidden'); 
    transcript.classList.add('hidden'); gameZone.classList.add('hidden'); 
    audio.pause(); currentQ = 0; totalScore = 0; attempts = 0; currentLessonData = null;
};

// AUDIO CONTROLS
document.getElementById('ctrl-play').onclick = () => { audio.play().catch(e => console.log("Play failed", e)); };
document.getElementById('ctrl-pause').onclick = () => audio.pause();
document.getElementById('ctrl-stop').onclick = () => { audio.pause(); audio.currentTime = 0; };

// GET ICON FOR CATEGORY
function getCategoryIcon(catName) {
    if(catName.includes("Airport Check-In")) return "✈️";
    if(catName.includes("Boarding")) return "💺";
    if(catName.includes("In-Flight")) return "🍽️";
    if(catName.includes("Passport")) return "🛂";
    if(catName.includes("Customs")) return "🛃";
    if(catName.includes("Transfer")) return "🚕";
    if(catName.includes("Hotel Check-In")) return "🏨";
    if(catName.includes("Complaints")) return "😠";
    if(catName.includes("Arriving")) return "🍷";
    if(catName.includes("Ordering Food")) return "🍲";
    if(catName.includes("Restaurant Problems")) return "🤦";
    if(catName.includes("Check")) return "💳";
    if(catName.includes("Directions")) return "🗺️";
    if(catName.includes("Renting")) return "🚗";
    if(catName.includes("Medical")) return "🚑";
    if(catName.includes("Pharmacy")) return "💊";
    if(catName.includes("Lost Item")) return "👮";
    if(catName.includes("Hotel")) return "🛏️";
    if(catName.includes("Shopping")) return "🛍️";
    if(catName.includes("Driver")) return "🗣️";
    return "📁";
}

// GENERATE GRID LOBBY
function generateLobby() {
    lobbyContainer.innerHTML = "";
    const groups = {};
    
    Object.keys(lessonData).forEach(fn => {
        let catMatch = fn.match(/^(.*?)_\d+\._/);
        let catName = catMatch ? catMatch[1].replace(/__/g, ": ").replace(/_/g, " ") : "Category";
        let subMatch = fn.match(/_(\d+\._.*)\.mp3$/);
        let subName = subMatch ? subMatch[1].replace(/_/g, " ") : fn;
        
        if (!groups[catName]) groups[catName] = [];
        groups[catName].push({ file: fn, title: subName });
    });

    Object.keys(groups).forEach(cat => {
        const catBtn = document.createElement('div');
        catBtn.className = 'lobby-card';
        
        catBtn.innerHTML = `
            <div class="lobby-icon">${getCategoryIcon(cat)}</div>
            <div class="lobby-text">
                <span class="lobby-title">${cat}</span>
                <span class="lobby-sub">Click to preview 5 lessons ↓</span>
            </div>
        `;
        
        catBtn.onclick = () => openSubMenu(cat, groups[cat]);
        lobbyContainer.appendChild(catBtn);
    });
}

// OPEN SUB MENU
function openSubMenu(catTitle, lessons) {
    lobbyScreen.classList.add('hidden');
    subScreen.classList.remove('hidden');
    document.getElementById('sub-title').innerText = catTitle;
    subContainer.innerHTML = "";

    lessons.forEach((lesson, index) => {
        const btn = document.createElement('div'); 
        btn.className = 'station-tile';
        btn.innerHTML = `<b>${index + 1}.</b> ${lesson.title}`;
        btn.onclick = () => { 
            subScreen.classList.add('hidden'); 
            playerZone.classList.remove('hidden'); 
            document.getElementById('now-playing-title').innerText = lesson.title; 
            
            // LOAD AUDIO & APPLY SPEED BOOST
            audio.src = lesson.file; 
            audio.oncanplay = () => { audio.playbackRate = 1.1; };

            wordBucket = []; 
            currentLessonData = lessonData[lesson.file];
        };
        subContainer.appendChild(btn);
    });
}

// DIALOGUE RENDERER
document.getElementById('btn-read').onclick = () => {
    if (currentLessonData) {
        transcript.classList.remove('hidden'); gameZone.classList.add('hidden'); transcript.innerHTML = "";
        
        currentLessonData.dialogue.forEach(line => {
            const lineDiv = document.createElement('div'); lineDiv.className = 'dialogue-line';
            const speakerSpan = document.createElement('span');
            let spkName = line.speaker.charAt(0).toUpperCase() + line.speaker.slice(1);
            speakerSpan.innerText = spkName + ": ";
            speakerSpan.className = line.speaker.toLowerCase() === 'deniz' ? 'speaker-traveler' : 'speaker-official';
            lineDiv.appendChild(speakerSpan);

            line.text.split(" ").forEach(w => {
                const span = document.createElement('span'); 
                const clean = w.toLowerCase().replace(/[^a-z0-9ğüşöçı]/gi, "");
                span.innerText = w + " "; span.className = "clickable-word";
                span.onclick = (e) => {
                    const tr = line.dict[clean];
                    if(tr) {
                        if (!wordBucket.some(p => p.en === clean)) { wordBucket.push({en: clean, tr: tr}); }
                        popup.innerText = tr; popup.style.left = `${e.clientX}px`; popup.style.top = `${e.clientY - 50}px`;
                        popup.classList.remove('hidden'); setTimeout(() => popup.classList.add('hidden'), 2000);
                    }
                };
                lineDiv.appendChild(span);
            });
            transcript.appendChild(lineDiv);
        });
        audio.play().catch(e => console.log(e));
    }
};

// MATCH GAME
document.getElementById('btn-game').onclick = () => {
    if (!currentLessonData) return;
    transcript.classList.add('hidden'); gameZone.classList.remove('hidden'); feedbackArea.innerHTML = "";
    gameBoard.innerHTML = ""; firstCard = null; gameBoard.style.display = "grid";
    
    let set = [...wordBucket]; let fullDict = {};
    currentLessonData.dialogue.forEach(line => { Object.assign(fullDict, line.dict); });
    
    const keys = Object.keys(fullDict);
    for (let k of keys) { if (set.length >= 8) break; if (!set.some(p => p.en === k)) set.push({en: k, tr: fullDict[k]}); }

    let trList = set.map(p => ({ text: p.tr, match: p.en })).sort((a,b) => a.text.localeCompare(b.text, 'tr'));
    let enList = set.map(p => ({ text: p.en, match: p.tr })).sort((a,b) => a.text.localeCompare(b.text, 'en'));
    
    let deck = []; for(let i=0; i<trList.length; i++) { deck.push(trList[i]); deck.push(enList[i]); }

    deck.forEach(card => {
        const div = document.createElement('div'); div.className = 'game-card'; div.innerText = card.text;
        div.onclick = () => {
            if (div.classList.contains('correct') || div.classList.contains('selected')) return;
            if (firstCard) {
                if (firstCard.innerText.toLowerCase() === card.match.toLowerCase() || firstCard.innerText === card.match) {
                    div.classList.add('correct'); firstCard.classList.add('correct'); firstCard.classList.remove('selected'); firstCard = null;
                } else {
                    div.classList.add('wrong'); setTimeout(() => { div.classList.remove('wrong'); firstCard.classList.remove('selected'); firstCard = null; }, 500);
                }
            } else { firstCard = div; div.classList.add('selected'); }
        };
        gameBoard.appendChild(div);
    });
};

// BOWLING QUIZ
document.getElementById('btn-bowling').onclick = () => {
    transcript.classList.add('hidden'); gameZone.classList.remove('hidden'); gameBoard.style.display = "none";
    if (currentLessonData) runQuiz(currentLessonData);
};

function runQuiz(lesson) {
    if (currentQ >= 7) { feedbackArea.innerHTML = `<h1 style="color:#ccff00; font-size: 50px;">FINISHED!</h1><h2 style="font-size: 40px;">FINAL SCORE: ${totalScore}</h2>`; return; }
    const qData = lesson.questions[currentQ];
    
    feedbackArea.innerHTML = `
        <div id="quiz-container">
            <div class="score-badge">SCORE: ${totalScore} | Q: ${currentQ+1}/7</div>
            <button id="btn-hear-q" class="mode-btn neon-green" style="margin-bottom:20px;">👂 LISTEN</button>
            <div id="quiz-ui" class="hidden">
                <button id="btn-speak" class="mic-btn">🎤</button>
                <div id="res-area"></div>
            </div>
        </div>
    `;
    document.getElementById('btn-hear-q').onclick = () => {
        const utter = new SpeechSynthesisUtterance(qData.q);
        utter.onend = () => document.getElementById('quiz-ui').classList.remove('hidden');
        window.speechSynthesis.speak(utter);
    };
    document.getElementById('btn-speak').onclick = () => {
        const btn = document.getElementById('btn-speak'); btn.classList.add('active');
        const rec = new (window.webkitSpeechRecognition || window.SpeechRecognition)();
        rec.lang = 'en-US'; rec.start();
        rec.onresult = (e) => {
            btn.classList.remove('active');
            const res = e.results[0][0].transcript.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
            const ans = qData.a_en.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
            
            if (res === ans) {
                let pts = (attempts === 0) ? 20 : 15; totalScore += pts;
                showRes(true, attempts === 0 ? "STRIKE! (+20)" : "SPARE! (+15)", qData, lesson);
            } else {
                attempts++;
                if (attempts === 1) { showRes(false, "MISS! TRY FOR SPARE", qData, lesson, true); }
                else { showRes(false, "MISS! (0 pts)", qData, lesson); }
            }
        };
        rec.onerror = () => btn.classList.remove('active');
    };
}

function showRes(isCorrect, msg, qData, lesson, retry=false) {
    const area = document.getElementById('res-area');
    area.innerHTML = `<h1 style="color:${isCorrect?'#39ff14':'#f44'}; font-size: 50px;">${msg}</h1>`;
    if (!retry || isCorrect) {
        area.innerHTML += `<p class="quiz-q-text">Q: ${qData.q}</p>
        <p class="quiz-a-text">EN: ${qData.a_en}</p>
        <p style="color:#888; font-size:30px; font-weight: bold;">TR: ${qData.a_tr}</p>
        <button id="btn-nxt" class="action-btn-large" style="margin-top:30px;">NEXT QUESTION ⮕</button>`;
        document.getElementById('btn-nxt').onclick = () => { currentQ++; attempts=0; runQuiz(lesson); };
    } else {
        area.innerHTML += `<button id="btn-re" class="action-btn-large" style="margin-top:30px;">RETRY</button>`;
        document.getElementById('btn-re').onclick = () => { area.innerHTML = ""; };
    }
}

document.getElementById('btn-blind').onclick = () => { 
    transcript.classList.add('hidden'); 
    gameZone.classList.add('hidden'); 
    audio.play().catch(e => console.log(e)); 
};
