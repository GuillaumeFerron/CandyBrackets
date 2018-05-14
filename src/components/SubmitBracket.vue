<template>
    <transition name="slide-fade">
        <div class="submit-container" v-if="appState.validations.final && appState.validations.semi && appState.validations.quarter && appState.validations.sixteen && appState.validations.groupStage">
            <div class="t3 submit-button choice-button" @click="show">
                SUBMIT
            </div>
            <modal name="submit-modal" :height="`70%`" :width="`40%`"><share-section/></modal>
        </div>
    </transition>
</template>

<script>
    import ShareSection from "./ShareSection";
    export default {
        name: 'submit-bracket',
        components: {ShareSection},
        props: {
            appState: {
                type: Object,
                required: true
            }
        },
        methods: {
            show () {
                this.$modal.show('submit-modal');
            },
            hide () {
                this.$modal.hide('submit-modal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../variables";

    .submit-container{
        width: fit-content;
        margin: 25px auto;

        .submit-button {
            padding: 15px;
            border: solid 1px $candy-anthracite;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }
    }
</style>