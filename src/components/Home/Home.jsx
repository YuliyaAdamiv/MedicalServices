import React, {Component} from 'react';

import {map} from 'underscore';

import './Home.scss';

import Header from '../Header/Header';

import {ReactComponent as User} from '../../images/user.svg';
import {ReactComponent as Star} from '../../images/star.svg';
import {ReactComponent as Nurse} from '../../images/nurse.svg';
import {ReactComponent as House} from '../../images/house.svg';
import {ReactComponent as Clients} from '../../images/clients.svg';
import {ReactComponent as Messages} from '../../images/messages.svg';
import {ReactComponent as Broadcast} from '../../images/broadcast.svg';
import {ReactComponent as Employees} from '../../images/employees.svg';
import {ReactComponent as Appointment} from '../../images/appointment.svg';

const TITLE = 'Основна';

const SECTIONS = [
  {title: 'Прийоми', href: '/appointments', Icon: Appointment},
  {title: 'Новини', href: '/events', Icon: Star},
  {title: 'Сповіщення', href: '/notifications', Icon: Broadcast},
  {title: 'Повідомлення', href: '/messages', Icon: Messages},
  {title: 'Пацієнти', href: '/clients', Icon: Clients},
  {title: 'Співробітники', href: '/employees', Icon: Employees},
];

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header
          title={TITLE}
          userName="Адамів Юлія Олегівна"
          className="Home-Header"
          renderIcon={() => <House className="Header-Icon" />}
        />{' '}
        <div className="Home-Body">
          <div className="SectionNavigation">
            {' '}
            {map(SECTIONS, ({title, href, Icon}) => (
              <a className="SectionNavigation-Item Section" href="#">
                <Icon className="Section-Icon" />
                <span className="Section-Title"> {title} </span>{' '}
              </a>
            ))}{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}
