class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addOne=this.addOne.bind(this)
        this.subtractOne = this.subtractOne.bind(this)
        this.reset = this.reset.bind(this)
        this.state={
            count: 0
        }
    }
    componentDidMount(){
        try {
            const data = localStorage.getItem('count')
            const count = parseInt(data)
            if(!isNaN(count)){
                this.setState(() => ({ count }))
            }
        } catch (e) {
            
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count)
        }
    }
    addOne(){
        this.setState((prevState)=>{
            return {
                count: prevState.count + 1
            }
        })
    }
    subtractOne(){
        this.setState((prev)=>{
            return {
                count: --prev.count
            }
        })
    }
    reset(){
        this.setState(()=>{
            return {
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />,document.getElementById('app'))