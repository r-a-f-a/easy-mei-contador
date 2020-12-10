import firebase from 'firebase'
import store from './store'
const firebaseConfig = {
    apiKey: "AIzaSyAH2vI8GRyrWxEhhHjOK8AWbs7_CtcN5pM",
    authDomain: "easymei-73b71.firebaseapp.com",
    databaseURL: "https://easymei-73b71.firebaseio.com",
    projectId: "easymei-73b71",
    storageBucket: "easymei-73b71.appspot.com",
    messagingSenderId: "579663411746",
    appId: "1:579663411746:web:7411635cd884984cd6287b",
    measurementId: "G-84F8FG2PPY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
export default {
  getAllContadores(){
    return db.collection('contadores')
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                  let contador = doc.data()
                  let node = {
                      id: doc.id,
                      ...contador
                  }
                  store.commit('addContador', node)
              })
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
  }
}