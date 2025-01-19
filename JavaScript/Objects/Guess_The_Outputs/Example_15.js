var a = 500;
global.b = 25;
function getParam() {
  console.log(this.a);
  console.log((global.b = 25));
}

getParam();
/*
Global context in this: In JavaScript, the value of this depends on how a function is called. When getParam() is called as a standalone function, this refers to the global object:

In a browser environment, the global object is window.
In a Node.js environment, the global object is global.
Variable a in the global scope:

The var a = 500; declaration creates a global variable named a that becomes a property of the global object in browser environments (i.e., window.a would equal 500).
However, in strict mode or Node.js, var variables do not become properties of the global object.
Behavior in different environments:

If this code runs in a Node.js environment, var a does not attach a to the global object. Thus, global.a is undefined, and the output is undefined.
If this code runs in a browser, and strict mode is disabled, var a attaches a to the window object. Then this.a would log 500. However, strict mode is often enabled by default in modern environments, which prevents this behavior.
Strict Mode:

Even in browsers, if the code is running in strict mode, this in getParam() called as a standalone function is undefined, resulting in an error if you try to access this.a. (No error is shown here, so strict mode is likely not enabled.)
*/
