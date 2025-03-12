import styled from "styled-components";
import { black, firtsColor, letterColor, medium, secondColor, thirdColor } from "./styledSheet";

export const ContainerLogIn = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${firtsColor};
`

export const LogIn = styled.div`
    width: 370px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${secondColor};
    border-radius: 15px;
`

export const TitleLogIn = styled.h1`
    color: ${letterColor};
    font-weight: ${black};
    font-size: 36px;
    margin: 25px auto;
`

export const ContainerFormLogIn = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormLogIn = styled.form`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LabelFormLogin = styled.label`
    width: 70%;
    display: flex;
    flex-direction: column;
    color: ${letterColor};
    font-weight: ${black};
    font-size: 18px;
    margin-bottom: 25px;
`

export const InputFormLogin = styled.input`
    width: 100%;
    height: 30px;
    margin-top: 2px;
    background-color: ${thirdColor};
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 0 7px;
`

export const BotonLogIn = styled.button`
    width: 40%;
    height: 40px;
    background-color: ${thirdColor};
    color: ${letterColor};
    font-weight: ${black};
    font-size: 14px;
    border: none;
    border-radius: 10px;
    outline: none;
    cursor: pointer;

    &&:hover {
        transition: 0.5s;
        background-color:rgb(67, 74, 64);
        color:rgb(161, 153, 141);
    }
`

export const CrearCuenta = styled.span`
    transition: 0.5s;
    color: ${letterColor};
    margin: 25px auto;
    font-weight: ${medium};
    font-style: italic;
    font-size: 13px;
    cursor: pointer;

    &&:hover {
        transition: 0.5s;
        color:rgb(161, 153, 141);
    }
`
