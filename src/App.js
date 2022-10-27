import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css';
import ImageComponent from './components/imageComponent.js'

function App() {
    const unsplashURL = 'https://api.unsplash.com/photos/random?client_id=ujULdABKhI5GqYTLUD3H5cZG0RIFREtFd4vdJmzRjXE&count=10';
    const [images, setImages] = useState([]);

    const getImages = () => {
        Axios.get(unsplashURL).then((res) => {
            console.log(res);
            setImages(res.data);
        });
    }

    useEffect(() => {
        getImages();
    }, [])

    if (!images) {
        return <h1>Loading...</h1>
    }

    let addIcon = require('./icons/add.png');

    return (
        <div className="App">
            <div>
                <h1>Add Image</h1>
                <div className='add-button-container'>

                    {/*This button needs to add images to an S3 bucket*/}
                    <button>
                        <img src={addIcon} />
                    </button>

                </div>
            </div>

            <div>
                <h1>Image Gallery</h1>
                
                <div className="grid-container">

                    {/*Display all images in bucket in simple grid*/}
                    {images.map((image) => {
                        return (
                            <ImageComponent
                                imgURL={image.urls.regular}
                                key={image.id}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
