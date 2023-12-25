import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ScrollGsap from './ScrollGsap';
import FlipGrap from './FlipGsap';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
                <Link className='link' to="/">Flip</Link>
                <Link className='link' to="/scroll">Scroll</Link>   
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<FlipGrap />} />
          <Route path="/scroll" element={<ScrollGsap />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
