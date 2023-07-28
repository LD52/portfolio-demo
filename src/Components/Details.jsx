import '../Details.css'; 
import Nav from './Nav'; 
import Footer from './Footer'; 
import code from '../images/code.png'; 
import marketing from '../images/Marketing.png'; 

function Details () {
    return (
        <>
        <Nav/>

        <div className='daydream container-fluid'>
            <div className='ambition'>
                <div className='reverie'> <img src={marketing} alt='photo' className="revery"/></div>
                
                <div className='chimeria'>
                <div className='aspiration'> Marketing Digital</div>
                <div className='desire'> Marketing was for me the first step in the world of IT, the work of business web optimization is a discovered passion. </div>
</div>

<div className='fantasize'>
                <div className='magical'> Skills: </div>
                <div className='nightmare'> 
                <div>SEO</div>
                <div>SEM</div>
                <div>Social Media</div>
                <div>Web Analytics</div>
                <div>Branding </div>
                <div>Web Marketing</div>
                 </div>
</div>

<div className='bug'>
                 <div className='imaginary'>Services:</div>
                 <div className='ideal'>
                    <div>optimize the image on the web</div>
                    <div>Optimize positioning on web search results</div>
                    <div>Create a quality SEO</div>
                    <div>Create a social reputation on social networks</div>
                    <div>Manage social accounts to maintain and grow the community</div>
                 </div>
                 </div>
</div>



            <div className='ambition'>
                <div className='reverie'> <img src={code} alt="photo" className='revery'/> </div>
                <div className='chimeria'>
                <div className='aspiration'>Web development</div>
                <div className='desire'> Coding starts with love to solve many equations. And I think computer bugs are the best equation wall you can come across. I'll be happy to solve as many as I can in my life as a coder. </div>
</div>

<div className='wish'>


                <div className='magical'> Languages and Tools: </div>
                <div className='illusions'> 
                <div className='utopia'>
                <div>HTML</div>
                <div>CSS</div>
                <div>Javascript</div>
                <div>Node js</div>
                <div>Figma</div>
                <div>express js</div>
                
            </div>
            <div className='utopia'>
                <div>MongoDB</div>
                <div>Python</div>
                <div>Linux</div>
                <div>Cloud</div>
                 <div>API</div>
                <div>React js</div>
                <div>Rest API</div>
            </div>
            <div className='utopia'>
                <div>Wordpress</div>
                <div>Shopify</div>
                <div>Mongoose</div>
                <div>Git</div>
                <div>Github</div>
                <div>Atlas</div>
               
            </div>
                 </div>

</div>
<div className='bug'>
                 <div className='imaginary'> Services: </div>
                 <div className='ideal'>
                    <div> Build the FrontEnd of a website </div>
                    <div>Build the Backend of a website</div>
                    <div>Build a website entirely </div>
                    <div>Maintain and evaluate an existing web architecture</div>
                    <div>Integrate applications and services into a website</div>
                    <div>Create websites with the use of CMS and framework</div>
                     </div>
</div>

                  </div>


        </div>

        <Footer/>
        </>
    )
}
 export default Details; 