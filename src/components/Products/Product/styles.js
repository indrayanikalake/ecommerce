import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
    root:{
        maxWidth:'100%',
        borderRadius:'1%',
        borderBottom:'2px solid black',
        margin:'0.5rem 0.5rem'
    },
    media: {
        height: '10vh',
        paddingTop: '50.25%', 
      },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    }
}))