//Início do Script

//Inativa os prefixos do PennController (sem esse comando os códigos não funcionam)
PennController.ResetPrefix(null);

//Define a sequência de telas do experimento
Sequence("Participante", "Instrucoes", "Experimento", "Final");

//Cria uma nova tela - Tela de coleta de dados do participante
newTrial("Participante",
//Define que todo texto será impresso na tela e que a o tamanho da fonte será "1.2em"
         defaultText
            .css("font-size","1.2em")
            .print()
         ,
         newText("<p>Bem-Vindos!</p>)
         ,
         newText("<p>Neste experimento, você vai ouvir uma frase e depois deve escolher a melhor opção de interpretação para ela</p>")
         ,
         newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo</p>")
         ,
           
)
