import "./App.scss";
import Community from "./components/Community/Community";
import Dashboard from "./components/Dashboard/Dashboard";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
import Premium from "./components/Premium/Premium";
import Profile from "./components/Profile/Profile";
import Schedule from "./components/Schedule/Schedule";
import Spent from "./components/Spent/Spent";
import { FaAngleRight, FaBehance, FaDribbble, FaShopify } from "react-icons/fa";
import { DiEnvato } from "react-icons/di";

const Data = [
  {
    title: "Dribble",
    desc: "@grantart",
    percent: "+2%",
    icon: FaDribbble,
  },
  {
    title: "Behance",
    desc: "@grantart",
    percent: "-7%",
    icon: FaBehance,
  },
  {
    title: "Envato",
    desc: "@robertgrant",
    percent: "+4%",
    icon: DiEnvato,
  },
  {
    title: "Shopify",
    desc: "@robertgrant",
    percent: "+2%",
    icon: FaShopify,
  },
];

function App() {
  return (
    <div className="App">
      <div className="left">
        <Logo />
        <Profile />
        <Menu />
        <Community />
      </div>
      <div className="line"></div>
      <div className="right">
        <div className="Grid">
          <Dashboard />
          <Premium />
          <Spent />
          <Schedule />
        </div>
        <div className="Channel">
          <div className="Det">
            <span>Channels</span>
            <span>Your statistics for 1week period.</span>
          </div>
          <div className="Data">
            {Data.map((e, index) => {
              return (
                <div className="Card" key={`Data-${index}`}>
                  <div className="icon">
                    <e.icon />
                  </div>
                  <span className="title">{e.title}</span>
                  <span className="desc">{e.desc}</span>
                  <span className="detail">{e.percent}</span>
                </div>
              );
            })}
            <div className="Card last">
              <span className="tit">Full Stats</span>
              <div className="ico">
                <FaAngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
