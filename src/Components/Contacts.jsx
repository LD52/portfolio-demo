import "../Contacts.css"; 
import Nav from './Nav'; 
import Footer from './Footer'; 
import enveloppe from "../images/msg.png";
import {Link} from 'react-router-dom'; 
import "bootstrap/dist/css/bootstrap.min.css";
import call from '../images/withphone.png'; 
import standup from "../images/rsn.png";
import pics from "../images/lebg.png";
function Contact() {
    return (
        <>
        <Nav/>

        <div className="wave container-fluid">
            <div className="lidar">
                <div className="luminous">
                    <div className="heat">
                  <img src={enveloppe} alt="pic" className="sunlit"/>
                </div>
           <div className="shining"> <Link to="emailto:konancurry@gmail.com" className="ignite">konancurry@gmail.com</Link></div>
                </div>
                <div className="luminous">
  <div className="heat"> 
            <img src={call} alt="photo" className="sunlit"/></div>
 <div className="ignite"> +225 0779088006</div>
           </div>
<div className="twilight">
<div className="heat"> 
            <img src={standup} alt="photo" className="sunlit"/></div>
 <div className="shining"> <Link to="https://twitter.com/KonanLuca" className="ignite">https://twitter.com/KonanLuca</Link>
 <Link to="https://www.facebook.com/profile.php?id=100082857316626" className="ignite">https://www.facebook.com/profile.php?id=100082857316626</Link>
 <Link to="https://www.instagram.com/_name_it_idk/" className="ignite">https://www.instagram.com/_name_it_idk/</Link>
 <Link to="https://www.linkedin.com/in/luca-david52" className="ignite">https://www.linkedin.com/in/luca-david52</Link></div>

</div>
                
    


                </div>




            <div className="aura">
                <img src={pics} alt="photo" className="laser"/>
            </div>
            

        </div>




        <Footer/>
        </>
    )
}
export default Contact; 