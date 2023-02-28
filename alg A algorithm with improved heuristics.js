/*

Алгоритм A* поєднує два типи інформації для ефективного пошуку найкоротшого шляху: фактичну вартість пересування від початкового вузла до певного вузла та оцінену вартість найдешевшого шляху від цього вузла до мети. Остання називається евристичною функцією, і вона направляє пошук до мети, враховуючи відстань, що залишилася, яку потрібно подолати.

Якість евристичної функції може значно вплинути на продуктивність і точність алгоритму A*. Загалом, краща евристична функція призведе до швидшої конвергенції та меншої кількості відвідуваних вузлів. «Алгоритм А* з покращеними евристиками» припускає, що є деякі вдосконалення евристичної функції, яка використовується в алгоритмі A*.

Деякі загальні вдосконалення евристичної функції, що використовується в алгоритмі A*, включають використання орієнтирів, попереднє обчислення відстаней і динамічні коригування. Ці вдосконалення можуть значно підвищити ефективність пошуку, зменшивши простір пошуку та дозволивши алгоритму зосередитися на найбільш перспективних шляхах.

(

Покращена евристика стосується вдосконалення евристичної функції, яка використовується в алгоритмі пошуку. Загалом, евристична функція забезпечує оцінку відстані від поточного стану до цільового стану, не обов’язково знаючи точну відстань. В алгоритмах пошуку, таких як A*, евристична функція використовується для спрямування пошуку до мети шляхом оцінки вартості переходу з одного стану в інший.

Покращена евристика може приймати різні форми залежно від конкретного алгоритму пошуку та проблеми, що вирішується. Деякі приклади вдосконаленої евристики включають:

Кращі оцінки: підвищуючи точність евристичної функції, алгоритм пошуку може уникнути дослідження безперспективних шляхів і зосередитися на найбільш ймовірних. Наприклад, в алгоритмах пошуку шляху краща евристична функція може забезпечити більш точні оцінки відстані між двома точками.

Евристика на основі навчання: у деяких випадках евристичну функцію можна вивчити на основі даних або досвіду. Наприклад, в ігрових алгоритмах зазвичай використовують методи машинного навчання для вивчення евристичної функції, яка може оцінити силу певної позиції.

Предметно-спеціальна евристика: у деяких задачах пошуку можна використовувати предметно-спеціальні знання для покращення евристичної функції. Наприклад, у задачі комівояжера, де метою є знайти найкоротший маршрут, який відвідує набір міст, евристична функція, яка розглядає найближче невідвідане місто, може бути ефективною.

Загалом, удосконалена евристика може значно підвищити продуктивність і точність алгоритмів пошуку шляхом зменшення простору пошуку та зосередження на найбільш перспективних шляхах.

)

*/

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function astar(graph, start, goal) {
  let frontier = new PriorityQueue();
  frontier.enqueue(start, 0);
  
  let cameFrom = {};
  cameFrom[start] = null;
  
  let costSoFar = {};
  costSoFar[start] = 0;
  
  while (!frontier.isEmpty()) {
    let current = frontier.dequeue();
    
    if (current === goal) {
      break;
    }
    
    for (let neighbor in graph[current]) {
      let newCost = costSoFar[current] + graph[current][neighbor];
      if (!(neighbor in costSoFar) || newCost < costSoFar[neighbor]) {
        costSoFar[neighbor] = newCost;
        let priority = newCost + heuristic(goal, neighbor);
        frontier.enqueue(neighbor, priority);
        cameFrom[neighbor] = current;
      }
    }
  }
  
  let path = [goal];
  let current = goal;
  while (current !== start) {
    current = cameFrom[current];
    path.unshift(current);
  }
  
  return path;
}

function heuristic(a, b) {
  // Manhattan distance heuristic
  let ax = a.charCodeAt(0) - 97;
  let ay = Math.floor(ax / 3);
  let bx = b.charCodeAt(0) - 97;
  let by = Math.floor(bx / 3);
  return Math.abs(ax - bx) + Math.abs(ay - by);
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }
  
  enqueue(item, priority) {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }
  
  dequeue() {
    return this.items.shift().item;
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const start = 'a';
const goal = 'g';
const shortestPath = astar(graph, start, goal);
console.log(shortestPath); // Output: [ 'a', 'c', 'e', 'f', 'g' ]



/*

Цей код реалізує алгоритм A* з евристичною функцією для пошуку найкоротшого шляху між початковим вузлом і цільовим вузлом у даному графі.

Граф представлено за допомогою об’єкта, де кожен ключ представляє вузол, а його значенням є інший об’єкт, що містить суміжні вузли та їхні відповідні ваги ребер.

Функція astar приймає три аргументи: графік, початковий вузол і цільовий вузол. Він ініціалізує чергу пріоритетів для зберігання вузлів, які потрібно дослідити, і два об’єкти для відстеження відвіданих вузлів і вартості досягнення кожного вузла.

Потім алгоритм ітеративно досліджує вузли з найнижчою вартістю (пріоритетом), поки не досягне цільового вузла або поки не залишиться вузлів для дослідження. Для кожного вузла він розглядає його сусідів і обчислює нову вартість для досягнення кожного сусіда через поточний вузол. Якщо нова вартість менша за попередньо зафіксовану вартість досягнення сусіда, алгоритм оновлює вартість, пріоритет і об’єкт cameFrom, щоб відстежувати оптимальний шлях на даний момент.

Евристична функція, яка використовується в цій реалізації, — це манхеттенська відстань між поточним вузлом і цільовим вузлом, обчислена за допомогою кодів ASCII символів, що представляють вузли.

Клас PriorityQueue використовується для підтримки відсортованого списку вузлів на основі їхніх пріоритетів (тобто оціночної загальної вартості досягнення мети через поточний вузол).

Нарешті, функція astar повертає масив, що містить оптимальний шлях від початкового вузла до цільового вузла, слідуючи за об’єктом cameFrom від цільового вузла назад до початкового вузла.

*/