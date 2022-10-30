import React, { useEffect, useState } from 'react'
import axios from "axios";
import { apiUrl } from '../api/api';
import {Container, Heading,PageNUmber,SurveyQuestion,RatingContainer,RatingBlock,
PageControlButtons,PrevButton,NextButton,MessageBox} from "./CustomerSurvey.styles";

function CustomerSurvey() {
  const [sessionQuestions, setSessionQuestions] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [isCompleted, setCompleted] = useState(false);
    const [rating, setRating] = useState(1);
        const [submitText, setSubmitText] = useState("submit");
                const [isFormActive, setIsFormActive] = useState(false);





  const api=apiUrl;

   useEffect( ()=>{
      async function fetchAllQuestion(){

     await axios.get(`${api}/api/Question?page=${pageNumber}`).then(
        (response) => {
            var result = response;
            setSessionQuestions(result.data);
        },
        (error) => {
            console.log(error);
        })
 
    }
    fetchAllQuestion();
   },[" ", pageNumber]);

 const CurrentPageNumber = parseInt(sessionQuestions?.currentPage);
 const QuestionNumber = sessionQuestions?.currentPage;
 const CurrentQuestion = sessionQuestions?.question[0].question;
 const response = {
  isCompleted: isCompleted,
  feedback:[] 
 }
 const handleresponse = (Question,questionId, Rating)=>{
 
if(localStorage.getItem("data")){
  let data = JSON.parse(localStorage.getItem("data")
)
data.push({question:Question,
Rating:Rating,
questionId:questionId})
localStorage.setItem("data",JSON.stringify(data))

}else{
  localStorage.setItem("data",JSON.stringify([{question:Question,
Rating:Rating,
questionId:questionId}]))
}
 }
 const handleSubmit = async()=>{
  setCompleted(true);
  setSubmitText("submitting ...");
  response.feedback=JSON.parse(localStorage.getItem("data"));
  await axios.post(`${api}/api/Add`, response)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });  
      setSubmitText("Your feedback is successfully submitted");
     localStorage.removeItem("data");

 };
 console.log(sessionQuestions?.question[0]?._id);
  return (
    <Container>
      {
      !isFormActive ?
       <>
      <Heading style={{marginBottom:"3rem"}}>welcome to our product review form.</Heading>
      <NextButton onClick={()=>setIsFormActive(true)}>Click to start filling the form</NextButton>
       </>
      :
      <>
      
      <Heading>Customer Survey</Heading>
      <PageNUmber>{parseInt(sessionQuestions?.currentPage) + 1}/{sessionQuestions?.totalPage}</PageNUmber>
       <SurveyQuestion>{parseInt(QuestionNumber) + 1}.{sessionQuestions?.question[0].question}</SurveyQuestion>
      
      {
        parseInt(sessionQuestions?.currentPage) + 1 == 5 ?
        <MessageBox placeholder="Please write your message" 
        onChange={(e)=>handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,e.target.value)}/> :
  
      <RatingContainer>
          <RatingBlock className={rating===1 && "active"} onClick={()=>{handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,1);setRating(1)}}>
            1
          </RatingBlock>
          <RatingBlock className={rating===2 && "active"} onClick={()=>{handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,2);setRating(2)}}>
            2
          </RatingBlock >
          <RatingBlock className={rating===3 && "active"} onClick={()=>{handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,3);setRating(3)}}>
            3
          </RatingBlock>
          <RatingBlock className={rating===4 && "active"} onClick={()=>{handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,4);setRating(4)}}>
            4
          </RatingBlock>
          <RatingBlock  className={rating===5 && "active"}  onClick={()=>{handleresponse(CurrentQuestion,sessionQuestions?.question[0]?._id,5);setRating(5)}}>
            5
          </RatingBlock>
      </RatingContainer>
      }
      {
        parseInt(sessionQuestions?.currentPage) + 1 == 5 ?
  
       <NextButton  style={{marginTop:"1rem"}} onClick={()=>handleSubmit()}>{submitText}</NextButton>
       :
  
      <PageControlButtons style={{marginTop:"2rem"}}>
          <PrevButton onClick={()=>setPageNumber(CurrentPageNumber - 1 )}>Previous</PrevButton>
          {
            parseInt(sessionQuestions?.currentPage) !== parseInt(sessionQuestions?.totalPage) &&
  
          <NextButton  onClick={()=>setPageNumber(CurrentPageNumber + 1) }>Next</NextButton>
          }
          
      </PageControlButtons>
      }
      </>

    }
    </Container>
  )
}

export default CustomerSurvey