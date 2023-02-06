import hamburgerImage from '../assets/images/icon-hamburger.svg'
import iconClose from '../assets/images/icon-close.svg'
/**
 * @returns Header of the page
 */
function Header() {
    return (
        <header id="header" className="position-absolute top-0 start-0 d-flex align-items-center">
            <input type="checkbox" id="mobileMenu" />
            <div className='d-lg-none mobile-menu'>
                <label className='mobliemenu-label' htmlFor="mobileMenu">
                    <img src={hamburgerImage} alt="hamburger-menu" className='icon-hamburger' />
                    <img src={iconClose} alt="hamburger-menu-close" className='icon-close' />
                </label>
            </div>
            <div className="flex-grow-1 text-center mx-3">
                <p className="mb-0 logo-text">room</p>
            </div>
            <nav className="navigation-links transition">
                <ul className="nav">
                    <li className="mx-1 mx-sm-2 nav-link cursor-pointer">
                        <span className='nav-text transition'>
                            home
                        </span>
                    </li>
                    <li className="mx-1 mx-sm-2 nav-link cursor-pointer">
                        <span className='nav-text transition'>
                            shop
                        </span>
                    </li>
                    <li className="mx-1 mx-sm-2 nav-link cursor-pointer">
                        <span className='nav-text transition'>
                            about
                        </span>
                    </li>
                    <li className="mx-1 mx-sm-2 nav-link cursor-pointer">
                        <span className='nav-text transition'>
                            contact
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;