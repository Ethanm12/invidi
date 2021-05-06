<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="contact-form-heading"></slot>
          <button type="button" class="btn-x" @click="close" aria-label="Close modal">x</button>
          </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">

          </slot>
        </section>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </transition>
</template>
<style>



  .modal-header,
  .modal-footer {
    padding: 10px;
    display: flex;
    align-items: center;
  }


  .modal-body {
    position: relative;
    flex: 1;
  }

  .btn-close:hover {
    background: #00629b;
    border: 1px solid #00629b;
  }

</style>
