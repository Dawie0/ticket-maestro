import { useContext } from "react";
import { ApiContext } from "../contexts/APIContext";
import './searchform.css'



const SearchForm = () => {
    const { searchEvents, keyword, setKeyword, settingPageNumber  } = useContext(ApiContext)

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        settingPageNumber(0)
        searchEvents()
       
        
    };

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6 d-flex justify-content-center">
                <div className="search-form">
                    <div className="search-tabs">
                        <button
                            className={"event active"}
                        >
                            Events
                        </button>
                    </div>
                    <div className="search-content">
                        <input
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder={`Search Events`}
                        />
                        <button onClick={handleSearchSubmit}>Search</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchForm