/**
 * Configuração do Firebase
 * By Moonsea e Lenna
 * MIT License 
 **/

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDy_yfjQXgEyF6l5jfTcAxrpdk1CmmHUj8",
    authDomain: "gatolandia-42577.firebaseapp.com",
    projectId: "gatolandia-42577",
    storageBucket: "gatolandia-42577.appspot.com",
    messagingSenderId: "399243664723",
    appId: "1:399243664723:web:0d4832abd43a9af651d5a6",
    measurementId: "G-3DCN0NKBY0"
  };

// Incializa o Firebase
firebase.initializeApp(firebaseConfig);

// Incializa o Firebase Authentication
const auth = firebase.auth();

// Define o provedor de autenticação
var provider = new firebase.auth.GoogleAuthProvider();
