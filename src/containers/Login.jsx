import React from 'react'
import { BotonLogIn, ContainerFormLogIn, ContainerLogIn, CrearCuenta, FormLogIn, InputFormLogin, LabelFormLogin, LogIn, TitleLogIn  } from '../styles/login-styled'

const Login = () => {
    return (
        <>
            <ContainerLogIn>
                <LogIn>
                    <TitleLogIn> Iniciar sesion </TitleLogIn>
                    <ContainerFormLogIn>
                        <FormLogIn>
                            <LabelFormLogin> Correo electronico
                                <InputFormLogin />
                            </LabelFormLogin>

                            <LabelFormLogin> Contraseña
                                <InputFormLogin />
                            </LabelFormLogin>

                            <BotonLogIn>Iniciar sesion</BotonLogIn>
                        </FormLogIn>
                    </ContainerFormLogIn>
                    <CrearCuenta>¿Deseas una cuenta?</CrearCuenta>
                </LogIn>
            </ContainerLogIn>
        </>
    )
}

export default Login