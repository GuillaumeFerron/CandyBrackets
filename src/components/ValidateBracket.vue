<template>
    <transition name="slide-fade">
        <div class="validate-container" v-if="validateFinal">
            <div class="validate-button choice-button" @click="show">
                VALIDATE
            </div>
            <modal name="validate-modal">Hello</modal>
        </div>
    </transition>
</template>

<script>
    import {validatePhase} from "../utils";

    export default {
        name: 'validate-bracket',
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
                this.$modal.show('validate-modal');
            },
            hide () {
                this.$modal.hide('validate-modal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .validate-container{
        width: fit-content;
        margin: 25px auto;

        .validate-button {
            padding: 15px;
            border: solid 1px #2c3e50;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }
    }
</style>