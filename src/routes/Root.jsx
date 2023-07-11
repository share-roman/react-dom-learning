import { Link, Outlet } from "react-router-dom";
import { getContacts } from "../data/contacts";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              type="search"
              name="q"
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
            />
            <div id="search-spinner" aria-hidden hidden={true}></div>
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/contacts/1">Your Name</Link>
            </li>
            <li>
              <Link to="/contacts/2">Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

//reactrouter.com/en/main/start/tutorial#loading-data

https: export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}
