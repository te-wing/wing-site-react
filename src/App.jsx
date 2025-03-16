import './App.css'
import { Link, Routes, Route } from 'react-router-dom';  // Router
import { Helmet } from 'react-helmet'; // Helmet
import { open } from './utils/';

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
      <Helmet>
        <title>About Me | Wingのサイト</title>
        <meta name="description" content="Who am I? 私は，地球のどこかに住む地球人であります（なんとか構文！！）．もしかして，あなたは私と既に出会ったことがあるかもしれません（知らんけど）．趣味は，写真，プログラミング，音楽など．" />
      </Helmet>
      <h2>About Me</h2>
      <h3>自己紹介</h3>
      <p>
        地球のどこかに住む地球人です（小泉構文！！）．現在は，地球のどこかで高校に通っています．あなたとはもしかすると，もう私と会ったことがあるかもしれません（知らんけど）...<br/>
        このサイトは，まだまだ作成途中なので，これから色々追加していこうと思います．ぜひ今後もご覧ください．<br/>
        私の正体が気になる人は，下記のメールアドレスに連絡してみてください．反応するかもしれません．（知らんけど）
      </p>
      <h3>趣味</h3>
      <p>
      写真，プログラミング，音楽など．SONY α6000で写真を撮ってるので，自分が撮った写真はそのうち，このサイトにも載せようと思ってます．<br/>
      プログラミングに関しては，もともとはMacでSwiftをいじって全く意味あらへんiPhoneアプリとかを作ってたんやけど，最近になってウェブ開発に興味が出始めたのは，友人に勧められて始めて見たからです．GitHubプロフィールを載せていますので，そのうちソースコードを公開するかもしれません...<br/>
      音楽．自分は昔ピアノを習ってましたが，いつのまにか辞めてしまいました．最近歌を歌うことの気持ちよさに気づいて，学校で歌ってますが，JASRACがうるさいのでこのサイトで公開することはないでしょう...<br/>
      </p>
    </>
  )
}

function Contact() {
  return (
    <>
      <h2>Contacts</h2>
      <div class="contactContainer">
        <button onClick="sendEmail()">メール：wing@me.wing.osaka</button>
        <button onClick="openSNS(GitHub)"></button>
      </div>
      <div class="contactContainer">
        <h3>GitHub</h3>
        <a href="./SNS/GitHub" target="_blank">wing-0902</a>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div>
        {/* ナビゲーションリンク */}
        <headers>
          <h1>Wingのホームページ</h1>
          <nav>
            <Link to="/home">Home</Link> | 
            <Link to="/about">About Me</Link> | 
            <Link to="/contact">Contacts</Link>
          </nav>
        </headers>

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
