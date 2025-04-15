const router = require('express').Router();

const routes = [
    {
        path: "/auth",
        router: require('../routes/auth.route')
    },
    {
        path: "/trip",
        router: require('../routes/create-trip-route')
    }
];

routes.forEach((route) => {
    return router.use(route.path, route.router);
});

module.exports = router;
