import React from 'react';
import './App.css';

interface Hobby {
  name: string;
}

interface Skill {
  name: string;
}

interface AppProps {}

const hobbies: Hobby[] = [
  { name: 'サッカー' },
  { name: '映画鑑賞' },
  { name: 'Youtube' }
];

const skills: Skill[] = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' }
];

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>自己紹介</h1>
      </header>
      <section className="intro">
        <h2>自己紹介</h2>
        <p>こんにちは、私は遠藤 万輝人です。<br />現在大学3年生でプログラミングの勉強をしています。<br />フロントエンドの言語をメインに勉強しています。<br />勉強と並行して、中学生にサッカーを教えるコーチをしています。<br />よろしくお願いします。</p>
      </section>
      <section className="details">
        <div className="card">
          <h2>趣味</h2>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby.name}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2>スキル</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill.name}</li>
            ))}
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
