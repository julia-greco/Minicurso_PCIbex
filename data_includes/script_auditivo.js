//Início do Script

//Inativa os prefixos do PennController (sem esse comando os códigos não funcionam)
PennController.ResetPrefix(null);

//Define a sequência de telas do experimento
Sequence("Participante", "Instrucoes", "Experimento", "Final");

//Cria um cabeçalho. Todos os comandos dentro do cabeçalho serão rodados automaticamente antes de cada "trial"
Header(
//Define que todo texto será impresso na tela e que o tamanho da fonte será "1.2em"
         defaultText
            .css("font-size","1.2em")
            .print()
         ,
//Define que toda caixa de texto será impressa na tela e que o tamanho da fonte será "1.2em"
         defaultTextInput
            .css("font-size","1.2em")
            .print()
         ,
//Define que toda caixa de texto será impressa na tela e que o tamanho da fonte será "1.2em"
         defaultButton
            .css("font-size","1.2em")
            .print()
            .wait()
         ,
         
)

//Cria uma nova tela - Tela de coleta de dados do participante
newTrial("Participante",

         newText("<p>Bem-Vindos!</p>")
         ,
         newText("<p>Neste experimento, você vai ouvir uma frase e depois deve escolher a melhor opção de interpretação para ela</p>")
         ,
         newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo</p>")
         ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante  
         newTextInput("Nome")
         ,
         newText("<p>Por favor, escreva o seu E-MAIL na caixa abaixo</p>")
         ,
         newTextInput("Email")
         ,
         newText("<p>Por favor, 
)
