import React from 'react'

const Team = () => {
  return (
    <>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase">Our Technicians</h6>
            <h1 className="mb-5">Our Expert Technicians</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-1.jpg" alt />
                </div>
                <div className="team-text">
                  <div className="bg-light">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                  <div className="bg-primary">
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-2.jpg" alt />
                </div>
                <div className="team-text">
                  <div className="bg-light">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                  <div className="bg-primary">
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-3.jpg" alt />
                </div>
                <div className="team-text">
                  <div className="bg-light">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                  <div className="bg-primary">
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src="img/team-4.jpg" alt />
                </div>
                <div className="team-text">
                  <div className="bg-light">
                    <h5 className="fw-bold mb-0">Full Name</h5>
                    <small>Designation</small>
                  </div>
                  <div className="bg-primary">
                    <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  )
}

export default Team