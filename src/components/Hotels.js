import React, {useState,useEffect} from "react";
import fire from "../fire";

const Hotels = () => {
const [Hotel,SetHotel] = useState('');
  useEffect(() => {
      const hotelRef = fire.database().ref('Hotel');
       hotelRef.on('value',(snapshot) => {
           const hotels = snapshot.val();
           const HotelList = [];
           for (let id in hotels){
               HotelList.push(hotels[id])
           }
           console.log(HotelList);
           SetHotel(HotelList);
       });

  },[]);
    return(
<div>

</div>
    )

}
export default Hotels;