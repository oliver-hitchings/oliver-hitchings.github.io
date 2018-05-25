(function() {
  const txtUsername = document.getElementById("txtUsername");
  const txtPassword = document.getElementById("txtPassword");
  const buttonLogin = document.getElementById("buttonLogin");

  buttonLogin.addEventListener('click', e => {
    if ((txtUsername.value.toLowerCase() == "oliver") && (txtPassword.value == "fish")) {
      window.location.replace("/login/oli.html")
    } else if ((txtUsername.value.toLowerCase() == "admin") && (txtPassword.value == "pasword")) {
      window.location.replace("/login/daniel.html")
    } else {
      alert("Invalid Credentials")
    }
  })
})()
