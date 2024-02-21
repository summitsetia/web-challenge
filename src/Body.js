import './Body.css';
import imageInteractive from './desktop/image-interactive.jpg';

export default function Body() {
    return (
        <div className="body-container">
            <div className="photo-container">
                <img src={imageInteractive} alt="hi" />
            </div>
            <div className="text">
                <h1>THE LEADER IN INTERACTIVE VR</h1>
                <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
        </div>
    );

}
