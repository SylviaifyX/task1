// import Grids from "./Grids";
import img from "./images/sylviaR.png"
import imgg from "./images/share.png"
function Content() {
    return (
        <div className="profilCon">
            <section className="Profil-details">
                <div className="pgroup">
                    <div className="profilImg" id="profile__img">
                        <img src={img} alt=""></img>
                    </div>
                    <div className="share">

                        <img src={imgg} alt=""></img>
                    </div>

                </div>

                <div className="profilnames">
                    <h3 className="tName" id="twitter">IfeomaOkpara9</h3>
                    <h3 className="SName" id="slack">sylviaI</h3>
                </div>

            </section>

        </div>
    )
}
export default Content;