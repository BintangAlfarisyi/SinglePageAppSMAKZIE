import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("SMKN 1 Cianjur")
    }

    async getHtml(){
        return `
            <!-- Home -->
            <section class="home" id="home">
                <h1>SMKN 1 Cianjur</h1>
                <p>Website Ini Memberikan Informasi Seputar Sekolah SMKN 1 Cianjur </p>
                <a href="/about"><button class="btn">About Us</button></a>
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