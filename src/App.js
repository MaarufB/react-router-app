import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            boderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
          >
            <Link to="/invoices">Invoices</Link> | {""}
            <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
        {/* 
          The outlet will render the child route of the App Component
        */}
    </div>
  );
}

export default App;
