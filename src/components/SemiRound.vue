<template>
    <transition name="slide-fade">
        <div class="semi-container" v-if="appState.validations.quarter && appState.validations.sixteen && appState.validations.groupStage" id="semi-round">
            <h1>{{ title }}</h1>
            <div class="matches-list">
                <match v-for="(match, index) in getDuos" :key="index" :team1="match[0]" :team2="match[1]" :index="index"
                       :set-winner="setWinner" round="semi" :winner="appState.bracket.semi[index].winner"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import Match from "./Match";

    export default {
        name: 'semi-round',
        components: {Match},
        props: {
            title: {
                type: String,
                required: false
            },
            appState: {
                type: Object,
                required: true
            },
            setWinner: {
                type: Function,
                required: true
            }
        },
        computed: {
            /**
             * Matches the teams between themselves
             *
             * @returns {Array}
             */
            getDuos: function () {
                let duos = [];
                for (let i = 0; i < this.appState.bracket.quarter.length - 1; i += 2) {
                    duos.push([this.appState.bracket.quarter[i].winner, this.appState.bracket.quarter[i + 1].winner]);
                }

                return duos;
            }
        }
    }
</script>

<style lang="scss" scoped>
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
    }
</style>