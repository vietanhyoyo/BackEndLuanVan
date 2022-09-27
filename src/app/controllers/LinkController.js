
const Link = require("../models/Link")

class LinkController {

    add(req, res) {
        if (!req.body.link) res.send(400);
        else {
            const { link } = req.body
            Link.create(link, (err, doc) => {
                if (err) res.send(err);
                else res.send(doc);
            })
        }
    }

}

module.exports = new LinkController;