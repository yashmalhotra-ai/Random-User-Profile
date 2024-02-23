//To Convert the Date string to valid formart of DD/MM/YYYY
const dateConvert = (data) => {
    const date = new Date(data).toLocaleDateString('en-US');
    return date;
}

export default dateConvert;