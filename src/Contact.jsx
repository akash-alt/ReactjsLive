import React, { useState } from "react"

const Contact=()=>{
    const [data,setData] = useState({
        fullname:"",
        contactnumber:"",
        email:"",
        msg:""

    }) 
    const InputEvent = (event)=>{
          const {name,value}=event.target;
          setData((preVal)=>{
              return{
                  ...preVal,
                  [name]:value
              }
          })
    }
    const formSubmit =(e)=>{
        e.preventDefault();
        alert("Thank You! Your form has submitted")
    }
    return(
        <>
            <div className="my-3">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit} >
                        <div class="mb-2">
                            <label for="exampleFormControlInput1" 
                            class="form-label">Full Name</label>
                             <input type="text" 
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             name ="fullname"
                             value={data.fullname}
                             onChange={InputEvent}
                             placeholder="Enter Your Name" />
                        </div>

                        <div class="mb-2">
                            <label for="exampleFormControlInput1" 
                            class="form-label">Contact Number</label>
                             <input type="Number" 
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             name="contactnumber"
                             value={data.contactnumber}
                             onChange={InputEvent}
                             placeholder="Contact Number" />
                        </div>

                        <div class="mb-2">
                            <label for="exampleFormControlInput1" 
                            class="form-label">Email address</label>
                             <input type="email" 
                             class="form-control" 
                             id="exampleFormControlInput1" 
                             name="email"
                             value={data.email}
                             onChange={InputEvent}
                             placeholder="name@example.com" />
                        </div>
                        <div class="mb-2">
                             <label for="exampleFormControlTextarea1" 
                             class="form-label">Message</label>
                             <textarea class="form-control" 
                             id="exampleFormControlTextarea1" 
                             name="msg"
                             value={data.msg}
                             onChange={InputEvent}
                             rows="3"></textarea>
                        </div>
                        <div class="col-12 mb-2">
                            <div class="form-check">
                               <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                 <label class="form-check-label" for="invalidCheck2">
                                   Agree to terms and conditions
                                 </label>
                            </div>
                        </div>

                        <div class="col-12">
                             <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        
                        </form>

                    </div>

                </div>

            </div>
        </>
    );
};
export default Contact;