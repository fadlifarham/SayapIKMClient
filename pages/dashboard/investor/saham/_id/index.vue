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
                    <div class="title">Fatkul Nur Koirudin</div>
                  </div>
                </div>
              </v-card-text>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg8 sm12>
          <h2>{{ company.name }}</h2>
          <v-card>
            <v-card-text>
              {{ company.description }}
            </v-card-text>
          </v-card>
          <br>
          <v-card>
            <v-card-text>
              <table class="v-datatable v-table">
                <tbody>
                <tr>
                  <td>Address</td>
                  <td>{{ company.address }}</td>
                </tr>
                <tr>
                  <td>Jumlah Saham</td>
                  <td>{{ company.nShares }} Lembar</td>
                </tr>
                <tr>
                  <td>
                    <v-btn color="primary" block>Download Prospektus</v-btn>
                  </td>
                  <td>
                    <v-btn color="success" block @click="showPopupInvestment">Investasi (Beli Saham)</v-btn>
                  </td>
                </tr>
                </tbody>
              </table>
            </v-card-text>
          </v-card>
        </v-flex>

        <modal name="investment">
          <v-card>
            <v-card-text>
              <v-flex sm-12>
                <div align="center">
                  <h3 class="title">INVESTASI</h3>
                </div>
              </v-flex>
              <v-form>
                <div class="d-flex my-2">
                  <v-text-field
                    v-model="sumInvest"
                    label="Jumlah Investasi"
                    v-validate="'required'"
                    :error-messages="errors.collect('jumlah')"
                    required
                  ></v-text-field>
                </div>
                <div class="form-btn" >
                  <v-btn color="primary" class="btn-margin-bottom" @click="submitInvest" block>Submit</v-btn>
                  <v-btn color="error" block>Clear</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </modal>
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
  import Layout from "../../../../../components/media/Layout";

  export default {
    components: {
      Layout,
      VWidget,
      Buttons,
      NameCard,
      ProfileCard,
      BoxChart,
      MiniChart,
      EChart
    },
    layout: 'dashboard',
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      company: "",
      dataset: {
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData,
      },
      sumInvest: ""

    }),

    mounted() {
      this.getCompany();
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
      subString(dataString) {
        if (dataString == undefined) {
          return dataString
        }
        var data = dataString.substr(1, 200);
        data = data + " ...";
        return data;
      },

      listProyek() {
        let id = 1;
        this.$router.push('investasiku/' + id + '');
      },
      showPopupInvestment() {
        this.$modal.show('investment');

      },

      getCompany() {
        let id = this.$route.params.id
        this.$axios.get('core/companies/' + id).then(response => {
          this.company = response.data
        })
      },

      submitInvest() {
        let id = this.$route.params.id
        this.$axios.post('core/companies/' + id + '/invest/', {
          amount: this.sumInvest
        }).then(response => {
          console.log(response)
        })
      }
    },

  };
</script>
<style scoped>
  .btn-margin-bottom {
    margin-bottom: 10px;
  }
</style>
