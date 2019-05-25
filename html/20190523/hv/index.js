function layNoiDung() {
    var xhttp = new XMLHttpRequest(); // đây là một class
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("demo").innerHTML = JSON.parse(this.responseText);
        }
    };
    xhttp.open("GET", "hv.json", true);
    xhttp.send();
}