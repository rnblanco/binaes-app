export interface MessagePayload {
    type: string; // "success", "info", "warn" and "error"
    title: string;
    body: string;
}