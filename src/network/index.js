const usersRoutes = require("./users")
const productsRoutes = require("./products")

function routes(server) {
    server.use("/users", usersRoutes)
    server.use("/products", productsRoutes)
}

// http://localhost:8000/users GET

module.exports = routes
