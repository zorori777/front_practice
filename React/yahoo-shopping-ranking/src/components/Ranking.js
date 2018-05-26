import React from 'react';
import Proptypes from 'prop-types';

export default class Ranking extends React.Component {

  componentWillMount() {
    this.props.onMount(this.props.categoryId)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId)
    }
  }

  render () {
    return (
      <div>
        <h2>Rankingコンポーネント</h2>
        <p>カテゴリーID: {this.props.categoryId} </p>
      </div>
    )
  }
}

Ranking.propTypes = {
  categoryId: Proptypes.string,
  onMount: Proptypes.func.isRequired,
  onUpdate: Proptypes.func.isRequired
};

Ranking.defaultProps = {
  categoryId: '1'
}
