<template>
    <div class="etalk">
        <div class="topwhitebox"></div>
        <h3 class="internaltooltitle">Internal TooL</h3>
        <div class="tabbar">
            <div class="tabwrap">
                <router-link to="/clock">
                    <div class="clocktab">
                        <h4 class="tabname">
                            看牙小鬧鐘
                        </h4>
    
                    </div>
                </router-link>
                <router-link to="/etalk">
    
                    <div class="etalktab tabactive">
                        <h4 class="tabname ">
                            醫點通
                        </h4>
                    </div>
                </router-link>
            </div>
    
            <div class="tabunderline">
            </div>
    
    
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {


}
</script>

<style lang="scss" scoped>
.tabactive {
    border-bottom: solid 1px #006db1;
}
a{
  text-decoration: none;
}
.etalk {
    width: 100vw;
    background-color: #f5f6fa;
    .topwhitebox {
        margin-bottom: 64px;
    }
    .tabbar {
        margin-bottom: 23px;
        .tabwrap {
            display: flex;
            justify-content: center;
            .clocktab,
            .etalktab {
                height: 48px;
                width: 160px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #202d31;
                ;
            }
        }
    }
}
</style>
