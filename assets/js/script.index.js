// function enviar() {

//     let name = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let color = document.getElementById("firstColor").value;
//     let age = document.getElementById("firstAge").value;

//     let personSimple = {
//         firstName: name,
//         firstColor: color,
//         firstAge: age
//     };

//     document.getElementById("resposta").innerHTML = 'bem vindo ' + personSimple.firstName +'seu sobrenome é '+personSimple.lastName +'sua idade é ' + personSimple.firstAge + 'sua cor é ' + personSimple.firstColor;
// }

const post= [];
function savePOst(){

    const title = document.getElementById("title").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;
 
    if(title && resume && publisher && date){
        storePost(title, resume, publisher, date);
    }
}

function storePost(title, resume, publisher, date){
    const post = {
        title,
        resume,
        publisher,
        date
    };
    post.push(post)
}


