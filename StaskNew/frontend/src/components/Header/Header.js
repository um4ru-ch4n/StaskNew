import React from 'react'
import classes from './Header.css'
import { connect } from 'react-redux'

const Header = props => {
    return (
        <nav className={classes.Header + " navbar navbar-expand-lg navbar-light bg-light"}>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Logo <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <ul className="navbar-nav my-2 my-lg-0">
                    {
                        !props.isAuthenticated
                            ? <React.Fragment>
                                <li className="nav-item">
                                    <a className="nav-link" href="auth">Авторизация <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="registration">Регистрация <span className="sr-only">(current)</span></a>
                                </li>
                            </React.Fragment>
                            : <React.Fragment>
                                <li className="nav-item">
                                    <a className="nav-link" href="logout">Выйти <span className="sr-only">(current)</span></a>
                                </li>
                            </React.Fragment>
                    }
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
