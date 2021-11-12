import { Router } from "express"
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateMessageController } from "./Controllers/CreateMessageController";
import { GetLast3MessagesController } from "./Controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./Middleware/ensureAuthenticated";
import { ControllerUserProfile } from "./Controllers/ControllerUserProfile"

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post("/messages", ensureAuthenticated ,new CreateMessageController().handle);
router.get("/messages/last3", new GetLast3MessagesController().handle);
router.get("/profile", ensureAuthenticated, new ControllerUserProfile().handle);

export { router };