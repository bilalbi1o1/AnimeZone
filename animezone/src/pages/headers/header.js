import './header.css';
import menuIcon from '../../images/main-menu.png';
import instagramIcon from '../../images/instagramIcon.png';
import fbIcon from '../../images/facebook.png';
import xIcon from '../../images/twitter.png';

export default function Home()
{
    return(
        <div className='header'>
            <img src={menuIcon} className='menuIcon'/>       
            <h1 className='title' >AnimeZone</h1>
            <div className='joinLabel' >   
                <p className='jl' >Join</p>
                <p className='nl' >now</p>
            </div>
        </div>
    )
}