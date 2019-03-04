function evaluateQuestion() {
    var points= sessionStorage.getItem("Points");
    var radios = document.getElementsByName('antwort20');
    var answer=1;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (i==answer) {
                points++
            }
        }
    }

    sessionStorage.setItem("Points",points)

    var nextPage = './q3.html'
    window.open(nextPage,'_self')

}