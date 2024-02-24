import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex item-center m-4 shadow-xl px-3 py-2 rounded-tl-full rounded-tr-full`,
  name: `mt-[-2rem] fixed text-gray-600 text-xs absolute`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};
const Message = ({message}) => {
  const messageClass=
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`
  return (
    <div>
      <div className={`${style.message}  ${messageClass}`}>
        <p className={style.name}>{message.name} </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
