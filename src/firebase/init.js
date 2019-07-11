import firebase from 'firebase/app'
import '@firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyC3fdD-z2jY4FbP5OjX7mGyd0fDy6T7g-4",
    authDomain: "mnb-chat-trabajo-investigacion.firebaseapp.com",
    databaseURL: "https://mnb-chat-trabajo-investigacion.firebaseio.com",
    projectId: "mnb-chat-trabajo-investigacion",
    storageBucket: "mnb-chat-trabajo-investigacion.appspot.com",
    messagingSenderId: "386108096068",
    appId: "1:386108096068:web:e0980ed116f30cce"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
export default firestore;