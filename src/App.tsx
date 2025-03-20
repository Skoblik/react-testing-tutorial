import "./App.css";
import { Application } from "./components/application/Application";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { Counter } from "./components/counter/Counter";
import { Skills } from "./components/skills/Skills";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS", "TS"]} />
        <Counter />
        <CounterTwo count={1} handleIncrement={() => {}} />
      </div>
    </AppProviders>
  );
}

export default App;
