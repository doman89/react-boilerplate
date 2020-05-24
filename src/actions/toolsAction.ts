// Define all your actions here
export enum ToolsActions {
	TOOLS_ACTION_ADD = 'example action add',
}

// Interface of your payload object
export interface ToolsPayload {
	name: string;
}

// Interfaces of dispatchers
interface ToolsAdd {
	type: ToolsActions.TOOLS_ACTION_ADD;
	payload: ToolsPayload;
}

// Union of all dispatchers interfaces
export type ToolsActionTypes = ToolsAdd;

// Define all your dispatchers
export const addExampleAction = (payload: ToolsPayload): ToolsActionTypes => ({
	type: ToolsActions.TOOLS_ACTION_ADD,
	payload,
});
