import { HomeIcon } from "../SVGs/home";
import { ChartPie } from "../SVGs/chartPie";
import { ChatBubble } from "../SVGs/chatBubble";
import { Link, useLocation } from "react-router-dom";
import classes from "../styles/NavBar.module.css";
import logo from '../assets/SVGs/logo.svg';

export const NavBar = () =>{
    const currentLocation = useLocation().pathname;
    

    return(
        <section className={`${classes.navWrapper}`}>
            <img src={logo} alt="our logo" className={`${classes.logo}`}/>
            <section className={`${classes.linkWrapper}`}>

                <Link to='/' className={`${classes.link} ${currentLocation === '/' ? `${classes.active}` : ''}`} >
                    <HomeIcon active={currentLocation === '/' ? true : false } />
                </Link>

                <Link to='/charts' className={`${classes.link} ${currentLocation === '/charts' ? `${classes.active}` : ''}` } >

                    <ChartPie  active={currentLocation === '/charts' ? true : false } />
                </Link>

                <Link to='/chats' className={`${classes.link} ${currentLocation === '/chats' ? `${classes.active}` : ''}`}>
                    
                    <ChatBubble active={currentLocation === '/chats' ? true : false } />
                </Link>

            </section>

        </section>
    )
}