  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDYaa8ZiuHtbFnoMsNIRyyIxJBxysjzIas",
    authDomain: "udemy-ninja-smoothies-fedaf.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-fedaf.firebaseio.com",
    projectId: "udemy-ninja-smoothies-fedaf",
    storageBucket: "udemy-ninja-smoothies-fedaf.appspot.com",
    messagingSenderId: "140633177583"
  };
  const firebaseApp = firebase.initializeApp(config);
  
  //export firestore database
export default firebaseApp.firestore()