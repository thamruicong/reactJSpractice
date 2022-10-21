import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Contextapiinreactcomponents() {
    return (
        <div className='container'>
            <h1>Context API in React Components</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <div>
                Content
            </div>
        </div>
    );
}

export default Contextapiinreactcomponents;