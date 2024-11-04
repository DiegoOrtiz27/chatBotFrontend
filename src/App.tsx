import ChatBot from "./components/ChatBot";
import { Flow } from "./types/Flow";


function App() {

	// Serves as an example flow used during the development phase - covers all possible attributes in a block.
	// restore to default state before running selenium tests (or update the test cases if necessary)!
	const flow: Flow = {
		start: {
			message: "Hello! I'm an assistant with knowledge about S4DS software and how to use it.",
			transition: { duration: 1000 },
			path: "welcome"
		},
		welcome: {
			message: (params) => {
				if(params != null){7
					return "Como vas?"
				}
			},
			file: (params) => {
				if (params.files && params.files.length > 0) {
					const audioFile = params.files[0];
					console.log("Audio file received:", audioFile);
				}
				return "Se subio archivo mi papa";
			},
			path: () => "loop"
		},
		loop: {
			file: (params) => {
				if (params.files && params.files.length > 0) {
					const audioFile = params.files[0];
					console.log("AUDIO RECIBIDO PUÑETA:", audioFile);
				}
				return "Se subio archivo mi papa";
			},
			message: (params) => {
				if(params != null){7
					return "Como vas?"
				}
			},
			path: () => "loop"
		}
		// ... otros bloques ...
	};

	return (
		<div className="App">
			<header className="App-header">
				<div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: `calc(20vh)`}}>
					<ChatBot
						flow={flow}
						settings={{
							general: {
								secondaryColor: "#000000",
								showFooter: true,
								embedded: true
							},
							chatHistory: { disabled: true},
							userBubble: {
								dangerouslySetInnerHtml: true,
								showAvatar: true,
								avatar: import.meta.env.VITE_USER_LOGO
							},
							botBubble: {
								dangerouslySetInnerHtml: true,
								showAvatar: true,
								avatar: import.meta.env.VITE_CHATBOT_LOGO
							},
							header: {
								title: (
									<div style={{ display: "inline" }}>
										<h3 style={{ margin: 0, color: "#000" }}>Assistant</h3>
										<div style={{ display: "flex" }}>
											<span style={{ 
												backgroundColor: "#1BC5BD", 
												borderRadius: "50%", 
												width: "6px", 
												height: "6px", 
												marginTop: "0.5rem", 
												marginRight: "6px" }}>
											</span>
											<span style={{ margin: 0, color: "#000" }}>Online</span>
										</div>
									</div>
								),
								showAvatar: false,
								closeChatIcon: import.meta.env.VITE_CLOSECHAT_ICON
							},
							tooltip: {
								mode: "CLOSE",
								text: "Need help?",
							},
							chatButton: {
								icon: import.meta.env.VITE_CHAT_BUTTON
							},
							footer: {
								text: ""
							},
							voice: {
								disabled: false,
								defaultToggledOn: false,
								sendAsAudio: true
							},
							fileAttachment: {
								disabled: false,
								multiple: false,
								accept: ".png, .jpg, .jpeg",
								showMediaDisplay: true,
								sendFileName: false
							},
							chatInput: {
								allowNewline: true
							},
							notification: { disabled: true },
							emoji: { disabled: true }
						}}
					></ChatBot>
				</div>
			</header>
		</div>
	);
}

export default App;