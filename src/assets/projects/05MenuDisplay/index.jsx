import Jumbotron from "../../components/Jumbotron";
import MenuItem from "./MenuItem";

const Index = () => (
    <>
        <Jumbotron title={"Display Menu"}/>
        <div className="row">
            <div className="container">
                <div className="row p-2">
                    <MenuItem />
                </div>
            </div>
        </div>
    </>
)

export default Index;