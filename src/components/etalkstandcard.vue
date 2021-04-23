<template>
    <div>
        <div class="switchbtnwrap">
            <router-link to="/etalk/smallcard">
                <div class="etalknonactivebtn">
                    <span>小卡</span>
                </div>
            </router-link>
            <div class=" etalkactivebtn">
                <span>立牌</span>
            </div>
            <div class="etalknonactivebtn">
                <span>流程圖</span>
            </div>
        </div>
        <div class="content">
    
            <div class="cardarea">
    
                <div class="imgwrap" id="content">
                    <div class="qrcodewrap">
                        <img id='barcode' class="barcode" src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp" alt="" title="HELLO" width="450" height="450" />
                    </div>
                    <div class="clinicname">
                        <span :style="{fontSize:clinicfz+'px'}">{{clinicname}}</span>
                    </div>
                    <div class="lineid">
                        <span :style="{fontSize:lineidfz+'px'}">{{lineid}}</span>
                    </div>
                    <img src="../assets/standcard/etalkstandcard-01.jpg" alt="">
    
                </div>
    
            </div>
            <div class="editarea">
                <div class="standcardname">
                    <textinput inputtitle="立牌名稱" inputwidth="204" inputplace="診所名稱" @emittextcontent="clinicchange"></textinput>
                    <textinput inputtitle="字級" inputwidth="108" inputplace="14" @emittextcontent="clinicfzchange"></textinput>
                </div>
                <div class="funconewrap">
                    <textinput inputtitle="方法一" inputwidth="204" inputplace="@doctor" @emittextcontent="linechange"></textinput>
                    <textinput inputtitle="字級" inputwidth="108" inputplace="14" @emittextcontent="linefzchange"></textinput>
                </div>
                <div class="functwowrap">
                    <textinput inputtitle="方法二" inputwidth="204" inputplace="Url" @emittextcontent="catchurl"></textinput>
                    <textinput inputtitle="顏色" inputwidth="108" inputplace="29275F" @emittextcontent="catchcolor"></textinput>
                </div>
                <div class="etalkdownloadbtn" @click="downloadstandcard">
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
            clinicname: '連新國際牙醫',
            lineid: '@doctor',
            clinicfz: '90',
            lineidfz: '50',
            qrurl: '',
            qrcolor: ''
        }
    },
    methods: {
        clinicchange(val) {
            this.clinicname = val
        },
        clinicfzchange(val) {
            this.clinicfz = val;
        },
        linechange(val) {
            this.lineid = val
        },
        linefzchange(val) {
            this.lineidfz = val;
        },
        catchcolor(val) {
            this.qrcolor = val;
             var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color='+this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);
        },
        catchurl(val) {
            this.qrurl = val
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color='+this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);
        },
        downloadstandcard() {
            var node = document.getElementById('content')
            let filenam = this.clinicname + '醫點通立牌.jpeg'
            domtoimage.toJpeg(node, { style: { 'background-color': 'white', 'transform': 'scale(1)' } })
                .then(function(dataUrl) {
                    var link = document.createElement('a');
                    link.download = filenam;
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
            top: 2%;
            left: 19%;
            width: 750px;
            height: 170px;
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
            top: 24%;
            left: 46%;
            width: 320px;
            height: 80px;
            display: flex;
            align-items: center;
            span {
                font-size: 50px;
            }
        }
        .qrcodewrap {
            position: absolute;
            top: 43%;
            left: 32%;
        }
    }
    .editarea {
        margin-top: 48px;
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