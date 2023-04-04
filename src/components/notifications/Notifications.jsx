import { faBell, faBars, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Notifications.css';

const Notifications = ({ data }) => {
    console.log(data)
    return (
        <div className="notification">
            <figure className="circle__block">
                <FontAwesomeIcon className="notification__icon" icon={faBars} />
            </figure> 
            <figure className="circle__block">
                <FontAwesomeIcon className="notification__icon" icon={faBell} />
            </figure>
            <div className='notification__location'>
                <FontAwesomeIcon className='notification__icon' icon={faLocationDot} />
                <p>{data.name}</p>
            </div>           
        </div>
    )
}

export default Notifications;
