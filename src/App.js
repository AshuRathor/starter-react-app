import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TeamState from './context/Team/TeamState';
// import TeamContext from './context/Team/TeamContext';

// import Script from './components/Script'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Breakdown from './components/Breakdown';
import IntoPage from './components/IntoPage';
import Marketing from './components/Marketing';
import Contact from './components/Contact';
import FormulaStudent from './components/FormulaStudent';
import OurAchievements from './components/OurAchievements';
import Sponsors from './components/Sponsors';
import Team from './components/Team';

function App() {

  return (
    <>
      <TeamState>


        <BrowserRouter>
          <Navbar />
          {/* <Script/> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/breakdown" element={<Breakdown />} />
            <Route exact path="/intopage" element={<IntoPage />} />
            <Route exact path="/marketing" element={<Marketing />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/formulastudent" element={<FormulaStudent />} />
            <Route exact path="/ourachievements" element={<OurAchievements />} />
            <Route exact path="/sponsors" element={<Sponsors />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/contact" element={<Contact />} />


          </Routes>
        </BrowserRouter>
      </TeamState>
    </>
  );
}

export default App;