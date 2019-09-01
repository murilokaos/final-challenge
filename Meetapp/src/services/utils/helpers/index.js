import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { toDate } from 'date-fns-tz';

export function formatBrDate(date, filter) {
  const newDate = toDate(parseISO(date), { timeZone: 'America/Sao_Paulo' });

  return format(newDate, filter, { locale: ptBR });
}

export function sortByDate(array) {
  return array.sort((a, b) => {
    a = new Date(a.meetup.date);
    b = new Date(b.meetup.date);

    // eslint-disable-next-line no-nested-ternary
    return a > b ? 1 : a < b ? -1 : 0;
  });
}
