const Layout = (props) => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Expense Tracker</a>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
