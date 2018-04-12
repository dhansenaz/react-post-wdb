
module.exports = {

postListing: (request,res) => {
    console.log(request.body)
    // destructering
    const {name,address,city,state,zip} = request.body
        request.app.get('db').addListing(name,address,city,state,zip).then(response => {
            console.log(response)
            res.status(200).send(response)
        })
}

}