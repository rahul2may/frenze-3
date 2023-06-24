import React, { useEffect, useState } from 'react'
import Layout from '../Common/Layout'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { addUser, getAllUsers } from '../API/Api'


const initialValues={
  name:"",
  email:"",
  subject:"",
  message:""
}



const Contact = () => {
const [user,setUser]=useState(initialValues)
const [users,setUsers]=useState()

const[error,setError]=useState({})
const navigate=useNavigate()




const getUsers = async () => {
  let response = await getAllUsers()
  setUsers(response?.data)
}



// for validate Form

const validation=()=>{

  let error={}
  if (!user.name){
      error.name="Name is requerd"
  }
   if(!user.email){
      error.email="Email is requerd"
  }
  else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email))
  {
      error.email="Enter a valid email"
  }
  
  if(!user.subject){
      error.subject="subject is requerd"
  }
   
  if(!user.message){
      error.message="messag is requerd"
  }
  
  return error
  }







let name,value
const postUserData=(e)=>{
    name=e.target.name
    value=e.target.value
    setUser({ ...user,[name]:value})


    if (name === "name") {
      if (value.length === 0) {
          setError({ ...error, name: "@Name is Required" })
          setUser({ ...user, name: "" })
      } else {
          setError({ ...error, name: "" })
          setUser({ ...user, name: value })
      }
  }
  if (name === "email") {
    if (value.length === 0) {
        setError({ ...error, email: "@Email is Required" })
        setUser({ ...user, email: "" })
    } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: value })
    }
}

if (name === "subject") {
  if (value.length === 0) {
      setError({ ...error, subject: "@Subject is Required" })
      setUser({ ...user, subject: "" })
  } else {
      setError({ ...error, subject: "" })
      setUser({ ...user, subject: value })
  }
}
if (name === "message") {
  if (value.length === 0) {
      setError({ ...error, message: "@Message is Required" })
      setUser({ ...user, message: "" })
  } else {
      setError({ ...error, message: "" })
      setUser({ ...user, message: value })
  }
}

}

const SubmitInfo=async(e)=>{
  e.preventDefault()
  let ErrorList = validation()
  setError(ErrorList)
  if (Object.keys(ErrorList).length === 0) {
    await addUser(user)
    navigate('/')
    toast('Data Added Successfully')

}

}

useEffect(() => {
  getUsers()
}, [])
// console.log('d', users);


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
                  {/* <form> */}
                  <form onSubmit={SubmitInfo} className="container mt-5">

                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          {/* <input type="text" className="form-control" id="name" placeholder="Your Name" /> */}
                    <input type="text" className="form-control" name="name" placeholder="Your Name" value={user.name} onChange={e => postUserData(e)} />
                    <label htmlFor="name">Your Name</label>
                   <span style={{ color: "red", marginLeft: "15px" }}> {error.name} </span>                
                        </div>                       
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" name="email" placeholder="Your Email" value={user.email} onChange={e => postUserData(e)}/>
                          <label htmlFor="email">Your Email</label>
                          <span style={{ color: "red", marginLeft: "15px" }}> {error.email} </span>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          {/* <input type="text" className="form-control" id="subject" placeholder="Subject" />
                          <label htmlFor="subject">Subject</label> */}
                          <input type="text" className="form-control" name="subject" placeholder="Your Subject" value={user.subject} onChange={e => postUserData(e)}/>
                          <label htmlFor="email"> Subject</label>
                          <span style={{ color: "red", marginLeft: "24px" }}> {error.subject} </span>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating">
                          {/* <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                          <label htmlFor="message">Message</label> */}
                          <input type="text" className="form-control" name="message" placeholder="Your Message" value={user.message} onChange={e => postUserData(e)}/>
                          <label htmlFor="email"> Message</label>
                          <span style={{ color: "red", marginLeft: "24px" }}> {error.message} </span>
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