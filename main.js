document.getElementById("btn").addEventListener("click", recordValue);
function recordValue(){
    let total=0;
    const selects= document.querySelectorAll("select");
    
    selects.forEach(select => {
          total += parseInt(select.value);
    });

//if the total is 5 the output will be "Smethod Sman"
if (total === 5) {
    document.getElementById("nameResult").innerHTML = "Schmethod Woman";
}
//if the total is between 6 and 10 the output will be "AnothaNothaOne"
else if (total >= 6 && total <= 10) {
    document.getElementById("nameResult").innerHTML = "Young Clean Child";
}
//if the total is between 11 and 15 the output will be "AnothaOne"
else if (total >= 11 && total <= 15) {
    document.getElementById("nameResult").innerHTML = "Division";
}
//if the total is between 16 and 20 the output will be "Sza"
else if (total >= 16 && total <= 20) {
    document.getElementById("nameResult").innerHTML = "Sza ";
}
}

