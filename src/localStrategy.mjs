import passport from "passport";
import { Strategy } from "passport-local";

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    done(null, user.id);
})

export default passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
    const user = 'abd';
    try {
        //Check if username exists and if he/she does then check if password is correct
        done(null, user); //pass the actual found user over here
    }
    catch (err) {
        done(err, null);
    }
}));