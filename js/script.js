document.getElementById('submit').addEventListener('click', function () {

    document.getElementById('valueGivenForm').style.display = "none"; //Name field not show;
    document.getElementById('showResult').style.display = "block"; //Result field show;

    var getValfName = document.getElementById('fName').value;
    var getVallName = document.getElementById('lName').value;

    //Show Success Name;
    document.getElementById('sucShowfName').innerHTML = getValfName;
    document.getElementById('sucShowlName').innerHTML = getVallName;

    var percent = Math.random() * 100;
    var getPercent = Math.ceil(percent);

    var showWrongMsg = "";
    var showLuckyMsg = "";

    if (getValfName == "" && getVallName == "") {
        document.getElementById('fName').style.borderColor = "red";
        document.getElementById('lName').style.borderColor = "red";
        document.getElementById('valueGivenForm').style.display = "block";
        document.getElementById('showResult').style.display = "none";
    } else if (getValfName == "") {
        document.getElementById('fName').style.borderColor = "red";
        document.getElementById('valueGivenForm').style.display = "block";
        document.getElementById('showResult').style.display = "none";
    } else if (getVallName == "") {
        document.getElementById('lName').style.borderColor = "red";
        document.getElementById('valueGivenForm').style.display = "block";
        document.getElementById('showResult').style.display = "none";
    } else if (!isNaN(getValfName, getVallName)) {
        showWrongMsg = "Number Is Not Allowed";
        document.getElementById('valueGivenForm').style.display = "block";
        document.getElementById('showResult').style.display = "none";
    } else if (getPercent >= 80) {
        showLuckyMsg = "Your love is going on the best time";
    } else if (getPercent >= 65) {
        showLuckyMsg = "Your love is going fairly well";
    } else if (getPercent >= 40) {
        showLuckyMsg = "Your love could be good.";
    } else if (getPercent < 40) {
        showLuckyMsg = "Your love going on the breakup";
    }

    // Show Wrong Message;
    document.getElementById('wrongMsgShow').innerText = showWrongMsg;

    //Click Name Field Refresh;
    var getValfName = document.getElementById('fName').value = "";
    var getVallName = document.getElementById('lName').value = "";

    // Show Success Message;
    document.getElementById('showPercent').innerText = getPercent + "%";
    document.getElementById('luckyMsg').innerHTML = showLuckyMsg;

});




// Name Field show;
document.getElementById('backHome').addEventListener('click', function () {

    document.getElementById('valueGivenForm').style.display = "block"; // Name field show;
    document.getElementById('showResult').style.display = "none"; // Name field not show;

});