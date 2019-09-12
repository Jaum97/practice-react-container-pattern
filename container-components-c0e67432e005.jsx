//https://medium.com/@learnreact/container-components-c0e67432e005

class CommentList extends React.Component {
  this.state = { comments: [] };

  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }  render() {
    return (
      <ul>
        {this.state.comments.map(c => (
          <li>{c.body}—{c.author}</li>
        ))}
      </ul>
    );
  }
}

class CommentListContainer extends React.Component {
  state = { comments: [] };  componentDidMount() {
    fetchSomeComments(comments =>
      this.setState({ comments: comments }));
  }  render() {
    return <CommentList comments={this.state.comments} />;
  }
}

const CommentList = props =>
  <ul>
    {props.comments.map(c => (
      <li>{c.body}—{c.author}</li>
    ))}
  </ul>
