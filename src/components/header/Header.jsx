
import profile from "../../assets/profile.avif";

import "../../css/header.css";

export const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

export const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

export const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}


const Header = (header) => {

    const d = new Date();

    const time = formatAMPM(d);
    
    return ( 
    <nav className="navbar navbar-default padding-10">
        <div className="container-fluid">
        <div className="navbar-header">
            Property Management
        </div>
        <ul className="nav navbar-nav">
            <li>Customer Management</li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <li className="btn btn-default">
                {`${weekday[d.getDay()]}, ${d.getDate()} ${month[d.getUTCMonth()]}  ${time}`}
            </li>
            <li className="nav-item dropdown">
                <img src={profile} alt="Profile_pic" className="profile_pic" /> Michael Raj 
                Cashier
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    Logout
                </div>
            </li>
        </ul>
        </div>
    </nav>
  );
}

export default Header;