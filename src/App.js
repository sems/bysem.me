import './styles/page.sass';
import './styles/header.sass';
import unsplash from './images/unsplash.svg'
import instagram from './images/instagram.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="front-header">
        <div className="main">
          <h1>Hello.</h1>
          <p>I'm <a className="me" href="//sems.dev">Sem</a>.</p> 
          <p>I like to take photos of all different kinds of things. Most of the time related to travel, architecture, nature and sometimes cars. </p> 
          <p>Currently, you can find my photos on <a className="me" href="//unsplash.com/@semspam">Unsplash</a> and <a className="me" href="//instagram.com/bysem.me">Instagram</a>.</p>
          <p>If you want to contact me, you can! Send an email to <a className="me" href="mailto:me@sems.dev">me@sems.dev</a>.</p>
        </div>
        <div className="links">
          <div className="icon">
            <a className="me" href="//unsplash.com/@semspam">
              <img src={unsplash} alt="Unsplash Logo"/>
            </a>
          </div>
          <div className="icon">
            <a href="//instagram.com/bysem.me">
              <img src={instagram} alt="Instagram Logo"/>
            </a>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
