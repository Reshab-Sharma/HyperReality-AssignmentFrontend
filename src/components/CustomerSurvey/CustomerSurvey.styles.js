import styled from "styled-components";

export const Container = styled.div`
max-width:40%;
margin:auto;
border:1px solid #111111;
padding:2rem;
border-radius:12px;
`;
export const Heading = styled.h1`
font-size:20px;
`;

export const PageNUmber = styled.h1`
font-size:20px;
text-align:right;
`;
export const SurveyQuestion = styled.h1`
font-size:20px;
`;
export const RatingContainer =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
text-align:center;
    width: 50%;
    margin: auto;
`;
export const RatingBlock = styled.div`
padding:0.2rem 0.8rem;
border-radius:90%;
font-size:14px;
color:#111111;
border:1px solid #111111;
cursor:pointer;
&:hover{
    border:1px solid green;

}
&.active{
   background-color:green;
   color:white;
}
`;
export const PageControlButtons = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`;
export const PrevButton = styled.button`
color:green;
font-size:15px;
Background:transparent;
padding: 1rem 1.5rem;
border:1px solid green;
box-shadow:2px 2px 2px 2px  grey;
cursor:pointer;

&:hover{
    border-radius:12px;
}
`;
export const NextButton = styled.button`
color:green;
font-size:15px;
Background:transparent;
padding: 1rem 1.5rem;
border:1px solid green;
box-shadow:2px 2px 2px 2px  grey;
display:${(props)=>props.display};
cursor:pointer;

&:hover{
    border-radius:12px;
}
`;
export const MessageBox = styled.input`
 width:90%;
 padding:1rem;
 margin:auto;
`;