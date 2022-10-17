import React,{useContext} from 'react'
import { SearchContext } from '../store/SearchingProvider'
import Card from './Card';

const Display = () => {

    const {weather,handleSearch,setLocation} = useContext(SearchContext);

    console.log(weather);


  return (
    <div className='min-h-[100vh] flex justify-center sm:items-center items-start'>
      
<div className='main-container overflow-hidden sm:h-[600px] h-[95vh] sm:w-[350px] w-full lg:rounded-md rounded-[0px] shadow-xl relative'>

    <div className='w-full h-full step-container  flex flex-col items-center sm:justify-start justify-center'>
      {/* search bar */}
      <form onSubmit={handleSearch} className='absolute left-[50%] transform translate-x-[-50%] top-[-10px] flex justify-center w-full'>
       <input type="text" className='rounded-[10px] w-[90%] py-[10px] pt-[20px] pl-[10px] border-0 outline-none bg-blur text-[14px] tracking-widest' placeholder="Enter City" onChange={(e) => setLocation(e.target.value)} /> 
      </form>


    {/* display box */}
    {
      (weather.loading) ? <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-10 w-10 sm:mt-[80%]"></div>: (weather.data != undefined) ? (
      
        (weather.data.cod == 200) ? (
          <>
          <div className='w-full py-[5px] mt-[100px] font-kanit text-center text-2xl font-bold'>
              <p>{weather.data.name}</p>
          </div>

          <div className='w-[90%] py-[20px] rounded-[10px] text-center'>
              <p>{weather.data.main.temp.toFixed(1)} °c</p>
          </div>

          
          <div className='w-[90%] rounded-[10px] flex justify-center items-center flex-col text-white'>
              <img src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} className='w-[130px] h-[130px] p-0' alt="" srcset="" />
              <p className='text-sm uppercase font-bold py-0 mt-[-10%]'>{weather.data.weather[0].main}</p>

          </div>

          <div className="w-full flex flex-wrap justify-evenly items-center mt-[30px]">
            <Card speed={`${weather.data.wind.speed} MPH`} title='Wind'/>

            {(weather.data.weather[0].main === "Rain") && <Card speed={`${weather.data.rain['1h']} MPH`} title='Rain'/>}
            
          </div>

        </>
        ) : 
      <h1 className='text-4xl font-bold sm:mt-[80%]'>Invalid City</h1>

        
      ) :
      <h1 className='text-4xl font-bold sm:mt-[80%]'>Search By City</h1>

    }
    </div>

</div>

</div>
  )
}

export default Display