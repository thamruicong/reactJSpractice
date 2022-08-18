import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';
import '../mainstyle.css';
import './Imagesliderusingreactjs.css';

function Imagesliderusingreactjs() {
    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    const onPrev = () => {
        if (imageIndex == 0) {
            setImageIndex(images.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }
    };

    const onNext = () => {
        setImageIndex((imageIndex + 1) % images.length)
    };

    const addCat = () => {
        axios.get("https://api.thecatapi.com/v1/images/search")
            .then(res => {
                const newCat = {
                    id: String(images.length),
                    url: res.data[0].url
                }
                setImages([
                    ...images,
                    newCat
                ])
                setImageIndex(images.length)
            }).catch(err => {
                console.log(err);
            })
    };

    return (
        <div className='container'>
            <h1>Image Slider Using React JS</h1>
            <Link to='/home' className="App-link">Home</Link>
            <br />

            <button onClick={addCat} className='button'>Add Cat</button>
            
            <div>
                <div className='image-container'>
                    <button onClick={onPrev} className='button'>Prev</button>
                        {images.length != 0 &&
                            <img src={images[imageIndex].url} width="500" height="400" />
                        }
                    <button onClick={onNext} className='button'>Next</button>
                </div>

                <div className='bottom-container'>
                    {images.map((image, key) => {
                        return (
                            <button 
                                key={key} 
                                onClick={() => setImageIndex(image.id)} 
                                className={classNames({
                                    'round-button': true,
                                    'round-button-selected': imageIndex == image.id,
                                })} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Imagesliderusingreactjs;