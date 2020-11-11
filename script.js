
document.getElementById("calculate").onclick = function () {
    let h = parseInt(document.getElementById("height").value);
    let w = parseInt(document.getElementById("weight").value);
    let resultText = document.getElementById("resultText");
    let result  = document.getElementById("result");
    h = h *12;
    h = h *0.025; //chieu cao h doi ra meter
    let bmi = w / Math.pow(h, 2);
    bmi = Math.round(bmi);
    result.innerHTML = bmi;
    switch (true) {
        case (bmi < 18):
            resultText.innerHTML = "Underweight";
            break;
        case (bmi >= 18 && bmi < 25):
            resultText.innerHTML = "Normal";
            break;
        case (bmi >= 25 && bmi < 30):
            resultText.innerHTML = "OverWeight";
            break;
        default:
            resultText.innerHTML = "Obese";
        break;
    }
}