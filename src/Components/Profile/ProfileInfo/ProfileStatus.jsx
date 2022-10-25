import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: ""
     }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        })}

    deActivateEditMode = () => {
        this.setState( {
            editMode: false,    
        })
        this.props.updateStatus(this.state.status)
        
    }

    updateMyStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate (prevProps) {
        
        if (prevProps.userStatus !== this.props.userStatus) {
              this.setState({
                      status: this.props.userStatus})}
         }

    render () {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.userStatus || '----'}</span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.updateMyStatus}  autoFocus={true} 
                        onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus