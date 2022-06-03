import React from 'react'
import { Routes,Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop-page.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up.component/sign-in-and-sign-up.component';
import {auth } from './components/firebase/firebase-utils'


class App extends React.Component{
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }

  unSubscribeFromAuth=null

  componentDidMount(){
     this.unSubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){

    return (
      // <div className="App">
      // <HomePage/>
      // </div>
      <div className='App'>
<Header currentUser={this.state.currentUser}/>
<Routes>
<Route  path='/' element = {<HomePage/>} />
<Route  exact path='/shop' element = {<ShopPage/>}/>
{/* <Route  path='/topic' element = {<TopicPage/>}/> */}
{/* <Route  path='/list/:topicId' element = {<ListPage/>}/> */}
<Route path='/signin' element={<SignInAndSignUpPage/>}/>
</Routes>

    </div>
  );
}
}

export default App;
