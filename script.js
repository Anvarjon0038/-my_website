let clicks = 0;
function countClicks() {
  clicks++;
  document.getElementById("clickCount").innerText = clicks;
}

function resetClicks() {
  clicks = 0;
  document.getElementById("clickCount").innerText = clicks;
}

function clearClicks() {
  document.getElementById("clickCount").innerText = "0";
}


function decrementClicks() {
  if (clicks > 0) {
    clicks--;
    document.getElementById("clickCount").innerText = clicks;
  }
}
