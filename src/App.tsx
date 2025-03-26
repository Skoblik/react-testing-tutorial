import "./App.css";
import { Application } from "./components/application/Application";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { Counter } from "./components/counter/Counter";
import { Skills } from "./components/skills/Skills";
import { Users } from "./components/users/Users";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS", "TS"]} />
        <Counter />
        <Users isFailRequest={false} />
        {/* <CounterTwo count={1} handleIncrement={() => {}} /> */}
      </div>
    </AppProviders>
  );
}

export default App;
