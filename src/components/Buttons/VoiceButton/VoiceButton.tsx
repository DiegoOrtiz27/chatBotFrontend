import { RefObject, Dispatch, SetStateAction, useEffect, MouseEvent, useState, useRef } from "react";

import MediaDisplay from "../../ChatBotBody/MediaDisplay/MediaDisplay";
import { startVoiceRecording, stopVoiceRecording } from "../../../services/VoiceService";
import { getMediaFileDetails } from "../../../utils/mediaFileParser";
import { useSettings } from "../../../context/SettingsContext";
import { useStyles } from "../../../context/StylesContext";
import { Flow } from "../../../types/Flow";

import "./VoiceButton.css";

/**
 * Toggles voice to text input to the chat bot.
 *
 * @param inputRef reference to the textarea
 * @param textAreaDisabled boolean indicating if textarea is disabled
 * @param voiceToggledOn boolean indicating if voice is toggled on
 * @param handleToggleVoice handles toggling of voice
 * @param getCurrPath retrieves current path for the user
 * @param handleActionInput handles action input from user 
 * @param injectMessage utility function for injecting a message into the messages array
 * @param setInputLength sets the input length to reflect character count & limit
 */
const VoiceButton = ({
	inputRef,
	flow,
	textAreaDisabled,
	voiceToggledOn,
	handleToggleVoice,
	getCurrPath,
	getPrevPath,
	goToPath,
	handleActionInput,
	injectMessage,
	streamMessage,
	openChat,
	setInputLength,
}: {
	inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement>;
	flow: Flow;
	textAreaDisabled: boolean;
	voiceToggledOn: boolean;
	handleToggleVoice: () => void;
	getCurrPath: () => keyof Flow | null;
	getPrevPath: () => keyof Flow | null; 
	goToPath: (pathToGo: keyof Flow) => void;
	handleActionInput: (path: keyof Flow, userInput: string, sendUserInput?: boolean) => Promise<void>;
	injectMessage: (content: string | JSX.Element, sender?: string) => Promise<void>;
	streamMessage: (content: string | JSX.Element, sender?: string) => Promise<void>;
	openChat: (isOpen: boolean) => void;
	setInputLength: Dispatch<SetStateAction<number>>;	 
}) => {

	// handles options for bot
	const { settings } = useSettings();

	// handles styles for bot
	const { styles } = useStyles();

	// tracks audio chunk (if voice is sent as audio)
	const audioChunksRef = useRef<BlobPart[]>([]);

	// serves as a workaround (together with useEffect hook) for sending voice input, can consider a better approach
	const [voiceInputTrigger, setVoiceInputTrigger] = useState<boolean>(false);
	useEffect(() => {
		const currPath = getCurrPath();
		if (!currPath) {
			return;
		}

		if (settings.voice?.sendAsAudio) {
			handleSendAsAudio();
			audioChunksRef.current = [];
		} else {
			handleActionInput(currPath, inputRef.current?.value as string);
			setInputLength(0);
		}
	}, [voiceInputTrigger])
	
	// handles starting and stopping of voice recording on toggle
	useEffect(() => {
		if (voiceToggledOn) {
			startVoiceRecording(settings, handleToggleVoice, triggerSendVoiceInput,
				setInputLength, audioChunksRef, inputRef);
		} else {
			stopVoiceRecording();
		}
	}, [voiceToggledOn]);

	// styles for voice icon
	const voiceIconStyle: React.CSSProperties = {
		backgroundImage: `url(${settings.voice?.icon})`,
		...styles.voiceIconStyle
	};

	// styles for voice disabled icon
	const voiceIconDisabledStyle: React.CSSProperties = {
		backgroundImage: `url(${settings.voice?.icon})`,
		...styles.voiceIconDisabledStyle
	};

	/**
	 * Handles submission of user voice input.
	 */
	const triggerSendVoiceInput = () => {
		setVoiceInputTrigger(prev => !prev);
	}

	/*
	 * Handles sending of voice input as audio file if enabled.
	 */
	const createFileList = (files: File[]): FileList => {
		const dataTransfer = new DataTransfer();
		files.forEach(file => dataTransfer.items.add(file));
		return dataTransfer.files;
	};

	const handleSendAsAudio = async () => {
		const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
		const audioFile = new File([audioBlob], "audio_" + Date.now().toString(), { type: "audio/wav" });

		// Convertir el array de archivos a un FileList
		const filesArray = [audioFile];
		const files = createFileList(filesArray); // Convierte el array a FileList

		// Recoge los detalles del archivo y verifica si se debe mostrar el medio (audio)
		const fileDetails = await getMediaFileDetails(audioFile);
		if (!fileDetails.fileType || !fileDetails.fileUrl) {
			return;
		}

		const currPath = getCurrPath();
		if (!currPath) {
			return;
		}
		const block = flow[currPath];
		if (!block) {
			return;
		}
		const fileHandler = block.file;

		if (fileHandler != null) {
			const fileNames = [];
			for (let i = 0; i < files.length; i++) {  // Recorre el FileList
				fileNames.push(files[i].name);
				if (!settings.fileAttachment?.showMediaDisplay) {
					continue;
				}

				// Recoge los detalles del archivo y verifica si se debe mostrar el medio
				const fileDetails = await getMediaFileDetails(files[i]);
				if (!fileDetails.fileType || !fileDetails.fileUrl) {
					continue;
				}

				// Envía la visualización del medio si los detalles del archivo son válidos
				await injectMessage(<MediaDisplay 
					file={files[i]} 
					fileType={fileDetails.fileType} 
					fileUrl={fileDetails.fileUrl}/>, "user");
			}
			await handleActionInput(currPath, fileNames.join(", "), settings.fileAttachment?.sendFileName);
			await fileHandler({ 
				userInput: inputRef.current?.value as string, 
				prevPath: getPrevPath(),
				goToPath: goToPath, 
				injectMessage, 
				streamMessage, 
				openChat, 
				files: files // Pasa el FileList
			});
		}
	};

	return (
		<div
			onMouseDown={(event: MouseEvent) => {
				event.preventDefault();
				handleToggleVoice();
			}}
			style={voiceToggledOn && !textAreaDisabled ? styles.voiceButtonStyle : styles.voiceButtonDisabledStyle}
			className={voiceToggledOn && !textAreaDisabled ? "rcb-voice-button-enabled" : "rcb-voice-button-disabled"}
		>
			<span
				className={voiceToggledOn && !textAreaDisabled ? "rcb-voice-icon-on" : "rcb-voice-icon-off"}
				style={voiceToggledOn && !textAreaDisabled ? voiceIconStyle : voiceIconDisabledStyle}
			/>
		</div>
	);
};

export default VoiceButton;