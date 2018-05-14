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
                <div class="t5 pdf-share" @click="pdfShare">
                    <img src="../assets/images/pdf-share.png"/>DOWNLOAD
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /* eslint-disable no-undef */

    import jsPDF from 'jspdf'
    import html2canvas from 'html2canvas';
    import {renderBracket} from "../utils";

    export default {
        name: 'share-section',
        methods: {
            pdfShare: function() {
                let pdf = new jsPDF('p','pt','letter');
                let selectorsArray = renderBracket();
                const margin = 30;

                html2canvas(selectorsArray[0][0]).then(function(canvas1) {
                    pdf.addImage(canvas1, 'JPEG', 10, 10, pdf.internal.pageSize.width - 20, (pdf.internal.pageSize.width - 20) * canvas1.height / (canvas1.width - 20));
                    html2canvas(selectorsArray[1][0]).then(function(canvas2) {
                        pdf.addPage();
                        let height2 = (pdf.internal.pageSize.width - 20) * canvas2.height / (canvas2.width - 20);
                        pdf.addImage(canvas2, 'JPEG', 10, margin, pdf.internal.pageSize.width - 20, height2);
                        html2canvas(selectorsArray[2][0]).then(function(canvas3) {
                            let height3 = (pdf.internal.pageSize.width - 20) * canvas3.height / (canvas3.width - 20);
                            pdf.addImage(canvas3, 'JPEG', 10, height2 + 2 * margin, pdf.internal.pageSize.width - 20, height3);
                            html2canvas(selectorsArray[3][0]).then(function(canvas4) {
                                let height4 = (pdf.internal.pageSize.width - 20) * canvas4.height / (canvas4.width - 20);
                                pdf.addImage(canvas4, 'JPEG', 10, height2 + height3 + 3 * margin, pdf.internal.pageSize.width - 20, height4);
                                html2canvas(selectorsArray[4][0]).then(function(canvas5) {
                                    let height5 = (pdf.internal.pageSize.width - 20) * canvas5.height / (canvas5.width - 20);
                                    pdf.addImage(canvas5, 'JPEG', 10, height2 + height3 + height4 + 4 * margin, pdf.internal.pageSize.width - 20, height5);
                                    pdf.save('test.pdf');
                                })
                            })
                        })
                    })
                })
            }
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

            .modal-share {
                display: flex;
                -webkit-flex-direction: row;
                -moz-flex-direction: row;
                -ms-flex-direction: row;
                -o-flex-direction: row;
                -khtml-flex-direction: row;
                flex-direction: row;
                -webkit-justify-content: space-between;
                -moz-justify-content: space-between;
                -ms-justify-content: space-between;
                -o-justify-content: space-between;
                -khtml-justify-content: space-between;
                justify-content: space-between;
            }

            .t5 {
                display: flex;
                -webkit-align-items: center;
                -moz-align-items: center;
                -ms-align-items: center;
                -o-align-items: center;
                -khtml-align-items: center;
                align-items: center;
                width: fit-content;
                -webkit-justify-content: space-around;
                -moz-justify-content: space-around;
                -ms-justify-content: space-around;
                -o-justify-content: space-around;
                -khtml-justify-content: space-around;
                justify-content: space-around;
                border: solid 3px $candy-anthracite;
                border-radius: 50px;
                padding-left: 10px;
                padding-top: 8px;
                padding-bottom: 8px;
                padding-right: 10px;
                -webkit-transition: all .1s;
                -moz-transition: all .1s;
                -ms-transition: all .1s;
                -o-transition: all .1s;
                transition: all .1s;
            }

            .t5:hover {
                cursor: pointer;
                color: $candy-blue;
            }

            .modal-share img {
                margin-right: 10px;
            }
        }
    }
</style>