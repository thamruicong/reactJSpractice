import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Printdatafromrestapi() {
    const [catFact, setCatFact] = useState("");

    const getCatFact = () => {
        axios.get("https://catfact.ninja/fact")
            .then(res => {
                setCatFact(res.data.fact);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getCatFact();
    }, []);

    return (
        <div className='container'>
            <h1>Print Data From REST API</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <p>{catFact}</p>
            <button onClick={getCatFact}>Press to get Cat Fact</button>
        </div>
    );
}

export default Printdatafromrestapi;