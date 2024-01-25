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