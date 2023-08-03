import React from 'react'
import styled from 'styled-components';
import Home from './Home.png'
const MainWrapper = styled.div`
    width: 100%;
    height: 75vh;
`
const Flexiblecontainer = styled.div`
    position: absolute;
    width: 76%;
    top: 84%;
    right: 11%;
    height: 160px;
    background-color: #0B666A;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: #fff;
    flex-wrap: wrap;
    @media only screen and (max-width: 550px) {
 margin-top: 0.5em;
 height: 210px;
    }
    @media only screen and (max-width: 375px) {
 margin-top: 1.5em;

    }
   
`
const Skill = styled.div`
  margin: 10px;
  display: flex;
  gap: 11px;
`
const Skillh3p = styled.div``
  
const SkillLinks = styled.i`
color:  #001C30;
font-size: 30px;

`
const SkillH3 = styled.h3`
  font-size:17px ;
`
const SkillP= styled.p`
    color: #9DB2BF;
    font-size: 14px;
`

const IndustryWrapper = styled.div`
  position: absolute;
  top:69rem;
  display: flex;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px){
    flex-direction: column;
  }
 
`
const IndustryImage = styled.div`
  background-image: url(${Home});
  width: 560px;
height: 400px;
border-radius: 25px;  
margin-top: 20px;
margin-left: 20px;
background-position: center;
background-repeat: no-repeat;
background-origin: content-box;
background-size: cover;
@media only screen and (max-width: 768px){
   width: 300px;
  }
`
 const IndustryText = styled.div`
  line-height: 1.5em;
  @media only screen and (max-width: 768px){
   margin:  3rem;
  }
 `
  const Industryh2 = styled.h3`
      color:  #001C30;
    font-weight: bold ;
    font-size: 25px;
    margin-bottom: 20px;
  `
   const Industryp = styled.p`
    font-size: 17px;
    margin-bottom: 20px;
`
const IndustryLinks = styled.p`
   font-size: 14px;
   color: #9DB2BF;
   line-height: 2em;

`
const Industrybutton = styled.p`
 background-color: #49ca8a;
  color: #fff;
  padding: 15px;
  border: none;
  font-size: 15px;
  border-radius: 25px;   
  margin-top: 1.5rem;
  width: 11rem;
`
function Advantage() {
  return (
   <>
   <MainWrapper>
   <Flexiblecontainer>
   <Skill>
    <SkillLinks><i class="fa-solid fa-school"></i> </SkillLinks>
    <Skillh3p>
     
   <SkillH3>Learn new skill</SkillH3>
     <SkillP>with flexible course</SkillP>
     </Skillh3p>
    
   </Skill>
   <Skill>
    <SkillLinks><i class="fa-solid fa-chalkboard-user"></i></SkillLinks>
    <Skillh3p>
     
   <SkillH3>Expert Teacher</SkillH3>
     <SkillP>up skill with speacialty</SkillP>
     </Skillh3p>
    
   </Skill>
   <Skill>
    <SkillLinks><i class="fa-solid fa-globe"></i></SkillLinks>
    <Skillh3p>
     
   <SkillH3>Online Degree</SkillH3>
     <SkillP>study flexible online</SkillP>
     </Skillh3p>
    
   </Skill>
   </Flexiblecontainer>

  <IndustryWrapper>
<IndustryImage></IndustryImage>

<IndustryText>
  <Industryh2>Thousands of course author By Industry expert</Industryh2>
  <Industryp>you can start and finish one of this popular course in a day</Industryp>
  <IndustryLinks>get unlimited access to thousands of our top courses</IndustryLinks>
  <IndustryLinks>Explore a variety of our top courses</IndustryLinks>
  <IndustryLinks> find the right instructor for you</IndustryLinks>
  <Industrybutton>Get started today</Industrybutton>
</IndustryText>
  </IndustryWrapper>
  </MainWrapper>
   </>
  )
}

export default Advantage
