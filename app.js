function chatApp(){
    var message = document.getElementById("msg-text")
    console.log(message)
    
    var p = document.createElement('p')
    console.log(p)

    var val1 = document.createTextNode(message.value)
    p.appendChild(val1)

    var chat = document.getElementById('chat')
    chat.appendChild(p)

    message.value = ""
}