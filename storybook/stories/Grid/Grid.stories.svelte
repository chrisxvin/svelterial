<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import { Divider } from '@svelterialjs/core';
  import { Row, Col } from '@svelterialjs/grid';
</script>

<Meta title="Components/Grid/Grid" parameters={{ layout: 'fullscreen' }} />

<Story name="Responsive">
  <Row>
    <Col md={6} xs={12}>
      <div class="card">md=6 xs=12</div>
    </Col>
    <Col md={4} xs={6}>
      <div class="card">md=4 xs=6</div>
    </Col>
    <Col md={2} xs={6}>
      <div class="card">md=2 xs=6</div>
    </Col>
  </Row>
  <Divider />
  <Row>
    <Col md={8}>
      <div class="card">md=8 xs=auto</div>
    </Col>
    <Col md={4}>
      <div class="card">md=4 xs=auto</div>
    </Col>
  </Row>
  <Divider />
  <Row>
    <Col md={8} sm={4}>
      <div class="card">md=8 sm=4</div>
    </Col>
    <Col md={4} sm={8}>
      <div class="card">md=4 sm=8</div>
    </Col>
  </Row>
</Story>

<Story name="Nested">
  <Row>
    <Col md={6}>
      <Row>
        <Col md={4}>
          <div class="card">md=4</div>
        </Col>
        <Col md={4}>
          <div class="card">md=4</div>
        </Col>
        <Col md={4}>
          <div class="card">md=4</div>
        </Col>
      </Row>
    </Col>
    <Col md={6} xs={12}>
      <div class="card">md=6 xs=12</div>
    </Col>
  </Row>
</Story>

<style>
  .card {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #6c5ce7;
    color: white;
    margin: 4px;
  }
</style>
