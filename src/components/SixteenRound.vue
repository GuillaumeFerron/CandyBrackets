<template>
    <transition name="slide-fade">
    <div class="sixteen-container phase" v-if="appState.validations.groupStage" id="sixteen-round">
        <div class="t1">{{ title }}</div>
        <div class="matches-list">
            <match v-for="(match, index) in getDuos" :key="index" :team1="match[0]" :team2="match[1]" :index="index" :set-winner="setWinner" round="sixteen" :winner="appState.bracket.sixteen[index].winner"/>
        </div>
    </div>
    </transition>
</template>

<script>
    import Match from "./Match";
    export default {
        name: 'sixteen-round',
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
            getDuos: function() {
                let duos = [];
                for(let i =0; i<this.appState.bracket.groupStage.length - 1; i+=2) {
                    duos.push([this.appState.bracket.groupStage[i].first, this.appState.bracket.groupStage[i+1].second]);
                    duos.push([this.appState.bracket.groupStage[i].second, this.appState.bracket.groupStage[i+1].first]);
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
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        -khtml-flex-wrap: wrap;
        flex-wrap: wrap;
    }
</style>