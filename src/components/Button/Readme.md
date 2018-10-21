React component example:

```js
<Button size="large">Push Me</Button>
```

You can add a custom props to an example wrapper:

```js { "props": { "danger": "true" } }
<Button danger>I’m danger!<Label primary badge>1</Label></Button>

```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button warning noShadow={true}>noShadow</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import {Button} from 'fantastic-web-components';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button warning noShadow={false}>noShadow</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.