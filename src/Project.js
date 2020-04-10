import React from "react";
import axios from "axios";

import './Project.css';

class Project extends React.Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        description: this.props.description
    }
    componentDidMount(){
        axios.get(`http://localhost:5004/api/projects/${this.props.id}`)
        .then(res => {
            this.setState({
                actions: res.actions
            })
        })
    }
    render() {
        return (
            <div className="project-details">
                <h3>Actions:</h3>
                {this.state.actions.map(action => (
                    <div>
                        <p>Description:{` ${action.description}`}</p>
                        <p>Notes:{` ${action.notes}`}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Project;