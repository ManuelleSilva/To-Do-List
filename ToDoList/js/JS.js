document.addEventListener('DOMContentLoaded', function() { // cria toda a função executada
    const form = document.querySelector('.form');//cria uma variavel que puxa o form do html
    const input = document.querySelector('.iptText'); //cria uma variavel e puxa o valor de quando o input é criado(texto)
    const lista = document.querySelector('.lista');// cria uma variavel e puxa o valor já presentes na lista

   
   
   
   form.addEventListener('submit', function(event) {
        event.preventDefault(); // para não enviar formulário modelo padrão, para não atualizar toda a pagina e perder o processo

        const taskText = input.value;// cria uma variavel e insere o texto do input
        if (taskText !== '') { // verifica se o texto é diferentye de vazio
            addTask(taskText); //chama a função e passa a variavel como argumento
            input.value = ''; //apaga o valor depois de passado
        }
    });


    
    function addTask(taskText) { //função sendo iniciada
        const li = document.createElement('li'); //cria um conteudo novo da lista
        
        const checkbox = document.createElement('input'); // cria um novo input
        checkbox.type = 'checkbox';  //define o input como checkbox
        li.appendChild(checkbox); //define ele como filho da lista

        const taskSpan = document.createElement('span'); //criasse um span
        taskSpan.textContent = taskText; //// o span puxa ou recebe o valor do texto já digitado
        li.appendChild(taskSpan);  //define o texto como filho da lista juntamente ao checkbox

        lista.appendChild(li); // define li como filho da lista gigante
    }

    window.deleteSelected = function() { //usa a função delectSeleted na janela ou página referente e cria uma function para ela
        const checkboxes = document.querySelectorAll('.lista input[type="checkbox"]'); //cria uma variavel onde mais de uma checkbox é incluida, depois utiliza o select para reconhecer quais estão selecionadas
        checkboxes.forEach(function(checkbox) { // ao procurarmos na nova variavel, é percorrida por toda a lista e depois dito oq deve ser feito
            if (checkbox.checked) {  //cria um if e indica uma condição, q é quando a checkbox é selecionada
                checkbox.parentElement.remove(); //ao reconhecer todas as checkboxs selecionadas ele as deleta
            }
        });
    };
});
