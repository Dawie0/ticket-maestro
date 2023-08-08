import { useContext } from "react"
import { ApiContext } from "../contexts/APIContext"
import Card from "./Card"




const CardContainer = () => {
    const { ApiData } = useContext(ApiContext)

    const testArray = [
        {
          id: 1,
          title: "Event Title 1",
          image_url: "https://via.placeholder.com/150", // Placeholder image URL
        },
        {
            id: 2,
            title: "Event Title 1",
            image_url: "https://via.placeholder.com/150", // Placeholder image URL
          },
          {
            id: 3,
            title: "Event Title 1",
            image_url: "https://via.placeholder.com/150", // Placeholder image URL
          },
          {
            id: 4,
            title: "Event Title 1",
            image_url: "https://via.placeholder.com/150", // Placeholder image URL
          },
          {
            id: 5,
            title: "Event Title 1",
            image_url: "https://via.placeholder.com/150", // Placeholder image URL
          },
          {
            id: 6,
            title: "Event Title 1",
            image_url: "https://via.placeholder.com/150", // Placeholder image URL
          }
        // Add more objects if needed...
      ];

      return (
        <div className="row d-flex justify-content-center card-container">
            <div className="col-10 d-flex justify-content-center">
                <div className="row">
                    {testArray.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>
                
            </div>
            
        </div>
      )

}

export default CardContainer