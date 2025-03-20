import styled from "styled-components";
import { firtsColor, letterColor, light, medium, regular, secondColor, semiBold, thirdColor } from "../helpers/styledSheet";


export const ContainerDashboardAdmin = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${firtsColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`

export const ContainerUsuarios = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    margin: 40px 0;
`

export const ContainerAgregarUsuarios = styled.div`
    width: 200px;
    height: 35px;
    border-radius: 10px;
    background-color: ${thirdColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: inset 0px 0px 11px ${letterColor};
    border: 0;
    cursor: pointer;
    transition: 0.5s;

    &&:hover {
        transition: 0.5s;
        box-shadow: inset 0px 0px 30px ${letterColor};
    }
`

export const TituloContainerAgregarUsuarios = styled.h2`
    font-size: 20px;
    font-weight: ${medium};
    color: ${letterColor};
`

export const ContainerFormCrearUsuario = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${secondColor};
    border-radius: 8px;
`

export const TituloContainerFormCrearUsuario = styled.h3`
    font-size: 30px;
    font-weight: ${medium};
    color: ${letterColor};
    margin: 20px 0;
`

export const FormCrearUsuario = styled.form`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`

export const LabelFormCrearUsuario = styled.label`
    font-size: 16px;
    font-weight: ${light};
    color: ${letterColor};
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`

export const InputFormCrearUsuario = styled.input`
    width: 220px;
    height: 30px;
    margin-top: 2px;
    background-color: ${thirdColor};
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 0 5px;
    color: ${letterColor};
`

export const SelectFormCrearUsuario = styled.select`
    width: 230px;
    height: 30px;
    margin-top: 2px;
    background-color: ${thirdColor};
    border: none;
    border-radius: 3px;
    outline: none;
    padding: 0 5px;
    color: ${letterColor};
`

export const OptionsSelectFormCrearUsuario = styled.option`
    padding: 0 5px;
`

export const BotonFromCrearUsuario = styled.button`
    width: 100px;
    height: 30px;
    margin-top: 15px;
    background-color: ${thirdColor};
    border: none;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
    font-weight: ${semiBold};
    color: ${letterColor};
    cursor: pointer;
`