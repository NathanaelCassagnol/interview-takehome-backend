import React from 'react'
import '../App.css';

function imageComponent({imgURL, key}) {
    return (
        <div className='component-container'>
            <img
                src={imgURL}
                key={key}
            />

            <div className="component-buttons">

                {/*This button needs to download an image if the user has it unlocked*/}
                <button>Download</button>

                {/*This button needs to unlock an image for the user*/}
                <button>Unlock</button>

            </div>
        </div>
    )
}

export default imageComponent