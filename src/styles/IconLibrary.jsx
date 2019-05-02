import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxes, faPeopleCarry, faTags } from '@fortawesome/free-solid-svg-icons'

const ImportFA = () => {
    library.add(faBoxes);
    library.add(faPeopleCarry);
    library.add(faTags);
};

export default ImportFA;