<script>
  export default {
    data() {
      return {
        txt: 'AERO',
      }
    },
    computed: {
      doChange() {
        console.log(this.txt)
        if (this.txt === 'AUTO CARE') {
          this.txt = 'AERO'
        } else {
          this.txt = 'AUTO CARE'
        }
      },
    },
  }
</script>
<template>
  <div>
    <p>
      {{ txt }}
    </p>
    <button @click.prevent="doChange">change</button>
  </div>
</template>
