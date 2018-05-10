<template>
    <div class="group-stage-container" id="group-stage">
        <h1>{{ title }}</h1>
        <div class="stage-groups">
            <group v-for="(group, index) in appState.data" :key="index" :teams="group.teams" :index="index" :group-rank="appState.bracket.groupStage[index]" :select-in-group="selectInGroup"/>
        </div>
    </div>
</template>

<script>
    import Group from './Group'
    export default {
        name: 'home',
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
    .stage-groups {
        margin: 0 auto;
        display: flex;
        max-width: 80%;
        -webkit-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        -khtml-flex-wrap: wrap;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>