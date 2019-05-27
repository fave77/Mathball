# Priority Queue 
The ``` PriorityQueue()  ``` function returns an object upon which various priority queue based operations can be performed.

### Syntax  
> new M.PriorityQueue()  

### Arguments  
> None  
    
### Return  
> Object
    
### Examples
```js
const pQueue = new M.PriorityQueue();
console.log(pQueue);   // PriorityQueue  { queueArr: [] }
```
### Info:
Implemented using JavaScript `class`.
    
### Methods
- queue() - This method prints all the elements of the Priority queue in FIFO order.
- push() - This method adds an element to the Priority queue according to its priority.
- pop() - This method removes an element from the Priority queue.
- front() - This method returns the front element of the Priority queue.
- rear() - This method returns the last element of the Priority queue.
- empty() - This method returns true if the Priority queue is empty.
- size() - This method returns the size of the Priority queue.

------
#### push() function

##### Syntax
> pQueue.push(value)

##### Arguments
> Number

##### Return
> Boolean true

##### Examples  
- Valid:  
    ```js
    const pQueue = new M.PriorityQueue(); 
    pQueue.push(10);
    pQueue.push(20);
    ```  
- Invalid:  
    ```js
    /*
     * TypeError: Invalid argument received: <argument>
     * 'PriorityQueue.push()' only accept a number!
     */
    pQueue.push("70");
    pQueue.push([2,45]);
    pQueue.push("five");
    ```

##### Info:
Implemented using JavaScript built-in `push()` function.

------
#### pop() function

##### Syntax
> pQueue.pop()

##### Arguments
> None

##### Return
> Number

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20);
pQueue.push(30);
console.log(pQueue.pop())   // 10
```

##### Info
Implemented using JavaScript built-in `pop()` function.

------
#### front() function

##### Syntax
> pQueue.front()

##### Arguments
> None

##### Return
> Number

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20);
pQueue.push(30);
console.log(pQueue.front());   // 10
```

##### Info
Implemented using JavaScript `if()` condition.

------

#### rear() function

##### Syntax
> pQueue.rear()

##### Arguments
> None

##### Return
> Number

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20);
pQueue.push(30);
console.log(pQueue.rear());   // 30
```

##### Info
Implemented using JavaScript `if()` condition.

------

#### size() function
##### Syntax
> pQueue.size()

##### Arguments
> None

##### Return
> Number

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20);
pQueue.push(30);
console.log(pQueue.size());   // 3
```

##### Info
Implemented using JavaScript `length` property.

------

#### empty() function
##### Syntax
> pQueue.empty()

##### Arguments
> None

##### Return
> Boolean

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20);
console.log(pQueue.empty());   // False
```

##### Info
Implemented using JavaScript `length` property and `ternary` operator.

------

#### queue() function
##### Syntax
> pQueue.queue()

##### Arguments
> None

##### Return
> String

##### Examples
```js
const pQueue=new M.PriorityQueue();
pQueue.push(10);
pQueue.push(20)
pQueue.push(30)
console.log(pQueue.queue());   // 10 20 30
```

##### Info
Implemented using JavaScript built-in `join` function.

------
