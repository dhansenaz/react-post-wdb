import React, {Component} from 'react'
import axios from 'axios'

class PostListingForm extends Component{
    constructor(){
        super()

        this.state = {

            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    postListing(){
        const newListing = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
        }
        axios.post( '/api/postlisting', newListing).then(response => {
            console.log(response)
        })
    }
    render(){
        return(
            <div>
                <form>
                    <input placeholder="Type proprty name here..."
                    onChange={(e) => this.setState({name: e.target.value}) }></input>
                    <input placeholder="Type your address here..."
                    onChange={(e) => this.setState({address: e.target.value}) }></input>
                    <input placeholder="Type your city here..."
                    onChange={(e) => this.setState({city: e.target.value}) }></input>
                    <input placeholder="Type your state here..."
                    onChange={(e) => this.setState({state: e.target.value}) }></input>
                    <input placeholder="Type your zipcode here..."
                    onChange={(e) => this.setState({zip: e.target.value}) }></input>
                </form>
                <button onClick={this.postListing.bind(this)}>Add Listing</button>
            </div>
        )
    }
}
export default PostListingForm
