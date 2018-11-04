Input example:

```jsx
class In extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
          value:""
      }
    }
    
    render(){
        return (
            <div>
            <p>{this.state.value}</p>
            <Input value={this.state.value} onChange={(e)=>{
                    this.setState({value:e.target.value})
        }} small placeholder="First Name bty" />
        </div>
        )
    }
}
<In />

```