import '../App.css'; 
import React from 'react'; 
import Nav from './Nav'; 
import Footer from './Footer'; 
import circle from '../images/laphoto.png'; 
function Home () {


  {/*}  function deleteDiv(divID) {
        var div = document.getElementById(divID);
        div.parentNode.removeChild(div);
      }
      if (window.innerWidth < 768) {
        deleteDiv("ri");
      }*/}


    return (
        <>
    <Nav/>
 {/*   <div class="container-fluid">
    <div className="container">
   */}
    <div class='root-coder'> 
  <div className='cooker'>
        Hello, I'm Konan Luca-David and I'm a fullstack js web developer and a digital marketer...
21 years old and I have already had a different course than the average, I come out of a fullstack js web development bootcamp and I am able to offer my skills in this area and also in the field of digital marketing.
Very quickly, I made the decision to learn the trades of the web in order to have an open mind on them. In love with digital fields, I am doing a training in Digital Marketing alternately with my license at the virtual university of my country. Then the following year I decided to do a training in web development, enough to start my journey with the code.
I find myself doing what I love, creating dynamic web solutions in computer languages. I know this is the start of my IT journey and I have faith that I will still love learning. Believe in the process!! The work is not finished.   
    </div>
    <div className='img-right' id="ri">
        <div className='portrait'> <img className="cercle" src= {circle} alt='photo'/> </div>
    </div> 
    </div>  {/*</div>

</div> */}
    <Footer/> 
        </>
    )
}
export default Home;