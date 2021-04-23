<template>
    <div>
        <div class="switchbtnwrap">
            <div class="clockactivebtn">
                <span>小卡</span>
            </div>
            <router-link to="/clock/standcard">
                <div class="clocknonactivebtn">
                    <span>立牌</span>
                </div>
            </router-link>
            <div class="clocknonactivebtn">
                <span>流程圖</span>
            </div>
        </div>
        <div class="content">
            <div class="cardarea">
                <div class="imgwrap" id="content" v-if="cardmode=='normalfront'||cardmode=='botback'">
                    <div class="qrcodewrap">
                        <img id='barcode' class="barcode" src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp" alt="" title="HELLO" width="220" height="220" />
                    </div>
                    <div class="clinicname">
                        <span :style="{fontSize:clinicfz+'px'}">{{clinicname}}</span>
                    </div>
                    <div class="lineid">
                        <span :style="{fontSize:lineidfz+'px'}">{{lineid}}</span>
                    </div>
                    <img id="pictest" src="../assets/smallcard/clocksmallcard-front.jpg" alt="">
                </div>
                <div class="normalcardwrap" id="content2" v-if="cardmode=='normalfront'">
                    <img id="pictest" src="../assets/smallcard/clocksmallcard-backnormal.jpg" alt="">
    
                </div>
                <div class="normalcardwrap" id="content2" v-if="cardmode=='botback'">
                    <img id="pictest" src="../assets/smallcard/clocksmallcard-backbot.jpg" alt="">
    
                </div>
    
    
            </div>
            <div class="editarea">
                <div class="cardnamewrap">
                    <textinput inputtitle="立牌名稱" inputwidth="204" inputplace="診所名稱" @emittextcontent="clinicnamechange"></textinput>
                    <textinput inputtitle="字級" inputwidth="108" inputplace="14" @emittextcontent="clinicfzchange"></textinput>
                </div>
                <div class="funconewrap">
                    <textinput inputtitle="方法一" inputwidth="204" inputplace="@doctor" @emittextcontent="lineidchange"></textinput>
                    <textinput inputtitle="字級" inputwidth="108" inputplace="14" @emittextcontent="lineidfzchange"></textinput>
                </div>
                <div class="functwowrap">
                    <textinput inputtitle="方法二" inputwidth="204" inputplace="Url" @emittextcontent="catchurl"></textinput>
                    <textinput inputtitle="顏色" inputwidth="108" inputplace="29275F" @emittextcontent="qrcolorchange"></textinput>
                </div>
                <div class="backflowwrap">
                    <div class="dropdownwrap">
                        <span class="dropdowntitle">背面流程</span>
                        <div class="dropdownmenu" @click="opendrop">
                            Bot Module
                            <ul :style="{height:menuheight+'px',display:displaymode}" >
    
                                <li @click="changemode('normal')">一般</li>
                                <li @click="changemode('bot')">Bot module</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="clockdownloadbtn" @click="downloadtable">
                    <span>檔案下載</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/dom-to-image/2.6.0/dom-to-image.js">

</script>

<script>
import textinput from '../components/textinput'
import dorpdown from '../components/dropdown'
import domtoimage from 'dom-to-image-more';
export default {
    name: 'Home',
    data() {
        return {
            clinicname: '凡凡牙醫診所',
            clinicfz: '55',
            lineid: '@doctor',
            lineidfz: '30',
            qrcolor: '',
            qrurl: '',
            cardmode: 'normalfront',
            menuheight: '0',
            displaymode:'none'
        }
    },
    methods: {
        catchurl(val) {
            this.qrurl = val
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=';
            document.querySelector('#barcode').setAttribute('src', url);
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
        opendrop() {
            this.menuheight = '88'
            this.displaymode = 'block'
        },
        changemode(mode) {
            if (mode == 'normal') {
                this.cardmode = 'normalfront'
                
                this.displaymode = 'none'
            } else {
                this.cardmode = 'botback'
                
                this.displaymode = 'none'
                console.log('有按到')
            }
        },
       
        qrcolorchange(val) {
            this.qrcolor = val;
            var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + this.qrurl + '&color=' + this.qrcolor;
            document.querySelector('#barcode').setAttribute('src', url);

        },
        downloadtable() {
            var node = document.getElementById('content');
            var node2 = document.getElementById('content2')
            // node.setAttribute("style", "transform: scale(1);");
            let filename1 = this.clinicname + '小鬧鐘小卡.jpeg';
            let filename2 = this.clinicname + '小鬧鐘小卡背後-一般.jpeg'
            if (this.cardmode == 'normalfront') {
                filename2 = this.clinicname + '小鬧鐘小卡背後-一般.jpeg'
            } else {
                filename2 = this.clinicname + '小鬧鐘小卡背後-BotModule.jpeg'
            }
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
            domtoimage.toJpeg(node2, {
                    style: {
                        'background-color': 'white',
                        'transform': 'scale(1)',
                        'opacity': '1'
                    }
                })
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

        },

        readURL(input) {
            if (input.files && input.files[0]) {

                var imageTagID = input.getAttribute("targetID");

                var reader = new FileReader();

                reader.onload = function(e) {

                    var img = document.getElementById(imageTagID);

                    img.setAttribute("src", e.target.result)

                }

                reader.readAsDataURL(input.files[0]);

            }
        }
    },
    components: {
        textinput,
        dorpdown
    }
}
</script>

<style lang="scss" scoped>
.switchbtnwrap {
    height: 61px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    transform: scale();
}

.content {
    position: relative;
    .imgwrap,
    .normalcardwrap {
        transform: scale(0.5);
        position: relative;
        h1 {
            position: absolute;
        }
        .clinicname {
            position: fixed;
            top: 1%;
            left: 1.5%;
            width: 620px;
            height: 110px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .lineid {
            position: fixed;
            top: 24.7%;
            left: 45.3%;
            width: 180px;
            height: 43px;
            display: flex;
            align-items: center;
            span {
                font-size: 10px;
            }
        }
    }
    .normalcardwrap {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
    }
    .qrcodewrap {
        position: absolute;
        top: 40.5%;
        left: 32.5%;
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
        .dropdownwrap {
            width: 328px;
            margin-bottom: 64px;
            .dropdowntitle {
                font-family: NotoSansCJKtc;
                font-size: 12px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.58;
                letter-spacing: 0.3px;
                color: #929cb7;
            }
            .dropdownmenu {
                margin-top: 8px;
                width: 328px;
                height: 40px;
                border-radius: 8px;
                border: solid 1px #929cb7;
                background-color: #ffffff;
                position: relative;
                font-family: NotoSansCJKtc;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.6;
                letter-spacing: 0.08px;
                color: #29275f;
                padding: 8px 8px 8px 14px;
                box-sizing: border-box;
                ul {
                    width: 327px;
                    height: 88px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px 0 rgba(41, 39, 95, 0.2);
                    border: solid 1px #929cb7;
                    background-color: #ffffff;
                    position: absolute;
                    top: 50px;
                    left: 0px;
                    li {
                        width: 327px;
                        height: 36px;
                        list-style: none;
                        padding: 6px 127px 6px 16px;
                        box-sizing: border-box;
                    }
                    li:nth-child(1) {
                        margin-top: 8px;
                    }
                    li:nth-child(2) {
                        margin-bottom: 8px;
                    }
                    li:hover {
                        background-color: #e4ebf9;
                    }
                }
            }
        }
    }
}
</style>