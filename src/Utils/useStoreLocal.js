
//Custom hook to get the data from local storage
const useGetfromLocal = (localKey) => {
    try {
        let getUserObject = JSON.parse(localStorage.getItem(localKey));
        if (!getUserObject) {
            return false;
        }
        return getUserObject;
    } catch (error) {
        console.log("Error from useGetfromLocal", error);
        throw error;
    }
}

export { useGetfromLocal };
