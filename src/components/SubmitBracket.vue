<template>
    <transition name="slide-fade">
        <div class="submit-container" v-if="validateFinal">
            <div class="t3 submit-button choice-button" @click="show">
                SUBMIT
            </div>
            <modal name="submit-modal"><share-section/></modal>
        </div>
    </transition>
</template>

<script>
    import {validatePhase} from "../utils";
    import ShareSection from "./ShareSection";

    export default {
        name: 'submit-bracket',
        components: {ShareSection},
        props: {
            bracket: {
                type: Object,
                required: true
            }
        },
        computed: {
            validateFinal: function() {
                return validatePhase(this.bracket.final);
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