<template>
    <div class="header">
        Kategoriler
    </div>
    <div class="slider">
        <div id="sliderItems">
            <router-link id="sliderItem" to="/ana-yemekler">
                <img src="../assets/img/anayemek.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/biralar">
                <img src="../assets/img/biralar.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/makarnalar">
                <img src="../assets/img/makarnalar.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/atistirmaliklar">
                <img src="../assets/img/atistirmaliklar.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/salatalar">
                <img src="../assets/img/salatalar.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/tabaklar">
                <img src="../assets/img/kampanyalar.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/alkollu-icecekler">
                <img src="../assets/img/alkolluicecekler.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/kokteyller">
                <img src="../assets/img/kokteyller.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/icecekler">
                <img src="../assets/img/icecekler.png" alt="">
            </router-link>
            <router-link id="sliderItem" to="/midye">
                <img src="../assets/img/midye.png" alt="">
            </router-link>
        </div>
    </div>
</template>


<style>
.header {
    font-family: helvetica;
    font-size: 23px;
    margin-left: 3px;
    margin-bottom: 5px;
}

.slider {
    height: 125px;
    width: 100%;
    overflow: scroll;
    position: relative;
}

#sliderItems {
    width: max-content;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    justify-content: space-between;

}

#sliderItem {
    width: 125px;
    height: 125px;
    margin-left: 3px;
    margin-right: 3px;
    text-align: center;
    overflow-y: hidden;
}

#sliderItem img {
    width: 100%;
    border-radius: 15%;
    margin-bottom: 0%;
}

#sliderItem p {
    color: black;
    font-family: helvatica;
    margin: 0%;
}
</style>

<script>
</script>