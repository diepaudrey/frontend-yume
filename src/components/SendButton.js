import styled from 'styled-components'

export default function SendButton(){
    
    const handleClick = () => {
        console.log('Bouton cliqué !'); // Afficher un message dans la console lorsque le bouton est cliqué
    };

    return <Button type="submit" onClick={handleClick}>Send</Button>
}


const Button = styled.button`
    max-width: 75px;
    width: 20%;
    height: 7%;
    margin : 2%;
`