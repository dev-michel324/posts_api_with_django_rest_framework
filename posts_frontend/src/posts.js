import PropTypes from 'prop-types';

const Post = ({title, content}) => {
    return (
        <div className="column col-6">
            <div className="card">
                <div className="card-header">
                    <div className="card-title h5">{title}</div>
                </div>
                <div className="card-body">
                    {content}
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">See details</button>
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

Post.defaultProps = {
    title: "Waiting title...",
    content: "Waiting content"
}

export default Post;