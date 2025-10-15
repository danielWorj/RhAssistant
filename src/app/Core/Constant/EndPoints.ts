const apiUrl = "http://localhost:8080/rhAssistant";

const candiaturl = `${apiUrl}/candidat`;
const posteurl = `${apiUrl}/poste`;


export const rhAssistant = {
    Candidat :{
        all : `${candiaturl}/all`, 
        create : `${candiaturl}/create`, 
        delete : `${candiaturl}/delete`, 
        downloadcv : `${candiaturl}/downloadcv`, 
    }, 

    Offre : {
        all :`${posteurl}/all`,
        create :`${posteurl}/create`,
        delete :`${posteurl}/delete`,
    }, 

    IA : {
        
    }
    

}