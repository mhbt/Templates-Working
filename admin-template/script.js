var btn = document.querySelector('.btn-nav-toggle');
console.log(btn);

btn.addEventListener('click',toggleNav, true);

function toggleNav(e){
  e.preventDefault();
  var nav = document.querySelector(".page-navigation");
  var body = document.querySelector(".page-navigation");
  nav.style.transition = 'width 0.5s ease-out';
  if(!document.querySelector('.dash-text').classList.contains('true')){
    document.querySelector('.dash-text').classList.toggle("true");
    nav.classList.remove('col-xs-2');
    nav.classList.remove('col-md-1');
    nav.classList.add('col-xs-3');
    nav.classList.add('col-md-2');

    body.classList.remove('col-xs-10');
    body.classList.remove('col-md-11');
    body.classList.add('col-xs-9');
    body.classList.add('col-md-10');
    setTimeout(function(){
      document.querySelectorAll('.dash-text').forEach(function(element){
      element.classList.toggle("hide");
      });
    },200)
  }
  else {
    document.querySelector('.dash-text').classList.toggle("true");
    nav.classList.remove('col-xs-3');
    nav.classList.remove('col-md-2');
    nav.classList.add('col-xs-2');
    nav.classList.add('col-md-1');

    body.classList.remove('col-xs-9');
    body.classList.remove('col-md-10');
    body.classList.add('col-xs-10');
    body.classList.add('col-md-11');
    setTimeout(function(){
      document.querySelectorAll('.dash-text').forEach(function(element){
      element.classList.toggle("hide");
      });
    },0)
  }
}
var chart_hide =document.querySelector('#panel-chart');
chart_hide.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.panel-chart').classList.add("hidden");
}, true);
var clock_hide =document.querySelector('#panel-clock');
clock_hide.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.panel-clock').classList.add("hidden");
}, true);
var chart_show =document.querySelector('#panel-chart-show');
chart_show.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.panel-chart').classList.remove("hidden");
}, true);
var clock_show =document.querySelector('#panel-clock-show');
clock_show.addEventListener('click', (e) => {
  e.preventDefault();
  clock_show.style.transition = 'display 0.5s ease-in';
  document.querySelector('.panel-clock').classList.remove("hidden");
}, true);




//Clock Application

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {

    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

}

var interval = setInterval(runTheClock, 1000);


// graph

var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                backgroundColor: "transparent",
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },

        // Configuration options go here
        options: {}
    });
// //couter -controller
// var Counter = function(options){
//   var interval= [];
//   var count = 1;
//   return {
//     play: function () {
//       setTimeout(function(){
//         options.seconds.innerHTML = (count++ % 60).toString().padStart(2,'0');
//         interval[0] = setInterval(function(){
//           options.seconds.innerHTML = (count++ % 60).toString().padStart(2,'0');
//         }, 1000);
//       },0);
//         interval[1] = setInterval(function(){
//           options.minutes.innerHTML =  (Math.floor((count / 60) % 60)).toString().padStart(2,'0');
//         }, 1000 * 60);
//         interval[2] = setInterval(function(){
//           options.hours.innerHTML = (Math.floor((count/60/60) % 24)).toString().padStart(2,'0');
//         }, 1000 * 60 * 60);
//       },
//       pause: function() {
//         for(var i = 0; i < interval.length; i++){
//           clearInterval(interval[i]);
//         }
//       },
//       stop: function() {
//         for(var i = 0; i < interval.length; i++){
//           clearInterval(interval[i]);
//           count = 1;
//             }
//             options.seconds.innerHTML= "00";
//             options.minutes.innerHTML= "00";
//             options.hours.innerHTML = "00";
//           }
//       } //return
// } //Counter module
//
//
//     // the counter application
//
//     var counter = null;
//     var counter_args = {
//       seconds:document.getElementById('counter-sec'),
//       minutes:document.getElementById('counter-min'),
//       hours:document.getElementById('counter-hour')
//     }
//     counter = new Counter(counter_args);
//     var play = document.querySelector("#play");
//     play.addEventListener('click',function(e){
//       e.preventDefault();
//       if(document.querySelector(".glyphicon-play")){
//         var play_btn = document.querySelector(".glyphicon-play");
//         play_btn.classList.add("glyphicon-pause")
//         play_btn.classList.remove("glyphicon-play");
//
//         counter.play();
//       }
//       else {
//         var pause_btn = document.querySelector(".glyphicon-pause");
//         pause_btn.classList.add("glyphicon-play");
//         pause_btn.classList.remove("glyphicon-pause");
//         counter.pause();
//       }
//     }, false);
//     var stop = document.querySelector("#stop");
//     stop.addEventListener('click',function(e){
//       e.preventDefault();
//       counter.stop();
//       if(document.querySelector(".glyphicon-pause"))
//         var pause_btn = document.querySelector(".glyphicon-pause");
//         pause_btn.classList.add("glyphicon-play")
//         pause_btn.classList.remove("glyphicon-pause");
//     }, false);
//
//  console.log(Math.floor(1 % 24));
var params= {
  display: {
     seconds:'#counter-sec',
     minutes:'#counter-min',
     hours:'#counter-hour'
   },
   controller: {
     play: "#play",
     stop:"#stop",
    play_icon: ".glyphicon-play",
    stop_icon: ".glyphicon-stop",
    pause_icon: ".glyphicon-pause",
   }
}
counter(params);
