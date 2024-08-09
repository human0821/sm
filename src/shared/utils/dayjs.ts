import dayjs from "dayjs";
import ru from "dayjs/locale/ru";

dayjs.locale({
  ...ru,
  months: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),
  monthsShort: "Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек".split("_"),
  weekdaysMin: "Вс_Пн_Вт_Ср_Чт_Пт_Сб".split("_"),
});
