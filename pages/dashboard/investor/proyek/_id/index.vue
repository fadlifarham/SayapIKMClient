<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-layout row wrap>
        <v-flex lg4 sm12 >
          <v-card>
            <v-card-media :src="require('@/static/bg/8.jpg')" height="250"></v-card-media>
            <v-card-text>
              <v-card-text>
                <div class="layout">
                  <v-avatar :size="computeAvatarSize" color="primary">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg">
                  </v-avatar>
                  <div class="flex">
                    <h5>Bisnis Milik</h5>
                    <div class="title">{{ this.owner_name }}</div>
                  </div>
                </div>
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg8 sm12>
            <h2>{{ this.project_name }}</h2>
          <v-card>
            <v-card-text>
              {{ this.project_description }}
            </v-card-text>
          </v-card>
          <br>
          <v-card>
            <v-card-text>
              <table class="v-datatable v-table">
                <tbody>
                <tr>
                  <td>Address</td>
                  <td>{{ this.company_address }}</td>
                </tr>
                <tr>
                  <td>
                    <v-btn color="primary" block>Download Prospektus</v-btn>
                  </td>
                  <td>
                    <v-btn color="success" block>Investasi</v-btn>
                  </td>
                </tr>
                </tbody>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex lg12 sm12>
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
                height="350px"
                width="100%"
                autoresize="true"
              >
              </e-chart>
            </div>
          </v-widget>
          <v-card>
            <v-card-text>
              <table class="v-table">
                <tr>
                  <td>Dana Terkumpul</td>
                  <td>Rp {{ this.funded }}</td>
                  <td>Dana Dibutuhkan</td>
                  <td>Rp {{ this.target }}</td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    

  </div>
</template>

<script>
  import EChart from '@/components/chart/echart';

  import Material from 'vuetify/es5/util/colors';
  import {
    StackData,
    SinData,
    monthVisitData,
    campaignData,
    locationData,
  } from '@/api/chart';

  import NameCard from '@/components/widgets/card/NameCard';
  import ProfileCard from '@/components/widgets/card/ProfileCard';
  import Buttons from "../../../../general/buttons";
  import VWidget from "../../../../../components/VWidget";

  import MiniChart from '@/components/widgets/chart/MiniChart';
  import BoxChart from '@/components/widgets/chart/BoxChart';

  export default {
    components: {
      VWidget,
      Buttons,
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
          value: 95,
          name: 'Dana Terkumpul'
        },
        {
          value: 5,
          name: 'Dana Dibutuhkan'
        }
      ],
      dataset: {
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData,
      },
      owner_name: "",
      project_name: "",
      project_description: "",
      company_address: "",
      funded: "",
      target: ""
    }),

  mounted() {
    this.getDataProyek()
  },

    computed: {
      computeCardLayout () {
        return (this.mini) ? 'row' : 'column';
      },
      computeTextAlgin () {
        return (this.mini) ? 'text-sm-right' : 'text-sm-center';
      },
      computeAvatarSize () {
        return (this.mini) ? '48' : '96';
      },
    },

    methods: {

      

      getDataProyek() {
        let id = this.$route.params.id;
        
        this.$axios.get('core/projects/' + id + '/?expand=company.owners').then(response => {
          console.log(response.data)
          this.owner_name = response.data.company.owners[0].firstName + " " + response.data.company.owners[0].lastName
          this.project_name = response.data.name
          this.project_description = response.data.company.company_description
          this.company_address = response.data.company.address
          this.funded = response.data.funded
          this.target = response.data.target

          this.dataInformasi[0].value = response.data.funded
          this.dataInformasi[1].value = response.data.target
        });
      }
    },

  };
</script>
