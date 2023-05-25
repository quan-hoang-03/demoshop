window.onload = function(){ 
  
    var modal = document.getElementById("modal-user");
    var modal__overlay = document.getElementsByClassName("modal__overlay");
    var open = document.getElementById("modal-user_open");
    var close = document.getElementsByClassName("modal-user_close")[0];
    var register = document.getElementById("modal-register");
    var login = document.getElementById("modal-login");
    var switch_login = document.getElementById("login-switch");
    var switch_register = document.getElementById("register-switch");
    var login_close = document.getElementById("login-close")

    // Get the icon [shop bag] that opens the modal user
    open.onclick = function() {
        modal.style.display = "flex";
        register.style.display = "block";
        login.style.display = "none";
      }

    // Get the button [TRỞ LẠI] that close the modal user

    close.onclick = function() {
        modal.style.display = "none";
    }

    login_close.onclick = function() {
      modal.style.display = "none";
  }

    // When the user clicks anywhere outside of the modal, close it
    // But it's not working, fix it later
    window.onclick = function(event) {
      if (event.target == modal__overlay) {
        modal.style.display = "none";
      }
    }

    // Switch to login modal
    switch_login.onclick = function() {
        register.style.display = "none";
        login.style.display = "block";
    }
    
    // Switch to register modal
    switch_register.onclick = function() {
        register.style.display = "block";
        login.style.display = "none";
    }
};

