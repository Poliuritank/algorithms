/* 

Selection sort (сортування вибором) - це алгоритм сортування, що базується на послідовному виборі мінімального (або максимального) елементу з несортованої частини масиву і його переміщенні в початок (або кінець) сортованої частини масиву.

Алгоритм працює таким чином:

Перебирається масив і знаходиться мінімальний елемент.

Мінімальний елемент переміщується в початок масиву, а перший елемент переміщується на місце мінімального.

Повторюється перебір масиву, але вже без першого елементу, тобто шукається мінімальний елемент в другій частині масиву (від другого до останнього елементу).

Мінімальний елемент з другої частини переміщується на другу позицію масиву, а другий елемент - на його оригінальне місце.

Алгоритм повторюється до тих пір, поки не буде відсортована вся послідовність.

Selection sort має складність O(n^2), тобто він не є найефективнішим алгоритмом сортування, але він є простим для реалізації і часто використовується для невеликих масивів.





Цей код сортує масив за зростанням елементів методом вибору (selection sort) і містить наступні кроки:

Функція приймає масив як аргумент.

Змінна count ініціалізується як 0, щоб порахувати кількість порівнянь.

Починається зовнішній цикл for, який проходиться по кожному елементу масиву.

Змінна indexMin ініціалізується як i, щоб зберігати індекс мінімального значення.

Починається внутрішній цикл for, який проходиться по залишку масиву, починаючи з елементу, що йде за поточним елементом.

Якщо елемент з індексом j менший за елемент з індексом indexMin, то indexMin оновлюється на j.

Змінна count збільшується на 1, щоб порахувати кількість порівнянь.

Після закінчення внутрішнього циклу, знаходиться мінімальний елемент в залишку масиву.

Мінімальний елемент обмінюється з першим елементом за індексом i.

Знову змінна count збільшується на 1, щоб порахувати кількість порівнянь.

Цикл повторюється, поки всі елементи масиву не будуть пройдені.

Відсортований масив повертається з функції. */

const arr = [
	6, 7, 3, 2, 6, 4, 8, 1, 2, 3, 7, 6, 5, 4, 0, -5, 1, 3, 6, 4, 1, 9, 8, 3, 5, 4,
	-36, 7, 1, 2, 6, 5, 4, 3, 2, 0, 9,
];
let count = 0;

function sorting(array) {
	count = 0;
	for (let i = 0; i < array.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[indexMin]) {
				indexMin = j;
			}
			count++;
		}
		let temp = array[i];
		array[i] = array[indexMin];
		array[indexMin] = temp;
	}
	return array;
}

console.log(sorting(arr));
console.log('count = ', count);
// (37) [-36, -5, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9]

// ++++++++++++++++++++++++++++++++++++++++++++++++

/* Основна різниця з кодом сортування за зростанням полягає в тому, що ми порівнюємо числа за допомогою оператора більше (>) в заміну оператору менше (<). Ми також змінили назву змінної на indexMax, щоб відображати той факт, що ми знаходимо індекс найбільшого елементу в масиві.*/

// const arr = [
// 	6, 7, 3, 2, 6, 4, 8, 1, 2, 3, 7, 6, 5, 4, 0, 1, 3, 6, 4, 1, 9, 8, 3, 5, 4, 7,
// 	1, 2, 6, 5, 4, 3, 2, 0, 9,
// ];

// function sorting(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		let indexMax = i;
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[j] > array[indexMax]) {
// 				indexMax = j;
// 			}
// 		}
// 		let temp = array[i];
// 		array[i] = array[indexMax];
// 		array[indexMax] = temp;
// 	}
// 	return array;
// }

// console.log(sorting(arr));

// (35) [9, 9, 8, 8, 7, 7, 7, 6, 6, 6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0]
