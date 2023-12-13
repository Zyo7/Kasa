const ErrorCompo = () => (
    <div className="errorPage">
        <h1 className="errorPage__title">404</h1>
        <p className="errorPage__text">Oups! La page que vous demandez n'existe pas.</p>
        <a className="errorPage__link" href="/">Retourner sur la page d'accueil</a>
    </div>
);

export default ErrorCompo;