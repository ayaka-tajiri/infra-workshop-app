import React, {ReactElement, useState} from "react";
import {AddSVGIcon, Button, Dialog, DialogContent, DialogFooter, TextField} from "react-md";

interface ToDo {
    id: string
    title: string
}

interface ToDosAddDialogProps {
    addToDo: (ToDos: ToDo) => void
}

export default function ToDosAddDialog({addToDo}: ToDosAddDialogProps): ReactElement {
    const [visible, setVisible] = useState(false);
    const [toDoTitle, setToDoTitle] = useState("")
    
    const hide = (): void => {
        setVisible(false);
    };
    const show = (): void => {
        setVisible(true);
    };

    function createToDo() {
            hide();
            const newToDo: ToDo = {id: '', title: toDoTitle}
            addToDo(newToDo)
            setToDoTitle("")
    }
    return (
        <>
            <Button
                id="ToDo-dialog-button"
                theme="secondary"
                style={{position: 'fixed', bottom: '1rem', right: '1rem'}}
                onClick={show}>
                <AddSVGIcon />
            </Button>
            <Dialog
                id="ToDo-add-dialog"
                modal={true}
                visible={visible}
                onRequestClose={hide}
                aria-labelledby="add-dialog">
                <DialogContent>
                    <TextField
                        id="new-ToDo"
                        label="New ToDo"
                        theme={'underline'}
                        value={toDoTitle}
                        onChange={(event) => {
                            setToDoTitle(event.target.value)
                        }}
                    >
                    </TextField>
                </DialogContent>
                <DialogFooter>
                    <Button id="dialog-cancel" onClick={hide}>
                        Cancel
                    </Button>
                    <Button id="dialog-add" onClick={() => {
                        createToDo();
                    }}>
                        Add
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}
