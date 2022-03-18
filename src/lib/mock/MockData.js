import { filter, isNumber } from 'underscore'

const USER = 'Иванов Иван Иванович'

const appointments = [
  {
    number:1,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:2,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:3,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:4,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:5,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:6,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:7,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:8,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:9,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:10,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:11,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:12,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:13,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:14,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:15,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:16,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:17,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:18,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:19,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:20,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:21,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:22,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:23,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:24,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },

  {
    number:25,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:26,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:27,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:28,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:29,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:30,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:31,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:32,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:33,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:34,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:35,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:36,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:37,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:38,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:39,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:40,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:41,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:42,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:43,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:44,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:45,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:46,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
  {
    number:47,
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна', 
    statusId: 3,
    statusTitle: 'Отменён',
    holderName: 'Нестеров Валерий Викторович', 
    compliences: 'Головные боли', 
    diagnosis: 'Мигрень'
  },
  {
    number:48,
    date: 1561017600000,
    clientName: 'Астафьева Ирина Михайловна', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Сидоров Генадий Павлович', 
    compliences: 'Тошнота', 
    diagnosis: 'Ротавирус'
  },
  {
    number:49,
    date: 1556863200000,
    clientName: 'Должанский Николай Сергеевич', 
    statusId: 0,
    statusTitle: 'Завершён',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в правом ухе', 
    diagnosis: 'Застужено правое ухо'
  },
  {
    number:50,
    date: 1560778200000,
    clientName: 'Петров Пётр Генадьевич', 
    statusId: 2,
    statusTitle: 'Пропущен',
    holderName: 'Иванов Иван Иванович', 
    compliences: 'Боль в горле', 
    diagnosis: 'Ангина'
  },
]

const appointmentStatuses = [
  { id: 0, title: 'Завершён' },
  { id: 1, title: 'Ожидается' },
  { id: 2, title: 'Пропущен' },
  { id: 3, title: 'Отменён' },
  { id: 4, title: 'Перенесён' },
  { id: 5, title: 'Активен' }
]

export function getAppointments (params) {
  const {
      statusId,
      startDate,
      endDate,
      clientName,
      onlyMe,
    } = params

  return filter(appointments, o => {
      return (startDate ? o.date >= startDate : true) && 
      (endDate ? o.date <= endDate : true) &&
      (clientName ? (clientName.length > 2 ? o.clientName.includes(clientName) : true) : true) && 
      (isNumber(statusId) && statusId >= 0 ? statusId === o.statusId : true) &&
      (onlyMe ? o.holderName === USER : true)
  })

  
  
}

export function getAppointmentStatuses () {
  return appointmentStatuses
}


