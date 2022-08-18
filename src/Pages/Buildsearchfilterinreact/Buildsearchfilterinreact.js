import { useState, useEffect } from 'react';
import axios from 'axios';
import '../mainstyle.css';
import { Link } from 'react-router-dom';

function Buildsearchfilterinreact() {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        // Load word data
        axios.get('https://catfact.ninja/breeds')
            .then(res => {
                setData(res.data.data.map(x => x.breed));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='container'>
            <h1>Build Search Filter In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <input type="search" value={searchValue} onChange={(newValue) => setSearchValue(newValue.target.value)} placeholder="Search..."/>

            {data.filter(item => item.toLowerCase().includes(searchValue.toLowerCase())).map((item, key) => {
                return (<p key={key}>{item}</p>);
            })}
        </div>
    );
}

export default Buildsearchfilterinreact;