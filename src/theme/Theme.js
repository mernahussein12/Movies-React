import {createTheme} from "@mui/material"

 
 export const lightTheme =  createTheme({
    palette:{
        mode: "light",
        background:{
           header:"#0f171e",
           body: "#fff",
        },
    },
   
 });
   
 export const darkTheme = createTheme ({

    palette:{
        mode: "dark",
        background:{
           header:"#0f171e",
           body: "#1a242f",
        },
    },

 });
