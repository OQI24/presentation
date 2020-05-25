import React, {useEffect} from 'react';
import './style.scss';
import CreateNote from "./CreateNote";
import {NoteList} from "./NotesList";
import {connect} from "react-redux";
import {NOTES} from "../../Redux/modules/notes/actions";

const Notes = ({notes, fetchNotes, loading}) => {
    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="notes-page">
            <div className="content-wrapper">
            <h1 className="text-center pt-2">Создание заметок</h1>
            <div className={"page-description"}>
                <span className="font-italic">
                    На этой странице я постарался продемонстрировать функционал по созданию небольших заметок
                    с возможностью сохарнения данных на сервере.
                    <br/>
                    При реализации компонента использовал Redux\ Redux-thunk\ Axios и Moment.js
                </span>
            </div>
            <div className={'notes-wrap'}>
                <CreateNote/>
                <br/>
                <NoteList notes={notes} loading={loading}/>
            </div>
            </div>
        </div>
    );
}

export default connect(state => ({
    notes: state.notes.notes,
    loading: state.notes.loading
}), {fetchNotes: NOTES.actions.fetchNotes})(Notes);