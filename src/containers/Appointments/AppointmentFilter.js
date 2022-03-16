import React, { Component } from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { map, filter } from 'underscore'
import { Form, Button} from 'reactstrap'


import TextField from '../../components/Form/TextField/TextField'
import DateField from '../../components/Form/DateField/DateField'
import SelectField from '../../components/Form/SelectField/SelectField'
import CheckboxField from '../../components/Form/CheckboxField/CheckboxField'

import './Appointments.scss'


import * as appointmentListActions from '../../redux/appointment/list/appointmentListActions'

import { ReactComponent as Search } from '../../images/search.svg'



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

class AppointmentFilter extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentDidMount() {
    this.load()
  }

  onChangeFilterField = (name, value) => {
    this.actions.changeFilterField(name, value)
  }

  onChangeFilterDateField = (name, value) => {
    this.actions.changeFilterField(name, value && value.getTime())
  }

  onSearch = () => {
    this.load()
  }
  onClean = () => {
    this.clean()
  }
  
  clean () {
    this.props
            .actions
            .changeFilter()
  }

  get actions () {
    return this.props.actions
  }

  load() {
    this.actions.load({
        ...this.props.dataSource.filter.toJS()
    })
  }

  render() {

    // берём данные из состояния приложения используя свойства props
    const {
      isFetching,
      dataSource: ds,
      directory
    } = this.props

    const {  
      startDate,
      endDate,
      clientName,
      statusId,
      onlyMe
    } = ds.filter

    return (
     <div>
        <Form className='Appointments-FilterForm'>
            <DateField
              hasTime
              name='startDate'
              value={startDate}
              dateFormat='dd/MM/yyyy HH:mm'
              timeFormat='HH:mm'
              placeholder='С'
              className='Appointments-FilterField'
              onChange={this.onChangeFilterDateField}
            />
            <DateField
              hasTime
              name='endDate'
              value={endDate}
              dateFormat='dd/MM/yyyy HH:mm'
              timeFormat='HH:mm'
              placeholder='По'
              className='Appointments-FilterField'
              onChange={this.onChangeFilterDateField}
            />
            <TextField
              name='clientName'
              value={clientName}
              placeholder='Клиент'
              className='Appointments-FilterField'
              onChange={this.onChangeFilterField}
            />
            <SelectField
              name='statusId'
              value={statusId}
              placeholder='Статус'
              options={[
                { value: -1, text: '' },
                ...map(
                  directory.appointment.status.list.dataSource.data, 
                  o => ({ value: o.id, text: o.title })
                )
              ]}
              className='Appointments-FilterField'
              onChange={this.onChangeFilterField}
            />
            <CheckboxField
              name='onlyMe'
              label='Только я'
              value={onlyMe}
              className='Appointments-FilterField'
              onChange={this.onChangeFilterField}
            />
            <Button
              className='Appointments-SearchBtn'
              onClick={this.onSearch}>
              <Search className='Appointments-SearchBtnIcon'/>
            </Button>
            <Button
            className='Appointments-SearchBtn'
            onClick={this.OnClean}>Clean
            </Button>
          </Form>
           
      </div>
    )
  }
}

// объявляем контейнер
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentFilter)