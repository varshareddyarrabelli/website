import playComputerModal from './playComputerModal.js';
import gameActionsDropdown from '../../../layout/gameActionsDropdown.js';
import gameStudyDropdown from '../../../layout/gameStudyDropdown.js';
import historyButtons from '../../../layout/historyButtons.js';
import ws from '../../../stockfishWs.js';

await ws.connect();

localStorage.clear();

playComputerModal.modal.show();
