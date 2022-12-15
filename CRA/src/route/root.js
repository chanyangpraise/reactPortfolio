import React from "react";
// children으로 설정했던 경로를 Outlet위치에 보여줌.
import { Outlet, Link } from "react-router-dom";

function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input id="q" placeholder="Search" type="search" name="q" />
            <div id="search-spinner" aria-hidden hidden />
            <div className="sr-only" aria-live="polite" />
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="contacts/1">Your Name</Link>
            </li>
            <li>
              <Link href="contacts/2">Your Friend</Link>
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

export default Root;
