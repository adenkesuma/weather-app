import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Notifications.css';

const Notifications = () => {
    return (
        <div className="notification">
            <figure className="circle__block">
                <FontAwesomeIcon className="notification__icon" icon={faBars} />
            </figure> 
            <figure className="circle__block">
                <FontAwesomeIcon className="notification__icon" icon={faBell} />
            </figure>           
        </div>
    )
}

export default Notifications;
