class Hangman{                                                                       //1.GLOBAL SCOPE ? ?
    constructor(wordList ){                                                          //1.wordlist to past through
        this.wordList = [...wordList]                                                //1.word list that we will use (5) we were getting just 1 letter and not the whole word in console.. do the spread operator with[...] since we aere copying the wordlist array? --but we are still getting 1 letter
        this.secretWord=''                                                           //1.secret word will be empty at first ( dont put a space!)
        this.numberGuesses= 6                                                        //1.number of tries
        this.wrongGuesses=[]                                                         //1.empty array
        this.correctGuessses=[]                                                      //1.empthy array []... WHY USE AN ARRAY??
    }

    pickSecretWord(){                                                                 //1.method which is a function(){} goes inside the classlist. this method to pick secret word..from wordslist in the array of words
                                                                                       //5. remove [] const return =this.secret word ]...on line 13 and do this.secretword= this.wordlist....

        this.secretWord= this.wordList[Math.floor(Math.random()*this.wordList.length)]   //1.so this will randomly choose a word from the wordslist
        console.log(this.wordList[Math.floor(Math.random()*this.wordList.length)])       //2 style css a bit as well 47 min and then print out the divs for the alpah key-- the dom manipulation will be in the index js file
                                                                                         //1.check console to see if it's working..make a separate  new file for alpahabetlist=[] and wordlist=[] script since they are long-- to clean it up..NEEDS TO LOAD FIRST ON HTML LINK
        console.log('wordList ',this.wordList)                                           //5 console logging to see why we are only getting 1 letter intead of the whole word [its because we were doing alphabet list and not the word list LOLOL] ...console 'wordlist' (whywordslist)

        
    }
    
    resetGame(){
        this.numberGuesses=6
        this.wrongGuesses=[]
        this.correctGuessses=[]
    }

}





