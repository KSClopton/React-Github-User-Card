import React from 'react'
import styled from 'styled-components'

function Followers(props){

    return (
        <div>
            <h2>{props.getFollowers.login}</h2>
        </div>
    )

}
export default Followers