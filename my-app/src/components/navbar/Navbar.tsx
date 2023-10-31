import {Link, NavigateFunction, useNavigate} from 'react-router-dom'
import { FaShoppingCart, FaBalanceScale, FaUserAlt} from 'react-icons/fa'
import { useSelector} from "react-redux";
import { navData } from '../../assets/data/navData';


const Navbar = (): JSX.Element => {
    const navigate: NavigateFunction = useNavigate()
    const { isLoggedIn, user } = useSelector((store: any) => store.auth)
  return (
    <div className='navbar'>
      <div className="logo">
        <h1 onClick={() => navigate('/')}>Styler</h1>
      </div>
      <div className="nav-links">
          {
            navData.map((item) =>(
              <ul>
                <Link to={item.url} className='navLinkItem'>{item.name}</Link>
              </ul>
            ))
          }
      </div>

        <div className="nav-action">
            <p onClick={() => navigate('/cart')}><i><FaShoppingCart /></i></p>
            <p onClick={() => navigate('/comparison')}><i><FaBalanceScale /></i></p>
            <p onClick={() => navigate('/login')} id='auth-icon'><i><FaUserAlt /></i> {isLoggedIn ? user.firstName : 'Account'}</p>
        </div>
    </div>
  )
}
export default Navbar;