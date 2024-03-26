import styled from "styled-components";

export const styledNavbar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .navbar {
        width: 90%;
        margin-bottom: -22px;
        padding: 46px 0 0 0;
    }

    .logo > img {
        width: 279px;
        height: auto;
        cursor: pointer;
    }

    @media screen and (max-width: 600px) {
        margin-bottom: 40px;
    }
`;