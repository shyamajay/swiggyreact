import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import swiggyLogo from "../../swiggy-logo.webp";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
/*
Header component
*/
const HeaderComponent = () => {
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className='flex justify-between bg-slate-200'>
      <div>
        <img
          className='h-14'
          src={swiggyLogo}
          // src='https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0'
        />
      </div>

      <nav className='mx-auto flex max-w-7xl items-center justify-between lg:px-8'>
        <ul className='flex px-2'>
          <li className='px-2'>Online Satus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className='px-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-2'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-2'>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
          <li className='px-2'>Cart</li>
        </ul>
        <ul>
          <li className='list-none'>{loggedInUser}</li>
        </ul>
      </nav>

      <div>
        <a
          href='#'
          className=' block rounded-lg mx-2 my-2 py-1 px-3 text-base leading-7 text-gray-900'>
          Log In
        </a>
      </div>
    </div>
  );
};

export default HeaderComponent;
