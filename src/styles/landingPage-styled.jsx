import styled from "styled-components";
import { black, firtsColor, letterColor, secondColor } from "../helpers/styledSheet";

export const ContainerLandingPage = styled.div`
    background-color: ${firtsColor};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

export const NavbartLandingPage = styled.div`
    background-color: ${secondColor};
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerTitleLandingPage = styled.div`
    width: fit-content;
    height: fit-content;
    margin-left: 30px;
    cursor: default;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select:none;
    user-select:none;
`;

export const TitleLandingPage = styled.h1`
    font-size: 22px;
    font-weight: ${black};
    color: ${letterColor};
`;

export const ContainerIniciarSesion = styled.div`
    width: fit-content;
    height: fit-content;
    margin-right: 30px;
    cursor: pointer;
`;

