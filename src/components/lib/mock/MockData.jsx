import {filter} from 'underscore';

const USER = 'Адамів Юлія Олегівна';

export const appointments = [
  {
    date: 1556863200000,
    clientName: 'Должанський Микола Сергійович',
    status: 'Завершений',
    holderName: 'Іванов Іван Іванович',
    compliences: 'Біль в правому вусі',
    diagnosis: 'Простужене праве вухо',
  },
  {
    date: 1560778200000,
    clientName: 'Пертов Петро Генадійович',
    status: 'Завершений',
    holderName: 'Іванов Іван Іванович',
    compliences: 'Біль в горлі',
    diagnosis: 'Ангіна',
  },
  {
    date: 1560256200000,
    clientName: 'Буйкевич Галина Петровна',
    status: 'Завершений',
    holderName: 'Нестеров Валерій Вікторович',
    compliences: 'Головні болі',
    diagnosis: 'Мігрень',
  },
  {
    date: 1561017600000,
    clientName: 'Астафьева Ірина Михайлівна',
    status: 'Завершений',
    holderName: 'Сидоров Генадій Павлович',
    compliences: 'Тошнота',
    diagnosis: 'Ротавірус',
  },
];

export function getAppointments(params) {
  const {startDate, endDate, clientName, onlyMe} = params;

  return filter(appointments, (o) => {
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
}
