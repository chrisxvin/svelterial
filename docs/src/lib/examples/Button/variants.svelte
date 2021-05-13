<script>
  import Icon from '@svelterialjs/core/Icon.svelte';
  import { mdiHome } from '@mdi/js';

  import Button from '@svelterialjs/core/Button.svelte';
</script>

<div>
  <Button>Raised</Button>
  <Button variant="fab">
    <Icon path={mdiHome} />
  </Button>
  <Button variant="icon">
    <Icon path={mdiHome} />
  </Button>
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
