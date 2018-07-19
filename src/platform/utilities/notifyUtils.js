import React from 'react';

import { toast }  from '../components/Toast';
import Snackbar, { Type } from '../components/Snackbar';

const NotifyType = Type;

const notify = Object.assign((content) => notifyAgent(content), 
  {
  info: (content) => {
    notifyAgent(content)
  },
  caution: (content) => {
    notifyAgent(content, NotifyType.CAUTION)
  },
  alert: (content) => {
    notifyAgent(content, NotifyType.ALERT)
  },
});

const notifyAgent = (msg, type = NotifyType.INFO) => {
  toast(<Snackbar type={type} showCloseButton={false} msg={msg} />);  
}

export { notify }
