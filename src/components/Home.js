import NavBar from "./NavBar/NavBar"
import "./Home.css"

const Home = () =>{
return(
    <div>
   <NavBar></NavBar>
   <div className="HomeContent">
       <h1>Hotel Finder </h1><br/> 
      <h2> Welcome To Our  <br/>
       Admin Home Page</h2>
   </div>
    </div>
 
);
}
export default Home