PennController.ResetPrefix(null);

Sequence("Inicio","Instrucoes", randomize("Itens"),SendResults(),"Final");

newTrial("Inicio",

    newText("<p>Bem-vindo! Antes de iniciarmos, preencha os dados a seguir:</p>")
    .print()
    .css("font-size","1.2em")
    ,
    newText("<p>Nome:</p>")
    .print()
    .css("font-size","1.2em")
    ,
    newTextInput("Nome")
    .print()
    ,
    newText("<p>Idade:</p>")
    .print()
    .css("font-size","1.2em")
    ,
    newTextInput("Idade")
    .print()
    ,
    newButton("Iniciar")
    .css("font-size","1.2em")
    .print()
    .wait() 
    ,
    newVar("ID") 
    .global()
    .set( getTextInput("Nome") )
    ,
    newVar("IDADE")
    .global()
    .set( getTextInput("Idade") )
   
)

    .log( "ID" , getVar("ID") )
    .log( "AGE" , getVar("IDADE") 

);

newTrial("Instrucoes",
    
    newText("<p>Este experimento consiste em ler senten&ccedil;as segmentadas e responder perguntas de compreens&atilde;o.</p>")
    .print()
    .center()
    .css("font-size","1.2em")
    ,
    newText("<p>Use a tecla <strong>ESPA&Ccedil;O</strong> para ler cada trecho. Aperte as teclas C e M para responder SIM ou N&Atilde;O.</p>")
    .print()
    .center()
    .css("font-size","1.2em")    
    ,
    newButton("Iniciar")
    .print()
    .center()
    .css("font-size","1.2em")
    .wait()
)