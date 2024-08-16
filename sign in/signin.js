// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB8EiZagvyKTnREMMl0sOva9W7v0h5Ie14",
  authDomain: "decorify-1bee2.firebaseapp.com",
  databaseURL: "https://decorify-1bee2-default-rtdb.firebaseio.com",
  projectId: "decorify-1bee2",
  storageBucket: "decorify-1bee2.appspot.com",
  messagingSenderId: "918297458466",
  appId: "1:918297458466:web:b4bdebd8b499c192c1577b",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

// sign up new user

function emailVerification() {
  var username = document.getElementById("name");
  var email = document.getElementById("email");
  var passward = document.getElementById("passward");

  if (username.value == "" || email.value == "" || passward.value == "") {
    alert("Plz Fill The Input Field");
  } else {
    // adding data in database

    var obj = {
      name: username.value,
      userEmail: email.value,
      userpassward: passward.value,
    };

    firebase.database().ref("user").push(obj);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, passward.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...

        // email verification

        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(() => {
            // Email verification sent!
            // ...
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    setTimeout(function () {
      location.href = "../index.html";
    }, 1000);

    username.value = "";
    email.value = "";
    passward.value = "";
  }
}

// sign in existing user

function logIn() {
  var emailuser = document.getElementById("useremail");
  var passwarduser = document.getElementById("userpassward");

  if (emailuser.value == "" || passwarduser.value == "") {
    alert("Plz Fill The Input Field");
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailuser.value, passwarduser.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    setTimeout(function () {
      location.href = "../index.html";
    }, 1000);

    emailuser.value = "";
    passwarduser.value = "";
  }
}

// login with google

function logInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  setTimeout(function () {
    location.href = "../index.html";
  }, 1000);
}

// log in with github

function logInWithGithub() {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      // IdP data available in result.additionalUserInfo.profile.
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  setTimeout(function () {
    location.href = "../index.html";
  }, 1000);
}

// forgot passward

function forgotPassward() {
  var emailuser = document.getElementById("useremail");

  firebase
    .auth()
    .sendPasswordResetEmail(emailuser.value)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}
