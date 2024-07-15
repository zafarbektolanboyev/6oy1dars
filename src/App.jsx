import './App.css';
import image from './assets/images/logo.png';
import image1 from './assets/images/Icon.png';
import image2 from './assets/images/Button.svg';
import image3 from './assets/images/heroimg.png';
import image4 from './assets/images/axon.png';
import image5 from './assets/images/jetstart.png';
import image6 from './assets/images/expedia.png';
import image7 from './assets/images/qantas.png';
import image8 from './assets/images/litalia.png';
import image9 from './assets/images/raja.png';
import image10 from './assets/images/bajo.png';
import image11 from './assets/images/ijen.png';
import image12 from './assets/images/bromo.png';

function App() {
    return(
        <>
            <header className='header__container container'>
                <div className="logo">
                    <a href="#">
                        <img src={image} alt="" />
                    </a>
                </div>
                <div className="input">
                    <input type="text" placeholder='Cari apapun disini...'/>
                </div>
                <div className="country">
                    <img src={image1} alt="" />
                    <p>Bahasa Indonesia</p>
                </div>
                <div className="location">
                    <div className="img">
                        <img src={image2} alt="" />
                    </div>
                    <div className="text">
                        <p>Lokasi</p>
                        <h3>Indonesia, Yagyokarta</h3>
                    </div>
                </div>
            </header>
            <div className="hero-section container">
                <div className="info">
                    <p className='desc1'>✈ • Explore the wonderful indonesia!</p>
                    <div className="info">
                        <h1>Liburan & nikmati <br /> <span>tempat baru </span> di <br /> indonesia  ️🏝</h1>
                    </div>
                    <p className='desc2'>Destinize membuat kamu selalu update terkait tempat liburan<br />aru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨</p>
                    <div className="buttons">
                        <button className='btn1'>Mulai sekarang</button>
                        <button className='btn2'>Putaro Demo</button>
                    </div>
                </div>
                <div className="img">
                    <img src={image3} alt="" />
                </div>
            </div>
            <div className="imgs-section container">
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                <img src={image6} alt="" />
                <img src={image7} alt="" />
                <img src={image8} alt="" />
            </div>
            <div className="loaction-img container">
                <img src={image9} alt="" />
                <img src={image10} alt="" />
                <img src={image11} alt="" />
                <img src={image12} alt="" />
            </div>
        </>
    )
}

export default App
