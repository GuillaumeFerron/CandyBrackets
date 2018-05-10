<template>
    <div class="team-container" v-bind:class="selected ? `selected` : ``">
        <img :src="`http://www.countryflags.io/` + team + `/flat/64.png`" width="96" v-if="team !== ``" v-on:click="$emit('select-team')"/>
        <div class="t6" v-if="team !== ``">{{ computedTeam.name }}</div>
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
            selected: {
                type: String,
                required: false
            }
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
    @import '../variables';

    .team-container {
        .t6 {
            color: $candy-anthracite;
        }
    }

    .team-container:hover {
        cursor: pointer;
    }

    .selected {
        .t6 {
            color: $candy-blue !important;
        }
    }
</style>