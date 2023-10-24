import styled from "styled-components"
import colors from '../colors.js'
import BoxComponent from "./BoxComponent.js"

export default function QuizComponent(){
    return <BoxComponent title_props={{title_text:'QUIZ'}} box_props={{box_text:'QUESTIONS'}}></BoxComponent>
}