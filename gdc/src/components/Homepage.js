
import image from "../images/homepage.jpg"

function Homepage() {
    return (

        <body>
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">GDC Homepage</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="./about">About Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <header class="" />
            <div class="p-5 text-center bg-light">
                <h1 class="mb-3">Great Diamond Club</h1>
                <div>
                    <p>Beauty is about being comfortable in your own skin. That and some Great Diamond Club products.</p>
                </div>
                <div className = "ins">
                <img className="img-fluid" src={image} />
                </div>
                <br/>
                <a class="btn btn-primary" href="./products" role="button">Products </a>
            </div>
        </body>
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


