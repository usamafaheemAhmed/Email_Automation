function username(){
    let username = document.getElementById("userName").value||"Usama Faheem Ahmed";
    document.getElementById("firstName").innerHTML = username;
}

function jobPost(){
    let jobPost = document.getElementById("jobPost").value||"Manager";
    document.getElementById("jobTitle").innerHTML = jobPost;
    document.getElementById("jobTitle1").innerHTML = jobPost;
}

function companyName(){
    let a = document.getElementById("userCompanyName").value||"FT.Solution";
    document.getElementById("companyName").innerHTML = a;
}

// function education(){
//     let a = document.getElementById("userEducation").value||"BSSE From LGU Lahore";
//     document.getElementById("education").innerHTML = a;
// }


function num(){
    let a = document.getElementById("firstNumber").value||"0312-1234567";
    document.getElementById("firstPhoneNumber").innerHTML = a;
}

function web(){
    let a = document.getElementById("Web").value||"https://fahadtechsolution.com/";
    document.getElementById("webLink").innerHTML = a;
    let webLink = document.getElementById("webLink");
    webLink.href = a;
}
function userEmail(){
    let a = document.getElementById("userEmail").value||"usamafaheemahmed80@gmail.com";
    document.getElementById("email").innerHTML = a;
}

function address(){
    let a = document.getElementById("address").value||"Office No. 1, 1st Floor, UBL Bank Building College, Road, Lahore, 54600, Pakistan";
    document.getElementById("location").innerHTML = a;
}

function facebookLink(){
    let a = document.getElementById("facebookLink").value||"https://www.facebook.com/profile.php?id=100086212257315";
    
    let link = document.getElementById("facebook");
    link.href = a;
}

function twitterLink(){
    let a = document.getElementById("twitterLink").value||"https://twitter.com/i/flow/login";
    let link = document.getElementById("twitter");
    link.href = a;
}

function linkedin(){
    let a = document.getElementById("linkedin").value||"https://www.linkedin.com/in/usama-ahmed-a1960b1b9";
    
    let link = document.getElementById("linkedinLink");
    link.href = a;
}

function instagramLink(){
    let a = document.getElementById("instagramLink").value||"https://www.instagram.com/";
    
    let link = document.getElementById("insta");
    link.href = a;
}


function imgInput(){
    let a = document.getElementById("image").value||"./usamaphoto.jpeg";
    console.log(a);
    let link = document.getElementById("profileImage");
    link.src = a;
}

function companyImage(){
    let a = document.getElementById("cImage").value||"./companylogo.png";
    console.log(a);
    let link = document.getElementById("companyImage");
    link.src = a;
}


var r = document.querySelector(':root');

function colorChange(){

    let a = document.getElementById("iconColor").value.toLowerCase()||"#F2557E";
    console.log(a);
    r.style.setProperty('--main-bg-color', a);
}


// Pdf Function on Print button
function printPdf(){
    
var element = document.getElementById('data');
var opt = {

filename:     'Card.pdf',
image:        { type: 'jpeg', quality: 0.85 },
html2canvas:  { scale: 2 },
jsPDF:        { unit: 'px', format: [2400,1200], orientation: 'Landscape' }
};

html2pdf().set(opt).from(element).save();
}