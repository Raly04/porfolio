import AboutMe from "./about-me";
import Contacts from "./contacts";
import Footer from "./footer";
import Home from "./home";
import NavBar from "./nav.bar";
import Skills from "./skills";
import SocialMedia from "./social.media";
import Works from "./works";

export default function MainContainer() {
  return (
    <div className="">
      <NavBar />
      <SocialMedia />
      <div className="bg-background h-full overflow-x-hidden">
        <Home />
        <AboutMe />
        <Skills />
        <Works />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
