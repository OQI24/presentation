import axios from 'axios';

const url = process.env.REACT_APP_DB_URL;

export const NOTES = {
    CREATE_NOTE: 'CREATE_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',
    FETCH_NOTES: 'FETCH_NOTES',
    LOADING: 'LOADING',
    URL_DB: url,
    actions: {
        createNote,
        deleteNote,
        fetchNotes
    }
};

function setLoading(flag) {
    return ({
        type: NOTES.LOADING,
        payload: flag
    })
}

function createNote(note) {
    return async (dispatch) => {
        await axios.post(`${url}/notes.json`, note).then((res) => dispatch({
            type: NOTES.CREATE_NOTE,
            payload: {...note, id: res.data.name}
        }));
    }
}

function deleteNote(id) {
    return async (dispatch) => {
        await axios.delete(`${url}/notes/${id}.json`)
            .then((res) => {
                dispatch({
                    type: NOTES.DELETE_NOTE,
                    payload: id
                });
            })
            .catch(e => {
                console.log('Ошибка при удалении', e);
                return e
            });
    }
}

function fetchNotes() {
    return async dispatch => {
        dispatch(setLoading(true));
        await setTimeout(async ()=> {
            await axios.get(`${url}/notes.json`)
                .then((res) => {
                    const payload = res.data && Object.keys(res.data).map((key) => ({...res.data[key], id: key})) || [];
                    dispatch({
                        type: NOTES.FETCH_NOTES,
                        payload
                    });
                    dispatch(setLoading(false));
                }).catch(e => {
                    console.log(e);
                    dispatch(setLoading(false));
                    return e
                });
        }, 2000);
    };
}