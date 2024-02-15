## `new` keyword

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods and defined on the construcotr's prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound to the newly created object. If now explicit return value is spedified from the constructor. JavaScritp assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.