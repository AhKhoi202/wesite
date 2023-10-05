document.getElementById("android").style.display = "none";
document.getElementById("ios").style.display = "none";
document.getElementById("web").style.display = "block";
document.querySelector(".android").addEventListener("click", function (e) {
    // Ngăn chặn hành vi mặc định của liên kết
    e.preventDefault();

    // Ẩn thẻ div có id "ios"
    document.getElementById("ios").style.display = "none";
    document.getElementById("web").style.display = "none";
    // Hiển thị thẻ div có id "android"
    document.getElementById("android").style.display = "block";
});
document.querySelector(".ios").addEventListener("click", function (e) {
    // Ngăn chặn hành vi mặc định của liên kết
    e.preventDefault();

    // Ẩn thẻ div có id "ios"
    document.getElementById("android").style.display = "none";
    document.getElementById("web").style.display = "none";
    // Hiển thị thẻ div có id "android"
    document.getElementById("ios").style.display = "block";
});document.querySelector(".web").addEventListener("click", function (e) {
    // Ngăn chặn hành vi mặc định của liên kết
    e.preventDefault();

    // Ẩn thẻ div có id "ios"
    document.getElementById("android").style.display = "none";
    document.getElementById("ios").style.display = "none";
    // Hiển thị thẻ div có id "android"
    document.getElementById("web").style.display = "block";
});