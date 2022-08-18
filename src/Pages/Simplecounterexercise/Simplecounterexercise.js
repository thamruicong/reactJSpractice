import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Simplecounterexercise() {
    const [counter, setCounter] = useState(0);

    return (
        <div className='container'>
            <h1>Simple Counter Exercise</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <h1>{counter}</h1>

            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    );
}

export default Simplecounterexercise;