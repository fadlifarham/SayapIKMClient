<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.companies" :key="item">
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
      user: "",
      companies: []
    }),

    mounted() {
      this.getCompany()
    },

    methods: {
      subString(dataString) {
        var data = dataString.substr(1, 200);
        data = data + " ...";
        return data;
      },

      listProyek(id) {
        this.$router.push('company/' + id + '/proyek');
      },

      getCompany() {
        this.getUser().then(response => {
          this.$axios.get('core/companies/').then(response => {
            console.log(response.data.results)
            this.companies = response.data.results
          })
        })
      },

      async getUser() {
        this.user = this.$auth.user
        return this.$auth.user
      }
    },

  };
</script>
