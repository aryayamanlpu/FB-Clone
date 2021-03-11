import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDDfIPwj8lWYqqAMXsAFZgx29mdRGPTuH0",
    authDomain: "facebook-clone-3e1fc.firebaseapp.com",
    projectId: "facebook-clone-3e1fc",
    storageBucket: "facebook-clone-3e1fc.appspot.com",
    messagingSenderId: "24416274991",
    appId: "1:24416274991:web:5e6ba5bcd2045fb42754da"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export { auth,provider };
  export default db;