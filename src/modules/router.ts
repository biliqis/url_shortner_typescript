import { Router } from "express";
import urlController from "./url.controller";

class urlRouter {
    public router: Router;
  
    constructor() {
      this.router = Router();
       this.routes();
    }
    private routes(): void {

    this.router.post("/originalUrl", urlController.allUrl)
    this.router.get("/:urlId", urlController.getnewUrl)
    this.router.get("/statistics/:pathWay", urlController.getStatisticUrl)
}
  
  
  }
  
  export default new urlRouter().router;
  