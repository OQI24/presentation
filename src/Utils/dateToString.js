import moment from "moment";

export const dateToString = (time) => {
    const month = moment(time).format('DD MMM').substring(3, 6);
    if (moment(time).format('YYYY') !== moment().format('YYYY')) {
        return (
            String(moment(time).format(`DD ${month} YYYY HH:mm`))
        );
    } else {
        return (
            String(moment(time).format(`DD ${month} HH:mm`))
        );
    }
};