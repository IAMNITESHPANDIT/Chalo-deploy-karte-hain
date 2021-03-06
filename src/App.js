import './App.css';
import NavBar from './component/NavBar.component';
import Main from './component/main.component';
import Footer from './component/foooter.component';
import { Routes, Route} from "react-router-dom";

import About from './component/NavbarComponent/about.component';
import Hire from './component/NavbarComponent/hire.component';
import Support from './component/NavbarComponent/suport.component';


function App() {
  return (
    <div className="App">
      <NavBar/>
    
      <Routes basename="/Chalo-deploy-karte-hain">
        /**here path changed path='/' into path="/Chalo-deploy-karte-hain" in-order to application would able to work with github pages  */
        <Route exact path="/Chalo-deploy-karte-hain" element={<Main />}/>
        <Route exact path="/Chalo-deploy-karte-hain/about" element={<About />} />
        <Route exact path="/Chalo-deploy-karte-hain/hire" element={<Hire/>} />
        <Route exact path="Chalo-deploy-karte-hain/support" element={<Support />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
