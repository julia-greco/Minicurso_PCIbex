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

