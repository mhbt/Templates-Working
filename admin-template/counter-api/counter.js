// PARAMS :
// Type - object
// Structure
// var params = {
//   display: {
//     seconds:'counter-sec',
//     minutes:'counter-min',
//     hours:'counter-hour'
//   },
//   controller: {
//     play: "play",
//     stop:"stop",
//    play_icon: ".play_icon",
//    pause_icon: ".pause_icon",
//    stop_icon: ".play_icon"
//   }
// };

 var counter = function (params) {
    if(params === undefined || params === null){
       console.error("Counter-counter.js Parameters to the Constructor undefined");
    }
    var html_objects = {
      display: {
        seconds : document.querySelector(params.display.seconds),
        minutes : document.querySelector(params.display.minutes),
        hours : document.querySelector(params.display.hours)
      },
      controller: {
        play: document.querySelector(params.controller.play),
        stop: document.querySelector(params.controller.stop),
        play_icon:document.querySelector(params.controller.play_icon),
        stop_icon: document.querySelector(params.controller.stop_icon),
        pause_icon: document.querySelector(params.controller.pause_icon)
      }
    };
    var Logic = function(containers) {
      var data = {
        interval:[],
        count: 1
      };
      return {
          play: function () {
          setTimeout(function(){
            containers.seconds.innerHTML = (data.count++ % 60).toString().padStart(2,'0');
            setTimeout(function(){
              document.querySelector(".flipper-s").style.animationPlayState = "running";

            },0);
            data.interval[0] = setInterval(function(){
              // document.querySelector(".flipper-s").style.transform="rotateX(360deg)";
              containers.seconds.innerHTML = (data.count++ % 60).toString().padStart(2,'0');
            }, 1000);
          },0);
            data.interval[1] = setInterval(function(){
              setTimeout(function(){
                document.querySelector(".flipper-m").style.animationPlayState = "running";
                  containers.minutes.innerHTML =  (Math.floor((data.count / 60) % 60)).toString().padStart(2,'0');
              },0);
              setTimeout(function(){
                document.querySelector(".flipper-m").style.animationPlayState = "paused";
              },1000);
            }, 1000 * 60);
            data.interval[2] = setInterval(function(){
              setTimeout(function(){
                document.querySelector(".flipper-h").style.animationPlayState = "running";
                containers.hours.innerHTML = (Math.floor((data.count/60/60) % 24)).toString().padStart(2,'0');
              },0);
              setTimeout(function(){
                document.querySelector(".flipper-h").style.animationPlayState = "paused";
              },1000);
            }, 1000 * 60 * 60);
          },
          pause: function() {
            document.querySelector(".flipper-s").style.animationPlayState = "paused";
            for(var i = 0; i < data.interval.length; i++){
              clearInterval(data.interval[i]);
            }
          },
          stop: function() {
            setTimeout(function(){
              document.querySelector(".flipper-s").style.animationPlayState = "paused";
            },1);
            for(var i = 0; i < data.interval.length; i++){
              clearInterval(data.interval[i]);
              data.count = 1;
                }
                containers.seconds.innerHTML= "00";
                containers.minutes.innerHTML= "00";
                containers.hours.innerHTML = "00";
              }
      }; //return Logic
    }  //return logic function
    var counter = new Logic(html_objects.display);
    var play_control = html_objects.controller.play;
    var stop_control = html_objects.controller.stop;
    play_control.addEventListener('click',function(e){
      e.preventDefault();
      if(document.querySelector(params.controller.play_icon) ){
        var play_icon = html_objects.controller.play_icon;
        play_icon.classList.add(params.controller.pause_icon.slice(1,1000));
        play_icon.classList.remove(params.controller.play_icon.slice(1,1000));
        //console.log(params.controller.play_icon.slice(1,1000));
        counter.play();
      }
      else {
        counter.pause();
        var pause_icon =document.querySelector(params.controller.pause_icon);
        pause_icon.classList.add(params.controller.play_icon.slice(1,1000));
        pause_icon.classList.remove(params.controller.pause_icon.slice(1,1000));
      }
    }, false);
    stop_control.addEventListener('click',function(e){
      e.preventDefault();
      counter.stop();
      if(document.querySelector(params.controller.pause_icon)){
        var pause_icon = document.querySelector(params.controller.pause_icon);
        pause_icon.classList.add(params.controller.play_icon.slice(1,1000));
        pause_icon.classList.remove(params.controller.pause_icon.slice(1,1000));
      }
    }, false);
}
