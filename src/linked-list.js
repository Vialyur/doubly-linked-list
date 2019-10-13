const Node = require('./node');

class LinkedList {  
    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    append(data) {
        let node = new Node(data);

        if(this._length ===  0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;

        }

        this._length += 1;
  
        return this;
    }

    head() {
        return (!this._head) ? null : this._head.data;
    }

    tail() {
        return (!this._tail) ? null : this._tail.data;
    }

    _at(index) {
        let node = this._head;
        for(let i = index; i > 0; i--){
            node = node.next;
        }
        return node;
    }

    at(index) {
        return this._at(index).data;
    }

    insertAt(index, data) {
        
        let addElem = new Node(data);
        let nextElem = this._at(index);
        let prevElem = nextElem.prev;

        addElem.next = nextElem;
        addElem.prev = prevElem;

        prevElem.next = addElem;
        nextElem.prev = addElem;
        
        this._length += 1;

        return this;
    } 

    isEmpty() {
        return (!this._length);
    }

    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
        
        return this;
    }

    deleteAt(index) {
        let deleteElem = this._at(index);
        let prevElem = deleteElem.prev;
        let nextElem = deleteElem.next;

        prevElem.next = nextElem;
        nextElem.prev = prevElem;

        this._length -= 1;

        return this;
    }

    reverse() {
        let tmp = this._head;
        this._head = this._tail;
        this._tail = tmp;
        
        


        return this;
    }

    indexOf(data) {}
}

console.log(LinkedList.tail)

module.exports = LinkedList;
