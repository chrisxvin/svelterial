<script>
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome } from '@mdi/js';

  import Button from '@svelterialjs/core/Button.svelte';
</script>

<p>Raised Buttons</p>
<Button size="x-small">x-small</Button>
<Button size="small">small</Button>
<Button size="default">default</Button>
<Button size="large">large</Button>
<Button size="x-large">x-large</Button>

<p>FABs</p>
<Button variant="fab" size="x-small"><Icon path={mdiHome} /></Button>
<Button variant="fab" size="small"><Icon path={mdiHome} /></Button>
<Button variant="fab" size="default"><Icon path={mdiHome} /></Button>
<Button variant="fab" size="large"><Icon path={mdiHome} /></Button>
<Button variant="fab" size="x-large"><Icon path={mdiHome} /></Button>

<p>Icons</p>
<Button variant="icon" size="x-small"><Icon size="12px" path={mdiHome} /></Button>
<Button variant="icon" size="small"><Icon size="18px" path={mdiHome} /></Button>
<Button variant="icon" size="default"><Icon path={mdiHome} /></Button>
<Button variant="icon" size="large"><Icon path={mdiHome} /></Button>
<Button variant="icon" size="x-large"><Icon path={mdiHome} /></Button>
