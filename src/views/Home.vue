<template>
  
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="200" v-if="imageType"
        src="https://file2.nocutnews.co.kr/newsroom/image/2022/12/12/202212120936505925_0.jpg"
        class="mb-16" />
      <v-img contain height="200" v-else src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt98e0ab84ef235710/60dbbc8622d24e38a38af75e/be59dd9dce4a9a769aff2057c8a2fca06f36099b.jpg"
        class="mb-16" />
      <v-card width="400" class=" mx-auto ma-10 pa-4" plat :color="imageType ? 'grey' : 'blue'" height="25vw">
        <v-card-text style="font-size:2vw; font-weight: bold; color:white">
          <span v-if="imageType">
            메시
          </span>
          <span v-else>
            음바페
            
          </span>
          의 홈페이지
        </v-card-text>
        <v-card-actions>
          <v-btn color="white" block variant="outlined" to="/pageMain" height="3vw" >
            홈입장
          </v-btn>



        </v-card-actions>

        <v-card-actions>
          <v-btn color="white" block variant="outlined" to="/pageSub" height="3vw">
            도움말
          </v-btn>

        </v-card-actions>

        <v-btn block color="red" flat @click="imageType = !imageType" height="3vw">
          Change button
        </v-btn>


        <div class="text-center">
    <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Open Dialog
        </v-btn>P
      </template>

      <v-card>
        <v-card-text>
          안녕하세요 
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

      </v-card>
    </v-responsive>
  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }

</script>




<script setup>

import { ref } from 'vue';

const imageType = ref(true)

</script>



