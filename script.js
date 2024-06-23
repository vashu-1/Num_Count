const valdisplays = document.querySelectorAll(".num");
let interval = 5000;

valdisplays.forEach((valdisplay) => {
  let startval = 0;
  let endval = parseInt(valdisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endval);
  let counter = setInterval(function () {
    startval += 1;
    valdisplay.textContent = startval;
    if (startval == endval) {
      clearInterval(counter);
    }
  }, duration);
});
