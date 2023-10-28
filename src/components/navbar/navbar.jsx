import Logo from '../../resource/Image/logo.png'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';



const navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg sticky-top NavBarContent'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to={'/'}><img src={Logo} alt='Logo DeModa' width='80' height='64'></img></Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='true' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 fs-4'>
                        <li className='nav-item'>
                            <NavLink className='nav-link me-3 navlink white-text' to={'/category/categoria1'}>categoria 1</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link me-3 navlink white-text' to={'/category/categoria2'}>categoria 2</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link me-3 navlink white-text' to={'/category/categoria3'}>categoria 3</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link me-3 navlink white-text' to={'/category/categoria4'}>categoria 4</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link me-3 navlink white-text' to={'/contacto'}>contactanos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )


}

export default navbar; 