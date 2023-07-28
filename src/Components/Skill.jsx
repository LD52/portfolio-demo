import '../Cv.css'; 
import Nav from './Nav'; 
import Footer from './Footer'; 
import {Link} from 'react-router-dom'; 
function Skill ()  {
    return ( 
    <>
 <Nav />
 <div className='container-fluid'>
<div className='grand'>
    <div className='skill'>My Skills </div>

</div>
<div className='large'>

<div className='vice-large'>
    <div className='underlarge'>Digital Marketing</div>
<div className='middlepic'> <Link className='linky' to="/Details" path="Details.jsx">More Details</Link></div>
<div className='underlarge'>Dev Web Fullstack</div>

</div>

<div className='bottom-large'>
<div className='left-large'> I started digital marketing with a desperate desire to master the digital advertising system. My apprenticeship begins in this field with a degree in Digital Marketing at the virtual university of my country but very quickly I decide to go in depth because the university process was a bit limiting.
In this hollow, I discover the certification and training system in the digital field. I did courses with Google Digital Garage, Meta Blueprint, NPTEL india, Alison Courses...
I will not finish learning and I know that I will do my best to reach a good level </div>
<div className='right-large'> My journey as a coder has only just begun. I come from a training school in Fullstack Web Development at GOMYCODE. Where I was taught to do everything in web development. There I learn to do the front-end, the back-end, values like self-taught, discipline, organization. I learn to satisfy business requests within the time limits set by the projects that we were given to carry out in minimal time. It's really rewarding to give yourself to learning this skill and I think I'm one of the most proud of this journey. I am able to deliver code, projects, help in corporate teams, creativity. Still a Junior, but my aspirations are all the greater, The work is not finished!!</div>
</div>

</div>
</div>
<Footer/>
    </>
    )
}
export default Skill; 