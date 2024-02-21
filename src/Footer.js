import './Footer.css';
import logo from './desktop/logo.svg';
import facebook from './desktop/icon-facebook.svg';
import twitter from './desktop/icon-twitter.svg';
import pinterest from './desktop/icon-pinterest.svg';
import instagram from './desktop/icon-instagram.svg';

export default function Footer () {
    return (
        <div className="footer">
            <div className="title-logo">
            <img src={logo} alt='logo'/>
                <div className="social-logo">
                    <img className="individual-logo" src={facebook} alt='facebook' />
                    <img className="individual-logo" src={twitter} alt='twitter' />
                    <img className="individual-logo" src={pinterest} alt='pinterest'/>
                    <img className="individual-logo" src={instagram} alt='instagram'/>
                </div>
            </div>
            <div className="bottom">
               <div className="pages">
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
               </div>
               <div className="copyright">
                <p>© 2021 Loopstudios. All rights reserved.</p>
               </div>
            </div>
        </div>
    )
}