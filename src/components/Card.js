import { useDispatch } from 'react-redux'
import { deleteData, updateData } from "../store/index";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { ButtonGroup } from "react-bootstrap";
import Form from "./Form";
import moment from "moment";

function App({ id, title, description, createdDate, isShowEdit }) {
    const dispatch = useDispatch();

  return (
    <div className="rounded-24px d-flex flex-column h-300px bg-white box-shadow-dark-grey p-24px">
        <div className="flex-grow-1 ">
            <ButtonGroup>
                { isShowEdit === true && (
                    <Form
                        title="Edit To-Do-List"
                        dataValue={{name: title, description}}
                        onSubmit={ ({name, description, checked}) => {
                            dispatch(updateData({
                                id,
                                title: name,
                                status: (checked ? 1 : 0),
                                description
                            }));
                        } }
                    >
                        <EditButton />
                    </Form>
                ) }
                <DeleteButton
                    onClick={() => {
                        dispatch(deleteData({ id }));
                    }}
                />
            </ButtonGroup>
        </div>
        <div className="font-weight-600 fs-20px text-center">
            { title }
        </div>
        <div className="font-weight-600 fs-16px mt-4px text-center">
            { description }
        </div>
        <div className="font-weight-600 text-dark fs-16px mt-4px text-center">
            Dibuat pada : { moment(createdDate, ["HH.mm"]).format("YYYY-MM-DD HH:mm") }
        </div>
    </div>
  );
}

export default App;
