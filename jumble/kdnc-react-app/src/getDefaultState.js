import {fromJS} from "immutable";
import {users, User, channels, Channel} from './db';
import {FETCHED, NOT_FETCHED} from "./actions/messenger";

export const getDefaultState = () => {
  const defaultState = {
    currentUser: {},
    channels: [],
    userInfo: [],
  };

  const currentUser = users[0];
  const userChannels = channels.filter(channel => channel.participants.includes(currentUser.id));
  const activeChannel = Channel(currentUser.activeChannel);
  defaultState.currentUser = currentUser;
  defaultState.channels = userChannels.map(channel => {
    if (channel.id === activeChannel.id) {
      return {
        ...channel,
        fetchStatus: FETCHED
      };
    } else {
      return {
        id: channel.id,
        name: channel.name,
        messages: [],
        fetchStatus: NOT_FETCHED,
        participants: channel.participants
      }
    }
  });

  defaultState.activeChannel = activeChannel.id;
  defaultState.userInfo = [currentUser, ...activeChannel.participants.map(User), ...currentUser.contacts.map(User)].map(user => ({
    name: user.name,
    fetchStatus: FETCHED,
    id: user.id,
    status: user.status
  }));

  return fromJS(defaultState);
};