import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText:"" ,
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemes: memes})
                
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value}) 
    }

    handleClick = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemes.length)
        const randMeme = this.state.allMemes[randNum].url
        this.setState({randomImg : randMeme})
        console.log(randNum)
        
        }


    render() { 
        return ( 
        <div className="genfield">
            <form onSubmit={this.handleClick}>
                <input 
                name="topText" 
                type="text"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
                />
                
                <br />
                <input 
                name="bottomText" 
                type="text"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
                />
                <br/>

                

                <Button 
                style={{margin:10}}
                variant="contained" 
                color="primary">Gen</Button>
            </form>

            <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
            <h2 className="bottom">{this.state.bottomText}</h2>
            </div>
        </div> 
        );
    }
}
 
export default MemeGenerator;