<style svelterial name="Component">
  @for $i from 1 through 5 {
    .width-#{$i} {
      width: #{$i}0em;
    }
  }

  @for $j from 1 to 4 {
    .height-#{$j * 2 - 1} {
      height: #{$j * 2 - 1}0em;
    }
  }

  @each $color in $colors {
    .color-#{'' + $color} {
      color: $color;
    }
  }

  .bg-red {
    background-color: index($colors, 0);
  }
</style>
