import { promise } from "bcrypt/promises";
import db from "../models/index";
import CRUDServices from "../services/CRUDServices";
let getHomePage = async(req, res) => {
    let data = await CRUDServices.getAllSong();

    return res.render("displayCRUD.ejs", { dataTable: data });
};

let getCrud = (req, res) => {
    return res.render("CreateCRUD.ejs");
};

let postCrud = async(req, res) => {
    await CRUDServices.createNewSong(req.body);

    return res.render("CreateCRUD.ejs");
};

let GetEditCrud = async(req, res) => {
    let idSong = req.query.id;

    if (idSong) {
        let songData = await CRUDServices.getUserInforById(idSong);
        return res.render("editCRUD.ejs", { song: songData });
    } else {
        return res.send("khong co");
    }
};

let PutCrud = async(req, res) => {
    let data = req.body;

    let allSong = await CRUDServices.updateUserData(data);
    return res.render("displayCRUD.ejs", { dataTable: allSong });
};

let DeleteCrud = async(req, res) => {
    let songId = req.query.id;

    let allUser = await CRUDServices.deleteUserId(songId);
    return res.render("displayCRUD.ejs", { dataTable: allUser });
};

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    GetEditCrud: GetEditCrud,
    PutCrud: PutCrud,
    DeleteCrud: DeleteCrud,
};