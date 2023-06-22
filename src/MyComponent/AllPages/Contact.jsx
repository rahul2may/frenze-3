import React from 'react'
import Layout from '../Common/Layout'

const Contact = () => {
  return (
    <>
      <Layout title={'Contact Page'}>
        {/* Contact Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Get In Touch</h6>
                <h1 className="mb-4">Contact For Any Query</h1>
                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                <iframe className="position-relative w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3633569150657!2d88.32521047594109!3d22.602902631857944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f96dec3b39%3A0xed7c0702b93e77ea!2s77%2F1%2C%20Benaras%20Rd%2C%20Bamangachi%2C%20Salkia%2C%20Howrah%2C%20West%20Bengal%20711106!5e0!3m2!1sen!2sin!4v1687188906459!5m2!1sen!2sin" frameBorder={0} style={{ height: 300, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="bg-light p-5 h-100 d-flex align-items-center">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" placeholder="Your Name" />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" placeholder="Your Email" />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </Layout>
    </>
  )
}

export default Contact