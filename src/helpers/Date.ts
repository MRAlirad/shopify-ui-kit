import { DateObject } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

export const gerigorainToPersianDate = (date: string, format = 'YYYY-MM-DD'): string => {
	return new DateObject({
		date: date,
		calendar: gregorian,
		locale: gregorian_en,
		format: format,
	})
		.convert(persian, persian_fa)
		.format();
};

export const persianToGerigorainDate = (date: string, format = 'YYYY-MM-DD'): string => {
	return new DateObject({
		date: date,
		calendar: persian,
		locale: persian_fa,
		format: format,
	})
		.convert(gregorian, gregorian_en)
		.format();
};

export const gerigorainDate = (date: string, format = 'YYYY-MM-DD'): DateObject => {
	return new DateObject({
		date: date,
		calendar: gregorian,
		locale: gregorian_en,
		format: format,
	});
};

export const persianDate = (date: string, format = 'YYYY-MM-DD'): DateObject => {
	return new DateObject({
		date: date,
		calendar: persian,
		locale: persian_fa,
		format: format,
	});
};