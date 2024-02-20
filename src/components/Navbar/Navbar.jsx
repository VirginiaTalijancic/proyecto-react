import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
 <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <h2 className='titulo text-light' > Apple Mania <i className="bi bi-apple text-light"></i></h2> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">iPhone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mac</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">iPad</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">AirPods</a>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
 </div>
)
}

export default Navbar
