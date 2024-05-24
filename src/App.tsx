import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>自己紹介</h1>
      </header>
      <section className="intro">
        <h2>自己紹介</h2>
        <p>こんにちは、私は遠藤 万輝人です。</p>
      </section>
      <section className="details">
        <div className="card">
          <h2>趣味</h2>
          <ul>
            <li>プログラミング</li>
            <li>サッカー</li>
          </ul>
        </div>
        <div className="card">
          <h2>スキル</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      </section>
      <section className="github">
        <h2>GitHub</h2>
        <p>
          <a
            className="App-link"
            href="https://github.com/makito-prog"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub プロフィールを表示
          </a>
        </p>
      </section>
      <footer className="App-footer">
        © 2024 遠藤 万輝人
      </footer>
    </div>
  );
}

export default App;
