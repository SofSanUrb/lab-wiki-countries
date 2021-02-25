import React, {useState} from 'react'
import { Link, Route } from 'react-router-dom'
import countriesJson from '../countries.json'
import CountryDetails from './CountryDetails.js'
import {Container, Row, Col} from 'react-bootstrap'

function CountriesList() {
        
    const [countries, updateCountries] = useState(countriesJson)

    return (
        <Container className="columns">
            <Row>
                <Col>
                {
                    countries.map((country, index) => {
                        return<div key={index}> 
                            <Link to={`/countries/${country.ccn3}`}>{country.name.official}</Link>
                            </div>
                    })
                }
                </Col>

                <Col>
                    <Route path='/countries/:ccn3' component={CountryDetails} />
                </Col>
            </Row>
        </Container>
    )
}

export default CountriesList
