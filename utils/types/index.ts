export type UserInfo = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  bio: string;
};

export type DataTypeAdmin = {
  key: React.Key;
  user_id: string;
  fullName: string;
  role: string;
  department: string;
  email: string;
  major: string;
  moderateStatus: string;
  isVerified: string;
  description: string;
};

export type ColumnItem = {
  user_id: string;
  fullName: string;
  email: string;
  role: string;
  department: string;
  major: string;
  moderateStatus: boolean;
  isVerified: boolean;
  bio: string;
};

export type NotificationItem = {
  notification_id: string;
  posted_user: string;
  title: string;
  content: string;
  image: string;
  created_at: string;
};

export type UserSetting = {
  user_id: string;
  first_name: string;
  last_name: string;
  bio: string;
  department: string;
  major: string;
  position: string;
  role: string;
  image: string;
  created_at: string;
};

export type ProfileData = {
  user_id: string;
  fullName: string;
  email: string;
  bio: string;
  position: string;
  department: string;
  major: string;
  image: string;
  created_at: string;
};
