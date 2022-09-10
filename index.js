
    const suites = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let i = 0; i < suites.length; i++){
        for (let j = 0; j < ranks.length; j ++){
            this._cards.push(new Card(ranks[j], suites[i], value[j]));
            console.log(this._cards[2]);  //prints the third element 52 times, theres cards in the deck
        }
    


    function shuffle()
        if (this._cards.length > 0){
            //https//flaviocopes.com
            let shuffledDeck = this._cards.sort(()=> Math.random()- 0.5)
            this._cards = [shuffledDeck];
            console.log(this.cards[1]);
        }
    }
    
