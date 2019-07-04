import {Router, Request, Response} from "express";

class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        //load routes
        this.routes()
    }

    /**
     * getUsers
     */
    public getUsers(req: Request, res: Response): void {

    }


    /**
     * getUser
     */
    public getUser(req: Request, res: Response): void {
        const username = req.params.username

    }

    /**
     * CreateUser
     */
    public CreateUser(req: Request, res: Response): void {
        const name: String = req.body.name;
        const username: String = req.body.username;
        const email: String = req.body.email;
        const password: String = req.body.password;


    }

    /**
     * UpdateUser
     */
    public UpdateUser(req: Request, res: Response): void {
        const username = req.params.username

    }


    /**
     * DeleteUser
     */
    public DeleteUser(req: Request, res: Response): void {
        const slug = req.params.slug

    }

    /**
     * routes
     */
    public routes() {
        this.router.get('/', this.getUsers);
        this.router.post('/', this.CreateUser);
        this.router.get('/:username', this.getUser);
        this.router.post('/:username', this.UpdateUser);
        this.router.delete('/:username', this.DeleteUser);
    }
}

const userRoute = new UserRouter();
export default userRoute.router;
