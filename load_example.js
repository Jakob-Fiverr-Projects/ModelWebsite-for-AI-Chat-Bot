const other_info = document.getElementById("Other_Information");
const chat_history = document.getElementById("Chat");
const my_info = document.getElementById("My_Information");
const my_desc = document.getElementById("My_Description");
const reply = document.getElementById("reply-text");

const chat_list_item = "<p> TIME </p> <div> TEXT </div>"


function load_next() {
    reply.value = ""
    var i = Math.floor(Math.random() * examples.length);
    var ex = examples[i];
    other_info.innerHTML = ex.other_info;
    my_info.innerHTML = ex.my_info;
    my_desc.innerHTML = ex.my_desc;
    chat_history.innerHTML = "";
    ex.chat_history.forEach(mess=>{
        var chat_mess = document.createElement("li")
        chat_mess.classList.add("Message");
        chat_mess.classList.add(mess.sender);
        chat_mess.innerHTML = chat_list_item.replace(/TEXT/, mess.text).replace(/TIME/, mess.time);
        chat_history.appendChild(chat_mess);
    })
}

load_next();