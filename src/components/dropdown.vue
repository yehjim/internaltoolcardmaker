<template>
    <div class="dropdownwrap">
        <span class="dropdowntitle">背面流程</span>
        <div class="dropdownmenu" >
    
            <ul :style="{height:menuheight+'px'}" @click="opendrop">
                <li class="currentmode">背面流程</li>
                <li @click="front">正面</li>
                <li @click="normalmode">一般</li>
                <li @click="botmode">Bot module</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:['propsheight'],
    data() {
        return {
            menuheight: this.propsheight
        }
    },
    methods:{
        opendrop(){
            this.menuheight = '185';

        },
        normalmode(){
            this.$emit('emitmode','normal')
        },botmode(){
            this.$emit('emitmode','bot')
        },front(){
             this.$emit('emitmode','normalfront')
        }
    }
}
</script>

<style lang="scss" scoped>
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
        ul {
            list-style: none;
            border-radius: 8px;
            border: solid 1px #929cb7;
            background-color: #ffffff;
            height: 40px;
            overflow: hidden;
            li {
                font-family: NotoSansCJKtc;
                font-size: 15px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.6;
                letter-spacing: 0.08px;
                color: #29275f;
                // margin: 7px 17px 9px 15px;
                padding-left: 15px;
                padding-top: 7px;
                height: 40px;
                display: flex;
                align-items: center;
              
                
            }
            .currentmode {
                height: 40px;
                border-bottom: solid 0.5px #929cb7;
                display: flex;
                align-items: center;
                padding-left: 15px;
                padding-top: 0px;
                
            }
        }
    }
}
</style>