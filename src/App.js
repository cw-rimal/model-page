import './css/App.css';
import Model from './components/Model';
import City from './components/City';

function App() {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.bikewale.com/">
            <img src="https://imgd.aeplcdn.com/0x0/bw/static/design15/old-images/d/bw-logo.png" className="App-logo" alt="logo" />
          </a>
          <City/>
        </nav>
      </header>
      <div className="container">
        <Model />
      </div>
    </>
  );
}

export default App;
