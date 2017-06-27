var express = require('express');
var router = express.Router();



router.get('/:id', function(req, res) {
    res.send('Hello user : ' + req.params.id);
});

/*router.post('/', function(req, res) {
    res.json({success: true});
});*/

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({
        success: true,
        user: req.body.username
    });
});


router.put('/', function(req, res) {
    res.status(400).json({message: 'Hey, you Bad Request'});
});

router.delete('/:id', function(req, res) {
    res.send('Received a DELETE Request');
});

module.exports = router;
