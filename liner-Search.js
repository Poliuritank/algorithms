
/*

Лінійний алгоритм пошуку (англ. linear search або sequential search) - це простий алгоритм пошуку, що виконується шляхом перевірки кожного елемента в списку послідовно, поки не буде знайдений шуканий елемент або поки не буде досягнута кінцева позиція списку.

Це найпростіший алгоритм пошуку, який підходить для малих списків або тоді, коли елементи не впорядковані. Однак, для великих списків, де кількість елементів може бути великою, лінійний алгоритм пошуку може бути дуже повільним, так як він перевіряє кожен елемент в послідовності.

У найгіршому випадку, коли елемент знаходиться в кінці списку або його там немає, лінійний алгоритм повинен перевірити кожен елемент в списку. Тому час виконання лінійного алгоритму пошуку залежить від розміру списку.

Алгоритм може бути реалізований як цикл for, while або do-while, де кожен елемент масиву послідовно перевіряється на збіг з шуканим елементом.

Ось як можна переписати цей код з використанням циклу do while:

const arrLiner = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linerSearch(arrLiner, item) {
  let i = 0;
  do {
    count += 1;
    if (arrLiner[i] === item) {
      return i;
    }
    i++;
  } while (i < arrLiner.length);
  return null;
}

console.log(linerSearch(arrLiner, 5)); // поверне 2
console.log(count); // поверне 3



Ось як можна переписати цей код з використанням циклу while:
const arrLiner = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linerSearch(arrLiner, item) {
	let i = 0;
	while (i < arrLiner.length) {
		count += 1;
		if (arrLiner[i] === item) {
			return i;
		}
		i++;
	}
	return null;
}

*/


const arrLiner = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;
function linerSearch(arrLiner, item) {
	for (let i = 0; i < arrLiner.length; i++) {
		count += 1;
		if (arrLiner[i] === item) {
			return i;
		}
	}
	return null;
}

console.log(linerSearch(arrLiner, 8));
console.log('count = ', count);


