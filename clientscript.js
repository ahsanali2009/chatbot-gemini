let inputButton = document.getElementById('chat-input-box-submit')
let chatInput = document.getElementById('chat-input')
let mainChat = document.getElementById('main-chat')
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


function newChatBoxFunction (value, isQuery){

    if(isQuery == false){

        let newChatBox = document.createElement('p')
        let newChatBoxBreak = document.createElement('br')
        mainChat.append((newChatBox))
        newChatBox.innerHTML = marked.parse(value)
        newChatBox.className = "chatboxclass"
        newChatBox.append((newChatBoxBreak))
    }
    else if (isQuery == true){
        let newChatBox = document.createElement('p')
        let newChatBoxBreak = document.createElement('br')
        mainChat.append(newChatBox)
        newChatBox.innerHTML = (value)
        newChatBox.className = "chatboxclassquery"
        newChatBox.append(newChatBoxBreak)
    }

}


    inputButton.onclick = async() => {
        if((chatInput.value).length > 0){

            
            let data = await sendQuery(chatInput.value)
            newChatBoxFunction(chatInput.value, true)
            newChatBoxFunction(data.reply, false)
            
            chatInput.value = ""
            
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