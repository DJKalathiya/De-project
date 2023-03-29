import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import { Home } from './component/HomePage/Home'
import { Services } from './component/Pages/Services'
import { Map } from './component/Pages/Map';
import { Profile } from './component/Pages/Profile'
import Signup from './component/signup&login/Signup'
import Login from './component/signup&login/Login';
import { Types } from './component/services/Types';
import { News } from './component/Pages/News';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/map' element={<Map />} />
            <Route exact path='/news' element={<News />} />
            <Route exact path='/profile' element={<Profile />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/services/:id' element={<Types />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
