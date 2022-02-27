function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;

    
    if (name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    else if(password.length<6){
        alert("Password must be at least 6 characters long.");
        return false;
    }
    else if(name.indexOf('@bmsce.ac.in') > -1){
        if(name== "test.cs20@bmsce.ac.in" && password=="123456") 
        {
            return true;
        }
        else if(name== "login.cs20@bmsce.ac.in" && password=="123456") 
        {
            return true;
        }
        else
        {
            alert("Invalid Credentials");
            return false;
        }
    }
    else{
        alert("USE BMSCE EMAIL!")
        return false
    }
    
}  