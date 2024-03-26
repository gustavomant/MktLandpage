import styled from "styled-components";

export const styledCongratulations = styled.div`
.gradient {
    background: linear-gradient(to bottom right, #390779, #F64164);
}

.content {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 56px;
    font-weight: 700;
}

.subtitle {
    font-size: 26px;
    width: 721px;
    text-align: center;
}

.white {
    color: white;
}

@media screen and (max-width: 600px) {
    .title {
        font-size: 36px;
    }

    .subtitle {
        font-size: 14px;
        width: 300px;
    }
}
`