<template>
    
</template>

<script>
    export default {
        mounted()
        {
          this.$axios.get('/lib/rest-auth/user').then(response => {
            if (response.data.role == "IV") {
              this.$router.push('dashboard/investor')
            } else {
              this.$router.push('dashboard/company')
            }
          });
        }
    }
</script>

<style scoped>

</style>
