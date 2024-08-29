import cvtu from '../assets/cvtu.png';
import ccnc1 from '../assets/ccnc1.jpg';
import ccpp1 from '../assets/ccpp1.jpg';
import bothpp1 from '../assets/bothpp1.jpg';
import bothnc1 from '../assets/bothnc1.jpg';
import arre1 from '../assets/arre1.jpg';
import hem1 from '../assets/hem1.jpg';
import ninfa1 from '../assets/hem1.jpg';
import { useState } from 'react';
import '../styles/style.css';

function Home() {

const [imageState, setImageState] = useState(cvtu);
const imageList = {
    cvtu: cvtu,
    ccnc1: ccnc1,
    ccpp1: ccpp1,
    bothpp1: bothpp1,
    bothnc1: bothnc1,
    arre1: arre1,
    hem1: hem1,
    ninfa1: ninfa1,
};

function getRandImage(max) {
    return Math.floor(Math.random() * max);
}

const handlerButton = () => {
    const randomImage = getRandImage(8);
    setImageState(imageList[Object.keys(imageList)[randomImage]]);
};

  return (
    <div className="container">
        <main>
            <figcaption>
                <img src={imageState} alt="Random"/>
            </figcaption>
            <button onClick={handlerButton}>Cambiar la imagen</button>
        </main>
    </div>
  );
}

export default Home;