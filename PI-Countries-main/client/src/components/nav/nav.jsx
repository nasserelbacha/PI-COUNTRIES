import React from "react";
import Orden from '../orden/orden'
import Activity from '../activity/activity'
import Search from '../search/search'
import Continent from "../continent/continent";
import { Link } from "react-router-dom";
import './nav.css'

export default function Nav() {
 return(
     <div className= 'nav'>
     <Search/>
     <div>
         <Orden></Orden>
         <Activity></Activity>
         <Continent/>
         <Link to = '/post'>
             <button> Add New Activity</button>
         </Link>
     </div>
     </div>
 )
}