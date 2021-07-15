var images = ["grand pa.jpg","grandma.jpg",
"Image0559.jpg"];

var names = ["My GrandDad, The Oldest. Sadand Shrivastav","My GrandMom, 2nd Oldest. Indra Shrivastav",
" My Mom And Me Together, Kunjal Shrivastav And Me Dhruv Shrivastav *i did not have any new photos*"];

var i = 0;
function update() {

    i++;
    var number_of_family_member_in_array = 3
    if(i > number_of_family_member_in_array )
  {
        i=0;
  }
var updatedImage = images[i];
var updatedNames = names[i];
document.getElementById("family_img").src= updatedImage;
document.getElementById("family_name").innerHTML= updatedNames;
}

