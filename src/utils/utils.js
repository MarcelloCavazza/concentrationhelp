import moment from "moment";

const formatDate = (date) => {
    if (typeof date === 'string') {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
};

export { formatDate }