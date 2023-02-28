/*

Алгоритм пошуку в ширину (BFS, від англ. breadth-first search) - це алгоритм, який дозволяє знаходити найкоротший шлях в неорієнтованому або орієнтованому графі. Цей алгоритм працює шляхом обходу вершин графа у "ширину", тобто спочатку він відвідує всі сусідні вершини від стартової вершини, потім переходить до їхніх сусідніх вершин і т.д. Для зберігання вершин, які ще не були оброблені, використовується черга.

Алгоритм BFS можна застосувати для вирішення різноманітних задач, таких як пошук найкоротшого шляху між двома точками, визначення кількості кроків до досягнення певної вершини, знаходження всіх вершин у графі, які можна досягти з певної вершини та інших.

Алгоритм пошуку в ширину зазвичай має часову складність O(V+E), де V - кількість вершин, а E - кількість ребер в графі.

двонаправлений:
Алгоритм BFS використовує чергу для зберігання вершин, які потрібно відвідати. Він працює наступним чином:

Почати з вихідної вершини і додати її до черги.
Позначити вихідну вершину як відвідану.
Доки черга не порожня, робити наступне:
Взяти з черги вершину.
Додати до черги всі невідвідані сусідні вершини.
Позначити взяту вершину як відвідану.
Якщо взята вершина є шуканою, то пошук завершено.
Якщо граф має n вершин та m ребер, то часова складність алгоритму BFS становить O(n + m), що робить його ефективним для пошуку великої кількості вершин та ребер.



const graph = {
  'a': ['b', 'c'],
  'b': ['a', 'f'],
  'c': ['a', 'd', 'e'],
  'd': ['c', 'f'],
  'e': ['c', 'f'],
  'f': ['b', 'd', 'e', 'g'],
  'g': ['f']
};

function breadthFirstSearch(graph, start, end) {
	const visitedFromStart = {}; // Об'єкт, що зберігає відвідані вершини з початкової точки
	const visitedFromEnd = {}; // Об'єкт, що зберігає відвідані вершини з кінцевої точки

	const queueFromStart = [start]; // Черга для зберігання вершин, які потрібно відвідати з початкової точки
	const queueFromEnd = [end]; // Черга для зберігання вершин, які потрібно відвідати з кінцевої точки

	visitedFromStart[start] = true; // Позначаємо початкову вершину як відвідану з початкової точки
	visitedFromEnd[end] = true; // Позначаємо кінцеву вершину як відвідану з кінцевої точки

	while (queueFromStart.length > 0 && queueFromEnd.length > 0) {
		const currentFromStart = queueFromStart.shift(); // Взяти з черги першу вершину з початкової точки

		const neighborsFromStart = graph[currentFromStart]; // Отримати список сусідів поточної вершини з початкової точки

		for (let i = 0; i < neighborsFromStart.length; i++) {
			const neighborFromStart = neighborsFromStart[i]; // Взяти одного сусіда з початкової точки

			if (!visitedFromStart[neighborFromStart]) {
				// Якщо сусід не був відвіданий з початкової точки
				visitedFromStart[neighborFromStart] = true; // Позначити сусіда як відвіданого з початкової точки

				if (visitedFromEnd[neighborFromStart]) {
					// Якщо з кінцевої точки був вже відвіданий цей сусід
					return true; // Знайдено шлях з початкової точки до кінцевої точки
				}

				queueFromStart.push(neighborFromStart); // Додати сусіда до черги для відвідування з початкової точки
			}
		}
		const currentFromEnd = queueFromEnd.shift(); // Взяти з черги першу вершину з кінцевої точки

		const neighborsFromEnd = graph[currentFromEnd]; // Отримати список сусідів поточної вершини з кінцевої точки

		for (let i = 0; i < neighborsFromEnd.length; i++) {
			const neighborFromEnd = neighborsFromEnd[i]; // Взяти одного сусіда з кінцевої точки

			if (!visitedFromEnd[neighborFromEnd]) {
				// Якщо сусід не був відвіданий з кінцевої точки
				visitedFromEnd[neighborFromEnd] = true; // Позначити сусіда як відвіданого з кінцевої точки

				if (visitedFromStart[neighborFromEnd]) {
					// Якщо з початкової точки був вже відвіданий цей сусід
					return true; // Знайдено шлях з початкової точки до кінцевої точки
				}

				queueFromEnd.push(neighborFromEnd); // Додати сусіда до черги для відвідування з кінцевої точки
			}
		}
	}

	return false; // Шлях не знайдено
}

console.log(breadthFirstSearch(graph, 'a', 'g'));


*/


//  однонаправленний граф

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function breadthFirstSearch(graph, start, end) {
	let queue = [];
	queue.push(start);
	while (queue.length > 0) {
		const current = queue.shift();
		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
	}
}

console.log(breadthFirstSearch(graph, 'a', 'g'));

/*

Цей код реалізує алгоритм пошуку в ширину в неорієнтованому графі. Граф представлений у вигляді об'єкта, де ключі - це вершини графа, а значення - це масиви суміжних вершин для кожної вершини.

Функція breadthFirstSearch отримує три аргументи: об'єкт, що представляє граф, початкову вершину start та вершину, яку потрібно знайти end.

У функції створюється черга queue, в яку спочатку додається початкова вершина start. Потім виконується цикл, доки черга не порожня.

На кожній ітерації з черги вилучається вершина current методом shift(). Перевіряється, чи існує така вершина в графі. Якщо ні, то для цієї вершини створюється пустий масив. Потім перевіряється, чи містить масив суміжних вершин графа для поточної вершини end. Якщо так, то повертається true, означаючи, що вершина end знайдена. Інакше, у чергу додаються всі суміжні вершини поточної вершини, використовуючи оператор spread для об'єднання масивів.

На останньому етапі функція повертає undefined, оскільки ніякого значення не вказано для ситуації, коли вершина end не знайдена.

У цьому коді функція breadthFirstSearch викликається з графом graph, початковою вершиною 'a' та шуканою вершиною 'g'. Результатом є значення true, оскільки вершина 'g' є суміжною з вершиною 'f', яка є суміжною з вершиною 'b', яка, у свою чергу, є суміжною з вершиною 'a'.

*/