
/*class Card {
    constructor(type, value){
        this.type = type;
        this.value = value;
    }
}*/
class Card {
    constructor(rank, suit, value){
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this._cards = [];
    };

    get cards(){
        return this._cards;
    }

    buildDeck(){
        this.populate();
        this.shuffle();
        return this._cards;

    }
/*
    populate() {
        const suites = ['Spades', 'Hearts', 'Clubs', 'Diamonds']
        const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        // loops through the different suites
        for ( let x = 0; x < suites.length; x++ ){                                    
            // loops through the 13 values
            for ( let i = 0; i < 13; i++ ){                                              
             this._cards.push(( type[i + ' of ' + suites[x]]), (value[i]));   
            }
        }
         
    }    
*/
populate() {
    const suites = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suites.length; i++){
        for (let j = 0; j < ranks.length; j ++){
            this._cards.push(new Card(ranks[j], suites[i], value[j]));
            //prints the third element 52 times, theres cards in the deck
            console.log(this._cards[2]);  
        }
    }
}


    shuffle(){
        if (this._cards.length > 0){
            //https//flaviocopes.com
            let shuffledDeck = this._cards.sort(()=> Math.random()- 0.5)
            this._cards = [shuffledDeck];
            console.log(this.cards[1]);
        }
    }
}      

class Player{
    constructor(name){
        this.points = 0;
        this.playerDeck = [];
        this.playerName = name;
    }
    get name() {
        return this.name
    }
    get deck(){
        return this.playerDeck
    }
    get score(){
        return this.points
    }
    set deck(newDeck){
        if (Array.isArray(newDeck)){
            this.playerDeck = newDeck;
        }
    }
    set score(newPoints){
        if(!isNaN(newPoints)){
            this.points = newPoints;
        }
    }
}
//logging the deck to the console to see if it works
   const cards = new Deck().buildDeck();   
   console.log(cards);
class GameMaster{
    constructor(){
        this.player = [];
        this.deck = [];    
    }

start(){
    
    let input = prompt('0 - exit; 1 - play');
    while( input !='0'){
        switch (input){
            case'0':
            exit;
            case'1':
            this.createGame();
            break;
        }
        input = prompt('0 - exit; 1 - play')
    }
}

createGame() {
        // create 2 instances of Player
        this.player[0] = new Player('Tom');
        this.player[1] = new Player('Jerry');
        
        //create 1 instance of Deck and populate cards
        //returns array of ready to go cards
        const cards = new Deck().buildDeck();                              
        
        //assign 26 cards to each player
        this.player[0].deck = [...cards.slice(0,26)];
        this.player[1].deck = [...cards.slice(26,52)];
    
        //loop through player cards and assign points
        console.log(this.player[0]);
        console.log('**Dealing Hands**');
        for (let i = 0; i < this.player[0].deck.lenght; i++){
            if (this.player[0].deck[i].value > this.player[1].deck[i].value) {
                this.player[0].points +=1
                // who is the winner of each round?
                let winningHand = `${this.player[0].deck[i].rank} of ${this.player[0].deck[i].suit}`;
                console.log(`${this.player[0].name} won with a ${winningHand}`);
            }else{
                this.player[1].points +=1;
                let winningHand = `${this.player[1].deck[i].rank} of ${this.player[0].deck.suit}`;
                console.log(`${this.player[1].name} won with a ${winningHand}`);
                
            }
           
        }
        console.log(this.player[0]);
        console.log(this.player[0].deck[1]);
        //show game winner
            console.log('**All Hands Dealt**')
                if(this.player[0].points > this.player[1].points){
                    console.log(`${this.player[0].name} WON WAR with a score of ${this.player[0].points}`);
                }else if (this.player[0].points < this.player[1].points){
                    console.log(`${this.player[1].name} WON WAR with a score of ${this.player[1].points}`);
                }else{
                    console.log('Tie Game!')
        }
    }
}

const game = new GameMaster();
game.start();



