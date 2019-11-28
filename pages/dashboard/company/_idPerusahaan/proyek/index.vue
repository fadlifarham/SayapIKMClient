<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-btn color="primary" block @click="showPopupAddProject">Tambah Proyek</v-btn>

      <v-layout row wrap>

        <v-flex lg4 sm12 v-for="item in this.projects" :key="item.id">
          <v-card>
            <v-card-media v-if="item.image != NULL" :src="item.image" height="250"></v-card-media>
            <v-card-media v-else  height="250"></v-card-media>
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
    <modal name="add-project"
           transition="nice-modal-fade"
           classes="demo-modal-class"
           :min-width="200"
           :min-height="200"
           :pivot-y="0.5"
           :adaptive="true"
           :scrollable="true"
           :reset="true"
           width="60%"
           height="auto">

      <v-card>
        <v-card-text>
          <v-flex sm-12>
            <div align="center">
              <h3 class="title">Tambah Proyek</h3>
            </div>
          </v-flex>
          <v-form>
            <div class="d-flex my-2">
              <v-text-field
                v-model="name"
                label="Nama Proyek"
                v-validate="'required'"
                :error-messages="errors.collect('nama_proyek')"
                required
              ></v-text-field>
            </div>

            <v-flex lg12 sm12>
              <v-text-field v-model="description" textarea label="Description">
              </v-text-field>
            </v-flex>

            <v-text-field
              @change="prospectusHandler"
              label="Prospektus"
              type="file"
            ></v-text-field>

            <v-text-field
              v-model="target"
              label="Target"
            ></v-text-field>

            <v-text-field
              @change="imageHandler"
              label="Gambar"
              type="file"
            ></v-text-field>

            <div class="form-btn" >
              <v-btn color="primary" class="btn-margin-bottom" @click="createProject" block>Submit</v-btn>
              <v-btn color="error" block>Clear</v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </modal>
  </div>
</template>

<script>
  import Material from 'vuetify/es5/util/colors';

  export default {
    layout: 'dashboard',
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      projects: [],

      name: "",
      description: "",
      prospectus: "",
      target: "",
      image: "",
      company: ""
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
      },

      showPopupAddProject() {
        this.$modal.show('add-project');
      },

      prospectusHandler() {
        this.prospectus = this.$refs.file.files[0]
      },

      imageHandler() {
        this.image = this.$refs.file.files[0]
      },

      createProject() {
        let formData = new FormData()
        formData.append('name', this.name)
        formData.append('description', this.description)
        formData.append('prospectus', this.prospectus)
        formData.append('target', this.target)
        formData.append('image', this.image)
        formData.append('company', this.$route.params.idPerusahaan)

        this.$axios.post('core/projects/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          if (response.status == 201) {
            this.$router.go()
          }
        })
      }


    },

  }
</script>

<style scoped>
  .btn-margin-bottom {
    margin-bottom: 10px;
  }
</style>
