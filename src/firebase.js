import firebase from 'firebase'
const firebaseConfig = {
      apiKey: "AIzaSyAubsYn_MEydjtndlXoqLaVNdP68Q5A73Q",
      authDomain: "video-5087b.firebaseapp.com",
      projectId: "video-5087b",
      storageBucket: "video-5087b.appspot.com",
      messagingSenderId: "614329281563",
      appId: "1:614329281563:web:ffd9aba48fad68d595dcbe",
      measurementId: "G-B8W93C1BWZ"
    };

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export default auth;
