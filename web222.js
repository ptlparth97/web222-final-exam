


function hirefunction() {

    if (document.getElementById("hiring").checked) {
        document.getElementById("hourlyCharge").style.display = "block";
    }
    else {
        document.getElementById("hourlyCharge").style.display = "none";
    }
}

document.getElementById("f_form").style.display = "none";
function showTheContectForm() {
    var x = document.getElementById("f_form");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
//