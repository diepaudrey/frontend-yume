import styled from "styled-components";
import colors from "../colors.js"

export default function InformationComponent(props){
    const {infoType, content} = props;
    return <Container> 
        <h3> {infoType} </h3>
        <p> {content} </p>
    </Container>
}

const Container = styled.div`
    max-width: 500px;
    width: 100%;
    height: 15%;
    background-color: ${colors.cream};
    border-radius: 25px 25px 25px 25px;
    color : ${colors.brown};

    display : flex;
    flex-direction: row;
    align-items : center;
    justify-content : space-between;

    h3{
        margin-left: 5%;
        margin : 2%;
    }

    p{
        margin-right: 5%;
        margin : 2%;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
        max-width: 100%;
        width: 30vw;
        height: 3vh;


        h3{
            margin-left: 5%;
            font-size: 1em;
        }

        p{
            margin-right: 5%;
            font-size: 0.8em;
        }
    }

    @media screen and (max-width:767px) {
        max-width: 100vw;
        width: 40vw;
        height: 3vh;

        h3{
            margin-left: 5%;
            font-size: 0.6em;
        }

        p{
            margin-right: 5%;
            font-size: 0.5em;
        }
    }


`