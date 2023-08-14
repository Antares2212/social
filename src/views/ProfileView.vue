<template>
  <v-container>
    <v-card max-width="912px" class="mx-auto bg">
      <v-img
        class="align-end text-white"
        height="300"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
      <v-card theme="dark" class="align-center justify-space-between">       
          <template v-slot:prepend>
            <v-avatar max-width="150px" image="https://i.pravatar.cc/300">
    
            </v-avatar>
            <v-card-title>
              Алекс Саро
            </v-card-title>
            <v-card-subtitle>
              Узнать больше о профиле
            </v-card-subtitle>
          </template>
          <template v-slot:append>
            <v-card-actions>
              <v-btn>
                Редактировать профиль
              </v-btn>
            </v-card-actions>
          </template>
      </v-card>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ProfileView",
  methods: {
    on() {
      console.log('Ok');
    }
  }
}
</script>

<style>
.upload-btn {
  position: absolute !important;
  z-index: 999;
  top: 121px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125,198,163);
  background: linear-gradient(50deg, rgba(125,198,163,1) 0%, rgba(35,216,227,1) 72%);
}

.bg {
  background: rgb(255,197,185);
  background: linear-gradient(0deg, rgba(255,197,185,0.711922268907563) 0%, rgba(220,246,223,0.6671043417366946) 35%, rgba(255,255,255,0.7539390756302521) 74%), url(http://unblast.com/wp-content/uploads/2021/09/Real-Estate-Agent-Illustration.jpg);
}

.avatar-shadow {
  box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
  -webkit-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
  -moz-box-shadow: 0px 0px 10px 0px rgba(50,12,112,0.75);
}

</style>
