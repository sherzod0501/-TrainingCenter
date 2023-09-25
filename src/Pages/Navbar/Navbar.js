import { NavLink } from "react-router-dom";
import unation from "../../assets/img/unation.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar_logo" src={unation} alt="" />
      <ul className="navbar_ul">
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-link` : `navbar_ul_li`
          }
          to="/"
        >
          Kurslar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-link` : `navbar_ul_li`
          }
          to="/jamoa"
        >
          Jamoa
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-link` : `navbar_ul_li`
          }
          to="/yangiliklar"
        >
          Yangiliklar
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-link` : `navbar_ul_li`
          }
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-link` : `navbar_ul_li`
          }
          to="/oferta"
        >
          Oferta
        </NavLink>
      </ul>
      <div className="navbar_phone">
        <div className="navbar_phone_trunk">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
        </div>
        <a href="tel:+998995203322" className="navbar_phone_number">
          (99) 52 0 3322
        </a>
      </div>
      <NavLink to="/login" className="own_cabinet">
        <div className="own_cabinet_person">
          <svg
            className="svg_1"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // className="bi bi-person"

            viewBox="0 0 16 16"
          >
            <path
              className=""
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
            />
          </svg>
        </div>
        <h3 className="own_cabinet_word">Shaxsiy kabinet</h3>
      </NavLink>
      <select className="language">
        <option value="uz">UZ</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};
