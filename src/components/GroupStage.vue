<template>
    <div class="group-stage-container phase" id="group-stage">
        <div class="t1">{{ title }}</div>
        <div class="stage-groups">
            <group v-for="(group, index) in appState.data" :key="index" :teams="group.teams" :index="index" :group-rank="appState.bracket.groupStage[index]" :select-in-group="selectInGroup"/>
        </div>
    </div>
</template>

<script>
    import Group from './Group'
    export default {
        name: 'group-stage',
        components: {
            Group
        },
        props: {
            title: {
                type: String,
                required: false
            },
            appState: {
                type: Object,
                required: true
            },
            selectInGroup: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../variables";

    .stage-groups {
        margin: 0 auto;
        display: flex;
        max-width: 90%;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        -khtml-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-justify-content: space-around;
        -moz-justify-content: space-around;
        -ms-justify-content: space-around;
        -o-justify-content: space-around;
        -khtml-justify-content: space-around;
        justify-content: space-around;
    }

    @media (min-width: 1200px) {
        .stage-groups {
            max-width: 80%;
        }
    }
</style>