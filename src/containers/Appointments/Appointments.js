import React, { Component } from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Moment from 'react-moment'
import { map, filter } from 'underscore'
import { Button, Collapse } from 'reactstrap'

import AppointmentFilter from '../Appointments/AppointmentFilter'
import Table from '../../components/Table/Table'
import ModalWindows from '../../components/ModalWindow/ModalWindows'

import Pagination from "../../components/com";
import "../../components/app.scss";
import './Appointments.scss'

import Header from '../Header/Header'

import LoadAppointmentStatusesAction from '../../actions/directory/LoadAppointmentStatusesAction'

import * as appointmentListActions from '../../redux/appointment/list/appointmentListActions'

import { ReactComponent as Appointment } from '../../images/appointment.svg'

const TITLE = 'Приёмы'

const USER = 'Иванов Иван Иванович'

// маппинг состояния приложения в свойства компонента-контейнера
function mapStateToProps (state) {
 
    return {
        error: state.appointment.list.error,
        isFetching: state.appointment.list.isFetching,
        dataSource: state.appointment.list.dataSource,
        shouldReload: state.appointment.list.shouldReload,

        directory: state.directory
    }
}

// подключение генераторов действий к компоненту-контейнеру
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            ...bindActionCreators(appointmentListActions, dispatch)
        }
    }
}

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  
  load() {
    this.actions.load({
        ...this.props.dataSource.filter.toJS()
    })
  }
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  render() {

    // берём данные из состояния приложения используя свойства props
    const {
      isFetching,
      dataSource: ds,
      directory
    } = this.props


    return (
      <div className='Appointments'>
        <Header
          title={TITLE}
          userName={USER}
          className='Appointments-Header'
          bodyClassName='Appointments-HeaderBody'
          renderIcon={() => (
            <Appointment className='Header-Icon' />
          )}
        />
        <div className='Appointments-Body'>
          <div className='Appointments-Filter'>
            <LoadAppointmentStatusesAction/>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Collapse</Button>
        <Collapse isOpen={this.state.collapse}>
        <AppointmentFilter />
            </Collapse>
          </div>
          <Table
              data={ds.data}
              isLoading={isFetching}
              className='AppointmentList'
              columns={[
                {
                  dataField: 'date',
                  text: 'Дата',
                  sort: true,
  onSort: (field, order) => {
   
  },
                  headerStyle: {
                    width: '150px'
                  },
                  formatter: (v, row) => {
                    return (
                      <Moment date={v} format='DD.MM.YYYY HH.mm' />
                    )
                  }
                },
                {
                  dataField: 'clientName',
                  text: 'Клиент',
                  sort: true,
  onSort: (field, order) => {
   
  },
                  headerStyle: {
                    width: '300px'
                  }
                },
                {
                  dataField: 'status',
                  text: 'Статус',
                  sort: true,
  onSort: (field, order) => {
    
  },
                },
                {
                  dataField: 'holderName',
                  text: 'Принимающий',
                  sort: true,
  onSort: (field, order) => {
    
  },
                  headerStyle: {
                    width: '300px'
                  }
                },
                {
                  dataField: 'compliences',
                  text: 'Жалобы',
                  headerStyle: {
                    width: '200px'
                  }
                },
                {
                  dataField: 'diagnosis',
                  text: 'Диагноз',
                  headerStyle: {
                    width: '200px'
                  }
                }
              ]}
            />
            <div>
            <div className="container">
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="square-i"
          />
          </div>
          <ModalWindows buttonLabel='Modal window' text='window' className='ErrorDialog-OkBtn' children='Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error Error' title='Message error' icon='Danger'/>
      </div>
        </div>
      </div>
    )
  }
}

// объявляем контейнер
export default connect(mapStateToProps, mapDispatchToProps)(Appointments)