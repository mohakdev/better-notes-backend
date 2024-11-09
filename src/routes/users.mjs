import { request, Router } from "express";
import { checkSchema, validationResult } from "express-validator";
import { userValidationSchema } from "../validation/userValidation.mjs";
import passport from "passport";
import localStrategy from "./localStrategy.mjs";
import User from "../schemas/userSchema.mjs";

const router = Router();

router.use(passport.initialize());
router.use(passport.session());


router.get('/api/hello', (request, response) => {
    response.send("hello");
});


router.post('/api/signin', [passport.authenticate('local'), checkSchema(userValidationSchema)], (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty()) { response.status(400).send({ errors: result.array() }); }
    const data = matchedData(request);

});

router.post('/api/signup', (request, response) => {

});

export default router;