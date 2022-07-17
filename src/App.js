import "./App.css";
import calculator from "./images/calculator.jpg";
import ttt from "./images/ttt.jpg";

function App() {
  const apps = [
    {
      name: "Tic Tac Toe",
      type: "Game",
      level: "Basic",
      url: "http://md98-ttt.netlify.app",
      desc: "N/A",
      image: ttt,
    },
    {
      name: "Calculator",
      type: "Tool",
      level: "Basic",
      url: "http://md98-calculator.netlify.app",
      desc: "N/A",
      image: calculator,
    },
  ];

  return (
    <div className="container">
      <header>
        <h1>MD PRODUCTIONS</h1>
      </header>
      <div className="main cont">
        <h2>Projects:</h2>
        <div className="apps-cont">
          {apps.map((app) => (
            <a href={app.url} target="_blank">
              <div className="app">
                <div className="title">
                  <h4>{app.name}</h4>
                </div>
                <img src={app.image} alt={app.name} />
                <div className="app-info">
                  <h5>Type: {app.type}</h5>
                  <h5>Complexity: {app.level}</h5>
                  <h5>Description: {app.desc}</h5>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* <footer> MD PRODUCTIONS &COPY; 2022</footer> */}
    </div>
  );
}

export default App;
