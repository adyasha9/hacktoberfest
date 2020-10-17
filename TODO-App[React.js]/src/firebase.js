import firebase from "firebase";

const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app-XXXXX",
  storageBucket: "your-app-XXXXX.appspot.com",
  messagingSenderId: "427406109842",
  appId: "1:XXXXXXXXXXX:web:XXXXXXXXXXXXXXXXXXXXXX",
  measurementId: "G-XXXXXXXXXXXXXXX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
