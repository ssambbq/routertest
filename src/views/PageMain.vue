<template>
  <v-card >
    <v-img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcnXTD9%2FbtqF1oVuQAd%2FwqjyqYrwKmkmEdn0vMcTQ0%2Fimg.jpg">
      <v-card-text style="font-size:20px; font-weight: bold; color:Blue">
        지훈이의 홈에 오신것을 환영합니다. <br>
        이곳은 지훈이의 홈페이지 첫 화면입니다. <br>
        버튼 디자인 연습용 페이지 입니다.
    </v-card-text>

    <v-btn color="red" block variant="outlined" to="/" >
      <v-btn-text style="font-size:20px; font-weight: bold; color:red">
    comback
  </v-btn-text>
</v-btn>



      <v-container class="bg-red " >
      <v-row
        no-gutters
        style="height: 100px;"
      >
        <v-col align-self="start" >
          <v-sheet class="pa-2 ma-2 bg-blue">
            .align-self-start
          </v-sheet>
        </v-col>

        <v-col align-self="center">
          <v-sheet class="pa-2 ma-2">
            .align-self-center
          </v-sheet>
        </v-col>

        <v-col align-self="end">
          <v-sheet class="pa-2 ma-2 bg-transparent">
            .align-self-end
          </v-sheet>
        </v-col>
      </v-row>
      <v-divider color="white"></v-divider>

      <v-row no-gutters>
        <v-col cols="8">
    
      </v-col>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
          .v-col-2
        </v-sheet>
      </v-col>
      <v-divider vertical color="white"></v-divider>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2" color="transparent">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>


    <v-row
      class="mb-6"
      no-gutters
    >
      <v-col :cols="cols[0]">
        <v-sheet class="pa-2 ma-2">
          .v-col-{{ cols[0] }}
        </v-sheet>
      </v-col>

      <v-col :cols="cols[1]">
        <v-sheet class="pa-2 ma-2">
          .v-col-{{ cols[1] }}
        </v-sheet>
      </v-col>
    </v-row>

    </v-container>


  

    
    <v-carousel class="w-50">
  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></v-carousel-item>
</v-carousel>





    </v-img>


  </v-card>


</template>




<script setup>

</script>

<style>

</style>

<script>
  export default {
    computed: {
      cols () {
        const { lg, sm } = this.$vuetify.display
        return lg ? [3, 9] : sm ? [9, 3] : [6, 6]
      },
    },


  }



  
</script>

