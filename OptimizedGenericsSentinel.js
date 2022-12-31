var Colleaction;
(function (Colleaction) {
    var Node = /** @class */ (function () {
        function Node(values) {
            this.prev = null;
            this.next = null;
            this.value = values;
        }
        return Node;
    }());
    var List = /** @class */ (function () {
        function List() {
            this.head = new Node();
            this.tail = new Node();
            this.count = 0;
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        List.prototype.addNode = function (node, value) {
            var newNode = new Node(value);
            newNode.prev = node;
            newNode.next = node.next;
            newNode.prev.next = newNode.next.prev = newNode;
            this.count++;
            return true;
        };
        List.prototype.serachNode = function (value) {
            for (var serachNode = this.head.next; serachNode != this.tail; serachNode = serachNode.next) {
                if (serachNode.value == value)
                    return serachNode;
            }
            return false;
        };
        List.prototype.removeNode = function (node) {
            node.prev.next = node.next; // Find node next node we assign it to find node prev's next
            node.next.prev = node.prev;
            this.count--;
            return true;
        };
        List.prototype.addToFront = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) { return _this.addNode(_this.head, value); });
        };
        List.prototype.addToBack = function () {
            var _this = this;
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            values.forEach(function (value) { return _this.addNode(_this.tail.prev, value); });
        };
        List.prototype.insertAfter = function (serachValue) {
            var _this = this;
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            var node = this.serachNode(serachValue);
            if (!node)
                return false;
            values.forEach(function (insertValue) { return _this.addNode(node.next, insertValue); });
            return true;
        };
        List.prototype.insertBefore = function (serachValue) {
            var _this = this;
            var values = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                values[_i - 1] = arguments[_i];
            }
            var node = this.serachNode(serachValue);
            if (!node)
                return false;
            values.forEach(function (insertValue) { return _this.addNode(node.prev, insertValue); });
        };
        List.prototype.removeFirst = function () {
            this.removeNode(this.head.next);
        };
        List.prototype.removeLast = function () {
            this.removeNode(this.tail.prev);
        };
        List.prototype.removeNextNode = function (value) {
            var node = this.serachNode(value);
            if (!node)
                return false;
            return node.next != this.tail ? this.removeNode(node.next) : false;
        };
        List.prototype.removePrevNode = function (value) {
            var node = this.serachNode(value);
            if (!node)
                return false;
            return node.prev != this.head ? this.removeNode(node.prev) : false;
        };
        List.prototype.removeValues = function () {
            var values = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                values[_i] = arguments[_i];
            }
            var removed = [];
            for (var current = this.head.next; current != this.tail; current = current.next) {
                if (values)
                    return false;
                if (values.includes(current === null || current === void 0 ? void 0 : current.value)) {
                    removed.push(current.value);
                    current = current.prev;
                    this.removeNode(current.next);
                }
            }
            return removed;
        };
        List.prototype.printForward = function () {
            for (var current = this.head.next; current != this.tail; current = current.next) {
                console.log(current === null || current === void 0 ? void 0 : current.value);
            }
        };
        return List;
    }()); //End List
    Colleaction.List = List;
    var list = new Colleaction.List();
    list.addToFront(5, 4, 3, 2, 1);
    list.addToBack(500, 400, 300, 200, 100);
    list.insertAfter(4, 700, 800);
    list.insertBefore(5, 333, 55);
    list.removeFirst();
    list.removeLast();
    var result = list.removeValues(3, 2, 300, 100);
    console.log({ result: result });
    list.printForward();
})(Colleaction || (Colleaction = {})); //End collection
