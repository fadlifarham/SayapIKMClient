<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>

      <v-layout row wrap>
        <v-flex sm12>
          <h2>{{ project_name }}</h2>
        </v-flex>
        <v-flex sm12>
          <v-card>
            <v-card-text>
              {{ project_description }}
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
                  <td>{{ owner_name }}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{{ address }}</td>
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

      project_name: "",
      project_description: "",
      owner_name: "",
      address: "",


    }),

    mounted() {
      this.getProjectInfo()
      this.getReports()
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
      listProyek() {
        let id = 1;
        this.$router.push('investasiku/' + id + '');
      },

      getProjectInfo() {
        this.$axios.get('core/projects/' + this.$route.params.id + '/?expand=company.owners').then(response => {
          this.project_name = response.data.name
          this.project_description = response.data.description
          this.owner_name = response.data.company.owners[0].firstName + " " + response.data.company.owners[0].lastName
          this.address = response.data.company.address
        })
      },

      getReports() {
        let id = this.$route.params.id
        console.log(id)
        this.$axios.get('core/reports/?project=' + id).then(response => {
          console.log(response.data.results)
          this.reports = response.data.results
        })
      }
    },

  };
</script>
