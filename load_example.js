const other_info = document.getElementById("Other_Informations");
const chat_history = document.getElementById("Chat");
const my_info = document.getElementById("My_Information");
const my_desc = document.getElementById("My_Description");
const reply = document.getElementById("reply-text");

const chat_list_item = "<li class='Message'> TEXT </li>"


function load_next() {
    reply.value = ""
    var i = Math.floor(Math.random() * examples.length);
    var ex = examples[i];
    other_info.innerHTML = ex.other_info;
    my_info.innerHTML = ex.my_info;
    my_desc.innerHTML = ex.my_desc;
    chat_history.innerHTML = "";
    ex.chat_history.forEach(mess=>{
        chat_history.innerHTML += chat_list_item.replace(/TEXT/g, mess)
    })
}

load_next();