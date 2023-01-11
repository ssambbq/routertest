<template>


    <v-layout>


      <v-main style="height: 100%">
      


        <v-app-bar color=blue
    image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>지훈이의 홈피</v-app-bar-title>
      <template v-slot:append>

        <v-btn icon="mdi-star"></v-btn>
        <v-btn stacked>
        <v-icon icon="mdi-close"></v-icon>
  
      close
    </v-btn>


        <v-btn icon="mdi-close" color="red"></v-btn>
      </template>
    </v-app-bar>





        <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="data:image/jpeg;base64,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"
            title="Leonel Messi"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="home" to="/" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="pagemain" to="/pageMain" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-domain" color="orange-darken-2" title="pagesub" to="/pageSub" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="변경" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      
      
        <v-app>



    



    <v-main>
     <router-view></router-view>
    </v-main>
    <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-center w-100">
      {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </div>
  </v-footer>
  </v-app>
      
      
      
      </v-main>




    </v-layout>
 





</template>

<script setup>

</script>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>