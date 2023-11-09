import styled from 'styled-components'

export default function SendButton(props){
    const {text = "Send"} = props;
    
    const handleClick = () => {
        console.log('Bouton cliqué !'); // Afficher un message dans la console lorsque le bouton est cliqué
    };

    return <Button type="submit" onClick={handleClick}>{text}</Button>
}


const Button = styled.button`
    max-width: 75px;
    width: 20%;
    height: auto;
    margin : 2%;
    cursor : pointer;
`