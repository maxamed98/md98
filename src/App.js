import "./App.css";
import illibero from "./images/il-libero.jpg";
import ttt from "./images/ttt.jpg";
import calculator from "./images/calculator.jpg";
import charter from "./images/charter.jpg";

function App() {
  const apps = [
    {
      name: "Il Libero",
      type: "Streaming App",
      level: "Intermediate",
      url: "http://il-libero.com",
      desc: "This site can be used to watch any movie, tv show or anime ever made",
      image: illibero,
      date: "06/04/22",
    },
    {
      name: "Tic Tac Toe",
      type: "Game",
      level: "Basic",
      url: "http://md98-ttt.netlify.app",
      desc: "N/A",
      image: ttt,
      date: "16/07/22",
    },
    {
      name: "Calculator",
      type: "Tool",
      level: "Basic",
      url: "http://md98-calculator.netlify.app",
      desc: "N/A",
      image: calculator,
      date: "17/07/22",
    },
    {
      name: "Charter",
      type: "Tool",
      level: "Intermediate",
      url: "http://md98-charter.netlify.app",
      desc: "This tool creates a chart when given input data",
      image: charter,
      date: "20/07/22",
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
                  <h5>
                    <span>Type:</span> {app.type}
                  </h5>
                  <h5>
                    <span>Complexity:</span> {app.level}
                  </h5>
                  <h5>
                    <span>Description:</span> {app.desc}
                  </h5>
                  <h5>
                    <span>Date:</span> {app.date}
                  </h5>
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
