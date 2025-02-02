/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type History = History1;
export type Name = string;
export type Hide = boolean;
export type Description = string;
export type SystemMessage = string;
export type Role = "assistant" | "user" | "system" | "function";
export type Content = string;
export type Name1 = string;
export type Summary = string;
export type Name2 = string;
export type Arguments = string;
export type ChatContext = ChatMessage[];
export type ManageOwnChatContext = boolean;
export type Depth = number;
export type Deleted = boolean;
export type Active = boolean;
export type Logs = string[];
export type Timeline = HistoryNode[];
export type CurrentIndex = number;

/**
 * A history of steps taken and their results
 */
export interface History1 {
  timeline: Timeline;
  current_index: CurrentIndex;
  [k: string]: unknown;
}
/**
 * A point in history, a list of which make up History
 */
export interface HistoryNode {
  step: Step;
  observation?: Observation;
  depth: Depth;
  deleted?: Deleted;
  active?: Active;
  logs?: Logs;
  [k: string]: unknown;
}
export interface Step {
  name?: Name;
  hide?: Hide;
  description?: Description;
  system_message?: SystemMessage;
  chat_context?: ChatContext;
  manage_own_chat_context?: ManageOwnChatContext;
  [k: string]: unknown;
}
export interface ChatMessage {
  role: Role;
  content?: Content;
  name?: Name1;
  summary: Summary;
  function_call?: FunctionCall;
  [k: string]: unknown;
}
export interface FunctionCall {
  name: Name2;
  arguments: Arguments;
  [k: string]: unknown;
}
export interface Observation {
  [k: string]: unknown;
}
