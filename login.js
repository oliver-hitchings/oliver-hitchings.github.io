(function() {
  const txtUsername = document.getElementById("txtUsername");
  const txtPassword = document.getElementById("txtPassword");
  const buttonLogin = document.getElementById("buttonLogin");

  buttonLogin.addEventListener('click', e => {
    if ((txtUsername.value.toLowerCase() == "oli") && (txtPassword.value == "fish")) {
      window.location.replace("/login/oli.html")
    } else if ((txtUsername.value.toLowerCase() == "daniel") && (txtPassword.value == "bob")) {
      window.location.replace("/login/daniel.html")
    } else {
      alert("Invalid Credentials")
    }
  })
})()
