function signUp(username,password) {
    let userNames=["Alice","Bob","Delta","Elena","Forbe"];
    for(let i=0;i<=userNames.length-1;i++){
        if(username==userNames[i]){
           return "User Already Registered";
        
          
        }
        
    }
    userNames.push[username];
    return "Login Successfull"
}

console.log(signUp("Elena"))