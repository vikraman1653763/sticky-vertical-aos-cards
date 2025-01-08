import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SiBluesky } from "react-icons/si";
import { SiBurton } from "react-icons/si";
import { SiCodefresh } from "react-icons/si";
import { SiDbt } from "react-icons/si";
import { SiAdafruit } from "react-icons/si";
import { SiCustomink } from "react-icons/si";

const data = [
    {
        "Feature": "Feature 1",
        "Icon": <SiBluesky/>,  
        "Specification": "Dummy Specification 1"
    },
    {
        "Feature": "Feature 2",
        "Icon": <SiBurton/>,  
        "Specification": "Dummy Specification 2"
    },
    {
        "Feature": "Feature 3",
        "Icon": <SiCodefresh/>,  
        "Specification": "Dummy Specification 3"
    },
    {
        "Feature": "Feature 4",
        "Icon": <SiDbt/>,  
        "Specification": "Dummy Specification 4"
    },
    {
        "Feature": "Feature 5",
        "Icon": <SiAdafruit/>,  
        "Specification": "Dummy Specification 5"
    },
    {
        "Feature": "Feature 6",
        "Icon": <SiBurton/>,  
        "Specification": "Dummy Specification 6"
    },
    {
        "Feature": "Feature 7",
        "Icon": <SiCodefresh/>,  
        "Specification": "Dummy Specification 7"
    },
    {
        "Feature": "Feature 8",
        "Icon": <SiDbt/>,  
        "Specification": "Dummy Specification 8"
    },
    {
        "Feature": "Feature 9",
        "Icon": <SiBluesky/>,  
        "Specification": "Dummy Specification 9"
    },
    {
        "Feature": "Feature 10",
        "Icon": <SiCustomink/>,  
        "Specification": "Dummy Specification 10"
    },
    {
        "Feature": "Feature 11",
        "Icon": <SiAdafruit/>,  
        "Specification": "Dummy Specification 11"
    }
];
function SectionX() {
    useEffect(() => {
        AOS.init({ duration: 500 ,offset: 300,});
      }, []);

  return (
    <div className='X'>
      <aside className='X-aside'> 
        <h2 className='X-aside-title'>Specification</h2>
      </aside>
      <div className='X-cards'>
        {data.map((drone,index)=>(
            <div key={index} className='X-card' data-aos='fade-up-left'>
                <div className='X-image'>{drone.Icon}</div>
                <div className='X-content'>

                <h4>{drone.Feature}</h4>
                <p>{drone.Specification}</p>
                </div>
                </div>
        ))}
      </div>
    </div>
  )
}
export default SectionX

// style for this code 


// .X {
//   display: flex;
//   color: #d4d4d4;
//   position: relative;
//   height: 300vh;
//   padding: 1em 13rem;
//   justify-content: center;
// }


// .X-aside {
//   position: sticky;
//   top: 30%;
//   margin-right: 20px;
//   height: min-content;
// }

// .X-aside-title {
//   writing-mode: vertical-rl; 
//   /* text-orientation: upright; */
//   font-size: var(--fs-xl);
//   transform: rotate(180deg);
//   background-color: red;
//   color: black;
//   text-transform: uppercase;
//   border-radius: .5em;
//   padding: 1em 0em;

// }
// .X-cards{
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
// }
// .X-card{
//   display: flex;
//   gap: 1em;
//   align-items: center;
//   width: auto;
// }
// .X-image{
//   width: 10em;
//   border: 1px solid #ffffff6b;
//   text-align: center;
//   border-radius: 1em;
  
// }
// .X-image svg{
//   width: 80%;
//   height: 100%;
//   color: red;
// }
// .X-content{
//   width: 60%;
//   display: flex;
//   flex-direction: column;
//   align-items:flex-start;
// }
// .X-content h4{
//   font-size: var(--fs-l);
//   margin-right: .5em;
// }
// .X-content p{
//   font-size: var(--fs-s);
// }
