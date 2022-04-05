let count = 5;

function load() {

    let wordArray = ["acrimonious","allegiance","ameliorate","annihilate","antiseptic","articulate","authoritative","benefactor","boisterous","breakthrough","carcinogenic","censorious","chivalrous","collarbone","commendable","compendium","comprehensive","conclusive","conscientious","considerate","deferential","denouement","determinate","diffidence","disruption","earthenware","elliptical","entanglement","escutcheon","extinguish","extradition","fastidious","flamboyant","forethought","forthright","gregarious","handmaiden","honeysuckle","hypocritical","illustrious","infallible","lumberjack","mischievous","mollycoddle","nimbleness","nonplussed","obliterate","obsequious","obstreperous","opalescent","ostensible","pandemonium","paraphernalia","pawnbroker","pedestrian","peremptory","perfunctory","pernicious","perpetrate","personable","pickpocket","poltergeist","precipitous","predicament","preposterous","presumptuous","prevaricate","propensity","provisional","pugnacious","ramshackle","rattlesnake","reciprocate","recrimination","redoubtable","relinquish","remonstrate","repository","reprehensible","resolution","resplendent","restitution","retaliation","retribution","saccharine","salubrious","skulduggery","skyscraper","soothsayer","tearjerker","transcribe","turpentine","unassuming","underscore","undertaker","underwrite","unobtrusive","vernacular","waterfront","watertight","whimsical","wriggle","yokel","zealous","zestful","zodiac"];
    console.log(wordArray.length);

    let random = Math.floor((Math.random() * 106));
    document.getElementById("lives").innerHTML = count;
    let randomWord = wordArray[random];
    let arr = randomWord.split("");
    let body = document.getElementById("body");
    body.innerHTML += randomWord;
    for (let i = 0; i < randomWord.length; i++) {
        const letter = document.createElement("div");                                                                                                                                                                                                                                                               
        letter.id = i; 
        letter.className = "character";
        document.getElementById("guess").appendChild(letter);
        
    }

    const pixels = document.querySelectorAll('.letter');
    
    pixels.forEach(tile => {  
        tile.addEventListener('click', click, { once: true })
    })

    function click(expected) {
        const tile = expected.target;
        let letter = tile.innerHTML
        
        if (count != 0) {
            control(tile, letter) 
        }
    }   


    
    function slideshow(count) {
        let img = document.getElementById("image");
        console.log("wrong");
        if (count == 5) {
            img.src = "img/1.png";
        } else if (count == 4) {
            img.src = "img/2.png";
        } else if (count == 3) {
            img.src = "img/3.png";
        } else if (count == 2) {
            img.src = "img/4.png";
        } else if (count == 1) {
            img.src = "img/5.png";
        } else if (count == 0) {
            img.src = "img/6.png";
        }
    }

    function control(tile, letter){
        //console.log(randomWord.indexOf(letter));
        console.log(arr) 
        for (let i = 0; i < randomWord.length; i++) {
            if(arr[i] === letter){
                console.log("correct");
                tile.style.backgroundColor = "lightgray";
                tile.style.color = "white";
                document.getElementById(i).innerHTML = letter;
            }
            
        }
        let j = (randomWord.indexOf(letter));
        if (j === -1) {
            lives -= 1;
            console.log("wrong");
            count -= 1
            document.getElementById("lives").innerHTML = count;
            tile.style.backgroundColor = "lightgray";
            tile.style.color = "white";
            slideshow(count);
  
        }    
        
    }
}


