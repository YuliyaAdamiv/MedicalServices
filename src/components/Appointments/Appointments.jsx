import React, {Component} from 'react';

import {Form} from 'reactstrap';
import Moment from 'react-moment';
import {map, filter} from 'underscore';
import {Button} from 'reactstrap';

import Table from '../Table/Table';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import TextField from '../Form/TextField/TextField';
import DateField from '../Form/DateField/DateField';
import CheckboxField from '../Form/CheckboxField/CheckboxField';

import './Appointments.scss';

import service from '../services/AppointmentServices';

import {ReactComponent as Appointment} from '../../images/appointment.svg';
import {ReactComponent as Search} from '../../images/search.svg';

const TITLE = 'Прийоми';

const USER = 'Адамів Юлія Олегіна';

export default class Appointments extends Component {
  state = {
    data: null,
    isLoading: false,

    filter: {
      startDate: null,
      endDate: null,
      clientName: '',
      onlyMe: false,
    },
  };

  componentDidMount() {
    this.load();
  }

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
  onSearch = () => {
    this.load();
  };

  load() {
    this.setState({isLoading: true});

    service.find({filter: this.state.filter}).then(({success, data}) => {
      if (success) {
        this.setState({
          data,
          isLoading: false,
        });
      }
    });
  }

  render() {
    const {
      data,
      isLoading,
      filter: {startDate, endDate, clientName, onlyMe},
    } = this.state;

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
          <div className="Appointments-Filter">
            <Form className="Appointments-FilterForm">
              <DateField
                hasTime
                name="startDate"
                value={startDate}
                dateFormat="dd/MM/yyyy HH:mm"
                timeFormat="HH:mm"
                placeholder="З"
                className="Appointments-FilterField"
                onChange={this.onChangeFilterDateField}
              />
              <DateField
                hasTime
                name="endDate"
                value={endDate}
                dateFormat="dd/MM/yyyy HH:mm"
                timeFormat="HH:mm"
                placeholder="До"
                className="Appointments-FilterField"
                onChange={this.onChangeFilterDateField}
              />
              <TextField
                name="clientName"
                value={clientName}
                placeholder="Клієнт"
                className="Appointments-FilterField"
                onChange={this.onChangeFilterField}
              />
              <CheckboxField
                name="onlyMe"
                label="Тільки я"
                value={onlyMe}
                className="Appointments-FilterField"
                onChange={this.onChangeFilterField}
              />
              <Button
                className="Appointments-SearchBtn"
                onClick={this.onSearch}
              >
                <Search className="Appointments-SearchBtnIcon" />
              </Button>
            </Form>
          </div>
          {isLoading ? (
            <Loader />
          ) : data ? (
            <Table
              data={data}
              className="AppointmentList"
              columns={[
                {
                  dataField: 'date',
                  text: 'Дата',
                  headerStyle: {
                    width: '150px',
                  },
                  formatter: (v, row) => {
                    return <Moment date={v} format="DD.MM.YYYY HH.mm" />;
                  },
                },
                {
                  dataField: 'clientName',
                  text: 'Клієнт',
                  headerStyle: {
                    width: '300px',
                  },
                },
                {
                  dataField: 'status',
                  text: 'Статус',
                },
                {
                  dataField: 'holderName',
                  text: 'Приймаючий',
                  headerStyle: {
                    width: '300px',
                  },
                },
                {
                  dataField: 'compliences',
                  text: 'Скарги',
                  headerStyle: {
                    width: '200px',
                  },
                },
                {
                  dataField: 'diagnosis',
                  text: 'Діагноз',
                  headerStyle: {
                    width: '200px',
                  },
                },
              ]}
            />
          ) : (
            'Немає данних'
          )}
        </div>
      </div>
    );
  }
}
