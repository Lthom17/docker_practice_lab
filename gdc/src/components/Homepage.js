
import image from "../images/homepage.jpg"

function Homepage() {
    return (
        <div>
            <div>NAVBAR: bootstrap </div>
            <h1>{welcomeHomepage}</h1>
            <div>
                <img className="img-fluid" src={image} />
            </div>

        </div>
    )
}

export default Homepage;

function welcomeHomepage() {
    return "Welcome to the Great Diamond Club";
}

function fakeEmail() {
    return "contact@gdc.com";

}

function fakePhoneNumber() {
    return "(919)252-8888";

}

function fakeAddress() {
    return "1234 Wallabe Way Sydney, CA";
}



