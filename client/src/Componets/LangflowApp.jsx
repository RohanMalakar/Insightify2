import React, { useState, useRef, useEffect } from "react";
import gif5 from "../assets/Images/gif5.gif";
import spinner from "../assets/Images/spinner.gif";
import robotr from "../assets/Images/robotr.gif";
import Loader from "./Loader";

function LangflowApp() {
  const [inputMessage, setInputMessage] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const formatResponse = (responseText) => {
    const cleanedResponse = responseText.replace(/###/g, "").replace(/\*\*/g, "").trim();

    const lines = cleanedResponse.split("\n");

    const formattedResponse = lines.map((line, index) => {
      const trimmedLine = line.trim();

      if (/^\d+\./.test(trimmedLine) === false && trimmedLine.endsWith(":")) {
        return (
          <h2 key={index} className="font-bold text-purple-300 text-xl mt-4">
            {trimmedLine}
          </h2>
        );
      }

      if (/^\d+\./.test(trimmedLine)) {
        return (
          <h3 key={index} className="font-bold text-gray-300 text-lg mt-2">
            {trimmedLine}
          </h3>
        );
      }

      if (/^[-•]/.test(trimmedLine)) {
        return (
          <p key={index} className="ml-4 text-gray-400 text-base">
            {trimmedLine}
          </p>
        );
      }

      if (trimmedLine) {
        return (
          <p key={index} className="text-base text-white">
            {trimmedLine}
          </p>
        );
      }

      return null;
    });

    return formattedResponse;
  };

  const handleSendMessage = async () => {
    if (!inputMessage) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/api/v1/langflow/run-flow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputValue: inputMessage,
          inputType: "chat",
          outputType: "chat",
          stream: false,
        }),
      });
      const data = await res.json();
      if (data.output) {
        setInputMessage("");
        const newHistory = {
          que: inputMessage,
          response: "",
        };
        newHistory.response = data.output;
        setHistory([...history, newHistory]);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("Failed to get a response from the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[70%] lg:flex-row min-w-full pt-16 items-center bg-cover bg-center">
      <div
        className="bg-gray-950 p-4 lg:mr-1 h-auto lg:h-screen w-full lg:w-1/3 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${gif5})` }}
      >
        <div className="flex justify-center">
          <h1 className="text-4xl text-purple-400 font-bold mb-4 text-center">Insightify Chatbot</h1>
        </div>
        <div className="mb-4">
          <textarea
            value={inputMessage}
            onChange={handleInputChange}
            className="w-full h-32 p-3 border-[1px] border-purple-400 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
            rows="4"
            placeholder="Ask your query here..."
          ></textarea>
        </div>
        <div className="flex justify-center">
            { !loading?
                <button
                    onClick={handleSendMessage}
                    className="w-72 py-2 bg-purple-600 border-[1px] border-purple-600 text-white font-semibold  rounded-lg hover:bg-gray-950 hover:translate-y-2 hover:scale-105  transition duration-500"
                    disabled={loading}
                >
                    Generate
                </button>
                :
                <Loader load={"Processing...."}/>
            }
        </div>
        {loading && (
          <div className="absolute h-56 top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2">
            <img src={spinner} alt="Loading..." className="w-16 h-16" />
          </div>
        )}
        <div className="w-full h-full lg:h-[70%] flex justify-end py-8">
          <img src={robotr} alt="Robot Animation" className="lg:w-full  lg:h-full " />
        </div>
      </div>
      <div
        className="bg-gray-900 w-full lg:w-2/3 h-auto lg:h-screen overflow-y-auto"
        ref={historyRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {history &&
          history.map((item, index) => (
            <div
              key={index}
              className="text-2xl mt-4 flex flex-col gap-1  p-4 bg-gray-800 rounded-lg"
            >
              <span className="font-semibold text-xl text-purple-400 mb-2">Question:</span>
              <div className="text-xl font-semibold w-full border-[1px] border-white rounded-md p-5 text-purple-400">
                {item.que}
              </div>
              <h3 className="font-semibold text-gray-300 text-xl mb-2">Response:</h3>
              <div className="text-sm w-full border-[2px] border-gray-500 rounded-md p-5 text-gray-300">
                {formatResponse(item.response)}
              </div>
            </div>
          ))}
        {!history && response && (
          <div className="mt-4 flex flex-col gap-1 w-full p-4 bg-purple-950 text-white rounded-lg">
            <span className="font-bold mb-2">Error:</span>
            <div className="text-sm w-full border rounded-md p-5 text-white">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LangflowApp;
