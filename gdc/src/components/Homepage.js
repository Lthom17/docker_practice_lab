

function Homepage() {
    return (

        <body>
        /* -- navbar -- */
            <div>
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">GDC Homepage</a>
                        </div>
                        <ul class="nav navbar-nav">
                            <li class="active"><a href="#">Home</a></li>
                            <li><a href="./products">Products</a></li> /* -- maybe cut -- */
                            <li><a href="./about">About Us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        /* -- header -- */
            <header class="" />
            <div class="p-5 text-center bg-light">
                <h1 class="mb-3">Homepage</h1>
                <h4 class="mb-3">Great Diamond Club</h4>
                <div>
                    <p>Beauty is about being comfortable in your own skin. That and some Great Diamond Club products.</p>
                </div>
                <a class="btn btn-primary" href="./products" role="button">Products</a>
            </div>

        /* -- feature product-- */
            <section class="">
                <div>
                    <h4> Continue to products page
                        <img src="./gdc/homepage.jpg" />
                    </h4>
                </div>
            </section>

            /* -- end -- */
        </body>
    )
}

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

export default Homepage;
