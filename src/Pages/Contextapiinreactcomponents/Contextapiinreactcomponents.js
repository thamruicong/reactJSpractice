import { Link } from 'react-router-dom';
import '../mainstyle.css';

import ContextComponent from './ContextComponent';
import AnotherContextComponent from './AnotherContextComponent';
import ThemeContextClass from './ThemeContextClass';

function Contextapiinreactcomponents() {
    return (
        <div className='container'>
            <h1>Context API in React Components</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <ul>
                <li>
                    Context can be used an alternative to Redux - it allows objects to be exposed to all of its children components.
                </li>
                <li>
                    First do a `React.createContext()`, then set the object to pass down into the `value` field of React.Context.Provider.
                </li>
                <li>
                    Finally, in the children component that wants to use said object, do a `React.useContext(React.Context)` to retrieve the data.
                </li>
                <li>
                    Note that when passing down states, all children components will share the same state, so any changes to the state will change all children components.
                </li>
            </ul>

            <br />

            <ThemeContextClass>
                <ContextComponent />
                <AnotherContextComponent />
            </ThemeContextClass>
        </div>
    );
}

export default Contextapiinreactcomponents;