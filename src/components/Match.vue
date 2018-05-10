<template>
    <div class="match-container container" v-bind:class="winner !== '' ? `container-completed` : ``">
        <div class="matches-list">
            <team-choice :team="team1" :set-winner="onSetWinner" :winner="winner"/>
            <team-choice :team="team2" :set-winner="onSetWinner" :winner="winner"/>
        </div>
    </div>
</template>

<script>
    import TeamChoice from "./TeamChoice";
    export default {
        name: 'match',
        components: {TeamChoice},
        props: {
            team1: {
                type: String,
                required: true
            },
            team2: {
                type: String,
                required: true
            },
            index: {
                type: Number,
                required: true
            },
            setWinner: {
                type: Function,
                required: true
            },
            round: {
                type: String,
                required: true
            },
            winner: {
                type: String,
                required: false
            }
        },
        methods: {
            /**
             * Transitional function to set the winner
             *
             * @param teamCode
             */
            onSetWinner: function(teamCode) {
                this.setWinner(this.round, this.index, teamCode)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .match-container {
        width: 318px;

        .matches-list {
            display: flex;
            -webkit-flex-direction: row;
            -moz-flex-direction: row;
            -ms-flex-direction: row;
            -o-flex-direction: row;
            -khtml-flex-direction: row;
            flex-direction: row;
            -webkit-justify-content: space-around;
            -moz-justify-content: space-around;
            -ms-justify-content: space-around;
            -o-justify-content: space-around;
            -khtml-justify-content: space-around;
            justify-content: space-around;
            margin: 50px 30px;
        }
    }
</style>