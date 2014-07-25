# Show Password Toggle

jQuery plugin for adding a show/hide checkbox toggle to display/hide password fields.

# Usage

```html
<p>
  <label for="pwd">Password:</label>
  <input type="password" name="pwd" id="pwd">
</p>
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.showPasswordToggle.min.js"></script>
<script>$('#pwd').showPasswordToggle();</script>
```

# Options

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `checkboxCass` | string | toggle-password-checkbox | Class(es) applied to the toggling checkbox |
| `label` | string | Show password | Label text for the checkbox |
| `labelClass` | string | toggle-password-label | Class(es) applied to the label |
| `wrapperClass` | string | toggle-password-wrapper | Class(es) applied to the wrapper tag (if used) |
| `wrapperTag` | string or bool | false | If specified, use this tag to wrap the label and checkbox (e.g., span or div) |

# License

(The MIT License)

Copyright (c) 2014 Sunny Walker swalker@hawaii.edu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
