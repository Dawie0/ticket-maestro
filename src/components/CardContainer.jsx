import { useContext } from "react"
import { ApiContext } from "../contexts/APIContext"
import Card from "./Card"




const CardContainer = () => {
  const {  eventData, pageNumber, settingPageNumber, searchEvents, setEventData, showNext, showPrev } = useContext(ApiContext)
  

   const populateCards = () => {
    if (eventData && eventData._embedded) {
      console.log(eventData)
      if (eventData._embedded.events) {
        return (
          eventData._embedded.events.map((item) => {
            return (
              <Card key={item.id} data={item}/>
            )
          })
        )
      }
      
    }
    <h2>Invalid Search</h2>
   }

  const nextPage = () => {
    if (eventData.page.totalPages - 1 > pageNumber) {
      settingPageNumber((curr) => curr + 1)
      setEventData(null)
      searchEvents()
    }
  }

  const prevPage = () => {
    if (eventData.page.number > 0) {
      settingPageNumber((curr) => curr - 1)
      setEventData(null)
      searchEvents()
    }
  }
  
  return (
    <div>
      <div className="row d-flex justify-content-center card-container">
        <div className="col-10 d-flex justify-content-center">
          <div className="row">
            {eventData ? populateCards() : ''}
          </div>    
        </div>    
      </div>
      <div className="row d-flex justify-content-center card-container">
        <div className="col-2">
          {showNext && <button onClick={nextPage}>
            Next Page
          </button>}
          {showPrev && <button onClick={prevPage}>
            Prev Page
          </button>}
        </div>
      </div>
    </div>
    
    
      )

}

export default CardContainer