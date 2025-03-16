import './App.css'
import { Link, Routes, Route } from 'react-router-dom';  // Router

//　ページコンポーネント
function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

function About() {
  return (
    <>
      <h2>About Me</h2>
    </>
  )
}

function Contact() {
  return (
    <>
      <h2>Contacts</h2>
      <h3>e-mail</h3>
      <a href="./SNS/e-mail">wing@me.wing.osaka</a>
      <h3>GitHub</h3>
      <a href="./SNS/GitHub">wing-0902</a>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        {/* ナビゲーションリンク */}
        <h1>Wingのホームページ</h1>
        <nav>
          <Link to="/home">Home</Link> | 
          <Link to="/about">About Me</Link> | 
          <Link to="/contact">Contacts</Link>
        </nav>

        {/* Router */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
