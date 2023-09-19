import {Link} from 'react-router-dom'
import '../../App.jsx'
import '../../App.css'
import { useState } from 'react'


function contact() {

    const[formData, setformData] = useState({
        email: "",
        message: "",
    });

    const handleInputChange = (event) => {

        const{email, message, value} = event.taget;

        setformData({
            ...formData,
            [email]: value,
            [message]: value,
        })

    };
const handleFormSubmit = (event) => {

    event.preventDefault();

    alert("Thank you for your message! I will reply as soon as possible!")

    setformData({
        email: "",
        message:"",
    })
}

    return (
<>
<section>
   <p>Please find my contact information here and fill out the form below if you would like to get in touch</p>
   
   <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-walker-lange-b5a06aa4/">LinkedIn</a>
   <a target='_blank' rel="noopener noreferrer" href="https://github.com/megwalkerlange">GitHub</a>
   <a target='_blank' rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vSQw3XCnszkgl_QBmpy6wiqlYcdPESJlyCX6iBy8JGdv2GT8qVx-fSpIWiSPa_HD5iDsopoalwK0H-2/pub">CV</a>

</section>
<form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1" value={formData.email} onChange={handleInputChange}>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1"value={formData.message} onChange={handleInputChange}>Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
  </form>

</>)
    }


export default contact