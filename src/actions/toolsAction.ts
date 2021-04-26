// Define all your actions here
export enum ToolsActions {
  TOOLS_ACTION_ADD = 'example action add',
}

// Type of your payload object
export type ToolsPayload = {
  name: string;
};

// Types of dispatchers
type ToolsAdd = {
  type: ToolsActions.TOOLS_ACTION_ADD;
  payload: ToolsPayload;
};

// Union of all dispatchers types
export type ToolsActionTypes = ToolsAdd;

// Define all your dispatchers
export const addExampleAction = (payload: ToolsPayload): ToolsActionTypes => ({
  type: ToolsActions.TOOLS_ACTION_ADD,
  payload,
});
