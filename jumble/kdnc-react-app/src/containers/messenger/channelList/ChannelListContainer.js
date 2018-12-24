import React from 'react'
import {connect} from 'react-redux'
import {ChannelList} from "../../../components/redux-messenger/channelList";

const mapStateToProps = (state) => ({
  channels: state.get(`channels`),
  activeChannel: state.get(`activeChannel`)
});

const mapDispatchToProps = (dispatch) => ({
  setActiveChannel: (channel) => {
    console.log("Setting active channel...", channel);
  }
});

export const ChannelListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);