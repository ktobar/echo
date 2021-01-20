import ShowCategories from './ShowCategories';
import EditCategories from './EditCategories';
import useVisualMode from '../../hooks/useVisualMode';

const MAIN = "MAIN";
const EDIT = "EDIT";

export default function Categories(props) {

  const { mode, transition } = useVisualMode(
    props.main ? MAIN : EDIT
  );

  return (

    <div className="Categories">
      {mode === MAIN && <ShowCategories onEdit={() => transition(EDIT)} />}
      {mode === EDIT && <EditCategories onBack={() => transition(MAIN)} />}
    </div>
    
  );
};