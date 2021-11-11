import "./App.css";
import myImages from "./ciel.jpg";
import "./styles.css";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="titlered">Amani Ali </h1>

      <img src="/plages.jpg" alt="plages" width="400px" />
      <br />
      <img src={myImages} alt="ciel" width="400px"></img>

      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9cyrKZCiTfE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
