<template>
    <div>
        <Slider />
        <h2 id="HEADER">Midye</h2>
        <div>
            <div v-for="item in midyem" :key="item.Urun">
                <div class="most-parent">
                    <div id="adFiyat">
                        <p id="urunAdi">
                            {{ item.urun }}
                        </p>
                        <p id="urunFiyat">
                            {{ item.fiyat }}
                        </p>
                    </div>
                    <div id="aciklama">
                        {{ item.aciklama }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
#HEADER {
    font-family: helvetica;
    border-bottom: 1px solid orange;
}

.most-parent {
    width: 100%;
    height: 70px;
    margin-bottom: 2%;
    border: 0.5px dashed black;
    border-radius: 10px;
}

#urunAdi {
    font-family: helvetica;
    font-size: 18px;
}

#urunFiyat {
    font-weight: 500;
    font-family: helvetica;
}

#adFiyat {
    margin-bottom: 0%;
    display: flex;
    justify-content: space-between;
    margin-left: 3px;
    margin-right: 3px;
}

#adFiyat p {
    margin-bottom: 0%;
}

#aciklama {
    font-family: ubuntu;
    margin-left: 3px;
    margin-right: 3px;
}
</style>

<script>
import MenuItem from "../components/menu-item-comp.vue";
import midye from "../menu/midye.json";
export default {
    data() {
        return { midyem: midye }
    }
}
import { RouterLink, RouterView } from 'vue-router';
</script>