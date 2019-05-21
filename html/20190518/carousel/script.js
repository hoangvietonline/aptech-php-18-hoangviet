var hinh_mot = document.getElementById("hinh-1");
var hinh_hai = document.getElementById("hinh-2");
var hinh_ba = document.getElementById("hinh-3");

// var n = setInterval(function () {
//     chuyenSlide();
// }, 500);

// function stopShow() {
//     clearInterval(n);
// }

function chuyenSlide() {

    if (hinh_mot.style.display == 'block') {
        console.log("chạy")
        hinh_mot.style.display = 'none';
        hinh_hai.style.display = 'block';
    } else if (hinh_hai.style.display == 'block') {
        console.log("ngay")
        hinh_hai.style.display = 'none';
        hinh_ba.style.display = 'block';
    } else {
        console.log("đi")
        hinh_mot.style.display = 'block';
        hinh_ba.style.display = 'none';
    }
    setTimeout(chuyenSlide, 500);
}
setTimeout(chuyenSlide, 500);