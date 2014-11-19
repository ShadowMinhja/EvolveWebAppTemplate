/**
 * JSX version of the Mithril Getting Started documentation's TODO example.
 * http://lhorie.github.io/mithril/getting-started.html
 * @jsx m
 */
login.view = function(ctrl) {
	return m("div", {config:loginLoaded, class:"loginBackground"}, [
                    m("canvas", {id:"grassCanvas"}),
                    m("div", {id:"loginArea"}, [
                        m("img", {id:"canvasTest"}),
                        m("p", {id:"loginHeader"}, [ " Feed Sense"]),
                        m("p", {id:"loginLabel"}, ["Login"]),
                        m("input", {id:"userNameTextBox", type:"search", placeholder:"User Name", onchange:m.withAttr('value', ctrl.userName), value: ctrl.userName()}),
                        m("input", {id:"passwordTextBox", type:"search", placeholder:"Password",  onchange:m.withAttr('value', ctrl.password), value: ctrl.password()}),
                        m("a", {id:"loginButton", onclick: ctrl.getLoggedInUser }, ["Sign In"]),m("br"),   
                        m("button", {id:"loginGoogleButton"}),m("br"),                        
                        m("button", {id:"loginFacebookButton"})                        
                    ])
                ])            
};

/*
 * return <div class="loginBackground" config={initializeGrass}>                 
            <a class="button selected-button" data-role="button" style="z-index:100">Log In</a>
            <canvas id='s' style="z-index:-1"></canvas>
    </div>    
 */