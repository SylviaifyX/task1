import image from "./images/Zuri.Internship_Logo.png"
import image1 from "./images/Footer text.png"
import image2 from "./images/I4G.png"

function Footer() {
    return (
        <div className="footerCon">
            <div className="footer">
                <div className="image">
                    <img src={image} alt=""></img>
                </div>
                <div className="imagee">
                    <img src={image1} alt=""></img>
                </div>
                <div className="image">
                    <img src={image2} alt=""></img>
                </div>




            </div>
        </div>
    )
}
export default Footer;