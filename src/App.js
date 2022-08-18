import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="App-general">
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        </div>
    );
}

export default App;