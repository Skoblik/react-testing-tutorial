import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS"]} />
      </div>
    </AppProviders>
  );
}

export default App;
