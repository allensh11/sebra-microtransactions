import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exchangeTokenForAuth } from '../../store/actions/auth';
import Nav from '../Nav';
import Auth from '../auth/Auth';
import Dashboard from '../dashboard/Dashboard';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(exchangeTokenForAuth()) });

    return (
      <Router>
        <Route render={ ({ location, history }) => <Nav pathname={ location.pathname } history={ history }/> } />
        <Route path='/(login|create-account)' render={ ({ location, history }) => <Auth pathname={ location.pathname } history={ history }/> }/>
        <Route exact path='/dashboard' render={ ({ history }) => <Dashboard history={ history }/> }/>
      </Router>
    )
}


export default App;
