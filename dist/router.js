"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const uuid_1 = require("uuid");
const app = require('express');
const cors_1 = __importDefault(require("cors"));
class Router {
    constructor(server) {
        const router = express.Router();
        const users = new Map();
        users[uuid_1.v4()] = { name: "amar",date: new Date() };
        users[uuid_1.v4()] = { name: "nitin", date: new Date() };
        const instructors = new Map();
        instructors[uuid_1.v4()] = { name: "instructor1", date: new Date() }
        instructors[uuid_1.v4()] = { name: "instructor2", date: new Date() }
        router.get('/', (req, res) => {
            res.json({
                message: `Nothing to see here, [url]/users instead.`
            });
        });
        //get all users
        router.get('/users', cors_1.default(), (req, res) => {
            res.json({
                users
            });
        });
        //create new users
        router.post('/users', cors_1.default(), (req, res) => {
            try {
                let user = {};
                Object.assign(user, req.body);
                const newUUID = uuid_1.v4();
                users[newUUID] = user;
                res.json({
                    uuid: newUUID
                });
            }
            catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        });
        //Instructor
        //get all instructors
        router.get('/instructors', cors_1.default(), (req, res) => {
            res.json({
                instructors
            })
        })

        //create new instructors
        router.post('/instructors', cors_1.default(), (req, res) => {
            try {
                let instructor= {};
                Object.assign(instructor, req.body)
                const newUUID = uuid_1.v4();
                instructors[newUUID] = instructor;
                res.json({
                    uuid: newUUID
                })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        });
        //editing task route
        router.post("/createEditingTask", (req, res) => {
            try {
                res.send('Editing Task created Successfully !')
                res.status(200).send(res.headers);
            }
            catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });
        //accestask
        router.get("/accessTask", (req, res) => {
            try {
                res.send('Task Accesed Sucessfully !')
                res.status(200).send(res.headers);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });


        //uploadImage

        router.post("/uploadImage", (req, res) => {
            try {
                res.send('Upoaded Sucessfully ! ')
                res.status(200).send(res.headers);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //downloadImage

        router.get("/downloadImage", (req, res) => {
            try {
                res.send('Downloaded Sucessfully !')
                res.status(200).send(res.headers);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //gradeImage

        router.get("/gradeImage", (req, res) => {
            try {
                res.send('Graded !')
                res.status(200).send(res.headers);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //stats

        router.get("/stats", (req, res) => {
            try {
                res.send('Stats Displayed')
                res.status(200).send(res.headers);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        router.options('*', cors_1.default());
        server.use('/', router);
    }
}
exports.default = Router;
