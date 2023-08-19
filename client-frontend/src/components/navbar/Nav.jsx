import { Link } from 'react-router-dom'

import './nav.css'

const Nav = () => {
    return (
        <div className="navbar" >
            <ul className='navList'>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/waiting'>Waiting</Link></li>
                <li><Link to='/complited'>Complited</Link></li>
                <li><Link to='/analysis'>Analysis</Link></li>
                <li><Link to='/test'>Test</Link></li>
                <li><Link to='/setup'>Price Setup</Link></li>
            </ul>
        </div>
    )
}
export default Nav;