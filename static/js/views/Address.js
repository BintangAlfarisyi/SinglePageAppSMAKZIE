import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Address")
    }

    async getHtml(){
        return `
        <section class="address">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.531226578159!2d107.13439741409768!3d-6.8267210686727315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68525760aaa209%3A0x4a4020b1836d1a1d!2sSMK%20Negeri%201%20Cianjur!5e0!3m2!1sid!2sid!4v1679894853043!5m2!1sid!2sid" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <ul>
                <li><i class="fa-solid fa-city"></i>Jl. Siliwangi No.41, Sawah Gede, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat 43212</li>
                <li><a href="https://goo.gl/maps/CZDVzhuEeo5Bgvrf7"><i class="fa-solid fa-location-dot"></i> Get Direction</a></li>
            </ul>
        </section>

        <!-- Footer -->
        <section class="footer">
            <div class="social">
                <a href="https://www.instagram.com/smakzie/" class="fa-brands fa-instagram"></a>
                <a href="https://www.facebook.com/SMKN1CIANJUR?_rdc=1&_rdr" class="fa-brands fa-facebook"></a>
                <a href="https://www.youtube.com/channel/UCn50Px7NAyRtIHEMMqVMM6g" class="fa-brands fa-youtube"></a>
                <a href="https://github.com/BintangAlfarisyi" class="fa-brands fa-twitter"></a>
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