# jQuery-crash-course

Traversy Media jQuery Crash Course - https://youtu.be/3nrLc_JOF7k

***

## jQuery

- small, fast, and feature-rich JavaScript library
- makes things like DOM manipulation, event handling, and AJAX **MUCH** easier
- **MUCH** less code

place jQuery and JS inside this to wait for page to load (not required)

```JavaScript
    $(document).ready(() => {
      // event listeners and things
    });
```

## Selectors

```JavaScript
$('selector');
```

selectors follow same rules/standards as css selectors

also `$(document)` and `$(this)`

## Events

Attach event handlers with `.event(func)`

```JavaScript
    $('#btn1').click(function () {
      console.log('Button 1 Clicked!');
    });
    // or
    $('#btn1').click(() => {
      console.log('Button 1 Clicked!');
    });

```

Or use `.on('event', func)`

```JavaScript
    $('#btn1').on('click', function () {
      console.log('Button 1 Clicked!');
    });
    // or
    $('#btn1').on('click', () => {
      console.log('Button 1 Clicked!');
    });
```

**Warning:** Caution when using arrow functions because they will cause problems with the `$(this)` selector!

Can pass in an event parameter (e)

``` JavaScript
    $('#btn1').click(e => {
      console.log(e);
    });
    $('#btn1').click(function (e) {
      console.log(e);
    });
```

Mostly the same events

- click
- dblclick
- mousedown
- mouseup
- mousemove
- focus
- blur
- keyup
- keydown
- mouseenter
- mouseleave

`hover` event is not an actual event (combines mouseenter and mouseleave)

## DOM

Basic (most support get/set)

- .html()
- .text()
- .val()
- .css()
  - get - 'propertyName'
  - set - 'propertyName', 'value'
  - object

Attributes

- .attr()
  - get - 'attrName'
  - set - 'attrName', 'value
- .removeAttr()

Classes

- .addClass()
- .removeClass()
- .toggleClass()

DOM

- .append()
- .prepend()
- .appendTo()
- .prependTo()
- .before()
- .after()

Other

- .wrap()
- .wrapAll()
- .empty()
  - remove child nodes
- .detach()
  - remove from DOM

## Effects

Fade

- .fadeOut()
- .fadeIn()
- .fadeToggle()

Slide

- .slideUp()
- .slideDown()
- .slideToggle()

Fade/slide/other supports parameters:

- () empty
- ('fast') string
- (3000) milliseconds
- (timing, func) callback function

Animate takes in an object of css property/value pairs as a parameter

- .stop()
- .animate({
  property: value
})

## Ajax

Load

```JavaScript
$('selector').load('url', function (responseTxt, statusTxt, xhr) {
  if (statusTxt == 'success') {
    // do things
  } else if (statusTxt == 'error') {
    // do error things
  }
});
```

Get

```JavaScript
$.get('url', function (data) {
  // do data things
});
```

Get (JSON)

```JavaScript
$.getJSON('url', function (data) {
  // do json data things
});
```

Post

```JavaScript
$.post(url, { key: value })
  .done(function (response) {
    console.log(response);
  });
```

Ajax (most flexible)

```JavaScript
$.ajax({
  method: 'GET',
  url: '',
  dataType: '',
  }).done(function (data) {
    // do data things
  });
});
```

## Other

`$.each(arr/obj, func(index, value))`

basic iterator for arrays/objects

`$.map(arr/obj, func(value, index)`

translate items from arr/obj into new array

`.toArray()`

returns HTMLElement array