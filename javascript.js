function openmenu(evt,ordered){
    var b,c;
    b = document.getElementsByClassName("menu");
    c = document.getElementsByClassName("tap_menu");
    for(var a = 0;a<c.length;a++){
        
        c[a].style.display = "none";
    }
    for(a = 0; a<c.length;a++){
        b[a].className = b[a].className.replace( " active","");
    }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(ordered).style.display = "block";
  evt.currentTarget.className += " active";

}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }