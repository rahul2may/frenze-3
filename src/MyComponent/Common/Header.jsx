import React from 'react'
import './CommonCSS//Header.css'
import { NavLink } from 'react-router-dom'
import img1 from '../img/logo.png'
import { toast } from 'react-toastify'
import { useAuth } from '../MyContax/Auth'
const Header = () => {

  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ''
    })
    localStorage.removeItem('auth')
    toast.success('successfully logout')
  }



  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-light d-none d-lg-block">
        <div className="row align-items-center top-bar">
          <div className="col-lg-3 col-md-12 text-center text-lg-start">
            <NavLink to className="navbar-brand m-0 p-0">
              <img src={img1} className="logoimg" alt="..." />
            </NavLink>
          </div>
          <div className="col-lg-9 col-md-12 text-end">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <i className="fa fa-map-marker-alt text-primary me-2" />
              <p className="m-0 text-dark">123 Street, New York, USA</p>
            </div>
            <div className="h-100 d-inline-flex align-items-center me-4">
              <i className="far fa-envelope-open text-primary me-2" />
              <p className="m-0 text-dark">info@example.com</p>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <NavLink className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-facebook-f" /></NavLink>
              <NavLink className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-twitter" /></NavLink>
              <NavLink className="btn btn-sm-square bg-white text-primary me-1" to=""><i className="fab fa-linkedin-in" /></NavLink>
              <NavLink className="btn btn-sm-square bg-white text-primary me-0" to=""><i className="fab fa-instagram" /></NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid nav-bar bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
          <NavLink to="/" className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none">
            <h1 className="text-primary m-0">Plumberz</h1>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav me-auto">
              <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
              <NavLink to="/serviceSingle" className="nav-item nav-link">Services</NavLink>
              <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

{/* ------------------------------------------------------------------------------------------------------ */}

              {
                !auth.user ? (
                  <>

                  <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                    {/* <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li> */}
                  </>) : (
                  <>
                    <li className="nav-item">
                      <NavLink className="nav-link">{auth.user.name}</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink onClick={handleLogout} className="nav-link" to="/login">logout</NavLink>
                    </li>
                  </>
                )
              }

{/* ------------------------------------------------------------------------------------------------------ */}



            </div>
            <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: 45, height: 45 }}>
                <i className="fa fa-phone-alt text-primary" />
              </div>
              <div className="ms-3">
                <p className="mb-1 text-white">Emergency 24/7</p>
                <h5 className="m-0 text-secondary">+012 345 6789</h5>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}

    </>
  )
}

export default Header