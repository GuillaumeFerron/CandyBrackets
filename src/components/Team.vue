<template>
    <div class="team-container">
        <img :src="`http://www.countryflags.io/` + team + `/flat/64.png`"/>
        <h6>{{ computedTeam.name }}</h6>
    </div>
</template>

<script>
    import getTeamInfos from '../utils.js'

    export default {
        name: 'team',
        props: {
            team: {
                type: String,
                required: true
            },
        },
        computed: {
            computedTeam: function() {
                return getTeamInfos(this.team)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>