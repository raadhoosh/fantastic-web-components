#### Props in default theme
```html
 button: {
        margin: '5px 0px',
        padding: '.375rem .75rem',
        radius: '.85rem',
        fontsize: '1rem',
        color: '#fff',
        border: '5px',
        shadow: '0 0 1rem 0.2rem #color',
        transition: `color .15s ease-in-out,
        background-color.15s ease-in-out,
        border-color .15s ease-in-out,
        box-shadow .25s ease-in-out`
    },
```

### Example:
#### Example Color
```js
<Button primary>Push primary</Button>
<Button secondary>Push secondary</Button>
<Button danger>Push danger</Button>
<Button info>Push info</Button>
<Button success>Push success</Button>
<Button warning>Push warning</Button>
<Button color="#000" light>Push light</Button>
<Button dark>Push dark</Button>
```
#### Example Shadow
```js
<Button noShadow primary>Push primary</Button>
<Button noShadow secondary>Push secondary</Button>
<Button noShadow danger>Push danger</Button>
<Button noShadow info>Push info</Button>
<Button noShadow success>Push success</Button>
<Button noShadow warning>Push warning</Button>
<Button noShadow color="#000" light>Push light</Button>
<Button noShadow dark>Push dark</Button>
```
```js
<br/>
<Button size="lg" warning 
onClick={
    ()=>{
        console.log('clicked me');
    }
}
>click me</Button>
<br/>
```

#### Example Size
```js
<Button size="sm" primary>Push sm</Button>
<Button size="md" primary>Push md</Button>
<Button size="lg" primary>Push lg</Button>

```
