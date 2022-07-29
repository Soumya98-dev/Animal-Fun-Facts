import animals from "./animal";
import "./style.css";

const title = "";

const background = (
  <img
    className="background"
    alt="ocean"
    src="https://91716602a4814ad9b25dacdd3c189c52.cc-propeller.cloud/images/ocean.jpg"
  />
);

const images = [];

for (const animal in animals) {
  images.push(
    <img
      src={animals[animal].image}
      className="animal"
      alt={animal}
      // ariaLabel={animal}
      role="button"
      key={animal}
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  let target = e.target.alt;
  let factsLength = animals[target].facts.length;
  let index = Math.floor(Math.random() * factsLength);
  let funFact = animals[target].facts[index];
  let p = document.getElementById("fact");
  p.textContent = funFact;
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact"}</h1>
    <div className="animals">{images}</div>
    <p id="fact"></p>
    {showBackground && background}
  </div>
);

function App() {
  return <div>{animalFacts}</div>;
}

export default App;
// ReactDOM.render(animalFacts, document.getElementById("root"));
