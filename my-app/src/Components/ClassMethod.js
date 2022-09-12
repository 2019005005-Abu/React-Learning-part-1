import react,{Component} from 'react';
export default class ClassMethod extends Component{
    render(props){
        // const{name,profession}=props
        return(
            <div>
              <h5>Name:{this.props.name}</h5>
              <p>University:{this.props.profession}</p>
            </div>
        )
    }
}