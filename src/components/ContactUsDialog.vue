<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 100%">
      <q-card-section>
        <div class="text-h6 text-weight-light">Contact us</div>
        <div class="text-subtitle1 text-weight-light">have Doubts? let us know. We will get right back to you</div>
      </q-card-section>
      <q-separator/>
      <q-input class="q-mx-lg q-my-lg" outlined v-model="name"  placeholder="Name" hint="Enter your name"  dense />
      <q-input class="q-mx-lg q-my-lg" outlined v-model="name"  placeholder="contact email" hint="we will get back to you at this email"  dense />
      <q-input class="q-mx-lg q-my-lg" outlined v-model="name"  placeholder="message" hint="please enter your message here"   />
      <q-card-section>

      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
  export default {
    data(){
      return {
        name:'',
        contact:'',
        message:'',


      }

    },
    props: {
      // ...your custom props
    },

    methods: {
      // following method is REQUIRED
      // (don't change its name --> "show")
      show () {
        this.$refs.dialog.show()
      },

      // following method is REQUIRED
      // (don't change its name --> "hide")
      hide () {
        this.$refs.dialog.hide()
      },

      onDialogHide () {
        // required to be emitted
        // when QDialog emits "hide" event
        this.$emit('hide')
      },

      onOKClick () {
        // on OK, it is REQUIRED to
        // emit "ok" event (with optional payload)
        // before hiding the QDialog
        this.$emit('ok')
        // or with payload: this.$emit('ok', { ... })

        // then hiding dialog
        this.hide()
      },

      onCancelClick () {
        // we just need to hide dialog
        this.hide()
      }
    }
  }
</script>
