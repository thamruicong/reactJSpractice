import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../mainstyle.css';
import './Createachecklistinreact.css';

function Createachecklistinreact() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Load word data
        axios.get('https://catfact.ninja/breeds')
            .then(res => {
                setData(res.data.data.map(x => {
                    return {"breed": x.breed, "checked": false};
                }));
            })
            .catch(err => {
                console.log(err);
            })
        
        console.log(data);
    }, []);

    const renderItem = (item, index) => {
        return (
            <div key={index} className='item'>
                <input 
                    type="checkbox"
                    checked={data[index].checked}
                    onClick={() => {
                        const newData = [...data]
                        newData[index].checked = !data[index].checked

                        setData(newData);
                    }}
                />
                {item.breed}
            </div>
        );
    };

    const renderCheckedItem = (item) => {
        return (
            <>
                {
                    item.checked && <p>{item.breed}</p>
                }
            </>
        );
    }

    const clearCheckList = () => {
        setData(data.map(x => {
            return {"breed": x.breed, "checked": false};
        }))
    }

    return (
        <div className='container'>
            <h1>Create A Checklist In React</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <button onClick={clearCheckList} className='button'>Clear</button>

            <div className='body'>
                <div className='left'>
                    {data.map(renderItem)}
                </div>

                <div className='right'>
                    <p>List of checked items:</p>
                    {data.map(renderCheckedItem)}
                </div>
            </div>
        </div>
    );
}

export default Createachecklistinreact;