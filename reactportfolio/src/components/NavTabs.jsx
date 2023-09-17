
import { NavLink} from 'react-router-dom';

function NavTabs(){
 return (
<ul>
<li >
    <NavLink
    to='Home'>Home</NavLink>
</li>
<li>
    <NavLink
    to='Projects'>Projects</NavLink>
</li>
<li>
    <NavLink
    to='Contact'>Contact</NavLink>
</li>

</ul>
 )

}

export default NavTabs;
