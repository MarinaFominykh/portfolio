import "./Header.scss";
const Header = () => {
    return (
        <header className="header">
            <div className="header__cntr">
                <div className="header__logo-cntr">
                    <p className="header__logo-name text-mrg">Marina Fominykh</p>
                    <p className="header__logo-prof text-mrg">frontend-developer</p>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">Projects</li>
                        <li className="header__nav-item">Skills</li>
                        <li className="header__nav-item">Education</li>
                        <li className="header__nav-item">Contact</li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;