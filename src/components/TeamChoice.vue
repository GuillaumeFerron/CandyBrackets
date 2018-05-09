<template>
    <div class="choice-container">
        <team :team="team"/>
        <div class="choose-team choice-button" @click="setWinner(team)"><p>{{ team === winner && winner !== '' ? winnerSymbol : winner ? outSymbol : noSymbol}}</p>
        </div>
    </div>
</template>

<script>
    import Team from "./Team";

    export default {
        name: 'team-choice',
        components: {Team},
        data: () => {
            return {
                winnerSymbol: 'WIN',
                outSymbol: 'OUT',
                noSymbol: '+'
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

        .choose-team {
            text-align: center;
            vertical-align: center;
            width: 50px;
            height: 50px;
            border: solid 1px;
            border-radius: 50%;
        }
    }
</style>