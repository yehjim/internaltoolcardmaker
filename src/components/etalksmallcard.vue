<template>
    <div>
        <div class="switchbtnwrap">
            <div class="etalkactivebtn">
                <span>小卡</span>
            </div>
            <router-link to="/etalk/standcard">
                <div class="etalknonactivebtn">
                    <span>立牌</span>
                </div>
            </router-link>
    
            <div class="etalknonactivebtn">
                <span>流程圖</span>
            </div>
        </div>
        <div class="content">
            <div class="cardarea">
                <div class="imgwrap" id="content">
                    <div class="qrcodewrap">
                        <img id='barcode' class="barcode" src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp" alt="" title="HELLO" width="220" height="220" />
                    </div>
                    <div class="clinicname">
                        <span :style="{fontSize:clinicfz+'px'}">{{clinicname}}</span>
                    </div>
                    <div class="lineid">
                        <span :style="{fontSize:lineidfz+'px'}">{{lineid}}</span>
                    </div>
                    <img src="../assets/smallcard/etalksmallcard-front.jpg" alt="">
                    
                </div>
                <div class="backwrap" id="content2">
                    <img src="../assets/smallcard/etalksmallcard-back.jpg" alt="">

                </div>
            </div>
            <div class="editarea">
                <div class="cardnamewrap">
                    <textinput @emittextcontent="catchclinic" inputtitle="立牌名稱" inputwidth="204" inputplace="診所名稱"></textinput>
                    <textinput @emittextcontent="catchclinicfz" inputtitle="字級" inputwidth="108" inputplace="14"></textinput>
                </div>
                <div class="funconewrap">
                    <textinput @emittextcontent="catchlineid" inputtitle="方法一" inputwidth="204" inputplace="@doctor"></textinput>
                    <textinput @emittextcontent="catchlineidfz" inputtitle="字級" inputwidth="108" inputplace="14"></textinput>
                </div>
                <div class="functwowrap">
                    <textinput @emittextcontent="catchurl" inputtitle="方法二" inputwidth="204" inputplace="Url"></textinput>
                    <textinput @emittextcontent="catchqrcolor" inputtitle="字級" inputwidth="108" inputplace="14"></textinput>
                </div>
                <div class="etalkdownloadbtn" @click="downloadsmallcard">
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
    name: 'Home',
    data() {
        return {
            clinicname: '凡凡牙醫診所',
            lineid: '@doctor',
            clinicfz: '50',
            lineidfz: '30',
            qrurl:'',
            qrcolor:''
        }
    },
    methods:{
        catchclinic(val){
            this.clinicname = val
        },
        catchclinicfz(val){
            this.clinicfz = val
        },
        catchlineid(val){
            this.lineid = val;
        },
        catchlineidfz(val){
            this.lineidfz = val;
        },
        catchurl(val){
            this.qrurl = val
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=' + this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);
        },
        catchqrcolor(val){
            this.qrcolor = val
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=' + this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);
        },downloadsmallcard(){
            var node = document.getElementById('content');
            var node2 = document.getElementById('content2')
            let filename1 = this.clinicname + '醫點通小卡.jpeg';
            let filename2 = this.clinicname + '醫點通小卡背面.jpeg'
            domtoimage.toJpeg(node, { style: { 'background-color': 'white', 'transform': 'scale(1)' } })
                .then(function(dataUrl) {
                    var link = document.createElement('a');
                    link.download = filename1;
                    link.href = dataUrl;
                    link.click();
                    node.setAttribute("style", "transform: scale(0.5);");


                })
                .catch(function(error) {
                    console.error('oops, something went wrong!', error);
                });
            domtoimage.toJpeg(node2, { style: { 'background-color': 'white', 'opacity': '1' } })
                .then(function(dataUrl) {
                    var link = document.createElement('a');
                    link.download = filename2;
                    link.href = dataUrl;
                    link.click();
                    node.setAttribute("style", "transform: scale(0.5);");


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
        transform: scale(0.5);
        position: relative;
        .clinicname {
            position: fixed;
            top: 1%;
            left: 2.5%;
            width: 550px;
            height: 110px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                font-size: 95px;
            }
        }
        .lineid {
            position: fixed;
            top: 26%;
            left: 46%;
            width: 180px;
            height: 45px;
            display: flex;
            align-items: center;
            span {
                font-size: 50px;
            }
        }
        .qrcodewrap {
            position: absolute;
            top: 41.5%;
            left: 31%;
        }
    }
    .backwrap{
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .editarea {
        margin-top: 48px;
        .cardnamewrap,
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