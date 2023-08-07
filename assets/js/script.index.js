function enviar() {

    let name = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let color = document.getElementById("firstColor").value;
    let age = document.getElementById("firstAge").value;

    let personSimple = {
        firstName: name,
        firstColor: color,
        firstAge: age
    };

    document.getElementById("resposta").innerHTML = 'bem vindo ' + personSimple.firstName +'seu sobrenome é '+personSimple.lastName +'sua idade é ' + personSimple.firstAge + 'sua cor é ' + personSimple.firstColor;
}