import { useState } from 'react';
import './Header.css'
import Dropdown from '../Dropdown'
import { Link } from 'react-router-dom';
import { delieverMenu, eventsMenu } from '../../Utils';
import VHeader from '../../Pages/Vacancy/VacancyHeader/VHeader';

const Header = ()=>{
    const [active , setActive] = useState("")

    return(
        <>
            <div className="nav">
                <ul className="nav-logo">
                   <li>
                       <Link to="/">
                           <h1 className='nav-logo_h1'>IZЮМ</h1>
                       </Link>

                   </li>
                </ul>
                <ul className="nav-flex">
                    <li>
                        <Dropdown title='Меню доставки' options={delieverMenu} />
                    </li>
                    <li>
                        <Dropdown title='События' options={eventsMenu} />
                    </li>

                </ul>

            </div>    
        </>
    )
}

export default Header;