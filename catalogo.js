
/* var mensagensDoConsole = [];

function consolePersistente(mensagem) {
    mensagensDoConsole.push(mensagem);
    console.clear(); // Limpa o console
    console.log('Mensagens anteriores:');
    mensagensDoConsole.forEach(function(msg) {
        console.log(msg);
    });
    console.log('Mensagem atual:', mensagem);
}
*/

//definindo o catalogo de plantas:
var catalogo = {
    "SUCULENTA": "suculenta.html"
    
    // Adicione mais plantas conforme necessário
};

function search_plant(event) {

    event.preventDefault();

    var plantInput = document.getElementById("go_search").value.trim().toUpperCase(); // Obtenha e normalize a entrada do usuário

    

    // Verifique se a planta está no catálogo
    if (plantInput in catalogo) {
        // Redirecione para a página correspondente
        window.location = catalogo[plantInput];

        
        //consolePersistente('Redirecionado para: ' + catalogo[plantInput]);

        
    } else {
        // Se a planta não for encontrada, exiba uma mensagem para o usuário
        console.log("Planta não encontrada"); // ou exiba uma mensagem na interface do usuário

        //muda a cor do campo e muda o placeholder caso a planta não seja encontrada.
        var campoSearch = document.getElementById("go_search");
        campoSearch.value = "";
        campoSearch.style.borderColor = "red";
        campoSearch.placeholder = "Planta não encontrada!"
        
        //após 8s volta ao normal.
        setTimeout(function(){
            campoSearch.style.borderColor = "";
            campoSearch.placeholder = "Digite o nome da planta";

        },3000);

    }

}

function see_plan(plantId) {
    if (plantId in catalogo) {
        window.location = catalogo[plantId];
    } else {
        console.log("Planta não encontrada");
    }
}
   

