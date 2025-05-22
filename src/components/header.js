import "../css/header.css"

const SuziLinge=()=>{

    return(
        <>
          <header>
            <div className="logo">
                <img src="/varotra/images/suziLogo.jpg" alt="logo" />
                <h1>suzi lingerie</h1>
            </div>
            <div className="contact">
              <a href="https://web.facebook.com/profile.php?id=100092459257512&sk=about">   
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="
                 https://www.instagram.com/suzi03lingerie?igsh=MnFreXFycmZoYWJt">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100092459257512&sk=about">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </header>
          <section className="section-1">
             <div className="cover">
                <h2>Making life sweater with our online <span>clothes</span> store</h2>
             </div>
          </section>
        </>
    )
}

export default SuziLinge