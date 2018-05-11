<template>
    <div class="group-choice-container"  v-if="team !== ``">
        <team :team="team" v-on:select-team="selectInGroup(team)" :selected="first === team ? `first` : second === team ? `second` : first && second ? `out` : ``"/>
        <div class="selected-pin" v-bind:class="team === first || team === second ? `display-pin` : (first && second) ? `display-pin-grey` : ``">{{ team === first ? firstSymbol : team === second ? secondSymbol : outSymbol }}</div>
    </div>
</template>

<script>
    import Team from "./Team";
    export default {
        name: 'group-team-choice',
        components: {Team},
        data: () => {
            return {
                firstSymbol: '1',
                secondSymbol: '2',
                outSymbol: 'x',
                noSymbol: ''
            }
        },
        props: {
            team: {
                type: String,
                required: true
            },
            selectInGroup: {
                type: Function,
                required: true
            },
            first: {
                type: String,
                required: false
            },
            second: {
                type: String,
                required: false
            },
            out: {
                type: Boolean,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .group-choice-container {
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
        
        .group-choose-team {
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