import React from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up.component/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './components/firebase/firebase-utils'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },()=>{console.log(this.state)
        })
        })
        // console.log(this.state)
      }
      this.setState({ currentUser: userAuth })
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
        <Header currentUser={this.state.currentUser} />
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

export default App;
