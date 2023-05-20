import {React} from "react";
import {Header} from "./components/header/Header"
import {Nav} from "./components/nav/Nav";
import {About} from "./components/about/About";
import {Experience} from "./components/experience/Experience";
import {Contact} from "./components/contact/Contact";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Certificates} from "./components/portfolio/certificates.jsx"
import {Footer} from "./components/footer/Footer"

function App(){
    

return(
    <div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
        <Certificates/>
        <Contact/>
        <Footer/>
    </div>
)

}

export {App};