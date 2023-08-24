import { Link } from "react-router-dom";
import { SwapDarkMode } from "./SwapDarkMode";

export function Header() {
    const renderMobileMenu = () => (
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <Link to="/pokedex">Pokedex</Link>
                </li>
            </ul>
        </div>
    );

    const renderMenu = () => (
        <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/pokedex">Pokedex</Link>
                </li>
            </ul>
        </div>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                {renderMobileMenu()}
                <Link className="btn btn-ghost normal-case text-xl" to="/">
                    PokeList
                </Link>
                {renderMenu()}
            </div>
            <div className="navbar-end flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-24 md:w-auto"
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link className="justify-between" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">Logout</Link>
                        </li>
                    </ul>
                </div>
                <SwapDarkMode />
            </div>
        </div>
    );
}
