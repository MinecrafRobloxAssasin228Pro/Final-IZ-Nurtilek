import { useState } from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';

const Dropdown = ({ title, options }) => {
    const [isActive , setIsActive] = useState(false)

    return (
        <div className='dropdown'>
            <div 
                className="dropdown-btn"
                onClick={() => {
                    setIsActive(prev => !prev);
                }}
            >
                {title}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(option =>(
                        <Link
                            to={`/${option.route}`}
                            key={option.id}
                            className="dropdown-item"
                            onClick={() => {
                                setIsActive(false)
                            }}
                        >
                            {option.value}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}


export default Dropdown;