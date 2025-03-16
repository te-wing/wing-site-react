import './App.css'
import { Link, Routes, Route } from 'react-router-dom';  // Router
import { Helmet } from 'react-helmet'; // Helmet

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
        <button onClick={sendEmail}>
        <svg class="mediaLogo" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" fill="currentColor"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          wing@me.wing.osaka
        </button>
        <button onClick={() => openSNS("GitHub")}>
          <svg height="20" viewBox="0 0 100 100" class="mediaLogo" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/></svg>
          GitHub
        </button>
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

// 関数
function sendEmail() {
  setTimeout (() => {
    window.location.href = "mailto:wing@me.wing.osaka";
  }, 3)
}

const openSNS = (platform) => {
  window.location.href = `/SNS/${platform}`;
};

export default App
