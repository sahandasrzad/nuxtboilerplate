

export const state = () => {
  return {
    auth: null
  }
}


export const getters = {
  isAuthenticated(state) {
    console.log("isAuthenticated");
    
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    console.log('loggedInUser');
    
    return state.auth.user
  }
}



export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
}

// const cookieparser = process.server ? require('cookieparser') : undefined
export const actions = {
  // nuxtServerInit ({ commit,context }, { req }) {
  //   let auth = null
  //   if (req.headers.cookie) {
  //     const parsed = cookieparser.parse(req.headers.cookie)
  //     try {
  //       auth = JSON.parse(parsed.auth)
  //     } catch (err) {
  //       // No valid cookie found
  //     }
  //   }
  //   commit('setAuth', auth)
  // }
}