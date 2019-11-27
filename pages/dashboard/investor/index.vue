<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-flex sm12>
        <h2>New Proyek</h2>
      </v-flex>

      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.hotProyeks">
          <v-card>
            <v-card-media :src="require('@/static/bg/8.jpg')" height="250"></v-card-media>
            <v-card-text>
              <h3 class="headline">Nama Perusahaan</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="listProyek">Info Lebih Lanjut</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <br>
      <v-flex sm12>
        <h2>Hot Proyek</h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.hotProyeks">
          <v-card>
            <v-card-media :src="require('@/static/bg/8.jpg')" height="250"></v-card-media>
            <v-card-text>
              <h3 class="headline">Nama Perusahaan</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="listProyek">Info Lebih Lanjut</v-btn>
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
      selectedTab: 'tab-1',
      hotProyeks: [
        '',
        '',
        ''
      ],
      newProyeks: [
        '',
        '',
        ''
      ]
    }),

    methods: {
      listProyek() {
        let id = 1;
        this.$router.push('company/' + id + '/proyek');
      }
    },

  };
</script>
