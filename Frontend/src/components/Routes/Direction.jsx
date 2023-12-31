import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Contacto from '../Contacto/Contacto'
import NotFound from '../NotFound/NotFound'
import Home from '../Home/Home'
import Admin from '../Administracion/admJuegos';


function Direction() {
return (
    // Enrutamiento
    <Router>
        <nav className='navbar'>
            <ul>
                <li className='divicion'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='divicion'>
                    <Link to='/contacto'>Contacto</Link>
                </li>
                <li className='divicion'>
                    <Link to='/admin'>Admin</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='admin' element={<Admin/>} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
)
}

export default Direction;