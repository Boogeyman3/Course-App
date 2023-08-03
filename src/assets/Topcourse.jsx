import React from 'react'
import styled from 'styled-components';

import { Title } from '@mui/icons-material';

const TopcourseContainer = styled.div`
    height: 80vh;
    @media only screen and (max-width: 768px){
      margin-top: 18rem;
    }
    @media only screen and (max-width: 400px){
      margin-top: 25rem;
    }
  
`
const Topcourseh1 = styled.h1`
 margin-left: 123px;
 font-size: 29px; 
 margin-bottom: 2.5rem;
`
 const Topcoursespai = styled.span`
 color: #49ca8a;
 font-size: 29px;
 `
 const CoursesElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
 `
 const CoursesContainer = styled.div`
        height: 290px;
     width: 400px;
    background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 1px 1px 1px -1px;

    padding: 11px;
 `
  const CoureseHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 18px;
  `

 const  Image = styled.img`

  width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50px;
`
const CourseH1 = styled.p`
font-size: 18px;
font-weight: bold;
`
const CouresLike = styled.p`
  font-size: 15px;
  font-weight: bold;
  padding: 1px;
`
const CourseP = styled.p`
font-size: 16px;
  
`
const EnrollElement = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 25px;
  
`
const Enroll = styled.p`
  font-weight: bold;
  font-size: 14px;
`
const EnrollIcon = styled.p`
   font-weight: bold; 
` 
const CourseLike = styled.p`
  
`
function Topcourse(props) {

  return (
<>
<TopcourseContainer>
    <Topcourseh1>our <Topcoursespai>Top course</Topcoursespai></Topcourseh1>
    <CoursesElement>
    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/1.jpg' alt=''/>
    <CourseH1>Afreni Shuvo</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>4.8 </CouresLike>
    </CoureseHeader>
    <CourseP>Complete Web design: From figma to webflow to freelancing course 2023</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>


    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/2.jpg' alt=''/>
    <CourseH1>Daniela russel</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>2.8 </CouresLike>
    </CoureseHeader>
    <CourseP>Web developer boot camp build mordern website from scratch</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>
    
    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/3.jpg' alt=''/>
    <CourseH1>George soros</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>3.8 </CouresLike>
    </CoureseHeader>
    <CourseP>python developer and AI integration</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>

    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/4.jpg' alt=''/>
    <CourseH1>umar jaeh</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>4.4 </CouresLike>
    </CoureseHeader>
    <CourseP>java tutor and environmental variables</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>

    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/5.jpg' alt=''/>
    <CourseH1>abdulrazaq sultan</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>3.5 </CouresLike>
    </CoureseHeader>
    <CourseP>trading platforms in but short and long</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>

    <CoursesContainer>
   <CoureseHeader>
    <Image src='./src/assets/6.jpg' alt=''/>
    <CourseH1>abdulsamad captain</CourseH1>
    <CouresLike><i class="fa-regular fa-heart"></i>1.5 </CouresLike>
    </CoureseHeader>
    <CourseP>social media content and thumb nails</CourseP>
    <EnrollElement>
 
      <Enroll>Enroll</Enroll>
      <EnrollIcon><i class="fa-solid fa-arrow-right"></i> </EnrollIcon>
    </EnrollElement>

    </CoursesContainer>
    </CoursesElement>
</TopcourseContainer>


</>
  )
}

export default Topcourse
