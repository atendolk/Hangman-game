
console.log("game.js file is connected!");
var words = ["wand","elf","magic","castle","curse","wizard","beast", "owl","slytherin","wolves","hogwarts","snake","magicduel","snape","death","fly","ron","crusio"];
var rand = words[Math.floor(Math.random() * words.length)];

var wins = []
var used = []





console.log(rand);
console.log(rand.length);
document.write("number of letters in word: " + rand.length);

var userText = document.getElementById("user-text");

      
        
        
        var res = rand.split("");
        var space=[]
        var s = document.getElementById("tis");
        s.innerHTML=space;

        var used=[]

        for(i=0;i<res.length;i++){
        	space.push(" _ ");

        }

	
       
       

       

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
        userText.textContent = event.key;

        
        console.log(event);
        var myLetter = event.key;
        console.log(myLetter);
                var theIndex = rand.indexOf(myLetter);
if (rand.indexOf(myLetter)>-1){
       	for(var i=0;i<rand.length;i++){
       		if(rand[i] === myLetter){
       	space[rand.indexOf(myLetter)] = myLetter;
       	document.getElementById("rear").innerHTML = space;
       	
}
       }
       console.log(space);
       space.join("");
   }
else{
	used.push(myLetter);
	console.log(used);
	document.getElementById("u").innerHTML = "letters used: " + used;


var count = 0;
for(var i = 0; i < used.length; ++i){
    if(used[i] == 2)
        count++;
    	console.log(count);

    	if(count>=10){document.getElementById("pla").innerHTML = alert("You lose")}
    		
}

}



    }
        
       	/*{ 
       	
       	
    	space.splice(theIndex,1,myLetter);
    	document.getElementById("rocket").innerHTML = space
		}
    	else{
    		used.push(myLetter);
    		document.getElementById("false").innerHTML = "Used letter: " + used;}
}
*/

//}

/*     for(var i = 0;res.length;i++){
        	if(res[0] != myLetter){
        			

        	}else{   

        	}
        }

		document.getElementById("display").innerHTML = displayDash;
		




        //indexof make forloop that runs length and then _

        	var displayDash="";
        	
        for(var i=0; i<rand.length; i++){
        		displayDash+="<p> - </p>"
        		if(theIndex > -1){
        		console.log(myLetter);
        		
        		}	

		}

		document.getElementById("display").innerHTML = displayDash;
		document.getElementById("let").innerHTML = displayLet;
//if(theIndex > -1){


}*/

	
	// var res = rand.charAt(i);
	//if(res ==  ){
		
	//}
	//else{
		
	//}*/




//for(i=0; i<rand.length;i++){
//	if(userText == rand

		//ask: I need help creating the following loop. Don't know certain syntax.

		// loop{user inputs a random letter.
		// comp has to see if the random letter matches the first letter in the rand word.
		// if (it does then replace the first "_" with that letter.)
		// else (comp has to move onto the next letter and to the same thing throughout all letters of the random word.)
		// if (the inputed letter never matched any of the letters in the rand word then display that letter bellow the game.)
		// display the sentence commanding the user to input another letter. 
		// remove the sentence once user inputs a letter. 
		// }
		// 
		// Let the loop repeat.
		//
		// if (the loop has run 10 times and a "_"still remains then display the sentence " You loose " + rand)
		// 	else(display the sentence "You win!")
		//


