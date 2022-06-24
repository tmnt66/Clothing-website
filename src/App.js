import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up.component/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase-utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './components/redux/action';

class App extends React.Component {
  unSubscribeFromAuth = null
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
         setCurrentUser ({
              id: snapshot.id,
              ...snapshot.data()
            })
          },()=>{console.log(this.state)
        })
        // console.log(this.state)
      }
      setCurrentUser( userAuth )
      createUserProfileDocument(userAuth);

    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {

    return (
      // <div className="App">
      // <HomePage/>
      // </div>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          {/* <Route  path='/topic' element = {<TopicPage/>}/> */}
          {/* <Route  path='/list/:topicId' element = {<ListPage/>}/> */}
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})



export default connect(null ,mapDispatchToProp )(App);
