// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const firebase = require('firebase/app')
// require('firebase/analytics')
// require('firebase/firestore')

// PRODUCTION CONFIG - WITH PERMISSION ERROR
// var firebaseConfig = {
//     apiKey: "AIzaSyD0hU-MKuo4fu0CVaIOshZ_5QDf49W8lOM",
//     authDomain: "easymei-backend-dev.firebaseapp.com",
//     databaseURL: "https://easymei-backend-dev.firebaseio.com",
//     projectId: "easymei-backend-dev",
//     storageBucket: "easymei-backend-dev.appspot.com",
//     messagingSenderId: "393715247766",
//     appId: "1:393715247766:web:ce7bcf4692d8640b86f0b7",
//     measurementId: "G-MRK1R2NDDQ"
//   };

// LOCAL CONFIG
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
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// const db = firebase.firestore();

module.exports = function(api) {
    api.loadSource(async actions => {
        // // PRODUCTION COLLECTIONS
        // // let contador = db.collection('portal_contador');
        // let contador = db.collection('contadores')
        // // CREATE COLLECTION CONTADORES
        // const collection = actions.addCollection({
        //     typeName: 'Contadores'
        // })
        // // QUERY FIREBASE
        // let query = db.collection('contadores')
        //     .get()
        //     .then(snapshot => {
        //         snapshot.forEach(doc => {
        //             let contador = doc.data()
        //             let node = {
        //                 id: doc.id,
        //                 ...contador
        //             }
        //             collection.addNode(node)
        //             console.log(doc.id, '=>', contador);
        //         });
        //     })
        //     .catch(err => {
        //         console.log('Error getting documents', err);
        //     });
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    })

    api.createPages(({
        createPage
    }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}