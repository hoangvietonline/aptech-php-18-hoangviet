// function showImage(src) {
//     document.getElementById("img").src = src;
// }
function tatBatBongDen() {
    var imageElement = document.getElementById("img");

    console.log(imageElement.src);
    if (imageElement.src.includes('pic_bulboff.gif')) {
        imageElement.src = "pic_bulbon.gif";
        console.log("mo");
    } else {
        imageElement.src = "pic_bulboff.gif";
        console.log("tat");
    }

}