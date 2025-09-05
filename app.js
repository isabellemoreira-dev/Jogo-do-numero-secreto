alert ('Seja bem vindo ao jogo do número secreto!');
let numerosecreto = parseInt(Math.random() * 100 + 1);
console.log (`O número secreto é: ${numerosecreto}`);
let chute;
let tentativas = 1;
while (chute != numerosecreto)
{
    chute = prompt ("Escolha um número de 1 a 10:");
    console.log (`O chute do usuário foi: ${chute}`);
    if (numerosecreto == chute)
    {
        break;
    }
    else 
    {
        console.log(`O número de tentativas do usuário é: ${tentativas}`);
        if (numerosecreto > chute)
        {
            alert (`O número secreto é maior do que ${chute}\nNúmero de tentativas=${tentativas}`);
        }
        else 
        {
            alert (`O número secreto é menor do que ${chute}\nNúmero de tentativas=${tentativas}`);
        }
        tentativas++;
    }
}
let ptentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert (`Isso ai! Você acertou o número secreto ${numerosecreto} com ${tentativas} ${ptentativa}!`);