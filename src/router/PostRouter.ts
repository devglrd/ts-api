import {Router, Request, Response, NextFunction} from "express";

class PostRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public GetPosts(req: Request, res: Response): void {
    }

    public GetPost(req: Request, res: Response): void {
        const slug: String = req.params.slug;
    }

    public CreatePosts(req: Request, res: Response): void {
        const title: String = req.body.title;
        const slug: String = req.body.slug;
        const content: String = req.body.content;
        const image: String = req.body.image;
    }

    public UpdatePosts(req: Request, res: Response): void {
        const slug: String = req.params.slug;
    }

    public DeletePost(req: Request, res: Response): void {
        const slug: String = req.params.slug;
    }

    routes() {
        this.router.get('/', this.GetPosts);
        this.router.get('/:slug', this.GetPost);
        this.router.post('/', this.CreatePosts);
        this.router.post('/:slug', this.UpdatePosts);
        this.router.delete('/:slug', this.DeletePost);
    }
}


const postRoutes = new PostRouter();
export default postRoutes.router;
