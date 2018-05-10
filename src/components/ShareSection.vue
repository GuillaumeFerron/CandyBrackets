<template>
    <div class="share-container">
        <p>Export as a PDF</p>
        <p @click="sendMail">Send mail</p>
    </div>
</template>

<script>
    import {renderBracket} from "../utils";

    export default {
        name: 'share-section',
        methods: {
            sendMail: function() {
                console.log(renderBracket());
            }
        }
    }
</script>

<style lang="scss" scoped>
    .share-container {
        p:hover {
            cursor: pointer;
        }
    }
</style>