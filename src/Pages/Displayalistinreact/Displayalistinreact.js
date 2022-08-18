import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../mainstyle.css';

function Displayalistinreact() {
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

    const renderItem = (item) => {
        return (
            <div style={{padding:'10px'}}>
                <p>Breed: {item.breed}</p>
                <p>Coat: {item.coat}</p>
                <p>Country: {item.country}</p>
                <p>Origin: {item.origin}</p>
                <p>Pattern: {item.pattern}</p>
            </div>
        );
    };

    return (
        <div className='container'>
            <h1>Display A List In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <div style={{justifyContent:'flex-start'}}>
                {data.map(renderItem)}
            </div>
        </div>
    );
}

export default Displayalistinreact;