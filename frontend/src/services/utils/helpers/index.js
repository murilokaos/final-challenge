import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

export function formatBrDate(date) {
  const newDate = utcToZonedTime(parseISO(date), 'America/Sao_Paulo');

  return format(newDate, "dd 'de' MMMM, 'às' HH:mm'h'", { locale: ptBR });
}
