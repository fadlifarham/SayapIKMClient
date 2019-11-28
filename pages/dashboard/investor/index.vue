<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-flex sm12>
        <h2>New Proyek</h2>
      </v-flex>

      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.newProyeks" :key="item.id">
          <v-card>
            <v-card-media v-if="item.image != NULL" :src="item.image" height="250"></v-card-media>
            <v-card-media v-else height="250"></v-card-media>
            <v-card-text>
              <h3 class="headline">{{ item.name }}</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                {{ subString(item.description) }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="listProyek(item.id)">Info Lebih Lanjut</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <br>
      <v-flex sm12>
        <h2>Hot Proyek</h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.hotProyeks" :key="item.id">
          <v-card>
            <v-card-media v-if="item.image != NULL" :src="item.image" height="250"></v-card-media>
            <v-card-media v-else height="250"></v-card-media>            
            <v-card-text>
              <h3 class="headline">{{ item.name }}</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                {{ subString(item.description) }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="listProyek(item.id)">Info Lebih Lanjut</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <br>
      <v-flex sm12>
        <h2>Saham</h2>
      </v-flex>
      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.hotProyeks" :key="item.id">
          <v-card>
            <v-card-media v-if="item.image != NULL" :src="item.image" height="250"></v-card-media>
            <v-card-media v-else height="250"></v-card-media>            
            <v-card-text>
              <h3 class="headline">{{ item.name }}</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
              <div>
                {{ subString(item.description) }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small @click="listProyek(item.id)">Info Lebih Lanjut</v-btn>
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
      hotProyeks: [],
      newProyeks: []
    }),

    mounted() {
      this.getHotProyeks()
      this.getNewProyeks()
    },

    methods: {
      subString(dataString) {
        var data = dataString.substr(1, 200);
        data = data + " ...";
        return data;
      },

      listProyek(id) {
        this.$router.push('investor/proyek/' + id);
      },

      getHotProyeks() {
        this.$axios.get('/core/projects/?ordering=-n_invests').then(response => {
          this.hotProyeks = response.data.results
        });
      },

      getNewProyeks() {
        this.$axios.get('/core/projects/?ordering=-created_at').then(response => {
          this.newProyeks = response.data.results
        });
      }
    },

  };
</script>
