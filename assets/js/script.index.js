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

const posts = [];
let indexPost = -1;
function savePost() {

    const title = document.getElementById("title").value;
    const resume = document.getElementById("resume").value;
    const publisher = document.getElementById("publisher").value;
    const date = document.getElementById("date").value;

    console.log(title, resume, publisher, date);


    if (indexPost == -1) {
        if (title && resume && publisher && date) {
            storePost(title, resume, publisher, date);
            cleanFields();
        } else {
            if (title && resume && publisher && date) {
                posts[indexPost] = [
                    title,
                    resume,
                    publisher,
                    date
                ];

                showPosts();
                indexPost = -1;
                cleanFields();
            }
        }
    }
}

    function storePost(title, resume, publisher, date) {
        const post = {
            title,
            resume,
            publisher,
            date
        };

        posts.push(post);
        showPosts();
    }

    function showPosts() {
        let showContent = "";

        posts.forEach((post, index) => {

            showContent += `
        <div class= "post">
        <h2>${post.title}</h2>
        <p><srong>Resumo:</strong>${post.resume}</p>
        <p><srong>Autor:</strong>${post.publisher}</p>
        <p><srong>data de punlicacão:</strong>${post.date}</p>

        <button onclick ='editPost(${index})'>Editar</button>
        <button onclick ='removePost(${index})'>Remover</button>
        
    </div>`;
        })
        document.getElementById('list').innerHTML = showContent;
    }

    function cleanFields() {
        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("publisher").value = "";
        document.getElementById("date").value = "";
    }

    function editPost(index) {
        const post = posts[index];
        indexPost = index;
        document.getElementById("title").value = post.title;
        document.getElementById("resume").value = post.title;
        document.getElementById("publisher").value = post.title;
        document.getElementById("date").value = post.title;
    }

    function removePost(index){
        posts.splice(index, 1);

        showPosts();
    }

