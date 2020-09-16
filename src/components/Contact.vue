<template>
    <Layer color="bg-image" title="">
      <template v-slot:default>
          <div class="row justify-center">
            <div class="col-12 q-pa-sm text-center text-h4 q-ma-xl text-weight-light text-bold">For Further Queries or Any Other Assistance Feel Free to </div>
            <q-btn label="Contact Us" class="q-mx-xl q-pa-sm q-px-xl" color="primary" to="/contact-us"/>
          </div>
      </template>
    </Layer>
</template>

<script>
    import Layer from "./Layer";
    export default {
        name: "Contact",
      components: {Layer}
    }
</script>

<style scoped>
.bg-imag{
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23ffffff' cx='50' cy='0' r='50'/%3E%3Cg fill='%23f8f8f8' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23f1f1f1' cx='50' cy='100' r='50'/%3E%3Cg fill='%23eaeaea' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e3e3e3' cx='50' cy='200' r='50'/%3E%3Cg fill='%23dcdcdc' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d5d5d5' cx='50' cy='300' r='50'/%3E%3Cg fill='%23cecece' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c8c8c8' cx='50' cy='400' r='50'/%3E%3Cg fill='%23c1c1c1' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23bababa' cx='50' cy='500' r='50'/%3E%3Cg fill='%23b4b4b4' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23adadad' cx='50' cy='600' r='50'/%3E%3Cg fill='%23a6a6a6' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a0a0a0' cx='50' cy='700' r='50'/%3E%3Cg fill='%239a9a9a' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23939393' cx='50' cy='800' r='50'/%3E%3Cg fill='%238d8d8d' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23868686' cx='50' cy='900' r='50'/%3E%3Cg fill='%23808080' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%237a7a7a' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
}
</style>
