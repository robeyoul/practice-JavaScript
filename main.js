var johnScore= 80;
var nickScore= 45;

var minPoint= 51;

if (minPoint <= johnScore && minPoint<= nickScore) {
  console.log('Both Students have passed in the exam')

  
}else if(minPoint <= johnScore || minPoint<= nickScore){
  
  console.log('One of the student Passed the exam');
  if (johnScore>nickScore) {
    console.log('john passed the exam and his score is '+johnScore);
 
  }else{
    console.log('Nick passed the exam and his score is '+nickScore);
 
  }

  
}else
{
  console.log('Both students have failed');
}

