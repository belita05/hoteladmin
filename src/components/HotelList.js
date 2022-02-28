import NavBar from "./NavBar/NavBar"
import "./Home.css"

const HotelList = (hotelList) =>{
return(
    <div>
   <NavBar></NavBar>
       <h1>{hotelList.name}</h1>
    </div>
 
);
}
export default HotelList