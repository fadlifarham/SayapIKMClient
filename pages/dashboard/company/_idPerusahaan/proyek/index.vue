<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg4 sm12>
          <v-card>
            <v-card-media :src="require('@/static/bg/8.jpg')" height="250">
              <h2 class="white--text pa-3">
                Card with image
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                Lorem ipsum
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="detailProyek">Info Lebih Lanjut</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import Material from 'vuetify/es5/util/colors';
  
  export default {
    layout: 'dashboard',
    data: () => ({
      color: Material,
      selectedTab: 'tab-1'
    }),

    methods: {
      detailProyek() {
        let id = 1;
        this.$router.push('proyek/' + id);
      }
    },

  };
</script>
