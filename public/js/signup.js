async function signupForm(e) {
    e.preventDefault()

    const name = ''
    const username =''
    const email = ''
    const password = ''
    const bio = ''
    const location = ''

    

}

//Show password code
document.getElementById("show-password").addEventListener("change", function() {
    var passwordInput = document.getElementById("password");
    if (this.checked) {
      passwordInput.setAttribute("type", "text");
    } else {
      passwordInput.setAttribute("type", "password");
    }
  });