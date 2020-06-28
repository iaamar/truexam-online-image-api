import * as express from 'express'
// const app = express.Router();
import User from './models/User'
import { v4 as uuid } from 'uuid';
import cors from 'cors'
import Instructor from './models/Instructor';

class Router {

    constructor(server: express.Express) {
        const router = express.Router();
        const instructors = new Map<string,Instructor>();
        const users = new Map<string, User>();
        users[uuid()] = { name: "amar", date: new Date() }
        users[uuid()] = { name: "nitin", date: new Date() }
        instructors[uuid()] = { name: "instructor1", date: new Date()}
        instructors[uuid()] = { name: "instructor2", date: new Date() }

        router.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                message: `[url]/users  or [url]/instructors`
            });
        });

        //get all users
        router.get('/users', cors(), (req: express.Request, res: express.Response) => {
            res.json({
                users
            })
        })

        //create new user
        router.post('/users', cors(), (req: express.Request, res: express.Response) => {
            try {
                let user: User = {} as User;
                Object.assign(user, req.body)
                const newUUID = uuid();
                users[newUUID] = user;
                res.json({
                    uuid: newUUID
                })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        });

        //Instructor
        //get all instructors
        router.get('/instructors', cors(), (req: express.Request, res: express.Response) => {
            res.json({
                instructors
            })
        })

        //create new instructors
        router.post('/instructors', cors(), (req: express.Request, res: express.Response) => {
            try {
                let instructor: Instructor = {} as Instructor;
                Object.assign(instructor, req.body)
                const newUUID = uuid();
                instructors[newUUID] = instructor;
                res.json({
                    uuid: newUUID
                })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        });
        router.post("/createEditingTask", (req, res) => {
            try {
                res.send('Editing Task created Successfully !')
                res.status(200).send(res);
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
                res.status(200).send(res);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });


        //uploadImage

        router.post("/uploadImage", (req, res) => {
            try {
                res.send('Upoaded Sucessfully ! ')
                res.status(200).send(res);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //downloadImage

        router.get("/downloadImage", (req, res) => {
            try {
                res.send('Downloaded Sucessfully !')
                res.status(200).send(res);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //gradeImage

        router.get("/gradeImage", (req, res) => {
            try {
                res.send('Graded !')
                res.status(200).send(res);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });

        //stats

        router.get("/stats", (req, res) => {
            try {
                res.send('Stats Displayed')
                res.status(200).send(res);
            } catch (err) {
                console.log(err)
                throw new Error("Error");

            }
        });
        // //editing task route

        // /**
        //  * @swagger
        //  * /createEditingTask:
        //  *  post:
        //  *    description: Use to Create Editing task for users
        //  *    responses:
        //  *       '200':
        //  *         description:Editing Task posted to json
        //  *           
        //  */
        // app.post("/createEditingTask", (req, res) => {
        //     try {
        //         res.send('Editing Task created Successfully !')
        //         res.status(200).send(res)
        //     }
        //     catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });

        // //accestask

        // /**
        //  * @swagger
        //  * /accessTask:
        //  *  get:
        //  *    description: Use to Acces Editing task 
        //  *    responses:
        //  *       '200':
        //  *         description:Editing Task accesed from json
        //  *           
        //  */
        // app.get("/accessTask", (req, res) => {
        //     try {
        //         res.send('Task Accesed Sucessfully !')
        //         res.status(200).send(res);
        //     } catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });


        // //uploadImage

        // /**
        //  * @swagger
        //  * /uploadImage:
        //  *  post:
        //  *    description: Use to upload Image 
        //  *    responses:
        //  *       '200':
        //  *         description: Uploaded Sucessfully !
        //  *           
        //  */
        // app.post("/uploadImage", (req, res) => {
        //     try {
        //         res.send('Upoaded Sucessfully ! ')
        //         res.status(200).send(res);
        //     } catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });

        // //downloadImage

        // /**
        //  * @swagger
        //  * /downloadImage:
        //  *  get:
        //  *    description: Use to download Image 
        //  *    responses:
        //  *       '200':
        //  *         description: Download Sucessfully !
        //  *           
        //  */
        // app.get("/downloadImage", (req, res) => {
        //     try {
        //         res.send('Downloaded Sucessfully !')
        //         res.status(200).send(res);
        //     } catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });

        // //gradeImage

        // /**
        //  * @swagger
        //  * /gradeImage:
        //  *  get:
        //  *    description: Use to Grade Image 
        //  *    responses:
        //  *       '200':
        //  *         description: Graded Sucessfully !
        //  *           
        //  */
        // app.get("/gradeImage", (req, res) => {
        //     try {
        //         res.send('Graded !')
        //         res.status(200).send(res);
        //     } catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });

        // //stats

        // /**
        //  * @swagger
        //  * /stats:
        //  *  get:
        //  *    description: Use to Access Stats 
        //  *    responses:
        //  *       '200':
        //  *         description: Stats Displayed !
        //  *           
        //  */
        // app.get("/stats", (req, res) => {
        //     try {
        //         res.send('Stats Displayed')
        //         res.status(200).send(res);
        //     } catch (err) {
        //         console.log(err)
        //         throw new Error("Error");

        //     }
        // });

        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;
