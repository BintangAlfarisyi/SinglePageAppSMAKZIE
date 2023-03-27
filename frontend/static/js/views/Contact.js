import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Contact Us")
    }

    async getHtml(){
        return `
            <section class="contact">
                <form>
                    <h2>Contact Me</h2>
                    <input type="text" class="form" id="name" placeholder="Your Name" required>
                    <input type="text" class="form" id="email" placeholder="Your Email" required>
                    <textarea id="massage" class="form" rows="4" placeholder="Massage"></textarea>
                    <button id="btn" class="form" type="button">Send</button>
                </form>
                <ul>
                    <li>
                        <i class="fa-solid fa-phone"> (0263) 261265</i>
                    </li>
                    <li>
                        <i class="fa-solid fa-envelope"> (0263) 261265</i>
                    </li>
                </ul?>
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