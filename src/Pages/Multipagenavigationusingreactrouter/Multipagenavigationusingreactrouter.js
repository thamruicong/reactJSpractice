import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Multipagenavigationusingreactrouter() {
    return (
        <div className='container'>
            <h1>Simple Counter Exercise</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <div>
                Look at Navigation.js
            </div>
        </div>
    );
}

export default Multipagenavigationusingreactrouter;