const Post = ({title, content}) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title h5">{title}</div>
            </div>
            <div className="card-body">
                {content}
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Ver detalhes</button>
            </div>
        </div>
    )
}

Post.defaultProps = {
    title: "Waiting data...",
    content: "waiting content..."
}

export default Post;