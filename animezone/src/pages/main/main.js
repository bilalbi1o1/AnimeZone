import Header from './mainHeader';
import "./main.css";

export default function Main()
{
    return ( 
        <div>
            <Header/>
            <div className="mainContainer">
                <div className='content'>
                    <h1 className="webName" >AnimeZone</h1>
                    <input className='searchBox' placeholder='    Search anime...' ></input>
                </div>
                <img src='https://hianime.to/images/anw-min.webp?v=0.1' alt='homeImage' className="mainImage" />
            </div>
        </div>
    )
}