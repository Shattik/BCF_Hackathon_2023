
function Sell() {
  return (
    <div className="App">

        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="/">ArtGallery</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/sell">Sell</a>
                    <span class="visually-hidden">(current)</span>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/verify">Verify</a>
                </li>
                </ul>
                <form class="d-flex">
                <input class="form-control me-sm-2" type="search" placeholder="Search Supplier"></input>
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>

      </div>
  );
}

export default Sell;