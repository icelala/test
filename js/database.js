function login() {
    db.collection('test').doc(document.forms["userform"]["account"].value).get().then((doc) => {
        if(doc.exists){
            if(doc.data().password == document.forms["userform"]["password"].value){
                var d = new Date();
                d.setTime(d.getTime()+365);
                var expires = "expires="+d.toGMTString();
                setCookie("signin", true, 30);
                setCookie("name", doc.data().name, 30);
                window.location.href ="index.html"
            }
            else{
                alert("Wrong password");
            }
        }
        else{
            alert("Couldn't find this account");
        }
    });
    return false;
}

function createAccount() {
    db.collection('test').doc(document.forms["userform"]["account"].value).set({
        name : document.forms["userform"]["name"].value,
        account : document.forms["userform"]["account"].value,
        password : document.forms["userform"]["password"].value,
    }).then(function(){
        window.location.href ="sign in.html"
    });
    return false;
}

