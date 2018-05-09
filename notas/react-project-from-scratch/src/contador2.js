

class Contador extends React.Component{

    constructor(props){
        super(props)

        this.handleAddOne = this.handleAddOne.bind(this)

        this.state = {
            count : 0
        }
    }

    handleAddOne(){
        this.setState( (prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }



    render(){
        return (
            <div>
                <h1> Count:  {this.state.count}</h1>
                <button onClick={this.handleAddOne} >+1</button>
                <button >-1</button>
                <button >Reset</button>

            </div>
        )
    }
}

ReactDOM.render(<Contador/>,document.getElementById('app'))




