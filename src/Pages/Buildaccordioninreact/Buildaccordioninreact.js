import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../mainstyle.css';
import './Buildaccordioninreact.css'

function Buildaccordioninreact() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className='container'>
            <h1>Build Accordion In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <div className='accordian-item'>
                <div className='accordian-header' onClick={() => setShow1(!show1)}>
                    Header1
                </div>

                { show1 && 
                <div className='accordian-body'>
                    <p>Body paragraph1</p>
                    <p>Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.</p>
                    <p>
                        The following are the steps to create an accordion in React JS:
                        Display every title of accordion with body.
                        Hide every accordion body using element.display = none;
                        Toggle visibility of accordion body on click of title.
                    </p>
                </div>
                }
            </div>

            <div className='accordian-item'>
                <div className='accordian-header' onClick={() => setShow2(!show2)}>
                    Header2
                </div>

                { show2 && 
                <div className='accordian-body'>
                    <p>Body paragraph2</p>
                    <p>Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.</p>
                    <p>
                        The following are the steps to create an accordion in React JS:
                        Display every title of accordion with body.
                        Hide every accordion body using element.display = none;
                        Toggle visibility of accordion body on click of title.
                    </p>
                </div>
                }
            </div>
        </div>
    );
}

export default Buildaccordioninreact;