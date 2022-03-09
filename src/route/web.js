import express from "express";
import CURDListSong from "../controllers/CURDListSong";
import ApiListSong from "../controllers/ApiListSong";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", CURDListSong.getHomePage);

    router.get("/create-crud", CURDListSong.getCrud);
    router.post("/post-crud", CURDListSong.postCrud);

    router.get("/edit-crud", CURDListSong.GetEditCrud);
    router.post("/put-curd", CURDListSong.PutCrud);

    router.get("/delete-curd", CURDListSong.DeleteCrud);

    router.get("/api/listsong", ApiListSong.handleGetListSong);
    return app.use("/", router);
};

module.exports = initWebRoutes;