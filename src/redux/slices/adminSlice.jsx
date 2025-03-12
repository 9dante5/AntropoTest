import { createSlice } from "@reduxjs/toolkit"
import { collection, getDocs, query, where, } from "firebase/firestore";
import { dbFirestore } from "../../firebase/firebaseConfig";

const initialState = {
    uid: null,
    displayName: null,
    photoURL: null,
    email: null,
    isAuthenticated: false,
    rol: null,
}

export const adminReducer = createSlice({
    name: "admin",
    initialState,
    reducers: {
        loginAdmin: (state, action) => {
            state.uid = action.payload.uid;
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.rol = action.payload.rol;
        },
        logoutAdmin: (state) => {
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.photoURL = null;
            state.isAuthenticated = false;
            state.rol = null;
        }
    },
})

export const { loginAdmin, logoutAdmin } = adminReducer.actions
export default adminReducer.reducer

//actions (funciones)

//read admin
export const obtenerDataAdmin = async (uid) => {
    const adminColection = collection(dbFirestore, "usuarios")
    const adminQuery = query(adminColection, where("uid", "==", uid))

    const queriedData = await getDocs(adminQuery)
    let data
    queriedData.forEach((user) => {
        data = user.data()
    })
    return data
}