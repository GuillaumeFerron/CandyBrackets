<template>
    <div class="team-container" v-bind:class="selected ? `selected` : ``">
        <div :class="`team-flag team-flag-` + team" v-if="team !== ``" v-on:click="$emit('select-team')"></div>
        <div class="t6" v-if="team !== ``">{{ computedTeam.name }}</div>
    </div>
</template>

<script>
    /* eslint-disable no-undef */

    import getTeamInfos from '../utils.js'
    import {flagHeight, flagWidth, teams} from "../utils";

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
        },
        mounted() {
            const scale = 2;
            const nbFlagsWidth = 7;
            let $flag = $('.team-flag-' + this.team);
            let $gFlag = $('.team-flag');
            $flag.css('width', flagWidth / scale - 1 + 'px');
            $flag.css('height', flagHeight / scale - 1 + 'px');
            $flag.css('background-position', '-' + teams[this.team].flagOffsets.x / scale + 'px -' + teams[this.team].flagOffsets.y / scale + 'px');

            $gFlag.css('background-size', flagWidth * nbFlagsWidth / scale + 'px auto')
        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .team-container {
        .t6 {
            color: $candy-anthracite;
        }

        .team-flag {
            background: url(../assets/images/flags-for-bracket.png);
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