<style svelterial name="Component">
  @mixin heading-text {
    color: $color;
    font-size: 4em;
  }

  h1,
  h2,
  h3 {
    @include heading-text;
  }
</style>
