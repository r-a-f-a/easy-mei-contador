import firebase from 'firebase'
import config from './firebase.json'
import store from './store'

// Initialize Firebase
firebase.initializeApp(config.auth);
firebase.analytics();
const db = firebase.firestore();
export default {
  getAllContadores(){
    return db.collection(config.collection)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                  console.log('DOC', JSON.stringify(doc.data()))
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