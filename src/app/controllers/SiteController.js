
const data = [
    {
        id: 1,
        name: 'java'
    },
    {
        id: 2,
        name: 'php'
    }
]

class SiteController {

    index(req, res){
        res.send('Home')
    }

    showHome(req, res){
        res.json({status: "Success", dataItem: data});
    }

}

module.exports = new SiteController;