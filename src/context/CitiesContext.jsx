import { createContext, useState, useReducer, useEffect, useContext } from "react"

const CitiesContext = createContext();
const initialState = {
    cities:[],
    isLoading:false,
    currentCity:{},
    error:"",
}
function reducer(state,action){
    switch(action.type){
        case 'loading':
            return{...state, isLoading:true}
        case 'cities/loaded':
            return {
                ...state, isLoading:false, cities:action.payload
            }
        case 'city/loaded':
            return {
                ...state, isLoading:false, currentCity:action.payload
            }
        case 'city/created':
            return {...state, isLoading:false, cities:[...state.cities, action.payload], currentCity:action.payload}
        case 'city/deleted':
            return {...state, isLoading:false,
                 cities:state.cities.filter(city=>city.id!==action.payload),
                currentCity:{}}
        case 'rejected':
            return {...state, isLoading:false, error:action.payload}
        default:
            throw new Error("Unknown action type");
    }
}

function CitiesProvider({ children }) {
    const [{cities, isLoading,currentCity,error}, dispatch] = useReducer(reducer, initialState);
    // const [cities, setCities] = useState([]); //array包object
    // const [isLoading, setIsLoading] = useState(false);
    const BASE_URL = 'http://localhost:9000';
    // const [currentCity, setCurrentCity] = useState({})

    useEffect(() => {
        async function fetchCities() {
            dispatch({type:'loading'})
            try {
                
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                // setCities(data);
                dispatch({type:'cities/loaded', payload:data})

            } catch {
                // alert('There was an error loading data...');
                dispatch({type:'rejected', payload:"There was an error loading cities..."})

            }
        }
        fetchCities()
    }, []);
    async function getCity(id) {
        if (id===currentCity.id) return;
            try {
                // setIsLoading(true);
                dispatch({type:'loading'})
                const res = await fetch(`${BASE_URL}/cities/${id}`)
                const data = await res.json();
                console.log(data)
                // setCurrentCity(data);
                dispatch({type:'city/loaded', payload:data})
            } catch {
                // alert('There was an error loading data...');
                dispatch({type:'rejected', payload:"There was an error loading city..."})

            }
    }

    async function createCity(newCity) {
        try {
            // setIsLoading(true);
            dispatch({type:'loading'})
            const res = await fetch(`${BASE_URL}/cities`,{
                method:'POST',
                body:JSON.stringify(newCity),
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data = await res.json();
            // setCities((cities)=>[...cities,data])
            dispatch({type:'city/created', payload:data})
        } catch {
            dispatch({type:'rejected', payload:"There was an error creating city..."})
        }
}

async function deleteCity(id) {
    try {
        dispatch({type:'loading'})
        await fetch(`${BASE_URL}/cities/${id}`,{
            method:'DELETE',
        });
        dispatch({type:'city/deleted', payload:id})

        // setCities((cities)=>cities.filter(city=>city.id!==id))
    } catch {
        dispatch({type:'rejected', payload:"There was an error deleting city..."})
    }
}

    return <CitiesContext.Provider value={{
        cities, isLoading, error, currentCity,getCity,createCity,deleteCity
    }}>{children}</CitiesContext.Provider>
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("useCities must be used within a CitiesProvider");
    return context;
}

export { CitiesProvider, useCities }