import './footer.css';


const Footer = () => {
    return(
        <footer className="footer__content">
        <div className="text">
            <h2 className="footer__content-title">TESTAR O PREMIUM DE GRAÇA</h2>
            <p className="footer__content-subtitle">
                Inscreva-se para curtir música ilimitada e podcasts com apenas alguns anúncios. Não precisa de cartão de crédito.
            </p>
        </div>
        <div className="footer__content__button">
            <button type="button">Inscreva-se</button>
        </div>
</footer>
    )
}

export default Footer;