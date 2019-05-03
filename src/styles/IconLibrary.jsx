import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay,faPhone,faEnvelopeOpenText,faFax,faLocationArrow,faArrowRight } from '@fortawesome/free-solid-svg-icons'


const ImportFA = () => {
    library.add(faPlay);
    library.add(faPhone);
    library.add(faEnvelopeOpenText);
    library.add(faFax);
    library.add(faLocationArrow);
    library.add(faArrowRight);
};

export default ImportFA;