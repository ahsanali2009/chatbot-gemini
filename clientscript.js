let inputButton = document.getElementById('chat-input-box-submit')
let chatInput = document.getElementById('chat-input')
let mainChat = document.getElementById('main-chat')

function newChatBoxFunction (value){

    let newChatBox = document.createElement('p')
    let newChatBoxBreak = document.createElement('br')
    mainChat.append(newChatBox)
    newChatBox.innerText = value
    newChatBox.className = "chatboxclass"
    newChatBox.append(newChatBoxBreak)

}


    inputButton.onclick = async() => {
        if((chatInput.value).length > 0){

            let data = await sendQuery(chatInput.value)
            newChatBoxFunction(data.reply)
            console.log(data)
            
        }
    }


async function sendQuery(value){

    const response = await fetch('http://localhost:3000/query', {
        method : "POST",
        body : JSON.stringify({'query' : value}),
        headers : {
            "Content-Type": "application/json"
        }
    })

    return response.json()
}