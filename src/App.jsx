import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Routes, Route } from 'react-router-dom';  // Router

//　ページコンポーネント
function Home() {
  return <h2>🏠 ホームページ</h2>;
}

function About() {
  return <h2>📖 アバウトページ</h2>;
}

function Contact() {
  return <h2>📞 お問い合わせページ</h2>;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* ナビゲーションリンク */}
        <nav>
          <Link to="/home">ホーム</Link> | 
          <Link to="/about">アバウト</Link> | 
          <Link to="/contact">お問い合わせ</Link>
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
