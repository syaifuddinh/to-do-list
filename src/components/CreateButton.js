import Form from "./Form";
import { useDispatch } from 'react-redux'
import { storeData } from "../store/index";

function App({ onClick }) {
    const dispatch = useDispatch();
  return (
    <Form
        title="Tambah To-Do-List Baru"
        onSubmit={ ({name, description, checked}) => {
            const id = Math.round(Math.random() * 999999);
            const date = new Date();
            dispatch(storeData({
                id,
                title: name,
                status: (checked ? 1 : 0),
                createdDate: date,
                description
            }));
        } }
    >
        <div
            className="rounded-24px text-center d-flex justify-content-center align-items-center h-300px bg-dark box-shadow-dark-grey"
        >
            <div className="font-weight-700 text-primary fs-24px">
                Buat <br />
                To Do List <br />
                Baru
            </div>
        </div>
    </Form>
  );
}

export default App;
