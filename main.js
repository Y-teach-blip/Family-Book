var members = 
[
    "1.jpg",
    "2.jpg",
    "11.jpg",
    "10.jpg",
    "12.jpg",
    "13.jpg",
    "3.jpg",
    "5.jpg",
    "9.jpg",
    "8.jpg",
    "4.jpg",
    "6.jpg",
    "7.jpg",
    "14.jpg",
    "gif.gif"
];

var names = 
[
    "Rajendra Prasad Sharma",
    "Gayatri Devi",
    "Gajendra Sharma",
    "Rekha Sharma",
    "Abhinav Sharma",
    "Navya Sharma",
    "Vishnu Sharma",
    "Gunjan Sharma",
    "Aryan Sharma",
    "Akshat Sharma",
    "Arun Kumar Sharma",
    "Sunita Sharma",
    "Aarika Sharma",
    "Yoshi Sharma #myself",
    "THANK YOU"
];

var i = 0;

function nextslide() 
{

document.getElementById("members").src = members[i];

document.getElementById("names").innerHTML = names[i];

i++;

if (i == 15) 
{

i = 0;

}

}