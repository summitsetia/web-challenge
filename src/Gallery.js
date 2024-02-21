import './Gallery.css';
import Img1 from './desktop/image-deep-earth.jpg'
import Img2 from './desktop/image-night-arcade.jpg'
import Img3 from './desktop/image-soccer-team.jpg'
import Img4 from './desktop/image-grid.jpg'
import Img5 from './desktop/image-from-above.jpg'
import Img6 from './desktop/image-pocket-borealis.jpg'
import Img7 from './desktop/image-curiosity.jpg'
import Img8 from './desktop/image-fisheye.jpg'

export default function Gallery() {
    return (
        <div>
            <header className="creations">
                <h1 className="header">OUR CREATIONS</h1>
                <button>SEE ALL</button>
            </header>
            <div className="gallery-container">
                <div className="image-container">
                    <img src={Img1} alt='Deep Earth'/>
                    <h1>DEEP EARTH</h1>
                </div>
                <div className="image-container">
                    <img src={Img2} alt='Night Arcade'/>
                    <h1>NIGHT ARCADE</h1>
                </div>
                <div className="image-container">
                    <img src={Img3} alt='Soccer Team'/>
                    <h1>SOCCER TEAM VR</h1>
                </div>
                <div className="image-container">
                    <img src={Img4} alt='Grid'/>
                    <h1> THE GRID</h1>
                </div>
                <div className="image-container">
                    <img src={Img5} alt='From Above'/>
                    <h1>FROM UP ABOVE VR</h1>
                </div>
                <div className="image-container">
                    <img src={Img6} alt='Pocket Borealis'/>
                    <h1>POCKET BOREALIS</h1>
                </div>
                <div className="image-container">
                    <img src={Img7} alt='Curiosity'/>
                    <h1>THE CURIOSITY</h1>
                </div>
                <div className="image-container">
                    <img src={Img8} alt='Fisheye'/>
                    <h1>MAKE IT FISHEYE</h1>
                </div>
            </div>
        </div>
    );
}
