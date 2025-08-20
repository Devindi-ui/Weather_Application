class AuthView{
    constructor(){
        //DOM Elements
        this.authModal = document.getElementById('auth-modal');
        this.authBtn = document.getElementById('auth-btn');
        this.logoutBtn = document.getElementById('logout-btn');
        this.closeModal = document.getElementById('close-modal');

        this.signupForm = document.getElementById('signup-form');
        this.loginForm = document.getElementById('login-form');
        this.showLogin = document.getElementById('show-login');
        this.showSignup = document.getElementById('show-signup');

        this.signupName = document.getElementById('signup-name');
        this.signupEmail = document.getElementById('signup-email');
        this.signupPassword = document.getElementById('signuo-password');
        this.loginEmail = document.getElementById('login-email');
        this.loginPassword = document.getElementById('login-password');

        this.signupBtn = document.getElementById('signup-btn');
        this.loginBtn = document.getElementById('login-btn');
    }

    //show authentication modal
    showAuthModal(){
        this.authModal.style.display = 'none';
    }

    //hide authentication modal
    hideAuthModal(){
        this.authModal.style.display = 'none';
        this.clearForms();
    }

    clearForms(){
        this.signupName.value = ''
        this.signupEmail.value = ''
        this.signupPassword.value = ''
        this.loginEmail.value = ''
        this.loginPassword.value = ''
    }

    //show the loginform and hide signup form
    showLoginForm(){
        this.showSignup.style.display = 'none';
        this.loginForm.style.display = 'block';
    }

    //show the signupform and hide loginform
    showLoginForm(){
        this.showSignup.style.display = 'block';
        this.loginForm.style.display = 'none';
    }

    showLoginButton(){
        this.authBtn.style.display = 'block';
        this.logoutBtn.style.display = 'none';
    }

    showLogoutButton(){
        this.authBtn.style.display = 'none';
        this.logoutBtn.style.display = 'block';
    }

    showError(message, formType){
        alert(message);
    }

    bindEvents(
        handleShowModal, handleHideModel, handleShowLogin, handleShowSignup,
        handleSignup, handleLogin, handleLogout
    ){
        //show modal when auth button is clicked
        this.authBtn.addEventListener('click', handleShowModal);

        //hide modal when auth button is clicked
        this.closeModal.addEventListener('click', handleHideModel);

        //hide model when clicking outside modal content
        this.authModal.addEventListener('click', (e) => {
            if(e,target === this.authModal){
                handleHideModel();
            }
        });

        //switch between login and signup forms 
        this.showLogin.addEventListener('click', handleShowLogin);
        this.showSignup.addEventListener('click', handleShowSignup);

        //form submissions
        this.signupBtn.addEventListener('click', () => {
            const name = this.signupName.value;
            const email = this.signupEmail.value;
            const password = this.signupPassword.value;
            handleSignup(name, email, password);
        });

        this.loginBtn.addEventListener('click', () => {
            const email = this.loginEmail.value;
            const password = this.loginPassword.value;
            handleSignup(email, password);
        });

        this.logoutBtn.addEventListener('click',handleLogout);
    }
}