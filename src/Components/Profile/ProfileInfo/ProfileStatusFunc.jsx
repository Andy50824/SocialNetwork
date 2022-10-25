import React, {useState, useEffect} from 'react'

const ProfileStatusFunc = (props) =>  {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.userStatus) 

    const activateEditMode = () => {
        setEditMode(true)
        }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
        }
    
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    useEffect( () => {
        setStatus(props.userStatus)
    }, [props.userStatus])

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.userStatus || '----'}</span>
                </div>}
                {editMode &&
                <div>
                    <input onChange={onStatusChange}  autoFocus={true} 
                        onBlur={deActivateEditMode} value={status}/>
                </div>}
            </div>
        )
    }


export default ProfileStatusFunc