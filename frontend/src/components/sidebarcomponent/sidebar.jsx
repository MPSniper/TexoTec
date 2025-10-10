import React from "react";
import "./sidebar.scss";
import ProfileAvatar from "../../assets/profile avatar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileLines,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUsers,
  faWarehouse,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__avatar">
          <img
            className="sidebar__avatar-image"
            src={ProfileAvatar}
            alt="Your Picture!"
          />
        </div>

        <div className="sidebar__divider">
          <div>
            <div>
              <a
                href="#"
                className="sidebar__projects sidebar__projects--active"
              >
                <FontAwesomeIcon icon={faHouse} className="sidebar__icon" />
                <span className="sidebar__tooltip">Projects</span>
              </a>
            </div>

            <ul className="sidebar__menu">
              <li>
                <a href="#" className="sidebar__item">
                  <FontAwesomeIcon icon={faUsers} className="sidebar__icon" />

                  <span className="sidebar__tooltip">Teams</span>
                </a>
              </li>

              <li>
                <a href="#" className="sidebar__item">
                  <FontAwesomeIcon
                    icon={faWarehouse}
                    className="sidebar__icon"
                  />

                  <span className="sidebar__tooltip">Warehouse</span>
                </a>
              </li>

              <li>
                <a href="#" className="sidebar__item">
                  <FontAwesomeIcon
                    icon={faFileLines}
                    className="sidebar__icon"
                  />

                  <span className="sidebar__tooltip">Invoices</span>
                </a>
              </li>

              <li>
                <a href="#" className="sidebar__item">
                  <FontAwesomeIcon icon={faUser} className="sidebar__icon" />

                  <span className="sidebar__tooltip">Account</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sidebar__footer">
        <a href="#" className="sidebar__logout">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            className="sidebar__icon"
          />

          <span className="sidebar__tooltip">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default sidebar;
