### Voce deve copiar esse projeto para o seu repositorio local inicialmente. Apos copiado vc deve dar push do exercicio para a branch correspondente do seu repositorio de exercicios.

# Exercicio 13

O repositorio ja possui uma pagina CounterPage.jsx, counterHook.jsx e uma molecula Counter.jsx. Arquivos onde deve ser implementado o exercicio, poderao ser adicionados outros modulos se voce achar conveniente, mantendo os principios do design atomico.

Voce deve usar o hook useReducer para manter o estado do contador atualizado. O design deve ser simples, apenas um botao para incrementar o contador, um botao para decrementar o contador e uma interface para mostrar a numeracao atualizada apos o clique


# Exercicio 14

Como vimos durante a aula eh muito dificil remover o comportamento padrao do webpack e babel que por conta de seguranca sempre mantem o build do seu projeto como "use strict". Ou seja, variaveis globais nao podem ser salvas na window do seu projeto, portanto as variaveis do projeto sao sempre inacessiveis logo mais seguras.

Em alguns casos nos queremos dar um override nesse tipo de configuracao. Nesta aplicacao estamos usando webpack com babel para compilar nosso codigo em dist/bundle.js.

no index.js temos a variavel pokemons a qual deveria aparecer na minha window. A configuracao "transform-remove-strict-mode" em .babelrc deveria ser o suficiente para remover o "use-strict".

Tente remover o use-strict deste projeto, crie em pastas paralelas um projeto create-react-app e um projeto vite, neles voce devera criar uma variavel nos respectivos indicies as quais deverao ser salvas na window apos a remocao do use-strict. 


Apos a conclusao do seu exercicio crie um readme.md explicando como como conseguiu remover o use-strict em cada projeto ou o porque voce acredita que nao conseguiu remove-lo e quais foram as implementacoes e bibliotecas usadas que falharam na remocao do mesmo.