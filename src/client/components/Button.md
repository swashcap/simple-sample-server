```jsx
<Button onClick={console.log} role="button">Button</Button>
```

With a `hollow` variant:

```jsx
<Button onClick={console.log} role="button" variant="hollow">Hollow Button</Button>
```

The `Button` defaults to `button` HTML element. Change the button's element with the `element` property:

```jsx
<Button
  element="a"
  href="#"
  onClick={(event) => {
    event.preventDefault()
    console.log(event)
  }}
  rel="link"
>
  Link Button
</Button>
```