# Micro Frontends with Server Side Includes (SSI)

A micro frontends test setup with docker-compose.

# Run instructions

Start containers:

```
cd ~/micro-frontends-demo
docker-compose up -d
docker-compose logs --follow
```

Open [http://localhost:8080/angular-app-a/](http://localhost:8080/angular-app-a/). There is one user preconfigured to login from within these micro frontends: testuser/testuser.

# The setup

This setup starts multiple angular apps in dev mode with `ng serve`. These are exposed with an Nginx reverse proxy.

Besides there is also a fully configured Keycloak instancs. You can reach the admin console under [http://localhost:8081/auth/](http://localhost:8081/auth/) and login with admin/admin.
