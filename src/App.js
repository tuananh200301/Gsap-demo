import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ScrollGsap from './ScrollGsap';
import FlipGrap from './FlipGsap';
import Demo from './Demo';
import ScrollDemo from './ScrollDemo';

function App() {
  return (
    <Router>
      <div>
       {/*<header>
          <nav>
            <ul>
                <Link className='link' to="/">Demo</Link>
                <Link className='link' to="/scroll">Scroll</Link>   
                <Link className='link' to="/flip">Flip</Link> 
            </ul>
          </nav>
        </header>
  */}
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/scroll" element={<ScrollDemo />} />
          <Route path="/flip" element={<FlipGrap />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
