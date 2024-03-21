
import {Outlet} from "react-router-dom"

// components
import Menu from "./Menu/Menu";

// images
import Home from "../../assets/images/icons/Home.svg";
import Charts from "../../assets/images/icons/Charts.svg";
import InfoCircle from "../../assets/images/icons/InfoCircle.svg";
import persifundLogo from "../../assets/images/persifundLogo.svg";

import Notification from  "../../assets/images/icons/Notification.svg";

export default function Dashboard() {

  const menus=[
    {
    title:"Dashboard",
    link:"/",
    image:Home
  },
  {
    title:"Analytic",
    link:"analytic",
    image:Charts
  },

]

  return (
    <div className="w-100 bg-base h-lvh">
      <section className="h-[4rem] flex items-center justify-between min-h-[40px]">
        <div className="w-1/5">
          <img
            className="h-[35px] w-[35px] ml-[40px]"
            src={persifundLogo}
            alt="persifund logo"
          />
        </div>
        <div className="w-1/4 lg:w-1/5 flex items-center">
          <img src={Notification} className="w-[30px] mr-[10px]"/>
          {/* line */}
          <div className="inline-block w-[1px] h-[30px] bg-[#35498B] "></div>
          <span className="inline-block w-[35px] h-[35px] text-[#fff] rounded-full bg-[#F9963B] text-center flex justify-center items-center mx-[5px]">
            AA
          </span>
          <span className="md:inline-block hidden">
            <div>Goorooty</div>
            <div>Alireza Alipour</div>
          </span>
        </div>
      </section>
      <section className="flex flex-row gap-x-3">
        <aside className=" relative bg-sideblue1 h-[calc(100vh-4rem)]  rounded-tr-[20px] py-[4rem] w-1/6 md:1/5">
        
          {menus.map(menu=><Menu title={menu.title} image={menu.image} link={menu.link}/>)}

          <div className="absolute bottom-[35px] w-full md:w-[300px]">
          <Menu title="Help center" image={InfoCircle} link="help" />
          </div>
        </aside>
        <main className=" bg-[#fff] rounded-tl-[20px] border-t-2 border-l-2 border-[#2A34A8] p-8 w-5/6 md:w-4/5">
          <div className="font-title text-title">Dashboard</div>
          <Outlet/>
        </main>
      </section>
    </div>
  );
}
