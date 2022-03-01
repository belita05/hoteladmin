import NavBar from "./NavBar/NavBar"
import {GoogleApiWrapper} from 'google-maps-react';
import { useState } from "react";
import './HotelAdd.css'
import fire from './../fire'

const HotelAdd = () =>{

  const [name,setName] = useState('');
  const [Description,setDescripton] = useState('');
  const [Location,setLocation] = useState('');
  const [Rating,setRating] = useState('');
  const [Image,setImage] = useState('');
  const[HotelError ,setHotelError] = useState('');

  const AddHotel = () =>{
    if (name !== ""){
      setHotelError("");
      if (Description!== ""){
        setHotelError("");
        
        if (Location !== ""){
          setHotelError("");
          if(Rating !== ""){
            setHotelError("");
            if (Image!== ""){
              setHotelError("");
              const AddHotelref = fire.database().ref('Hotel');
              const Hotel = {
                name,
                Description,
                Location,
                Rating,
                Image,
          
              };
              AddHotelref.push(Hotel);

            }else{
              setHotelError("Choose Image File");
            }
          }else{
            setHotelError("Enter The Hotel Rating");
          }
        
        }else{
          setHotelError("Enter Location Of The Hotel");
        }
      }
      else{
        setHotelError("Enter The Description of the Hotel");
      }
    }else{
      setHotelError("Enter The Hotel Name");
    }
  
  }
return(
    <div>
   <NavBar></NavBar>
   <section className="login">
        <div className="HotelContainer">
            <h1>Add New Hotel</h1>
            <p className="errorMsg"> {HotelError}</p>
            <label>Hotel Name</label>
            <input type="text" required value={name}
            onChange={(e) => setName(e.target.value)}
             />
             <label>Hotel Description</label>
            <input type="text"
            required value={Description}
            onChange={(e) => setDescripton(e.target.value)}
             />
<label>Hotel Location</label>
            <input type="text" required value={Location}
            onChange={(e) => setLocation(e.target.value)}
             />
              <label>Hotel Rating Star</label>
            <input type="text" max="5"min= "1"
            required value={Rating}
            onChange={(e) => setRating(e.target.value)}
             />
                <label>Choose Hotel Image</label>
            <input type="file"
            required value={Image}
            onChange={(e) => setImage(e.target.value)}
             />
           <button onClick={AddHotel} className="buttonAdd">Add Hotel</button>
        
        </div>
     </section>

    </div>
 
);
}
export default HotelAdd