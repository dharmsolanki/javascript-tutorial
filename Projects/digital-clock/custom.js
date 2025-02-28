let element = document.getElementById("clock");

const clock = function () {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session;

  // convert clock into 12 hour format
  if (hour > 12) { 
    hour = hour-12;
  }
  session = (hour >= 12 && min >= 0) ? "PM" : "AM";
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  element.innerHTML = hour + ":" + min + ":" + (sec + 1) + "" + session;
};
setInterval(clock, 1000);
