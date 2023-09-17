import {Link} from 'react-router-dom'
import '../../App.jsx'
import '../../App.css'


function contact() {

    return (
<>
<section>
   <p>Please find my contact information below if you would like to get in touch</p>
   <Link>
   <href className="mailto">meg.walker56@gmail.com</href>
   </Link>
   <Link>
   <href to ={"https://github.com/megwalkerlange"}>GitHub</href>
   </Link>
   <Link>
   <href to ={"https://github.com/megwalkerlange"}>LinkedIn</href>
   </Link>
</section>
</>)
    }


export default contact