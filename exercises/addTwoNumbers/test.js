const addTwoNumbers = require('./index');
const L = require('./LinkedList');
const List = L.LinkedList;
const Node = L.Node;

test('addTwoNumbers', () => {
  expect(typeof addTwoNumbers).toEqual('function');
});

test('addTwoNumbers detects addTwoNumbers linked lists', () => {
  const list1 = new List();
  const a = new Node(2);
  const b = new Node(4);
  const c = new Node(3);
  list1.head = a;
  a.next = b;
  b.next = c;

  const list2 = new List();
  const d = new Node(5);
  const e = new Node(6);
  const f = new Node(4);
  list2.head = d;
  d.next = e;
  e.next = f;

  const resultList = new List();
  const r1 = new Node(7);
  const r2 = new Node(0);
  const r3 = new Node(8);
  resultList.head = r1;
  r1.next = r2;
  r2.next = r3;
  expect(addTwoNumbers(list1, list2)).toEqual(resultList);
});
test('addTwoNumbers detects addTwoNumbers linked lists2', () => {
  const list1 = new List();
  const a = new Node(9);
  const b = new Node(9);
  const c = new Node(9);
  const d = new Node(9);
  const e = new Node(9);
  const f = new Node(9);
  const k = new Node(9);
  list1.head = a;
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = k;

  const list2 = new List();
  const g = new Node(9);
  const h = new Node(9);
  const i = new Node(9);
  const j = new Node(9);
  list2.head = g;
  g.next = h;
  h.next = i;
  i.next = j;

  const resultList = new List();
  const resultArr = [8, 9, 9, 9, 0, 0, 0, 1];
  while (resultArr.length > 0) {
    resultList.insertLast(resultArr.shift());
  }

  expect(addTwoNumbers(list1, list2)).toEqual(resultList);
});
