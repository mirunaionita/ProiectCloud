import { useEffect, useRef } from "react";

const MessageBox = (props) => {
  const messageEndRef = useRef(null);
  const { chatMessages } = props;

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="h-[25rem] overflow-auto px-4">
      <ul className="divide-y divide-gray-200">
        <li className="py-3">
          <div className="text-green-800 font-bold">Fact Finder:</div>
          <div>Hello, I am the Fact Finder. I can tell you more about the places you want to see.</div>
        </li>
        {chatMessages.map((message, index) => (
          <li key={index} className="py-3">
            <div
              className={`${
                message.role === "user" ? "text-blue-800" : "text-green-800"
              } font-bold`}
            >
              {message.role === "user" ? "You:" : "FactFinder:"}
            </div>
            <div>{message.content}</div>
          </li>
        ))}
      </ul>
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default MessageBox;
