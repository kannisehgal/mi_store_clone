import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"

const NavOptions = ( {miPhones, redmiPhones, tv, laptop, fitnessAndlifeStyle, home, audio, accessories}) => {
    
  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [redmiPhonessToggle, setRedmiPhonessToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setlaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    
  useEffect(() => {
      if(window.location.pathname === "/miphones"){
          return setMiPhonesToggle(true)
         }
         if(window.location.pathname === "/redmiphones"){
            return setRedmiPhonessToggle(true)
           }
          if(window.location.pathname === "/tv"){
            return setTvToggle(true)
           }
          if(window.location.pathname === "/laptops"){
            return setlaptopToggle(true)
           }
          if(window.location.pathname === "/lifestyle"){
            return setFitnessToggle(true)
           }
          if(window.location.pathname === "/home"){
            return setHomeToggle(true)
           }
          if(window.location.pathname === "/audio"){
            return setRedmiPhonessToggle(true)
           }
          if(window.location.pathname === "/accessories"){
            return setRedmiPhonessToggle(true)
           }
        
    }, [])
  

    return (
        <div className='navOptions'>

            {miPhonesToggle? miPhones.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }   

            {redmiPhonessToggle? redmiPhones.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }    

            {tvToggle? tv.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }     

            {laptopToggle? laptop.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null } 

            {fitnessToggle? fitnessAndlifeStyle.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }   

            {homeToggle? home.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }   

            {audioToggle? audio.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }   

            {accessoriesToggle? accessories.map((item)=>(

                  < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                )) : null }   

        </div>
  )
}

export default NavOptions