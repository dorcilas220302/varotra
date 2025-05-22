import "../css/contact.css"

const ContactComponents=()=>{


    return(
        <>
          <section className="con-section">
            <div className="upper">
                <p>Pour plus d'information, veuillez nous contacter directement par notre address email en bas ou  nous appeler directement pour faire votre commande </p>
            </div>
            <div className="info">
                <div className="card">
                    <i className="fas fa-phone-square"></i>
                    <h6>+261 34 11 489 35 </h6>
                </div>
                <div className="card">
                    <i className="fas fa-envelope "></i>
                    <h6>validordorcilas@gmail.com</h6>
                </div>
                <div className="card">
                    <i className="fas fa-map-marked"></i>
                    <h6>Tana-Andoharanofotsy</h6>
                </div>
            </div>
            <div className="submit">
                <input type="text" placeholder="name"/>
                <input type="email" placeholder="email" />
                <textarea name="" id="" placeholder="message"></textarea>
                <button>submit</button>
            </div>
          </section>
        </>
    )
}

export default ContactComponents