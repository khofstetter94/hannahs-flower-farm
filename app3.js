let anotherPicture = prompt("Do you want to see our garden cat?");
let picURL = "https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg"

if (anotherPicture.toLowerCase() == "yes"){
    // <img id="cat" src="https://pismobeachvet.com/wp-content/uploads/2019/04/CatGarden_feature.jpg">

    document.write('<img src="' + picURL + '">')
}
