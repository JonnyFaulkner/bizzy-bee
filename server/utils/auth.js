const jwt = require('jsonwebtoken');

// needs to be stored in a .env file after testing phase
const secret = 'mysecretsshhhhh';
// will set after development is done
// const expiration = '';

module.exports = {
    signToken: function({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({data: payload}, secret ); 
            // {expiresIn: expiration}); will set after development
    },

    authMiddleware: function({ req }) {
        //allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        //  if no token, return request as is
        if (!token) {
            return req;
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret );
                // { maxAge: expiration }); will set after testing phase
            req.user = data;
        } catch(error) {
            console.error(error.message);
        }

        // return updated request object
        return req;
    }
}