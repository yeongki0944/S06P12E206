/* Direct Chat store For Direct Chat Functionality */

import Users from "../../data/directchat.json";

const state = {
  users: Users.data,
  chats: Users.chat,
  activeuser: 0,
  typing: false,
  newChat: {
    "sender": "s",
    "time": "t",
    "text": 't',
  },
  session: false,
  localName: "",
  romoteName: "",
  cameraState: true,
  micState: true,
  leaveSession: true,

};

// getters
const getters = {
  /* Get Current Direct Chat History */
  currentChat: (state) => {
    var chats = state.chats.find((chat) => {
      if (chat.id == state.activeuser) return chat;
    });
    var users = state.users.find((user) => {
      if (user.id == state.activeuser) return user;
    });
    return { ...users, chat: chats };
  },
};

// mutations
const mutations = {
  setLeaveSession: (state, payload) => {
    state.leaveSession = payload
  },
  setCameraState: (state, payload) => {
    state.cameraState = payload
  },
  setMicState: (state, payload) => {
    state.micState = payload
  },
  setLocalName: (state, payload) => {
    state.localName = payload;
  },
  setRemoteName: (state, payload) => {
    state.romoteName = payload;
  },

  /* Set Active Direct Chat */
  setActiveuser: (state, payload) => {
    state.activeuser = payload;

    const chats = state.chats.find((chat) => {
      if (chat.id == payload) return chat;
    });
    if (!chats) {
      state.users.find((user) => {
        if (user.id == payload) {
          user.profile = "profile online";
        }
      });
      state.chats.push({
        id: payload,
        users: [0, payload],
        lastMessageTime: "Last seen yesterday 14:14",
        messages: [],
      });
    }
  },

  /* Add Direct Chat Sticker */
  addSticker: (state, payload) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    addchat.messages.push({
      sender: 0,
      time: today.toLowerCase(),
      stickerpath: payload,
      sticker: true,
    });
  },

  /* Add Direct chat Text And Emogi*/
  addChat: (state, payload) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    addchat.messages.push({
      sender: payload.sender,
      time: today.toLowerCase(),
      text: payload.msg,
      lastmsg: true,
    }),
      (state.typing = false);
  },


  /* Add Direct chat Text And Emogi*/
  addNewChat: (state, payload) => {
    console.log("run mutations addNewChat");
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    state.newChat.sender = 0;
    state.newChat.time = today.toLowerCase();
    state.newChat.text = payload;
    state.test = payload;
    console.log("payload : " + payload);
    console.log("end mutations addNewChat");


  },
  addSession: (state, payload) => {
    state.session = payload;
  },




  /* Add Direct Chat AutoResponse */
  addChatResponce: (state) => {
    var today = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const id = state.activeuser;
    const addchat = state.chats.find((chat) => chat.id == id);
    const ChatUser = state.users.find((user) => user.id == id);
    setTimeout(function () {
      addchat.messages.push({
        sender: 1,
        lastmsg: true,
        time: today.toLowerCase(),
        text:
          `Hi I am ` +
          ChatUser.name +
          `, Sorry I busy right now, I will text you later`,
      });
      state.typing = false;
    }, 3000);
    state.users.find((user) => {
      if (user.id == state.activeuser) {
        user.profile = "profile online";
        user.online = true;
      }
    });
  },
};

// actions
const actions = {
  setActiveuser: (context, payload) => {
    context.commit("setActiveuser", payload);
  },

  addSticker: (context, payload) => {
    context.commit("addSticker", payload);
  },

  addChat: (context, payload) => {
    context.commit("addChat", payload);
    // setTimeout(function () {
    //   context.commit("addChatResponce");
    // }, 1000);
  },

  addNewChat: (context, payload) => {
    context.commit("addNewChat", payload);
    // setTimeout(function () {
    //   context.commit("addNewChatResponce");
    // }, 1000);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
