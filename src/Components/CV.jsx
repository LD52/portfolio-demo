import React from 'react'; 
import Nav from './Nav';
import Footer from './Footer'; 
import videocv from '../images/CV.mp4'
import firstcv from '../images/CVfirst.jpg'; 
import secondcv from '../images/CVsecond.jpg'; 
import '../Cv.css'; 
 
function CV () {
    return (
        <>
        <Nav/>

<div className='container-fluid'>
        <div className='cil'>  
 <video src={videocv}  autoPlay loop muted className='vcg'/>

    <div className='pencil'>C.V</div>

 </div>
 <div className='eraser'>
    <div><img src={firstcv} alt="photo" className='vcv' /> </div>
    <div> <img src={secondcv} alt="photo" className='vcv'/> </div>
 </div>
</div>

 

 

        





        <Footer/>
        </>
        
    )
}
export default CV