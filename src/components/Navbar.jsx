import { NavLink } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiPokemonGo } from '@mdi/js';

const Navbar = () =>{

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    return(
        <nav>
            <Icon path={mdiPokemonGo} size={2} />
            <div className="link">
                <NavLink to='/' className={`base ${setActiveClass}`} >
                    Home
                </NavLink>
                <NavLink to='/personajes' className={`base ${setActiveClass}`} >
                    Pokemones
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;