import { color, height } from "@mui/system";



const myStyles = theme => ({

    GridItem: {
        margin: '0 !important',
        paddingLeft: '0px !important',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100vw !important',

    },
    Back_Logo: {
        position: 'absolute !important',
        left: '1vw !important',
        top: '0px !important',
        fontSize: '3rem !important',
        color: 'white'
    },
    Titulos: {
        fontSize: '1.5rem',
        color: '#422318 !important',
        fontWeight: 'bolder'
    },
    GridItemBoton: {
        paddingLeft: '0px !important'
    },
    AppBar: {
        maxHeight: '5rem',
        background: '#A5C9CA !important',
        justifyContent: 'center !important',
        padding:'1rem'
    },
    Menu_GridItem: {//Grid del appbar
        width: '100vw !important',
        padding: '0px !important',
        minHeight: { xs: '4rem !important', sm: '15vh', md: '15vh' },
        maxHeight: { xs: '4rem', sm: '15vh', md: '15vh' },
    },
    //#region Login
    Login_GridPrincipal: {
        margin: '0 !important',
        backgroundColor: '#395B64',
        minHeight: '100vh !important',
        width: '100% !important',
        paddingLeft: '0px !important',
    },

    //Usado
    Login_GridPrincipal_Box: {
        backgroundColor: '#E7F6F2',
        margin: '0 !important',
        padding: '0px !important',
        minHeight: '50vh',
        borderRadius: '50px',
        maxWidth:'30vw'
    },
    Login_GridPrincipal_Letras: {
        color: '#2C3333',
    },
    botonLogin: {
        margin: '0 !important',
        padding: '10px 50px 10px 50px !important',
        backgroundColor: 'white !important',
        background: '#A5C9CA !important'
    },
    
    botonProduccion: {
        background: '#395B64 !important',
        color:'white !important',
        borderRadius:{xs:'10px',sm:'20px',lg:'30px'}
// 
    },
    textfieldLogin: {
        fontSize: '50px',
        width: {xs:'80vw',sm:'40vw',lg:'20vw'},
        background: '#ffffff80',
        input: {
            textAlign: "center"
            , fontSize: '22px'
        }, //centrado de texto escrito

        '&.MuiFilledInput-root:before': {
            // background: '#ffffff80',
            backgroundColor: '#ffffff80 !important'
        },
        '& .MuiFilledInput-root:after': { //Linea 
            borderBottomColor: 'black',
        },
        '& label.Mui-focused': { //label usuario Focus
            color: 'black',
            // backgroundColor: 'white'
        },
        '& label': { //Label usuario sin focus
            // color: '#black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-root:before': {
            borderBottomColor: 'black',
        },

    },


    //#endregion

    //#region Menu
    Menu_GridPrincipal: {
        margin: '0 !important',
        width: '100% !important',
        // maxHeight: { xs: '90vh', sm: '23vh', lg: '35vh' },
        // position:"static"
    },

    Menu_Grid_Botones: {
        // backgroundColor: '#f28442',
        margin: '0 !important',
        minHeight: {xs:'75vh', sm: '75vh', md: '75vh' },
        width: '100vw !important',
        paddingBottom: '10px !important',
        flexDirection: { xs: "column",sm:'row', md: "row" },
    },
    Menu_Logo: {
        maxWidth: { xs: '50%', sm: '85%', md: '90%', lg: '100%' },
    },
    Menu_Boton: {
        flexDirection: 'column',
        backgroundColor: '#5DB075 !important',
        borderRadius: '20px',
        color: '#fff !important',
        maxWidth: { xs: '30vh', sm: '35vh' },
        minWidth: { xs: '30vh', sm: '35vh', lg: '43vh' },
        // minHeight: { xs: '15vh', sm: '25vh', lg: '35vh' },
        maxHeight: { xs: '19vh', sm: '23vh', lg: '35vh' },
        alignItems: "center",
        justifyContent: "center",
        fontSize: { xs: '2vh', sm: '3vh', lg: '4vh' },


        // marginBottom:'10px !important'
    },
    Menu_Boton_Salir: {
        backgroundColor: 'white !important',
        color: '#000 !important',
        minHeight: { xs: '20vh', sm: '25vh', lg: '35vh' },
    },
    //#endregion

    //#region MenuProduccion
    MenuProduccion_Boton: {
        flexDirection: "column",
        backgroundColor: '#5DB075 !important',
        borderRadius: '20px',
        color: '#fff !important',
        minWidth: { xs: '30vh', sm: '35vh', lg: '43vh' },
        minHeight: { xs: '15vh', sm: '25vh', lg: '30vh' },
        maxHeight: { xs: '15vh', sm: '25vh', lg: '30vh' },
        alignItems: "center",
        justifyContent: "center",
        fontSize: { xs: '2vh', sm: '3vh', lg: '4vh' },
    },
    //#endregion

    //#region Produccion
    Produccion_GridItem: {
        paddingTop:'20px  !important',
        paddingLeft: '0px !important',
        paddingBottom:'20px !important'
    },
    //#endregion


});

export default myStyles;