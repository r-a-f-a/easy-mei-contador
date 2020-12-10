// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import store from './store'
import firebase from './firebase'
export default function (Vue, { router, head, isClient}) {
  // Set default layout as a global component
  let contadores = firebase.getAllContadores()
  Vue.component('Layout', DefaultLayout)
  
}
