import React from "react";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {cleanError} from "../../store/actions";
import {IError} from "../../interfaces/IError";

function NotFound() {
    const dispatch = useDispatch();
    const error: IError = useSelector((state: RootStateOrAny) => state.app.error);

    const cleanErr = () => {dispatch(cleanError())};

    return (
        <div className="not-found">
            <div className="error-info">
               <h3>
                   Resource {error.url ? `at this(${error.url}) address`: ''} is unavailable{error.errorStatus && `, error ${error.errorStatus}`}
               </h3>
               <h4>{error.errorText}</h4>
           </div>
            <div className="back-to-main">
                <Link to='/' onClick={cleanErr}>Back</Link>
            </div>
        </div>
    )
}

export default NotFound;
