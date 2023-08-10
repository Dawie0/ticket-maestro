/* eslint react/prop-types: 0 */
import { createContext, useState, useEffect } from "react"
import axios from 'axios'

const ApiContext = createContext()



const ApiContextProvider = ({ children }) => {
    const [eventData, setEventData] = useState(null)
    const [pageNumber, setPageNumber] = useState(0)
    const [keyword, setKeyword] = useState('')
    const [showNext, setShowNext] = useState(false)
    const [showPrev, setShowPrev] = useState(false)
    // const [location, setLocation] = useState('')

    // Create useEffect for loading suggestions
    // useEffect(() => {
    //   fetchUserLocationInfo().then((locationInfo) => {
    //     if (locationInfo) {
    //       setTimeout(() => {
    //         setLocation(locationInfo.county)
    //           if (location !== '') {
    //             getSuggestions(location)
    //           }
    //           else {
    //             getSuggestions('concert')
    //           }
    //         }, 500)
    //       console.log("User Location Info:", location)
    //     } else {
    //       console.log("Unable to fetch user location info");
    //     }
    //   })
      
    // }, [])


    useEffect(() => {
      if (eventData && eventData.page.totalPages > 0 && eventData.page.totalPages - 1 !== pageNumber) {
        setShowNext(true)
       
      } 
      else {
        setShowNext(false)
      }
      if (eventData && eventData.page.number > 0) {
        setShowPrev(true)
      } 
      else {
        setShowPrev(false)
      }
    }, [eventData, pageNumber])

    const settingPageNumber = (num) => {
      setPageNumber(num)
    }


    const searchEvents = async () => {
        let url = ''
        try {
          if (!keyword) {
            url = `http://localhost:5000/api/list-events`
          }
          else {
            url = `http://localhost:5000/api/search-events/${keyword}/${pageNumber}`
          }
          const response = await axios.get(url)
          setEventData(response.data)
          
        } 
        catch (error) {
          console.error(error)
        }
    }

    



// Function to fetch location information using reverse geocoding
// const getLocationInfoFromCoords = async (coords) => {
//   try {
//     const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
//       params: {
//         lat: coords.latitude,
//         lon: coords.longitude,
//         format: 'json',
//       },
//     })

//     const locationInfo = response.data;
//     const address = locationInfo.address;

//     // Extract the desired location information
//     const city = address.city || address.town || address.village
//     const county = address.county
//     const state = address.state

//     return { city, county, state }
//   } catch (error) {
//     console.error(error)
//     return null; // Handle errors gracefully
//   }
// }

// // Function to get user's geolocation
// const getUserGeolocation = () => {
//   return new Promise((resolve, reject) => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           resolve(position.coords)
//         },
//         (error) => {
//           reject(error)
//         }
//       )
//     } else {
//       reject("Geolocation not available")
//     }
//   })
// }

// // Call the function to fetch user's location information
// const fetchUserLocationInfo = async () => {
//   try {
//     const userCoords = await getUserGeolocation();
//     const locationInfo = await getLocationInfoFromCoords(userCoords)
//     return locationInfo
//   } catch (error) {
//     console.error(error)
//     return null; // Handle errors gracefully
//   }
// }

// Call the function to fetch user's location information









    
    // const getSuggestions = async (keyword) => {
    //   try {
    //     const response = await axios.get(`http://localhost:5000/api/suggest/${keyword}`)
    //     setEventData(response.data)
    //   }
    //   catch (error) {
    //     console.error(error)
    //   }
    // }
    


    
    const value = {
      eventData,
      searchEvents,
      pageNumber,
      settingPageNumber,
      keyword,
      setKeyword,
      setEventData,
      showNext,
      setShowNext,
      showPrev,
      setShowPrev
    }

    
    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
}

export { ApiContext, ApiContextProvider }