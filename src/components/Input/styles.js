import styled from "styled-components";

export const InputContainer = styled.div`
    margin: 20px;
    input {
        border: 1px solid #FAFAFA; 
        border-radius: 20px;
        background-color: transparent;
        padding: 0 0 0 20px;
        color: white;
        font-size: 20px;

        display: block;
        width: 500px;
        height: 50px;
    }

    input:focus {
        outline: none;
    }
`;

