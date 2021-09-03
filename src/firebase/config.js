import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCwgk-SVCiVCMZQpwp6s-YHXZ3VudiMxiY",
    authDomain: "udemy-vue-firebase-sites-e35f5.firebaseapp.com",
    databaseURL: "https://udemy-vue-firebase-sites-e35f5.firebaseio.com",
    projectId: "udemy-vue-firebase-sites-e35f5",
    storageBucket: "udemy-vue-firebase-sites-e35f5.appspot.com",
    messagingSenderId: "24052880056",
    appId: "1:24052880056:web:f45eb273bd10964fa29a4d"
  }

 //init firebase
 firebase.initializeApp(firebaseConfig)

 //init firestore service
 const projectFirestore = firebase.firestore()
 
 const timestamp = firebase.firestore.FieldValue.serverTimestamp

 const projectAuth = firebase.auth()
 
 //export firestore
 export { projectFirestore, timestamp, projectAuth }