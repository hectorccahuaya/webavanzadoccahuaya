import React from 'react';
import { Link } from 'react-router-dom';
const NotFount = () => {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <div className="col-6 mt-2 mb-2">
                    <div className="error-template">
                        <h1>Ooops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Lo sentimos, has solicitado una pagina que no existe
                            </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                <span className="glyphicon glyphicon-home" />
                                LLevame al inicio{' '}
                            </Link>
                            <Link to="/login" className="btn btn-default btn-lg">
                                <span className="glyphicon glyphicon-envelope" /> inicia sesion {' '}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NotFount;