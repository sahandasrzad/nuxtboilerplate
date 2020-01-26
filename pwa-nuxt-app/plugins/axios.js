// import store from 'store'

export default function ({$auth, $axios, redirect,store }, inject) {
console.log('axios');
// var data = $auth.$storage.getUniversal('token')
// //  var data  = this.$auth.$storage.getCookie('auth._token.local')
//      console.log(data);
// console.log(this.auth);

// var data = store
// console.log(store.app.store)
// console.log($auth)
console.log('axios');
const api = $axios.create({  
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*',
        'api-key': '$2y$10$cxPkwmI3cSAM4vcHEVL1i.e3At.X0AaDBgcNap5WkP4ekWWsPZBEO',
        'Access-Control-Allow-Origin':'*'
      }
    }
  })
  api.setHeader('Access-Control-Allow-Origin', '*')
  api.onRequest(
    config => {
      config.headers['Access-Control-Allow-Origin'] ='*'
  }
  )
  api.onResponse(
    config => {   
  }
  )
  api.onError(error => {
   console.log(error); 
  })
  // Inject to context as $api
  inject('api', api)
}