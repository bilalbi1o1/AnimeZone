import Header from '../headers/mainHeader';
import "./main.css";
import searchIcon from '../../images/searchIcon.png';
import arrowIcon from '../../images/arrow.png';

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
        </div>
    )
}