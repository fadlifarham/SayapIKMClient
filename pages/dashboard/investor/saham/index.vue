<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-flex sm12>
        <h2>Saham</h2>
      </v-flex>

      <v-layout row wrap>
        <v-flex lg4 sm12 v-for="item in this.saham" :key="item.id">
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
      saham: [
        '',
        '',
        ''
      ],
    }),

    mounted() {
      this.getSaham()
    },

    methods: {

      subString(dataString) {
        if (dataString == undefined) {
          return dataString
        }
        var data = dataString.substr(1, 200);
        data = data + " ...";
        return data;
      },

      detailProyek(id) {
        this.$router.push('/dashboard/investor/saham/' + id);
      },

      getSaham() {
        this.$axios.get('core/companies/').then(response => {
          // console.log(response)
          this.saham = response.data.results
        })
      }
    },

  };
</script>
