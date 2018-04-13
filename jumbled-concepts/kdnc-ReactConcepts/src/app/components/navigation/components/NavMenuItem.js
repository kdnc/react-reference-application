import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import SmartMenuList from './NavMenuList'


export default class SmartMenuItem extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const item = this.props.item;


    const title = !item.parent ?
      <span className="menu-item-parent">{item.title}</span> :
      <span>{item.title}</span>;

    const badge = item.badge ? <span className={item.badge.class}>{item.badge.label || ''}</span> : null;
    const childItems = item.items ? <SmartMenuList items={item.items}/> : null;

    const icon = item.icon ? (
      item.counter ? <i className={item.icon}><em>{item.counter}</em></i> : <i className={item.icon}/>
    ) : null;



    // Nuwan commented following line
    // // const liClassName = (item.route && this.context.router.isActive(item.route) ) ? 'active' : '';
    const liClassName = '';

    const link = item.route ?
      (<NavLink to={item.route} title={item.title} activeClassName="active">
        {icon} {title} {badge}
      </NavLink>) :
      (<a href={item.href || '#'} onClick={this._handleClick} title={item.title}>
        {icon} {title} {badge}
      </a>);

    return <li className={liClassName}>{link}{childItems}</li>
  }
}

