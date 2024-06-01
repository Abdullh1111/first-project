import { Router } from 'express';
import { route } from '../../module/student/student-router';
import { UserRoutes } from '../../module/Users/user.route';

const moduleRoutes = [
  {
    path: '/student',
    route: route,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
];

const routes = Router();
moduleRoutes.forEach((route) => routes.use(route.path, route.route));

export default routes;
