import styled from 'styled-components'

export default function SendButton(props){
    const {text = "Send", onSubmit} = props;

    return <Button type="submit" onClick={onSubmit}>{text}</Button>
}


const Button = styled.button`
    max-width: 75px;
    width: 20%;
    height: auto;
    margin : 2%;
    cursor : pointer;
`