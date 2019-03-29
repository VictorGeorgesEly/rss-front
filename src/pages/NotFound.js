import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1>NotFound !</h1>
            <Typography paragraph>
                NotFound NotFound NotFound NotFound NotFound NotFound NotFound
            </Typography>
            {/* TODO Ajout d'un composant modifiable selon la position du systeme !*/}
            <Link to="/connexion">Redirection</Link>
        </div>
    );
}