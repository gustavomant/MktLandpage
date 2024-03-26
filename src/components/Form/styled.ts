import styled from "styled-components";

export const styledForm = styled.div`
    width: 518px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    padding: 51px 44px 57px 60px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2); /* Adjust values as needed */
    margin-bottom: -60px;
    z-index:9999;

    .pretty_input,
    .pretty_button {
        width: 403px;
        height: 45px;
    }

    .pretty_input {
        border: 1px solid #ABABAB;
        border-radius: 7px;
        outline: none;
        padding: 12px 0px 11px 12px;
    }

    .pretty_button {
        background-color: #3CCEC5;
        border-radius: 5px;
    }

    .pretty_button > span {
        font-size: 24px;
        weight: 500px;
        color: white;
    }

    @media screen and (max-width: 600px) {
        width: max-content;
        padding: 18.5px 23px 46px 23px;
        margin-top: 60px;
        .pretty_input,
        .pretty_button,
        .title,
        .desc {
            width: 264px;
        }
    }
`