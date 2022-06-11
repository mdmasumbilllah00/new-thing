function getTime() {
    var date = new Date();
    var localDate = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = localDate;
}
const time = setInterval(getTime, 1000)

document.getElementById("text").addEventListener("click", function () {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => displayText(data))
})
function displayText(txt) {
    document.getElementById("text").value = txt.quote;
    var text = document.getElementById("text").value;
    fun2()

}


function fun2() {
    var txt = "";
    var num = 0;
    function start() {
        namee = document.getElementById("text").value;

        if (namee != "") {
            var later = namee.split("");
            txt += later[num];
            document.getElementById("dis").innerHTML = txt;
            if (num == namee.length - 1) {
                clearInterval(time2)

            }
            num++;
        }


    }
    const time2 = setInterval(start, 100)
}


