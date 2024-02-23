
const usePostLocal = (providedUser) => {
    try {
        let userObject = JSON.parse(localStorage.getItem("allPublicUser")) || {};
        const userID = providedUser.id.name;
        userObject = {
            ...userObject,
            [userID]: providedUser,
        }
        localStorage.setItem("allPublicUser", JSON.stringify(userObject));
        return true;
    } catch (error) {
        console.log("error", error);
        return false;
    }
}

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

export { usePostLocal, useGetfromLocal };
