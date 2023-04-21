import {Form, NavLink, useRouteLoaderData} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {

  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          {!token &&
              <li>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }
                >
                  LogIn
                </NavLink>
              </li>
          }
          <li>
            <NavLink
                to="/signup"
                className={({ isActive }) =>
                    isActive ? classes.active : undefined
                }
            >
              Signup
            </NavLink>
          </li>
          {token &&
              <li>
                <Form action="/logout" method="post">
                  <button>logout</button>
                </Form>
              </li>
          }

        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
