
<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="maltKategoriler">
        <ul>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/ana-yemekler">
                            <div id="item">
                                <p>
                                    Ana Yemekler
                                </p>
                                <img src="../assets/img/anayemek.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/biralar">
                            <div id="item">
                                <p>
                                    Biralar
                                </p>
                                <img src="../assets/img/biralar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/makarnalar">
                            <div id="item">
                                <p>
                                    Makarnalar
                                </p>
                                <img src="../assets/img/makarnalar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/atistirmaliklar">
                            <div id="item">
                                <p>
                                    Atıştırmalıklar
                                </p>
                                <img src="../assets/img/atistirmaliklar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/salatalar">
                            <div id="item">
                                <p>
                                    Salatalar
                                </p>
                                <img src="../assets/img/salatalar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/tabaklar">
                            <div id="item">
                                <p>
                                    Tabaklar
                                </p>
                                <img src="../assets/img/kampanyalar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/alkollu-icecekler">
                            <div id="item">
                                <p>
                                    Alkollü<br>İçecekler
                                </p>
                                <img src="../assets/img/alkolluicecekler.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/kokteyller">
                            <div id="item">
                                <p>
                                    Kokteyller
                                </p>
                                <img src="../assets/img/kokteyller.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/icecekler">
                            <div id="item">
                                <p>
                                    İçecekler
                                </p>
                                <img src="../assets/img/icecekler.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/midye">
                            <div id="item">
                                <p>
                                    Midye
                                </p>
                                <img src="../assets/img/midye.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
            <li>
                <div class="kategori">
                    <div id="ilkItem">
                        <RouterLink to="/viskiler">
                            <div id="item">
                                <p>
                                    Viskiler <br> /
                                    Şişe içkiler
                                </p>
                                <img src="../assets/img/viskiler.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                    <div id="ikinciItem">
                        <RouterLink to="/saraplar">
                            <div id="item">
                                <p>
                                    Şaraplar
                                </p>
                                <img src="../assets/img/saraplar.png" alt="">
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
.kategori {
    margin-inline: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#ilkItem {
    width: 50%;
}

#ikinciItem {
    width: 50%;
}

#item {
    margin-left: 4px;
    margin-right: 4px;
}

#item img {
    width: 100%;
    border-radius: 10%;
}

#item p {
    position: absolute;
    color: white;
    margin-left: 12px;
    font-size: 20px;
    font-family: helvetica;
    letter-spacing: 1px;
}

.maltKategoriler ul {
    list-style-type: none;
    padding: 0;
}

.maltKategoriler {
    width: 100%;
}
</style>