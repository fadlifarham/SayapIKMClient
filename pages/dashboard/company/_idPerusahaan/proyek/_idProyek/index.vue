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
      <v-btn color="info" block>Add Report</v-btn>
      <v-layout row wrap>
        <v-flex lg12 sm12 v-for="item in reports" :key="item.id">
          <v-layout row>
            <v-flex lg10 sm12>
              <v-card>
                <v-card-media class="hidden-md-and-up">
                  <br>
                  <div align="center">
                    <img src="https://source.unsplash.com/250x250">
                  </div>
                </v-card-media>
                <v-card-text>
                  <table class="v-datatable v-table">
                    <tbody>
                    <tr>
                      <td colspan="4">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>Revenue</td>
                      <td>Rp 91283</td>
                      <td>Profit</td>
                      <td>Rp 39823</td>
                    <tr>
                      <td>Hutang</td>
                      <td>Rp 673832</td>
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
              <img src="https://source.unsplash.com/250x250">
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>

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
          value: 335232,
          name: 'Dana Terkumpul'
        },
        {
          value: 310000,
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

      getProjectReports() {
        let id = this.$route.params.idProyek
        this.$axios.get('core/reports/?project=' + id).then(response => {
          console.log(response.data)
        })
      }
    },

  };
</script>
