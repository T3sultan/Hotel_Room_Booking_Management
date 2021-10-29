
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AddANewService from './components/AddANewService/AddANewService';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MangeAllOrders from './components/MangeAllOrders/MangeAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/mangeAllOrders">
              <MangeAllOrders></MangeAllOrders>
            </Route>
            <Route exact path="/addNewService">
              <AddANewService></AddANewService>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
