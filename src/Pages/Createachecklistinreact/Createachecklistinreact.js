import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Createachecklistinreact() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Load word data
        axios.get('https://catfact.ninja/breeds')
            .then(res => {
                setData(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='container'>
            <h1>Create A Checklist In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />
        </div>
    );
}

export default Createachecklistinreact;