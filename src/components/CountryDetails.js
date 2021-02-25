import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import countriesJson from '../countries.json'

function CountryDetails(props) {

    const [country, updateCountry] = useState({})

    const getCountry = () => {
        let id = props.match.params.ccn3
        let filteredCountry = countriesJson.filter(elem => {
            return elem.ccn3 == id
        })
        let country = {
            id: id,
            name: filteredCountry[0].name.official,
            capital: filteredCountry[0].capital,
            area: filteredCountry[0].area,
            borders: filteredCountry[0].borders
        }

        updateCountry(country)
        console.log(filteredCountry)
        
    }

    // Mounting
    useEffect(() => {
        getCountry()
    }, [])

    //Updating
    useEffect(() => {
        let id = props.match.params.ccn3
        
        if (country.id !== id) {
            getCountry()
        }
    })

    const {name, capital, area, borders} = country
    return (
        <Container>
            <Row>
                <Col><h1>{name}</h1></Col>
            </Row>
            <Row>
                <Col>Capital</Col>
                <Col>{capital}</Col>
            </Row>
            <Row>
                <Col>Area</Col>
                <Col>{area} km2</Col>
            </Row>
            <Row>
                <Col>Borders</Col>
                <Col>
                    {
                        borders.map((country, index) => {
                            return <Link key={index}>{country} </Link>
                        }) 
                    }
                </Col>
            </Row>
                
            
            
            
        </Container>
    )
}

export default CountryDetails
