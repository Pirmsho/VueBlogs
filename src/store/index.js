import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import 'firebase/auth'
import db from '../firebase/firebaseInit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleblogCards: [
      {
        blogTitle: 'blog card #1',
        blogCoverPhoto: 'stock-1',
        blogDate: 'August 20th',
      },
      {
        blogTitle: 'blog card #2',
        blogCoverPhoto: 'stock-2',
        blogDate: 'August 20th',
      },
      {
        blogTitle: 'blog card #3',
        blogCoverPhoto: 'stock-3',
        blogDate: 'August 20th',
      },
      {
        blogTitle: 'blog card #4',
        blogCoverPhoto: 'stock-4',
        blogDate: 'August 20th',
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log(state.editPost)
    },
  },
  actions: {},
  modules: {},
})
