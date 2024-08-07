import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No:</th>
                                    <th scope="col">Name of the Teacher</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Kumari</td>
                                    <td>40</td>
                                    <td>14</td>
                                    <td>English</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>30</td>
                                    <td>4</td>
                                    <td>PT</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Pavithra</td>
                                    <td>35</td>
                                    <td>9</td>
                                    <td>Physics</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Aswathy</td>
                                    <td>28</td>
                                    <td>2</td>
                                    <td>Biology</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Resmi</td>
                                    <td>38</td>
                                    <td>12</td>
                                    <td>Chemistry</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Priya</td>
                                    <td>42</td>
                                    <td>16</td>
                                    <td>Maths</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll