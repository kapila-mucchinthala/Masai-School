import './App.css';
import { Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UsersList';
import { UserDetail } from './components/UserDetail';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import {Settings } from './components/Settings';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
      <Route exact path='/'><Home /></Route>
        <PrivateRoute path='/about'><About /></PrivateRoute>
        <Route path='/contact'><h1>Contact Us:</h1><p>Warangal</p></Route>
        <Route path='/users'><UsersList /></Route>
        <PrivateRoute path='/user/:id'><UserDetail /></PrivateRoute>
        <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>
        <PrivateRoute path='/settings'><Settings /></PrivateRoute>
        <Route path='/login'><Login /></Route>
      <Route>404 Page Not Found</Route>
      </Switch>
    </div>
  );
}

export default App;
