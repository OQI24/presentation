import React, {useState} from 'react';
import './style.scss';
import {Alert} from "../../../components/Alert";
import {connect} from "react-redux";
import {NOTES} from "../../../Redux/modules/notes/actions";
import moment from "moment";

const CreateNote = ({createNote}) => {
    const [note, setNote] = useState({note: '', name: ''});

    const onChangeValue = event => {
        setNote({
            ...note,
            [event.target.name]: event.target.value
        });
    };

    const submit = async event => {
        event.preventDefault();
        await createNote({...note, date: moment().format()});
        setNote({note: '', name: ''});
    };

    return (
        <React.Fragment>
            <Alert/>
            <form onSubmit={submit}>
                <div className="form-group pt-4 ">
                    <input
                        type="text"
                        required={true}
                        name={'name'}
                        value={note.name}
                        className="form-control mb-2"
                        placeholder={'Имя автора'}
                        onChange={onChangeValue}
                    />
                    <textarea
                        required={true}
                        name={'note'}
                        value={note.note}
                        className="form-control description-note"
                        placeholder={'Введите заметку'}
                        onChange={onChangeValue}
                        rows="3"

                    />
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    required={true}*/}
                    {/*    name={'note'}*/}
                    {/*    value={note.note}*/}
                    {/*    className={'form-control'}*/}
                    {/*    placeholder={'Введите заметку'}*/}
                    {/*    onChange={onChangeValue}*/}
                    {/*/>*/}
                </div>
                <button type="submit" className="btn btn-outline-light">Создать</button>
            </form>
        </React.Fragment>
    );
};

export default connect(state => ({url: NOTES.URL_DB}), {createNote: NOTES.actions.createNote})(CreateNote)