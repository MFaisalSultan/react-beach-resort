import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail , FaHiking, FaShuttleVan ,FaBeer } from 'react-icons/fa';
import { icons } from 'react-icons/lib/cjs';
export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"Free Conctail",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaHiking></FaHiking>,
                title:"Endless Hicking",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaShuttleVan></FaShuttleVan>,
                title:"Free Shuttle ",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon:<FaBeer></FaBeer>,
                title:"Strongest Beer",
                info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }


        ]
    }
    render() {
        return (
            <section className="services"> 
              <Title title="services"></Title>

             <div className="services-center">
             {this.state.Services.map((item,index)=>{
                 return <div key="index" className="service"> 
                        <span >{item.icon} </span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                 </div>
             })}
             </div>
              
            </section>
            
        )
    }
}
