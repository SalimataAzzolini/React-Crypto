import React from 'react';
import { Navigate } from 'react-router-dom';


/* Dans les children on va retouver adminrouter qui est maintenant un enfant de AuthGuard def dans app*/ /* Parfois authprovider ou routeprovider */
const AuthGuard = ({children}) => {

    let isLogged = () => {
        let token = localStorage.getItem('token')
        return !!token // not not token transforme les variable en booleen et davoir un resultat true ou false si il  ya chose dans le local envoie true sinon envoie false
    }

    /*  si on est pas logge on donne l'instruction au router de naviguer vers login si pas connecter sinon on renvoie les routes enfants de admin*/
if(!isLogged()){
        return <Navigate to="/login" />
    }
    return children;
};

export default AuthGuard;