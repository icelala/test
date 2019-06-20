function chat(e) {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    if(e.keyCode == 13){
        db.collection('message').doc(date).set({
            name : getCookie("name"),
            message : document.getElementById("chat").value
        }).then(function(){
            location.reload();
        })
        document.getElementById("chat").innerHTML = "";
        return false;
    }
}

function outputMessage(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let b = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name + ":" + doc.data().message;
    
    li.appendChild(name);

    document.getElementById("message").appendChild(li);
}

function initTextArea(){
    var signin = getCookie("signin");
    if(signin == ""){
        document.getElementById("chat").innerHTML = "Please sign in first";
        document.getElementById("chat").disabled = true;
    }
    db.collection('message').get().then((snapshot) =>{
        snapshot.docs.forEach(doc => {
            outputMessage(doc);
        });
    })
}