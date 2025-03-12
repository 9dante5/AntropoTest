import React from 'react'
import { BotonLogIn, ContainerFormLogIn, ContainerLogIn, CrearCuenta, FormLogIn, InputFormLogin, LabelFormLogin, LogIn, TitleLogIn } from '../styles/login-styled'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { loginAdmin, obtenerDataAdmin } from '../redux/slices/adminSlice'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'
import { mensajeCrearEntrenador } from '../helpers/constans'


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // este es el formik para iniciar sesion
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: async (values) => {

            try {
                const response = await signInWithEmailAndPassword(auth, values.email, values.password)
                const dataAdmin = await obtenerDataAdmin(response.user.uid)

                if (response && dataAdmin.rol == "admin") {
                    dispatch(loginAdmin({
                        uid: response.user.uid,
                        displayName: dataAdmin.displayName,
                        email: dataAdmin.correo,
                        photoURL: response.user.photoURL,
                        isAuthenticated: true,
                        rol: dataAdmin.rol
                    }))

                    navigate('/dashboard/' + dataAdmin.displayName + '/*')
                }
                formik.resetForm()
            } catch (error) {
                console.error(error)
                alert("datos incorrectos")
            }
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('Ingrese un email válido')
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('La contraseña es obligatoria'),
        }),
    })



    return (
        <>
            <ContainerLogIn>
                <LogIn>
                    <TitleLogIn> Iniciar sesion </TitleLogIn>
                    <ContainerFormLogIn>
                        <FormLogIn onSubmit={formik.handleSubmit}>
                            <LabelFormLogin> Correo electronico
                                <InputFormLogin
                                    name='email'
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </LabelFormLogin>

                            <LabelFormLogin> Contraseña
                                <InputFormLogin
                                 name='password'
                                 type="password"
                                 placeholder=""
                                 value={formik.values.password}
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 />
                            </LabelFormLogin>

                            <BotonLogIn type='submit'>Iniciar sesion</BotonLogIn>
                        </FormLogIn>
                    </ContainerFormLogIn>
                    <CrearCuenta href={mensajeCrearEntrenador} target='_blanka'>¿Deseas una cuenta?</CrearCuenta>
                </LogIn>
            </ContainerLogIn>
        </>
    )
}

export default Login