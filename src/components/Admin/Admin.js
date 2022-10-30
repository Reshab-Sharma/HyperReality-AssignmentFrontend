import React from 'react'
import styled from "styled-components";

function Admin() {
    const AdminContainer = styled.div`
    width:100%
    `;
    const AdminHeading = styled.div`
    width:100%
    font-size:14px;
    `;
     const  QuestionAddBox= styled.input`
    width:70%;
    font-size:14px;
    padding:1rem 2rem 1rem 1rem;
    `;
    const SubmitButton = styled.button`
    font-size:14px;
    color:white;
    Background-color:blue;
    padding:1rem 1.5rem;
    `;

  return (
    <AdminContainer>
        <AdminHeading>You Can Add your Questions Here.</AdminHeading>
        <QuestionAddBox placeholder="Please add Question"/>
        <SubmitButton>Add</SubmitButton>
        
    </AdminContainer>
  )
}

export default Admin