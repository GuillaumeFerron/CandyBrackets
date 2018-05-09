<template>
    <div id="app">
        <group-stage title="Group Stage" :appState="appState" :select-in-group="onSelectInGroup"/>
        <sixteen-round title="Round of 16" :app-state="appState" :set-winner="onSetWinner"/>
        <quarter-round title="Quarter-Finals" :app-state="appState" :set-winner="onSetWinner"/>
        <semi-round title="Semi-Finals" :app-state="appState" :set-winner="onSetWinner"/>
        <final-round title="Final" :app-state="appState" :set-winner="onSetWinner"/>
    </div>
</template>

<script>
    import GroupStage from './pages/GroupStage.vue'
    import SixteenRound from "./components/SixteenRound";
    import QuarterRound from "./components/QuarterRound";
    import SemiRound from "./components/SemiRound";
    import FinalRound from "./components/FinalRound";

    export default {
        name: 'app',
        data: () => {
            return {
                appState: {
                    data: [
                        {
                            index: 0,
                            teams: ['ru', 'sa', 'eg', 'uy']
                        },
                        {
                            index: 1,
                            teams: ['pt', 'es', 'ma', 'ir']
                        },
                        {
                            index: 2,
                            teams: ['fr', 'au', 'pe', 'dk']
                        },
                        {
                            index: 3,
                            teams: ['ar', 'is', 'hr', 'ng']
                        },
                        {
                            index: 4,
                            teams: ['br', 'ch', 'cr', 'rs']
                        },
                        {
                            index: 5,
                            teams: ['ge', 'mx', 'se', 'sk']
                        },
                        {
                            index: 6,
                            teams: ['be', 'pa', 'tn', 'gb']
                        },
                        {
                            index: 7,
                            teams: ['pl', 'sn', 'co', 'jp']
                        },
                    ],
                    bracket: {
                        groupStage: [
                            {
                                index: 0,
                                first: '',
                                second: ''
                            },
                            {
                                index: 1,
                                first: '',
                                second: ''
                            },
                            {
                                index: 2,
                                first: '',
                                second: ''
                            },
                            {
                                index: 3,
                                first: '',
                                second: ''
                            },
                            {
                                index: 4,
                                first: '',
                                second: ''
                            },
                            {
                                index: 5,
                                first: '',
                                second: ''
                            },
                            {
                                index: 6,
                                first: '',
                                second: ''
                            },
                            {
                                index: 7,
                                first: '',
                                second: ''
                            }
                        ],
                        sixteen: [
                            {
                                index: 0,
                                winner: ''
                            },
                            {
                                index: 1,
                                winner: ''
                            },
                            {
                                index: 2,
                                winner: ''
                            },
                            {
                                index: 3,
                                winner: ''
                            },
                            {
                                index: 4,
                                winner: ''
                            },
                            {
                                index: 5,
                                winner: ''
                            },
                            {
                                index: 6,
                                winner: ''
                            },
                            {
                                index: 7,
                                winner: ''
                            }
                        ],
                        quarter: [
                            {
                                index: 0,
                                winner: ''
                            },
                            {
                                index: 1,
                                winner: ''
                            },
                            {
                                index: 2,
                                winner: ''
                            },
                            {
                                index: 3,
                                winner: ''
                            }
                        ],
                        semi: [
                            {
                                index: 0,
                                winner: ''
                            },
                            {
                                index: 1,
                                winner: ''
                            }
                        ],
                        final: [
                            {
                                index: 0,
                                winner: ''
                            }
                        ]
                    }
                }
            }
        },
        components: {
            FinalRound,
            SemiRound,
            QuarterRound,
            SixteenRound,
            GroupStage
        },
        methods: {
            /**
             * Select the teams rank and update the app state
             *
             * @param index
             * @param teamCode
             */
            onSelectInGroup: function(index, teamCode) {
                if(this.appState.bracket.groupStage[index].first === teamCode && this.appState.bracket.groupStage[index].second === teamCode) {
                    this.appState.bracket.groupStage[index].first = '';
                }
                else if(this.appState.bracket.groupStage[index].first === teamCode) {
                    this.appState.bracket.groupStage[index].first = this.appState.bracket.groupStage[index].second;
                    this.appState.bracket.groupStage[index].second = '';
                }
                else if(this.appState.bracket.groupStage[index].second === teamCode) {
                    this.appState.bracket.groupStage[index].second = '';
                }
                else if(this.appState.bracket.groupStage[index].first === '') {
                    this.appState.bracket.groupStage[index].first = teamCode
                }
                else if(this.appState.bracket.groupStage[index].second === '') {
                    this.appState.bracket.groupStage[index].second = teamCode
                }
            },
            /**
             * Sets the winner in the appState according to the round of matches, and the team code
             *
             * @param round
             * @param index
             * @param teamCode
             */
            onSetWinner: function(round, index, teamCode) {
                if(['sixteen', 'quarter', 'semi', 'final'].indexOf(round) === -1) {
                    console.log("Error: Incorrect round String");
                    return;
                }
                if(this.appState.bracket[round][index].winner === teamCode) {
                    this.appState.bracket[round][index].winner = '';
                }
                else {
                    this.appState.bracket[round][index].winner = teamCode;
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
