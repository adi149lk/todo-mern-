const express = require("express");
const apiRo = express.Router();
const usercontroller = require("../controllers/user");
apiRo.get("/item", usercontroller.getItem);
apiRo.post("/item", usercontroller.PostItem);
apiRo.put("/:itemId", usercontroller.complete);
apiRo.delete("/delete/:itemId", usercontroller.delete);

module.exports = apiRo;
