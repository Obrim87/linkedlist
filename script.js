let LinkedList = () => {
  let length = 0;
  let head = null;

  // creates a new Node
  const Node = (value) => {
    let nextNode = null;
    return {value, nextNode};
  };

  // adds a node to the end of the list
  const append = (value) => {
    let newNode = Node(value);
    let currentNode;
    if (!head) {
      head = newNode;
    } else {
      currentNode = head;
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
    length++;
  }

  // adds a node to the start of the list
  const prepend = (value) => {
    let newNode = Node(value);
    if (!head) {
      head = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
    length++;
  }

  // returns the length of the list
  const size = () => {
    return length;
  }

  // returns the head node
  const headNode = () => {
    return head;
  }

  // returns the tail node
  const tailNode = () => {
    let currentNode = head;
    if (!currentNode) {
      return currentNode;
    } else {
      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  // returns the node at the given index
  const at = (index) => {
    let currentNode = head;
    let count = 0;
    while (count !== index) {
      if (!currentNode.nextNode) {
        return 'Node does not exist';
      } else {
        currentNode = currentNode.nextNode;
        count++;
      }
    }
    return currentNode;
  }

  // removes the tailnode from the list
  const pop = () => {
    if (!head) {
      return;
    } else {
      let currentNode = head;
      let previousNode;
      while (currentNode.nextNode) {
        previousNode = currentNode
        currentNode = currentNode.nextNode;
      }
      previousNode.nextNode = null;
      return head;
    }
  }

  // returns true if the given value is contained in the list
  const contains = (value) => {
    let currentNode = head;
    while (currentNode.value !== value) {
      currentNode = currentNode.nextNode;
      if (!currentNode.nextNode && currentNode.value != value) {
        return false;
      }
    }
    return true;
  }

  // returns the index of the given value
  const find = (value) => {
    let currentNode = head;
    let count = 0;
    while (currentNode.value !== value) {
      currentNode = currentNode.nextNode;
      count++;
      if (!currentNode.nextNode && currentNode.value != value) {
        return null;
      }
    }
    return `That node is in position ${count}`;
  }

  // returns all list values in a string
  const toString = () => {
    if (head) {
      if (head.nextNode) {
        let str = `( ${head.value} ) => `;
        let currentNode = head;
        while (currentNode.nextNode) {
          currentNode = currentNode.nextNode;
          let i = `( ${currentNode.value} ) => `;
          str += i;
        }
        str += 'null';
        return str;
      }   
    } else {
      return 'List is empty.';
    } 
  }

  // inserts a new node with the provided value at the given index
  const insertAt = (value, index) => {
    let newNode = Node(value);
    let currentNode = head;
    let previousNode;
    let count = 0;
    if (index === 0) {
      newNode.nextNode = head;
      head = newNode;
      length++;
    } else {
      while (count !== index) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        count++;
      }
      previousNode.nextNode = newNode;
      newNode.nextNode = currentNode;
      length++;
    }
  }

  // removes the node at the given index
  const removeAt = (index) => {
    let currentNode = head;
    let previousNode;
    let count = 0;
    if (index === 0) {
      head = currentNode.nextNode;
      length--;
    } else {
      while (count != index) {
        previousNode = currentNode;
        currentNode = currentNode.nextNode;
        count++;
      }
      previousNode.nextNode = currentNode.nextNode;
      length--;
    }
  }

  return {
          append,
          prepend,
          size,
          headNode,
          tailNode,
          at,
          pop,
          contains,
          find,
          toString,
          insertAt,
          removeAt
        };
};

let list = LinkedList();

list.append(69);
list.append(3387);
list.append(1234);
list.append(5656);
list.append('hello');
console.log(list.size());
console.log(list.headNode());
console.log(list.tailNode());
console.log(list.at(3));
console.log(list.contains(69));
console.log(list.find('hello'));
console.log(list.toString());
//list.pop();
list.insertAt('insertAt', 5);
list.removeAt(0);
console.log(list.toString());
console.log(list.size());