function secretMessage(){
    let userAnswer = prompt('Do you want to discover the hidden garden (yes or no)')

    if (userAnswer.toLowerCase() == "yes"){
        document.write('~*~*~*~*~*~*~*~*~*~*~Welcome to the hidden garden*~*~*~*~*~*~*~*~*~*~')
    }
    console.log(userAnswer);
}

function askUserQuestion(){
    let userNameInside = prompt('Please Enter Your Name');

    console.log(userNameInside);

    if(userNameInside === ''){
        alert('Invalid response');
    }

    if(userNameInside == 'Hannah'){
    document.write('Welcome to your garden ' + userNameInside)
    } else {
    document.write("Welcome " + userNameInside)
    }
    return userNameInside;
    // return 'Hannah'
}

function anotherPictureQuestion(){
    let anotherPicture = prompt("Do you want to see our garden cat??");
    let picURL = "https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg"

    if (anotherPicture.toLowerCase() == "yes"){
        // <img id="cat" src="https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg">

        document.write('<img src="' + picURL + '">')
    }
}

