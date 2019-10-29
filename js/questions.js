var question1 =  prompt('Could you please give us your name?');
console.log('your name is ' + question1);
var question2 = prompt('Where do you live?');
console.log('you are from ' + question2);
var question3 = prompt('What is your fav meal?');
console.log('your fav meal is ' + question3 );
var question4 = prompt('Where do you want to travel?');
console.log('you love to travel to '+ question4);


document.getElementById('q1').innerHTML = 'Could you please give us your name? ' + question1 ;
document.getElementById('q2').innerHTML = 'Where do you live? ' + question2 ;
document.getElementById('q3').innerHTML = 'What is your fav meal? ' + question3 ;
document.getElementById('q4').innerHTML = 'Where do you want to travel? ' + question4 ;