export const styleDesktop = {
    header: {
        info: {
            width: '50%',
            textAlign: 'left',
            fontSize: '25px',
            fontWeight: 'bold'
        },
        topic:{
            width: '50%',
            textAlign: 'right',
            fontSize: '40px',
            fontWeight: 'bold'
        },
        table: {
            background: 'black',
            fontFamily: 'Arial',
            color: 'white'
        },
    },
    sign: {
        fontSize: '10pt',
        color: 'white',
        position: 'absolute',
        bottom: '0px',
        left: '10px'
    },
    clock:{
        float: 'left',
        margin: '0 1.5%',
        width: '45%',
        // position: 'absolute',
        // left: '0px',
    },
    loginField: {
        align:{
            // width: '350px',
            // background: 'white',
            backgroundImage: "linear-gradient(#FFFFFF,#e0e0e0)",
            // position: 'absolute',
            // top: "250px",
            // right: "200px",
            // focus: '',
            marginRight: '30pt',
            marginTop: '10%',
            float: 'right',
            // margin: '0 1.5%',
            width: '30%',
            borderRadius: '20px'
        },
        userAnswer:{
            color: 'black',
            fontSize: '15pt',
            marginTop: '10pt',
            textAlign: 'left',
            marginLeft: '40pt'
        },
        login:{
            padding: '5px',
            textAlign: 'left',
            fontSize: '30px',
            backgroundImage: "linear-gradient(#cacaca,#b8b8b8)",

            fontFamily: 'Arial',
            // background: '#cacaca',
            color: 'black',
            borderRadius: '10px',
            borderWidth: '0px',
        },
        register: {
            padding: '5px',
            textAlign: 'left',
            fontFamily: 'Arial',
            fontSize: '30px',
            backgroundImage: "linear-gradient(#cacaca,#b8b8b8)",

            // background: '#cacaca',
            color: 'black',
            borderRadius: '10px',
            borderWidth: '0px'
        },
        loginButton: {
            fontSize: "20pt",
            // background: "red",
            backgroundImage: "linear-gradient(#1C1C1C,black)",
            color: "white",
            borderRadius: '15px',
            padding: "10pt 30pt",
            border:" grey 2pt",
            opacity: "0.8",
        },
        registerButton: {
            fontSize: "20pt",
            // background: "black",
            backgroundImage: "linear-gradient(#1C1C1C,black)",
            color: "white",
            padding: "10pt 20pt",
            borderRadius: '15px',
            border:" grey 2pt",
            opacity: "0.8",
        },
        tableBut: {
            padding: '10pt 10pt'
        }
    },canvas:{
        position: 'absolute',
        top: '180px',
        left: '50px',
        borderRadius: '25px',
        // borderWidth: "3px",
        // borderStyle: 'solid',
        // borderImage : 'linear-gradient(#1c1c1c,black'
    },
    formView: {
        block:{
            backgroundImage: "linear-gradient(#FFFFFF,#d6d6d6)",
            color: 'black',
            position: 'absolute',
            top: '160px',
            right: '20px',
            // height: '550px',
            width: '500px',
            borderRadius: '30px',
        },
        message: {
            color: 'black'
        },
        xField: {           // див ввода X
            float: 'left',
            margin: '0% 0%',
            marginLeft: '0pt',
            width: '30%'
        },
        rad:{               // див ввода R
            // float: 'right',
            margin: '0% 0%',
            width: '30%',
            marginLeft: '320px'
        },
        lol:{               // див ввода Y
            float: 'left',
            margin: '0% 0%',
            width: '30%',
            marginLeft: '20px'

        },
        fieldY: {                   // input Y
            marginLeft: '0px',
            padding: '5px',
            textAlign: 'left',
            fontSize: '10px',

            backgroundImage: "linear-gradient(#cacaca,#b8b8b8)",

            fontFamily: 'Arial',
            // background: '#cacaca',
            color: 'black',
            borderRadius: '7px',
            borderWidth: '0px',
        },
        fieldX: {                   // input X
            marginLeft: '0px',
            padding: '5px',
            textAlign: 'left',
            fontSize: '10px',

            backgroundImage: "linear-gradient(#cacaca,#b8b8b8)",

            fontFamily: 'Arial',
            // background: '#cacaca',
            color: 'black',
            borderRadius: '7px',
            borderWidth: '0px',
        },
        descriptionX: {
            marginTop: "50px" ,
            fontSize: '15px',
            textAlign: 'center',
            width: '180px',
            marginLeft: '140px'
        },
        descriptionR: {
            marginTop: "20px" ,
            fontSize: '15px',
            textAlign: 'left',
            width: '180px',
            marginLeft: '20px'
        },

        fieldR: {                   // input R
            marginLeft: '0px',
            padding: '5px',
            textAlign: 'left',
            fontSize: '10px',

            backgroundImage: "linear-gradient(#cacaca,#b8b8b8)",

            fontFamily: 'Arial',
            // background: '#cacaca',
            color: 'black',
            borderRadius: '7px',
            borderWidth: '0px',
        },
        label:{
            fontSize: '15px'
        },
        labelR: {
            fontSize: '25px',
        },
        p:{
            float: 'left',
            margin: '0 1.5%',
            width: '50%',
            fontSize: '35px'
        },
        logout: {
            fontSize: "18pt",
            float: 'right',
            margin: '0 1.5%',
            width: '20%',
            // background: "black",
            backgroundImage: "linear-gradient(#1C1C1C,black)",
            color: "white",
            padding: "5pt 10pt",
            borderRadius: '15px',
            border:" grey 2pt",
            opacity: "0.8",
        },
        send: {                             // кнопка send
            fontSize: "15pt",
            // background: "black",
            backgroundImage: "linear-gradient(#1C1C1C,black)",
            color: "white",
            marginTop: '10pt',
            marginRight: '0px',
            padding: "10pt 20pt",
            borderRadius: '15px',
            border:" grey 2pt",
            opacity: "0.8",
        },
        td: {
            paddingLeft: '10px',
            verticalAlign: 'top',
            textAlign: 'left',
        },
        description: {          // надписи типа выбирите X
            marginTop: "20px" ,
            fontSize: '15px',
            textAlign: 'left',
            width: '250px',
            marginLeft:'20px'
        }
    },
    result:{
        block: {
            overflow: 'scroll',
            height: '100pt',
            marginRight: 'auto',
            marginLeft:'auto',
            marginBottom: '20pt',
            marginTop: '3%'
        },
        main:{

            marginTop: '80pt',
            height: '50pt',
            width: '90%',
            textAlign: 'left',
            backgroundImage: 'linear-gradient(#cacaca,#b8b8b8)',
            padding: '10pt 10pt',
            margin: '5%' ,
            borderRadius: '15px'
        },
        header: {
            textAlign: 'center',
            fontSize: '20pt',
            backgroundImage: 'linear-gradient(#1C1C1C,black)',
            color: 'white',
            border:" grey 2pt",
            opacity: "0.8",
            borderRadius: '10px'
        },
        element: {
            textAlign: 'left',
            fontSize: '15pt',
            color: 'black'
        }

    }
}
