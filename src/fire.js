import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDdBc8eZwq7cCzyMBNPnSROF5HAJpyS2Rc",
    authDomain: "deevesoftinternship.firebaseapp.com",
    databaseURL: "https://deevesoftinternship.firebaseio.com",
    projectId: "deevesoftinternship",
    storageBucket: "deevesoftinternship.appspot.com",
    messagingSenderId: "181178602249",
    appId: "1:181178602249:web:7dfec618dbec35c69e39d8",
    measurementId: "G-SXLLLB0Y0Z"
  };
  // Initialize Firebase
  const fire =firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;