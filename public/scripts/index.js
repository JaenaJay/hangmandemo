window.addEventListener('load',()=>{                                              //3.this is where dom manipulation goes.. add an even listener
    console.log('the scripts are connected')
    
    
    const game= new Hangman(wordsList)                                             //5.initialize game class ..was alphabetlist at first ..5 but it kept returning alphabets on the console log
                                                                                   //5 const secretWord=game.pickSecretWord()  
    const gameMessages= document.querySelector('.game__container--game--messages') 
    const hangmanImage= document.querySelector('#hangman-image')
    const alphaKeyContainer =document.querySelector('.game__container--body--left-alphakey-container')
    const newButton= document.querySelector('#btn__new-word')
    const wrongGuessesContainer=document.querySelector(".game__container--body--right-wrong-guess-container")
    
    const btnWord = document.querySelector('#btn__new-word')                          // 6 click event listener for new-owrd/new game button 
    btnWord.addEventListener('click',() =>{                                           // code to make window listen for a click event that selects id button/var btnWord and runs the function below 
        game.resetGame()
        renderAlphaKey()                                                            //3. once alpha key is done. put it up here in the event /load 4. now make a class in css called letter-box to style our alphabet keys=letter box 1:08
                                                                                    //5. now make the underscores on index js called render secret word 1:14
        game.pickSecretWord()                                                       //5. call this line out first
        renderSecretWord()                                                          //5. call render secret word after pick secret word (used to be all the way up in lines above and now here in const btn)
        gameMessages.innerHTML=''                                                    //removes game over message
        const gameBody= document.querySelector('.game__container-body')              //6. We want to hide everthing below (game cont body)the button initiallly so when we click on new game button, everything below--alphabet etc will appear (the hide class will be removed//game container body will appearj) so make a var for a div ('game container body') that we want to show or hide
        gameBody.classList.remove('hidden-class')                                     // 6 on html assign new class called hidden body to game hidden body so now it has 2 classes //this line will now remove the game body/make it hidden by using remove//dont us a . in the the ('')
        const secretWord= game.secretWord                                           //5. this used to be const secretword=gamepicksecretword() which gave out an error ..but call out game.picksecretword()function fist above 
        console.log(secretWord)
        
        target.classList.add('hidden-class')   
                                    //no dot == classlist
        hangmanImage.src=`./public/images/hangman-images/hangman-1.png`                    //this will reset the image to the first image    
        wrongGuessesContainer.innerHTML=''                                                //this will remove the wrong guesses to restart
        


    })

   
    function renderSecretWord(){                                                                  //5. underscore for letters  :make a var container to hold the secret word. we get length //for each chaacter in that var. were gonna print out a div underscore and not put inner html with letter since we want it hidden 5.pt 2 thisfunction is moved into the event listener
        const container = document.querySelector('.game__container--body--left-secret-container')//3. this was in render alpha key firstmake a const container that will target div alpha key container to hold in the alphakeys. use queryselector with a ( '.') to targeet this div class... now use loop ..[[ we dot have a secret word yet so we'll do tempoary arr]]
        const arr= game.secretWord.split('')                                                     //5.split for each characters ..open parenthesis and empy quotes to give me an array with each letter in secret word so we can do a forEach:arr.for each
        container.innerHTML= ''
        arr.forEach((letter,index)=>{                                                             //5. 
            const box=document.createElement('div')                                                // 5.create var box to equal a div element 
            const span=document.createElement('span')                                             //5. span added : to hide in the divs with class element display to none
            box.classList.add('hidden-box')                                                       //5.part 2: move this up here instead of having it all the  way below after contaier. append box  and now initialize game class above on event listener//5.add classlist to box [[use a dot for classlist]] and it has to be hidden box since it will be hidden(we need logic to find which letter will show..inside the div, add a span element with a letetr for the word. so if its hidden ( add a class with display to none). and if its showing, then remov the hidden class to show it!
            span.classList.add('hidden-class')                                                    //5. add hidden class to span here 
            span.innerHTML= letter.toUpperCase()                                                  //5 added this towards the end to display span's letters 
            if(letter===' '){
                box.classList.add('empty-box')
            }
            box.append(span)                                                                      //5. first append span to the box then append box to the container
            container.append(box)                                                                 //5. append box the the container
            })                                                                                    //4. css styling of each letterbox div to hold in alpha and 5. work on underscores called render secretword on index js
        if(arr.includes(' ')){
            game.correctGuessses.push(' ')

        }
    }  

    function renderWrongGuesses(){                                                                    //3.the function to render alpa key... 6 placed inside event listener as well 
                    // this was 3.line 2 at first const container=document.querySelector(.game__container--body--left-alpha-key-container)
            wrongGuessesContainer.innerHTML=''
            game.wrongGuesses.forEach((letter,index) => {                                                    //3. use a for each loop to loop through alphabet key array and instead of element, use letter for 1s parameter, and index for second since the first argument refers to the element in the array that we are looping and the index its the position (index) of the element inside of the array
            const box = document.createElement("div")                                               //3. creat var box to equal a div element
                                                                            //first this was an arrow function but its better to make a new function called check letter..and see how to send the event || checkLetter(e ) as 2nd param was not working instead of 'letter' BECAUSE IT WOULD HAVE BEEN A CALL BACK FUNCTION?  //7. we want to make this click event listener so that when user clicks on letter, it tunrsr green(background) and shows up on the letter div if its right and turns red(background) if its wrong..so put this add an event listener for this click event  here because there is a for each loop that loops through the alphabet, we created a var box- div .and this is the div that needs to receive the click een listener.
            box.classList.add('letter-box')                                                         //...3 now create a class to our div by using classlist.add no ('.')
            box.innerHTML=letter                                                                    //3. box.innerhtml to put it hidden box/va box  on html page, where letters will go in the divs..make sure to use = sign
            wrongGuessesContainer.append(box) 
                    

          });
    }

    
    function renderAlphaKey(){                                                                    //3.the function to render alpa key... 6 placed inside event listener as well 
                                                                                                    // this was 3.line 2 at first const container=document.querySelector(.game__container--body--left-alpha-key-container)
        alphaKeyContainer.innerHTML=''
        alphabetList.forEach((letter,index) => {                                                    //3. use a for each loop to loop through alphabet key array and instead of element, use letter for 1s parameter, and index for second since the first argument refers to the element in the array that we are looping and the index its the position (index) of the element inside of the array
            const box = document.createElement("div")                                               //3. creat var box to equal a div element
            box.addEventListener('click',checkLetter)      //first this was an arrow function but its better to make a new function called check letter..and see how to send the event || checkLetter(e ) as 2nd param was not working instead of 'letter' BECAUSE IT WOULD HAVE BEEN A CALL BACK FUNCTION?  //7. we want to make this click event listener so that when user clicks on letter, it tunrsr green(background) and shows up on the letter div if its right and turns red(background) if its wrong..so put this add an event listener for this click event  here because there is a for each loop that loops through the alphabet, we created a var box- div .and this is the div that needs to receive the click een listener.
            box.classList.add('letter-box')                                                         //...3 now create a class to our div by using classlist.add no ('.')
            box.innerHTML=letter                                                                    //3. box.innerhtml to put it hidden box/va box  on html page, where letters will go in the divs..make sure to use = sign
            alphaKeyContainer.append(box) 
                                                                                                    //
    
        });
    }

    function checkLetter(div){                                    //7 named check letter as a new function to be passed through render alphakey                                                                    
        const letterBox= div.target                              //7 after removing checkletter(e) in event listener above..we need to figure out what we needed to target here, we had to refresh the html, click on a letter and checked the console to see that it was "target: div.letter-box" we were looking for to target the box divs we need..and console logged to double check : where console logged <div class="letter-box">A</div> which was right.
                                                                   //7now that we know what to target, we made a variable const letterbox to assign the target , letter.target ...where letter param is now changed to div, div.target. Now we need to check if secret has letter. so we need to do a loop for each character in a secret word.. in order to do that we need before foe each we need to cobnert secret word into array by splitting it [ secretword.split('')] then we make a var that will hold the letter in the letterbox "letterKey, " do the for each((letter,index)=>{if letter})
        const letterClick =letterBox.innerHTML    
        let letterGuess= false                                      //initialize to false first ..if rigt, then = true
        console.log(letterClick)
        const secretDiv= document.querySelectorAll('.game__container--body--left-secret-container div span') //WHY DO WE NEED ANOTHER CONST?selects all divs (by adding div in class) inside secretCOnt. in order for green background and loop to work..use quey selectorALL since it will select all the divs[all the letters] in the secret container a
         
        const secretWord= game.secretWord                            //7.
        secretDiv.forEach((letter,index)=>{                                  
      //split to convrt secret word into array
           const letterKey = letter.innerHTML                             //7    a variable that will hold the letter in the letter box
           console.log(letterKey)
            if (letterClick.toUpperCase()===letterKey.toUpperCase()){      //7 we need to check using a loop if condition if letter  = letter key,  put green back grouond and reveal a letter by adding  CLaa for greenbackground.
                letterGuess=true
                secretDiv[index].classList.remove('hidden-class')           //7 removes hidden class to reveal the letter since hidden class hides secret words..query selector ALL brings an array so we need to add [index] because secret div is an array
                game.correctGuessses.push(letterClick)
            }
            
           

        })  
         if(letterGuess){
            letterBox.classList.add('green-background')                    //7 letterbox classlisst 
            if (secretDiv.length===game.correctGuessses.length){
                gameMessages.innerHTML='You Win!'
                removeClickInput()
                newButton.classList.remove('hidden-class')                   //
                newButton.innerHTML='Restart Game'


            }
         }
         else {
            letterBox.classList.add('red-background')                         //
            game.wrongGuesses.push(letterClick)
            game.numberGuesses--
            console.log(hangmanImage.src)
            hangmanImage.src=`./public/images/hangman-images/hangman-${game.wrongGuesses.length+1}.png`
            renderWrongGuesses()



         }
         console.log('numberGuesses ',game.numberGuesses)
         if(game.numberGuesses===0){
            endGame()
         }


    }

    function endGame(){
        gameMessages.innerHTML= 'Game Over!'
        newButton.classList.remove('hidden-class')
        newButton.innerHTML='Restart Game'
        removeClickInput()


    }

    function removeClickInput(){
        console.log( alphaKeyContainer.querySelectorAll('div'))
        alphaKeyContainer.querySelectorAll('div').forEach(elem =>(elem.style.pointerEvents='none')) //


    }
})

