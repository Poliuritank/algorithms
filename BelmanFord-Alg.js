/*
Алгоритм Беллмана-Форда - це алгоритм пошуку найкоротшого шляху в графі з будь-якими вагами ребер, який може працювати з від'ємними вагами ребер і знаходить найкоротший шлях від однієї вершини графу до всіх інших вершин.

Принцип роботи алгоритму полягає в тому, що він пробігається по всіх ребрах графу V раз (де V - кількість вершин у графі) та оновлює відстані до кожної вершини, якщо можливо скоротити шлях від поточної вершини до іншої вершини.

Алгоритм Беллмана-Форда працює наступним чином:

Візьміть початкову вершину та встановіть для неї відстань рівною нулю. Для всіх інших вершин встановіть відстань рівною нескінченності.

Проходьте через всі ребра графу V раз та оновлюйте відстані до кожної вершини, якщо можливо скоротити шлях від поточної вершини до іншої вершини. Для кожного ребра виконайте наступні дії:

Перевірте, чи можна скоротити шлях від початкової вершини до вершини, з'єднаної цим ребром.
Якщо можна, оновіть відстань до цієї вершини.
Після того, як пройдете по всіх ребрах графу V раз, перевірте, чи є в графі цикл від'ємної ваги. Якщо є, то цей цикл може бути використаний для скорочення шляху до нескінченості, тому що відстань до будь-якої вершини в такому циклі може бути скорочена довільно багато разів.

Найкоротший шлях буде знайдений, коли всі ребра будуть пройдені V раз 
*/

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function bellmanFord(graph, start) {
  let distances = {};
  let parents = {};
  for (let node in graph) {
    distances[node] = Infinity;
    parents[node] = null;
  }

  distances[start] = 0;

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        let distance = graph[node][neighbor];
        if (distances[node] + distance < distances[neighbor]) {
          distances[neighbor] = distances[node] + distance;
          parents[neighbor] = node;
        }
      }
    }
  }

  // Check for negative cycles
  for (let node in graph) {
    for (let neighbor in graph[node]) {
      let distance = graph[node][neighbor];
      if (distances[node] + distance < distances[neighbor]) {
        throw new Error("Negative cycle detected");
      }
    }
  }

  return { distances, parents };
}

const { distances, parents } = bellmanFord(graph, "a");
console.log(distances); // { a: 0, b: 2, c: 1, d: 6, e: 3, f: 7, g: 8 }
console.log(parents); // { a: null, b: 'a', c: 'a', d: 'c', e: 'c', f: 'e', g: 'f' }

// Reconstruct shortest path
let shortestPath = ["g"];
let parent = parents["g"];
while (parent) {
  shortestPath.unshift(parent);
  parent = parents[parent];
}
console.log(shortestPath); // [ 'a', 'c', 'e', 'f', 'g' ]


/*

У цьому коді реалізовано алгоритм Беллмана-Форда для пошуку найкоротшого шляху від вихідного вузла до всіх інших вузлів у орієнтованому зваженому графі. Вхідний граф представлений у вигляді об’єкта з ключами як вузлами та значеннями як об’єктами, що містять сусідів вузла та їхні відповідні ваги ребер.

Алгоритм Беллмана-Форда працює, розслабляючи кожне ребро на графіку неодноразово, розслаблення означає оновлення відстані від вузла джерела до вузла призначення, якщо знайдено коротший шлях. Алгоритм виконується для n-1 ітерацій, де n – це кількість вузлів у графі, щоб гарантувати, що всі можливі найкоротші шляхи обчислено. Після цього він перевіряє негативні цикли на графіку, тобто цикли, загальна вага яких є негативною. Якщо знайдено будь-який негативний цикл, алгоритм видає помилку, оскільки найкоротший шлях не може бути обчислений у такому графі.

Функція bellmanFord приймає два аргументи: graph, який є вхідним графіком, і start, який є початковим вузлом. Він повертає об’єкт із двома властивостями: відстані та батьки. distances — це об’єкт, що містить найкоротшу відстань від початкового вузла до всіх інших вузлів у графі, а батьків — об’єкт, що містить батьківський вузол кожного вузла в дереві найкоротшого шляху.

Обчислений найкоротший шлях від початкового вузла до кінцевого вузла реконструюється за допомогою батьківського об’єкта. Починаючи з кінцевого вузла, батьківський вузол неодноразово додається до початку масиву, поки не буде досягнуто початковий вузол. Отриманий масив є найкоротшим шляхом від початкового вузла до вузла призначення.

Вихід цього коду для заданого вхідного графіка буде таким:

відстані: об’єкт { a: 0, b: 2, c: 1, d: 6, e: 3, f: 7, g: 8 }
батьки: об’єкт { a: null, b: 'a', c: 'a', d: 'c', e: 'c', f: 'e', g: 'f' }
shortestPath: масив ['a', 'c', 'e', 'f', 'g' ], який представляє найкоротший шлях від вузла 'a' до вузла 'g'.

*/