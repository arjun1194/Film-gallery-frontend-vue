<template>
  <q-page>
    <div class="q-pa-xl text-h4 ">Contact Us</div>

    <div class="row justify-end" >
      <div class="col-lg-4 col-sm-12 col-xs-12 ">
        <q-card class="q-dialog-plugin q-pa-sm" style="width: 100%; height: 100%">
          <q-card-section>
            <div class="text-subtitle1 text-weight-light">Have Doubts? Let us know. We will get right back to you</div>
          </q-card-section>
          <q-separator/>
          <q-input class="q-mx-lg q-my-lg" outlined v-model="name"  placeholder="Name" hint="Enter your name"  dense />
          <q-input class="q-mx-lg q-my-lg" outlined v-model="email"  placeholder="Contact Email" hint="We will get back to you at this email"  dense />
          <q-input class="q-mx-lg q-my-lg" outlined v-model="message"  placeholder="Message" hint="Please enter your message here"   />
          <q-card-section>

          </q-card-section>
          <q-card-actions align="center">
            <q-btn color="primary" label="Send Query" @click="onOKClick" />

          </q-card-actions>
        </q-card>
      </div>
      <div class="col-lg-4 col-sm-12 col-xs-12 self-center q-my-xl">
        <div class="text-center text-h5 text-weight-light">Address</div>
        <div class="text-center text-h6 q-mt-xl">
          Ekta Films,Moti Cinema <br>
          Chandni Chowk,New Delhi-110002
        </div>
        <div class="text-center text-h6 q-mt-xl">
          Ekta Films,Lotus Grand<br>
          Veera Desai, Andheri
          Mumbai
        </div>

      </div>
      <div style="margin-right: 0px">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe  :width="mapWidth" height="100%"  id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Ekta%20Films%2CMoti%20Cinema%20Chandni%20Chowk%2CNew%20Delhi-110002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>

        </div>
      </div>
    </div>


  </q-page>
</template>

<script>
import Layer from "components/Layer";
export default {
  name: "ContactUs",
  components: {Layer},
  data(){ return{
    name:'',
    email:'',
    message:"",
  }},
  computed:{
    mapWidth(){
      let x = this.$q.screen
       return (x.xs || x.sm) ? x.width : '100%'
    }
  }
}
</script>

<style scoped>
.mapouter{
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}

.gmap_canvas{
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>
