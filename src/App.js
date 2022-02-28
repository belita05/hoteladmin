import './App.css';
import Home from './components/Home';
import Start from './components/Start';
import Bookings from './components/Bookings';
import HotelList from'./components/HotelList';
import HotelAdd from'./components/HotelAdd';
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';

function App () {
 
  return (
    <Router>
      <div className="App">
     <Switch>
        <Route exact path="/">
<Start/>
        </Route>
        <Route path="/Home">
<Home></Home>
        </Route>
        <Route path="/Bookings">
<Bookings></Bookings>
        </Route>
        <Route path="/HotelList">
<HotelList></HotelList>
        </Route>
        <Route path="/HotelAdd">
<HotelAdd>
  
</HotelAdd>
        </Route>
     </Switch>
</div>
    </Router>
  
  );
};

export default App;
