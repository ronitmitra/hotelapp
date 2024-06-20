import Image from "next/image";
import navigation from "../../public/Navigation bar.png"
import menu from '../../public/menu.png'
import headerimg from "../../public/Header (1).png"
import group140 from '../../public/Group 140.png'
import Features from "./components/Features";
import Amenitiespage from "./components/Amenitiespage";
import Footer from "./components/Footer";
export default function Home() {
    return (
    <>
      <main className="hero">
        <header>
          <div className="header w-4/5 flex justify-between items-center">
            <div className="left-header">
              <Image
                src={navigation}
                width={165}
                height={15}
              />
            </div>
            <div className="menu-bar">
              <Image className="menu"
                src={menu}
                width={40}
                height={40}
              />
            </div>
            <div className="right-header mt-2 mb-2">
              <button className="header-btn hover:scale-105 transition-all ease-in-out hover:text-orange-500">Enquire Now</button>
            </div>
          </div>
        </header>
        <section className="ad flex justify-between flex-wrap">
          <div className="left-ad">
            <Image className="headerimage"
              src={headerimg}
              width={498}
              height={217}
            />
          </div>
          <div className="right-ad">
            <Image className="group140"
              src={group140}
              width={306}
              height={321}
            />
          </div>
        </section>

      </main>
      {/* Features section */}
      <Features />
      {/* Amenities section */}
      <Amenitiespage />
      {/* Footer Sectio  */}
      <Footer />
    </>
  );
}
