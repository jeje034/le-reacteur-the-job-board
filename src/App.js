import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";

function App() {
    console.log("app start");
    return (
        <>
            <Header title="The Job Board"></Header>
            <Jobs></Jobs>
            <Footer></Footer>
        </>
    );
}
export default App;
