import React, { useState } from 'react'
import axios from 'axios'

function ContactContactfrom() {

  const API_PATH = 'http://localhost/Construction/src/api/contact.php'
  const [mailSent, setmailSent] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({


    firstname: "",
    lastname: "",
    phone: "",
    subject: "",
    email: "",
    message: ""
  })
  const InputEvent = (event) => {

    const { name, value } = event.target

    setData((preValue) => {

      return {

        ...preValue,
        [name]: value
      }
    })



  }


  const fromSubmit=(event)=>{
// event.preventDefault();

// alert(
//     `my name is ${data.name},  my number is ${data.phone},  my Emial id is ${data.email},  my msg is ${data.message} `);


axios({
  method: 'post',
  url: API_PATH,

  headers: {
      'content-type': 'application/json'
  },
  data:data
})
.then(result => {
  console.log(data)
  
  if (result.data.sent) {
    setmailSent(result.data.sent)
    setError(false)
  } else {
    setError(true)
  }
})
.catch(error => setError( error.message ));
};



 


return (
  <>
    {/* Contact Section */}
    <section className="py-5 bg-light shadow-sm index-forward">
      <div className="container py-5">
        <div className="card rounded-0 border-0">
          <div className="card-body p-4 p-lg-5">
            <div className="row py-5">
              <div className="col-lg-5">
                <h2>Request a <span className="text-primary">Call </span>Back</h2>
                <p className="mb-5 text-muted">Nanotechnology immersion along the information highway will close the loop on focusing</p>
                <ul className="list-unstyled mb-0">
                  <li>
                    <h5 className="text-muted">Address</h5>
                    <p className="text-muted">1798 Pretty View Lane, California</p>
                  </li>
                  <li>
                    <h5 className="text-muted">Email</h5>
                    <p className="text-muted">Construction@example.com</p>
                  </li>
                  <li>
                    <h5 className="text-muted">Phone</h5>
                    <p className="text-muted">+535 421 895 6523</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-7">
                <form onSubmit={fromSubmit} >
                  <div className="row">
                    <div className="form-group col-lg-6">
                      <input className="form-control" type="text" name="firstname" value={data.firstname} onChange={InputEvent} placeholder="First name" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input className="form-control" type="text" name="lastname" value={data.lastname} onChange={InputEvent} placeholder="Last name" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input className="form-control" type="tel" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone number" />
                    </div>
                    <div className="form-group col-lg-6">
                      <input className="form-control" type="text" name="subject" value={data.subject} onChange={InputEvent} placeholder="Subject" />
                    </div>
                    <div className="form-group col-lg-12">
                      <input className="form-control" type="email" name="email" value={data.email} onChange={InputEvent} placeholder="Email address" />
                    </div>
                    <div className="form-group col-lg-12">
                      <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} rows={5} placeholder="Leave your message" defaultValue={""} />
                    </div>
                    <div className="form-group col-lg-12">
                      <button className="btn btn-outline-primary" type="submit">Submit now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
)
}

export default ContactContactfrom
