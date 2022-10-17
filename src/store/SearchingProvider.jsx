import React,{createContext,useReducer,useState,useEffect} from 'react'

export const SearchContext = createContext();

const initialState = {
    loading:false,
    error:false,
    data:undefined
  }
  
  const reducer = (state,action) => {
      switch (action.type) {
        case 'success':
            return {loading:false,error:false,data:action.final_result}
          break;
  
          case 'failed':
            return {loading:false,error:true,data:undefined}
          break;
  
          case 'start':
            return {loading:true,error:true,data:undefined}
          break;
      
        default:
          return state;
          break;
      }
  }




const SearchingProvider = ({children}) => {


    const [weather,dispatch] = useReducer(reducer,initialState)


    const [location,setLocation] = useState('Yangon');
  
  
    
    const handleSearch = (e) => {
  
      dispatch({type:"start"});
  
        e.preventDefault();
        
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`)
        .then(res => res.json())
        .then(response => dispatch({type:'success',final_result:response}));  
        
    }
  
    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Yangon&units=metric&appid=895284fb2d2c50a520ea537456963d9c`)
      .then(res => res.json())
      .then(response => dispatch({type:'success',final_result:response})); 
    },[])
  

  return (
    <SearchContext.Provider value={{weather,handleSearch,setLocation}}>
                {children}
    </SearchContext.Provider>
  )
}

export default SearchingProvider