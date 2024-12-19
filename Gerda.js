document.addEventListener("DOMContentLoaded", function () {
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surprise = document.getElementById("surprise");

    surpriseBtn.addEventListener("click", () => {
        surprise.classList.toggle("hidden");
    });
});
// JavaScript funkcija, kuri parodys kuponą, kai vartotojas paspaus mygtuką
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const coupon = document.getElementById('surprise');
    coupon.classList.add('show');
});