import "http://localhost:8080/auth/js/keycloak.js";

class Auth {
  constructor() {
    this.authBasePath = "http://localhost:8080/auth";
    this.clientId = "myapp";
    this.demoRealm = "demorealm";
    // this.authFullApiPath = `${this.authBasePath}/realms/${this.demoRealm}/protocol/openid-connect`;

    this.keycloakInstance = new Keycloak({
      url: this.authBasePath,
      realm: this.demoRealm,
      clientId: this.clientId
    });

    document
      .getElementById("login")
      .addEventListener("click", () => this.authenticate());
    document
      .getElementById("logout")
      .addEventListener("click", () => this.logout());

    this.checkSso();
  }

  checkSso() {
    this.keycloakInstance
      .init({
        onLoad: "check-sso",
        promiseType: "native",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html"
      })
      .then(authenticated => {
        if (authenticated) {
          document.getElementById("logout").classList.remove("hide");
        } else {
          document.getElementById("login").classList.remove("hide");
        }
      })
      .catch(() => alert("failed to initialize"));
  }

  authenticate() {
    this.keycloakInstance.login();
  }

  logout() {
    this.keycloakInstance.logout();
  }

  hasRole(role) {
    return this.getRoles().some(r => r === role);
  }

  getRoles() {
    return (
      (this.keycloakInstance &&
        this.keycloakInstance.tokenParsed &&
        this.keycloakInstance.tokenParsed.realm_access &&
        this.keycloakInstance.tokenParsed.realm_access.roles) ||
      []
    );
  }

  accountManagement() {
    this.keycloakInstance.accountManagement();
  }
}
export let auth = new Auth();
