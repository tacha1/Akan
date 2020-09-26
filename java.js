function weekdays() {
    var day = document.getElementById("day").value;
    var enterDate = day.split("-");
    var dd = parseInt(enterDate[2]);
    var mm = parseInt(enterDate[1]);
    var yy = parseInt(enterDate[0]);
    var maleNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var CC = (yy - 1) / 100 + 1;
    var birthDay = (CC / 4 - 2 * CC - 1 + 5 * yy / 4 + 26 * (mm + 1) / 10 + dd) % 7;
    document.getElementById("display").innerHTML = Math.round(birthDay);
    var gender = document.querySelector('input[name="optradio"]:checked').value;;
    console.log(gender);

    if (gender == "male") {

        console.log(maleNames[Math.round(birthDay)]);
        document.getElementById("names").innerHTML = maleNames[Math.round(birthDay)];

    } else if (gender == "female") {

        console.log(femaleNames[Math.round(birthDay)]);
        document.getElementById("names").innerHTML = femaleNames[Math.round(birthDay)];
    } else {
        alert("invalid data");
    }
}