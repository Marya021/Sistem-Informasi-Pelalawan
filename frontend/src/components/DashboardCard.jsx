import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoHome, IoInformation, IoInformationCircle } from "react-icons/io5";
import AreaChart from "./AreaChart";
import PolarAreaChart from "./PolarAreaChart";
import BarChart from "./BarChart";
import ChartHeatMap from "../pages/ChartHeatMap";
import SliderLogin from "./SliderLogin";
const DashboardCard = () => {
  return (
    <div>
      
      <section className="max-w-[1200px] mx-auto">
        <SliderLogin />
      </section>
      <section className="pt-[70px] w-full">
        <div className="py-4 bg-white items-center space-x-4 max-w-[1200px] w-full mx-auto grid grid-cols-6 text-center">
          <div className="rounded-lg border-2 py-2 bg-blue-500 text-white font-semibold border-blue-500">
            <Link>Home</Link>
          </div>
          <div className="rounded-lg border-2 py-2">
            <Link>Where We Work</Link>
          </div>
          <div className="rounded-lg border-2 py-2">
            <Link>Our Focus Areas</Link>
          </div>
          <div className="rounded-lg border-2 py-2">
            <Link>Explore Our Grants</Link>
          </div>
          <div className="rounded-lg border-2 py-2">
            <Link>Supporting SDGs</Link>
          </div>
          <div  className="rounded-lg border-2 py-2 bg-green-500 text-white font-semibold border-green-500">
            <Link to="/login"  >Login</Link>
          </div>
        </div>
      </section>
      <section className="py-[25px] mx-auto max-w-[1200px]">
        <div>
          <div className="text-3xl">Overview of Tableu Foundation</div>
          <div className="">
            Tableau Foundation's mission is to encourage the use of facts and
            analytical reasoning to solve the world's problems. Explore our
            Living Annual Report to see how we support organizations across the
            globe who are leading the charge in using data in innovative ways.
          </div>
        </div>
        <div className="grid grid-cols-4 mt-4">
            <div className="">
                <AreaChart title={"Organizaiton"} color={"#ffa500"}/>
            </div>
            <div className="">
                <BarChart title={"Countries"} color={"#0000ff"}/>
            </div>
            <div className="">
                <AreaChart title={"Total Giving YTD"} color={"#008000"}/>
            </div>
            <div className="">
                <PolarAreaChart title={"Total Giving"} color={"#ff0000"}/>
            </div>
        </div>
        <div>
          <ChartHeatMap />
        </div>
      </section>
    </div>
  );
};

export default DashboardCard;
