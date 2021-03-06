import "./contact.scss"
import {GitHub, LinkedIn} from "@material-ui/icons"

export default function Contact() {
    return (
        <div className="contact" id="contact">
            

            <h1>Get in touch.</h1>

            <a href="mailto:erik.karlsson97@outlook.com" className="button">Say hi</a>

            <div className="mobileButtons">
            <a href="https://github.com/Erikmmkarlsson" target="blank">
                    <GitHub className="icon"/></a>

                <a href="https://www.linkedin.com/in/erik-karlsson-8643a1143/" target="blank">
                    <LinkedIn className="icon"/> </a>
            </div>



            </div>

    )
}
