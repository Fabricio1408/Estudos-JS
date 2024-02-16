//Exercicios de Fundamentos lecionados no módulo 1 da aula do professor Matheus Battisti sobre javascript
// Imprima um Olá mundo no console
console.log('ola');
//Converta o valor de uma string "1234" em número e exiba o tipo da variável no console.
const valorstring = "1234";
const valornumero = Number(valorstring);
console.log(typeof valornumero);
// string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.
const minhaString = "JavaScript é incrível";
const numerocaracteres = minhaString.length;
const numeropalavras = minhaString.split(" ").length;
console.log(numerocaracteres);
console.log(numeropalavras);
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.
const meuarray = ["Fabricio", "Jose", "Joao", "Carlos", "Pedro"];
for(let i=0; i<meuarray.length;i++){
    console.log(meuarray[i]);
}
// Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM"). Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.
function converterhorario(horario24){

    const [hora, minuto] = horario24.split(":");
    const hora12 = hora % 12 || 12;

    let periodo ="AM"
    if(hora > 12){
        periodo = "PM";
    }
    console.log(hora12, minuto, periodo);
    
}
converterhorario("10:16");
converterhorario("17:16");

//https://www.youtube.com/watch?v=OYPbr6ZG3pc&ab_channel=MatheusBattisti-HoradeCodar
let numeroSorteado = Math.floor(Math.random() * 100) + 1;
console.log("Número sorteado:", numeroSorteado);
//Código utilizado a biblioteca math para imprimir um número aleatório entre um e cem.
function soma(a,b)

console.log(soma(1,8)

            // URL da API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fazendo a requisição GET
fetch(apiUrl)
  .then(response => {
    // Verifica se a resposta da requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao carregar os dados');
    }
    // Converte a resposta para JSON
    return response.json();
  })
  .then(data => {
    // Exibe os dados no console
    console.log(data);
  })
  .catch(error => {
    // Exibe qualquer erro ocorrido no console
    console.error('Erro:', error);
  });
//Estudar requisição Fetch-API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

//consumo simples de API

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.main && data.main.temp && data.wind) {
                h1.textContent = data.name;
                degress.textContent = `${Math.round(data.main.temp)}°C`;
                wind.textContent = `Wind: ${data.wind.speed} m/s`;
                img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
                alert('Cidade inválida😞')
            }
        })

