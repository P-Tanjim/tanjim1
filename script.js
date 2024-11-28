let fanButton = document.querySelector(".fan-button");
let fan = document.querySelector(".fan-box");
let lightButton = document.querySelector(".light-button");
let light = document.querySelector(".light-box");
let text = document.querySelector("h1");
let onOffF = true;
let onOffL= true;



fanButton.addEventListener("click", () => {
    if(onOffF){
        onOffF = false;
        fan.classList.add("rotate");
        fan.classList.remove("stop-rotate");
    }
    else{
        onOffF = true;
        fan.classList.remove("rotate");
        fan.classList.add("stop-rotate");
    }
});

lightButton.addEventListener("click", () => {
    if(onOffL){
        onOffL = false;
        light.classList.remove("hide");
    }
    else{
        onOffL = true;
        light.classList.add("hide");
    }
    if(onOffF == true && onOffL == true || onOffF == false && onOffL == true){
    text.innerText = "sleep";
    }
    else if(onOffF == false && onOffL == false || onOffF == true && onOffL == false){
    text.innerText = "study";
}
});

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 4000)
//     })
// }

// console.log("data1 prossesing...");
// getData(1).then((res) => {
//     console.log("data2 prossesing...");
//     return getData(2);
// }).then((res) => {
//     console.log("data3 prlossesing...");
//     return getData(3);
// }).then((res) => {
//     console.log(res);
// });

// function tanjim (data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("weather data is", data);
//         resolve(200);
//         }, 2000);
//     });
// }
// async function getWeatherData() {
//     await tanjim(20);
// }
// getWeatherData();

// (async function () {
//     console.log("data1 prossesing...");
//     await getData(1);
//     console.log("data2 prossesing...");
//     await getData(2);
//     console.log("data3 prossesing...");
//     await getData(3);
// })();