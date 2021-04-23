<template>
    <div class="card">
        <div class="topwhitebox"></div>
        <h3 class="internaltooltitle">Internal TooL</h3>
        <div class="tabbar">
            <div class="tabwrap">
    
                <div class="clocktab tabactive">
                    <h4 class="tabname">
                        看牙小鬧鐘
                    </h4>
    
                </div>
                <router-link to="/etalk">
    
                    <div class="etalktab">
                        <h4 class="tabname">
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
    name: 'Home',
    components: {}
}
</script>

<style lang="scss" scoped>
$primary_text:#29275f;
$secondary_text:#929cb7;
$disable_text:#ccd4e6;
$primary_color:#3d61d7;
$secondary_color:#0a2540;
.tabactive {
    border-bottom: solid 1px $primary_color;
}

a {
    text-decoration: none;
}

.card {
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
                color: $primary_text; // border-bottom: solid 1px $primary_color;
            }
        }
    }
}
</style>
