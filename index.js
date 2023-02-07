// Problem 1: 
function mindGame(num){
  
    const multiply = num*3;
    const sum = multiply+10;
    const divide = sum/2;
    const result = divide - 5;
    return result;
}

    
// Problem 2:

function evenOdd(programmer){
    
     if ( programmer.length % 2 === 0 ){
        return ('even');
     }
     else {
        return ('odd');
     }
  
   }
   
   //  description: Reminder equal to zero. so the number is even;

 // Problem 3:
    function isLGSeven(10){
      const num = 10 ;
      if ( num < 7 ){
        console.log(num -7);
      }
      else {
         
         console.log(num*2);
      }
    return num;
    }
     //  description: num is 10. in condition if number is greater than 7 
    



//   Problem 4:


const numbers = [10, 15, 25, 30, -40, -45, 50, -65, 75,85,100]
function findingBadData(number){
       for ( i = 0 ; i<= numbers.length ; i++){
         const number = numbers[i];
         if ( number <  0){
            console.log( 'badData' , number) 
         }
       } 
    }
    findingBadData(numbers);
 
  //   Problem 5:
  
  const diamonds = [
    { name: 'firstFriend' , gem: 10 , power:21  },
    { name: 'secondFriend' , gem: 20 , power:32  },
    { name: 'thirdFriend' , gem: 30 , power:43  },
  ];
  
  function gemsToDiamond(diamonds){
      let sum = 0;
      for (let i = 0; i< diamonds.length; i++){
        const diamond = diamonds[i];
        const diamondTotal = diamond.gem * diamond.power;
        sum = sum + diamondTotal;
        if (sum > 2000 ){
          total = sum - 2000;
           
     } 
      return total; 
    }  
  }
    const totalDiamond   = gemsToDiamond(diamonds);
    console.log(totalDiamond);      
