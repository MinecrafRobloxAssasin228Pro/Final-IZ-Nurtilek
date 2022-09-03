import'./VHeader.css'
import { Link } from 'react-router-dom'

const VHeader = ()=>{

    return(
        <>
            <div className="vacheader">
                <h1>Вакансии</h1>
               <div className="vacheaderin">
                  <ul className="vacvyb">
                    <li>
                        <Link to='/barmen'>
                            Бармен
                        </Link>
                    </li>
                    <li>
                        <Link to='/menrestaurant'>
                            Менеджер ресторана
                        </Link>
                    </li>
                    <li>
                        <Link to='/hostes'>
                            Хостес
                        </Link>
                    </li>
                    <li>
                        <Link to='/oficiant'>
                            Официант
                        </Link>
                    </li>
                    <li>
                        <Link to="/master">
                            Кальянный мастер
                        </Link>
                    </li>
                </ul>
               </div>
            </div>      
        </>
    )
}

export default VHeader;