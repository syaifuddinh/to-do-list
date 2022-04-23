import { Button } from 'react-bootstrap';

function App({ onClick }) {
  return (
    <Button
        variant="danger"
        onClick={() => {
            if(onClick) {
                onClick();
            }
        }}
    >
        Hapus
    </Button>
  );
}

export default App;
