<template>
    <div>
        <div class="switchbtnwrap">
            <router-link to="/clock/smallcard">
                <div class="clocknonactivebtn">
                    <span>小卡</span>
                </div>
            </router-link>
            <div class=" clockactivebtn">
                <span>立牌</span>
            </div>
            <div class="clocknonactivebtn">
                <span>流程圖</span>
            </div>
        </div>
        <div class="content">
            <div class="cardarea">
                <div class="imgwrap" id="content">
                    <div class="qrcodewrap">
                        <img id='barcode' class="barcode" src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp" alt="" title="HELLO" width="400" height="400" />
                    </div>
                    <div class="cliniclogowrap">
                        <img :style="{transform:'scale('+logoscale+')'}" id="preview_progressbarTW_img" src="#" />
                    </div>
    
                    <div class="clinicname">
                        <span :style="{fontSize:clinicfz+'px'}">{{clinicname}}</span>
                    </div>
                    <div class="lineid">
                        <span :style="{fontSize:lineidfz+'px'}">{{lineid}}</span>
                    </div>
                    <img id="pictest" src="../assets/standcard/allepin-standcard.jpg" alt="">
                </div>
            </div>
            <div class="editarea">
                <div class="uploadarea">
                    <div class="uploadbtn">
                        <span>立牌名稱</span>
                        <label for="fileup">檔案上傳</label>
                        <input type="file" @change="readURL" id="fileup" targetID="preview_progressbarTW_img" accept="image/gif, image/jpeg, image/png" />
    
                    </div>
    
                    <textinput inputtitle="縮放大小" inputwidth="108" inputplace="100" @emittextcontent="zoomscalechange"></textinput>
                </div>
                <div class="standcardname">
                    <textinput @emittextcontent="clinicnamechange" inputtitle="立牌名稱" inputwidth="204" inputplace="診所名稱"></textinput>
                    <textinput @emittextcontent="clinicfzchange" inputtitle="字級" inputwidth="108" inputplace="14"></textinput>
                </div>
                <div class="funconewrap">
                    <textinput @emittextcontent="lineidchange" inputtitle="方法一" inputwidth="204" inputplace="@doctor"></textinput>
                    <textinput @emittextcontent="lineidfzchange" inputtitle="字級" inputwidth="108" inputplace="14"></textinput>
                </div>
                <div class="functwowrap">
                    <textinput @emittextcontent="catchurl" inputtitle="方法二" inputwidth="204" inputplace="Url"></textinput>
                    <textinput @emittextcontent="qrcolorchange" inputtitle="顏色" inputwidth="108" inputplace="29275F"></textinput>
                </div>
                <div class="clockdownloadbtn" @click="downloadtable">
                    <span>檔案下載</span>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
import textinput from '../components/textinput'
import domtoimage from 'dom-to-image-more';
export default {
    data() {
        return {
            logoscale: '',
            clinicname: '凡凡牙醫診所',
            clinicfz: '55',
            lineid: '@doctor',
            lineidfz: '50',
            qrcolor: '',
            qrurl: ''
        }
    },
    methods: {
        catchurl(val) {
            this.qrurl = val
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=';
            document.querySelector('#barcode').setAttribute('src', url);

        },
        qrcolorchange(val) {
            this.qrcolor = val;
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=' + this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);
        },
        readURL(event) {
            let input = event.target;
            if (input.files && input.files[0]) {

                var imageTagID = input.getAttribute("targetID");

                var reader = new FileReader();

                reader.onload = function(e) {

                    var img = document.getElementById(imageTagID);

                    img.setAttribute("src", e.target.result)

                }

                reader.readAsDataURL(input.files[0]);

            }

        },
        zoomscalechange(val) {
            let a = parseInt(val, 10)
            let scale = a / 100
            this.logoscale = scale

        },
        clinicnamechange(val) {
            this.clinicname = val;
        },
        clinicfzchange(val) {
            this.clinicfz = val
        },
        lineidchange(val) {
            this.lineid = val;
        },
        lineidfzchange(val) {
            this.lineidfz = val
        },
        downloadtable() {
            var node = document.getElementById('content');
            let filename = this.clinicname + '小鬧鐘立牌.jpeg';
            domtoimage.toJpeg(node, { style: { 'background-color': 'white', 'transform': 'scale(1)' } })
                .then(function(dataUrl) {
                    var link = document.createElement('a');
                    link.download = filename;
                    link.href = dataUrl;
                    link.click();


                })
                .catch(function(error) {
                    console.error('oops, something went wrong!', error);
                });
        }
    },

    components: {
        textinput
    }
}
</script>

<style lang="scss" scoped>
.switchbtnwrap {
    height: 61px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
}

.content {
    .imgwrap {
        transform: scale(0.3);
        position: relative;
        h1 {
            position: absolute;
        }
        .clinicname {
            position: fixed;
            top: 17.5%;
            left: 24.5%;
            width: 620px;
            height: 120px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-size: 95px;
            }
        }
        .cliniclogowrap {
            position: fixed;
            left: 27%;
            height: 280px;
            width: 550px;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 100%;
                height: 280px;
            }
        }
        .lineid {
            position: fixed;
            top: 46%;
            left: 44%;
            width: 300px;
            height: 110px;
            display: flex;
            align-items: center;
            span {
                font-size: 50px;
            }
        }
        .qrcodewrap {
            position: absolute;
            top: 63%;
            left: 33.6%;
        }
    }
    .editarea {
        margin-top: 48px;
        .uploadarea {
            display: flex;
            margin-bottom: 40px;
            .uploadbtn {
                display: flex;
                flex-direction: column;
                margin-right: 16px;
                span {
                    font-family: NotoSansCJKtc;
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.58;
                    letter-spacing: 0.3px;
                    color: #929cb7;
                }
                input {
                    position: absolute;
                    display: none;
                }
                label {
                    box-sizing: border-box;
                    width: 136px;
                    height: 42px;
                    border-radius: 8px;
                    border: solid 1px #3d61d7;
                    background-color: #ffffff;
                    margin-top: 8px;
                    padding: 9px 22px 9px 23px;
                    font-family: NotoSansCJKtc;
                    font-size: 13px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.54;
                    letter-spacing: 0.09px;
                    text-align: center;
                    color: #3d61d7;
                }
            }
        }
        .standcardname,
        .funconewrap,
        .functwowrap {
            display: flex;
        }
        .funconewrap,
        .functwowrap {
            margin-top: 40px;
            margin-bottom: 40px;
        }
    }
}
</style>