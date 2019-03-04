function evaluateQuestion() {
    var points =0;
    var radios = document.getElementsByName('antwort10');
    var answer=4;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if (i==answer) {
                points++
            }
        }
    }
    var nextPage = './q2.html'

    sessionStorage.setItem("Points",points)

    window.open(nextPage,'_self')

}