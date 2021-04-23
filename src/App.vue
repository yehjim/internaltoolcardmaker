<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
$primary_text:#29275f;
$secondary_text:#929cb7;
$disable_text:#ccd4e6;
$primary_color:#3d61d7;
$secondary_color:#0a2540;
* {
    margin: 0;
    padding: 0;
}

@mixin centerflex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.topwhitebox {
    width: 100%;
    background-color: #fff;
    height: 64px;
}

.internaltooltitle {
    font-family: NotoSansCJKtc;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: $primary_text;
    margin-left: 24px;
}

.tabbar {
    height: 49px;
    width: 100%;
    .tabunderline {
        margin-left: 24px;
        margin-right: 24px;
        border-bottom: solid 1px $disable_text;
    }
}

.clockactivebtn {
    height: 36px;
    padding: 6px 18px 6px 16px;
    border-radius: 8px;
    background-color: $primary_color;
    @include centerflex;
    margin-right: 16px;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.85;
        letter-spacing: 0.28px;
        text-align: center;
        color: white;
    }
}

.clocknonactivebtn {
    height: 36px;
    padding: 6px 18px 6px 16px;
    border-radius: 8px;
    border: solid 1px $primary_color;
    @include centerflex;
    margin-right: 16px;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.85;
        letter-spacing: 0.28px;
        text-align: center;
        color: #3d61d7;
    }
}

.etalkactivebtn {
    height: 36px;
    padding: 6px 18px 6px 16px;
    border-radius: 8px;
    background-color: #006db1;
    margin-right: 16px;
    @include centerflex;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.85;
        letter-spacing: 0.28px;
        text-align: center;
        color: white;
        
    }
}

.etalknonactivebtn {
    height: 36px;
    padding: 6px 18px 6px 16px;
    border-radius: 8px;
    border: solid 1px #006db1;
    margin-right: 16px;
    @include centerflex;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.85;
        letter-spacing: 0.28px;
        text-align: center;
        color: #006db1;
        
    }
}

.content {
    width: 976px;
    height: 692px;
    padding: 24px 80px 24px 24px;
    border-radius: 8px;
    border: solid 1px #ccd4e6;
    background-color: #ffffff;
    margin: auto;
    display: flex;
    .cardarea {
        width: 464px;
        height: 644px;
        margin: 0 80px 0 0;
        padding: 26px 52px;
        border-radius: 8px;
        background-color: #849ebf;
        @include centerflex;
    }
}

.clockdownloadbtn {
    width: 328px;
    height: 42px;
    border-radius: 8px;
    background-color: #3d61d7;
    @include centerflex;
    cursor: pointer;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: 0.26px;
        text-align: center;
        color: #ffffff;
    }
}

.etalkdownloadbtn {
    width: 328px;
    height: 42px;
    border-radius: 8px;
    background-color: #006db1;;
    @include centerflex;
    cursor: pointer;
    span {
        font-family: NotoSansCJKtc;
        font-size: 13px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 2;
        letter-spacing: 0.26px;
        text-align: center;
        color: #ffffff;
    }
}

</style>
