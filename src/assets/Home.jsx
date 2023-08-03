import React from 'react'
import styled from 'styled-components';
import Background from './Background.jpg'

const Main = styled.div`
background: linear-gradient(90deg, #e7d8df 0%, #c7def2 35%, #e6eaeb 100%);
   display:flex ;
   padding: 4rem;
   justify-content: center;
   gap: 4rem;
   height: 80vh;
@media only screen  and (max-width:768px){
text-align: center;
  flex-direction: column;
}
 
`
const Container = styled.div`
   padding: 20px;





`
const TextArea = styled.h1`
    color:  #001C30;
    font-weight: bold ;
    font-size: 35px;
    @media only  screen and (max-width:768px){
        font-size: 26px;
     
    }
    @media only screen and (max-width: 388px) {
        font-size: 20px;
      

}
`
const SmallText = styled.p`
 margin-top: 1rem;
 line-height:1.5;
     @media only screen and (max-width: 388px) {
        font-size: 12px;
       
}   
`
const ButtonEnroll = styled.button`
 background-color: #49ca8a;
  color: #fff;
  padding: 15px;
  border: none;
  font-size: 15px;
  border-radius: 25px;   
  margin-top: 1.5rem;
`
const   ImageContainer = styled.div`
  
`
const   Image = styled.div`
     background-image: url(${Background}) ;
     width: 370px;
height: 400px;
border-radius: 25px;  
margin-top: 20px;
background-position: center;
background-repeat: no-repeat;
background-origin: content-box;
background-size: cover;
@media only  screen and (max-width:768px){
    width: 264px;
    display: flex;
    align-items: center;
    justify-content: center;
  margin: 0 auto;
    height: 260px;
    margin-top: -4rem;
}
`

function Home() {
  return (
   <>
   <Main>
    <Container>
    <TextArea>
        Develop your Skill with online course from IESCHOOL
    </TextArea>
    <SmallText>
        our mission is to help people to find the best couse online and learn with expert anytime
    </SmallText>
    <ButtonEnroll>Explore All course</ButtonEnroll>
    </Container>

    <ImageContainer>
        <Image> </Image>
    </ImageContainer>

   </Main>



   </>
  )
}

export default Home
