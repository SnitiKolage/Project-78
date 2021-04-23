var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/5ymDKL83/bro.jpg",
"https://i.postimg.cc/JnL6wtrd/sister.jpg",
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names=["Family Book","Grand Father","Father","Brother","Sister","Mother"];
var i=0;

function update(){
    i++;
    var number_of_family_members=5
    if(i>number_of_family_members)
    {i=0;
    
    }
    var updatedImage=images[i];
    var updatedName=names[i];
    document.getElementById("My_Family").src=updatedImage;
    document.getElementById("family_name").innerHTML=updatedName;
}
