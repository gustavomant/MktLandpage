import * as styles from './styled';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <styles.styledNavbar>
            <div className='navbar'>
            <span className='logo'>
                <img alt={"Evoi Publicidade"} src={Logo} />
            </span>
            </div>
        </styles.styledNavbar>
    )
}

export default Navbar;