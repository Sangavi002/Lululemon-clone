
export const FETCH_DRESS_REQUEST = 'dress_request';
export const FETCH_DRESS_SUCCESS = 'dress_success';
export const FETCH_DRESS_FAILURE = 'dress_failure';
export const SORT_DRESS_ASC = 'dress_asc';
export const SORT_DRESS_DESC = 'dress_desc';


export function fetchdressRequest() {
    return { type: FETCH_DRESS_REQUEST };
}

export function fetchdressSuccess(data) {
    return { type: FETCH_DRESS_SUCCESS, payload: data };
}

export function fetchdressFailure() {
    return { type: FETCH_DRESS_FAILURE };
}

export function sortdressAsc() {
    return { type: SORT_DRESS_ASC };
}

export function sortdressDesc() {
    return { type: SORT_DRESS_DESC };
}

export const fetchdress = () => async (dispatch) => {
    try {
        dispatch(fetchdressRequest());
        const res = await fetch('https://swanky-carpal-work.glitch.me/womendress');
        const data = await res.json();
        dispatch(fetchdressSuccess(data));
    } catch (error) {
        dispatch(fetchdressFailure());
    }
};
