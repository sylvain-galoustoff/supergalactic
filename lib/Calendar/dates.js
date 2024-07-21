import { setDefaultOptions, startOfMonth, format } from "date-fns";
import { fr } from "date-fns/locale";

setDefaultOptions({ locale: fr });

export const getOffsetDays = (dateObj) => {
  const firstDayOfMonth = format(startOfMonth(dateObj), "e");
  const offset = Number(firstDayOfMonth) - 1;
  return offset;
};
