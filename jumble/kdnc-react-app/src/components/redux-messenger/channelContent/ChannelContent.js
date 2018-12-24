import React from 'react'
import {OFFLINE} from './../../../actions/messenger/updateStatus'
import {MessageContainer} from "../../../containers/messenger/message";

export const ChannelContent = ({messages, channelName, status, fetchStatus}) => (
  <div>
    <h4>
      Channel: {channelName}
    </h4>
    {status === OFFLINE ? <h5>
      Contacts in the channel will see you as offline.
    </h5> : null}
    <div>
      {messages.map(message => (
        <div key={message.get(`id`)}>
          <MessageContainer message={message}/>
        </div>
      ))}
    </div>
  </div>
);