<template>
    <div class="group-container container" v-bind:class="groupRank.first !== '' && groupRank.second !== '' ? `container-completed` : ``">
        <div class="group-title"><div class="t3">{{getLetter}}</div></div>
        <div class="teams-list">
            <group-team-choice v-for="team in teams" :key="team.code" :team="team" :select-in-group="onSelectInGroup" :first="groupRank.first" :second="groupRank.second" :out="groupRank.first !== `` && groupRank.second !== `` && groupRank.first !== team.code && groupRank.second !== team.code"/>
        </div>
    </div>
</template>

<script>
    import GroupTeamChoice from "./GroupTeamChoice";
    export default {
        name: 'group',
        components: {GroupTeamChoice},
        props: {
            teams: {
                type: Array,
                required: true
            },
            index: {
                type: Number,
                required: true
            },
            selectInGroup: {
                type: Function,
                required: true
            },
            groupRank: {
                type: Object,
                require: true
            }
        },
        computed: {
            /**
             * Get the letter from its index in the alphabet
             *
             * @returns {string}
             */
            getLetter: function() {
                const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                return alphabet[this.index].toUpperCase();
            }
        },
        methods: {
            /**
             * Transition function to update the state knowing the index
             *
             * @param teamCode
             */
            onSelectInGroup(teamCode) {
                this.selectInGroup(this.index, teamCode)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../variables";

    .group-container {
        position: relative;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        -khtml-flex-direction: column;
        flex-direction: column;
        -webkit-align-items: flex-start;
        -moz-align-items: flex-start;
        -ms-align-items: flex-start;
        -o-align-items: flex-start;
        -khtml-align-items: flex-start;
        align-items: flex-start;
        width: 400px;
        min-height: 378px;

        .group-title {
            width: 100%;
            height: 55px;
            line-height: 55px;
            text-align: left;
            background-color: $candy-grey-s;

            .t3 {
                color: #fff !important;
                background-color: $candy-grey;
                height: 100%;
                width: 55px;
                text-align: center;
            }
        }

        .teams-list {
            max-width: 100%;
            height: 100%;
            display: flex;
            margin: 35px 70px;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            -o-flex-direction: row;
            -khtml-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: wrap;
            -moz-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            -o-flex-wrap: wrap;
            -khtml-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: space-between;
            -moz-justify-content: space-between;
            -ms-justify-content: space-between;
            -o-justify-content: space-between;
            -khtml-justify-content: space-between;
            justify-content: space-between;
        }
    }

    .group-container.container-completed {
        .group-title {
            background-color: $candy-blue-s !important;
            .t3 {
                background-color: $candy-blue !important;
            }
        }
    }

    @media (max-width: 480px) {
        .teams-list {
            margin: 35px 45px !important;
        }
    }

    @media (min-width: 481px) and (max-width: 768px) {
        .teams-list {
            margin: 35px 70px !important;
        }
    }
</style>