import { NavLink } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
      <div className="navbar bg-sky-500 text-black">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Expense Tracker</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/incomes">Incomes</NavLink>
            </li>
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
