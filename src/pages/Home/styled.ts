import styled from "styled-components"

export const styledApp = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
overflow-x: hidden;
.content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content_grid {
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
}

.white {
    color: white;
}

.gradient {
    background: linear-gradient(to bottom right, #390779, #F64164);
}


.paragraph {
    width: 517px;
}

@media screen and (max-width: 600px) {
    .content_grid {
        grid-template-columns: 1fr;
    }

    .paragraph {
        max-width: 264px;
    }
}
`