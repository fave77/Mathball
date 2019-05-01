# Stack
The `M.Stack()` function returns an object upon which various stack-based operations can be performed.

### Syntax
> new M.Stack()

### Arguments
> None

### Return
> Object

### Examples
```js
const s = new M.Stack();
console.log(s);   // Stack { stack: [] }
```

### Info
> Implemented using JavaScript's built-in `class`

### Methods
- **push** - This method adds an element at the top of the stack. 
- **pop** - This method returns the topmost element of stack and removes it. Returns `underflow` when called on an empty stack. 
- **isEmpty** - Returns true if the stack is empty. 
- **head** - Returns the topmost element of the stack. If stack is empty returns `Empty Stack`.
- **size** - Returns the length of the stack.
- **copy** - Returns a copy passed stack object.
- **display** - Prints all the elements of the stack in LIFO order.

------

###### Syntax
> s.push(value)

###### Arguments
> Number

###### Return
> None

###### Examples
- Valid:
```js
const s = new M.Stack();
s.push(10);
s.push(20);
s.push(30);
```
- Invalid:
```js
/*
 * TypeError: Invalid argument received: <argument>
 * 'Stack.push()' only accept a number!
 */
	s.push("40");
	s.push("ten");
	s.push([10,20]);
```

###### Info
Implemented using JavaScript's built-in `push` function.

------

###### Syntax
> s.pop()

###### Arguments
> None

###### Return
> Number

###### Examples
```js
const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop())   // 30

const s=new M.Stack();
s.push(10);
console.log(s.pop())   // 10
```

###### Info
Implemented using JavaScript's built-in `pop` function.

------

###### Syntax
> s.isEmpty()

###### Arguments
> None

###### Return
> Boolean

###### Examples
```js
const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.isEmpty());   // false

const s1=new M.Stack();
s1.push(10);
s1.pop();
console.log(s1.isEmpty());   // true
```

###### Info
Implemented using JavaScript's built-in `size` function.

------

###### Syntax
> s.head()

###### Arguments
> None

###### Return
> Number

###### Examples
```js
const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.head());   // 30

const s1=new M.Stack();
s1.push(10);
s1.pop()
console.log(s1.head());   // Empty Stack

const s2=new M.Stack();
console.log(s2.head());   // Empty Stack
```

###### Info
Implemented using JavaScript's built-in `size` function.

------

###### Syntax
> s.size()

###### Arguments
> None

###### Return
> Number

###### Examples
```js
const s=new M.Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.size());   // 3

const s1=new M.Stack();
console.log(s1.size());   // 0
```

###### Info
Implemented using JavaScript's built-in `size` function.

------

###### Syntax
> s.copy()

###### Arguments
> None

###### Return
> Object

###### Examples
```js
const s1=new M.Stack();
s1.push(10);
s1.push(20);
const s=s1.copy();
console.log(s);   // Stack { stack: [ 10, 20 ] }
console.log(s.size());   // 2
```

###### Info
Implemented using JavaScript's built-in `size` and `size` function.

------

###### Syntax
> s.display()

###### Arguments
> None

###### Return
> String

###### Examples
```js
const s=new M.Stack();
s.push(10);
s.push(20)
s.push(30)
console.log(s.display());   // 30 20 10
```

###### Info
Implemented using JavaScript's built-in `reverse` and `join` function.

------
