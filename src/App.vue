<template>
    <div id="app">
        <group-stage title="GROUP STAGE" :appState="appState" :select-in-group="onSelectInGroup"/>
        <sixteen-round title="ROUND OF 16" :app-state="appState" :set-winner="onSetWinner"/>
        <quarter-round title="QUARTER-FINALS" :app-state="appState" :set-winner="onSetWinner"/>
        <semi-round title="SEMI-FINALS" :app-state="appState" :set-winner="onSetWinner"/>
        <final-round title="FINAL" :app-state="appState" :set-winner="onSetWinner"/>
        <submit-bracket :app-state="appState"/>
    </div>
</template>

<script>
    import GroupStage from './components/GroupStage.vue'
    import SixteenRound from "./components/SixteenRound";
    import QuarterRound from "./components/QuarterRound";
    import SemiRound from "./components/SemiRound";
    import FinalRound from "./components/FinalRound";
    import SubmitBracket from "./components/SubmitBracket";
    import {getNextPhases, validatePhase, validateRoundName} from "./utils";

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
                    },
                    validations: {
                        groupStage: false,
                        sixteen: false,
                        quarter: false,
                        semi: false,
                        final: false
                    }
                }
            }
        },
        components: {
            SubmitBracket,
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

                for(let i = 0; i<this.appState.bracket.groupStage.length; i++) {
                    if(this.appState.bracket.groupStage[i].first === '' || this.appState.bracket.groupStage[i].second === '') {
                        this.appState.validations.groupStage = false;
                        break;
                    }
                    else {
                        this.appState.validations.groupStage = true;
                    }
                }

                this.resetWinner('groupStage');
            },
            /**
             * Sets the winner in the appState according to the round of matches, and the team code
             *
             * @param round
             * @param index
             * @param teamCode
             */
            onSetWinner: function(round, index, teamCode) {
                validateRoundName(round);

                if(this.appState.bracket[round][index].winner === teamCode) {
                    this.appState.bracket[round][index].winner = '';
                }
                else {
                    this.appState.bracket[round][index].winner = teamCode;
                }

                this.onValidatePhase(round);
                this.resetWinner(round);
            },
            /**
             * Checks that the phase has been completed
             */
            onValidatePhase: function(round) {
                validateRoundName(round);

                this.appState.validations[round] = validatePhase(this.appState.bracket[round]);
            },

            /**
             * Remove a team from the winnners
             *
             * @param round
             */
            resetWinner: function(round) {
                if(round !== 'final') {
                    validateRoundName(round);

                    let nextRounds = getNextPhases(round);

                    for(let i = 0; i<nextRounds.length; i++) {
                        for(let j = 0; j<this.appState.bracket[nextRounds[i]].length; j++) {
                            this.appState.bracket[nextRounds[i]][j].winner = '';
                        }
                        this.appState.validations[nextRounds[i]] = false;
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import 'variables';


    /***************************************************************************/
    /***************************     FONTS     *********************************/
    /***************************************************************************/
    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/gilroy-regular-webfont.woff2') format('woff2'),
        url('./assets/fonts/gilroy-regular-webfont.woff') format('woff');
        font-weight: 400;
        font-style: normal;

    }



    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-bold-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-bold-webfont.woff') format('woff');
        font-weight: 700;
        font-style: normal;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-bolditalic-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-bolditalic-webfont.woff') format('woff');
        font-weight: 700;
        font-style: italic;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-heavy-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-heavy-webfont.woff') format('woff');
        font-weight: 900;
        font-style: normal;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-heavyitalic-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-heavyitalic-webfont.woff') format('woff');
        font-weight: 900;
        font-style: italic;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-medium-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-medium-webfont.woff') format('woff');
        font-weight: 500;
        font-style: normal;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-mediumitalic-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-mediumitalic-webfont.woff') format('woff');
        font-weight: 500;
        font-style: italic;

    }



    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-semibold-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-semibold-webfont.woff') format('woff');
        font-weight: 600;
        font-style: normal;

    }




    @font-face {
        font-family: 'gilroy';
        src: url('./assets/fonts/radomir_tinkov_-_gilroy-thin-webfont.woff2') format('woff2'),
        url('./assets/fonts/radomir_tinkov_-_gilroy-thin-webfont.woff') format('woff');
        font-weight: 100;
        font-style: normal;

    }


    /***************************************************************************/
    /***************************     BASE      *********************************/
    /***************************************************************************/

    .t1, .t2, .t3, .t4, .t5, .t6 {
        font-family: 'gilroy',serif;
        font-weight: 700;
        color: $candy-anthracite;
    }

    .t1 {
        font-size: 40px;
        margin-bottom: 30px;
    }

    .t3 {
        font-size: 30px;
    }

    .t6 {
        font-size: 22px;
    }

    .container {
        background-color: $candy-grey-xs;
        margin: 15px 0;
    }

    .container-completed {
        background-color: $candy-blue-xs !important;
    }

    .selected-pin {
        position: absolute;
        top: 0;
        right: -20px;
        background: $candy-blue;
        border-radius: 300px;
        height: 43px;
        line-height: 43px;
        width: 43px;
        font-weight: 900;
        color: #fff;
        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -ms-transform: scale(0);
        -o-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }

    .display-pin, .display-pin-grey {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        -o-transform: scale(1);
        transform: scale(1);
    }

    .display-pin-grey {
        background-color: $candy-grey;
    }

    .phase {
        margin-top: 50px;
    }


    .choice-button {
        color: #2c3e50;
        border-color: #2c3e50;
        background-color: #fff;
    }

    .choice-button:hover {
        color: #fff;
        background-color: $candy-anthracite;
        cursor: pointer;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }


    /***************************************************************************/
    /*************************     ANIMATIONS     ******************************/
    /***************************************************************************/

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translatey(20px);
        opacity: 0;
    }

    /***************************************************************************/
    /****************************     APP     **********************************/
    /***************************************************************************/

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $candy-anthracite;
        margin-top: 60px;
    }
</style>
