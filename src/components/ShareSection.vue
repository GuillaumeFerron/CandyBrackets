<template>
    <div class="share-container">
        <img src="../assets/images/modal-cup.png"/>
        <div class="modal-right">
            <div class="t1">Complete!</div>
            <div class="t6">Congratulations, all done.</div>
            <div class="modal-share">
                <div class="t5 facebook-share">
                    <img src="../assets/images/facebook-share.png"/>SHARE
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'share-section',
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    @import '../variables';

    .share-container {
        display: flex;
        height: fit-content;
        -webkit-justify-content: space-between;
        -moz-justify-content: space-between;
        -ms-justify-content: space-between;
        -o-justify-content: space-between;
        -khtml-justify-content: space-between;
        justify-content: space-between;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        -o-align-items: center;
        -khtml-align-items: center;
        align-items: center;
        width: 80%;
        height: 100%;
        margin: 0 auto;

        img {
            height: 90%;
        }

        .modal-right {
            display: flex;
            -webkit-flex-direction: column;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -o-flex-direction: column;
            -khtml-flex-direction: column;
            flex-direction: column;

            .t1 {
                color: $candy-blue;
                margin-bottom: 10px;
            }

            .t6 {
                font-weight: 400;
                margin-bottom: 30px;
            }

            .facebook-share {
                display: flex;
                -webkit-align-items: center;
                -moz-align-items: center;
                -ms-align-items: center;
                -o-align-items: center;
                -khtml-align-items: center;
                align-items: center;
                width: 100px;
                -webkit-justify-content: space-around;
                -moz-justify-content: space-around;
                -ms-justify-content: space-around;
                -o-justify-content: space-around;
                -khtml-justify-content: space-around;
                justify-content: space-around;
                border: solid 3px $candy-anthracite;
                border-radius: 50px;
                padding: 8px;
            }

            .facebook-share:hover {
                cursor: pointer;
            }
        }
    }
</style>