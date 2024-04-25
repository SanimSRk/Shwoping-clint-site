import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import userProfile from '../assets/user-profile (1).png';
const Naver = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const naveLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">Home</span>
      </NavLink>
      <NavLink
        to="/product"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">Add Product</span>
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending
            ? 'pending'
            : isActive
            ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
            : 'hover:text-[#FF497C]'
        }
      >
        <span className="font-semibold">My Cart</span>
      </NavLink>
    </>
  );

  const handileLogout = () => {
    logOutUser()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="w-full  fixed z-10 shadow-lg">
      <div className="navbar px-[6%] bg-base-100  items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {naveLinks}
            </ul>
          </div>
          <h2 className="lg:text-4xl font-extrabold gap-0">
            Aura<span className="text-[#FF497C]">Mart</span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{naveLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL || userProfile} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      {user?.displayName || 'Nanme not found'}
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li onClick={handileLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={'/login'}>
              <a className="btn">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Naver;
