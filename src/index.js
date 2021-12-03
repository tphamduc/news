import React, {Fragment,  Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import SignIn from './Module/InPut/SignIn/SignIn';

const isLogged = true;

const Root = (
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));

export default Root;