var question1 =  prompt('Could you please give us your name?');
console.log('your name is ' + question1);
var question2 = prompt('Where do you live?');
console.log('you are from ' + question2);
var question3 = prompt('What is your fav meal?');
console.log('your fav meal is ' + question3 );
var question4 = prompt('Where do you want to travel?');
console.log('you love to travel to '+ question4);


document.getElementById('q1').innerHTML = 'Could you please give us your name? ' + '<span class="h3">'+ question1+'</span>';
document.getElementById('q2').innerHTML = 'Where do you live? ' + '<span class="h3">'+ question2+'</span>';
document.getElementById('q3').innerHTML = 'What is your fav meal? ' + '<span class="h3">'+ question3+'</span>';
document.getElementById('q4').innerHTML = 'Where do you want to travel? ' + '<span class="h3">'+ question4+'</span>';