import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
    const [userData, setUserData] = useState({
        username: "",
        receivername: "",
        connected: false,
        message: ""
    });

    return (
        <div className="App">
            <Routes>
                <Route path="/" Component={Homepage} exact />
                <Route path="/chats" Component={Chat} exact />
            </Routes>
        </div>
    );
}

export default App;
