// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth ,GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEIZkaDRg3SXD85VsQvtKwOlhNt4tA1Ck",
  authDomain: "fir-da4d8.firebaseapp.com",
  projectId: "fir-da4d8",
  storageBucket: "fir-da4d8.appspot.com",
  messagingSenderId: "607156689154",
  appId: "1:607156689154:web:c94702d2f200efc49b8a1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth();

// Função para login com Google
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
}

document.getElementById("login").addEventListener("click", signInWithGoogle);