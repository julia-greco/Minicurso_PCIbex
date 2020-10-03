## Instruções para criação de uma tabela para uso em um script de um experimento auditivo.

A parte experimental dos *scripts* do PCIbex funciona tendo como base uma tabela. Dessa forma, se torna essencial para a construção de um bom *script* saber como montar uma tabela que atenda às necessidades do seu experimento. 

Esse tutorial tem como objetivo explicar e exemplificar a criação de uma tabela para um experimento linguístico, que tenha como estímulos experimentais áudios. Aconselhamos a utilização desse documento em conjunto com as [instruções](https://github.com/julia-greco/minicursoPCibex/blob/master/data_includes/Instru%C3%A7%C3%B5es.md) de como montar um *script*, para o mesmo tipo de experimento, presente nesse respositório na pasta **data_includes**.

### Experimento auditivo

O experimento para o qual criaremos uma tabela consiste em:
```
O participante ouvir um áudio com uma sentença
e depois escolher entre duas opções, qual delas 
é a interpretação de sua preferência, em relação
à frase escutada anteriormente.
```
Portanto, será necessário ter em nosso *script* uma tela na qual toque o áudio, e outra na qual o participante possa ver e escolher as duas sentenças de interpretação.

### Criando a tabela

Neste ponto já podemos assumir que a nossa tabela terá três colunas: uma com os áudios, uma com as sentenças A e uma com as sentenças B.

| Audio | Sentença A | Sentença B |
|-------|------------|------------|

Na primeira coluna colocaremos os nomes dos áudios. Os arquivos em si deverão estar armazenados na pasta **chunk_includes** no seu repositório, ou então na seção **resources** no *PCIbex*. Mas **atenção**, para que os áudios reproduzam corretamente é necessário que você coloque o nome e a **extensão** do seu arquivo. No nosso exemplo será **.wav**.

| Audio | Sentença A | Sentença B |
|-------|------------|------------|
| audio1.wav |  |  |
| audio2.wav |  |  |
| audio3.wav |  |  |

Nas nossas segundas e terceiras colunas, preencheremos com as sentenças. Nós usaremos `.` ao invés de `)` depois da letra **A** e **B** porque senão a tabela dará erro ao ser processada.

| Audio | Sentença A | Sentença B |
|-------|------------|------------|
| audio1.wav | A. O delegado dirigia uma Ferrari conversível. | B. A mulher dirigia uma Ferrari conversível. |
| audio2.wav | A. O assessor foi promovido. | B. O assessor foi demitido. |
| audio3.wav | A. O primo de Carlos estava no Amapá. | B. O amigo morava no Amapá. |

Agora nós já possuimos uma tabela com todas as informações necessárias, para rodar o nosso experimento da maneira que descrevemos acima. Contudo, se analisássemos os resultados coletados, não seriamos capazes de reconhecer à qual conjunto de áudio e sentenças, o participante deu determinada resposta. Dessa forma será necessário a criação de uma coluna denominada **Ítem**, na qual será informada um código, representativo de um conjunto de áudio e sentenças.

| Audio | Sentença A | Sentença B | Item |
|-------|------------|------------|------|
| audio1.wav | A. O delegado dirigia uma Ferrari conversível. | B. A mulher dirigia uma Ferrari conversível. | 1 |
| audio2.wav | A. O assessor foi promovido. | B. O assessor foi demitido. | 2 |
| audio3.wav | A. O primo de Carlos estava no Amapá. | B. O amigo morava no Amapá. | 3 |

Para o nosso teste, a tabela já está pronta e perfeitamente funcional. No entanto, a maioria dos experimentos são bem maiores do que o exemplo apresentado. Além disso, para que os resultados não sejam influenciados pela posição e o agrupamento dos estímulos, é necessário aplicar técnicas como o [Quadrado Latino](https://www.ime.unicamp.br/~ftorres/ENSINO/MONOGRAFIAS/Juari1_EA2016.pdf), portanto, é comum se ter mais de uma versão de um experimento, ou mais de um **grupo**.

Foi com esse pensamento em mente que os desenvolvedores do *PCIbex* criaram uma forma de automatizar a distribuição dessas versões para cada participante. Para que isso ocorra, só é necessário que sejá adicionado à tabela uma coluna denominada **Group**, que contenha letras ou números para a identificação das diferentes versões. Ao adicioná-la o *PCIbex* reconhece automaticamente que o conteúdo da coluna são na verdade grupos de ítens, e exibe para o participante os ítens relacionados a somente um dos grupos especificados. Quando um próximo participante for fazer o experimento, o *PCIbex* irá exibir os ítens de outro grupo, e assim sucessivamente.

Como foi dito antes, para o nosso experimento exemplo, não há necessidade de adicionar a coluna **Group**, já que teremos uma versão apenas. Mas o faremos por motivos didáticos. **Note** que o nome da coluna deve ser necessariamente **Group**, em inglês e com a primeira letra maíscula, caso contrário o *PCIbex* não será capaz de reconhece-la.

| Audio | Sentença A | Sentença B | Item | Group |
|-------|------------|------------|------|-------|
| audio1.wav | A. O delegado dirigia uma Ferrari conversível. | B. A mulher dirigia uma Ferrari conversível. | 1 | A |
| audio2.wav | A. O assessor foi promovido. | B. O assessor foi demitido. | 2 | A |
| audio3.wav | A. O primo de Carlos estava no Amapá. | B. O amigo morava no Amapá. | 3 | A |

Com a adição dessa última coluna, nossa tabela está pronta para ser utilizada no modelo de [*script*](https://github.com/julia-greco/minicursoPCibex/blob/master/data_includes/script_auditivo.js) disponível nesse repositório. Entretanto, para que ela possa funcionar sem nenhum problema no *PCIbex*, é necessário tomar alguns cuidados.

### Especificações da tabela para uso no PCIbex

O primeiro detalhe importante e crucial é que a tabela deve estar formatada na extensão **.csv**. Nesse estilo, a tabela deverá ter as suas colunas separas por **vírgulas**. O exemplo que montamos ficaria assim:
```
Audio, Sentença A, Sentença B, Item, Group
audio1.wav, A. O delegado dirigia uma Ferrari conversível., B. A mulher dirigia uma Ferrari conversível., 1, A 
audio2.wav, A. O assessor foi promovido., B. O assessor foi demitido., 2, A
audio3.wav, A. O primo de Carlos estava no Amapá., B. O amigo morava no Amapá., 3, A
```
Mas **cuidado** pois em alguns computadores, apesar de se salvar a tabela em **.csv**, a tabela vem separada por **ponto e vírgula**. Para resolver esse problema acesse esse [tutorial](http://ptcomputador.com/Sistemas/windows/220763.html). Caso não funcione, acesse essa [solução de problemas](https://www.clubedohardware.com.br/topic/1024802-como-configurar-delimitador-csv-de-%C2%B4%C2%B4-para-%C2%B4%C2%B4/?do=findComment&comment=5636864)


