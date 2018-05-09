<template>
    <div class="team-container">
        <img :src="`http://www.countryflags.io/` + team + `/flat/64.png`" v-if="team !== ``"/>
        <img src="../../src/assets/undefined-flag.png" width="64" v-else/>
        <h6 v-if="team !== ``">{{ computedTeam.name }}</h6>
        <h6 v-else>Undefined</h6>
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
            /**
             * Get teams infos knowing the country code
             *
             * @returns {*}
             */
            computedTeam: function() {
                return getTeamInfos(this.team)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>