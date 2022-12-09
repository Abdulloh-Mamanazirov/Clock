let numbers = ['asd1', '5qwe', 3, 4, 'asd', 5]

let array = numbers.filter(num =>{
    return (typeof num === 'number')
})
console.log(array);

array = array.map(num => num * num)
console.log(array);


function clockInit() {
  let date = new Date();
  
  let hourNow = date.getHours();
  let minuteNow = date.getMinutes();
  let secondNow = date.getSeconds();


  let second = document.querySelector("#second");
  let minute = document.querySelector("#minute");
  let hours = document.querySelector("#hour");


  var hour = minuteNow / 2 + hourNow * 30;

  hours.style.transform = "rotate(" + hour + "deg)";
  minute.style.transform = "rotate(" + minuteNow * 6 + "deg)";
  second.style.transform = "rotate(" + secondNow * 6 + "deg)";
}
window.onload = function () {
  clockInit();
  setInterval(clockInit, 1000);
};

setInterval(() => {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  if(s < 10){
    document.getElementById("digitalClock").textContent = `${h}:${m}:0${s}`;
  }else{
    document.getElementById("digitalClock").textContent = `${h}:${m}:${s}`;
  }
}, 1000);

  let dayNow = new Date().getDate()
  let monthNow = new Date().getMonth()
  let yearNow = new Date().getFullYear()
  document.getElementById("date").textContent = `${dayNow} / ${monthNow + 1} / ${yearNow}`;
