import React from 'react';
import './style.scss';
import {useDispatch} from "react-redux";
import {NOTES} from "../../../Redux/modules/notes/actions";
import {dateToString} from "../../../Utils/dateToString";
import {Loader} from "../../../components/Loader";
import ErrorBoundary from "../../../hoc/ErorrBoundary";


export const NoteList = ({notes, loading}) => {
    const dispatch = useDispatch();

    const deleteNote = (id) => {
        dispatch(NOTES.actions.deleteNote(id));
    };

    if (loading) {
        return <Loader/>
    }

    if (!notes.length) {
        return <small className="text-center">Заметок пока нет</small>
    }

    return (
        <ErrorBoundary>
            <div className="note-list-wrapper">
                <ul className="list-group">
                    {notes.map((elem, index) => (
                        <li className="list-group-item " key={index + 1}>
                            {/*<span className="mr-1">{index + 1 + '.'}</span>*/}
                            <div className="description-note">
                                <strong className="mr-5">{elem.note}</strong>
                            </div>
                            <div className="float-right">
                                <span className="mr-3">{'Автор: ' + elem.name}</span>
                                <small className="mr-3">{'Дата: ' + dateToString(elem.date)}</small>
                                <button
                                    type="button" className="btn btn-dark float-right btn-sm"
                                    onClick={() => deleteNote(elem.id)}
                                >
                                    &times;
                                </button>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        </ErrorBoundary>
    );
};