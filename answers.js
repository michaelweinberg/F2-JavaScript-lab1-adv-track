//question 	

   var sentence1Arr = sentence1.split(' ');
    
    for (var i = 0; i<sentence1Arr.length; i++) {
     sentence1Arr[i] = "chirp";
    }


    sentence1Arr[sentence1Arr.length-1] = sentence1Arr[sentence1Arr.length-1] + '.';

    sentence1 = sentence1Arr.join(' ');
 // console.log(sentence1);
 

 var x = 0;
    while(x<sentence2Arr.length){   
    	sentence2Arr[x] = 'chirp';
  		x++;
  	}


  	sentence2Arr[sentence2Arr.length-1] = sentence2Arr[sentence2Arr.length-1] + '.';
	sentence2 = sentence2Arr.join(' ');





	var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
   	var nextAnimal;






   	nextAnimal =  favoriteAnimals[Math.floor(Math.random() * (favoriteAnimals.length - 0)) + 0];
   


   166 |var avg;
   var totals = 0;


   avg = avg + mealsPerDay[i+1];


for(i=0;i<mealsPerDay.length;i++){
	totals+=mealsPerDay[i];
	avg = totals/(i+1);
	 if (avg<4) {
	 	break;
	 	}
	 }


tooHungryDay = i;

