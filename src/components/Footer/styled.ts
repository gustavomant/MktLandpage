import styled from "styled-components";

export const styledFooter = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: white;
padding-top: 95px;
padding-bottom: 46px;

.footer {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.social_media > li {
    margin-inline: 7px;
    cursor: pointer;
}

.logo_footer {
    display: none;
}

p, strong {
    text-align: center;
}

@media screen and (max-width: 600px) {
    .footer {
        flex-direction: column;
    }

    .social_media {
        order: -1; /* Define a ordem para -1 para mover para cima */
        margin-bottom: 40px;
    }

    .logo_footer {
        display: flex;
        cursor: pointer;
    }

    .logo_footer > img {
        width: 169px;
        margin: 29px 0 48px 0;
    }
}
`