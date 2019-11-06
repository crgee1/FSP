import React from 'react';

class IndexUserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    }

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleFollow() {
    this.setState({
      user_id: this.props.user.id,
      follower_id: this.props.currentUser.id
    }, () => this.props.createFollow(this.state))
  }

  handleUnfollow() {
    const id = this.props.follows[this.props.user.id].id
    this.props.deleteFollow(id);
  }

  render() {
    const { user, followees, i } = this.props;
    const follow = followees.includes(user.id) ? 
      <button className='follow-btn' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='follow-btn' onClick={this.handleFollow}>Follow</button>;
    return (
      <div className={i % 2 === 0 ? 'userIndex-item dark' : 'userIndex-item'}>
        <section className='avatar-image-mid'>
          <h1>{user.username[0]}</h1>
        </section>
        <section className='userIndex-item-info'>
          <div className='userIndex-item-name'>{user.username}</div>
          {follow}
        </section>
        <section className='userIndex-item-count'>
          <label>Activities</label>
          <div>
            {user.activitiesCount}
          </div>
        </section>
        <section className='userIndex-item-count'>
          <label>Routes</label>
          <div>
            {user.routesCount}
          </div>
        </section>
      </div>
    )
  }
}

export default IndexUserItem;
