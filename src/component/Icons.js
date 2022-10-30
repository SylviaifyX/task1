import { BsGithub } from "react-icons/bs";
import { FaSlack} from "react-icons/fa";
function Icons(){
    return(
        <div className="icons">
            <div className="icongroup">
            <span className="i"><FaSlack/></span>
            <span className="i"><BsGithub/></span>
            </div>
           

        </div>
    )
}
export default Icons;