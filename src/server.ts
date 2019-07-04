import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as helmet from "helmet";
import * as compression from "compression";
import * as cors from "cors";
import * as mysql from "mysql";
// import Routers
import PostRouter from './router/PostRouter';
import StaticsRouter from './router/StaticsRouter';
import UserRouter from './router/UserRouter';

// Server Class
const config = require('dotenv').config();

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config() {
        //set up mongoose
        this.connectToDb();

        //config
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }


    private connectToDb() {
        let connection = mysql.createConnection({
            host: (process.env.DB_HOST) as string,
            user: (process.env.DB_USERNAME) as string,
            password: (process.env.DB_PASSWORD) as string,
            database: (process.env.DB_NAME) as string
        });

        connection.connect();

    }

    public routes(): void {
        this.app.use('/', StaticsRouter);
        this.app.use('/api/v1/posts', PostRouter);
        this.app.use('/api/v1/users', UserRouter);

    }
}

//export
export default new Server().app;
