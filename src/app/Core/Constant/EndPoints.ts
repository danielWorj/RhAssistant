const apiUrl = "http://localhost:8080/api/rhassistant"; //Spring boot
const apiIAUrl = "http://localhost:5000/api/rhassistant/ia"; //Flask 

const candiaturl = `${apiUrl}/candidat`;
const posteurl = `${apiUrl}/poste`;
const prompturl = `${apiUrl}/prompt`;




export const rhAssistant = {
    Candidat :{
        all : `${candiaturl}/all`, 
        bysecteur : `${candiaturl}/bysecteur`,
        create : `${candiaturl}/create`, 
        delete : `${candiaturl}/delete`, 
        downloadcv : `${candiaturl}/downloadcv`, 
        bycvname : `${candiaturl}/bycvname`,
    }, 

    Offre : {
        all :`${posteurl}/all`,
        create :`${posteurl}/create`,
        delete :`${posteurl}/delete`,
    },
    
    Prompt :{
        all : `${prompturl}/all`,
        byId : `${prompturl}/byid`, 
        create : `${prompturl}/create`,
        able : `${prompturl}/able`,
        disable : `${prompturl}/disable`,
    }, 

    IA : {
        resume : `${apiIAUrl}/resumecv`,
        matching : `${apiIAUrl}/matching`,
        recommandation : `${apiIAUrl}/resumecv`,
    }
    

}