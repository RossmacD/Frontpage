import { useState } from 'react'
import { Button, ListItem, TextArea } from '@fluentui/react-northstar'
import { editComment } from '../data/api'

export const Comment = ({ comment, auth, user }) => {
    const [editing, setEditing] = useState(false)
    const [editedComment, setComment] = useState(comment.body)

    const setCommentHandler = (e) => {
        setComment(e.target.value)
    }
    const userControls = (
        <div>
            <Button onClick={() => {
                console.log(editedComment)
                if (editing) {
                    // Make request
                    editComment(comment.id, {
                        body: editedComment,
                    })
                    setEditing(false)
                } else {
                    setEditing(true)
                }
            }}>{editing ? 'Save' : 'Edit'}</Button>
            <Button>Delete</Button>
        </div>)

    return (
        <ListItem endMedia={auth && comment.user_id === user.id ? (userControls) : comment.created_at} content={editing ? <TextArea
            fluid
            placeholder={auth ? 'Comment' : 'You must be logged in to comment'}
            name='comment'
            value={editedComment}
            onChange={setCommentHandler} /> : editedComment}>
        </ListItem>
    )
}
