const validateString = (cad)=>{
    let response = (cad.length >= 3) ? true : false; 
    return response;
};

const validateTel = (cad) =>{
    let response = (cad.length >= 10)? true : false; 
    return response;
}

class Validate{
    validNames(values){
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25}){1,3}$/g;
        const resp = values.match(nombresRX)?true : false;
        return resp;
    }

    validMail(values){
        const correoRX = /^([a-z0-9_\.\+-]+)@([\da-z\.]+)\.([a-z\.]{0,6})$/gm;
         const resp = values.match(correoRX)?true : false;
         return resp;
    }

    validTel(values){
        const TelRX = /^([3]\d{9})$/gm;        
        const resp = values.match(TelRX)?true : false;
        return resp;
    }
    validSelect(values){
        const selectRX = 0;
        const resp = values.match(selectRX)?false : true;
        return resp;
    }

    validText(values){
        const textRX = /^[a-zAÀ-ÖØ-öø-ÿ0-9 ]{0,50}$/gm
        const resp = values.match(textRX)?true : false;
        return resp;
    }

    validform = (objeto) => {
        const valores = Object.values(objeto); 
        let resp = valores.findIndex(e => e === false);
        return resp;
    }
}
export {validateString, validateTel, Validate}; 