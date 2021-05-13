<script>
  import Divider from '@svelterialjs/core/Divider.svelte';
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome } from '@mdi/js';
  import Button from '@svelterialjs/core/Button.svelte';
</script>

<h6>Colored Buttons</h6>
<p>You can use tools such as WindiCSS to utilise color classes.</p>
<Button class="s-primary">Primary</Button>
<Button class="s-secondary" variant="fab"><Icon path={mdiHome} /></Button>

<Divider />
<br />
<h6>Outlined Buttons</h6>
<Button outlined>default</Button>
<Button outlined variant="fab"><Icon path={mdiHome} /></Button>

<Divider />
<br />
<h6>Text Buttons</h6>
<Button text>Text</Button>
<Button text variant="fab"><Icon path={mdiHome} /></Button>

<Divider />
<br />
<h6>Rounded Buttons</h6>
<Button rounded>Rounded</Button>

<Divider />
<br />
<h6>Block Buttons</h6>
<Button block>Block Button</Button>

<Divider />
<br />
<h6>Flat Buttons</h6>
<Button flat>Flat Button</Button>

<Divider />
<br />
<h6>Dim Buttons</h6>
<Button dim>Dim Button</Button>

<Divider />
<br />
<h6>Link Buttons</h6>
<Button href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
  You can make any button into a link
</Button>

<Divider />
<br />
<h6>Custom Ripple Effects</h6>
<Button ripple={{ color: 'red' }}>Red Ripple</Button>
