import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Money Details</Link>
        <Link to="/MonthlyDetails">Monthly Details</Link>
        <Link to="/MonthlyCharts">Monthly Charts</Link>
        <Link to="/Comparision">Compare Expenses</Link>
        <Link to="/Stats">Expense Stats</Link>
    </nav>
  )
}

export default Navbar