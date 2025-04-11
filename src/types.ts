export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // Consider using `Date` if working with actual dates
  isCompleted: boolean;
  priority: "low" | "medium" | "high"; // Union type for strict priority values
}

export type TUserInfo = {
  id: string;
  userName: string;
};

export type TUser = {
  users: TUserInfo[];
};

export type TUserDraft = {
  userName: string;
};
