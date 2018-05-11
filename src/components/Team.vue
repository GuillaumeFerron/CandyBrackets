<template>
    <div class="team-container" v-bind:class="selected ? `selected` : ``">
        <div class="team-flag" v-if="team !== ``" v-on:click="$emit('select-team')"></div>
        <div class="t6" v-if="team !== ``">{{ computedTeam.name }}</div>
    </div>
</template>

<script>
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
            let $flag = $('.team-flag');
            $flag.css('max-width', flagWidth + 'px');
            $flag.css('max-height', flagHeight + 'px');
            $flag.css('background', 'url(`../assets/images/flags-for-bracket.png`) ' + teams[this.team].flagOffsets.x + ' ' + teams[this.team].flagOffsets.y)
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