import "./App.css";
import { Application } from "./components/Application";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
      </div>
    </AppProviders>
  );
}

export default App;
