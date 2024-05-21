
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
    "suculenta": "suculenta.html",
    "orquidea": "orquidea.html",
    // Adicione mais plantas conforme necessário
};


function normalizeText(text) {
    return text
        .trim()  // Remove espaços no início e no fim
        .toLowerCase()  // Converte para minúsculas
        .normalize("NFD")  // Normaliza os caracteres com acentos
        .replace(/[\u0300-\u036f]/g, "")  // Remove os diacríticos (acentos)
        .replace(/\s+/g, "");  // Remove todos os espaços
}

function showSuggestions(value) {
    var suggestionsContainer = document.getElementById("autocomplete-list");
    suggestionsContainer.innerHTML = "";
    var normalizedValue = normalizeText(value);

    if (!normalizedValue) {
        return;
    }

    Object.keys(catalogo).forEach(function(plant) {
        if (normalizeText(plant).includes(normalizedValue)) {
            var suggestionItem = document.createElement("div");
            suggestionItem.classList.add("autocomplete-suggestion");
            suggestionItem.innerText = plant;
            suggestionItem.onclick = function() {
                document.getElementById("go_search").value = plant;
                suggestionsContainer.innerHTML = "";
            };
            suggestionsContainer.appendChild(suggestionItem);
        }
    });
}


function search_plant(event) {

    event.preventDefault();

    var plantInput = normalizeText(document.getElementById("go_search").value)
    

    // Normalizar o catálogo
    var normalizedCatalog = {};
    Object.keys(catalogo).forEach(function(key) {
        var normalizedKey = normalizeText(key);
        normalizedCatalog[normalizedKey] = catalogo[key];
    });

    // Verifique se a planta está no catálogo
    if (plantInput in normalizedCatalog) {
        // Redirecione para a página correspondente
        window.location = normalizedCatalog[plantInput];


        //consolePersistente('Redirecionado para: ' + catalogo[plantInput]);


    } else {
        // Se a planta não for encontrada, exiba uma mensagem para o usuário

        //muda a cor do campo e muda o placeholder caso a planta não seja encontrada.
        var campoSearch = document.getElementById("go_search");
        campoSearch.value = "";
        campoSearch.style.borderColor = "red";
        campoSearch.placeholder = "Planta não encontrada!"

        //após 8s volta ao normal.
        setTimeout(function () {
            campoSearch.style.borderColor = "";
            campoSearch.placeholder = "Digite o nome da planta";

        }, 3000);

    }

}

//ir para pagina da planta atraves da função see_plan, usando o onclick.
function see_plan(plantId) {
    if (plantId in catalogo) {
        window.location = catalogo[plantId];
    } else {
        console.log("Planta não encontrada");
    }
}



