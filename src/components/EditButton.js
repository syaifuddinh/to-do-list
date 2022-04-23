import { Button } from 'react-bootstrap';

function App({ onClick }) {
  return (
    <Button
        variant="primary"
        onClick={() => {
            if(onClick) {
                onClick();
            }
        }}
    >
        Edit
    </Button>
  );
}

export default App;
