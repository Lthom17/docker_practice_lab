import image from "../images/homepage.jpg"

function Homepage() {
    return (

        <body>
            <header class="" />
            <div class="p-5 text-center bg-light">
                <h1 class="mb-3">Homepage</h1>
                <h4 class="mb-3">Great Diamond Club</h4>
                <div>
                    <p>Beauty is about being comfortable in your own skin. That and some Great Diamond Club products.</p>
                </div>
                <a class="btn btn-primary" href="./products" role="button">Products</a>
            </div>

            <section class="">
                <div>
                    <h4> Product of the Day
                        <img className="img-fluid" src={image} />
                    </h4>
                </div>
            </section>

        </body>
    )
}

export default Homepage;