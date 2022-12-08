const L = require('./index');
const Node = L.Node;
const addTwoNumbers = L.addTwoNumbers;

test('addTwoNumbers should be function', () => {
  expect(typeof addTwoNumbers).toEqual('function');
});

//write me some test for addTwoNumbers
test('addTwoNumbers', () => {
  const list1 = new Node(2, new Node(4, new Node(3)));
  const list2 = new Node(5, new Node(6, new Node(4)));
  const result = new Node(7, new Node(0, new Node(8)));
  expect(addTwoNumbers(list1, list2)).toEqual(result);
});
test('addTwoNumbers2', () => {
  const list1 = new Node(5);
  const list2 = new Node(5);
  const result = new Node(0, new Node(1));
  expect(addTwoNumbers(list1, list2)).toEqual(result);
});
test('addTwoNumbers3', () => {
  const list1 = new Node(
    9,
    new Node(9, new Node(9, new Node(9, new Node(9, new Node(9, new Node(9))))))
  );
  const list2 = new Node(9, new Node(9, new Node(9, new Node(9))));
  const result = new Node(
    8,
    new Node(
      9,
      new Node(
        9,
        new Node(9, new Node(0, new Node(0, new Node(0, new Node(1)))))
      )
    )
  );
  expect(addTwoNumbers(list1, list2)).toEqual(result);
});
