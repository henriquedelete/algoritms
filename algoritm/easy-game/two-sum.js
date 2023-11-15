/*
Dada uma matriz de números inteiros e um alvo inteiro, retorne os índices dos dois números de forma que eles somem ao alvo.

Você pode assumir que cada entrada teria exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
    console.log("quantas vezes o loop rodou ? ", { vezes: i });
    console.log("numMap ? ", { numMap });
    const complement = target - nums[i];

    if (numMap.hasOwnProperty(complement)) {
      console.log("Key in moment - current:", Object.keys(numMap));
      return [numMap[complement], i];
    }

    numMap[nums[i]] = i;
  }

  return null; // No solution found
}

// Exemplo de uso:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3));
/*
Ali encima, declaramos um objeto pra ser tipo
um acumulador mesmo. nele vamos jogar os valores
que nós já percorremos dentro do array, numMap mapa de numeros.

em seguida fazemos um for né um loop, passando por dentro de
uma sequencia de numeros né 0 até o tamanho do array de numeros passado
i < nums.length
e a cada passada a gente soma um no i
i++

beleza, na sequencia a gente a gente verifica se o objeto tem uma propriedade
target - nums[i]

*/
