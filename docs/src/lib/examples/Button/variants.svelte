<script>
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome } from '@mdi/js';

  import Button from '@svelterialjs/core/Button.svelte';
</script>

<Button>Raised</Button>
<Button variant="text">Text</Button>
<Button variant="fab">
  <Icon path={mdiHome} />
</Button>
<Button variant="icon">
  <Icon path={mdiHome} />
</Button>
