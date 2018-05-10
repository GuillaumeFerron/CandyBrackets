<template>
    <div class="choice-container">
        <team :team="team" v-on:select-team="setWinner(team)"/>
        <div class="selected-pin" v-bind:class="team === winner ? `display-pin` : winner ? `display-pin-grey` : ``">{{ team === winner ? winnerSymbol : outSymbol }}</div>
    </div>
</template>

<script>
    import Team from "./Team";

    export default {
        name: 'team-choice',
        components: {Team},
        data: () => {
            return {
                winnerSymbol: 'W',
                outSymbol: 'x'
            }
        },
        props: {
            team: {
                type: String,
                required: true
            },
            setWinner: {
                type: Function,
                required: true
            },
            winner: {
                type: String,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .choice-container {
        position: relative;
        display: flex;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        -ms-flex-direction: column;
        -o-flex-direction: column;
        -khtml-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: space-around;
        -moz-justify-content: space-around;
        -ms-justify-content: space-around;
        -o-justify-content: space-around;
        -khtml-justify-content: space-around;
        justify-content: space-around;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -khtml-align-items: center;
        align-items: center;

        .choose-team {
            text-align: center;
            vertical-align: center;
            width: 50px;
            height: 50px;
            border: solid 1px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
    }
</style>