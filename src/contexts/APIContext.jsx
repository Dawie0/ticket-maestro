/* eslint react/prop-types: 0 */
import { createContext, useState } from "react";
import axios from 'axios'

const ApiContext = createContext();



const ApiContextProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);
    const [eventData, setEventData] = useState(null);
    const [venueData, setVenueData] = useState(null);
    const [performerData, setPerformerData] = useState(null);

    const searchEvents = async (query) => {
        try {
          const response = await axios.get(`/api/search-events`, {
            params: { keyword: query },
          });
          setEventData(response.data);
        } catch (error) {
          console.error(error);
        }
    };
    
    const getEventDetails = async (eventId) => {
        try {
          const response = await axios.get(`/api/event-details/${eventId}`);
          // Handle response as needed
        } catch (error) {
          console.error(error);
        }
    };
    
    const listVenues = async () => {
        try {
          const response = await axios.get(`/api/list-venues`);
          // Handle response as needed
        } catch (error) {
          console.error(error);
        }
    };
    
    const listPerformerDetails = async () => {
        try {
          const response = await axios.get(`/api/list-performers`);
          // Handle response as needed
        } catch (error) {
          console.error(error);
        }
    };
    
    const getPerformerDetails = async (performerId) => {
        try {
          const response = await axios.get(`/api/performer-details/${performerId}`);
          // Handle response as needed
        } catch (error) {
          console.error(error);
        }
    };
    



    const value = {
        apiData,
        setApiData,
        eventData,
        venueData,
        performerData,
        searchEvents,
    };

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    )
};

export { ApiContext, ApiContextProvider }