//const test = document.getElementById('#clock');

//console.log(d.toLocaleString());
setInterval(function () {
    let d = new Date();
    console.log(d);
    clock.innerHTML = d.toLocaleTimeString();
  }, 1000);
  