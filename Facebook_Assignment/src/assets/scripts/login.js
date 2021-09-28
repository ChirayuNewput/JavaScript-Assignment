window.logIn = function () {
  var displayLoginPage = {};
  var click = "click";
  var mainContainer = $("#main-container");

  //defining formValidation
  function formValidation() {
    usernameValidation();
    passwordValidation();
  }
  //defining usernameValidation
  function usernameValidation() {
    if (username.value == "") {
      exclamation_username.style.display = "inline";
      verified_username.style.display = "none";
      errorMsg_username.innerText = "Username cant be empty";
    } else {
      exclamation_username.style.display = "none";
      verified_username.style.display = "inline";
      errorMsg_username.innerText = "Verified";
    }
  }

  //defining passwordvalidation
  function passwordValidation() {
    if (password.value == "") {
      exclamation_password.style.display = "inline";
      verified_password.style.display = "none";
      errorMsg_password.innerText = "Password cant be empty";
    } else {
      exclamation_password.style.display = "none";
      verified_password.style.display = "inline";
      errorMsg_password.innerText = "Verified";
    }
  }
  //defining loginverification
  function loginVerification(json) {
    $.get('/src/assets/data/login_credential.json',function(json){
    if (
      username.value == json.userName &&
      password.value == json.password
    ) {
      location.href='/src/facebook.html'
    } else {
      showInvalid.style.display = "block";
    }
  })
  }

  //defining reset form
  function resetForm() {
    username.value = "";
    password.value = "";
  }

  function logInPage() {
    let templateUrl = "/src/assets/templates/login.mustache";
    $.get({
      url: templateUrl,
      type: "GET",
      success: function (logInTemplate) {
        mainContainer.append(logInTemplate);
        formValidation();
      },
    });
  }

  function bind() {
    logInPage();
    const json = {
      loginCredential: {
        userName: "mark",
        password: "12345",
      },
      users: [
        {
          userName: "some",
          password: "223",
          fName: "",
          lastName: "",
          id: 1,
        },
      ],
    };
    //submitting form
    $.get("/src/assets/templates/login.mustache", function () {
      let loginForm = "#" + $(".form-div").find("form").attr("id");
      $(loginForm).click(function (e) {
        e.preventDefault();
        formValidation();
      });
    });
    //click on login
    $.get("/src/assets/templates/login.mustache", function () {
      let loginBtn = "#" + $(".login").find("button").attr("id");
      $(loginBtn).click(function () {
        loginVerification(json);
      });
    });

    //click on reset
    $.get("/src/assets/templates/login.mustache", function () {
      let resetBtn = "#" + $(".reset").find("button").attr("id");
      $(resetBtn).click(function () {
        resetForm();
      });
    });
  }

  displayLoginPage.initialize = function () {
    bind();
    // logInPage();
  };
  return displayLoginPage;
};
