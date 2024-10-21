import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { AiOutlineDollar } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { RxLightningBolt } from "react-icons/rx";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";





const Sidebar = () => {
  return (
    <div>
        <div className="drawer lg:drawer-open h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {}
          <label
            htmlFor="my-drawer-2"
            className="btn  drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
          </label>
          <ul className="menu pt-8 min-h-full">
            {}
            <li className="flex"> 
                <Link to="/Dashboard"> <RxDashboard size={20}/> Dashboard</Link>
                <Link to="/Leads"><HiOutlineInboxArrowDown size={24}/> Leads</Link>
                <Link to="/Transactions"><AiOutlineDollar size={24}/> Transactions</Link>
                <Link to="/Analytics"><BsBarChart size={22}/> Analytics</Link>
                <Link to="/Integration"><RxLightningBolt size={20}/> Integration</Link>
                <Link to="/Calendar"><IoCalendarOutline size={22}/> Calendar</Link>
                <Link to="/Pages"><HiOutlineDocumentDuplicate size={24}/> Pages</Link>
                <Link to="/Settings"><IoSettingsOutline size={22}/> Settings</Link>
                <Link to="/Documentation"><HiOutlineDocumentText size={24}/> Documentation</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar