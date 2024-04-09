const newman = require("newman")

newman.run({
    collection: "../json-collection/andini.postman_collection.json",
    environment: "../json-env/andini-env.json",
    reporters: ["cli", "htmlextra"]
})
