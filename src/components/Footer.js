import './Components.css'



const Footer = () => {
    return (
        <div>   
                    <h2 class="rotate">CONTACT ME</h2>
        <div  id="contact">
            <div class="col">
                <i class="fa-brands fa-github"></i>
                <a href="https://github.com/cthomas265">GitHub: cthomas265</a>
            </div>
            <div class="col">
                <i class="fa-solid fa-mobile"></i>
                <a href="tel:9208675309">Phone: (920)867-5309</a>
            </div>
            <div class="col">
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/carrie-thomas-69203a187/">LinkedIn: Carrie Thomas</a>
            </div>
            <div class="col">
                <i class="fa-solid fa-paper-plane"></i>
                <a href="mailto:cmthomas289@gmail.com">Email: cmthomas289@gmail.com</a>
            </div>
        </div>
    
        </div>
    )
}

export default Footer;