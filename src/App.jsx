import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Linkをインポート
import Home from './Home';
import About from './About';

/* Routerの中身 */
const Home =() => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <Link to="/about">Go to About Page</Link> {/* Aboutページへのリンク */}
    </div>
  );
}

const About =() => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About Page</p>
      <Link to="/home">Go to Home Page</Link> {/* Homeページへのリンク */}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* /homeパスにHomeコンポーネントを表示 */}
            <Route path="/home" element={<Home />} />
            {/* /aboutにアクセスしたときにAboutコンポーネントを表示 */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
