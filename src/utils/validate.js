export const checkValidData = (email,password,name)=>{
    const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isValidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isValidName=/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isValidEmail)return "Email id is not valid!"
    if(!isValidPassword)return "Password is not valid!"
    if(!isValidName) return "Name is Invalid!";

    return null;
}

 

