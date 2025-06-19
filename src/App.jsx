import "./App.css";
import Card from "./components/Card/Card";
import data from "./data/superheroes.json";

function App() {
  return (
    <div className="container">
      {data.map((i) => (
        <Card
          key={i.id}
          {...i}
          // Выше короткий способ передачи props. по сути ниже тот же результат, но длинным способом, прописывая вручную все пропсы

          // name={i.name}
          // universe={i.universe}
          // alterego={i.alterego}
          // occupation={i.occupation}
          // friends={i.friends}
          // superpowers={i.superpowers}
          // url={i.url}
          // info={i.info}
          {...i}
        />
      ))}
    </div>
  );
}

export default App;
