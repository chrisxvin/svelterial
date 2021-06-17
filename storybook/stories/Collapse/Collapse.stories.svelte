<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { CollapseContainer, Collapse } from '@svelterialjs/collapse';
  import metadata from '../metadata';
</script>

<Meta
  title="Components/Collapse"
  parameters={{ layout: 'padded' }}
  argTypes={metadata('collapse/CollapseContainer')} />

<Story id="a" name="Collapse" let:args>
  <CollapseContainer {...args}>
    <Collapse>
      <span slot="header">Item 1</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde minus, nihil consequatur
      sed adipisci rem iusto sapiente amet vitae earum veritatis at excepturi esse ipsa eveniet
      perspiciatis distinctio facilis aperiam?
    </Collapse>
    <Collapse>
      <span slot="header">Item 2</span>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, rerum adipisci minus fuga
      iste ducimus laborum explicabo eveniet, sed quibusdam nisi! Suscipit, expedita blanditiis.
      Porro?
    </Collapse>
    <Collapse>
      <span slot="header">Item 3</span>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, placeat laudantium consequatur
      doloremque sed culpa in repellendus. Quos doloribus dolorem facilis temporibus consectetur
      praesentium aperiam quaerat quam? Itaque dolorum illum ipsa aut magnam vel ducimus.
    </Collapse>
    <Collapse>
      <span slot="header">Item 4</span>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla inventore nemo nostrum
      velit saepe minus accusamus obcaecati voluptatibus assumenda eveniet molestias commodi
      dolore id cum perspiciatis qui sit quia illo, dolorum excepturi ad sapiente. Quia harum
      saepe eos recusandae voluptatibus.
    </Collapse>
  </CollapseContainer>
</Story>
