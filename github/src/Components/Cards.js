import React from 'react'
import styled from 'styled-components'

function Cards(props){

    return (
        <div>
            <MainCard>
                <ImgDiv>
                    <img src={props.gitUsers.avatar_url}/>
                </ImgDiv>
                <ContentDiv>
                  <p>Username: {props.gitUsers.login}</p>  
                  <p>Followers: {props.gitUsers.followers}</p>  
                  
                </ContentDiv>
                
            </MainCard>
            
        </div>
    )
}
const MainCard = styled.div`
    height: 80%;
    margin: 1% 5%;
    border: solid blue 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const ImgDiv = styled.div`

    img{ 
        border-radius: 50%;
        /* width: 20%; */
        height: 150px;
        width: 150px;
    }

`
const ContentDiv = styled.div`


`
export default Cards;