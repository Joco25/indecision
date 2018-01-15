class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.toggle=this.toggle.bind(this)
        this.state={
            visibility: false
        }
    }
    toggle(){
        this.setState((prev)=>{
            return {
                visibility: !prev.visibility
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.toggle}>{(this.state.visibility)?"Hide Text":"Show Text"}</button>
                {(this.state.visibility)&&<p>We got the whole nine</p>}
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>,document.getElementById('app'))