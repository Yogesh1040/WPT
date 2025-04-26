import React from 'react';
import sea from '../shared/images/sea.jpg'
import imgData from '../shared/constant/ConstData';
import { Button } from 'react-bootstrap';

const MyImagesComp = () => {
    return (
        <>
            <h2 className='text-primary'>Ths is my Images component <br />
                <Button >simple button</Button>
                <Button variant='danger'>simple button</Button>
                <Button variant='outline-danger'>simple button</Button> <hr />
                
                <br />
                <img src={sea} alt='sea' height="200px" width="200px" />
                <hr />
                <img src={imgData.sea1} alt='sea1' height="200px" width="200px" />
                <img src={imgData.sea2} alt='sea2' height="200px" width="200px" />
                <hr />
                <video controls height="300px" width="300px">
                    <source src={imgData.video} />
                </video>
                <audio controls height="300px" width="300px">
                    <source src={imgData.audio} />
                </audio>
            </h2>
        </>
    )
}

export default MyImagesComp
