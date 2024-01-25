## Event Capturing

Event propagation refers to the process of how events in the Document Object Model (DOM) are transmitted or propagated from the target element that triggered the event to other elements in the document. There are two main phases of event propagation: event capturing and event bubbling.

1. **Event Capturing (or Trickling) Phase:**
   - The event starts from the root of the document and goes down to the target element.
   - It is less commonly used but can be enabled by passing `true` as the third parameter to the `addEventListener` method.
   - Event handlers attached during the capturing phase are executed before the actual target is reached.

2. **Target Phase:**
   - The event reaches the target element, and its associated event handlers are executed.

3. **Event Bubbling Phase:**
   - After the target phase, the event bubbles up from the target element to the root of the document.
   - Event handlers attached during the bubbling phase are executed as the event travels back up the DOM hierarchy.
   - Bubbling is the default behavior if the third parameter of `addEventListener` is not set or set to `false`.

Here's a quick summary of the flow:

```
Capturing Phase (top-down)   |    Target Phase    |    Bubbling Phase (bottom-up)
-----------------------------|---------------------|-------------------------------
                             |  Target element     | 
 Root  -->  Ancestors         |       (Event        |      Ancestors  -->  Root
        <--  (Event           |        handlers     |      (Event handlers
                             |        execute)      |       execute)
```

### Example:

```html
<div id="parent">
  <button id="child">Click me</button>
</div>

<script>
  document.getElementById('parent').addEventListener('click', function () {
    console.log('Parent Clicked (Bubbling)');
  });

  document.getElementById('child').addEventListener('click', function () {
    console.log('Child Clicked');
  });
</script>
```

If you click the button in this example, you'll see "Child Clicked" logged first (target phase), followed by "Parent Clicked (Bubbling)" (bubbling phase). The event propagates from the button to its parent div during the bubbling phase.


## Event Bubbling adn Event Capturing

Event bubbling and event capturing are two phases of the event propagation process in the Document Object Model (DOM) in JavaScript. These phases describe the order in which events are handled as they propagate through the DOM hierarchy.

### Event Bubbling:
- **Bubbling is the default behavior.**
- When an event occurs on a particular element, it first triggers the event on that element, then it bubbles up to its ancestors, triggering the same event on each ancestor element in the hierarchy.
- The event starts from the target element and bubbles up to the root of the document (or a designated capturing phase boundary, if defined).
- The order of execution is from the target element to its ancestors.

  Example:
  ```html
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', function () {
      console.log('Parent Clicked');
    });

    document.getElementById('child').addEventListener('click', function () {
      console.log('Child Clicked');
    });
  </script>
  ```
  If you click the button, you'll see both "Child Clicked" and "Parent Clicked" logged to the console. The event bubbles from the button to its parent div.

### Event Capturing (Trickier to Use):
- **Capturing is the reverse order of bubbling.**
- The event starts from the root of the document and trickles down to the target element.
- Event capturing is less commonly used than bubbling but can be useful in specific scenarios.
- You can enable capturing by passing `true` as the third parameter to `addEventListener`.

  Example:
  ```html
  <div id="parent">
    <button id="child">Click me</button>
  </div>

  <script>
    document.getElementById('parent').addEventListener('click', function () {
      console.log('Parent Clicked (Capturing)');
    }, true);

    document.getElementById('child').addEventListener('click', function () {
      console.log('Child Clicked');
    });
  </script>
  ```
  If you click the button, you'll see "Parent Clicked (Capturing)" logged before "Child Clicked." The event is captured during the downward phase.

In practice, event bubbling is more commonly used and understood. You often attach event handlers to the target element and let the event bubble up through the DOM hierarchy. Event capturing is typically needed in more complex scenarios where you want to capture events before they reach the target element during the downward phase.


## stopPropagation()

In JavaScript, the `stopPropagation` method is used to prevent the further propagation of an event through the DOM hierarchy during event handling. It is often employed within event handlers to stop the event from reaching either the capturing phase or the bubbling phase, depending on where it is called.

Here's how you can use `stopPropagation`:

```javascript
document.getElementById('parent').addEventListener('click', function (event) {
  console.log('Parent Clicked');
  // Stop the propagation of the event
  event.stopPropagation();
});

document.getElementById('child').addEventListener('click', function (event) {
  console.log('Child Clicked');
  // Stop the propagation of the event
  event.stopPropagation();
});
```

In this example, if you click the child element, the event will be handled by both the child and the parent event handlers. However, if you include `event.stopPropagation()` in either the child or the parent event handler, it will prevent the event from propagating further, and only the handler that called `stopPropagation` will be executed.

Keep in mind that while using `stopPropagation` can be useful in certain scenarios, it should be used judiciously, as it may make your application more difficult to understand and maintain. In some cases, it might be more appropriate to use event delegation or other techniques to achieve the desired behavior.


