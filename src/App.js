
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import AddANewService from './components/AddANewService/AddANewService';
import ExclusiveFeatures from './components/ExclusiveFeatures/ExclusiveFeatures';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MangeAllOrders from './components/MangeAllOrders/MangeAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import ServicesMan from './components/ServicesMan/ServicesMan';
import Update from './components/Update/Update';
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
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/servicesMan">
              <ServicesMan></ServicesMan>
            </Route>
            <Route exact path="/exclusive">
              <ExclusiveFeatures></ExclusiveFeatures>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/mangeAllOrders">
              <MangeAllOrders></MangeAllOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addNewService">
              <AddANewService></AddANewService>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route exact path="/services/update/:id">
              <Update></Update>
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
