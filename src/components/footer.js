import "../css/footer.css"

import { useNavigate } from "react-router-dom"


const FooterSection=()=>{

  const toContact=useNavigate()
    
  return(
    <footer>
        <div className="i-div" onClick={()=>{
           toContact("/")
        }}>
          <i className="fas fa-home"></i>
        </div>
        <div className="i-div" onClick={()=>{
          toContact("/contact")
        }}>
          <i className="fas fa-envelope"></i>
        </div>
    </footer>
  )

}

export default FooterSection