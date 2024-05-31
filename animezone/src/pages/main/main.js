import Header from '../headers/mainHeader';
import "./main.css";
import searchIcon from '../../images/searchIcon.png';
import arrowIcon from '../../images/arrow.png';
import instagramIcon from '../../images/instagramIcon.png';
import facebookIcon from '../../images/facebook.png';
import twitterIcon from '../../images/twitter.png';
import sharingIcon from '../../images/sharingIcon.png';


export default function Main()
{
    return ( 
        <div>
            <Header/>
            <div className="mainContainer">
                <div className='content'>
                    <h1 className="webName" >AnimeZone</h1>
                    <div className='searchComponents' >
                        <input className='searchBox' placeholder='    Search anime...' ></input>
                        <img src={searchIcon} alt='searchIcon' className='searchIcon' />
                    </div>
                    <div className='topSearchSection' >
                        <h4 className='topSearch' >Top search:  </h4>
                        <p className='searchData'>One Piece,Solo Leveling,Kaiju No. 8,Wind Breaker...</p>
                    </div>
                    <div className='watchAnimeContent' > 
                    <h2 className='watchAnimeButton' >Watch anime</h2>
                    <img src={arrowIcon} alt='arrowIcon' className='arrowIcon' />
                    </div>
                </div>
                <img src='https://hianime.to/images/anw-min.webp?v=0.1' alt='homeImage' className="mainImage" />
            </div>
            <div className='shareBar' >
                    <div className='shareLabel'>
                        <h4 className='shareLabel1' >Share AnimeZone</h4>
                        <h5 className='shareLabel2' >to your friends</h5>
                    </div>
                    <div className='instaShare'>
                        <img src={instagramIcon} className='icons'/>
                        <h4 className='iconsLabel' >Share</h4>
                    </div>
                    <div className='xShare'>
                        <img src={twitterIcon} className='icons'/>
                        <h4 className='iconsLabel' >Share</h4>
                    </div>
                    <div className='fbShare'>
                        <img src={facebookIcon} className='icons'/>
                        <h4 className='iconsLabel' >Share</h4>
                    </div>
                    <img src={sharingIcon} className='sharingIcon'/>
            </div>
            <h4 className='rightReserved'>© AnimeZone.to. All rights reserved.</h4>
        </div>
    )
}