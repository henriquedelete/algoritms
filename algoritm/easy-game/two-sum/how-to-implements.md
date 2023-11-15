Dada uma matriz de números inteiros e um alvo inteiro, retorne os índices dos dois números de forma que eles somem ao alvo.

Você pode assumir que cada entrada teria exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

declaramos um objeto pra ser tipo
um acumulador mesmo. nele vamos jogar os valores
que nós já percorremos dentro do array, naquele objeto lá
ele será um mapa de numeros.

em seguida fazemos um for né um loop, passando por dentro de
uma sequencia de numeros né 0 até o tamanho do array de numeros passado
i < nums.length
e a cada passada a gente soma um no i
i++

beleza, na sequencia a gente a gente verifica se o objeto tem uma propriedade
nums[i] 2 7
nums[i] 7 2
numa lista a gente tem index e valor
valor: [2, 7, 11, 15];
index: [0, 1];

o algoritmo, ele recebe um valor né uma lista numerica, e um target === um alvo.
esse target é o numero que a gente quer achar o somador.
x + y = target;

tipo uma lista com [1, 2, 3, 4] qual desses numeros somando, daria 5 por exemplo
1+2 = 3 return false;
2+3 = 5 return true;
4+1 = 5 return true;
4+3 = 7 return false;
