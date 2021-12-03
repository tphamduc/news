import logo from './logo.svg';
import './App.css';
import React, {Component, Fragment} from "react"
import AppHeader from './Shared/AppHeader';
import AllPost from './Module/Shared/AllPost';
import Footer from './Shared/Footer';
import SignIn from './Module/InPut/SignIn/SignIn';
import SignUp from './Module/InPut/SignUp/SignUp';
import DraftPost from './Module/Post/DrafPost';
import ProfileUSer from './Module/User/ProfileUser';
import ListUser from './Module/User/ListUser';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router';



class App extends Component {
  render(){
    return(   
      <Fragment>
        <Routes>
          <Route path="/" >
            <Route index element={<SignIn />} />
            <Route path="main" element={<AllPost />}/>
            <Route path="user" element={<ProfileUSer/>}></Route>
            <Route path="profile" element={<ListUser/> }/>
            <Route path="signup" element={<SignUp/>}></Route>
            <Route path="draft" element={<DraftPost/>}></Route>
          </Route>
        </Routes>
      </Fragment> 
    )
  }
}

export default App;