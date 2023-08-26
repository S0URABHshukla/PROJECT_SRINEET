import React, { useEffect } from "react";
import "./Whatsapp.css"
import WhatsAppWidget from "/node_modules/react-whatsapp-chat-widget/index";
import "/node_modules/react-whatsapp-chat-widget/index.css";

const Whatsapp = () => {
    useEffect(() => {
        const widget = document.querySelector('.whatsapp-widget');
        if (widget) {
          widget.classList.add('bounce-animation');
        }
      }, []);
    return (
        <WhatsAppWidget
            className="whatsapp-widget bounce-animation"
            phoneNo="918571971583"
            position="right"
            widgetWidth="300px"
            widgetWidthMobile="260px"
            autoOpen={true}
            autoOpenTimer={5000}
            messageBox={true}
            messageBoxTxt="Hi Team, is there any related service available ?"
            iconSize="40"
            iconColor="white"
            iconBgColor="green"
            headerIcon="data:image/jpeg;base64,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"
            headerIconColor="pink"
            headerTxtColor="black"
            headerBgColor="tomato"
            headerTitle="SRIneet"
            headerCaption="Online"
            bodyBgColor="#bbb"
            chatPersonName="Support"
            chatMessage={<>Hi there 👋 <br /><br /> How can I help you?</>}
            footerBgColor="#999"
            placeholder="Type a message.."
            btnBgColor="yellow"
            btnTxt="Start Chat"
            btnTxtColor="black"
        />
    );
};

export default Whatsapp;