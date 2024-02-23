const dateConvert = (data) => {
    const date = new Date(data).toLocaleDateString('en-US');
    return date;
}

export default dateConvert;