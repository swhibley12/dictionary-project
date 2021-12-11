import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Flower" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Sarah Whibley and is{" "}
            <a
              href="https://github.com/swhibley12/dictionary-project"
              title="View source code"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
