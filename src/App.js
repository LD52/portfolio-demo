import {Routes, Route} from 'react-router-dom'; 
import Home from './Components/Home.jsx'; 
import Skill from './Components/Skill.jsx'; 
import CV from './Components/CV.jsx'; 
import Contacts from './Components/Contacts.jsx'; 
import Details from './Components/Details.jsx'; 
import './App.css';

function App() {
  return (
    <>
    
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/Skill' element ={<Skill/>} />
    <Route path='/CV' element ={<CV/>} />
    <Route path="/Contacts" element ={<Contacts/>}/>
    <Route path="/Details" element={<Details/>} />
   </Routes>
   </>
  );
}

export default App;
