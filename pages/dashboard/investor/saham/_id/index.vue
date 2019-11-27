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
          <h2>PT. Kenapa Kamu Baca Saya</h2>
          <v-card>
            <v-card-text>
              Deskripsi Perusahaan:<br>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </v-card-text>
          </v-card>
          <br>
          <v-card>
            <v-card-text>
              <table class="v-datatable v-table">
                <tbody>
                <tr>
                  <td>Address</td>
                  <td>JL Bukit Barisan No. 2520111, Surabaya</td>
                </tr>
                <tr>
                  <td>Jumlah Saham</td>
                  <td>25000 Lembar</td>
                </tr>
                <tr>
                  <td>
                    <v-btn color="primary" block>Download Prospektus</v-btn>
                  </td>
                  <td>
                    <v-btn color="success" block>Investasi (Beli Saham)</v-btn>
                  </td>
                </tr>
                </tbody>
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
      hotProyeks: [
        '',
        '',
        ''
      ],
      newProyeks: [
        '',
        '',
        ''
      ],
      dataset: {
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData,
      }
    }),
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
      listProyek() {
        let id = 1;
        this.$router.push('investasiku/' + id + '');
      }
    },

  };
</script>
