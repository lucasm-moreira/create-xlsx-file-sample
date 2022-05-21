import { Router } from 'express';
import UserController from './app/core/controllers/UserController'

const routes = new Router();

routes.get('/users/report/generate', UserController.generateReport);

export default routes;