import { Router } from "express";
import router from "../../modules/router";

class indexRouter {
  public router: Router = Router();

  constructor() {
  this.router.use("/url", router);

  }
}

export default new indexRouter().router;
