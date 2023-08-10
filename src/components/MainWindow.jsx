
import NavBar from "./Navbar"
import SearchForm from "./SearchForm"
import CardContainer from "./CardContainer"



const MainWindow = () => {
    return (
        <div className="container-fluid">
            <NavBar />
            <SearchForm />
            <CardContainer /> 
        </div>
    )
}

export default MainWindow