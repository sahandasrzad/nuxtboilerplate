const Cookie = process.server ? require('js-cookie') : undefined
// import Cookie from 'js-cookie'
export default function ({ store, redirect }) {

    console.log('myauth');
    console.log(store.state.auth.loggedIn)
    // console.log($auth)
    console.log('myauth');
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }
  }
  