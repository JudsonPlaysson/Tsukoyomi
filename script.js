const paragraph = document.getElementById('result')
const number = [1, 5, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89, 93, 97, 101, 105, 109, 113, 117, 121, 125, 129, 133, 137, 141, 145, 149, 153, 157, 161, 165, 169, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 233, 237, 241, 245, 249, 253, 257, 261, 265, 269, 273, 277, 281, 285, 289, 293, 297, 301, 305, 309, 313, 317, 321, 325, 329, 333, 337, 341, 345, 349, 353, 357, 361, 365, 369, 373, 377, 381, 385, 389, 393, 397, 401];
function mostrarProximo(proximoId, event) {
      // Esconde o botão atual
      event.target.style.display = 'none';

      // Exibe o próximo botão
      document.getElementById(proximoId).style.display = 'block';
      if(proximoId === 'botao9'){
            document.querySelector('#usuario').style.display = 'block'
      }
      
}

function lerMente() {
      let calculo = 0;
      mudarImagem();
      for (let i = 0; i < number.length; i++) {

            let usuario = document.getElementById("usuario").value;
            if (Number(usuario) === number[i]) {
                  calculo = (Number(usuario) - 1) / 4;
                  //paragraph.innerHTML = `Huuuum... Meu Sharingan não me engana, voçê pensou no número ${calculo} 😎`
                  apresentarResultado(calculo);
                  return
                        
            } 
      }
      
      mostrarErro();
      
}

function apresentarResultado(valor)
{
      paragraph.innerHTML = `Voçê Foi manipulado pelo meu Tsukoyomi, o número que voçê pensou foi --> ${valor} 😎`
                  
}

function mostrarErro(){
      paragraph.innerHTML = "Voçê Calculou errado, faça de novo! Click no Butão de Restart"
}
function mudarImagem(){
      document.getElementById("madara-uchiha").style.display = 'none';
      document.getElementById("uchiha").style.display = 'block';      
}