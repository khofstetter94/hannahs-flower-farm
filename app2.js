function secretMessage(){
    let userAnswer = prompt('Do you want to discover the hidden garden (yes or no)')

    if (userAnswer.toLowerCase() == "yes"){
        document.write('~*~*~*~*~*~*~*~*~*~*~Welcome to the hidden garden*~*~*~*~*~*~*~*~*~*~')
    }
    console.log(userAnswer);
}

function askUserQuestion(){
    let userNameInside;
    let userNameIsInvalid;
    do {
        userNameInside = prompt('Please Enter Your Name');
        userNameIsInvalid = userNameInside === '';
        if (userNameIsInvalid) {
            alert('Invalid response, please enter a name');
        }
        console.log(userNameInside);
    } while(userNameIsInvalid);

    if(userNameInside == 'Hannah'){
    document.write('Welcome to your garden ' + userNameInside)
    } else {
    document.write("Welcome " + userNameInside)
    }
    return userNameInside;
    // return 'Hannah'
}

function anotherPictureQuestion(){
    let anotherPicture = prompt("Do you want to see our garden cat?? (yes or no)");
    let picURL = "https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg"

    if (anotherPicture.toLowerCase() == "yes"){
        // <img id="cat" src="https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg">

        document.write('<img src="' + picURL + '">')
    }
}

function guessingGame(){
    let userAnswer = prompt('Please Enter a Number 1-50');
    let correctAnswer = 20;
    let attempts = 8;

    for(let i = 1; i < attempts; i++){
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Please Try Again! A number 1-50')
        }
        if (userAnswer == correctAnswer){
            alert('Correct! You are really good at guessing!');
            document.write("Winner, winner, chicken dinner!");
            break;
        } else if (userAnswer > correctAnswer){
            userAnswer = prompt('Sorry, too high. Please Try Again! A number 1-50');
        } else if (userAnswer < correctAnswer){
            userAnswer = prompt('Sorry, too low. Please Try Again! A number 1-50');
        }
        if (i == 7){
            alert('The correct answer was ' + correctAnswer);
            document.write("Game loser");
        }
    }
}

function moreFlowers(){
    let usersFlowers = prompt('How many flowers will you add to the secret garden? (1-10)');
    let picFlowerURL = "http://www.clker.com/cliparts/o/q/B/b/a/p/purple-flower-th.png"

    for (let i=0; i < usersFlowers; i++){
        document.write('<img src="' + picFlowerURL + '">');

        if (usersFlowers < 1 || usersFlowers > 10){
            usersFlowers = prompt('1-10 only please')
        }
    }
}
