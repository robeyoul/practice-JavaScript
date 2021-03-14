
/*var
var yourName= prompt('what is your name: ')
var score= prompt('What is your Score :')

*/

var foruniversity = 71;
var forcollege= 51;

function result(yourName, score) {
  if(score>=foruniversity){
  console.log(yourName + ' You got chance to admit university. Your Score is : '+ score);
  
  }else if(score>=forcollege){
  console.log(yourName + ' You got chance to admit College. Your Score is : '+ score);
  
  
  }else{
  console.log("Sorry "+yourName + " you can't admit anywhere");
  }


}

result('happy' , 80);
result('Hasib' , 60);
result('Raju' , 30);