import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("About Us")
    }

    async getHtml(){
        return `
            <!-- About -->
            <section class="about">
                <div class="text">
                    <h1>Kepala Sekolah</h1>
                    <p>Ir. Wawan Marwardi, M.MPd</p>
                </div>
                <img src="https://smkn1cianjur.sch.id/wp-content/uploads/2022/07/kepala-sekolah-smkn-1-cianjur.png" alt="">
            </section>

            <section class="container">
                <h1>Kompetensi Keahlian</h1>
                <div class="jurusan">
                    <div class="mplb">
                        <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/otkp.jpg" alt="Manajemen Perkantoran Dan Layanan Bisnis (MPLB)">
                        <h3>Manajemen Perkantoran Dan Layanan Bisnis</h3>
                    </div>
                    <div class="ps">
                        <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/bdps.jpg" alt="Pemasaran (PS)">
                        <h3>Pemasaran</h3>
                    </div>
                    <div class="akkul">
                        <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/akkul.jpg" alt="Akuntansi Dan Keuangan Lembaga (AKKUL)">
                        <h3>Akuntansi Dan Keuangan Lembaga</h3>
                    </div>
                    <div class="pplg">
                        <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/rpl.jpg" alt="Pengembangan Perangkat Lunak Dan Gim (PPLG)">
                        <h3>Pengembangan Perangkat Lunak Dan Gim</h3>
                    </div>
                    <div class="tjkt">
                        <img src="https://ppdb.smkn1cianjur.sch.id/assets/img/speakers/tkj.jpg" alt="Teknik Jaringan Komputer Dan Telekomunikasi (TJKT)">
                        <h3>Teknik Jaringan Komputer Dan Telekomunikasi</h3>
                    </div>
                </div>
            </section>

            <section class="ppdb">
                <h1>PPDB <span>SMKN 1 Cianjur</span></h1>
                <a href="https://ppdb.smkn1cianjur.sch.id/">Selengkapnya</a>
            </section

            <!-- Footer -->
            <section class="footer">
                <div class="social">
                    <a href="https://www.instagram.com/smakzie/" class="fa-brands fa-instagram"></a>
                    <a href="https://www.facebook.com/SMKN1CIANJUR?_rdc=1&_rdr" class="fa-brands fa-facebook"></a>
                    <a href="https://www.youtube.com/channel/UCn50Px7NAyRtIHEMMqVMM6g" class="fa-brands fa-youtube"></a>
                    <a href="https://twitter.com/smakzie" class="fa-brands fa-twitter"></a>
                </div>
                <ul class="list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/address">Address</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
                <h3>The Right Place To Get Success For The Future</h3>
                <p class="copyright">
                    <i class="fa-regular fa-copyright"></i> 2023 Divisi IT SMKN 1 Cianjur
                </p>
            </section>
        `; 
    }
}