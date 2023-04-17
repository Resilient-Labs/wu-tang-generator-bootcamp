document.getElementById("btn").addEventListener("click", recordValue);
function recordValue(){
    let total=0;
    const selects= document.querySelectorAll("select");
    
    selects.forEach(select => {
          total += parseInt(select.value);
    });

//if the total is 5 the output will be "Dusty Locane"
if (total === 5) {
    document.getElementById("nameResult").innerHTML = "Green Eyed Bastard";
}
//if the total is between 6 and 10 the output will be "Rizz God"
else if (total >= 6 && total <= 10) {
    document.getElementById("nameResult").innerHTML = "Driza";
}
//if the total is between 11 and 15 the output will be "Lil toosi smurk"
else if (total >= 11 && total <= 15) {
    document.getElementById("nameResult").innerHTML = "Inspectah Jay";
}
//if the total is between 16 and 20 the output will be "The BZA"
else if (total >= 16 && total <= 20) {
    document.getElementById("nameResult").innerHTML = "Mega Killa ";
}
}

