import { useState, useContext } from "react";
import { ApiContext } from "../contexts/APIContext";
import './searchform.css'



const SearchForm = () => {
    const { searchEvents } = useContext(ApiContext)

    const [activeCategory, setActiveCategory] = useState("events");
    const [searchKeyword, setSearchKeyword] = useState("");

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Implement your search logic based on the activeCategory and searchKeyword
        searchEvents(searchKeyword)
    };

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6 d-flex justify-content-center">
                <div className="search-form">
                    <div className="search-tabs">
                        <button
                            className={activeCategory === "events" ? "active" : ""}
                            onClick={() => handleCategoryChange("events")}
                        >
                            Events
                        </button>
                        <button
                            className={activeCategory === "performers" ? "active" : ""}
                            onClick={() => handleCategoryChange("performers")}
                        >
                            Performers
                        </button>
                        <button
                            className={activeCategory === "venues" ? "active" : ""}
                            onClick={() => handleCategoryChange("venues")}
                        >
                            Venues
                        </button>
                        <button
                            className={activeCategory === "cities" ? "active" : ""}
                            onClick={() => handleCategoryChange("cities")}
                        >
                            Cities
                        </button>
                    </div>
                    <div className="search-content">
                        <input
                            type="text"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            placeholder={`Search ${activeCategory}`}
                        />
                        <button onClick={handleSearchSubmit}>Search</button>
                        {/* Additional input fields specific to the activeCategory */}
                        {activeCategory === "events" && (
                            <div>
                                {/* Additional input fields for events */}
                            </div>
                        )}
                        {activeCategory === "performers" && (
                            <div>
                                {/* Additional input fields for performers */}
                            </div>
                        )}
                        {activeCategory === "venues" && (
                            <div>
                                {/* Additional input fields for venues */}
                            </div>
                        )}
                        {activeCategory === "cities" && (
                            <div>
                                {/* Additional input fields for cities */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default SearchForm