import '../App.css'; 
import {Link} from 'react-router-dom'; 
import enveloppe from '../images/email.png'; 
import Twitter from '../images/Twitter.png'; 
import Instagram from '../images/Instagram.png'; 
import Facebook from '../images/facebook.png';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
import Linkedin from '../images/Linkedin.png'; 
import github from '../images/github.png'; 
import logo from '../images/Logo.png'; 

function Nav () {
    return (
        <>
<div className='root  container-fluid'>
        <div className='boat'>
            <div className='beam'>
            <div className='box-img'>  <Link to="/" path="Home.jsx"><img src={logo} className='logo' alt='photo'/></Link>  </div>
                
   
                    
                    
    
               
                 </div>
        </div>
        <div className='second-boat'>
            
            <Link to="/" className="link" path="Home.jsx">Home</Link>
            <Link to="/CV" className='link' path="CV.jsx">CV</Link>
            <Link to="/Skill" className='link' path="Skill.jsx">Skills</Link>
            <Link to="/Details" className='link' path="Details.jsx">Details</Link>
            <Link to="/Contacts" className='link' path="Contact.jsx">Contacts</Link>
        </div>
        <div className='third-boat'>
            <div className='thboat'> <Link to='mailto:konancurry@gmail.com'> <img src={enveloppe} className='network' alt="picture"/> </Link></div>
            <div className='thboat'> <Link to='https://twitter.com/KonanLuca'> <img src={Twitter} className='network' alt="picture"/> </Link></div>
            <div className='thboat'> <Link to='https://www.facebook.com/profile.php?id=100082857316626'> <img src={Facebook} className='network' alt="picture"/> </Link></div>
            <div className='thboat'> <Link to="https://www.instagram.com/_name_it_idk/"> <img  src={Instagram} className='network'  alt="picture" /></Link></div>
            <div className="thboat"> <Link to="https://github.com/LD52"> <img src={github} className='network' alt='picture' /></Link></div>
            <div className="thboat"> <Link to="https://www.linkedin.com/in/luca-david52"> <img src={Linkedin} className='network' alt="picture"/></Link></div>


        </div>
</div>

        
        
        
        </>
    )
}

export default Nav; 