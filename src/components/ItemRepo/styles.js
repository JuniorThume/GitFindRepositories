import styled from "styled-components";

export const ContainerItemRepo = styled.div`
    width: 50%;
    margin-top: 10px;


    h3 {
        font-size: 32px;
        margin-bottom: 3px;
        color: #FAFAFA;
    }

    p {
        font-size: 12px;
        color: #FAFAFA;
        opacity: 60%;
        margin-bottom: 2px;
    }

    a {
        color: #FAFAFA;
        margin: 20px 20px 0 0;

    }

    p.remover {
        display: inline;
        text-decoration: underline;
        color: #FF0000;
        font-size: 16px;
    }

    p.remover:hover {
        cursor: pointer;
    }

    hr {
        color: #FAFAFA;
        margin: 15px 0 ;
    }
`;