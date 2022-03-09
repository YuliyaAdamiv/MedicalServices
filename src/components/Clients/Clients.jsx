import React, {Component} from 'react';

import Moment from 'react-moment';
import {map, filter} from 'underscore';

import Table from '../Table/Table';
import Header from '../Header/Header';

import '../Staff/Staff.scss';

import {ReactComponent as Appointment} from '../../images/clients.svg';

import {clients as data} from '../lib/StaffsDate';

const TITLE = 'Клієнти';

const USER = 'Адамів Юлія Олегіна';

export default class Appointments extends Component {
  state = {
    filter: {
      startDate: null,
      endDate: null,
      clientName: '',
      onlyMe: false,
    },
  };

  onChangeFilterField = (name, value) => {
    const {filter} = this.state;

    this.setState({
      filter: {...filter, ...{[name]: value}},
    });
  };

  onChangeFilterDateField = (name, value) => {
    const {filter} = this.state;

    this.setState({
      filter: {...filter, ...{[name]: value && value.getTime()}},
    });
  };

  render() {
    const {startDate, endDate, clientName, onlyMe} = this.state.filter;

    let filtered = filter(data, (o) => {
      return (
        (startDate ? o.date >= startDate : true) &&
        (endDate ? o.date <= endDate : true) &&
        (clientName
          ? clientName.length > 2
            ? o.clientName.includes(clientName)
            : true
          : true) &&
        (onlyMe ? o.holderName === USER : true)
      );
    });
    return (
      <div className="Appointments">
        <Header
          title={TITLE}
          userName={USER}
          className="Appointments-Header"
          bodyClassName="Appointments-HeaderBody"
          renderIcon={() => <Appointment className="Header-Icon" />}
        />
        <div className="Appointments-Body">
          <Table
            data={filtered}
            className="AppointmentList"
            columns={[
              {
                dataField: 'doctorSurname',
                text: 'Прізвище',
                headerStyle: {
                  width: '300px',
                },
              },
              {
                dataField: 'doctorName',
                text: "Ім'я",
                headerStyle: {
                  width: '150px',
                },
              },

              {
                dataField: 'afterFather',
                text: 'По-батькові',
              },
              {
                dataField: 'dateofbirth',
                text: 'Дата народження',
                headerStyle: {
                  width: '300px',
                },
                formatter: (v, row) => {
                  return <Moment date={v} format="DD.MM.YYYY HH.mm" />;
                },
              },
              {
                dataField: 'address',
                text: 'Адреса',
                headerStyle: {
                  width: '200px',
                },
              },
              {
                dataField: 'phoneNumber',
                text: 'Номер телефону',
                headerStyle: {
                  width: '200px',
                },
              },
              {
                dataField: 'emailAddress',
                text: 'E-mail',
                headerStyle: {
                  width: '200px',
                },
              },
            ]}
          />
        </div>
      </div>
    );
  }
}
