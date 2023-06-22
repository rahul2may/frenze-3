import React from 'react'
import './CSS/TestimonialStyle.css'
const Testimonial = () => {
  return (

    <>
      {/* Testimonial Start */}
      <div class="container">
        <div class="text-center">
          <h6 class="text-secondary text-uppercase">Testimonial</h6>
          <h1 class="mb-5">Our Clients Say!</h1>
        </div>
{/* -----------------------------------------------------------------------------------------------------*/}
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a to="#" className="btn btn-primary">Reply</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a to="#" className="btn btn-primary">Reply</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a to="#" className="btn btn-primary">Reply</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a to="#" className="btn btn-primary">Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------------- */}
      </div>

      {/* Testimonial End */}

    </>
  )
}

export default Testimonial