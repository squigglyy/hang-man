function load() {
    const wordArray = ["join", "friends", "gay", "shirt", "sack", "tree", "homophobia","engulf","steve","frog","dilf","cock","daddy","queef"];

    let random = Math.floor((Math.random() * 7));

    let randomWord = wordArray[random];

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
        control(tile) 
          
    }   
    function control(tile) {
    
          
    
    }
}


