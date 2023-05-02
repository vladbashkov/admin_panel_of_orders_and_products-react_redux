import Clock from 'react-live-clock';

import './topMenu.scss';
import useDate from "../../hooks/useDate";
import Icon from '../../assets/4172960.jpg';

const TopMenu = () => {

    return (
        <div className="Top-menu d-flex flex-row text-bg-light p-3 shadow-lg justify-content-between">
            <div className="Icon-container">
                <img src={ Icon } alt="Icon" className="Icon rounded-circle" />
            </div>
            <div className="Date-container">
                { useDate() }
                <Clock format={'HH:mm'} className="mx-2" ticking={true} timezone={'Europe/Kyiv'} />
            </div>
        </div>
    );
}

export default TopMenu;