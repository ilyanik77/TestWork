
const requestsKey = "requests";

function saveRequest() {

    const userName = userNameEl.value;
    const userPhone = userPhoneEl.value;

    if (!localStorage.getItem(requestsKey)) {
        localStorage.setItem(requestsKey, JSON.stringify([{userName, userPhone}]));
    } else {
        const requestsList = JSON.parse(localStorage.getItem(requestsKey));
        requestsList.push({userName, userPhone});
        localStorage.setItem(requestsKey, JSON.stringify(requestsList)); 
    }
}