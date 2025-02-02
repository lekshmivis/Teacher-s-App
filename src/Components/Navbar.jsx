import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Teacher's App</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="AddTeacher">Add Teachers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="SearchTeacher">Search Teacher</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="DeleteTeacher">Delete Teacher</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='ViewAll'>View All</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar