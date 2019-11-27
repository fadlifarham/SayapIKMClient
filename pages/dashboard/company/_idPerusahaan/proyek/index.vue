<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>

        <v-flex lg4 sm12 v-for="item in this.projects" :key="item">
          <v-card>
            <v-card-media :src="item.image" height="250"></v-card-media>
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
              <v-btn flat small @click="detailProyek(item.id)">Info Lebih Lanjut</v-btn>
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
      projects: []
    }),

    mounted() {
      this.getMyProject()
    },

    methods: {
      subString(dataString) {
        var data = dataString.substr(1, 200);
        data = data + " ...";
        return data;
      },

      detailProyek(id) {
        console.log(id)
        this.$router.push('proyek/' + id);
      },

      getMyProject() {
        let id = this.$route.params.idPerusahaan
        this.$axios.get('/core/projects/?company=' + id).then(response => {
          console.log(response.data.results)
          this.projects = response.data.results
        })
      }
    },

  };
</script>
