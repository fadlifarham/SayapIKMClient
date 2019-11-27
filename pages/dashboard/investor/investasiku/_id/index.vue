<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-layout row wrap>
        <v-flex sm12>
          <h2>PT. Kenapa Kamu Baca Saya</h2>
        </v-flex>
        <v-flex sm12>
          <v-card>
            <v-card-text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm12>
          <v-card>
            <v-card-text>
              <table class="v-datatable v-table">
                <tbody>
                <tr>
                  <td>Nama Owner</td>
                  <td>Fatkul Nur Koirudin</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>JL Bukit Barisan No. 2520111, Surabaya</td>
                </tr>
                <tr>
                  <td>Jumlah Saham</td>
                  <td>250 Lembar (dimiliki) / 25000 Lembar (total)</td>
                </tr>
                <tr>
                  <td colspan="2">
                    <v-btn color="primary" block>Download Prospektus</v-btn>
                  </td>
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

      <v-layout row wrap>
        <v-flex lg12 sm12 v-for="item in reports">
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

  import NameCard from '@/components/widgets/card/NameCard';
  import ProfileCard from '@/components/widgets/card/ProfileCard';
  import Buttons from "../../../../general/buttons";

  export default {
    components: {
      Buttons,
      NameCard,
      ProfileCard
    },
    layout: 'dashboard',
    data: () => ({
      color: Material,
      selectedTab: 'tab-1',
      reports: [
        '',
        '',
        ''
      ],
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
