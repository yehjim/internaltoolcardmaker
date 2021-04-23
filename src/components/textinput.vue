<template>
    <div class="inputwrap" :style="{width:inputwdt+'px'}">
        <span class="inputtitle">{{inputtlt}}</span>
        <input type="text"  v-model="inputcontent" :placeholder="inputplc" @change="textcontentchange">
    
    </div>
</template>

<script>
export default {
    props: ['inputwidth', 'inputtitle', 'inputplace',],
    data() {
        return {
            inputwdt: this.inputwidth,
            inputtlt: this.inputtitle,
            inputplc: this.inputplace,
            inputcontent: ''
        }
    },
    methods: {
        textcontentchange() {
            
            this.$emit('emittextcontent', this.inputcontent)
        }
    }
}
</script>

<style lang="scss" scoped>
.inputwrap {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    .inputtitle {
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
        height: 40px;
        box-sizing: border-box;
        border-radius: 8px;
        border: solid 1px #929cb7;
        background-color: #ffffff;
        margin-top: 8px;
        padding: 8px 8px 8px 14px;
    }
}
</style>