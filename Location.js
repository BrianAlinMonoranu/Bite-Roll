const Baggot = document.querySelector("#GoogleMapBaggot");
const Parnell = document.querySelector("#GoogleMapParnell");
const Aungier = document.querySelector("#GoogleMapAungier");

Baggot.addEventListener("click", function() {
    location.href = "https://www.google.com/maps/place/Baggot+Street+Lower,+Dublin/@53.3366965,-6.2512003,17z/data=!3m1!4b1!4m5!3m4!1s0x48670e97cf75f087:0x4d21c4ad8342c123!8m2!3d53.3366965!4d-6.2490116";
});

Parnell.addEventListener("click", function() {
    location.href = "https://www.google.com/maps/place/White+Rabbit+Moore+Street/@53.3519706,-6.2646474,17z/data=!4m13!1m7!3m6!1s0x48670e86b5aaf7e9:0xd8033bc807c3b39!2s70+Parnell+St,+North+City,+Dublin,+D01+NH59!3b1!8m2!3d53.3519674!4d-6.2624587!3m4!1s0x48670f638bd22879:0x3210544b1665f8ef!8m2!3d53.351013!4d-6.2631143";
});

Aungier.addEventListener("click", function() {
    location.href = "https://www.google.com/maps/place/4+Aungier+St,+Dublin,+D02+KT66/@53.3411772,-6.2674638,17z/data=!3m1!4b1!4m5!3m4!1s0x48670e9dc7ba4ff5:0xe6d58323c2db21a5!8m2!3d53.341174!4d-6.2652751";
});