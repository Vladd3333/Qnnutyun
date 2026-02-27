document.addEventListener("DOMContentLoaded", function() {    
  let player = document.getElementById("game");
  let topPos = 100;
  let leftPos = 100;

  if (player) {
    player.style.position = "absolute"; 
    player.style.top = topPos + "px"; 
    player.style.left = leftPos + "px";

    window.addEventListener("keydown", function(e) {
      if (e.key === "ArrowUp") topPos -= 10;
      if (e.key === "ArrowDown") topPos += 10;
      if (e.key === "ArrowLeft") leftPos -= 10;
      if (e.key === "ArrowRight") leftPos += 10;

      player.style.top = topPos + "px";
      player.style.left = leftPos + "px";
    });
  }
})