<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4 sm12 >
          <v-widget title="Informasi Investasi">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', dataInformasi],
                  ['color', [color.lightBlue.base, color.indigo.base, color.pink.base, color.green.base, color.cyan.base, color.teal.base]],
                  ['legend.orient', 'horizontal'],
                  ['legend.y', 'bottom'],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                ]"
                width="100%"
              >
              </e-chart>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg8 sm12>
          <h2>{{ project_name }}</h2>
          <v-card>
            <v-card-text>
              {{ subString(project_description) }}
            </v-card-text>
          </v-card>
          <br>
          <v-card>
            <v-card-text>
              <table class="v-datatable v-table">
                <tbody>
                <tr>
                  <td>Address</td>
                  <td>{{ company_address }}</td>
                </tr>
                <tr>
                  <td>Dana Terkumpul</td>
                  <td>Rp {{ funded }}</td>
                </tr>
                <tr>
                  <td>Dana Dibutuhkan</td>
                  <td>Rp {{ target }}</td>
                </tr>
                </tbody>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>

      <v-flex sm12>
        <h2>Report Investasi</h2>
      </v-flex>
      <v-btn color="info" @click="showPopupAddReport" block>Tambah Report</v-btn>
      <v-layout row wrap>
        <v-flex lg12 sm12 v-for="item in reports" :key="item.id">
          <v-layout row>
            <v-flex lg10 sm12>
              <v-card>
                <v-card-media class="hidden-md-and-up">
                  <br>
                  <div align="center">
                    <img v-if="item.file != NULL" :src="item.file">
                    <img v-else >
                  </div>
                </v-card-media>
                <v-card-text>
                  <table class="v-datatable v-table">
                    <tbody>
                    <tr>
                      <td colspan="4">
                        <p>
                          {{ item.description }}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>Rp {{ item.revenue }}</td>
                      <td>Profit</td>
                      <td>Rp {{ item.profit }}</td>
                    <tr>
                      <td>Hutang</td>
                      <td>Rp {{ item.loan }}</td>
                      <td colspan="2"></td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <v-btn color="primary" block>Download Laporan</v-btn>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex lg-2 class="hidden-sm-and-down">
              <img v-if="item.file != NULL" :src="item.file">
              <img v-else >
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>


      <modal name="add-report"
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
                <v-flex lg12 sm12>
                  <v-text-field v-model="description"  textarea label="Description">
                  </v-text-field>
                </v-flex>
              </div>
              
              <label for="">File</label>
              <input
                @change="fileHandler"
                ref="file"
                label="File"
                type="file"
              />

              <v-text-field
                v-model="revenue"
                label="Revenue"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="profit"
                label="Profit"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="cost"
                label="Cost"
                type="text"
              ></v-text-field>

              <v-text-field
                v-model="loan"
                label="Loan"
                type="text"
              ></v-text-field>

              <label for="">Gambar Dokumentasi</label>
              <input
                @change="fileHandler"
                ref="file"
                label="Gambar Dokumentasi"
                type="file"
              />

              <div class="form-btn" >
                <v-btn color="primary" class="btn-margin-bottom" @click="createReport" block>Submit</v-btn>
                <v-btn color="error" block>Clear</v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </modal>
    </v-container>
  </div>
</template>

<script>
  import Material from 'vuetify/es5/util/colors';

  import EChart from '@/components/chart/echart';

  import {
    StackData,
    SinData,
    monthVisitData,
    campaignData,
    locationData,
  } from '@/api/chart';

  import NameCard from '@/components/widgets/card/NameCard';
  import ProfileCard from '@/components/widgets/card/ProfileCard';

  import MiniChart from '@/components/widgets/chart/MiniChart';
  import BoxChart from '@/components/widgets/chart/BoxChart';
  import VWidget from "../../../../../../components/VWidget";


  export default {
    components: {
      VWidget,
      NameCard,
      ProfileCard,

      BoxChart,
      MiniChart,
      EChart,
    },
    layout: 'dashboard',
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      dataInformasi: [
        {
          value: 0,
          name: 'Dana Terkumpul'
        },
        {
          value: 700000000,
          name: 'Dana Dibutuhkan'
        }
      ],
      reports: [
        '',
        '',
        '',
        '',
        ''
      ],
      funded: "",
      target: "",
      project_name: "",
      project_description: "",
      company_address: "",

      description: "",
      file: "",
      revenue: "",
      profit: "",
      cost: "",
      loan: "",
      documentation: "",
      project: "",
    }),

    mounted() {
      this.getDetailProject()
      this.getProjectReports()
    },

    methods: {
      subString(dataString) {
        var data = dataString.substr(1, 800)
        data = data + " ...";
        return data;
      },

      getDetailProject() {
        let id = this.$route.params.idProyek
        this.$axios.get('core/projects/' + id + '/?expand=company').then(response => {
          var data = response.data

          this.dataInformasi[0].value = data.funded
          this.dataInformasi[1].value = data.target

          this.funded = data.funded
          this.target = data.target
          this.project_name = data.name
          this.project_description = data.description
          this.company_address = data.company.address
        })
      },
      showPopupAddReport() {
        this.$modal.show('add-report');
      },
      getProjectReports() {
        let id = this.$route.params.idProyek
        this.$axios.get('core/reports/?project=' + id).then(response => {
          console.log(response.data.results)
          this.reports = response.data.results
        })
      },

      fileHandler() {
        console.log(this.$refs.file)
        this.file = this.$refs.file.files[0]
      },

      documentationHandler() {
        this.documentation = this.$refs.file.files[0]
      },

      createReport() {
        let formData = new FormData()
        formData.append('description', this.description)
        formData.append('file', this.file)
        formData.append('revenue', this.revenue)
        formData.append('profit', this.profit)
        formData.append('cost', this.cost)
        formData.append('loan', this.loan)
        formData.append('documentation', this.documentation)
        formData.append('project', this.$route.params.idProyek)

        this.$axios.post('core/reports/', formData, {
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

  };
</script>
