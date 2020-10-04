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

    .log( "ID" , getVar("NOME") )
    .log( "AGE" , getVar("IDADE") 

);