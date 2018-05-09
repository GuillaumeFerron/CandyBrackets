<template>
    <div class="group-container">
        <h3>{{`Group ` + getLetter}}</h3>
        <h5>{{ groupRank.first !== '' && groupRank.second !== '' ? doneHeadline : groupRank.first !== '' ? secondHeadline : firstHeadline }}</h5>
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
        data : () => {
            return {
                firstHeadline: 'Select 1st place',
                secondHeadline: 'Select 2nd place',
                doneHeadline: 'Done'
            }
        },
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
    .group-container {
        position: relative;
        display: flex;
        padding: 15px 30px;
        margin: 15px 15px;
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
        width: 30%;
        border: solid 1px;

        .teams-list {
            width: 100%;
            display: flex;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            -o-flex-direction: row;
            -khtml-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: nowrap;
            -moz-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            -o-flex-wrap: nowrap;
            -khtml-flex-wrap: nowrap;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
    }
</style>