function evaluateQuestion() {
    var points= sessionStorage.getItem("Points");
    var radios = document.getElementsByName('antwort50');
    var answer=4;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (i==answer) {
                points++
            }
        }
    }
    document.write("You have answered "+points+' questions correctly!');
}