import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Catogory from '../assets/categories.json'

const Homepage = () => {

    const [id, setId] = useState('fgsa2142fa');

    const DisplayData = Catogory.map(
        (info) => {
            return (
                <GoTo key={info.id} className="nav-link" to={"/" + info.name}>
                    <Box>
                        <h1>{info.name}</h1>
                        <p>{info.description}</p>
                    </Box>
                </GoTo >
            )
        }
    )
    return (
        <CatogoryWrapper>
            {DisplayData}
        </CatogoryWrapper>
    )
}

export default Homepage

const CatogoryWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9A9CE9;
    padding: 20px;
    gap: 50px;
    flex-wrap: wrap;
    min-height: 100vh;
`

const GoTo = styled(Link)`
    text-decoration: none;
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #A3DCEF;
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    gap: 20px;
    flex-direction: column;
    width: 300px;
    height: 300px;
`