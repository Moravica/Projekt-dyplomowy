// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    // Importowanie menu
    var menuDiv = document.getElementById("sidebar");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        menuDiv.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/static/sidebar.html", true);
    xhttp.send();
  });