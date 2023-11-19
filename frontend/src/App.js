import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" Component={Homepage} exact />
      <Route path="/chats" Component={Chat} exact />
    </div>
  );
}

export default App;
